'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { strings } from '@/data/strings';
import { HeroScene } from './HeroScene';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const prefersReducedMotion = useReducedMotionSafe();

  const handleScrollToCreate = (e) => {
    e?.preventDefault();
    const elem = document.getElementById('create');
    if (elem) {
      elem.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  const textVariants = (delay = 0) =>
    prefersReducedMotion
      ? { initial: {}, animate: {} }
      : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay, ease: 'easeOut' },
      };

  return (
    <section id="home" className="relative min-h-screen min-h-[100svh] w-full flex flex-col justify-start sm:justify-center items-center overflow-hidden bg-paper text-ink select-none">
      {/* 1. Scenery fully visible in the background */}
      <HeroScene />

      {/* Subtle soft top vignette on mobile for crystal-clear readability without blocking scenery */}
      <div className="absolute top-0 left-0 right-0 h-72 sm:h-96 bg-gradient-to-b from-paper/35 via-paper/10 to-transparent pointer-events-none z-10 sm:hidden" />

      {/* 2. Text and buttons overlaid directly over the scenery */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 xs:pt-48 sm:pt-16 md:pt-20 pb-8 sm:pb-36 md:pb-44 flex flex-col items-center justify-center text-center pointer-events-auto">
        <div className="w-full max-w-lg sm:max-w-3xl flex flex-col items-center justify-center text-center mx-auto">
          {/* H1 Title */}
          <motion.h1
            {...textVariants(0.12)}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-ink leading-[1.28] tracking-tight mb-3 sm:mb-4 text-center max-w-md sm:max-w-none mx-auto"
            style={{ fontFamily: 'var(--font-bengali-serif)' }}
          >
            {strings.hero.title}
          </motion.h1>

          {/* Body Text */}
          <motion.p
            {...textVariants(0.2)}
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-ink-soft leading-relaxed mb-4 sm:mb-7 max-w-xs xs:max-w-sm sm:max-w-xl text-center mx-auto"
          >
            {strings.hero.body}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...textVariants(0.28)}
            className="w-full flex flex-row items-center justify-center gap-2.5 sm:gap-4 mb-3.5 sm:mb-5 mx-auto max-w-xs xs:max-w-sm sm:max-w-none text-center"
          >
            <a
              href="#create"
              onClick={handleScrollToCreate}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center font-medium rounded-xl text-xs xs:text-sm sm:text-lg px-4 sm:px-8 py-2.5 sm:py-3.5 min-h-[44px] sm:min-h-[50px] bg-ink text-paper hover:bg-ink-soft transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] text-center cursor-pointer whitespace-nowrap"
            >
              {strings.hero.primaryCta}
            </a>

            <button
              type="button"
              onClick={handleScrollToCreate}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center font-medium rounded-xl text-xs xs:text-sm sm:text-base px-3.5 sm:px-6 py-2.5 sm:py-3.5 min-h-[44px] sm:min-h-[50px] bg-cream/90 backdrop-blur-xs text-ink border border-tan hover:bg-cream transition-all duration-200 active:scale-[0.98] cursor-pointer gap-1.5 sm:gap-2 shadow-2xs whitespace-nowrap"
            >
              <span>{strings.hero.secondaryCta}</span>
              <ArrowDown size={15} className="text-ink-soft" />
            </button>
          </motion.div>

          {/* Small line */}
          <motion.p
            {...textVariants(0.36)}
            className="text-[11px] sm:text-[13px] text-ink-soft/70 font-medium text-center mx-auto tracking-wide"
          >
            {strings.hero.subtext}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
