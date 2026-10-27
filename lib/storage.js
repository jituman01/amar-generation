import { eras } from '@/data/eras';
import { memories } from '@/data/memories';

const STORAGE_KEY = 'amar-generation:v1';

export const DEFAULT_WIZARD_STATE = {
  step: 'era', // 'era' | 'memories' | 'dna' | 'card'
  eraId: '2000s',
  selectedIds: [],
  templateId: 'minimal-memory',
  customTitle: '',
  selectedQuoteId: 'default',
};

/**
 * Validate loaded data from storage to prevent crashes from corrupted or stale state.
 */
function sanitizeState(parsed) {
  if (!parsed || typeof parsed !== 'object') {
    return DEFAULT_WIZARD_STATE;
  }

  // Validate era
  const validEraIds = eras.map((e) => e.id);
  const eraId = validEraIds.includes(parsed.eraId) ? parsed.eraId : '2000s';

  // Validate selected memory IDs: only existing ones valid for this era
  const validMemoryIds = new Set(
    memories.filter((m) => m.eras.includes(eraId)).map((m) => m.id)
  );
  const selectedIds = Array.isArray(parsed.selectedIds)
    ? parsed.selectedIds.filter((id) => validMemoryIds.has(id))
    : [];

  // Validate templateId
  const validTemplates = ['minimal-memory', 'retro-paper', 'y2k-pop'];
  const templateId = validTemplates.includes(parsed.templateId)
    ? parsed.templateId
    : 'minimal-memory';

  // Validate step
  const validSteps = ['era', 'memories', 'dna', 'card'];
  const step = validSteps.includes(parsed.step) ? parsed.step : 'era';

  return {
    step,
    eraId,
    selectedIds,
    templateId,
    customTitle: typeof parsed.customTitle === 'string' ? parsed.customTitle.slice(0, 60) : '',
    selectedQuoteId: typeof parsed.selectedQuoteId === 'string' ? parsed.selectedQuoteId : 'default',
  };
}

/**
 * Wizard state loading: persistent storage disabled.
 * Always returns a clean, fresh default state and clears any leftover legacy storage.
 */
export function loadWizardState() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }
  return DEFAULT_WIZARD_STATE;
}

/**
 * Persistence disabled: wizard state is held in-memory for the current session only.
 */
export function saveWizardState() {
  // No-op: do not save data to localStorage
}

/**
 * Reset wizard state in localStorage.
 */
export function clearWizardState() {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear state in localStorage:', error);
  }
}
