import React from 'react';
import { ArtIcon } from '@/components/art';

/**
 * Minimal Memory Template (1080 x 1350 fixed canvas)
 * Clean, elegant serif typography, generous whitespace, neat memory grid.
 */
export function MinimalMemory({ data }) {
  const {
    title = 'আমার ছোটবেলার ছোট্ট একটা টুকরো',
    era,
    memories = [],
    dnaScores = [],
    stickers = [],
    quote = 'জীবনটা ছিল সহজ। স্মৃতিগুলো ছিল অফুরন্ত।',
  } = data;

  const displayMemories = memories.slice(0, 6);
  const remainingCount = memories.length - displayMemories.length;
  const displayDna = dnaScores.slice(0, 3);
  const displayStickers = stickers.slice(0, 3);

  return (
    <div
      className="card-canvas-node relative w-[1080px] h-[1350px] bg-[#FAF6EF] text-[#3E2C23] p-[80px] flex flex-col justify-between overflow-hidden select-none box-border"
      style={{
        boxSizing: 'border-box',
        fontFamily: 'var(--font-bengali-sans)',
      }}
    >
      {/* Outer border rule */}
      <div className="absolute inset-[36px] border border-[#D9C3A0] pointer-events-none rounded-2xl" />

      {/* 1. Header Section */}
      <header className="flex flex-col items-center text-center">
        <div className="text-[18px] font-mono tracking-[0.25em] text-[#B5651D] uppercase font-semibold mb-3">
          AMAR GENERATION · {era?.cardLabel || 'সোনালী শৈশব'}
        </div>

        <h1
          className="text-[44px] font-serif font-bold text-[#3E2C23] leading-[1.3] max-w-[880px] line-clamp-2 px-4"
          style={{ fontFamily: 'var(--font-bengali-serif)' }}
        >
          {title}
        </h1>

        <div className="mt-3 text-[20px] text-[#6B5646] font-medium">
          আমি বড় হয়েছি {era?.cardLabel || 'শৈশবের সোনালী সময়ে'} ({era?.years || ''})
        </div>

        <div className="w-[120px] h-[1px] bg-[#D9C3A0] mt-6" />
      </header>

      {/* 2. Memory Icons Grid */}
      <section className="my-auto">
        <div className="text-[15px] font-mono tracking-[0.15em] text-[#6B5646] uppercase font-semibold text-center mb-6">
          নির্বাচিত শৈশব স্মৃতি
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-[880px] mx-auto">
          {displayMemories.map((mem) => (
            <div
              key={mem.id}
              className="bg-[#F3EAD9]/60 border border-[#D9C3A0]/80 rounded-2xl p-5 flex flex-col items-center text-center shadow-2xs"
            >
              <div className="w-[72px] h-[72px] rounded-xl bg-[#FAF6EF] flex items-center justify-center text-[#3E2C23] mb-3 border border-[#D9C3A0]/40">
                <ArtIcon name={mem.art} size={48} />
              </div>
              <div className="font-serif font-bold text-[20px] text-[#3E2C23] leading-tight">
                {mem.label}
              </div>
            </div>
          ))}
        </div>

        {remainingCount > 0 && (
          <div className="text-center mt-3 text-[16px] text-[#6B5646] font-medium">
            + আরও {remainingCount}টি স্মৃতি
          </div>
        )}
      </section>

      {/* 3. Childhood DNA & Stickers */}
      <section className="bg-[#F3EAD9]/40 border border-[#D9C3A0]/70 rounded-2xl p-7 max-w-[880px] mx-auto w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* DNA bars (7 cols) */}
          <div className="col-span-7 space-y-3.5">
            <div className="text-[15px] font-mono tracking-wider text-[#6B5646] uppercase font-semibold mb-2">
              CHILDHOOD DNA
            </div>
            {displayDna.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between text-[16px] font-bold text-[#3E2C23] mb-1">
                  <span>{item.trait.label}</span>
                  <span className="font-mono text-[15px] text-[#6B5646]">{item.score}%</span>
                </div>
                <div className="w-full h-3 bg-[#D9C3A0]/40 rounded-full overflow-hidden p-0.5 border border-[#D9C3A0]/60">
                  <div
                    className="h-full rounded-full bg-[#B08968]"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stickers / Badges (5 cols) */}
          <div className="col-span-5 border-l border-[#D9C3A0]/60 pl-8 flex flex-col justify-center">
            <div className="text-[15px] font-mono tracking-wider text-[#6B5646] uppercase font-semibold mb-3">
              শৈশবের ব্যাজ
            </div>
            <div className="flex items-center gap-4">
              {displayStickers.length > 0 ? (
                displayStickers.map((stk) => (
                  <div key={stk.id} className="flex flex-col items-center text-center">
                    <ArtIcon name={stk.art} size={54} />
                    <span className="text-[13px] font-bold text-[#3E2C23] mt-1.5 max-w-[80px] leading-tight">
                      {stk.label}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-[14px] text-[#6B5646] italic">
                  সোনালী স্মৃতির অধিকারী
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quote and Footer */}
      <footer className="text-center pt-2">
        <blockquote
          className="text-[21px] font-serif italic text-[#3E2C23] leading-relaxed max-w-[760px] mx-auto mb-4"
          style={{ fontFamily: 'var(--font-bengali-serif)' }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="text-[14px] text-[#6B5646] font-mono tracking-wider uppercase">
          আমার জেনারেশন · আমার স্মৃতি · AMAR-GENERATION.BD
        </div>
      </footer>
    </div>
  );
}
