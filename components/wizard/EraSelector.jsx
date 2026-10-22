import React from 'react';
import { eras } from '@/data/eras';
import { strings } from '@/data/strings';
import { CrtTvArt, KeypadPhoneArt, SmartphoneGamesArt } from '@/components/art';
import { Check } from 'lucide-react';

export function EraSelector({ selectedEraId, onSelectEra, onNext }) {
  const getEraIllustration = (eraId) => {
    switch (eraId) {
      case '1990s':
        return <CrtTvArt size={48} className="text-ink" />;
      case '2000s':
        return <KeypadPhoneArt size={48} className="text-rust" />;
      case '2010s':
        return <SmartphoneGamesArt size={48} className="text-brown-light" />;
      default:
        return <CrtTvArt size={48} className="text-ink" />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-2">
          {strings.wizard.eraStep.title}
        </h2>
        <p className="text-sm sm:text-base text-ink-soft max-w-lg mx-auto">
          {strings.wizard.eraStep.helper}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {eras.map((era) => {
          const isSelected = era.id === selectedEraId;
          return (
            <button
              key={era.id}
              type="button"
              onClick={() => onSelectEra(era.id)}
              aria-pressed={isSelected}
              className={`relative text-left p-5 sm:p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-cream border-ink shadow-md scale-[1.02]'
                  : 'bg-paper border-tan/60 hover:border-brown-light hover:bg-cream/40'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center shadow-xs">
                  <Check size={16} strokeWidth={3} />
                </div>
              )}

              <div>
                <div className="w-14 h-14 rounded-xl bg-paper/80 border border-tan/40 flex items-center justify-center mb-4">
                  {getEraIllustration(era.id)}
                </div>

                <div className="text-xs font-mono font-semibold text-rust tracking-wider uppercase mb-1">
                  {era.years}
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-ink mb-2">
                  {era.label}
                </h3>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-4">
                  {era.blurb}
                </p>
              </div>

              <div className="pt-3 border-t border-tan/30 text-xs font-medium text-ink-soft/80">
                {era.summary}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!selectedEraId}
          className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] rounded-xl font-medium text-base bg-ink text-paper hover:bg-ink-soft transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer"
        >
          {strings.wizard.buttons.next} →
        </button>
      </div>
    </div>
  );
}
