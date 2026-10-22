'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useWizardState } from '@/hooks/useWizardState';
import { Stepper } from '@/components/wizard/Stepper';
import { EraSelector } from '@/components/wizard/EraSelector';
import { CategoryTabs } from '@/components/wizard/CategoryTabs';
import { MemoryGrid } from '@/components/wizard/MemoryGrid';
import { SelectionBar } from '@/components/wizard/SelectionBar';
import { DnaPanel } from '@/components/wizard/DnaPanel';
import { TemplateSwitcher } from '@/components/card/TemplateSwitcher';
import { CardFrame } from '@/components/card/CardFrame';
import { DownloadControls } from '@/components/card/DownloadControls';
import { eras } from '@/data/eras';
import { strings } from '@/data/strings';
import { categories } from '@/data/categories';
import { ArrowLeft, RefreshCw, AlertCircle } from 'lucide-react';

export default function WizardPage() {
  const {
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
  } = useWizardState();

  const [activeCategory, setActiveCategory] = useState('all');
  const cardNodeRef = useRef(null);

  // If still hydrating from localStorage, show clean skeleton
  if (!hydrated) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-tan border-t-ink rounded-full animate-spin" />
          <p className="text-sm font-medium text-ink-soft">লোড হচ্ছে...</p>
        </div>
      </main>
    );
  }

  // Filter memories by active category
  const filteredMemories =
    activeCategory === 'all'
      ? availableMemories
      : availableMemories.filter((m) => m.category === activeCategory);

  // Count selections per category
  const categoryCounts = {};
  categories.forEach((cat) => {
    categoryCounts[cat.id] = selectedMemories.filter((m) => m.category === cat.id).length;
  });

  // Current era object
  const currentEra = eras.find((e) => e.id === state.eraId) || eras[1];

  // Prepared data object for card templates
  const cardData = {
    title: state.customTitle || 'আমার ছোটবেলার ছোট্ট একটা টুকরো',
    era: currentEra,
    memories: selectedMemories,
    dnaScores: dna.traitScores,
    topTrait: dna.topTrait,
    stickers: unlockedStickers,
    quote: currentQuote,
  };

  const canNavigateTo = (stepId) => {
    if (stepId === 'era') return true;
    if (stepId === 'memories') return Boolean(state.eraId);
    if (stepId === 'dna') return state.selectedIds.length >= 3;
    if (stepId === 'card') return state.selectedIds.length >= 3;
    return false;
  };

  return (
    <main className="min-h-screen bg-paper text-ink flex flex-col">
      {/* Top Header */}
      <header className="border-b border-tan/60 bg-paper/90 backdrop-blur-md sticky top-0 z-30 py-3.5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{strings.wizard.buttons.backToHome}</span>
            <span className="sm:hidden">হোম</span>
          </Link>

          <Link href="/" className="font-serif font-bold text-lg text-ink">
            Amar Generation
          </Link>

          <button
            type="button"
            onClick={resetAll}
            title={strings.wizard.buttons.reset}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-rust/80 hover:text-rust transition-colors cursor-pointer"
          >
            <RefreshCw size={13} />
            <span className="hidden sm:inline">{strings.wizard.buttons.reset}</span>
          </button>
        </div>
      </header>

      {/* Wizard Body */}
      <div className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Stepper */}
        <Stepper
          currentStep={state.step}
          onSelectStep={setStep}
          canNavigateTo={canNavigateTo}
        />

        {/* Step 1: Era Selector */}
        {state.step === 'era' && (
          <EraSelector
            selectedEraId={state.eraId}
            onSelectEra={setEra}
            onNext={() => setStep('memories')}
          />
        )}

        {/* Step 2: Memory Selector */}
        {state.step === 'memories' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-1.5">
                {strings.wizard.memoryStep.title}
              </h2>
              <p className="text-sm text-ink-soft max-w-md mx-auto">
                {strings.wizard.memoryStep.helper}
              </p>
            </div>

            {/* Notification if some selections dropped on era change */}
            {eraChangeDroppedCount > 0 && (
              <div className="mb-4 p-3 rounded-xl bg-tan/20 border border-tan/60 text-xs sm:text-sm text-ink flex items-center gap-2">
                <AlertCircle size={16} className="text-rust shrink-0" />
                <span>
                  {strings.wizard.memoryStep.eraChangedNote} ({eraChangeDroppedCount}টি স্মৃতি অপসারিত)
                </span>
              </div>
            )}

            {/* Category tabs */}
            <CategoryTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              categoryCounts={categoryCounts}
            />

            {/* Memory grid */}
            <MemoryGrid
              memories={filteredMemories}
              selectedIds={state.selectedIds}
              onToggleMemory={toggleMemory}
              maxReached={state.selectedIds.length >= 12}
            />

            {/* Sticky bottom SelectionBar */}
            <SelectionBar
              selectedCount={state.selectedIds.length}
              minCount={3}
              maxCount={12}
              onNext={() => setStep('dna')}
              onPrev={() => setStep('era')}
            />
          </div>
        )}

        {/* Step 3: DNA Panel */}
        {state.step === 'dna' && (
          <DnaPanel
            dna={dna}
            unlockedStickers={unlockedStickers}
            onNext={() => setStep('card')}
            onPrev={() => setStep('memories')}
          />
        )}

        {/* Step 4: Card Generation & Customization */}
        {state.step === 'card' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-1.5">
                {strings.wizard.cardStep.title}
              </h2>
              <p className="text-sm text-ink-soft">
                {strings.wizard.cardStep.subtitle}
              </p>
            </div>

            {/* Template Switcher */}
            <TemplateSwitcher
              activeTemplateId={state.templateId}
              onSelectTemplate={setTemplate}
            />

            {/* Card Preview and Controls (2 columns on lg, 1 column on mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              {/* Card Canvas Preview (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <CardFrame
                  templateId={state.templateId}
                  data={cardData}
                  cardRef={cardNodeRef}
                />
              </div>

              {/* Download & Customization Controls (5 cols) */}
              <div className="lg:col-span-5">
                <DownloadControls
                  cardRef={cardNodeRef}
                  customTitle={state.customTitle}
                  onUpdateTitle={setCustomTitle}
                  selectedQuoteId={state.selectedQuoteId}
                  onSelectQuote={setSelectedQuoteId}
                  onPrev={() => setStep('memories')}
                  onReset={resetAll}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
