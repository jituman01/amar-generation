/**
 * Amar Generation: Hero Scenery Configuration
 * Centralized timings, coordinates, colors, and responsive display flags.
 * Uses deterministic fixed values to guarantee 0 hydration mismatches.
 */

export const sceneConfig = {
  // 1. Kites in the sky
  kites: [
    {
      id: 'kite-red',
      x: 280,
      y: 95,
      scale: 0.95,
      color: '#C98A7A', // faded red-pink
      rotate: -5,
      bobDuration: '5.2s',
      swayDuration: '6.4s',
      tailBows: 4,
    },
    {
      id: 'kite-blue',
      x: 620,
      y: 65,
      scale: 1.1,
      color: '#8EA4AE', // faded blue
      rotate: 4,
      bobDuration: '6.1s',
      swayDuration: '5.8s',
      tailBows: 5,
    },
    {
      id: 'kite-rust',
      x: 880,
      y: 110,
      scale: 0.85,
      color: '#B5651D', // rust
      rotate: -3,
      bobDuration: '4.8s',
      swayDuration: '7.2s',
      tailBows: 4,
    },
    {
      id: 'kite-gold',
      x: 1060,
      y: 80,
      scale: 0.9,
      color: '#D4AF37', // soft golden
      rotate: 6,
      bobDuration: '5.6s',
      swayDuration: '6.0s',
      tailBows: 4,
    },
  ],

  // 2. Birds flock
  birds: [
    { dx: 0, dy: 0, scale: 1.0 },
    { dx: 18, dy: -8, scale: 0.85 },
    { dx: 36, dy: -14, scale: 0.75 },
    { dx: 14, dy: 10, scale: 0.8 },
    { dx: 32, dy: 18, scale: 0.7 },
  ],

  // 3. Horse traverse & gallop cycle
  horse: {
    traverseDuration: '24s',
    gallopDuration: '0.7s',
    color: '#3E2C23',
    dustPuffs: [
      { delay: '0s', dx: -12, dy: 2 },
      { delay: '0.35s', dx: -18, dy: 3 },
    ],
  },

  // 4. Children playing
  kids: {
    chorki: {
      spinDuration: '0.9s',
      frockColor: '#C98A7A',
    },
    tyre: {
      traverseDuration: '16s',
      wheelRollDuration: '1.2s',
      shirtColor: '#8EA4AE',
    },
    marbles: {
      flickDuration: '5.5s',
      shirt1Color: '#B08968',
      shirt2Color: '#A3A070',
    },
    swing: {
      pendulumDuration: '3.2s',
      skirtColor: '#B5651D',
    },
    kiteFlyer: {
      tuggingDuration: '4.5s',
      lungiColor: '#8EA4AE',
    },
  },

  // 5. Ambient butterflies / dragonflies
  ambient: [
    { id: 'bf-1', x: 440, y: 390, duration: '12s', color: '#C98A7A' },
    { id: 'bf-2', x: 790, y: 360, duration: '15s', color: '#D4AF37' },
    { id: 'df-1', x: 210, y: 330, duration: '9s', color: '#8EA4AE' },
  ],

  // 6. Responsive flags
  mobile: {
    hideKitesCount: 2, // only keep 2 kites on narrow screens
    hideRickshaw: true,
    hideAmbientFauna: true,
  },
};
