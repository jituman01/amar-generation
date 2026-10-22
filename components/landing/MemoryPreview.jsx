'use client';

import React from 'react';
import Link from 'next/link';
import { strings } from '@/data/strings';
import { memories } from '@/data/memories';
import { ArtIcon } from '@/components/art';
import { ArrowRight, Sparkles } from 'lucide-react';

export function MemoryPreview() {
  const featuredIds = [
    'cricket',
    'marbles',
    'doraemon',
    'tom-jerry',
    'icecream',
    'fuchka',
    'keypad-phone',
    'crt-tv',
  ];

  const previewItems = memories.filter((m) => featuredIds.includes(m.id));

  return (
    <section id="memories-preview" className="py-12 sm:py-16 bg-cream/40 border-y border-tan/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-tan/60 text-xs font-mono font-semibold tracking-wider text-rust uppercase mb-3">
            <Sparkles size={13} className="text-rust" />
            <span>স্মৃতির অ্যালবাম</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-ink mb-3">
            {strings.memoryPreview.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft">
            {strings.memoryPreview.subheading}
          </p>
        </div>

        {/* 4 columns on desktop, 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="bg-paper border border-tan/60 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-xs hover:border-brown-light transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-cream/60 flex items-center justify-center text-ink mb-3">
                <ArtIcon name={item.art} size={36} />
              </div>
              <h3 className="font-serif font-semibold text-ink text-sm sm:text-base mb-1">
                {item.label}
              </h3>
              <span className="text-xs text-ink-soft/80">
                {item.eras.length === 3 ? 'সকল যুগের প্রিয়' : 'নস্টালজিক মুহূর্ত'}
              </span>
            </div>
          ))}
        </div>

        {/* CTA to wizard */}
        <div className="text-center">
          <Link
            href="/create"
            className="inline-flex items-center justify-center gap-2 font-medium rounded-xl text-base px-6 py-3 min-h-[48px] bg-ink text-paper hover:bg-ink-soft transition-all duration-200 shadow-xs active:scale-[0.98]"
          >
            <span>{strings.memoryPreview.exploreMore}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
