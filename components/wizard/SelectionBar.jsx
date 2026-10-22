import React from 'react';
import { strings } from '@/data/strings';
import { Sparkles, AlertCircle } from 'lucide-react';

export function SelectionBar({
  selectedCount = 0,
  minCount = 3,
  maxCount = 12,
  onNext,
  onPrev,
}) {
  const isValid = selectedCount >= minCount;
  const isMax = selectedCount >= maxCount;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur-md border-t border-tan/80 py-3 sm:py-4 px-4 sm:px-6 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Count and status */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-cream border border-tan flex items-center justify-center font-bold text-ink text-sm">
              {selectedCount}
            </span>
            <span className="text-sm font-medium text-ink">
              {strings.wizard.memoryStep.selectionCount(selectedCount)}
            </span>
          </div>

          {/* Warnings or helper text */}
          {!isValid ? (
            <span className="text-xs text-rust flex items-center gap-1 font-medium">
              <AlertCircle size={14} />
              <span>(কমপক্ষে ৩টি প্রয়োজন)</span>
            </span>
          ) : isMax ? (
            <span className="text-xs text-brown-light flex items-center gap-1 font-medium">
              <Sparkles size={14} />
              <span>{strings.wizard.memoryStep.maxNotice}</span>
            </span>
          ) : null}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onPrev}
            className="flex-1 sm:flex-none px-4 py-2.5 min-h-[46px] rounded-xl text-sm font-medium bg-cream border border-tan text-ink hover:bg-tan/30 transition-all duration-200 cursor-pointer active:scale-95"
          >
            ← {strings.wizard.buttons.prev}
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={!isValid}
            className={`flex-1 sm:flex-none px-6 py-2.5 min-h-[46px] rounded-xl text-sm font-medium transition-all duration-200 shadow-xs select-none ${
              isValid
                ? 'bg-ink text-paper hover:bg-ink-soft cursor-pointer active:scale-95'
                : 'bg-tan/40 text-ink-soft/60 cursor-not-allowed opacity-60'
            }`}
          >
            {strings.wizard.buttons.next} →
          </button>
        </div>
      </div>
    </div>
  );
}
