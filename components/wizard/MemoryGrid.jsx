import React from 'react';
import { MemoryTile } from './MemoryTile';

export function MemoryGrid({
  memories = [],
  selectedIds = [],
  onToggleMemory,
  maxReached = false,
}) {
  if (memories.length === 0) {
    return (
      <div className="py-12 px-6 text-center bg-cream/30 border border-dashed border-tan/80 rounded-2xl mb-24">
        <p className="text-sm text-ink-soft">এই ক্যাটাগরিতে নির্বাচিত যুগের কোনো স্মৃতি নেই।</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-24 sm:mb-28">
      {memories.map((mem) => {
        const isSelected = selectedIds.includes(mem.id);
        const isDisabled = maxReached && !isSelected;

        return (
          <MemoryTile
            key={mem.id}
            memory={mem}
            isSelected={isSelected}
            onToggle={onToggleMemory}
            disabled={isDisabled}
          />
        );
      })}
    </div>
  );
}
