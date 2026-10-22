import React from 'react';
import { strings } from '@/data/strings';

export function StepChips({ className = '' }) {
  const chips = strings.hero.chips || [
    '১. যুগ বাছো',
    '২. স্মৃতি বেছে নাও',
    '৩. কার্ড ডাউনলোড করো',
  ];

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-1 select-none ${className}`}
      aria-label="Steps overview"
    >
      {chips.map((chip) => (
        <span
          key={chip}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/70 border border-tan/60 text-xs sm:text-[13px] font-medium text-ink-soft shadow-2xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rust/70" />
          <span>{chip}</span>
        </span>
      ))}
    </div>
  );
}
