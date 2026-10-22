import React from 'react';

export function Kids() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-30">
      {/* Stationary Playing Children positioned across path */}
      <svg
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full text-[#3E2C23]"
        fill="none"
      >
        {/* ============ 1. LITTLE GIRL WITH FAST SPINNING CHORKI (চরকি) ============ */}
        <g transform="translate(300, 346)">
          {/* Ground Contact Shadow */}
          <ellipse cx="18" cy="52" rx="16" ry="4.5" fill="#2B1D16" opacity="0.28" />

          <g className="animate-chorki-girl">
            {/* Head with bouncing pigtails */}
            <circle cx="18" cy="6" r="7" fill="#3E2C23" />
            <path d="M11 4C5 2 2 8 6 12M25 4C31 2 34 8 30 12" stroke="#3E2C23" strokeWidth="2.5" strokeLinecap="round" />
            {/* Hair ribbons */}
            <circle cx="6" cy="12" r="1.5" fill="#C98A7A" />
            <circle cx="30" cy="12" r="1.5" fill="#C98A7A" />

            {/* Frock fluttering in wind */}
            <g className="animate-frock-flutter">
              <polygon points="18,13 8,36 28,36" fill="#C98A7A" />
              <path d="M8 36C14 38 22 38 28 36" fill="#C98A7A" />
              {/* Frock pattern dots */}
              <circle cx="16" cy="24" r="1" fill="#FAF6EF" opacity="0.5" />
              <circle cx="20" cy="28" r="1" fill="#FAF6EF" opacity="0.5" />
            </g>

            {/* Bare feet */}
            <line x1="14" y1="36" x2="11" y2="50" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" />
            <line x1="22" y1="36" x2="25" y2="50" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" />
            <circle cx="11" cy="51" r="1.5" fill="#3E2C23" />
            <circle cx="25" cy="51" r="1.5" fill="#3E2C23" />

            {/* Other arm waving excitedly */}
            <g className="animate-frock-flutter">
              <path d="M18 20L5 14L2 8" stroke="#3E2C23" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Raised arm holding Chorki stick high */}
            <path d="M18 17L28 10L34 2" stroke="#3E2C23" strokeWidth="2.5" strokeLinecap="round" />
            {/* Slender Bamboo Stick */}
            <line x1="28" y1="12" x2="42" y2="-16" stroke="#B08968" strokeWidth="2.5" strokeLinecap="round" />

            {/* FAST SPINNING CHORKI PINWHEEL (চরকি) */}
            <g transform="translate(42, -16)">
              <g className="animate-chorki-spin">
                <circle cx="0" cy="0" r="3.5" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="1.2" />
                {/* 4 Curved Blades */}
                <path d="M0 0C-7 -14 -16 -14 -16 -7C-16 0 -7 0 0 0" fill="#F2C879" stroke="#3E2C23" strokeWidth="1" />
                <path d="M0 0C14 -7 14 -16 7 -16C0 -16 0 -7 0 0" fill="#C98A7A" stroke="#3E2C23" strokeWidth="1" />
                <path d="M0 0C7 14 16 14 16 7C16 0 7 0 0 0" fill="#8EA4AE" stroke="#3E2C23" strokeWidth="1" />
                <path d="M0 0C-14 7 -14 16 -7 16C0 16 0 7 0 0" fill="#B5651D" stroke="#3E2C23" strokeWidth="1" />
              </g>
            </g>
          </g>
        </g>

        {/* ============ 2. TWO CHILDREN PLAYING MARBLES ON DIRT (মার্বেল খেলা) ============ */}
        <g transform="translate(680, 368)">
          {/* Ground Contact Shadows for players */}
          <ellipse cx="9" cy="38" rx="14" ry="4" fill="#2B1D16" opacity="0.28" />
          <ellipse cx="64" cy="35" rx="14" ry="4" fill="#2B1D16" opacity="0.28" />

          {/* Circular ring on dirt ground */}
          <ellipse cx="32" cy="28" rx="26" ry="10" stroke="#FAF6EF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.65" />
          <ellipse cx="32" cy="28" rx="23" ry="9" stroke="#D9C3A0" strokeWidth="0.8" opacity="0.3" />

          {/* Resting target marble 1 */}
          <g className="animate-marble-hit">
            <circle cx="32" cy="26" r="3.5" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="1" />
            <path d="M30 24C33 25 33 27 30 28" stroke="#C98A7A" strokeWidth="0.6" fill="none" />
          </g>

          {/* Resting target marble 2 */}
          <circle cx="40" cy="28" r="3.2" fill="#C98A7A" stroke="#3E2C23" strokeWidth="1" />

          {/* Resting target marble 3 */}
          <circle cx="28" cy="30" r="2.8" fill="#F2C879" stroke="#3E2C23" strokeWidth="0.9" opacity="0.8" />

          {/* Flicked shooter marble */}
          <g className="animate-marble-flick">
            <circle cx="18" cy="26" r="3.8" fill="#8EA4AE" stroke="#3E2C23" strokeWidth="1.2" />
            <path d="M17 24C19 25 19 27 17 28" stroke="#FAF6EF" strokeWidth="0.5" fill="none" />
          </g>

          {/* Child A (Crouched shooter on left) */}
          <g transform="translate(-2, 0)">
            <circle cx="12" cy="6" r="6" fill="#3E2C23" />
            <path d="M9 12C4 16 3 22 6 30L14 30" fill="#B08968" stroke="#3E2C23" strokeWidth="1.8" />
            <path d="M6 30L2 38M14 30L18 38" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" />
            <g className="animate-boy-arm" transform="translate(10, 18)">
              <path d="M0 0L9 6L13 8" stroke="#3E2C23" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="14" cy="8" r="1.5" fill="#B08968" />
            </g>
          </g>

          {/* Child B (Squatting spectator on right) */}
          <g transform="translate(54, 4)">
            <circle cx="10" cy="5" r="6" fill="#3E2C23" />
            <rect x="5" y="11" width="10" height="16" fill="#A3A070" rx="2" />
            <path d="M6 27L3 35M15 27L18 35" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" />
            <path d="M5 16L2 24M15 16L18 24" stroke="#3E2C23" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>

        {/* ============ 3. BOY FLYING KITE WITH LATAAI (ঘুড়ি ওড়ানো ছেলে) ============ */}
        <g transform="translate(520, 350)">
          {/* Ground Contact Shadow */}
          <ellipse cx="18" cy="50" rx="16" ry="4.5" fill="#2B1D16" opacity="0.28" />

          <circle cx="18" cy="6" r="6.5" fill="#3E2C23" />
          <path d="M13 2L15 -1M21 2L19 -1" stroke="#2B1D16" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="13" y="13" width="10" height="18" fill="#8EA4AE" rx="2" />
          <path d="M14 31L11 48M22 31L25 48" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" />
          <circle cx="11" cy="49" r="1.5" fill="#3E2C23" />
          <circle cx="25" cy="49" r="1.5" fill="#3E2C23" />

          {/* Arms holding lataai with tugging motion */}
          <g className="animate-frock-flutter" style={{ animationDuration: '2.5s' }}>
            <path d="M15 19L20 9M20 19L26 10" stroke="#3E2C23" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="18" y1="9" x2="28" y2="9" stroke="#B5651D" strokeWidth="4" strokeLinecap="round" />
            <line x1="20" y1="8" x2="20" y2="10" stroke="#FAF6EF" strokeWidth="0.6" />
            <line x1="22" y1="8" x2="22" y2="10" stroke="#FAF6EF" strokeWidth="0.6" />
            <line x1="24" y1="8" x2="24" y2="10" stroke="#FAF6EF" strokeWidth="0.6" />
          </g>

          {/* String leading to kite */}
          <path d="M23 9 C 28 -45, 52 -110, 65 -175" stroke="#FAF6EF" strokeWidth="1" opacity="0.45" strokeDasharray="3 2" />
        </g>
      </svg>
    </div>
  );
}
