import React from 'react';

export function Card({
  children,
  className = '',
  as: Component = 'div',
  hover = false,
  ...props
}) {
  return (
    <Component
      className={`bg-cream/70 border border-tan/70 rounded-2xl p-5 sm:p-6 shadow-xs ${
        hover ? 'transition-all duration-200 hover:border-brown-light hover:shadow-md' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
