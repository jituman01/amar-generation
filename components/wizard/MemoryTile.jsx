import React from 'react';
import { ArtIcon } from '@/components/art';
import { Check } from 'lucide-react';

export function MemoryTile({
  memory,
  isSelected,
  onToggle,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onToggle(memory.id)}
      disabled={disabled}
      aria-pressed={isSelected}
      className={`relative min-h-[104px] p-3.5 sm:p-4 rounded-2xl border-2 transition-all duration-200 text-left flex flex-col justify-between select-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-[0.98]'
      } ${
        isSelected
          ? 'bg-cream border-ink shadow-sm'
          : 'bg-paper border-tan/60 hover:border-brown-light hover:bg-cream/30'
      }`}
    >
      {/* Check badge when selected */}
      {isSelected && (
        <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-ink text-paper flex items-center justify-center shadow-xs">
          <Check size={14} strokeWidth={3} />
        </div>
      )}

      {/* Art icon */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 ${
        isSelected ? 'bg-paper text-ink shadow-2xs' : 'bg-cream/60 text-ink'
      }`}>
        <ArtIcon name={memory.art} size={30} />
      </div>

      {/* Label */}
      <div className="font-serif font-bold text-ink text-sm sm:text-base leading-snug pr-4">
        {memory.label}
      </div>
    </button>
  );
}
