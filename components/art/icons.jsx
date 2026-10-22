import React from 'react';

// Fallback icon for any missing key
export function FallbackArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" fill="none" opacity="0.2" />
      <path d="M24 16v16M16 24h16" />
    </svg>
  );
}

// 1. Cricket
export function CricketArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Bat handle */}
      <line x1="38" y1="10" x2="30" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="8" x2="40" y2="12" stroke="currentColor" strokeWidth="2.5" />
      {/* Bat blade */}
      <path d="M30 18L14 34C12 36 9 36 7 34C5 32 5 29 7 27L23 11L30 18Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Tennis ball with seam */}
      <circle cx="36" cy="34" r="7" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 30C34 32 34 36 32 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 30C38 32 38 36 40 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 2. Marbles
export function MarblesArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <circle cx="18" cy="26" r="12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 22C14 28 22 28 24 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15" cy="22" r="2" fill="currentColor" />
      <circle cx="34" cy="18" r="9" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      <path d="M29 16C31 20 37 20 39 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="34" cy="36" r="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

// 3. Latim (Spinning Top)
export function LatimArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <path d="M10 18C10 14 16 10 24 10C32 10 38 14 38 18C38 24 27 38 24 40C21 38 10 24 10 18Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Top crown */}
      <rect x="22" y="5" width="4" height="5" rx="1" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      {/* Cord grooves */}
      <path d="M12 18H36" stroke="currentColor" strokeWidth="2" />
      <path d="M15 24H33" stroke="currentColor" strokeWidth="2" />
      <path d="M19 30H29" stroke="currentColor" strokeWidth="2" />
      {/* Iron pin tip */}
      <line x1="24" y1="40" x2="24" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 4. Kite (ঘুড়ি)
export function KiteArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Diamond shape */}
      <path d="M24 6L40 24L24 40L8 24L24 6Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Center spine and bow bamboo */}
      <line x1="24" y1="6" x2="24" y2="40" stroke="currentColor" strokeWidth="2" />
      <path d="M8 24C16 16 32 16 40 24" stroke="currentColor" strokeWidth="2" />
      {/* Tail ribbons */}
      <path d="M24 40L28 46M24 40L20 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 5. Hide & Seek
export function HideSeekArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <path d="M8 12V38H22V12H8Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="8" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="1.8" />
      <line x1="8" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="1.8" />
      {/* Peeking eyes behind the wall */}
      <circle cx="28" cy="22" r="5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="28" cy="22" r="2" fill="currentColor" />
      <circle cx="39" cy="22" r="5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="39" cy="22" r="2" fill="currentColor" />
      <path d="M25 15C28 14 30 14 32 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 15C39 14 41 14 43 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Brick Game / Video Game
export function BrickGameArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="12" y="6" width="24" height="36" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Screen */}
      <rect x="16" y="10" width="16" height="14" rx="2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
      {/* Pixels inside screen */}
      <rect x="19" y="13" width="3" height="3" fill="currentColor" />
      <rect x="22" y="16" width="3" height="3" fill="currentColor" />
      {/* D-pad and buttons */}
      <circle cx="19" cy="32" r="2.5" fill="currentColor" />
      <circle cx="29" cy="30" r="3" fill="currentColor" />
      <circle cx="27" cy="36" r="2" fill="currentColor" />
    </svg>
  );
}

// 7. Kanamachi (কানামাছি)
export function KanamachiArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <circle cx="24" cy="24" r="16" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" />
      {/* Blindfold cloth */}
      <rect x="10" y="18" width="28" height="10" rx="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2.2" />
      {/* Knot at back */}
      <path d="M38 23L44 19M38 23L43 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Smiling mouth */}
      <path d="M20 33C22 36 26 36 28 33" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 8. Gollachut
export function GollachutArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Base boundary circle */}
      <ellipse cx="24" cy="38" rx="16" ry="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.08" />
      {/* Running child silhouette */}
      <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.2" />
      <path d="M24 19V28L18 36M24 28L30 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 23L24 22L32 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 9. Carrom Board
export function CarromArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="8" y="8" width="32" height="32" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" />
      {/* Inner frame */}
      <rect x="12" y="12" width="24" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
      {/* 4 corner pockets */}
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <circle cx="36" cy="12" r="2.5" fill="currentColor" />
      <circle cx="12" cy="36" r="2.5" fill="currentColor" />
      <circle cx="36" cy="36" r="2.5" fill="currentColor" />
      {/* Center circle & red queen */}
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

// 10. Football
export function FootballArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <circle cx="24" cy="24" r="16" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" />
      {/* Pentagon in center */}
      <polygon points="24,18 29,22 27,28 21,28 19,22" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
      {/* Seam lines to outer circle */}
      <line x1="24" y1="18" x2="24" y2="8" stroke="currentColor" strokeWidth="1.8" />
      <line x1="29" y1="22" x2="38" y2="18" stroke="currentColor" strokeWidth="1.8" />
      <line x1="27" y1="28" x2="35" y2="34" stroke="currentColor" strokeWidth="1.8" />
      <line x1="21" y1="28" x2="13" y2="34" stroke="currentColor" strokeWidth="1.8" />
      <line x1="19" y1="22" x2="10" y2="18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

// 11. Doraemon
export function DoraemonArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <circle cx="24" cy="22" r="15" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2.5" />
      {/* Eyes */}
      <ellipse cx="20" cy="15" rx="3.5" ry="5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="21" cy="15" r="1.5" fill="currentColor" />
      <ellipse cx="28" cy="15" rx="3.5" ry="5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="27" cy="15" r="1.5" fill="currentColor" />
      {/* Nose and whiskers */}
      <circle cx="24" cy="21" r="2.5" fill="currentColor" />
      <line x1="24" y1="23.5" x2="24" y2="30" stroke="currentColor" strokeWidth="1.8" />
      <line x1="12" y1="21" x2="18" y2="21" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="25" x2="18" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="21" x2="36" y2="21" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="24" x2="36" y2="25" stroke="currentColor" strokeWidth="1.5" />
      {/* Smile */}
      <path d="M16 28C19 33 29 33 32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Bell Collar */}
      <rect x="16" y="36" width="16" height="4" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="40" r="3" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// 12. Pokemon (Pokeball)
export function PokemonArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <circle cx="24" cy="24" r="16" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Divider */}
      <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2.5" />
      {/* Center button */}
      <circle cx="24" cy="24" r="5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

// 13. Ben 10 (Omnitrix)
export function Ben10Art({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="18" y="6" width="12" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      {/* Dial ring */}
      <circle cx="24" cy="24" r="14" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" />
      {/* Hourglass shape inside */}
      <polygon points="17,17 31,17 24,24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="17,31 31,31 24,24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// 14. Tom & Jerry
export function TomJerryArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Cheese wedge */}
      <polygon points="10,34 38,34 32,16 10,34" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="20" cy="28" r="3" fill="currentColor" fillOpacity="0.4" />
      <circle cx="28" cy="28" r="2.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="24" cy="22" r="2" fill="currentColor" fillOpacity="0.4" />
      {/* Cat paw reaching */}
      <path d="M38 12C36 14 36 18 36 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 15. Motu Patlu (Samosa)
export function MotuPatluArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <polygon points="24,10 40,36 8,36" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M12 36C18 32 30 32 36 36" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      {/* Steam lines */}
      <path d="M22 6C23 4 23 2 22 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M26 6C27 4 27 2 26 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 16. Chhota Bheem (Laddu)
export function ChhotaBheemArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Plate */}
      <ellipse cx="24" cy="34" rx="16" ry="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Stack of laddus */}
      <circle cx="18" cy="26" r="6" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="26" r="6" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="18" r="6.5" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// 17. Shinchan
export function ShinchanArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Thick iconic eyebrows */}
      <path d="M14 16C18 14 22 15 24 18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M34 16C30 14 26 15 24 18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      {/* Chubby cheeks face contour */}
      <path d="M14 22C12 26 14 32 18 34C22 36 28 36 32 32C36 28 36 22 34 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.15" />
      <circle cx="19" cy="23" r="2" fill="currentColor" />
      <circle cx="29" cy="23" r="2" fill="currentColor" />
      <ellipse cx="24" cy="29" rx="3" ry="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// 18. BTV Cartoon / Retro TV
export function BtvCartoonArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Antenna */}
      <line x1="16" y1="8" x2="22" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="8" x2="26" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* TV Body */}
      <rect x="8" y="15" width="32" height="25" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Curved Screen */}
      <rect x="12" y="19" width="20" height="17" rx="3" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
      {/* Smily cartoon face on screen */}
      <circle cx="18" cy="26" r="1.5" fill="currentColor" />
      <circle cx="26" cy="26" r="1.5" fill="currentColor" />
      <path d="M19 29C21 31 23 31 25 29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Knobs */}
      <circle cx="35" cy="22" r="2" fill="currentColor" />
      <circle cx="35" cy="28" r="2" fill="currentColor" />
    </svg>
  );
}

// 19. Alif Laila
export function AlifLailaArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Magic Aladdin Lamp */}
      <path d="M12 30C12 36 28 36 32 30C36 28 38 24 42 22C38 24 32 25 28 25L32 18H20L18 25C14 26 12 28 12 30Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M14 30C10 30 6 26 8 20C10 20 14 22 16 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Lamp base */}
      <ellipse cx="22" cy="36" rx="8" ry="2" stroke="currentColor" strokeWidth="2" fill="currentColor" />
      {/* Magic smoke */}
      <path d="M42 22C44 20 42 16 45 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 20. Meena (Mithu the parrot & smile)
export function MeenaArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Mithu parrot silhouette */}
      <circle cx="22" cy="18" r="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M26 16L32 19L26 21" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="23" cy="16" r="1.5" fill="currentColor" />
      <path d="M18 24C16 28 18 36 24 36C28 36 30 32 28 26" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.2" />
      {/* Tail feathers */}
      <path d="M24 36L20 44M24 36L26 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 21. Ice Cream (বরফ কাঠি)
export function IceCreamArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <path d="M16 18C16 11 32 11 32 18V32H16V18Z" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" />
      <line x1="20" y1="18" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="18" x2="24" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="18" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Stick */}
      <rect x="22" y="32" width="4" height="10" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// 22. Achar (আচার)
export function AcharArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Small transparent polythene pouch with tie */}
      <path d="M18 10L24 14L30 10M24 14V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 17H34C36 17 38 20 37 32C36 38 31 40 24 40C17 40 12 38 11 32C10 20 12 17 14 17Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Chilis & plum pieces inside */}
      <circle cx="20" cy="26" r="3" fill="currentColor" />
      <circle cx="28" cy="30" r="3" fill="currentColor" />
      <path d="M22 34C24 33 26 33 27 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 23. Fuchka (ফুচকা ও চটপটি)
export function FuchkaArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Round crispy shell with hole on top */}
      <ellipse cx="24" cy="28" rx="14" ry="11" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" />
      <ellipse cx="24" cy="23" rx="6" ry="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
      {/* Potato filling inside */}
      <circle cx="23" cy="23" r="1.5" fill="currentColor" />
      <circle cx="25" cy="24" r="1.5" fill="currentColor" />
      {/* Tamarind water drops */}
      <path d="M24 8C22 12 21 14 24 16C27 14 26 12 24 8Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// 24. Chanachur (চানাচুর)
export function ChanachurArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Paper cone (ঠোঙা) */}
      <polygon points="24,42 12,14 36,14" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="24" cy="14" rx="12" ry="4" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.2" />
      {/* Puffed nuts and noodles spilling out */}
      <circle cx="20" cy="10" r="2" fill="currentColor" />
      <circle cx="28" cy="9" r="2.5" fill="currentColor" />
      <path d="M22 6C24 8 26 7 27 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 25. Tiffin Box
export function TiffinBoxArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Handle */}
      <path d="M18 14V8C18 6 30 6 30 8V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Tier 1 */}
      <rect x="12" y="14" width="24" height="11" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Tier 2 */}
      <rect x="12" y="27" width="24" height="11" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" />
      {/* Side clasps */}
      <line x1="10" y1="18" x2="10" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="18" x2="38" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 26. Jhalmuri (ঝালমুড়ি)
export function JhalmuriArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Tin can shaker */}
      <rect x="14" y="12" width="20" height="28" rx="3" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2.5" />
      <line x1="14" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.8" />
      <line x1="14" y1="32" x2="34" y2="32" stroke="currentColor" strokeWidth="1.8" />
      {/* Muri grains shaking out */}
      <circle cx="20" cy="8" r="1.5" fill="currentColor" />
      <circle cx="28" cy="6" r="1.5" fill="currentColor" />
      <circle cx="24" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 27. Lozens (লজেন্স)
export function LozensArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Wrapped candy */}
      <circle cx="24" cy="24" r="9" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" />
      <path d="M19 20C21 28 27 28 29 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Left wrapper twist */}
      <polygon points="15,24 7,17 7,31" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Right wrapper twist */}
      <polygon points="33,24 41,17 41,31" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

// 28. Cotton Candy (হাওয়াই মিঠাই)
export function CottonCandyArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Cloud-like puffy swirl */}
      <path d="M18 20C15 20 12 23 13 26C13 30 17 32 20 32C22 34 26 34 28 32C32 32 35 29 35 26C35 22 32 20 29 20C29 15 23 15 20 18C19 19 18 19 18 20Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Stick */}
      <line x1="24" y1="32" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 29. Ice Pop (পেপসি কোলা আইসপপ)
export function IcePopArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="19" y="8" width="10" height="32" rx="4" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" />
      <line x1="19" y1="18" x2="29" y2="18" stroke="currentColor" strokeWidth="1.8" />
      <line x1="19" y1="28" x2="29" y2="28" stroke="currentColor" strokeWidth="1.8" />
      <path d="M22 6L24 8L26 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 30. Kotkoti (কটকটি)
export function KotkotiArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <polygon points="12,18 24,12 36,20 30,34 16,32" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="18,22 26,18 28,26 20,28" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="38" r="3" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="38" r="3" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// 31. Bicycle (সাইকেল)
export function BicycleArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* 2 Wheels */}
      <circle cx="12" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="36" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
      {/* Frame */}
      <polyline points="12,32 22,32 28,22 36,32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22,32 20,18 28,22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Seat */}
      <line x1="16" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Handlebar */}
      <path d="M26,16 L30,16 L32,18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="30" y1="16" x2="36" y2="32" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

// 32. Cassette Player (ক্যাসেট প্লেয়ার)
export function CassettePlayerArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="8" y="14" width="32" height="24" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Speaker grill */}
      <circle cx="16" cy="26" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="26" r="2" fill="currentColor" />
      {/* Tape door */}
      <rect x="25" y="20" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="28" cy="26" r="1.5" fill="currentColor" />
      <circle cx="34" cy="26" r="1.5" fill="currentColor" />
      {/* Buttons on top */}
      <line x1="12" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="11" x2="22" y2="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="11" x2="28" y2="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Handle */}
      <path d="M16 14V8H32V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 33. Keypad Phone (নকিয়া কিপ্যাড ফোন)
export function KeypadPhoneArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="14" y="6" width="20" height="36" rx="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Screen */}
      <rect x="18" y="11" width="12" height="10" rx="1.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
      {/* Nav keys */}
      <rect x="21" y="23" width="6" height="3" rx="1" fill="currentColor" />
      {/* Keypad dots (3x3) */}
      <circle cx="19" cy="29" r="1" fill="currentColor" />
      <circle cx="24" cy="29" r="1" fill="currentColor" />
      <circle cx="29" cy="29" r="1" fill="currentColor" />
      <circle cx="19" cy="33" r="1" fill="currentColor" />
      <circle cx="24" cy="33" r="1" fill="currentColor" />
      <circle cx="29" cy="33" r="1" fill="currentColor" />
      <circle cx="19" cy="37" r="1" fill="currentColor" />
      <circle cx="24" cy="37" r="1" fill="currentColor" />
      <circle cx="29" cy="37" r="1" fill="currentColor" />
    </svg>
  );
}

// 34. CRT TV
export function CrtTvArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <path d="M14 6L21 14M34 6L27 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="6" y="14" width="36" height="26" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      <rect x="10" y="18" width="22" height="18" rx="3" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="22" r="2" fill="currentColor" />
      <circle cx="36" cy="28" r="2" fill="currentColor" />
      <line x1="34" y1="33" x2="38" y2="33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 35. Cassette Tape (অডিও ক্যাসেট)
export function CassetteTapeArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="8" y="13" width="32" height="22" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      <rect x="14" y="17" width="20" height="10" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
      {/* 2 Spools */}
      <circle cx="19" cy="22" r="2.5" fill="currentColor" />
      <circle cx="29" cy="22" r="2.5" fill="currentColor" />
      {/* Bottom trapezoid */}
      <polygon points="12,35 15,31 33,31 36,35" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

// 36. Snake Game (স্নেক গেম)
export function SnakeGameArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Snake path */}
      <path d="M14 16H26V24H18V30H30" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      {/* Food dot */}
      <rect x="30" y="16" width="3.5" height="3.5" fill="currentColor" />
    </svg>
  );
}

// 37. CD Disk (সিডি ডিস্ক)
export function CdDiskArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <circle cx="24" cy="24" r="16" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      {/* Rainbow reflection ray */}
      <path d="M18 12C20 10 24 10 27 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 36C28 38 24 38 21 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 38. Smartphone Games
export function SmartphoneGamesArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <rect x="6" y="13" width="36" height="22" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Screen area */}
      <rect x="10" y="16" width="28" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Game controls inside */}
      <circle cx="16" cy="24" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="22" r="1.5" fill="currentColor" />
      <circle cx="34" cy="25" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 39. Afternoon Field (বিকেলে মাঠে)
export function AfternoonFieldArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Sun setting */}
      <circle cx="24" cy="20" r="8" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2.2" />
      {/* Hills / Field Horizon */}
      <path d="M6 36C14 30 20 34 26 31C32 28 40 32 42 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.15" />
      {/* Goalpost / tree silhouette */}
      <line x1="12" y1="28" x2="12" y2="35" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="28" x2="16" y2="35" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="28" x2="16" y2="28" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// 40. Friends Hangout (আড্ডা)
export function FriendsHangoutArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Friend 1 */}
      <circle cx="16" cy="18" r="4" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
      <path d="M10 32C10 26 13 25 16 25C19 25 22 26 22 32" stroke="currentColor" strokeWidth="2.2" />
      {/* Friend 2 (center) */}
      <circle cx="24" cy="15" r="4.5" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="2" />
      <path d="M18 30C18 23 21 22 24 22C27 22 30 23 30 30" stroke="currentColor" strokeWidth="2.2" />
      {/* Friend 3 */}
      <circle cx="32" cy="18" r="4" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
      <path d="M26 32C26 26 29 25 32 25C35 25 38 26 38 32" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

// 41. Rain Bath (বৃষ্টিতে ভেজা)
export function RainBathArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Cloud */}
      <path d="M14 20C12 20 10 22 11 25C11 28 14 30 17 30H32C35 30 38 27 38 24C38 21 35 19 32 19C31 15 26 14 23 16C21 15 17 16 16 19C15 19 14 19 14 20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Rain drops */}
      <line x1="16" y1="34" x2="14" y2="40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="24" y1="34" x2="22" y2="41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="32" y1="34" x2="30" y2="40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 42. Nanubari (নানুবাড়ি)
export function NanubariArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Roof */}
      <polygon points="20,14 6,24 34,24" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      {/* House walls */}
      <rect x="10" y="24" width="20" height="14" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.1" />
      {/* Door */}
      <rect x="17" y="30" width="6" height="8" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.3" />
      {/* Coconut palm trunk and fronds */}
      <path d="M36 38C35 28 36 22 38 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 16C34 14 30 15 28 17M38 16C42 14 44 15 46 18M38 16C37 12 36 8 38 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 43. Holiday Morning
export function HolidayMorningArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Window frame */}
      <rect x="12" y="10" width="24" height="26" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" />
      <line x1="24" y1="10" x2="24" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="23" x2="36" y2="23" stroke="currentColor" strokeWidth="2" />
      {/* Sun outside window */}
      <circle cx="18" cy="16" r="3" fill="currentColor" fillOpacity="0.4" />
      {/* Steaming tea cup */}
      <path d="M26 40H34C35 40 36 39 36 38V34H24V38C24 39 25 40 26 40Z" fill="currentColor" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

// 44. Post Exam (পরীক্ষার পর)
export function PostExamArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Open school bag */}
      <rect x="12" y="20" width="24" height="18" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 20V14C18 12 30 12 30 14V20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Flying paper plane */}
      <polygon points="36,8 20,14 26,17" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

// 45. Paper Boat (কাগজের নৌকা)
export function PaperBoatArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Origami Boat */}
      <polygon points="24,14 14,28 34,28" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <polygon points="8,28 14,35 34,35 40,28" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Water ripples */}
      <path d="M6 39C10 41 14 39 18 41C22 43 26 41 30 41C34 41 38 43 42 41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 46. Rooftop Stars (ছাদে বাতাস)
export function RooftopStarsArt({ className = '', size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} {...props}>
      {/* Crescent moon */}
      <path d="M28 8C23 10 20 15 21 21C22 27 27 30 32 29C28 32 22 31 18 28C14 24 14 18 17 13C19 10 24 8 28 8Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Rooftop parapet wall */}
      <rect x="8" y="34" width="32" height="8" rx="1" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.2" />
      <line x1="8" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="2" />
      {/* Tiny stars */}
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      <circle cx="38" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}

// --- STICKER BADGES ---
export function FieldKingSticker({ className = '', size = 44, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" className={className} {...props}>
      <circle cx="27" cy="27" r="24" fill="#F3EAD9" stroke="#B08968" strokeWidth="2.5" />
      <circle cx="27" cy="27" r="21" stroke="#D9C3A0" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M19 18L27 24L35 18L33 30H21L19 18Z" fill="#B5651D" fillOpacity="0.3" stroke="#B5651D" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="27" cy="36" r="3" fill="#3E2C23" />
    </svg>
  );
}

export function CartoonBuffSticker({ className = '', size = 44, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" className={className} {...props}>
      <circle cx="27" cy="27" r="24" fill="#FAF6EF" stroke="#B08968" strokeWidth="2.5" />
      <rect x="17" y="19" width="20" height="15" rx="3" fill="#D9C3A0" fillOpacity="0.4" stroke="#3E2C23" strokeWidth="2" />
      <line x1="22" y1="14" x2="27" y2="19" stroke="#3E2C23" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="14" x2="27" y2="19" stroke="#3E2C23" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="26" r="1.5" fill="#3E2C23" />
      <circle cx="30" cy="26" r="1.5" fill="#3E2C23" />
    </svg>
  );
}

export function TiffinSticker({ className = '', size = 44, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" className={className} {...props}>
      <circle cx="27" cy="27" r="24" fill="#F3EAD9" stroke="#B5651D" strokeWidth="2.5" />
      <ellipse cx="27" cy="30" rx="13" ry="5" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="2" />
      <circle cx="23" cy="24" r="5" fill="#B5651D" fillOpacity="0.4" stroke="#B5651D" strokeWidth="1.8" />
      <circle cx="31" cy="24" r="5" fill="#B08968" fillOpacity="0.4" stroke="#B08968" strokeWidth="1.8" />
    </svg>
  );
}

export function TechWizardSticker({ className = '', size = 44, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" className={className} {...props}>
      <circle cx="27" cy="27" r="24" fill="#FAF6EF" stroke="#3E2C23" strokeWidth="2.5" />
      <polygon points="27,14 31,23 40,24 33,31 35,40 27,35 19,40 21,31 14,24 23,23" fill="#D9C3A0" stroke="#3E2C23" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function ParaChampionSticker({ className = '', size = 44, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" className={className} {...props}>
      <circle cx="27" cy="27" r="24" fill="#F3EAD9" stroke="#B5651D" strokeWidth="2.5" />
      {/* Ribbon rosette */}
      <circle cx="27" cy="24" r="10" fill="#FAF6EF" stroke="#B5651D" strokeWidth="2" />
      <path d="M22 32L19 42L25 38L27 34" fill="#B08968" stroke="#3E2C23" strokeWidth="1.5" />
      <path d="M32 32L35 42L29 38L27 34" fill="#B08968" stroke="#3E2C23" strokeWidth="1.5" />
      <circle cx="27" cy="24" r="5" fill="#B5651D" />
    </svg>
  );
}

export function MemoryCollectorSticker({ className = '', size = 44, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" className={className} {...props}>
      <circle cx="27" cy="27" r="24" fill="#FAF6EF" stroke="#B08968" strokeWidth="2.5" />
      <circle cx="27" cy="27" r="19" stroke="#D9C3A0" strokeWidth="1.5" />
      <path d="M27 15L29 23L37 25L31 30L33 38L27 33L21 38L23 30L17 25L25 23L27 15Z" fill="#F3EAD9" stroke="#3E2C23" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

// Decorative tape component
export function PaperTape({ className = '', style = {} }) {
  return (
    <div
      className={`h-4 bg-[#E8DCB8]/80 border-t border-b border-[#D4C49A]/60 shadow-xs pointer-events-none ${className}`}
      style={{
        clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)',
        ...style,
      }}
    />
  );
}
