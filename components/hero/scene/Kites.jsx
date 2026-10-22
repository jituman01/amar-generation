import React from 'react';
import { sceneConfig } from './sceneConfig';

export function Kites() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {sceneConfig.kites.map((kite, index) => {
        const animClass = index % 2 === 0 ? 'animate-kite-1' : 'animate-kite-2';

        return (
          <div
            key={kite.id}
            className={`absolute ${animClass}`}
            style={{
              left: `${kite.x / 12}%`,
              top: `${kite.y / 6}%`,
              transform: `scale(${kite.scale}) rotate(${kite.rotate}deg)`,
            }}
          >
            <svg width="44" height="72" viewBox="0 0 44 72" fill="none">
              {/* Diamond Kite Body */}
              <polygon
                points="22,2 40,22 22,38 4,22"
                fill={kite.color}
                stroke="#3E2C23"
                strokeWidth="1.6"
              />
              {/* Lighter highlight on top facet */}
              <polygon
                points="22,2 40,22 22,22"
                fill="#FAF6EF"
                opacity="0.15"
              />

              {/* Bamboo Cross Staves */}
              <line x1="22" y1="2" x2="22" y2="38" stroke="#FAF6EF" strokeWidth="1.4" opacity="0.8" />
              <path d="M4 22C12 14 32 14 40 22" stroke="#FAF6EF" strokeWidth="1.4" opacity="0.8" />

              {/* Trailing Tail with paper bows — animated wavy motion */}
              <g className="animate-kite-tail">
                <path
                  d="M22 38C20 44 24 50 21 58C18 64 24 68 22 72"
                  stroke="#3E2C23"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Bow 1 */}
                <polygon points="19,43 23,43 21,45" fill={kite.color} stroke="#3E2C23" strokeWidth="0.8" />
                <polygon points="19,47 23,47 21,45" fill={kite.color} stroke="#3E2C23" strokeWidth="0.8" />
                {/* Bow 2 */}
                <polygon points="21,52 25,52 23,54" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="0.8" />
                <polygon points="21,56 25,56 23,54" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="0.8" />
                {/* Bow 3 — extra for length */}
                <polygon points="20,60 24,60 22,62" fill={kite.color} stroke="#3E2C23" strokeWidth="0.7" opacity="0.75" />
                <polygon points="20,64 24,64 22,62" fill={kite.color} stroke="#3E2C23" strokeWidth="0.7" opacity="0.75" />
              </g>

              {/* String trailing downward — taut line to kid below */}
              <path
                d="M22 38 C 18 52, 10 70, 4 100"
                stroke="#3E2C23"
                strokeWidth="0.8"
                opacity="0.35"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
