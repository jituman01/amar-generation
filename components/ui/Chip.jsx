import React from 'react';

export function Chip({
  children,
  active = false,
  onClick,
  className = '',
  count,
  icon,
  ...props
}) {
  const isClickable = Boolean(onClick);
  const Component = isClickable ? 'button' : 'span';

  return (
    <Component
      type={isClickable ? 'button' : undefined}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors select-none ${
        active
          ? 'bg-ink text-paper border border-ink shadow-xs'
          : 'bg-cream text-ink-soft border border-tan/60 hover:bg-tan/20 hover:text-ink'
      } ${isClickable ? 'cursor-pointer active:scale-95' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {typeof count === 'number' && (
        <span
          className={`ml-1 text-xs px-1.5 py-0.2 rounded-full ${
            active ? 'bg-paper/20 text-paper' : 'bg-tan/40 text-ink'
          }`}
        >
          {count}
        </span>
      )}
    </Component>
  );
}
