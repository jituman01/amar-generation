import React from 'react';
import { sceneConfig } from './sceneConfig';

export function FarBirds() {
  return (
    <>
      {/* Primary flock — flies left to right */}
      <div className="absolute top-[14%] left-0 w-full pointer-events-none select-none animate-birds-fly">
        <svg width="140" height="50" viewBox="0 0 140 50" fill="none" className="text-[#3E2C23] opacity-65">
          {sceneConfig.birds.map((b, idx) => (
            <g
              key={idx}
              transform={`translate(${50 + b.dx}, ${18 + b.dy}) scale(${b.scale})`}
              className="animate-bird-flap"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <path
                d="M14 6C10 1 5 3 3 5C1 3 -4 1 -8 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Secondary smaller flock — higher, slower, slightly transparent */}
      <div
        className="absolute top-[8%] left-0 w-full pointer-events-none select-none animate-birds-fly"
        style={{ animationDuration: '52s', animationDelay: '12s' }}
      >
        <svg width="80" height="30" viewBox="0 0 80 30" fill="none" className="text-[#3E2C23] opacity-35">
          <g transform="translate(20, 10) scale(0.7)" className="animate-bird-flap" style={{ animationDelay: '0.1s' }}>
            <path d="M14 6C10 1 5 3 3 5C1 3 -4 1 -8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </g>
          <g transform="translate(38, 15) scale(0.55)" className="animate-bird-flap" style={{ animationDelay: '0.2s' }}>
            <path d="M14 6C10 1 5 3 3 5C1 3 -4 1 -8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </g>
          <g transform="translate(50, 8) scale(0.6)" className="animate-bird-flap" style={{ animationDelay: '0.05s' }}>
            <path d="M14 6C10 1 5 3 3 5C1 3 -4 1 -8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      </div>
    </>
  );
}
