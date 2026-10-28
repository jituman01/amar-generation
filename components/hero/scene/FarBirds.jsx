import React from 'react';
import { sceneConfig } from './sceneConfig';

/* Reusable single bird path */
function BirdShape() {
  return (
    <path
      d="M14 6C10 1 5 3 3 5C1 3 -4 1 -8 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  );
}

export function FarBirds() {
  return (
    <>
      {/* ===== FLOCK 1 — Primary flock, mid-sky, left-to-right ===== */}
      <div className="absolute top-[14%] left-0 w-full pointer-events-none select-none animate-birds-fly">
        <svg width="140" height="50" viewBox="0 0 140 50" fill="none" className="text-[#3E2C23] opacity-65">
          {sceneConfig.birds.map((b, idx) => (
            <g
              key={idx}
              transform={`translate(${50 + b.dx}, ${18 + b.dy}) scale(${b.scale})`}
              className="animate-bird-flap"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <BirdShape />
            </g>
          ))}
        </svg>
      </div>

      {/* ===== FLOCK 2 — Higher, smaller, slower drift ===== */}
      <div
        className="absolute top-[8%] left-0 w-full pointer-events-none select-none animate-birds-fly"
        style={{ animationDuration: '52s', animationDelay: '12s' }}
      >
        <svg width="100" height="36" viewBox="0 0 100 36" fill="none" className="text-[#3E2C23] opacity-35">
          <g transform="translate(20, 12) scale(0.7)" className="animate-bird-flap" style={{ animationDelay: '0.1s' }}>
            <BirdShape />
          </g>
          <g transform="translate(38, 17) scale(0.55)" className="animate-bird-flap" style={{ animationDelay: '0.2s' }}>
            <BirdShape />
          </g>
          <g transform="translate(52, 10) scale(0.6)" className="animate-bird-flap" style={{ animationDelay: '0.05s' }}>
            <BirdShape />
          </g>
        </svg>
      </div>

      {/* ===== FLOCK 3 — New: mid-right V-formation, medium pace ===== */}
      <div
        className="absolute top-[11%] left-0 w-full pointer-events-none select-none animate-birds-fly"
        style={{ animationDuration: '45s', animationDelay: '6s' }}
      >
        <svg width="160" height="60" viewBox="0 0 160 60" fill="none" className="text-[#3E2C23] opacity-50">
          {/* V-formation: 7 birds */}
          <g transform="translate(80, 20) scale(0.85)" className="animate-bird-flap" style={{ animationDelay: '0s' }}>
            <BirdShape />
          </g>
          <g transform="translate(66, 26) scale(0.78)" className="animate-bird-flap" style={{ animationDelay: '0.06s' }}>
            <BirdShape />
          </g>
          <g transform="translate(94, 27) scale(0.8)" className="animate-bird-flap" style={{ animationDelay: '0.1s' }}>
            <BirdShape />
          </g>
          <g transform="translate(52, 34) scale(0.7)" className="animate-bird-flap" style={{ animationDelay: '0.14s' }}>
            <BirdShape />
          </g>
          <g transform="translate(108, 35) scale(0.72)" className="animate-bird-flap" style={{ animationDelay: '0.18s' }}>
            <BirdShape />
          </g>
          <g transform="translate(40, 42) scale(0.62)" className="animate-bird-flap" style={{ animationDelay: '0.22s' }}>
            <BirdShape />
          </g>
          <g transform="translate(122, 43) scale(0.64)" className="animate-bird-flap" style={{ animationDelay: '0.26s' }}>
            <BirdShape />
          </g>
        </svg>
      </div>

      {/* ===== FLOCK 4 — New: small trio, high altitude, opposite pace ===== */}
      <div
        className="absolute top-[6%] left-0 w-full pointer-events-none select-none animate-birds-fly"
        style={{ animationDuration: '62s', animationDelay: '24s' }}
      >
        <svg width="70" height="28" viewBox="0 0 70 28" fill="none" className="text-[#3E2C23] opacity-28">
          <g transform="translate(18, 10) scale(0.5)" className="animate-bird-flap" style={{ animationDelay: '0.15s' }}>
            <BirdShape />
          </g>
          <g transform="translate(32, 14) scale(0.45)" className="animate-bird-flap" style={{ animationDelay: '0.25s' }}>
            <BirdShape />
          </g>
          <g transform="translate(46, 11) scale(0.48)" className="animate-bird-flap" style={{ animationDelay: '0.35s' }}>
            <BirdShape />
          </g>
        </svg>
      </div>

      {/* ===== FLOCK 5 — New: low scattered pair near horizon ===== */}
      <div
        className="absolute top-[18%] left-0 w-full pointer-events-none select-none animate-birds-fly"
        style={{ animationDuration: '35s', animationDelay: '18s' }}
      >
        <svg width="90" height="30" viewBox="0 0 90 30" fill="none" className="text-[#3E2C23] opacity-45">
          <g transform="translate(25, 12) scale(0.9)" className="animate-bird-flap" style={{ animationDelay: '0s' }}>
            <BirdShape />
          </g>
          <g transform="translate(50, 16) scale(0.75)" className="animate-bird-flap" style={{ animationDelay: '0.12s' }}>
            <BirdShape />
          </g>
          <g transform="translate(68, 10) scale(0.65)" className="animate-bird-flap" style={{ animationDelay: '0.2s' }}>
            <BirdShape />
          </g>
          <g transform="translate(12, 20) scale(0.55)" className="animate-bird-flap" style={{ animationDelay: '0.28s' }}>
            <BirdShape />
          </g>
        </svg>
      </div>
    </>
  );
}
