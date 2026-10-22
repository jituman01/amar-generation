import React from 'react';

export function RiceField() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <svg
        viewBox="0 0 1200 480"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full text-[#A3A070]"
        fill="none"
      >
        {/* Soft olive green paddy field base */}
        <path
          d="M0 310C180 295 380 320 580 300C780 280 980 312 1200 295V480H0V310Z"
          fill="#A3A070"
          fillOpacity="0.45"
        />
        {/* Water shimmer in paddy field */}
        <path
          d="M100 340C300 332 500 345 700 330C900 320 1100 340 1200 335"
          stroke="#8EA4AE"
          strokeWidth="0.8"
          opacity="0.15"
          strokeDasharray="6 10"
        />

        {/* Back Row Paddy Tufts (Fixed / Static) — spaced out and fewer */}
        <g className="text-[#8F8D5D]" opacity="0.75">
          <path d="M120 310L124 292M124 310L130 290M128 310L135 294" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M380 310L384 292M384 310L390 290" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M640 296L644 278M644 296L650 276M648 296L655 280" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M820 304L824 286M824 304L830 284M828 304L835 288" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M1020 302L1024 284M1024 302L1030 282M1028 302L1035 286" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </g>

        {/* Front Row Paddy Tufts (Fixed / Static) — spaced out and fewer */}
        <g className="text-[#7A784B]" opacity="0.85">
          <path d="M60 326L64 306M64 326L71 304M69 326L77 308" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M280 324L284 304M284 324L291 302M289 324L297 306" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M540 312L544 292M544 312L551 290M549 312L557 294" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M780 316L784 296M784 316L791 294M789 316L797 296" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M1060 315L1064 295M1064 315L1071 293M1069 315L1077 297" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Tiny egret/heron bird in the paddy field */}
        <g transform="translate(420, 318)" opacity="0.7">
          <line x1="4" y1="0" x2="4" y2="8" stroke="#FAF6EF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="4" cy="-1" r="1.5" fill="#FAF6EF" />
          <path d="M4 -1L7 -2" stroke="#F2C879" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="2" y1="8" x2="2" y2="12" stroke="#F2C879" strokeWidth="0.8" />
          <line x1="6" y1="8" x2="6" y2="12" stroke="#F2C879" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}
