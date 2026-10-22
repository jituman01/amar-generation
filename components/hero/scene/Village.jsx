import React from 'react';

export function Village() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <svg
        viewBox="0 0 1200 450"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full text-[#B08968]"
        fill="none"
      >
        {/* Mid-ground earth embankment */}
        <path
          d="M0 270C160 262 340 275 520 260C700 245 880 268 1040 255C1120 248 1160 255 1200 252V450H0V270Z"
          fill="#D9C3A0"
          fillOpacity="0.45"
        />

        {/* --- HUT 1 (Left-Center Village Homestead) --- */}
        <g transform="translate(240, 215)">
          {/* Stove Chimney Smoke rising — multiple curling puffs */}
          <circle cx="8" cy="-2" r="3" fill="#FAF6EF" className="animate-smoke" />
          <circle cx="10" cy="-8" r="4.5" fill="#FAF6EF" className="animate-smoke" style={{ animationDelay: '1.6s' }} />
          <circle cx="6" cy="-14" r="3.5" fill="#FAF6EF" className="animate-smoke" style={{ animationDelay: '3.2s' }} />

          {/* Gable Tin Roof with corrugation texture */}
          <polygon points="26,-8 -4,16 56,16" fill="#B08968" stroke="#3E2C23" strokeWidth="1.2" />
          <polygon points="56,16 26,-8 78,0 102,16" fill="#8D6E63" stroke="#3E2C23" strokeWidth="1.2" />
          {/* Tin roof corrugation lines */}
          <line x1="5" y1="8" x2="30" y2="-4" stroke="#3E2C23" strokeWidth="0.5" opacity="0.25" />
          <line x1="18" y1="12" x2="38" y2="0" stroke="#3E2C23" strokeWidth="0.5" opacity="0.25" />

          {/* Bamboo/mud walls */}
          <rect x="0" y="16" width="52" height="34" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="1.2" />
          <polygon points="52,16 102,16 98,50 52,50" fill="#E8DCB8" stroke="#3E2C23" strokeWidth="1.2" />
          {/* Wooden Door */}
          <rect x="18" y="26" width="14" height="24" fill="#3E2C23" rx="1.5" />
          {/* Window shutters on side wall */}
          <rect x="62" y="24" width="10" height="10" fill="#3E2C23" rx="1" opacity="0.85" />
          <line x1="67" y1="24" x2="67" y2="34" stroke="#FAF6EF" strokeWidth="0.8" />

          {/* Iconic 90s TV Fishbone Antenna on bamboo pole */}
          <line x1="88" y1="4" x2="88" y2="-26" stroke="#3E2C23" strokeWidth="1.8" />
          <line x1="78" y1="-22" x2="98" y2="-22" stroke="#3E2C23" strokeWidth="1.5" />
          <line x1="80" y1="-16" x2="96" y2="-16" stroke="#3E2C23" strokeWidth="1.5" />
          <line x1="82" y1="-10" x2="94" y2="-10" stroke="#3E2C23" strokeWidth="1.5" />
          {/* Cloth ribbon fluttering on antenna */}
          <g className="animate-ribbon">
            <path d="M88 -22L93 -20L88 -18" fill="#C98A7A" />
          </g>

          {/* Tube-well (টিউবওয়েল) with pumping handle */}
          <g transform="translate(112, 28)">
            <rect x="3" y="6" width="4" height="16" fill="#3E2C23" />
            <path d="M0 8L7 8" stroke="#3E2C23" strokeWidth="2" />
            {/* Pump handle — animated up-down */}
            <g className="animate-goat-head" style={{ animationDuration: '3s' }}>
              <line x1="7" y1="8" x2="16" y2="14" stroke="#3E2C23" strokeWidth="2" strokeLinecap="round" />
            </g>
            {/* Tin bucket on platform */}
            <rect x="-4" y="16" width="6" height="6" rx="1" fill="#8EA4AE" stroke="#3E2C23" strokeWidth="0.8" />
            {/* Water drops from spout */}
            <circle cx="2" cy="23" r="0.8" fill="#8EA4AE" className="animate-smoke" style={{ animationDuration: '2.5s' }} />
          </g>

          {/* Drying Clothes line swaying gently */}
          <g transform="translate(-85, 26)">
            {/* Two bamboo poles */}
            <line x1="0" y1="0" x2="0" y2="24" stroke="#3E2C23" strokeWidth="1.5" />
            <line x1="65" y1="0" x2="65" y2="24" stroke="#3E2C23" strokeWidth="1.5" />
            <path d="M0 4C20 8 45 8 65 4" stroke="#3E2C23" strokeWidth="1" strokeDasharray="3 1" />
            {/* Clothes blowing in the wind */}
            <g className="animate-clothes">
              {/* Saree/lungi */}
              <rect x="8" y="6" width="18" height="15" fill="#C98A7A" rx="1" />
              {/* Blue towel/gamchha */}
              <rect x="30" y="6" width="12" height="12" fill="#8EA4AE" rx="1" />
              {/* Yellow kid frock */}
              <polygon points="46,6 58,6 61,16 43,16" fill="#F2C879" />
            </g>
          </g>
        </g>

        {/* --- HUT 2 (Right side homestead) --- */}
        <g transform="translate(860, 222)">
          <polygon points="22,-6 -4,14 48,14" fill="#B08968" stroke="#3E2C23" strokeWidth="1.2" />
          <polygon points="48,14 22,-6 68,0 88,14" fill="#8D6E63" stroke="#3E2C23" strokeWidth="1.2" />
          <rect x="0" y="14" width="44" height="28" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="1.2" />
          <polygon points="44,14 84,14 80,42 44,42" fill="#E8DCB8" stroke="#3E2C23" strokeWidth="1.2" />
          <rect x="14" y="22" width="12" height="20" fill="#3E2C23" rx="1" />

          {/* Bicycle leaning against the wall */}
          <g transform="translate(48, 24)" opacity="0.8">
            {/* Wheels with animated spokes blur effect */}
            <circle cx="5" cy="14" r="5" stroke="#3E2C23" strokeWidth="1.2" fill="none" />
            <circle cx="20" cy="14" r="5" stroke="#3E2C23" strokeWidth="1.2" fill="none" />
            <line x1="5" y1="14" x2="12" y2="14" stroke="#3E2C23" strokeWidth="1" />
            <line x1="12" y1="14" x2="16" y2="8" stroke="#3E2C23" strokeWidth="1" />
            <line x1="16" y1="8" x2="20" y2="14" stroke="#3E2C23" strokeWidth="1" />
            <line x1="14" y1="7" x2="18" y2="7" stroke="#3E2C23" strokeWidth="1.5" />
          </g>
        </g>

        {/* --- Grazing Cow/Goat in pasture with animated head and tail --- */}
        <g transform="translate(680, 246)">
          {/* Body */}
          <ellipse cx="14" cy="10" rx="9" ry="5" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="1.2" />

          {/* Head dipping down grazing — animated bob */}
          <g className="animate-goat-head">
            <circle cx="4" cy="12" r="3.5" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="1" />
            <line x1="7" y1="8" x2="3" y2="13" stroke="#3E2C23" strokeWidth="1.8" />
            {/* Small horns */}
            <line x1="3" y1="9" x2="1" y2="7" stroke="#3E2C23" strokeWidth="1" strokeLinecap="round" />
            <line x1="5" y1="9" x2="6" y2="6" stroke="#3E2C23" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Legs with subtle weight shift */}
          <line x1="8" y1="14" x2="8" y2="20" stroke="#3E2C23" strokeWidth="1.5" />
          <line x1="11" y1="14" x2="11" y2="20" stroke="#3E2C23" strokeWidth="1.5" />
          <line x1="18" y1="14" x2="18" y2="20" stroke="#3E2C23" strokeWidth="1.5" />
          <line x1="21" y1="14" x2="21" y2="20" stroke="#3E2C23" strokeWidth="1.5" />

          {/* Tail swish — animated whip */}
          <g className="animate-tail-swish">
            <path d="M22 10C24 13 25 15 24 17" stroke="#3E2C23" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        </g>

        {/* Banana Fronds near the huts — gentle leaf sway */}
        <g transform="translate(355, 238)" className="animate-tree-sway">
          <path d="M0 25C-6 12 -22 6 -28 8C-22 14 -12 18 0 25" fill="#A3A070" />
          <path d="M0 25C6 10 24 4 30 6C24 14 14 18 0 25" fill="#A3A070" />
          <path d="M0 25C-2 8 -8 -4 -10 -10C-4 -4 3 8 0 25" fill="#8D8A58" />
        </g>
      </svg>
    </div>
  );
}
