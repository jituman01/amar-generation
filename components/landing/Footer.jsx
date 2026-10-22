import React from 'react';
import { strings } from '@/data/strings';

export function Footer() {
  return (
    <footer className="mt-auto py-10 bg-cream/80 border-t border-tan/60 text-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h3 className="font-serif font-bold text-xl text-ink mb-1">
          {strings.footer.title}
        </h3>
        <p className="text-sm text-ink-soft mb-4">
          {strings.footer.tagline}
        </p>

        <div className="max-w-md bg-paper/70 border border-tan/40 rounded-xl px-4 py-2 text-xs text-ink-soft mb-6">
          {strings.footer.disclaimer}
        </div>

        <p className="text-xs text-ink-soft/70">
          {strings.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
