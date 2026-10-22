import React from 'react';
import { ArtIcon, PaperTape } from '@/components/art';

/**
 * Retro Paper Template (1080 x 1350 fixed canvas)
 * Warm cream tone, scrapbook diary aesthetic, polaroid-style rotated frames.
 */
export function RetroPaper({ data }) {
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

  // Subtle rotations for scrapbook feel (<= 3 deg)
  const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1'];

  return (
    <div
      className="card-canvas-node relative w-[1080px] h-[1350px] bg-[#F3EAD9] text-[#3E2C23] p-[80px] flex flex-col justify-between overflow-hidden select-none box-border"
      style={{
        boxSizing: 'border-box',
        fontFamily: 'var(--font-bengali-sans)',
      }}
    >
      {/* Decorative top tape strip */}
      <PaperTape className="absolute top-5 left-1/2 -translate-x-1/2 w-48 -rotate-1" />

      {/* Outer border rule with rounded scrapbook feel */}
      <div className="absolute inset-[36px] border-2 border-[#D9C3A0] pointer-events-none rounded-3xl" />

      {/* 1. Header Section */}
      <header className="flex flex-col items-center text-center mt-3">
        <div className="inline-block px-4 py-1 rounded-full bg-[#FAF6EF] border border-[#D9C3A0] text-[16px] font-mono tracking-widest text-[#B5651D] font-bold uppercase mb-3">
          স্মৃতিকথা ডায়েরি · {era?.cardLabel || 'সোনালী শৈশব'}
        </div>

        <h1
          className="text-[44px] font-serif font-bold text-[#3E2C23] leading-[1.3] max-w-[880px] line-clamp-2 px-4"
          style={{ fontFamily: 'var(--font-bengali-serif)' }}
        >
          {title}
        </h1>

        <div className="mt-2 text-[20px] text-[#6B5646] font-medium">
          শৈশবের সোনালী কাল: {era?.years || 'অমর শৈশব'}
        </div>

        <div className="w-[140px] h-[2px] bg-[#B08968]/50 mt-5" />
      </header>

      {/* 2. Memory Polaroid Grid */}
      <section className="my-auto">
        <div className="grid grid-cols-3 gap-6 max-w-[880px] mx-auto">
          {displayMemories.map((mem, index) => {
            const rotationClass = rotations[index % rotations.length];

            return (
              <div
                key={mem.id}
                className={`bg-[#FAF6EF] border border-[#D9C3A0] rounded-xl p-4 pb-5 flex flex-col items-center text-center shadow-xs transition-transform ${rotationClass}`}
              >
                <div className="w-[74px] h-[74px] rounded-lg bg-[#F3EAD9]/70 flex items-center justify-center text-[#3E2C23] mb-3">
                  <ArtIcon name={mem.art} size={48} />
                </div>
                <div className="font-serif font-bold text-[19px] text-[#3E2C23] leading-tight">
                  {mem.label}
                </div>
              </div>
            );
          })}
        </div>

        {remainingCount > 0 && (
          <div className="text-center mt-4 text-[16px] text-[#6B5646] font-serif font-bold">
            + আরও {remainingCount}টি প্রিয় স্মৃতি
          </div>
        )}
      </section>

      {/* 3. Childhood DNA & Stickers */}
      <section className="bg-[#FAF6EF] border border-[#D9C3A0] rounded-2xl p-7 max-w-[880px] mx-auto w-full shadow-2xs">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* DNA bars (7 cols) */}
          <div className="col-span-7 space-y-3.5">
            <div className="text-[15px] font-mono tracking-wider text-[#6B5646] uppercase font-bold mb-2">
              CHILDHOOD DNA
            </div>
            {displayDna.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between text-[16px] font-bold text-[#3E2C23] mb-1">
                  <span>{item.trait.label}</span>
                  <span className="font-mono text-[15px] text-[#B5651D] font-bold">{item.score}%</span>
                </div>
                <div className="w-full h-3 bg-[#E8DCB8] rounded-full overflow-hidden p-0.5 border border-[#D9C3A0]">
                  <div
                    className="h-full rounded-full bg-[#B5651D]"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stickers / Badges (5 cols) */}
          <div className="col-span-5 border-l border-[#D9C3A0] pl-8 flex flex-col justify-center">
            <div className="text-[15px] font-mono tracking-wider text-[#6B5646] uppercase font-bold mb-3">
              অর্জিত ব্যাজ
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
                  সোনালী স্মৃতির পথিক
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

        <div className="text-[14px] text-[#6B5646] font-mono tracking-wider uppercase font-semibold">
          আমার জেনারেশন · আমার স্মৃতি · AMAR-GENERATION.BD
        </div>
      </footer>
    </div>
  );
}
