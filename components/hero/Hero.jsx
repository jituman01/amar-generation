'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { strings } from '@/data/strings';
import { HeroScene } from './HeroScene';
import { StepChips } from './StepChips';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { Sparkles, ArrowDown } from 'lucide-react';

export function Hero() {
  const prefersReducedMotion = useReducedMotionSafe();

  const handleScrollToMemories = (e) => {
    e.preventDefault();
    const elem = document.getElementById('memories-preview');
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
    <section className="relative min-h-screen min-h-[100svh] w-full flex flex-col justify-start sm:justify-center items-center overflow-hidden bg-paper text-ink select-none">
      {/* 1. Scenery fully visible in the background */}
      <HeroScene />

      {/* 2. Text and buttons overlaid directly over the scenery */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-10 pb-32 sm:pb-44 flex flex-col items-center text-center pointer-events-auto">
        <div className="max-w-2xl sm:max-w-3xl flex flex-col items-center text-center">
          {/* Eyebrow */}
          {/* <motion.div
            {...textVariants(0.05)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream/90 backdrop-blur-xs border border-tan/70 text-xs font-mono font-semibold tracking-wider text-rust uppercase mb-4 sm:mb-5 shadow-2xs"
          >
            <Sparkles size={13} className="text-rust" />
            <span>{strings.hero.eyebrow}</span>
          </motion.div> */}

          {/* H1 Title */}
          <motion.h1
            {...textVariants(0.12)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-ink leading-[1.25] tracking-tight mb-4 sm:mb-5 text-center"
            style={{ fontFamily: 'var(--font-bengali-serif)' }}
          >
            {strings.hero.title}
          </motion.h1>

          {/* Body Text */}
          <motion.p
            {...textVariants(0.2)}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-ink-soft leading-relaxed mb-6 sm:mb-8 max-w-xl text-center mx-auto"
          >
            {strings.hero.body}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...textVariants(0.28)}
            className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6 mx-auto"
          >
            <Link
              href="/create"
              className="w-full sm:w-auto inline-flex items-center justify-center font-medium rounded-xl text-base sm:text-lg px-8 py-3.5 min-h-[50px] bg-ink text-paper hover:bg-ink-soft transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-center cursor-pointer"
            >
              {strings.hero.primaryCta}
            </Link>

            <button
              type="button"
              onClick={handleScrollToMemories}
              className="w-full sm:w-auto inline-flex items-center justify-center font-medium rounded-xl text-sm sm:text-base px-6 py-3.5 min-h-[50px] bg-cream/90 backdrop-blur-xs text-ink border border-tan hover:bg-cream transition-all duration-200 active:scale-[0.98] cursor-pointer gap-2 shadow-2xs"
            >
              <span>{strings.hero.secondaryCta}</span>
              <ArrowDown size={16} className="text-ink-soft" />
            </button>
          </motion.div>

          {/* Step Chips: ১. যুগ বাছো · ২. স্মৃতি বেছে নাও · ৩. কার্ড ডাউনলোড করো */}
          {/* <motion.div {...textVariants(0.35)} className="mb-4 w-full flex justify-center">
            <StepChips className="justify-center" />
          </motion.div> */}

          {/* Small line */}
          <motion.p
            {...textVariants(0.4)}
            className="text-xs sm:text-[13px] text-ink-soft/80 font-medium text-center mx-auto"
          >
            {strings.hero.subtext}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
