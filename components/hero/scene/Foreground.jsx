import React from 'react';

export function Foreground() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-20">
      <svg
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full text-[#3E2C23]"
        fill="none"
      >
        {/* ============ DIRT ROAD / PATH (মাটির রাস্তা) ============ */}
        {/* Main road surface */}
        <path
          d="M0 370C160 358 320 372 500 360C700 345 900 368 1080 355C1140 350 1180 358 1200 356V395C1200 395 1040 408 880 400C720 392 540 410 360 402C200 396 100 406 0 400V370Z"
          fill="#C9A97A"
          fillOpacity="0.65"
        />
        {/* Road edge line — top */}
        <path
          d="M0 370C160 358 320 372 500 360C700 345 900 368 1080 355C1140 350 1180 358 1200 356"
          stroke="#B08968"
          strokeWidth="2"
          opacity="0.55"
        />
        {/* Road center dashed line */}
        <path
          d="M0 383C160 372 320 386 500 374C700 360 900 382 1080 370C1140 365 1180 372 1200 370"
          stroke="#D9C3A0"
          strokeWidth="1.5"
          strokeDasharray="12 8"
          opacity="0.4"
        />
        {/* Road edge line — bottom */}
        <path
          d="M0 400C100 406 200 396 360 402C540 410 720 392 880 400C1040 408 1200 395 1200 395"
          stroke="#B08968"
          strokeWidth="2"
          opacity="0.55"
        />

        {/* ============ FOREGROUND EARTH ============ */}
        <path
          d="M0 400C100 406 200 396 360 402C540 410 720 392 880 400C1040 408 1200 395 1200 395V520H0V400Z"
          fill="#B08968"
          fillOpacity="0.5"
        />

        <path
          d="M0 430C140 418 300 435 480 422C680 408 880 430 1060 418C1140 413 1180 418 1200 416V520H0V430Z"
          fill="#465a47"
          fillOpacity="0.88"
        />

        {/* ============ SLIM REALISTIC TREE (বটগাছ — পরিচ্ছন্ন ও ছিমছাম) ============ */}
        <g transform="translate(1010, 130)">
          {/* Slender, graceful Trunk (no harsh stroke lines) */}
          <path
            d="M38 310C35 245 30 180 24 115C20 80 12 48 0 15C18 28 36 36 50 32C44 65 42 120 46 210C50 250 58 280 72 310Z"
            fill="#3E2C23"
          />
          {/* Subtle soft trunk depth */}
          <path
            d="M26 125C28 170 32 225 35 285C32 235 28 175 26 125Z"
            fill="#2B1D16"
            opacity="0.3"
          />

          {/* Graceful Horizontal Branch holding the Swing */}
          {/* Graceful Horizontal Branch holding the Swing */}
          <path
            d="M20 54C-10 58 -60 63 -135 68C-135 80 -60 77 -10 74C15 72 25 64 20 54Z"
            fill="#3E2C23"
          />
          {/* Branch knot */}
          <circle cx="-35" cy="70" r="2.5" fill="#2B1D16" />
          <circle cx="-90" cy="69" r="2" fill="#2B1D16" />

          {/* --- SLIM, REFINED REALISTIC CANOPY (ছিমছাম ও সুন্দর পাতার বিস্তার) --- */}
          <g className="animate-tree-sway">
            {/* 1. Deep Backing Silhouette */}
            <g fill="#2B1D16">
              <ellipse cx="25" cy="-35" rx="55" ry="38" />
              <ellipse cx="-15" cy="-15" rx="48" ry="32" />
              <ellipse cx="55" cy="-15" rx="46" ry="32" />
              <ellipse cx="-45" cy="15" rx="40" ry="26" />
              <ellipse cx="60" cy="20" rx="38" ry="25" />
            </g>

            {/* 2. Lush Olive Mid-volume */}
            <g fill="#434830">
              <ellipse cx="20" cy="-38" rx="44" ry="28" />
              <ellipse cx="-18" cy="-18" rx="36" ry="24" />
              <ellipse cx="48" cy="-18" rx="35" ry="24" />
              <ellipse cx="-40" cy="12" rx="30" ry="20" />
              <ellipse cx="50" cy="16" rx="30" ry="20" />
            </g>

            {/* 3. Warm Olive Sunlit Foliage */}
            <g fill="#5F6340" opacity="0.9">
              <ellipse cx="18" cy="-42" rx="30" ry="18" />
              <ellipse cx="45" cy="-22" rx="26" ry="16" />
              <ellipse cx="-15" cy="-22" rx="24" ry="16" />
              <ellipse cx="42" cy="10" rx="22" ry="14" />
            </g>

            {/* 4. Sunlit Leaf Highlights */}
            <g fill="#8F8D5D" opacity="0.85">
              <circle cx="25" cy="-48" r="12" />
              <circle cx="52" cy="-26" r="11" />
              <circle cx="-10" cy="-26" r="10" />
              <circle cx="46" cy="6" r="10" />
            </g>

            {/* 5. Natural Leafy Silhouette Rim */}
            <g fill="#3E2C23">
              <circle cx="0" cy="-65" r="12" />
              <circle cx="25" cy="-70" r="14" />
              <circle cx="50" cy="-66" r="13" />
              <circle cx="-35" cy="-42" r="13" />
              <circle cx="75" cy="-38" r="13" />
              <circle cx="-65" cy="5" r="12" />
              <circle cx="85" cy="8" r="12" />
              <circle cx="-50" cy="30" r="11" />
              <circle cx="70" cy="35" r="11" />
            </g>
          </g>

          {/* --- HANGING TREE SWING (দোলনা) attached securely to branch --- */}
          <g transform="translate(-90, 68)">
            {/* Rope loops & tying knots wrapped around the tree branch */}
            <path d="M-2 -6C2 -7 2 5 -2 6M20 -6C24 -7 24 5 20 6" stroke="#D9C3A0" strokeWidth="2.4" fill="none" />
            <circle cx="0" cy="5" r="3" fill="#B08968" stroke="#3E2C23" strokeWidth="0.8" />
            <circle cx="22" cy="5" r="3" fill="#B08968" stroke="#3E2C23" strokeWidth="0.8" />

            {/* Pendulum Swinging Unit (pivots cleanly from the knots on branch) */}
            <g className="animate-swing-pendulum">
              {/* Ropes hanging from knots */}
              <path d="M0 5L0 142" stroke="#D9C3A0" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M22 5L22 142" stroke="#D9C3A0" strokeWidth="2.2" strokeLinecap="round" />

              {/* Wooden Plank Seat */}
              <rect x="-8" y="142" width="38" height="7" rx="2" fill="#D9C3A0" stroke="#3E2C23" strokeWidth="1.4" />
              {/* Rope holes and tassels */}
              <circle cx="0" cy="145.5" r="1.5" fill="#3E2C23" />
              <circle cx="22" cy="145.5" r="1.5" fill="#3E2C23" />
              <path d="M0 149L0 156M22 149L22 156" stroke="#D9C3A0" strokeWidth="2" strokeLinecap="round" />

              {/* Child sitting firmly on the swing seat */}
              {/* Head */}
              <circle cx="11" cy="102" r="7.5" fill="#3E2C23" />
              {/* Hair ribbon flowing */}
              <g className="animate-horse-tail">
                <path d="M5 100C0 96 -3 92 -7 90M5 104C0 102 -4 100 -8 100" stroke="#C98A7A" strokeWidth="2" strokeLinecap="round" />
              </g>
              {/* Torso seated flush onto the plank (y=114 to y=142) */}
              <rect x="5" y="114" width="12" height="28" fill="#C98A7A" rx="3" />

              {/* Hands firmly gripping the ropes */}
              <line x1="5" y1="122" x2="0" y2="122" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" />
              <circle cx="0" cy="122" r="2.2" fill="#B08968" />
              <line x1="17" y1="122" x2="22" y2="122" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" />
              <circle cx="22" cy="122" r="2.2" fill="#B08968" />

              {/* Flying/kicking legs swinging freely from edge of seat */}
              <g className="animate-swing-kid-kick">
                <path d="M8 142L4 160L-1 166" stroke="#3E2C23" strokeWidth="3.2" strokeLinecap="round" />
                <circle cx="-1" cy="167" r="2" fill="#3E2C23" />
                <path d="M14 142L11 158L7 164" stroke="#3E2C23" strokeWidth="3.2" strokeLinecap="round" />
                <circle cx="7" cy="165" r="2" fill="#3E2C23" />
              </g>
            </g>
          </g>
        </g>

        {/* ============ KASHFUL (কাশফুল) & WILDFLOWERS (Fixed / Static) ============ */}
        {/* Kashful cluster 1 (Left edge — fixed, no movement) */}
        <g transform="translate(40, 400)">
          <path d="M0 30C4 14 12 5 15 -12M8 30C14 16 22 7 28 -5M18 30C20 18 30 8 36 0" stroke="#FAF6EF" strokeWidth="2.6" strokeLinecap="round" />
          <ellipse cx="15" cy="-14" rx="2.8" ry="6" fill="#FAF6EF" />
          <ellipse cx="28" cy="-7" rx="2.4" ry="5.5" fill="#FAF6EF" />
        </g>

        {/* Kashful cluster 2 (Right edge — fixed, no movement) */}
        <g transform="translate(1120, 398)">
          <path d="M0 28C5 13 14 4 18 -10M10 28C15 15 24 6 30 -2" stroke="#FAF6EF" strokeWidth="2.4" strokeLinecap="round" />
          <ellipse cx="18" cy="-12" rx="2.6" ry="5.8" fill="#FAF6EF" />
        </g>

        {/* Small wildflowers along road edge (Fixed / Static) */}
        <g transform="translate(160, 404)">
          <circle cx="0" cy="0" r="2" fill="#C98A7A" />
          <circle cx="8" cy="-2" r="1.8" fill="#F2C879" />
          <path d="M0 2L0 10M8 0L8 8" stroke="#A3A070" strokeWidth="1" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
