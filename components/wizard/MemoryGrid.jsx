import React from 'react';
import { MemoryTile } from './MemoryTile';

export function MemoryGrid({
  memories = [],
  selectedIds = [],
  onToggleMemory,
  maxReached = false,
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-24 sm:mb-28">
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
