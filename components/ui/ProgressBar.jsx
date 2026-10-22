import React from 'react';

export function ProgressBar({
  value = 0,
  max = 100,
  label,
  valueText,
  color = '#B08968',
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={`w-full ${className}`}>
      {(label || valueText) && (
        <div className="flex justify-between items-center text-sm mb-1.5 font-medium text-ink">
          <span>{label}</span>
          <span className="text-ink-soft text-xs">{valueText || `${percentage}%`}</span>
        </div>
      )}
      <div className="w-full h-3 bg-tan/30 rounded-full overflow-hidden p-0.5 border border-tan/50">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
