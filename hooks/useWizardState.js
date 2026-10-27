'use client';

import { useState, useEffect, useMemo, useCallback, useSyncExternalStore } from 'react';
import { clearWizardState, DEFAULT_WIZARD_STATE } from '@/lib/storage';
import { memories } from '@/data/memories';
import { calculateDna } from '@/lib/dna';
import { getUnlockedStickers } from '@/lib/unlocks';
import { quotes } from '@/data/quotes';

function emptySubscribe() {
  return () => {};
}

export function useWizardState() {
  // Safe client hydration check using useSyncExternalStore (no setState in effect)
  const hydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [state, setState] = useState(DEFAULT_WIZARD_STATE);

  const [eraChangeDroppedCount, setEraChangeDroppedCount] = useState(0);

  // Clean any legacy persistent storage on mount
  useEffect(() => {
    clearWizardState();
  }, []);

  // Derived: Available memories for currently selected era
  const availableMemories = useMemo(() => {
    return memories.filter((m) => m.eras.includes(state.eraId));
  }, [state.eraId]);

  // Derived: Selected memory objects
  const selectedMemories = useMemo(() => {
    const availableSet = new Set(availableMemories.map((m) => m.id));
    return memories.filter(
      (m) => state.selectedIds.includes(m.id) && availableSet.has(m.id)
    );
  }, [state.selectedIds, availableMemories]);

  // Derived: Childhood DNA calculation
  const dna = useMemo(() => {
    return calculateDna(state.eraId, state.selectedIds, 5);
  }, [state.eraId, state.selectedIds]);

  // Derived: Unlocked stickers
  const unlockedStickers = useMemo(() => {
    return getUnlockedStickers(state.selectedIds);
  }, [state.selectedIds]);

  // Derived: Current quote
  const currentQuote = useMemo(() => {
    const found = quotes.find((q) => q.id === state.selectedQuoteId);
    return found ? found.text : quotes[0].text;
  }, [state.selectedQuoteId]);

  // Actions
  const setStep = useCallback((step) => {
    setState((prev) => ({ ...prev, step }));
    if (typeof window !== 'undefined') {
      const elem = document.getElementById('create');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const setEra = useCallback((eraId) => {
    setState((prev) => {
      if (prev.eraId === eraId) return prev;

      // Filter selections valid for new era
      const newEraValidSet = new Set(
        memories.filter((m) => m.eras.includes(eraId)).map((m) => m.id)
      );
      const keptIds = prev.selectedIds.filter((id) => newEraValidSet.has(id));
      const dropped = prev.selectedIds.length - keptIds.length;

      if (dropped > 0) {
        setEraChangeDroppedCount(dropped);
      } else {
        setEraChangeDroppedCount(0);
      }

      return {
        ...prev,
        eraId,
        selectedIds: keptIds,
      };
    });
  }, []);

  const toggleMemory = useCallback((memoryId) => {
    setEraChangeDroppedCount(0);
    setState((prev) => {
      const isSelected = prev.selectedIds.includes(memoryId);
      if (isSelected) {
        return {
          ...prev,
          selectedIds: prev.selectedIds.filter((id) => id !== memoryId),
        };
      } else {
        // Max limit is 12
        if (prev.selectedIds.length >= 12) return prev;
        return {
          ...prev,
          selectedIds: [...prev.selectedIds, memoryId],
        };
      }
    });
  }, []);

  const setTemplate = useCallback((templateId) => {
    setState((prev) => ({ ...prev, templateId }));
  }, []);

  const setCustomTitle = useCallback((customTitle) => {
    setState((prev) => ({ ...prev, customTitle: customTitle.slice(0, 60) }));
  }, []);

  const setSelectedQuoteId = useCallback((selectedQuoteId) => {
    setState((prev) => ({ ...prev, selectedQuoteId }));
  }, []);

  const resetAll = useCallback(() => {
    clearWizardState();
    setState(DEFAULT_WIZARD_STATE);
    setEraChangeDroppedCount(0);
    if (typeof window !== 'undefined') {
      const elem = document.getElementById('create');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  return {
    hydrated,
    state,
    availableMemories,
    selectedMemories,
    dna,
    unlockedStickers,
    currentQuote,
    eraChangeDroppedCount,
    setStep,
    setEra,
    toggleMemory,
    setTemplate,
    setCustomTitle,
    setSelectedQuoteId,
    resetAll,
  };
}
