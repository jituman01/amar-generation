'use client';

import React, { useRef, useState } from 'react';
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
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

export function CreateSection() {
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
      <section
        id="create"
        className="w-full py-16 px-4 sm:px-6 lg:px-8 border-t border-tan/60 bg-paper flex items-center justify-center min-h-[420px]"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-tan border-t-ink rounded-full animate-spin" />
          <p className="text-sm font-medium text-ink-soft">স্মৃতি লোড হচ্ছে...</p>
        </div>
      </section>
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
    <section
      id="create"
      className="relative w-full py-12 sm:py-16 md:py-20 border-t border-tan/60 bg-paper scroll-mt-6"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-tan/40">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-tan/60 text-xs font-mono font-semibold tracking-wider text-rust uppercase mb-2.5">
              <Sparkles size={13} className="text-rust" />
              <span>কার্ড তৈরি করুন</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-ink">
              তোমার পছন্দের স্মৃতিগুলো চিহ্নিত করো
            </h2>
            <p className="text-sm sm:text-base text-ink-soft mt-1">
              কমপক্ষে ৩টি এবং সর্বোচ্চ ১২টি স্মৃতি বেছে নাও (কয়েকটি ভিন্ন ক্যাটাগরি থেকে বেছে নিলে DNA আরো নিখুঁত হয়)|
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              type="button"
              onClick={resetAll}
              title={strings.wizard.buttons.reset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-rust/90 hover:text-rust bg-rust/5 hover:bg-rust/10 border border-rust/20 transition-colors cursor-pointer"
            >
              <RefreshCw size={13} />
              <span>{strings.wizard.buttons.reset}</span>
            </button>
          </div>
        </div>

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
          <div className="max-w-5xl mx-auto pb-28 sm:pb-32">
            {/* <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-1.5">
                {strings.wizard.memoryStep.title}
              </h3>
              <p className="text-sm text-ink-soft max-w-md mx-auto">
                {strings.wizard.memoryStep.helper}
              </p>
            </div> */}

            {/* Notification if some selections dropped on era change */}
            {eraChangeDroppedCount > 0 && (
              <div className="mb-6 p-3 rounded-xl bg-tan/20 border border-tan/60 text-xs sm:text-sm text-ink flex items-center gap-2">
                <AlertCircle size={16} className="text-rust shrink-0" />
                <span>
                  {strings.wizard.memoryStep.eraChangedNote} ({eraChangeDroppedCount}টি স্মৃতি অপসারিত)
                </span>
              </div>
            )}

            {/* 2-Column layout: Left = Category Sidebar, Right = Memory Options */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Categories */}
              <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-24 z-10">
                <CategoryTabs
                  activeCategory={activeCategory}
                  onSelectCategory={setActiveCategory}
                  categoryCounts={categoryCounts}
                />
              </div>

              {/* Right Column: Memory Options Grid */}
              <div className="md:col-span-8 lg:col-span-9">
                <MemoryGrid
                  memories={filteredMemories}
                  selectedIds={state.selectedIds}
                  onToggleMemory={toggleMemory}
                  maxReached={state.selectedIds.length >= 12}
                />
              </div>
            </div>

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
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-1.5">
                {strings.wizard.cardStep.title}
              </h3>
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
    </section>
  );
}
