'use client';

import React from 'react';
import { categories } from '@/data/categories';
import { strings } from '@/data/strings';
import { Gamepad2, Tv, IceCream, Radio, Sun, Sparkles } from 'lucide-react';

const categoryIcons = {
  all: Sparkles,
  games: Gamepad2,
  cartoons: Tv,
  food: IceCream,
  gadgets: Radio,
  lifestyle: Sun,
};

export function CategoryTabs({
  activeCategory,
  onSelectCategory,
  categoryCounts = {},
}) {
  const allCount = Object.values(categoryCounts).reduce((acc, curr) => acc + curr, 0);

  const tabs = [
    { id: 'all', label: strings.wizard.memoryStep.allCategory, count: allCount },
    ...categories.map((cat) => ({
      id: cat.id,
      label: cat.label,
      count: categoryCounts[cat.id] || 0,
    })),
  ];

  return (
    <aside aria-label="Category Navigation" className="w-full">
      {/* Sidebar navigation container: sticky vertical list on md+, horizontal scroll on mobile */}
      <div className="bg-cream/50 border border-tan/70 rounded-2xl p-2 sm:p-3 md:p-3.5 shadow-2xs backdrop-blur-xs">
        <div className="hidden md:flex items-center justify-between pb-2.5 mb-2 border-b border-tan/60 px-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rust">
            ক্যাটাগরি
          </span>
          {allCount > 0 && (
            <span className="text-[11px] font-bold text-ink bg-tan/40 px-2 py-0.5 rounded-full">
              {allCount} নির্বাচিত
            </span>
          )}
        </div>

        <nav className="flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-visible no-scrollbar py-0.5">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            const Icon = categoryIcons[tab.id] || Sparkles;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectCategory(tab.id)}
                className={`shrink-0 md:shrink md:w-full inline-flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 select-none cursor-pointer text-left ${
                  isActive
                    ? 'bg-ink text-paper shadow-xs font-semibold'
                    : 'bg-paper/80 md:bg-transparent text-ink-soft hover:bg-paper hover:text-ink border border-tan/40 md:border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    size={16}
                    className={`shrink-0 transition-colors ${
                      isActive ? 'text-paper' : 'text-rust'
                    }`}
                  />
                  <span className="truncate">{tab.label}</span>
                </div>

                {tab.count > 0 && (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold leading-none shrink-0 ${
                      isActive
                        ? 'bg-paper/20 text-paper'
                        : 'bg-tan/50 text-ink'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
