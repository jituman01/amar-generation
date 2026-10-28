'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { useInViewPause } from '@/hooks/useInViewPause';
import { SkyLayer } from './scene/SkyLayer';
import { FarBirds } from './scene/FarBirds';
import { Kites } from './scene/Kites';
import { TreeLine } from './scene/TreeLine';
import { Village } from './scene/Village';
import { RiceField } from './scene/RiceField';

import { Foreground } from './scene/Foreground';
import { Kids } from './scene/Kids';
import { Ambient } from './scene/Ambient';

export function HeroScene() {
  const prefersReducedMotion = useReducedMotionSafe();
  const { containerRef, isPaused } = useInViewPause();

  // Gentle scroll parallax mapping over hero viewport
  const { scrollY } = useScroll();
  const skyY = useTransform(scrollY, [0, 600], [0, -10]);
  const farY = useTransform(scrollY, [0, 600], [0, 8]);
  const midY = useTransform(scrollY, [0, 600], [0, 18]);
  const nearY = useTransform(scrollY, [0, 600], [0, 32]);

  const layerEntrance = (delay) =>
    prefersReducedMotion
      ? { initial: {}, animate: {} }
      : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay, ease: 'easeOut' },
      };

  return (
    <div
      ref={containerRef}
      data-paused={isPaused ? 'true' : undefined}
      aria-hidden="true"
      role="presentation"
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
    >
      {/* 1. Sky & Sun */}
      <motion.div
        {...layerEntrance(0.05)}
        style={{ y: prefersReducedMotion ? 0 : skyY }}
        className="absolute inset-0"
      >
        <SkyLayer />
      </motion.div>

      {/* 2. Distant Birds */}
      <motion.div
        {...layerEntrance(0.12)}
        style={{ y: prefersReducedMotion ? 0 : skyY }}
        className="absolute inset-0"
      >
        <FarBirds />
      </motion.div>

      {/* 3. Kites in the sky */}
      <motion.div
        {...layerEntrance(0.18)}
        style={{ y: prefersReducedMotion ? 0 : skyY }}
        className="absolute inset-0"
      >
        <Kites />
      </motion.div>

      {/* 4. Distant Tree Line & Hills */}
      <motion.div
        {...layerEntrance(0.25)}
        style={{ y: prefersReducedMotion ? 0 : farY }}
        className="absolute bottom-0 left-0 right-0 w-full h-[58vh] sm:h-full sm:inset-0"
      >
        <TreeLine />
      </motion.div>

      {/* 5. Village Mid-Ground (Huts, TV antenna, drying clothes, tube-well, cow) */}
      <motion.div
        {...layerEntrance(0.32)}
        style={{ y: prefersReducedMotion ? 0 : midY }}
        className="absolute bottom-0 left-0 right-0 w-full h-[58vh] sm:h-full sm:inset-0"
      >
        <Village />
      </motion.div>

      {/* 6. Rice Field */}
      <motion.div
        {...layerEntrance(0.38)}
        style={{ y: prefersReducedMotion ? 0 : midY }}
        className="absolute bottom-0 left-0 right-0 w-full h-[58vh] sm:h-full sm:inset-0"
      >
        <RiceField />
      </motion.div>

      {/* 7. Foreground Soil, Big Banyan Tree & Rope Swing */}
      <motion.div
        {...layerEntrance(0.5)}
        style={{ y: prefersReducedMotion ? 0 : nearY }}
        className="absolute bottom-0 left-0 right-0 w-full h-[58vh] sm:h-full sm:inset-0"
      >
        <Foreground />
      </motion.div>

      {/* 8. Kids Playing (Chorki, Marbles, Kite) */}
      <motion.div
        {...layerEntrance(0.56)}
        style={{ y: prefersReducedMotion ? 0 : nearY }}
        className="absolute bottom-0 left-0 right-0 w-full h-[58vh] sm:h-full sm:inset-0"
      >
        <Kids />
      </motion.div>

      {/* 9. Ambient Butterflies & Fauna */}
      <motion.div
        {...layerEntrance(0.62)}
        style={{ y: prefersReducedMotion ? 0 : nearY }}
        className="absolute bottom-0 left-0 right-0 w-full h-[58vh] sm:h-full sm:inset-0"
      >
        <Ambient />
      </motion.div>
    </div>
  );
}
