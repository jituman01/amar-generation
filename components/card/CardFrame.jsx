'use client';

import React, { useRef, useState, useEffect } from 'react';
import { MinimalMemory } from './templates/MinimalMemory';
import { RetroPaper } from './templates/RetroPaper';
import { Y2KPop } from './templates/Y2KPop';

export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1350;

export function CardFrame({
  templateId = 'minimal-memory',
  data,
  cardRef,
}) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.35);

  // ResizeObserver to adaptively scale preview inside container width
  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      // Leave a tiny margin
      const targetScale = Math.min(0.65, Math.max(0.25, containerWidth / CARD_WIDTH));
      setScale(targetScale);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const renderTemplate = () => {
    switch (templateId) {
      case 'retro-paper':
        return <RetroPaper data={data} />;
      case 'y2k-pop':
        return <Y2KPop data={data} />;
      case 'minimal-memory':
      default:
        return <MinimalMemory data={data} />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center overflow-hidden py-2"
    >
      {/* Outer bounding box sized to the scaled dimensions */}
      <div
        className="relative shadow-xl rounded-2xl overflow-hidden border border-tan/60 bg-paper"
        style={{
          width: `${CARD_WIDTH * scale}px`,
          height: `${CARD_HEIGHT * scale}px`,
        }}
      >
        {/* Scaled node containing the exact 1080x1350 card */}
        <div
          style={{
            width: `${CARD_WIDTH}px`,
            height: `${CARD_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {/* Unscaled inner node targeted by exportRef */}
          <div ref={cardRef} className="w-[1080px] h-[1350px]">
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
}
