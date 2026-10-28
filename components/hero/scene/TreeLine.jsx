import React from 'react';

export function TreeLine() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full"
        fill="none"
        opacity="0.25"
      >
        {/* ============ ROLLING DISTANT HILLS (মৃদু পাহাড়) ============ */}
        {/* Farthest misty hill */}
        <path
          d="M0 260C120 238 260 252 400 235C560 216 720 240 880 225C1020 212 1120 230 1200 240V400H0V260Z"
          fill="#C8C4A0"
          fillOpacity="0.35"
        />
        {/* Nearer soft hill with depth */}
        <path
          d="M0 240C150 215 320 228 480 212C660 196 820 222 980 208C1100 198 1160 215 1200 220V400H0V240Z"
          fill="#B9B08F"
          fillOpacity="0.55"
        />

        {/* ============ DENSE MANGO GROVE LEFT (আম বাগান — বামদিকে) ============ */}
        <g transform="translate(60, 178)">
          {/* Trunk cluster */}
          <path d="M18 62C16 42 14 22 12 4" stroke="#5A3E2B" strokeWidth="4" strokeLinecap="round" />
          <path d="M42 60C40 38 38 18 35 2" stroke="#5A3E2B" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M65 64C64 44 62 24 58 6" stroke="#5A3E2B" strokeWidth="3" strokeLinecap="round" />
          {/* Deep backing foliage shadow */}
          <ellipse cx="38" cy="-8" rx="52" ry="34" fill="#2B3320" />
          <ellipse cx="12" cy="8" rx="38" ry="28" fill="#2B3320" />
          <ellipse cx="62" cy="5" rx="36" ry="26" fill="#2B3320" />
          {/* Rich canopy mid layer */}
          <ellipse cx="36" cy="-12" rx="42" ry="26" fill="#3D4A2A" />
          <ellipse cx="10" cy="4" rx="30" ry="20" fill="#3D4A2A" />
          <ellipse cx="58" cy="2" rx="28" ry="20" fill="#3D4A2A" />
          {/* Sunlit leaf clusters */}
          <ellipse cx="30" cy="-18" rx="28" ry="16" fill="#5A6B35" opacity="0.9" />
          <ellipse cx="55" cy="-6" rx="22" ry="14" fill="#5A6B35" opacity="0.85" />
          <ellipse cx="8" cy="-2" rx="20" ry="13" fill="#5A6B35" opacity="0.8" />
          {/* Highlights — golden-lit leaf tips */}
          <circle cx="26" cy="-22" r="10" fill="#7A8C48" opacity="0.75" />
          <circle cx="50" cy="-12" r="9" fill="#8F9C58" opacity="0.65" />
          <circle cx="10" cy="-8" r="8" fill="#7A8C48" opacity="0.6" />
          {/* Leafy edge scallops for natural silhouette */}
          <circle cx="0" cy="-32" r="9" fill="#2B3320" />
          <circle cx="18" cy="-38" r="11" fill="#2B3320" />
          <circle cx="38" cy="-40" r="12" fill="#2B3320" />
          <circle cx="56" cy="-36" r="10" fill="#2B3320" />
          <circle cx="72" cy="-28" r="9" fill="#2B3320" />
          <circle cx="-12" cy="-14" r="8" fill="#2B3320" />
          <circle cx="80" cy="-10" r="8" fill="#2B3320" />
          {/* Hanging mangoes */}
          <ellipse cx="22" cy="14" rx="2" ry="3" fill="#8BAA3E" />
          <ellipse cx="50" cy="10" rx="2" ry="3" fill="#A4B854" />
        </g>

        {/* ============ BANYAN-LIKE TREE CENTER-LEFT (বড় গাছ) ============ */}
        <g transform="translate(220, 165)">
          {/* Thick textured trunk */}
          <path d="M20 75C18 50 16 30 14 8" stroke="#4A3526" strokeWidth="6" strokeLinecap="round" />
          <path d="M22 75C20 48 19 28 18 10" stroke="#3E2C23" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          {/* Aerial roots */}
          <path d="M0 40C2 50 4 62 3 75" stroke="#5A3E2B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M36 35C35 48 34 60 36 75" stroke="#5A3E2B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          {/* Deep shadow canopy */}
          <ellipse cx="18" cy="-10" rx="48" ry="36" fill="#1E2818" />
          <ellipse cx="-8" cy="10" rx="34" ry="26" fill="#1E2818" />
          <ellipse cx="44" cy="10" rx="32" ry="24" fill="#1E2818" />
          {/* Rich green mid canopy */}
          <ellipse cx="16" cy="-14" rx="38" ry="28" fill="#344029" />
          <ellipse cx="-6" cy="6" rx="26" ry="20" fill="#344029" />
          <ellipse cx="40" cy="6" rx="26" ry="18" fill="#344029" />
          {/* Bright sunlit patches */}
          <ellipse cx="14" cy="-20" rx="24" ry="16" fill="#4D5E30" opacity="0.9" />
          <ellipse cx="38" cy="-4" rx="18" ry="12" fill="#5A6B35" opacity="0.85" />
          <ellipse cx="-4" cy="2" rx="16" ry="12" fill="#5A6B35" opacity="0.8" />
          {/* Highlight dapples */}
          <circle cx="12" cy="-26" r="8" fill="#6E8038" opacity="0.7" />
          <circle cx="34" cy="-10" r="7" fill="#7A8C48" opacity="0.65" />
          {/* Silhouette rim */}
          <circle cx="-12" cy="-35" r="10" fill="#1E2818" />
          <circle cx="10" cy="-42" r="12" fill="#1E2818" />
          <circle cx="30" cy="-44" r="11" fill="#1E2818" />
          <circle cx="50" cy="-36" r="10" fill="#1E2818" />
          <circle cx="-20" cy="-10" r="9" fill="#1E2818" />
          <circle cx="58" cy="-8" r="9" fill="#1E2818" />
        </g>

        {/* ============ COCONUT PALM LEFT (নারিকেল গাছ — বিস্তারিত) ============ */}
        <g transform="translate(175, 148)" className="animate-tree-sway">
          {/* Curved trunk with bark texture rings */}
          <path d="M8 90C6 60 9 30 10 0" stroke="#6B4F38" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M9 90C7 60 10 30 11 0" stroke="#5A3E2B" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          {/* Bark ring marks */}
          <line x1="6" y1="20" x2="12" y2="18" stroke="#4A3526" strokeWidth="0.8" opacity="0.5" />
          <line x1="7" y1="35" x2="12" y2="33" stroke="#4A3526" strokeWidth="0.8" opacity="0.5" />
          <line x1="6" y1="50" x2="12" y2="48" stroke="#4A3526" strokeWidth="0.8" opacity="0.5" />
          <line x1="7" y1="65" x2="12" y2="63" stroke="#4A3526" strokeWidth="0.8" opacity="0.5" />
          {/* Fronds — 6 realistic drooping coconut palm leaves */}
          <path d="M10 0C-4 -14 -28 -18 -42 -10" stroke="#4D5E30" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M10 0C-6 -22 -20 -30 -36 -28" stroke="#5A6B35" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M10 0C2 -26 0 -34 -6 -38" stroke="#4D5E30" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M10 0C18 -24 22 -34 28 -38" stroke="#5A6B35" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M10 0C26 -20 40 -28 52 -24" stroke="#4D5E30" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M10 0C28 -10 46 -16 58 -8" stroke="#5A6B35" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Leaf blade fills — delicate drooping shape */}
          <path d="M-4 -14C-16 -16 -30 -15 -42 -10C-30 -12 -16 -12 -4 -14Z" fill="#5A6B35" opacity="0.6" />
          <path d="M26 -20C38 -24 48 -22 58 -8C46 -18 36 -22 26 -20Z" fill="#5A6B35" opacity="0.6" />
          {/* Coconut cluster */}
          <circle cx="8" cy="2" r="3" fill="#6B4F38" />
          <circle cx="13" cy="3" r="2.8" fill="#7A5C42" />
          <circle cx="10" cy="5" r="2.5" fill="#6B4F38" />
        </g>


        {/* ============ BETEL NUT PALM RIGHT (সুপারি গাছ — ডানদিকে) ============ */}
        <g transform="translate(740, 140)" className="animate-tree-sway">
          <path d="M6 100C5 65 7 35 8 0" stroke="#6B4F38" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="5" y1="22" x2="9" y2="20" stroke="#5A3E2B" strokeWidth="0.6" opacity="0.5" />
          <line x1="5" y1="40" x2="9" y2="38" stroke="#5A3E2B" strokeWidth="0.6" opacity="0.5" />
          <line x1="5" y1="58" x2="9" y2="56" stroke="#5A3E2B" strokeWidth="0.6" opacity="0.5" />
          <line x1="5" y1="76" x2="9" y2="74" stroke="#5A3E2B" strokeWidth="0.6" opacity="0.5" />
          {/* Crown ring */}
          <ellipse cx="8" cy="2" rx="4" ry="6" fill="#4D5E30" />
          {/* Fronds */}
          <path d="M8 0C-2 -12 -18 -16 -30 -10" stroke="#4D5E30" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M8 0C0 -18 -8 -24 -18 -26" stroke="#5A6B35" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M8 0C12 -20 14 -28 18 -28" stroke="#4D5E30" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M8 0C18 -14 32 -18 42 -12" stroke="#5A6B35" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M8 0C22 -8 36 -10 46 -4" stroke="#4D5E30" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          {/* Betel nut cluster */}
          <circle cx="6" cy="8" r="2" fill="#8BAA3E" />
          <circle cx="10" cy="9" r="1.8" fill="#A4B854" />
        </g>

        {/* ============ DENSE TREE CLUMP RIGHT (ডানদিকের ঝোপ) ============ */}
        <g transform="translate(850, 168)">
          <path d="M14 62C12 40 10 20 8 2" stroke="#5A3E2B" strokeWidth="5" strokeLinecap="round" />
          <path d="M38 60C36 36 34 16 32 0" stroke="#5A3E2B" strokeWidth="4" strokeLinecap="round" />
          <path d="M58 64C56 42 54 22 52 6" stroke="#5A3E2B" strokeWidth="3.5" strokeLinecap="round" />
          {/* Shadow */}
          <ellipse cx="32" cy="-8" rx="48" ry="34" fill="#1E2818" />
          <ellipse cx="6" cy="8" rx="32" ry="24" fill="#1E2818" />
          <ellipse cx="56" cy="6" rx="30" ry="22" fill="#1E2818" />
          {/* Mid */}
          <ellipse cx="30" cy="-12" rx="38" ry="26" fill="#344029" />
          <ellipse cx="8" cy="4" rx="24" ry="18" fill="#344029" />
          <ellipse cx="52" cy="2" rx="24" ry="16" fill="#344029" />
          {/* Sunlit */}
          <ellipse cx="28" cy="-18" rx="24" ry="15" fill="#4D5E30" opacity="0.9" />
          <ellipse cx="48" cy="-6" rx="18" ry="12" fill="#5A6B35" opacity="0.85" />
          {/* Highlights */}
          <circle cx="26" cy="-24" r="9" fill="#6E8038" opacity="0.65" />
          <circle cx="46" cy="-14" r="7" fill="#7A8C48" opacity="0.6" />
          {/* Rim */}
          <circle cx="0" cy="-32" r="10" fill="#1E2818" />
          <circle cx="20" cy="-38" r="12" fill="#1E2818" />
          <circle cx="40" cy="-40" r="11" fill="#1E2818" />
          <circle cx="60" cy="-34" r="10" fill="#1E2818" />
          <circle cx="72" cy="-16" r="8" fill="#1E2818" />
          <circle cx="-10" cy="-8" r="8" fill="#1E2818" />
        </g>

        {/* ============ COCONUT PALM FAR RIGHT ============ */}
        <g transform="translate(1000, 142)" className="animate-tree-sway">
          <path d="M10 98C8 65 11 30 12 0" stroke="#6B4F38" strokeWidth="4" strokeLinecap="round" />
          <path d="M11 98C9 65 12 30 13 0" stroke="#5A3E2B" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <line x1="8" y1="24" x2="14" y2="22" stroke="#4A3526" strokeWidth="0.7" opacity="0.5" />
          <line x1="8" y1="48" x2="14" y2="46" stroke="#4A3526" strokeWidth="0.7" opacity="0.5" />
          <line x1="8" y1="72" x2="14" y2="70" stroke="#4A3526" strokeWidth="0.7" opacity="0.5" />
          {/* Fronds */}
          <path d="M12 0C0 -16 -22 -20 -38 -12" stroke="#4D5E30" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M12 0C-2 -24 -16 -32 -30 -30" stroke="#5A6B35" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M12 0C4 -28 2 -36 -4 -40" stroke="#4D5E30" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M12 0C20 -26 24 -36 30 -40" stroke="#5A6B35" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M12 0C28 -18 44 -22 56 -14" stroke="#4D5E30" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M12 0C30 -8 48 -14 62 -6" stroke="#5A6B35" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Blade fills */}
          <path d="M0 -16C-12 -18 -26 -16 -38 -12C-26 -14 -12 -14 0 -16Z" fill="#5A6B35" opacity="0.55" />
          <path d="M28 -18C40 -20 50 -18 62 -6C48 -16 38 -20 28 -18Z" fill="#5A6B35" opacity="0.55" />
          {/* Coconuts */}
          <circle cx="10" cy="4" r="3.2" fill="#6B4F38" />
          <circle cx="15" cy="5" r="2.8" fill="#7A5C42" />
        </g>

        {/* ============ SCATTERED SMALL BUSHES/SHRUBS along treeline ============ */}
        {/* Bush 1 */}
        <g transform="translate(400, 215)">
          <ellipse cx="0" cy="0" rx="18" ry="12" fill="#3A4828" />
          <ellipse cx="0" cy="-4" rx="12" ry="8" fill="#4D5E30" opacity="0.8" />
          <circle cx="-4" cy="-8" r="5" fill="#3A4828" />
          <circle cx="6" cy="-9" r="6" fill="#3A4828" />
        </g>
        {/* Bush 2 */}
        <g transform="translate(660, 208)">
          <ellipse cx="0" cy="0" rx="16" ry="10" fill="#3A4828" />
          <ellipse cx="0" cy="-4" rx="10" ry="7" fill="#4D5E30" opacity="0.8" />
          <circle cx="-5" cy="-7" r="5" fill="#3A4828" />
          <circle cx="5" cy="-8" r="5" fill="#3A4828" />
        </g>
        {/* Bush 3 */}
        <g transform="translate(1100, 210)">
          <ellipse cx="0" cy="0" rx="22" ry="14" fill="#3A4828" />
          <ellipse cx="0" cy="-5" rx="14" ry="9" fill="#4D5E30" opacity="0.8" />
          <circle cx="-6" cy="-10" r="6" fill="#3A4828" />
          <circle cx="8" cy="-11" r="7" fill="#3A4828" />
        </g>

        {/* ============ THIN BAMBOO GROVE CENTER-RIGHT ============ */}
        <g transform="translate(620, 172)" opacity="0.7">
          <path d="M0 68C1 45 0 22 -1 0" stroke="#6B8043" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 66C9 42 8 20 7 0" stroke="#5A6B35" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16 70C16 46 15 22 14 2" stroke="#6B8043" strokeWidth="2" strokeLinecap="round" />
          {/* Tiny leaf tufts */}
          <path d="M-1 0C-8 -6 -14 -4 -18 0" stroke="#5A6B35" strokeWidth="1.2" fill="none" />
          <path d="M7 0C2 -8 -2 -10 -8 -8" stroke="#4D5E30" strokeWidth="1.2" fill="none" />
          <path d="M14 2C20 -4 26 -2 30 2" stroke="#5A6B35" strokeWidth="1.2" fill="none" />
          <path d="M7 0C14 -6 20 -8 24 -6" stroke="#4D5E30" strokeWidth="1.2" fill="none" />
        </g>
      </svg>
    </div>
  );
}
