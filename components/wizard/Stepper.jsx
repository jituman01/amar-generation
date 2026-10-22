import React from 'react';
import { strings } from '@/data/strings';
import { Check } from 'lucide-react';

export function Stepper({ currentStep, onSelectStep, canNavigateTo }) {
  const steps = strings.wizard.steps;
  const stepIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <nav aria-label="Wizard Steps" className="w-full mb-8 sm:mb-10">
      <ol className="flex items-center justify-between relative max-w-2xl mx-auto px-2">
        {/* Progress line behind steps */}
        <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-0.5 bg-tan/40 -z-0" />
        <div
          className="absolute top-1/2 left-6 -translate-y-1/2 h-0.5 bg-ink transition-all duration-300 -z-0"
          style={{
            width: `${Math.max(0, (stepIndex / (steps.length - 1)) * 100)}%`,
          }}
        />

        {steps.map((s, idx) => {
          const isCompleted = idx < stepIndex;
          const isCurrent = s.id === currentStep;
          const isClickable = canNavigateTo ? canNavigateTo(s.id) : isCompleted;

          return (
            <li key={s.id} className="relative z-10 flex flex-col items-center">
              <button
                type="button"
                onClick={() => isClickable && onSelectStep(s.id)}
                disabled={!isClickable && !isCurrent}
                aria-current={isCurrent ? 'step' : undefined}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-serif text-sm font-bold transition-all duration-200 select-none ${
                  isCurrent
                    ? 'bg-ink text-paper ring-4 ring-paper ring-offset-2 ring-offset-cream shadow-sm scale-110'
                    : isCompleted
                    ? 'bg-brown-light text-paper hover:bg-ink cursor-pointer'
                    : 'bg-paper text-ink-soft border border-tan/80 cursor-not-allowed opacity-80'
                }`}
              >
                {isCompleted ? <Check size={16} strokeWidth={3} /> : idx + 1}
              </button>
              <span
                className={`mt-2 text-xs sm:text-sm font-medium transition-colors hidden sm:block ${
                  isCurrent ? 'text-ink font-bold' : isCompleted ? 'text-ink' : 'text-ink-soft/70'
                }`}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
