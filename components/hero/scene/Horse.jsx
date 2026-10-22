import React from 'react';

export function Horse() {
  return (
    <div className="absolute bottom-[16%] sm:bottom-[18%] left-0 w-full pointer-events-none select-none animate-horse-traverse z-20">
      <div className="inline-block relative">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
          {/* Dust Cloud Trail — multiple staggered puffs behind hooves */}
          <circle cx="14" cy="88" r="6" fill="#D9C3A0" className="animate-dust-burst" />
          <circle cx="6" cy="84" r="4.5" fill="#FAF6EF" className="animate-dust-burst" style={{ animationDelay: '0.15s' }} />
          <circle cx="22" cy="92" r="4" fill="#D9C3A0" className="animate-dust-burst" style={{ animationDelay: '0.3s' }} />
          <circle cx="10" cy="94" r="5" fill="#FAF6EF" className="animate-dust-burst" style={{ animationDelay: '0.45s' }} />

          {/* Horse Main Galloping Group */}
          <g className="animate-horse-torso" transform="translate(10, 10)">
            {/* Flowing Tail — whipping in the wind */}
            <g className="animate-horse-tail" transform="translate(18, 26)">
              <path
                d="M0 0C-10 5 -18 16 -20 32C-16 26 -8 14 0 6"
                fill="#2B1D16"
                stroke="#2B1D16"
                strokeWidth="1.5"
              />
              <path
                d="M-3 3C-14 9 -24 22 -22 38C-16 30 -8 18 0 10"
                fill="#1A120D"
                stroke="none"
                opacity="0.5"
              />
            </g>

            {/* Back Right Leg (far — lighter) */}
            <g className="animate-horse-back-leg" transform="translate(34, 38)" opacity="0.7">
              <path d="M0 0L-10 16L-12 28L-5 38" stroke="#2B1D16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <ellipse cx="-5" cy="40" rx="3.5" ry="2" fill="#1A120D" />
            </g>

            {/* Back Left Leg (near) */}
            <g className="animate-horse-front-leg" transform="translate(28, 36)">
              <path d="M0 0L-12 16L-15 28L-8 38" stroke="#3E2C23" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <ellipse cx="-8" cy="40" rx="3.5" ry="2" fill="#1A120D" />
            </g>

            {/* Muscular Torso & Flank */}
            <path
              d="M22 30C28 24 52 22 72 27C80 30 78 42 70 45C56 48 36 47 28 44C22 41 20 34 22 30Z"
              fill="#3E2C23"
            />
            {/* Belly highlight for volume */}
            <path
              d="M32 38C44 42 62 42 72 39"
              stroke="#4A3630"
              strokeWidth="2"
              opacity="0.35"
              fill="none"
            />

            {/* Front Right Leg (far — lighter) */}
            <g className="animate-horse-front-leg" transform="translate(70, 38)" opacity="0.7">
              <path d="M0 0L10 14L16 28L24 38" stroke="#2B1D16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <ellipse cx="24" cy="40" rx="3.5" ry="2" fill="#1A120D" />
            </g>

            {/* Front Left Leg (near) */}
            <g className="animate-horse-back-leg" transform="translate(64, 36)">
              <path d="M0 0L12 14L18 28L26 38" stroke="#3E2C23" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <ellipse cx="26" cy="40" rx="3.5" ry="2" fill="#1A120D" />
            </g>

            {/* Neck & Head with natural motion */}
            <g className="animate-horse-head" transform="translate(64, 32)">
              {/* Powerful arched neck */}
              <path
                d="M0 0L16 -20L34 -18L36 -8L20 6L6 10"
                fill="#3E2C23"
              />
              {/* Neck muscle line */}
              <path d="M6 3C12 -6 22 -12 30 -12" stroke="#4A3630" strokeWidth="1.5" opacity="0.35" fill="none" />
              {/* Head & Muzzle */}
              <polygon points="34,-18 50,-14 48,-6 36,-8" fill="#3E2C23" />
              {/* Nostril flare */}
              <circle cx="47" cy="-8" r="1.8" fill="#1A120D" />
              {/* Eye */}
              <circle cx="38" cy="-14" r="1.5" fill="#FAF6EF" />
              <circle cx="38" cy="-14" r="0.8" fill="#1A120D" />
              {/* Ears pricked forward */}
              <polygon points="20,-20 23,-28 27,-20" fill="#3E2C23" />
              <polygon points="26,-19 29,-27 32,-19" fill="#2B1D16" />
              {/* Flowing Mane streamers in wind */}
              <g className="animate-horse-tail">
                <path d="M3 -1C9 -8 16 -16 22 -22" stroke="#2B1D16" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M6 0C12 -6 18 -13 24 -20" stroke="#1A120D" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
                <path d="M9 2C14 -4 20 -10 26 -18" stroke="#2B1D16" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
