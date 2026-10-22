# Amar Generation: Animated Scenery Hero (Implementation Plan)

Replaces the earlier "scrapbook collage" idea for the hero's right side / background. The hero becomes a **living, illustrated 90s Bangladeshi village scene** with gentle looping animations, inspired by the animated-scenery vibe of unseenbangladesh.com.

> **Reference note for the agent:** only the text of unseenbangladesh.com could be read, not its visuals. Do **not** copy its artwork. Build an original scene. If the owner supplies a screenshot, match its composition (layer arrangement, scale, mood) but keep all artwork original.

---

## 0. Ground Rules

- Stack unchanged: Next.js App Router, **JavaScript/JSX only**, Tailwind CSS, Lucide React, Framer Motion. No new dependencies (no Lottie, GSAP, Three.js, canvas libs).
- Inspect the existing repo first. Reuse tokens, `Button`, `Container`, fonts, `useReducedMotionSafe` from the main plan. Replace only the hero's visual composition (`HeroCollage`), keep the hero text/CTAs exactly as specified in the main plan.
- All art is **original inline SVG React components**. No external image URLs.
- **Do NOT include:** river, water, boats, or anything resembling the unseenbangladesh.com boat imagery. Keep water out of the scene entirely.
- Mobile-first. Test at 320, 360, 390, 768, 1280px. No horizontal scroll.
- Run `npm run build` and `npm run lint` after each phase.

---

## 1. Concept

A calm **golden-hour afternoon (বিকেল) in a 90s Bangladeshi village**, drawn in a flat, slightly hand-made style using the site's warm palette. The scene should feel like a moving childhood memory, not a busy cartoon.

**Mood:** warm, quiet, nostalgic. Slow movements. Nothing flashy. A viewer should notice new small details the longer they look.

**Palette (muted, extends existing tokens):**

| Role | Color idea |
|---|---|
| Sky top → horizon | `paper` `#FAF6EF` fading to soft peach/cream `#F3E1C8` |
| Sun | warm cream-gold `#F2C879` with a faint halo |
| Far hills / tree line | dusty sage-brown `#B9B08F` |
| Mid fields | muted olive `#A3A070` |
| Near ground | light brown `#B08968` / tan `#D9C3A0` |
| Linework / silhouettes | dark brown `#3E2C23` (ink) |
| Accents (sparingly) | rust `#B5651D`, faded red-pink `#C98A7A`, faded blue `#8EA4AE` for kites and clothes |

Max 1 muted green family. No bright saturated colors, no gradients beyond the sky and a faint sun halo.

---

## 2. Layout

### Mobile (default)
- Hero is `min-h-[100svh]`, single column.
- **Top:** eyebrow, H1, body, primary CTA, secondary CTA, small line, over the sky area (sky is a calm, low-detail zone so text stays readable).
- **Bottom:** the scene, anchored to the bottom edge, about **45-50svh** tall, full-bleed (edge to edge). Primary CTA must be visible without scrolling on a 360x640 screen.
- Scene is wider than the viewport (e.g. viewBox 1200x600, `preserveAspectRatio="xMidYMax slice"`) so it crops gracefully.

### Desktop (`lg:`)
- Full-bleed scene as the hero background, text block on the left over open sky (about 45% width), the busiest scene action (kids, horse) on the right 55%.
- Hero height about `min-h-[90svh]`.

### Text legibility
- Sky area behind text stays low-contrast and empty (no kites or birds crossing directly behind the H1 on mobile; keep them in the upper-right and far edges, or lower their opacity near the text).
- Text color `ink`. If contrast is under 4.5:1 anywhere, add a soft `paper` fade behind the text block (no hard boxes).

---

## 3. Scene Layers (back to front)

Each layer is its own SVG component in `components/hero/scene/`, positioned absolutely in a shared container. Parallax drift speeds increase toward the front.

| # | Layer | Contents | Motion |
|---|---|---|---|
| 1 | **Sky** | Gradient sky, large soft sun with halo | Sun halo breathes (opacity 0.7 ↔ 1, 8s) |
| 2 | **Far clouds** | 3-4 flat cloud shapes, low contrast | Drift left → right, 90-140s loop |
| 3 | **Distant birds** | Small V-shaped flock | Cross the sky, 40-60s loop, wing flap |
| 4 | **Kites** (see §4.1) | 3-4 kites with tails and strings | Sway, bob, tail ripple |
| 5 | **Far tree line / hills** | Palm, bamboo and mango silhouettes | Very slow drift (optional), gentle sway on 2-3 palms |
| 6 | **Village mid-ground** | 2-3 tin/thatch-roof huts, a TV antenna on one roof, drying clothes on a line, smoke from one chimney/stove | Smoke rises and fades; clothes flutter |
| 7 | **Rice field** | Rows of paddy in muted olive | Soft wave sway (staggered) |
| 8 | **Horse lane** (see §4.2) | A horse running across the field line | Left → right traverse, 22-28s loop |
| 9 | **Foreground ground** | Dirt path, grass tufts, a big tree (banyan or krishnachura) on one side with a swing | Grass sways; tree leaves flutter; swing swings |
| 10 | **Kids** (see §4.3) | The playing children | Per-character loops |
| 11 | **Ambient particles** | Butterflies, drifting leaves/seeds, 1-2 dragonflies | Slow random-looking (but pre-defined) paths |

Keep the **total animated elements under about 40** on desktop and **under about 25** on mobile (hide or simplify some on small screens).

---

## 4. Animated Elements (detailed spec)

### 4.1 Kites (ঘুড়ি) in the sky
- 3-4 kites: diamond shapes in muted colors (faded red-pink, cream, faded blue, rust) with thin cross-sticks and a tail of small paper bows.
- A thin string running down toward the horizon / a kid's hand on the ground (a curved line, kept simple; it can end behind the mid-ground).
- **Motion:** each kite has its own `translateY` bob (±6-10px, 4-7s), small rotation sway (±4-6°, 5-8s), and a tail that swings (rotate on a pivot, 2-3s). Different durations and delays so they never sync.
- One kite occasionally "dips and recovers" (a longer keyframe, about 14s).
- **Interaction (optional, desktop and tap):** tapping a kite makes it do a quick loop-de-loop (about 800ms), then return.

### 4.2 Horse running (ঘোড়া)
- Side-view flat illustration, dark brown/chestnut with ink outline, simple mane and tail.
- **Preferred build:** articulated SVG with separate groups for body, head/neck, tail, and four legs (each leg = upper + lower segment). Animate legs via rotation around joints in a looping gallop cycle (about 0.6-0.8s per cycle) using CSS keyframes with `transform-origin` at the joint. Add a small body bob (±3px) in sync.
- **Fallback if articulated rig looks poor:** 4-6 pose frames of the horse as separate `<g>` elements toggled via CSS `steps()` (frame-by-frame).
- **Traverse:** the horse runs left → right across the scene (`translateX` from -20% to 120%), 22-28s, then reappears from the left after a pause. Mirror (`scaleX(-1)`) not needed if always the same direction.
- Faint dust puffs behind the hooves (small circles that expand and fade).
- Place the horse on the field/path line in the mid-to-far ground so it reads as distant and small, not competing with the kids.

### 4.3 Kids playing (ছেলেমেয়েরা খেলছে)
Flat, simple figures (round heads, minimal faces or no face detail, 90s clothing: lungi/shorts, frocks, school-style shirts, bare feet). Mix of boys and girls. 4-5 children total, each with an independent loop:

1. **Child with চরকি (spinning pinwheel):** a child stands or runs holding a stick with a colorful paper/palm-leaf chorki. **The chorki spins continuously** (rotate 360° loop, about 0.8-1.2s linear). The child's free arm and legs have a gentle running or bounce cycle. Chorki spin speeds up for a moment when the child "runs" (optional speed variation using two keyframe sets).
2. **Child running with a stick and old tyre (টায়ার গড়ানো):** a classic 90s BD street toy. The tyre rolls (rotate) while the child jogs alongside, crossing the path left → right on a 14-18s loop.
3. **Children playing marbles (মার্বেল):** two children crouched over a small circle on the dirt. One flicks, a marble slides a short distance, they react (small head bob). Loop about 6s.
4. **Child on a tree swing (দোলনা):** swing rope pivots from a branch of the foreground tree, with a gentle pendulum (±14°, 3s ease-in-out).
5. **Child flying a kite (optional):** stands with arm raised, string leading up to one of the sky kites. Subtle arm tug every few seconds.

Optional extra, only if the scene still feels calm: a child with a বাঁশের লাঠি chasing a rolling hoop, or a girl skipping (দড়ি লাফ).

### 4.4 Birds (পাখি)
- **Distant flock:** 5-7 small "v" shapes crossing the sky in a loose group, wings flapping via `scaleY` toggle (0.5 ↔ 1, 0.35s), travel 40-60s.
- **Individual perched birds:** a crow (কাক) on a hut roof or antenna that occasionally hops or tilts its head; one or two sparrows (চড়ুই) on the clothes line.
- Occasional bird takes off from the tree and flies out of view (an infrequent 20-30s timeline).

### 4.5 Extra 90s village details (to enrich the vibe)
Pick from this list; each must stay small and quiet:

- **TV antenna** (রাতের টিভির অ্যান্টেনা) on a hut roof, with a small cloth tied to it fluttering.
- **Drying clothes** (saree, lungi, small shirts) on a line, swaying.
- **Hand pump / tube-well** (টিউবওয়েল) near a hut, with a bucket.
- **Cow or goat** grazing in the mid-ground, with occasional tail swish and head dip.
- **Hens and chicks** (মুরগি-ছানা) pecking near the huts.
- **Rickshaw** crossing far in the distance (small, slow, one pass every 40s), only if the horse and kids still feel uncluttered.
- **Bicycle** leaning on a hut wall or a tiny cyclist crossing far away.
- **Banana, palm, bamboo and mango trees**, swaying lightly.
- **Kash flowers (কাশফুল)** or **sunflower-like wildflowers** along the path, swaying.
- **Hanging lantern** on a hut veranda (subtle glow pulse).
- **Fireflies** if a "dusk" variant is added later (not in v1).
- **Smoke from a clay stove (চুলা)** rising and fading.
- **A matka (clay pot) or hand-fan (তালপাতার পাখা)** as tiny props near a hut.
- **Butterflies and dragonflies** on slow looping paths.
- **Falling leaves / seeds** drifting diagonally.

> Keep the scene readable: one clear focal area (kids + chorki + horse), supporting details around it, and calm negative space in the sky for the heading.

---

## 5. Folder Structure

```
src/components/hero/
  Hero.jsx                  # text block + <HeroScene />
  HeroScene.jsx             # container, layers, visibility handling
  scene/
    SkyLayer.jsx            # sky, sun, clouds
    FarBirds.jsx
    Kites.jsx
    TreeLine.jsx
    Village.jsx             # huts, antenna, clothes line, smoke
    RiceField.jsx
    Horse.jsx
    Foreground.jsx          # path, grass, big tree, swing
    Kids.jsx                # Chorki kid, tyre kid, marbles kids, swing kid
    Ambient.jsx             # butterflies, leaves, dragonflies
    sceneConfig.js          # durations, delays, positions, mobile visibility flags
  scene/scene.css           # keyframes (or in globals.css)
```

All timing values live in `sceneConfig.js` so the vibe can be tuned without touching components.

---

## 6. Technical Approach

- **Rendering:** each layer is inline SVG. The container uses a fixed viewBox (e.g. `0 0 1200 600`) and scales with width. Layers stacked with `absolute inset-0`.
- **Looping animation:** use **CSS keyframes** (`transform` and `opacity` only) for all continuous loops. They run on the compositor and are cheaper than JS animation.
- **Framer Motion:** use only for the initial **entrance** (sky fades in, then hills, then field, then kids pop in with small slide-up, text stagger) and optional tap interactions.
- Use `transform-box: fill-box; transform-origin: ...` on SVG groups so rotations pivot correctly (test in Safari).
- **Parallax drift:** slow horizontal CSS translate on far layers (clouds, birds, tree line). Optional subtle pointer or scroll parallax (±8px on desktop only), disabled on touch and reduced-motion.
- **Randomness:** do not use `Math.random()` during render (hydration mismatch). Use fixed arrays of positions/delays from `sceneConfig.js`.
- **Hydration:** the scene is server-rendered static SVG, and animations start via CSS. No client-only layout shift. Keep the scene as a client component only if interactions are added.

---

## 7. Performance & Accessibility

- Animate **only `transform` and `opacity`**. No animated `filter`, `blur`, or `box-shadow`.
- Avoid `will-change` on everything; apply it only to the few large moving groups (clouds, horse).
- **Pause when off-screen:** an `IntersectionObserver` toggles a `data-paused` attribute on the scene container, and CSS sets `animation-play-state: paused` for all children. Also pause when `document.hidden`.
- **Mobile:** hide or simplify the least important layers (second hut, rickshaw, dragonflies, extra clouds, leaves) via flags in `sceneConfig.js`. Target at least 50fps on a mid-range Android.
- **Reduced motion (`prefers-reduced-motion: reduce`):** disable all loops and traverses. Render a pleasing **static frame** (horse mid-gallop pose at a fixed position, chorki frozen, kites static). Keep only a very gentle opacity fade-in.
- Scene SVGs are decorative: `aria-hidden="true"`, `focusable="false"`. The scene must not capture focus or block taps on CTAs (`pointer-events-none` on non-interactive layers).
- SVG file size: keep the whole scene under about 150 KB of markup. Reuse symbols with `<defs>`/`<use>` for repeated shapes (clouds, grass tufts, birds, paddy rows).

---

## 8. Phases

1. **Static scene:** build all layers as static SVG, composed and balanced at mobile and desktop sizes. Get the composition and palette right before any motion.
2. **Ambient motion:** sun halo, clouds, birds, kites, grass/paddy sway, smoke, clothes line.
3. **Characters:** chorki kid, tyre kid, marbles kids, swing kid, then the horse gallop and traverse.
4. **Entrance animation:** Framer Motion staged reveal, text stagger, CTA hover.
5. **Interactions (optional):** tap kite loop, tap chorki spin-up, tap bird scatter.
6. **Responsive pass:** mobile crop, element visibility flags, CTA visible above the fold.
7. **Performance, reduced-motion and accessibility pass.**

Commit after each phase.

---

## 9. Acceptance Checklist

- [ ] Hero text and CTAs match the main plan exactly (copy unchanged)
- [ ] Scene clearly shows: kids playing, a **spinning chorki in a child's hand**, **kites in the sky**, **a running horse**, **birds flying**, plus several extra 90s village details
- [ ] **No river, water or boat** anywhere
- [ ] All art original and inline SVG; no external image requests
- [ ] No horizontal scroll at 320, 360, 390, 768, 1280px
- [ ] On 360x640, the primary CTA is visible without scrolling and text is readable over the sky
- [ ] Animations are slow and calm; nothing flashes or competes with the headline
- [ ] Animations pause off-screen and in background tabs
- [ ] `prefers-reduced-motion` shows a good static frame with no looping motion
- [ ] Smooth on a mid-range phone (no obvious jank); animated element counts within the limits in §3
- [ ] Rotations pivot correctly in Chrome, Safari (iOS) and Firefox
- [ ] `npm run build` and `npm run lint` pass; no TypeScript added

---

## 10. Optional Follow-ups (not in v1)

- Time-of-day toggle (morning / golden hour / dusk with fireflies).
- Season variants (monsoon rain, winter morning fog, autumn kash flowers).
- Subtle ambient sound toggle (off by default; needs user opt-in).
- Reuse parts of the scene (kites, birds, chorki) as stickers on the generated cards.
