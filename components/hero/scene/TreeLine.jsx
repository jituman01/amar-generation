import React from 'react';

export function TreeLine() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full text-[#B9B08F]"
        fill="none"
      >
        {/* Soft rolling distant hills */}
        <path
          d="M0 240C150 215 320 228 480 212C660 196 820 222 980 208C1100 198 1160 215 1200 220V400H0V240Z"
          fill="currentColor"
          fillOpacity="0.55"
        />

        {/* Dense mango, banyan & bamboo tree clumps along the ridge */}
        <path
          d="M80 225C95 208 125 208 140 225M220 218C235 198 268 198 285 218M540 204C555 182 590 182 605 204M780 212C795 192 825 192 840 212M1020 200C1035 178 1070 178 1085 200"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Tall Betel nut / Coconut Palms on ridge (swaying lightly) */}
        <g transform="translate(260, 160)" className="animate-tree-sway">
          <path d="M10 70C9 40 12 18 14 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 0C5 -10 -10 -8 -18 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M14 0C22 -12 36 -10 44 -2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M14 0C2 -18 12 -24 15 -28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="translate(860, 150)" className="animate-tree-sway">
          <path d="M10 75C11 45 9 20 11 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M11 0C2 -10 -12 -8 -20 -2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M11 0C20 -12 34 -10 42 -2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
