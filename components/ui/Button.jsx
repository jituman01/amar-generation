import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98] cursor-pointer';

  const sizeStyles = {
    sm: 'text-sm px-3.5 py-2 min-h-[40px] gap-1.5',
    md: 'text-base px-5 py-3 min-h-[48px] gap-2',
    lg: 'text-lg px-7 py-3.5 min-h-[52px] gap-2.5',
  }[size] || 'text-base px-5 py-3 min-h-[48px] gap-2';

  const variantStyles = {
    primary:
      'bg-ink text-paper hover:bg-ink-soft shadow-xs active:bg-ink',
    secondary:
      'bg-cream text-ink border border-tan hover:bg-tan/30 hover:border-brown-light',
    ghost:
      'bg-transparent text-ink hover:bg-cream/60',
    outline:
      'bg-transparent border border-tan text-ink hover:bg-cream hover:border-ink',
    rust:
      'bg-rust text-paper hover:opacity-90 shadow-xs',
  }[variant] || 'bg-ink text-paper hover:bg-ink-soft';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
