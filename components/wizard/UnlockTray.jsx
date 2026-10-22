import React from 'react';
import { ArtIcon } from '@/components/art';
import { Sparkles } from 'lucide-react';

export function UnlockTray({ unlockedStickers = [] }) {
  if (unlockedStickers.length === 0) return null;

  return (
    <div className="mb-6 p-4 rounded-2xl bg-cream/70 border border-tan/70 shadow-2xs">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-rust" />
        <h4 className="text-sm font-bold text-ink">
          আনলক হওয়া শৈশবের ব্যাজ ({unlockedStickers.length})
        </h4>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
        {unlockedStickers.map((sticker) => (
          <div
            key={sticker.id}
            className="shrink-0 flex items-center gap-2.5 bg-paper border border-tan/60 px-3 py-1.5 rounded-xl shadow-2xs"
          >
            <ArtIcon name={sticker.art} size={32} />
            <div>
              <div className="text-xs font-bold text-ink">{sticker.label}</div>
              <div className="text-[10px] text-ink-soft">{sticker.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
