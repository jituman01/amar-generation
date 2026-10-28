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
        block: 'start',
      });
    }
  };

  const textVariants = (delay = 0) =>
    prefersReducedMotion
      ? {
          initial: {},
          animate: {},
        }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.5,
            delay,
            ease: 'easeOut',
          },
        };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[72vh] xs:min-h-[78vh] sm:min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-paper text-ink select-none"
    >
      {/* Background scenery */}
      <HeroScene />

      {/* Soft top vignette on mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-paper/35 via-paper/10 to-transparent sm:h-96 sm:hidden"
      />

      {/* Main content */}
      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-3 py-3 text-center sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center text-center sm:max-w-3xl">

          {/* Heading */}
          <motion.h1
            {...textVariants(0.12)}
            className="mx-auto mb-1 w-full max-w-md text-center font-serif text-2xl font-bold leading-[1.2] tracking-tight text-ink xs:text-3xl sm:mb-4 sm:max-w-none sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            style={{ fontFamily: 'var(--font-bengali-serif)' }}
          >
            {strings.hero.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            {...textVariants(0.2)}
            className="mx-auto mb-1.5 w-full max-w-xs text-center text-xs leading-[1.35] text-ink-soft xs:max-w-sm xs:text-sm sm:mb-7 sm:max-w-xl sm:text-base md:text-lg lg:text-xl"
          >
            {strings.hero.body}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...textVariants(0.28)}
            className="mx-auto mb-1 flex w-full max-w-[320px] flex-row items-center justify-center gap-1.5 text-center sm:mb-5 sm:max-w-none sm:gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#create"
              onClick={handleScrollToCreate}
              className="inline-flex min-h-[30px] min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-center text-[11px] font-medium text-paper shadow-sm transition-all duration-200 hover:bg-ink-soft hover:shadow-md active:scale-[0.98] cursor-pointer xs:min-h-[34px] xs:px-3 xs:py-1.5 xs:text-xs sm:min-h-[50px] sm:flex-initial sm:rounded-xl sm:px-8 sm:py-3.5 sm:text-lg"
            >
              {strings.hero.primaryCta}
            </a>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={handleScrollToCreate}
              className="inline-flex min-h-[30px] min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-tan bg-cream/90 px-2 py-1 text-center text-[11px] font-medium text-ink shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-cream active:scale-[0.98] cursor-pointer xs:min-h-[34px] xs:gap-1.5 xs:px-3 xs:py-1.5 xs:text-xs sm:min-h-[50px] sm:flex-initial sm:rounded-xl sm:gap-2 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <span>{strings.hero.secondaryCta}</span>
              <ArrowDown
                size={14}
                className="shrink-0 text-ink-soft"
                aria-hidden="true"
              />
            </button>
          </motion.div>

          {/* Supporting text */}
          <motion.p
            {...textVariants(0.36)}
            className="mx-auto w-full text-center text-[10px] font-medium leading-tight tracking-wide text-ink-soft/70 sm:text-[13px]"
          >
            {strings.hero.subtext}
          </motion.p>

        </div>
      </div>
    </section>
  );
}
