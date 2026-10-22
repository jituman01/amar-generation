'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import {
  CrtTvArt,
  CricketArt,
  MarblesArt,
  LatimArt,
  KeypadPhoneArt,
  IceCreamArt,
  PaperTape,
} from '@/components/art';

export function HeroCollage() {
  const prefersReducedMotion = useReducedMotionSafe();

  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: 'easeOut' },
      };

  return (
    <div className="relative w-full aspect-4/3 max-h-[380px] sm:max-h-[440px] rounded-3xl bg-cream/40 border border-tan/60 p-4 sm:p-6 overflow-hidden shadow-sm select-none">
      {/* Background warm grain pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#B08968_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Frame 1: Vintage TV (top-left) */}
      <motion.div
        {...animationProps}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="absolute top-4 left-4 sm:top-8 sm:left-6 w-32 sm:w-40 bg-paper p-3 rounded-xl border border-tan shadow-xs -rotate-4 hover:rotate-0 transition-transform duration-300"
      >
        <PaperTape className="absolute -top-2 left-6 w-14 -rotate-2" />
        <div className="bg-cream/60 rounded-lg p-2.5 flex items-center justify-center text-ink">
          <CrtTvArt size={48} />
        </div>
        <p className="text-[11px] sm:text-xs font-serif font-medium text-ink-soft text-center mt-1.5">
          শুক্রবার সকালের কার্টুন
        </p>
      </motion.div>

      {/* Frame 2: Cricket Polaroid (top-right) */}
      <motion.div
        {...animationProps}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute top-6 right-4 sm:top-6 sm:right-8 w-34 sm:w-44 bg-paper p-3 pb-4 rounded-xl border border-tan shadow-xs rotate-5 hover:rotate-0 transition-transform duration-300"
      >
        <div className="bg-[#FAF2E4] rounded-lg p-3 flex items-center justify-center text-rust">
          <CricketArt size={50} />
        </div>
        <p className="text-[11px] sm:text-xs font-serif font-medium text-ink text-center mt-2">
          বিকেলের পাড়া ক্রিকেট
        </p>
      </motion.div>

      {/* Frame 3: Keypad Phone (bottom-left) */}
      <motion.div
        {...animationProps}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute bottom-5 left-8 sm:bottom-6 sm:left-14 w-32 sm:w-38 bg-paper p-2.5 rounded-xl border border-tan shadow-xs rotate-3 hover:rotate-0 transition-transform duration-300"
      >
        <div className="bg-cream/70 rounded-lg p-2.5 flex items-center justify-center text-ink-soft">
          <KeypadPhoneArt size={44} />
        </div>
        <p className="text-[10px] sm:text-[11px] font-sans font-medium text-ink-soft text-center mt-1.5">
          স্নেক গেমের রেকর্ড
        </p>
      </motion.div>

      {/* Frame 4: Ice cream & Marbles Scrap (bottom-right / center) */}
      <motion.div
        {...animationProps}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute bottom-4 right-6 sm:bottom-8 sm:right-12 w-36 sm:w-46 bg-paper p-3 rounded-xl border border-tan shadow-xs -rotate-3 hover:rotate-0 transition-transform duration-300"
      >
        <PaperTape className="absolute -top-2 right-4 w-16 rotate-3" />
        <div className="flex gap-2 items-center justify-center bg-cream/50 rounded-lg p-2 text-ink">
          <IceCreamArt size={36} className="text-rust" />
          <MarblesArt size={36} className="text-ink" />
          <LatimArt size={36} className="text-brown-light" />
        </div>
        <p className="text-[11px] sm:text-xs font-serif font-medium text-ink text-center mt-2">
          টিফিনের লজেন্স ও লাটিম
        </p>
      </motion.div>

      {/* Center nostalgic badge stamp */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream/90 backdrop-blur-xs border border-brown-light/60 px-3.5 py-1.5 rounded-full shadow-xs text-xs font-mono font-medium text-ink tracking-wider uppercase pointer-events-none">
        Amar Generation 🇧🇩
      </div>
    </div>
  );
}
