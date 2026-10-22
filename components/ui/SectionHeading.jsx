import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end',
  }[align] || 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col max-w-2xl mb-8 sm:mb-12 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-rust mb-2 font-mono">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-ink leading-tight tracking-tight mb-3">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
