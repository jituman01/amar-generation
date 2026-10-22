import React from 'react';
import { strings } from '@/data/strings';

export function TemplateSwitcher({ activeTemplateId, onSelectTemplate }) {
  const templates = [
    {
      id: 'minimal-memory',
      label: strings.wizard.cardStep.templates['minimal-memory'],
      themeColor: '#FAF6EF',
      borderColor: '#D9C3A0',
      description: 'শান্ত, মার্জিত ও পরিচ্ছন্ন',
    },
    {
      id: 'retro-paper',
      label: strings.wizard.cardStep.templates['retro-paper'],
      themeColor: '#F3EAD9',
      borderColor: '#B08968',
      description: 'উষ্ণ ডায়েরি ও স্ক্র্যাপবুক',
    },
    {
      id: 'y2k-pop',
      label: strings.wizard.cardStep.templates['y2k-pop'],
      themeColor: '#FAF8F0',
      borderColor: '#3E2C23',
      description: 'রেট্রো কম্পিউটার পপ স্টাইল',
    },
  ];

  return (
    <div className="w-full mb-6">
      <label className="block text-xs font-mono font-semibold text-ink-soft tracking-wider uppercase mb-3 text-center sm:text-left">
        {strings.wizard.cardStep.templatesLabel}
      </label>

      <div className="grid grid-cols-3 gap-3">
        {templates.map((tpl) => {
          const isActive = tpl.id === activeTemplateId;

          return (
            <button
              key={tpl.id}
              type="button"
              onClick={() => onSelectTemplate(tpl.id)}
              aria-pressed={isActive}
              className={`p-3 rounded-2xl border-2 transition-all duration-200 text-left flex flex-col justify-between cursor-pointer active:scale-95 ${
                isActive
                  ? 'border-ink bg-cream shadow-xs ring-2 ring-ink/20'
                  : 'border-tan/60 bg-paper hover:border-brown-light hover:bg-cream/40'
              }`}
            >
              <div
                className="w-full h-8 rounded-lg mb-2 border flex items-center justify-center text-xs font-mono font-bold"
                style={{
                  backgroundColor: tpl.themeColor,
                  borderColor: tpl.borderColor,
                }}
              >
                {isActive ? '✓' : ''}
              </div>

              <div className="font-serif font-bold text-xs sm:text-sm text-ink leading-tight">
                {tpl.label}
              </div>
              <div className="text-[10px] text-ink-soft leading-tight mt-0.5 hidden sm:block">
                {tpl.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
