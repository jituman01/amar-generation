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

      {/* ========================================================
          REALISTIC SOFT BENGAL SUN (স্নিগ্ধ নরম গোল সূর্য)
          Properly positioned in upper-mid sky with a realistic soft disc,
          natural limb feathering, warm atmospheric corona & gentle ambient bloom
          ======================================================== */}
      <div className="absolute top-[12%] sm:top-[15%] md:top-[17%] right-[8%] sm:right-[14%] md:right-[18%] lg:right-[20%] pointer-events-none select-none flex items-center justify-center opacity-95 sm:opacity-100 transition-opacity duration-300">
        {/* 1. Broad Ambient Atmospheric Bloom (বিশাল নরম সোনালী আভা) */}
        <div
          className="absolute w-64 h-64 sm:w-[420px] sm:h-[420px] rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 blur-4xl opacity-50 animate-sun-ambient pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, rgba(245, 158, 11, 0.18) 42%, rgba(249, 115, 22, 0.06) 68%, transparent 80%)',
          }}
        />

        {/* 2. Soft Atmospheric Corona (নরম কুয়াশাঘেরা আভা) */}
        <div
          className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 blur-xl opacity-65 animate-sun-pulse pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(254, 215, 170, 0.6) 0%, rgba(251, 146, 60, 0.3) 45%, rgba(234, 88, 12, 0.1) 70%, transparent 85%)',
          }}
        />

        {/* 3. Inner Soft Golden Halo (সূর্যের স্নিগ্ধ বলয়) */}
        <div
          className="absolute w-28 h-28 sm:w-40 sm:h-40 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 blur-md opacity-85 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 237, 213, 0.8) 0%, rgba(253, 186, 116, 0.5) 50%, rgba(249, 115, 22, 0.15) 80%, transparent 100%)',
          }}
        />

        {/* 4. Realistic Soft Round Sun Disc (নরম গোল সূর্য) */}
        <div
          className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full pointer-events-none animate-sun-core"
          style={{
            background:
              'radial-gradient(circle at 48% 48%, #FFFDF7 0%, #FEF3C7 22%, #FDE68A 45%, #FBBF24 70%, #F59E0B 88%, #EA580C 100%)',
            boxShadow:
              '0 0 25px rgba(245, 158, 11, 0.45), 0 0 50px rgba(234, 88, 12, 0.25), inset 0 0 16px rgba(255, 255, 255, 0.65)',
          }}
        >
          {/* Subtle natural edge softening / limb diffusion */}
          <div
            className="absolute -inset-0.5 rounded-full blur-[1.5px] pointer-events-none opacity-75"
            style={{
              background:
                'radial-gradient(circle, transparent 65%, rgba(234, 88, 12, 0.4) 95%, rgba(194, 65, 12, 0.7) 100%)',
            }}
          />

          {/* Gentle warm luminous center reflection */}
          <div
            className="absolute inset-[18%] rounded-full blur-[2px] opacity-80 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 48% 48%, #FFFFFF 0%, rgba(255, 253, 245, 0.85) 45%, rgba(254, 240, 138, 0) 80%)',
            }}
          />
        </div>
      </div>

      {/* ============ CLOUD LAYER 1 — Highest thin wisps ============ */}
      <div className="absolute top-[3%] left-0 w-full animate-cloud-drift-1">
        <svg width="1000" height="50" viewBox="0 0 1000 50" fill="none" className="w-[560px] sm:w-[1000px] h-auto max-w-none text-[#DDD0BC] opacity-60 sm:opacity-40">
          <path
            d="M120 30C112 30 106 33 106 38C106 43 114 43 120 43H180C190 43 196 39 196 34C196 29 186 26 180 28C176 22 162 21 156 25C151 20 140 20 135 25C128 24 122 26 120 30Z"
            fill="currentColor"
          />
          <path
            d="M620 25C614 25 608 28 608 32C608 37 616 37 620 37H670C678 37 684 34 684 30C684 26 676 23 670 25C666 20 654 18 648 23C644 18 634 18 630 23C624 22 618 23 620 25Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ============ CLOUD LAYER 2 — Soft back clouds ============ */}
      <div className="absolute top-[7%] left-0 w-full animate-cloud-drift-2">
        <svg width="1100" height="70" viewBox="0 0 1100 70" fill="none" className="w-[620px] sm:w-[1100px] h-auto max-w-none text-[#DDD0BC] opacity-65 sm:opacity-50">
          <path
            d="M50 45C40 45 30 50 30 58C30 66 40 66 50 66H140C155 66 165 60 165 52C165 44 150 38 140 42C135 32 115 30 105 36C98 28 80 28 72 36C62 34 52 38 50 45Z"
            fill="currentColor"
          />
          <path
            d="M480 38C472 38 466 42 466 48C466 55 476 55 480 55H560C570 55 578 50 578 44C578 38 568 34 560 38C556 30 542 28 534 33C528 28 516 28 510 33C504 32 496 34 480 38Z"
            fill="currentColor"
          />
          <path
            d="M820 42C814 42 808 45 808 50C808 56 816 56 820 56H870C878 56 884 52 884 48C884 43 876 40 870 43C867 38 856 36 850 40C846 36 838 36 834 40C828 39 822 40 820 42Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ============ CLOUD LAYER 3 — Mid-sky fuller clouds ============ */}
      <div className="absolute top-[12%] left-0 w-full animate-cloud-drift-3">
        <svg width="1200" height="80" viewBox="0 0 1200 80" fill="none" className="w-[660px] sm:w-[1200px] h-auto max-w-none text-[#E8DCC8] opacity-75 sm:opacity-60">
          <path
            d="M200 50C188 50 176 56 176 66C176 76 190 76 200 76H320C338 76 350 70 350 60C350 50 332 44 320 48C314 36 290 34 278 42C270 34 248 34 238 42C226 40 214 44 200 50Z"
            fill="currentColor"
          />
          <path
            d="M680 44C670 44 662 49 662 56C662 64 672 64 680 64H770C782 64 790 59 790 52C790 45 780 41 770 44C766 35 752 33 744 38C738 32 724 32 718 38C710 37 702 39 680 44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ============ CLOUD LAYER 4 — Offset back drift ============ */}
      <div
        className="absolute top-[9%] left-0 w-full animate-cloud-drift-4"
        style={{ animationDelay: '-20s' }}
      >
        <svg width="900" height="60" viewBox="0 0 900 60" fill="none" className="w-[520px] sm:w-[900px] h-auto max-w-none text-[#DDD0BC] opacity-60 sm:opacity-45">
          <path
            d="M300 34C292 34 284 38 284 44C284 51 294 51 300 51H375C386 51 394 46 394 40C394 34 384 30 375 33C371 26 358 24 350 29C345 24 334 24 328 29C320 28 312 30 300 34Z"
            fill="currentColor"
          />
          <path
            d="M700 30C694 30 688 33 688 38C688 44 696 44 700 44H750C758 44 764 40 764 36C764 31 756 28 750 31C747 26 738 24 732 28C728 24 720 24 716 28C710 27 704 28 700 30Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ============ CLOUD LAYER 5 — Front layer, prominent ============ */}
      <div className="absolute top-[17%] left-0 w-full animate-cloud-drift-1" style={{ animationDelay: '-40s' }}>
        <svg width="800" height="65" viewBox="0 0 800 65" fill="none" className="w-[500px] sm:w-[800px] h-auto max-w-none text-[#E8DCC8] opacity-80 sm:opacity-65">
          <path
            d="M100 38C92 38 84 42 84 48C84 55 94 55 100 55H175C186 55 194 50 194 44C194 38 184 34 175 37C171 29 158 28 150 33C145 28 134 28 128 33C120 32 112 34 100 38Z"
            fill="currentColor"
          />
          <path
            d="M500 32C494 32 488 35 488 40C488 46 496 46 500 46H555C564 46 570 42 570 38C570 33 562 30 555 33C552 28 542 26 536 30C532 26 522 26 518 30C512 29 506 30 500 32Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ============ CLOUD LAYER 6 — Low accent wisps ============ */}
      <div
        className="absolute top-[22%] left-0 w-full animate-cloud-drift-3"
        style={{ animationDelay: '-30s' }}
      >
        <svg width="700" height="45" viewBox="0 0 700 45" fill="none" className="w-[460px] sm:w-[700px] h-auto max-w-none text-[#DDD0BC] opacity-60 sm:opacity-40">
          <path
            d="M320 26C314 26 308 29 308 33C308 38 316 38 320 38H380C388 38 394 35 394 31C394 27 386 24 380 26C377 21 366 20 360 24C356 20 346 20 342 24C336 23 330 24 320 26Z"
            fill="currentColor"
          />
          <path
            d="M550 22C545 22 540 24 540 28C540 32 546 32 550 32H595C602 32 606 29 606 26C606 22 600 20 595 22C592 18 584 17 580 20C577 17 570 17 567 20C562 19 556 20 550 22Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ============ CLOUD LAYER 7 — Extra high wisp, very gentle ============ */}
      <div
        className="absolute top-[1%] left-0 w-full animate-cloud-drift-2"
        style={{ animationDelay: '-55s' }}
      >
        <svg width="600" height="35" viewBox="0 0 600 35" fill="none" className="w-[400px] sm:w-[600px] h-auto max-w-none text-[#DDD0BC] opacity-50 sm:opacity-35">
          <path
            d="M200 20C195 20 190 22 190 26C190 30 196 30 200 30H245C252 30 256 27 256 24C256 20 250 18 245 20C242 16 234 15 230 18C227 15 220 15 217 18C212 17 206 18 200 20Z"
            fill="currentColor"
          />
          <path
            d="M420 18C416 18 412 20 412 23C412 27 418 27 420 27H455C460 27 464 25 464 22C464 19 460 17 455 19C453 16 446 15 442 17C440 15 434 15 432 17C428 16 424 17 420 18Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
