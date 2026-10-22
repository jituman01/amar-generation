'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback) {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return () => {};
  }
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getSnapshot() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Hook to detect if user has requested reduced motion safely via useSyncExternalStore.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
