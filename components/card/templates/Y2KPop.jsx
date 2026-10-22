import React from 'react';
import { ArtIcon } from '@/components/art';

/**
 * Y2K Pop Template (1080 x 1350 fixed canvas)
 * Restrained retro palette (butter cream, subtle pastel accents), window header bar, playful yet clean layout.
 */
export function Y2KPop({ data }) {
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
      className="card-canvas-node relative w-[1080px] h-[1350px] bg-[#FAF8F0] text-[#3E2C23] p-[70px] flex flex-col justify-between overflow-hidden select-none box-border"
      style={{
        boxSizing: 'border-box',
        fontFamily: 'var(--font-bengali-sans)',
      }}
    >
      {/* Outer retro computer window border */}
      <div className="absolute inset-[30px] border-4 border-[#3E2C23] pointer-events-none rounded-2xl shadow-[6px_6px_0px_0px_#3E2C23]" />

      {/* 1. Y2K Window Title Bar */}
      <header className="w-full">
        <div className="bg-[#3E2C23] text-[#FAF6EF] px-6 py-3 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FAF6EF] border border-[#3E2C23]" />
            <div className="w-4 h-4 rounded-full bg-[#D9C3A0] border border-[#3E2C23]" />
            <div className="w-4 h-4 rounded-full bg-[#B5651D] border border-[#3E2C23]" />
          </div>
          <div className="font-mono text-[16px] font-bold tracking-widest uppercase">
            GENERATION.EXE · {era?.cardLabel || '২০০০-এর দশক'}
          </div>
          <div className="text-[14px] font-mono font-bold">[X]</div>
        </div>

        <div className="text-center pt-8 px-6">
          <h1
            className="text-[44px] font-serif font-black text-[#3E2C23] leading-[1.3] max-w-[880px] mx-auto line-clamp-2"
            style={{ fontFamily: 'var(--font-bengali-serif)' }}
          >
            {title}
          </h1>
          <div className="mt-2 text-[20px] font-bold text-[#B5651D]">
            ★ আমি বড় হয়েছি {era?.cardLabel || 'শৈশবের স্বর্ণযুগে'} ★
          </div>
        </div>
      </header>

      {/* 2. Memory Grid */}
      <section className="my-auto">
        <div className="grid grid-cols-3 gap-6 max-w-[880px] mx-auto">
          {displayMemories.map((mem) => (
            <div
              key={mem.id}
              className="bg-[#FFFDF7] border-2 border-[#3E2C23] rounded-xl p-4 flex flex-col items-center text-center shadow-[4px_4px_0px_0px_#3E2C23]"
            >
              <div className="w-[72px] h-[72px] rounded-lg bg-[#F5EFE0] border border-[#3E2C23] flex items-center justify-center text-[#3E2C23] mb-3">
                <ArtIcon name={mem.art} size={46} />
              </div>
              <div className="font-bold text-[19px] text-[#3E2C23] leading-tight">
                {mem.label}
              </div>
            </div>
          ))}
        </div>

        {remainingCount > 0 && (
          <div className="text-center mt-3 text-[16px] font-bold text-[#3E2C23]">
            [ + আরও {remainingCount}টি আনলকড স্মৃতি ]
          </div>
        )}
      </section>

      {/* 3. DNA & Badges Box */}
      <section className="bg-[#FFFDF7] border-2 border-[#3E2C23] rounded-xl p-6 max-w-[880px] mx-auto w-full shadow-[4px_4px_0px_0px_#3E2C23]">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* DNA bars (7 cols) */}
          <div className="col-span-7 space-y-3">
            <div className="text-[15px] font-mono tracking-wider text-[#3E2C23] uppercase font-black mb-1">
              CHILDHOOD DNA STATS
            </div>
            {displayDna.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between text-[16px] font-bold text-[#3E2C23] mb-1">
                  <span>{item.trait.label}</span>
                  <span className="font-mono text-[15px] text-[#3E2C23] font-bold">{item.score}%</span>
                </div>
                <div className="w-full h-3 bg-[#FAF8F0] rounded-sm overflow-hidden border border-[#3E2C23]">
                  <div
                    className="h-full bg-[#3E2C23]"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stickers / Badges (5 cols) */}
          <div className="col-span-5 border-l-2 border-[#3E2C23] pl-8 flex flex-col justify-center">
            <div className="text-[15px] font-mono tracking-wider text-[#3E2C23] uppercase font-black mb-2">
              BADGES EARNED
            </div>
            <div className="flex items-center gap-4">
              {displayStickers.length > 0 ? (
                displayStickers.map((stk) => (
                  <div key={stk.id} className="flex flex-col items-center text-center">
                    <ArtIcon name={stk.art} size={52} />
                    <span className="text-[13px] font-bold text-[#3E2C23] mt-1.5 max-w-[80px] leading-tight">
                      {stk.label}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-[14px] text-[#6B5646] font-bold">
                  লেজেন্ডারি স্মৃতি সংগ্রাহক
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quote and Footer */}
      <footer className="text-center pt-2">
        <blockquote
          className="text-[20px] font-serif font-bold text-[#3E2C23] leading-relaxed max-w-[760px] mx-auto mb-3"
          style={{ fontFamily: 'var(--font-bengali-serif)' }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="text-[13px] text-[#3E2C23] font-mono tracking-widest uppercase font-bold">
          আমার জেনারেশন · শৈশবের গল্প · 100% NOSTALGIA
        </div>
      </footer>
    </div>
  );
}
