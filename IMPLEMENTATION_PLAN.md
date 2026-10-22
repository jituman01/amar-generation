# Amar Generation: Implementation Plan (for AI Agent)

A Bangladesh-focused childhood nostalgia website. Users pick an era, choose memories, see their Childhood DNA, and generate a simple, clean, shareable PNG card.

**Core journey:** Select Era → Choose Memories → Childhood DNA → Generate Card → Download & Share

---

## 0. Ground Rules (read first)

- **Stack:** Next.js (App Router), **JavaScript/JSX only (no TypeScript)**, Tailwind CSS, Lucide React, Framer Motion. Do not replace the framework or introduce TypeScript.
- **Before coding:** inspect the repo (`package.json`, `app/`, Tailwind config, `globals.css`, existing components). Report what exists, reuse it, and avoid unnecessary config changes. Implement incrementally.
- **Language:** the entire UI is in Bangla. All user-facing copy lives in `src/data/strings.js`, never hardcoded in components. Hero strings given in the brief are kept **verbatim** (see §6), even where they are English.
- **Mobile-first:** design at 360-390px first, then scale with `sm:` / `md:` / `lg:`. No horizontal overflow at any width.
- **Client-side only:** no backend, no auth. localStorage for progress.
- **No external image URLs.** All illustrations are original inline SVG React components. This also avoids CORS problems during PNG export.
- **Dependencies:** add only `framer-motion`, `lucide-react`, and `html-to-image` (if not already installed).
- **Simplicity rule for cards:** all three card templates must be **simple and clean**. Few elements, generous spacing, clear hierarchy, no clutter (see §10).
- After each phase run `npm run build` and `npm run lint`. Fix errors before moving on.

---

## 1. Design System

### Color tokens (CSS variables in `globals.css`, mapped in Tailwind config)

| Token | Value (adjust by eye) | Use |
|---|---|---|
| `paper` | `#FAF6EF` | Main off-white background |
| `cream` | `#F3EAD9` | Section and card backgrounds |
| `tan` | `#D9C3A0` | Borders, dividers |
| `brown-light` | `#B08968` | Secondary accents, light-brown surfaces |
| `ink` | `#3E2C23` | Primary text (dark brown) |
| `ink-soft` | `#6B5646` | Secondary text |
| `rust` | `#B5651D` | Tiny highlights only |

### Typography (Bangla rendering is critical)

- Load via `next/font/google` with `subsets: ['bengali', 'latin']`, `display: 'swap'`.
  - Body: **Hind Siliguri** or **Noto Sans Bengali**
  - Headlines and quotes: **Noto Serif Bengali**
- Latin display font only for the small English eyebrow and CTA text.
- Line-height: body >= 1.6, headings >= 1.3. Bangla conjuncts (যুক্তবর্ণ) clip at tight line-heights.

### UI primitives (`src/components/ui/`)

`Button` (primary / secondary / ghost, min tap height 48px), `Card`, `Tile`, `Chip`, `SectionHeading`, `Container`, `ProgressBar`.
Style: thin borders, soft shadows, `rounded-xl`, no heavy gradients, no bright colors.

### Accessibility

Visible focus ring, good contrast on `paper`/`ink`, and a `useReducedMotionSafe` hook respected by every Framer Motion usage.

**Done when:** a scratch page shows tokens, Bangla fonts rendering correctly, and all primitives.

---

## 2. Folder Structure

```
src/
  app/
    layout.js              # fonts, metadata, lang="bn"
    page.js                # landing: Hero + MemoryPreview + HowItWorks + Footer
    create/page.js         # wizard (client component)
    globals.css
  components/
    ui/                    # Button, Card, Tile, Chip, Container, ProgressBar
    hero/                  # Hero.jsx, HeroCollage.jsx
    landing/               # MemoryPreview.jsx, HowItWorks.jsx, Footer.jsx
    wizard/                # Stepper, EraSelector, CategoryTabs, MemoryGrid,
                           # MemoryTile, SelectionBar, DnaPanel, UnlockTray
    card/                  # CardPreview, CardFrame, TemplateSwitcher, DownloadControls
    card/templates/        # RetroPaper.jsx, Y2KPop.jsx, MinimalMemory.jsx
    art/                   # SVG illustrations + index.js registry
  data/
    strings.js  eras.js  categories.js  memories.js
    traits.js   stickers.js  quotes.js
  lib/
    dna.js  unlocks.js  storage.js  exportCard.js
  hooks/
    useWizardState.js  useReducedMotionSafe.js
```

Follow the existing repo's structure and path alias (`@/`) if present.

---

## 3. Data Model

All content is plain JS so items and categories are easy to add.

```js
// data/eras.js
export const eras = [
  { id: '1990s', label: '৯০-এর দশকের শৈশব', blurb: '...', cardLabel: '৯০-এর দশক' },
  { id: '2000s', label: '২০০০-এর দশকের শৈশব', blurb: '...', cardLabel: '২০০০-এর দশক' },
  { id: '2010s', label: '২০১০-এর দশকের শৈশব', blurb: '...', cardLabel: '২০১০-এর দশক' },
];

// data/categories.js
export const categories = [
  { id: 'games',     label: 'খেলাধুলা',            icon: 'Gamepad2' },
  { id: 'cartoons',  label: 'কার্টুন ও টিভি',        icon: 'Tv' },
  { id: 'food',      label: 'খাবার ও নাশতা',       icon: 'IceCream' },
  { id: 'gadgets',   label: 'গ্যাজেট ও প্রযুক্তি',   icon: 'Radio' },
  { id: 'lifestyle', label: 'শৈশবের জীবনযাপন',     icon: 'Sun' },
];

// data/memories.js (one shape used everywhere)
{
  id: 'cricket',
  category: 'games',
  label: 'ক্রিকেট',
  eras: ['1990s', '2000s', '2010s'],   // all three = timeless
  art: 'CricketArt',                    // key into art registry
  traits: { outdoor: 3, social: 2 },    // weights feeding DNA
  sticker: 'cricket-bat',               // optional unlock id
}
```

### Minimum content (aim for 8-12 per category)

- **Games:** ক্রিকেট, মার্বেল, লাটিম, ঘুড়ি, লুকোচুরি, ভিডিও গেম, কানামাছি, গোল্লাছুট, ক্যারম
- **Cartoons/TV:** ডোরেমন, পোকেমন, বেন টেন, টম অ্যান্ড জেরি, মোটু পাতলু, ছোটা ভীম, শিনচ্যান, ছুটির দিনের কার্টুন
- **Food:** আইসক্রিম, আচার, ফুচকা, চানাচুর, স্কুলের টিফিন, চটপটি, ঝালমুড়ি, লজেন্স
- **Gadgets:** সাইকেল, ক্যাসেট প্লেয়ার, কিপ্যাড ফোন, CRT টিভি, ক্যাসেট/CD, Snake গেম
- **Lifestyle:** বন্ধুদের সাথে বাইরে খেলা, বিকেলে মাঠে, ছুটির দিনে কার্টুন, বৃষ্টিতে ভেজা, নানুবাড়ি বেড়ানো

Tag each item with correct `eras`. Some are era-specific (e.g. Snake on keypad phones for 2000s, mobile games for 2010s); others span all three.

### Era behavior

`memories.filter(m => m.eras.includes(eraId))`. If the user changes era after selecting, keep selections that remain valid, silently drop the rest, and show a small Bangla note saying so.

---

## 4. Illustrations & Stickers

- Original, simple, consistent SVG components in `components/art/`: limited palette (browns, cream, one or two muted accents), a single stroke weight, flat fills.
- **Hero set:** vintage TV, cricket bat + tennis ball, marbles, spinning top (লাটিম), keypad phone, notebook + pencil, snack packet (চানাচুর), 1-2 small fillers.
- **Memory set:** one small SVG glyph per memory item. Build `art/index.js` as a registry `{ CricketArt, MarblesArt, ... }` with a **fallback glyph** so a missing key never crashes.
- **Stickers** (`stickers.js`): `id`, Bangla `label`, `art`, `unlockedBy` (memory ids or a rule). Include badges such as "মাঠের রাজা", "কার্টুন ভক্ত", "টিফিন এক্সপ্লোরার".
- All SVGs use `currentColor` or props for color so templates can recolor them. No external fonts or images inside SVGs.

---

## 5. Phase Order

1. Design tokens, fonts, UI primitives, folder skeleton
2. Data files and strings
3. SVG art and sticker registry
4. Hero + landing sections
5. Wizard shell, state, storage
6. Era + memory selection
7. DNA + unlocks
8. Card preview + three templates
9. Export and share
10. Polish, accessibility, performance, QA

---

## 6. Hero Section (real, working component)

Implement `components/hero/Hero.jsx` and render it in `app/page.js`.

### Content (verbatim)

| Element | Text |
|---|---|
| Eyebrow | `A NOSTALGIC JOURNEY THROUGH TIME` |
| H1 | `ছোটবেলার গল্প, নিজের মতো করে।` |
| Body | `তোমার শৈশবের খেলা, কার্টুন, খাবার আর স্মৃতিগুলো বেছে নাও। তৈরি করো তোমার নিজের Generation Card।` |
| Primary CTA | `Create My Card` → `Link` to `/create` |
| Secondary CTA | `Explore Memories` → smooth-scroll to `#memories-preview` |
| Small line | `Made for the generations of Bangladesh 🇧🇩` |

### Layout

- **Mobile (default):** single column. Order: eyebrow → H1 → body → primary CTA (full-width, >= 48px) → secondary CTA → small line → collage. Cap collage height (e.g. `h-[300px]`) so the primary CTA stays near the top.
- **Desktop (`lg:`):** two columns (~55/45), generous whitespace, H1 is the dominant element.
- **Collage (`HeroCollage.jsx`):** scrapbook composition from the SVG objects: 4-6 paper-scrap or photo frames with thin tan borders, small rotations (-6° to +6°), one or two tape strips, subtle paper grain. Fixed, intentional positions (absolute inside an aspect-ratio container), not random. `overflow-hidden` on the container.
- **Motion:** Framer Motion staggered fade/slide-up for text, gentle settle-in for collage pieces. Subtle button hover (small lift or background shift). Honor `prefers-reduced-motion`.

**Done when:** no horizontal scroll at 360px, both CTAs work, reduced-motion respected.

---

## 7. Landing Page Extras

- **MemoryPreview** (`id="memories-preview"`): ~8-10 memory tiles across categories, a short Bangla caption, and a CTA to `/create`.
- **HowItWorks:** 4 short steps (era → memories → DNA → card).
- **Footer:** Amar Generation branding and a note that DNA is just for fun.

---

## 8. Wizard: `/create`

Client component with a 4-step stepper: **১. যুগ → ২. স্মৃতি → ৩. Childhood DNA → ৪. কার্ড**

### State (`useWizardState`)

```js
{ step, eraId, selectedIds: [], templateId: 'minimal-memory', title, quote }
```

Use `useReducer` (or `useState`) plus `useMemo` for derived data (available memories, DNA, unlocks).

### Persistence (`lib/storage.js`)

- Key: `amar-generation:v1`. Wrap everything in try/catch (private mode, quota).
- Read localStorage in `useEffect` after mount, then set a `hydrated` flag. Never read it during render (avoids hydration mismatch). Show a skeleton until hydrated.
- Validate loaded data (drop unknown ids, era must exist). Corrupt data must not crash the app.
- Provide a "শুরু থেকে শুরু করো" reset action.

### Step 1: Era (`EraSelector`)

Three large tappable cards, each with a short Bangla description and a small illustration. Helper line: choose the period that *feels* like your childhood, not necessarily your birth year. Selecting an era enables "Next".

### Step 2: Memories

- `CategoryTabs`: horizontally scrollable on mobile inside its own `overflow-x-auto` container (snap, no page-level overflow), with a selected count per category.
- `MemoryGrid`: 2 columns on mobile, 3 on `sm`, 4 on `lg`. `MemoryTile` is >= 96px tall with art, label, and a clear selected state (check icon, border, background) using `aria-pressed`.
- Sticky bottom `SelectionBar` on mobile: "X টি স্মৃতি বেছেছ" + "পরের ধাপ". Minimum 3 memories (ideally across >= 2 categories), maximum 12, with a friendly Bangla message at the limit.
- `UnlockTray`: shows stickers unlocked so far, with a subtle non-blocking pop-in on new unlocks.

### Step 3: DNA (`DnaPanel`)

Top 3-5 trait bars with Bangla labels, a playful generated description, the note "এটা শুধু মজার জন্য।", and an expandable "কীভাবে হিসাব হলো?" explaining the rule.

### Step 4: Card

See §10 and §11.

**Navigation:** back/next on every step, completed steps tappable in the stepper, scroll to top on step change.

---

## 9. Childhood DNA Logic (`lib/dna.js`)

Pure, testable functions with a transparent rule, documented in a comment at the top of the file and mirrored in the "কীভাবে হিসাব হলো?" UI.

**Traits** (`traits.js`): `outdoor` (আউটডোর কিড), `cartoon` (কার্টুন লাভার), `foodie` (টিফিন এক্সপ্লোরার), `techie` (গ্যাজেট গিক), `social` (বন্ধুপ্রেমী), `homebody` (ঘরোয়া কিড), `sweet-tooth` (মিষ্টিপ্রেমী). Each has a Bangla label and a short phrase.

**Rule:**

1. Each memory contributes weights (1-3) to traits via its `traits` map.
2. `raw[trait]` = sum of weights from selected memories.
3. `max[trait]` = sum of weights for that trait across all memories available in the selected era.
4. `score = round(40 + 60 * min(1, raw / (0.5 * max)))` for traits with `raw > 0`. Choosing about half a trait's items gives 100%, and any contribution gives at least 40%. Traits with `raw = 0` are hidden.
5. Sort descending, tie-break by trait order. Return top N (3 for the card, 5 for the panel).
6. **Description:** template sentences keyed on the top 1-2 traits plus one selected memory label (e.g. `তুমি এমন একজন ${trait.label}, যার ছোটবেলা কেটেছে ${memory.label} নিয়ে।`). Write 2-3 variants per trait, chosen **deterministically** (hash of selected ids) so text does not flicker on re-render.

### Unlocks (`lib/unlocks.js`)

Pure function: `getUnlockedStickers(selectedIds)` using each sticker's `unlockedBy`. Selected memories also drive the card collage, so every card is visibly personal.

---

## 10. Card Generator & Templates

### Design principle: simple and clean

All three templates must feel **simple, clean, and uncluttered**.

- Maximum **3 type sizes** and **2 font families** per card.
- Generous margins (>= 72px on a 1080 wide canvas) and clear spacing between sections.
- Limit decorative elements: at most 1-2 small accents per template (e.g. a tape strip, a thin border). No dense patterns, no overlapping text, no stacked effects.
- Show **up to 6 memory icons** prominently. If the user selected more, show the first 6 and a small "+N আরও" label (or make icons smaller, still within a clean grid).
- Show **at most 3 DNA bars** and **at most 3 sticker badges**.
- Strong hierarchy: title → era → memory collage → DNA → quote → footer.
- Palette stays within the site's off-white and light-brown identity.

### Canvas

Fixed logical size **1080 x 1350 (4:5 portrait)**, rendered at exactly that size inside `CardFrame`. The *preview* is scaled with CSS `transform: scale()` inside a wrapper that measures available width (`ResizeObserver`). **Export captures the unscaled node**, so preview and PNG share the same layout.

### Card content (all driven by state)

- Title (default "আমার ছোটবেলার ছোট্ট একটা টুকরো"; editable from presets or free text with a max length)
- Era line: "আমি বড় হয়েছি ২০০০-এর দশকে"
- Memory collage (predefined layouts per count range; never overlaps text)
- Top 3 DNA bars
- Up to 3 unlocked stickers/badges in reserved slots
- Two short lines: "আমার প্রিয় যুগ" and "আমার শৈশব" (derived from top category and top trait)
- Quote (from `quotes.js` or user-selected; default "জীবনটা ছিল সহজ। স্মৃতিগুলো ছিল অফুরন্ত।")
- Footer: "আমার জেনারেশন · আমার স্মৃতি" + Amar Generation branding

### Templates (`card/templates/`, all take the same `{ data }` props)

| Template | Look |
|---|---|
| **Minimal Memory** (default) | Off-white background, thin rules, lots of whitespace, small neat memory glyphs with labels, elegant serif title. Premium and calm. |
| **Retro Paper** | Warm cream paper tone (flat color or very subtle grain), memory icons on simple polaroid-style frames with tiny rotations (max ±3°), one tape strip. Diary feel without clutter. |
| **Y2K Pop** | Restrained retro palette (butter yellow, pale pink, baby blue plus brown), bold type, a simple pixel-style border or window-bar header, flat sticker badges. Playful but still tidy. |

### Template rules

- Only project fonts and inline SVG/local assets.
- Avoid `backdrop-filter`, heavy `filter`, `mask`, and `mix-blend-mode` (poor export support). Test anything borderline.
- Text must never overflow: set max lengths, truncate, or auto-fit long titles.
- `TemplateSwitcher`: three thumbnail buttons (touch-friendly, `aria-pressed`) that update the preview instantly.

---

## 11. PNG Export & Sharing (`lib/exportCard.js`)

- **Library:** `html-to-image` (`toPng`). Evaluate `html2canvas` only if Bangla/SVG rendering fails in testing.
- **Capture only the card node** (ref on the unscaled inner element of `CardFrame`), never the page UI. Pass `width`, `height`, and `style: { transform: 'none' }` so the outer preview scale does not affect output.
- **Steps:**
  1. `await document.fonts.ready`
  2. `toPng` with `pixelRatio: 2` (about 2160 x 2700; fall back to 1.5 if memory fails), `cacheBust: true`, `backgroundColor: '#FAF6EF'`
  3. **Safari/iOS quirk:** call `toPng` once to warm up fonts/images and discard it, then call again for the real output (or retry on failure)
  4. Convert the data URL to a `Blob`
- **Download:** object URL + `<a download="amar-generation-card.png">`, click, then revoke the URL.
- **Share:** if `navigator.canShare?.({ files: [file] })`, call `navigator.share({ files, title, text })`. Otherwise download and show a Bangla tip ("ছবিটি ডাউনলোড হয়েছে, এবার তোমার পছন্দের অ্যাপে শেয়ার করো।"). Ignore `AbortError` (user cancelled).
- **UI:** loading state ("তৈরি হচ্ছে..."), Bangla error message with retry, prominent "ছবি ডাউনলোড করো" button, sticky at the bottom on mobile.
- **Fonts:** `next/font` self-hosts fonts (same-origin), which helps embedding. If fonts still fail, use the library's `fontEmbedCSS` option.

---

## 12. Polish & Performance

- Lazy-load card/export code with `next/dynamic` on step 4 so the landing page stays light.
- Animate only `transform`/`opacity`, with short durations, all disabled under reduced motion.
- Metadata: Bangla title and description, `lang="bn"`, proper `viewport`, Open Graph tags.
- Bangla empty and error states: no era chosen, too few memories, storage unavailable, export failure.
- Keyboard and screen-reader pass: tiles are buttons, stepper uses `aria-current`, sensible focus order.

---

## 13. Test Checklist (must pass before finishing)

**Full flow:** landing → Create My Card → pick era → pick memories from >= 3 categories → see DNA and unlocked stickers → generate card → switch all three templates → download PNG → share (or fallback).

**Verify:**

- [ ] No horizontal scroll at 320, 360, 390, 768, 1280px
- [ ] Refresh mid-flow restores state; reset clears it; corrupt localStorage does not crash
- [ ] Changing era handles already-selected memories correctly
- [ ] DNA output changes with selections and matches the documented rule (add simple checks for `dna.js` and `unlocks.js`)
- [ ] All three templates look simple and clean with 3 memories, 6 memories, and 12 memories selected
- [ ] Long custom titles do not overflow any template
- [ ] Exported PNG: Bangla glyphs and conjuncts render correctly, art and stickers present, matches the preview, 4:5 portrait, no site UI in the image
- [ ] Export tested on Chrome desktop, Chrome Android, and Safari iOS
- [ ] Hero respects reduced-motion; both CTAs work
- [ ] `npm run build` and `npm run lint` pass; no TypeScript files added

---

## 14. Open Decision

The brief says "fully Bangla," but the specified hero strings include English (the eyebrow, `Create My Card`, `Explore Memories`, and the 🇧🇩 line). This plan keeps them **exactly as written**. Because all copy is centralized in `strings.js`, switching them to Bangla later (e.g. "আমার কার্ড বানাও", "স্মৃতিগুলো ঘুরে দেখো") is a one-file change.
