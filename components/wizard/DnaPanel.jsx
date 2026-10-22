'use client';

import React, { useState } from 'react';
import { strings } from '@/data/strings';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { UnlockTray } from './UnlockTray';
import { Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export function DnaPanel({
  dna,
  unlockedStickers = [],
  onNext,
  onPrev,
}) {
  const [showFormulaExplainer, setShowFormulaExplainer] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-tan/60 text-xs font-mono font-semibold tracking-wider text-rust uppercase mb-2">
          <Sparkles size={13} className="text-rust" />
          <span>শৈশব ব্যক্তিত্ব</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-2">
          {strings.wizard.dnaStep.title}
        </h2>
        <p className="text-sm sm:text-base text-ink-soft max-w-lg mx-auto">
          {strings.wizard.dnaStep.subtitle}
        </p>
      </div>

      {/* Main DNA Card */}
      <div className="bg-cream/50 border border-tan/80 rounded-3xl p-6 sm:p-8 mb-6 shadow-sm">
        {/* Personalized generated description */}
        <div className="bg-paper border border-tan/60 rounded-2xl p-5 sm:p-6 mb-6 shadow-2xs">
          <h3 className="font-serif font-bold text-ink text-base sm:text-lg mb-2 flex items-center gap-2">
            <span>তোমার শৈশব রূপরেখা</span>
            {dna.topTrait && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rust/10 text-rust font-sans font-semibold">
                {dna.topTrait.label}
              </span>
            )}
          </h3>
          <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
            {dna.description}
          </p>
        </div>

        {/* Trait Bars */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-mono font-semibold text-ink-soft tracking-wider uppercase">
            প্রধান চারিত্রিক বৈশিষ্ট্যসমূহ
          </h4>

          {dna.traitScores.map((scoreItem) => (
            <div key={scoreItem.id} className="bg-paper/70 p-3.5 rounded-xl border border-tan/40">
              <ProgressBar
                label={scoreItem.trait.label}
                value={scoreItem.score}
                max={100}
                color={scoreItem.trait.color || '#B08968'}
                valueText={`${scoreItem.score}%`}
              />
              <p className="text-xs text-ink-soft/80 mt-1">
                {scoreItem.trait.shortPhrase}
              </p>
            </div>
          ))}
        </div>

        {/* Unlocked badges tray */}
        <UnlockTray unlockedStickers={unlockedStickers} />

        {/* Note: "এটা শুধু মজার জন্য।" */}
        <div className="text-center text-xs text-ink-soft/80 italic mb-4">
          * {strings.wizard.dnaStep.funNotice}
        </div>

        {/* Expandable "কীভাবে হিসাব হলো?" */}
        <div className="border-t border-tan/40 pt-4">
          <button
            type="button"
            onClick={() => setShowFormulaExplainer((prev) => !prev)}
            className="flex items-center justify-between w-full text-xs font-medium text-ink-soft hover:text-ink transition-colors cursor-pointer py-1"
          >
            <span className="flex items-center gap-1.5">
              <HelpCircle size={14} className="text-brown-light" />
              <span>{strings.wizard.dnaStep.explainerToggle}</span>
            </span>
            {showFormulaExplainer ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showFormulaExplainer && (
            <div className="mt-2 text-xs text-ink-soft/90 bg-paper/60 p-3.5 rounded-xl border border-tan/40 leading-relaxed space-y-1">
              <p>{strings.wizard.dnaStep.explainerText}</p>
              <p className="text-[11px] text-ink-soft/70">
                সূত্র: score = 40 + 60 * min(1, raw / (0.5 * max)) (যেখানে অন্তত ১টি স্মৃতি ট্রেইটে পয়েন্ট যোগ করেছে)।
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-3 min-h-[48px] rounded-xl font-medium text-base bg-cream border border-tan text-ink hover:bg-tan/30 transition-all duration-200 cursor-pointer active:scale-95"
        >
          ← {strings.wizard.buttons.prev}
        </button>

        <button
          type="button"
          onClick={onNext}
          className="px-8 py-3 min-h-[48px] rounded-xl font-medium text-base bg-ink text-paper hover:bg-ink-soft transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
        >
          {strings.wizard.buttons.createCard} →
        </button>
      </div>
    </div>
  );
}
