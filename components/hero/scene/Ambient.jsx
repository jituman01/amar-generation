import React from 'react';
import { sceneConfig } from './sceneConfig';

export function Ambient() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {sceneConfig.ambient.map((item, idx) => (
        <div
          key={item.id}
          className="absolute animate-butterfly"
          style={{
            left: `${item.x / 12}%`,
            top: `${item.y / 5.2}%`,
            animationDuration: `${item.duration}, 0.2s`,
            animationDelay: `${idx * 1.8}s, 0s`,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {/* Left Wing — upper lobe */}
            <path
              d="M10 10C7 5 2 4 2 8C2 12 7 12 10 10Z"
              fill={item.color}
              stroke="#3E2C23"
              strokeWidth="0.7"
            />
            {/* Left Wing — lower lobe */}
            <path
              d="M10 10C8 13 4 14 4 11C4 9 8 10 10 10Z"
              fill={item.color}
              stroke="#3E2C23"
              strokeWidth="0.5"
              opacity="0.8"
            />
            {/* Right Wing — upper lobe */}
            <path
              d="M10 10C13 5 18 4 18 8C18 12 13 12 10 10Z"
              fill={item.color}
              stroke="#3E2C23"
              strokeWidth="0.7"
            />
            {/* Right Wing — lower lobe */}
            <path
              d="M10 10C12 13 16 14 16 11C16 9 12 10 10 10Z"
              fill={item.color}
              stroke="#3E2C23"
              strokeWidth="0.5"
              opacity="0.8"
            />
            {/* Body */}
            <line x1="10" y1="6" x2="10" y2="14" stroke="#3E2C23" strokeWidth="1.2" strokeLinecap="round" />
            {/* Antennae */}
            <path d="M10 7L7 4" stroke="#3E2C23" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M10 7L13 4" stroke="#3E2C23" strokeWidth="0.6" strokeLinecap="round" />
            <circle cx="7" cy="4" r="0.6" fill="#3E2C23" />
            <circle cx="13" cy="4" r="0.6" fill="#3E2C23" />
          </svg>
        </div>
      ))}

      {/* Additional dragonfly with faster wing-beat */}
      <div
        className="absolute animate-butterfly"
        style={{
          left: '55%',
          top: '62%',
          animationDuration: '8s, 0.12s',
          animationDelay: '4s, 0s',
        }}
      >
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          {/* Dragonfly elongated body */}
          <line x1="4" y1="8" x2="18" y2="8" stroke="#3E2C23" strokeWidth="1.5" strokeLinecap="round" />
          {/* Four transparent wings */}
          <ellipse cx="8" cy="5" rx="4" ry="2.5" fill="#8EA4AE" opacity="0.35" stroke="#3E2C23" strokeWidth="0.5" />
          <ellipse cx="8" cy="11" rx="4" ry="2.5" fill="#8EA4AE" opacity="0.35" stroke="#3E2C23" strokeWidth="0.5" />
          <ellipse cx="12" cy="5" rx="3.5" ry="2" fill="#8EA4AE" opacity="0.3" stroke="#3E2C23" strokeWidth="0.4" />
          <ellipse cx="12" cy="11" rx="3.5" ry="2" fill="#8EA4AE" opacity="0.3" stroke="#3E2C23" strokeWidth="0.4" />
          {/* Head with big compound eyes */}
          <circle cx="4" cy="8" r="1.5" fill="#3E2C23" />
        </svg>
      </div>
    </div>
  );
}
