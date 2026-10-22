import React from 'react';
import { categories } from '@/data/categories';
import { strings } from '@/data/strings';

export function CategoryTabs({
  activeCategory,
  onSelectCategory,
  categoryCounts = {},
}) {
  const allCount = Object.values(categoryCounts).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="w-full mb-6">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 -mx-1 snap-x scroll-smooth">
        {/* All category tab */}
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          className={`shrink-0 snap-start inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 select-none cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-ink text-paper shadow-xs'
              : 'bg-cream text-ink-soft hover:bg-tan/20 hover:text-ink border border-tan/60'
          }`}
        >
          <span>{strings.wizard.memoryStep.allCategory}</span>
          {allCount > 0 && (
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === 'all' ? 'bg-paper/20 text-paper' : 'bg-tan/40 text-ink'
              }`}
            >
              {allCount}
            </span>
          )}
        </button>

        {/* Specific category tabs */}
        {categories.map((cat) => {
          const count = categoryCounts[cat.id] || 0;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 snap-start inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 select-none cursor-pointer ${
                isActive
                  ? 'bg-ink text-paper shadow-xs'
                  : 'bg-cream text-ink-soft hover:bg-tan/20 hover:text-ink border border-tan/60'
              }`}
            >
              <span>{cat.label}</span>
              {count > 0 && (
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-paper/20 text-paper' : 'bg-tan/40 text-ink'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
