import React from 'react';
import { strings } from '@/data/strings';

export function HowItWorks() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-rust mb-2 block">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-ink mb-3">
            {strings.howItWorks.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft">
            {strings.howItWorks.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {strings.howItWorks.steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-cream/50 border border-tan/60 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-ink text-paper font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-xs">
                  {step.number}
                </div>
                <h3 className="text-lg font-serif font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-paper border border-tan text-ink-soft text-xs flex items-center justify-center">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
