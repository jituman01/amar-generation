import React from 'react';

export function SkyLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Sky subtle gradient from paper to warm soft peach/cream */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FAF6EF 0%, #FAF1E4 45%, #F3E1C8 100%)',
        }}
      />

      {/* Sun on the horizon with soft breathing halo */}
      <div
        className="absolute bottom-[32%] right-[12%] sm:right-[18%] w-32 h-32 sm:w-40 sm:h-40 rounded-full pointer-events-none animate-sun-pulse"
        style={{
          background: 'radial-gradient(circle, #F2C879 0%, #E8BC65 40%, rgba(242,200,121,0) 75%)',
        }}
      >
        {/* Soft outer glow halo */}
        <div className="absolute -inset-6 rounded-full border border-[#D9C3A0]/40 opacity-70" />
      </div>

      {/* Back Layer Clouds (Drifting slow) */}
      <div className="absolute top-[8%] left-0 w-full animate-cloud-slow">
        <svg width="600" height="70" viewBox="0 0 600 70" fill="none" className="text-[#F3EAD9] opacity-60">
          <path
            d="M50 45C40 45 30 50 30 58C30 66 40 66 50 66H140C155 66 165 60 165 52C165 44 150 38 140 42C135 32 115 30 105 36C98 28 80 28 72 36C62 34 52 38 50 45Z"
            fill="currentColor"
          />
          <path
            d="M380 35C372 35 365 39 365 46C365 53 375 53 380 53H460C472 53 480 48 480 41C480 34 468 29 460 33C455 24 438 22 430 28C425 22 410 22 403 28C395 26 387 29 380 35Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Front Layer Clouds (Drifting faster) */}
      <div className="absolute top-[16%] left-0 w-full animate-cloud-fast">
        <svg width="700" height="90" viewBox="0 0 700 90" fill="none" className="text-[#FAF6EF] opacity-80">
          <path
            d="M200 50C188 50 176 56 176 66C176 76 190 76 200 76H320C338 76 350 70 350 60C350 50 332 44 320 48C314 36 290 34 278 42C270 34 248 34 238 42C226 40 214 44 200 50Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
