'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook to pause animations when the container element is offscreen or document is hidden.
 */
export function useInViewPause() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let inView = true;
    let docVisible = typeof document !== 'undefined' ? !document.hidden : true;

    const updatePausedState = () => {
      setIsPaused(!inView || !docVisible);
    };

    // 1. IntersectionObserver for viewport visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updatePausedState();
      },
      { threshold: 0.05 }
    );

    observer.observe(element);

    // 2. Page Visibility API for tab switching
    const handleVisibilityChange = () => {
      docVisible = !document.hidden;
      updatePausedState();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { containerRef, isPaused };
}
