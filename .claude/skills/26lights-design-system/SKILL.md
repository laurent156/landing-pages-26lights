---
name: 26lights-design-system
description: >
  The 26lights landing-page design system — tokens, page skeleton, and the full component
  library (hero variants, cards, pricing, team, proof, illustrations, reveal/count-up scripts)
  extracted from the live pages in this repo (ai-production, growth-plan, malorie-dreyfus,
  arik-azoulay, jacqueline-c). Load this whenever building a new landing page in this repo,
  restyling/migrating a page to match the design system, adding a section to an existing
  page, or asked about 26lights' brand colors / business units (business=blue, tech=magenta,
  marketing=orange).
---

# 26lights landing-page design system

This repo holds standalone marketing landing pages for 26lights (a product/growth-engineering
studio). Each page is embedded on 26lights.com inside an Elementor iframe. They all share one
visual system — same font, same neutrals, same button/card/section recipes, same reveal-on-scroll
mechanic — but each is skinned to one of three **business units** via a single accent color.

Read this top-to-bottom the first time you build or migrate a page. Section headers let you
jump straight to a component once you know the system.

## 1. The three business units

26lights has three units, each with its own accent color layered on the same neutral base.
**Never mix accents on one page** — pick the unit the page belongs to and use only that
accent token throughout.

| Unit | Accent | Token prefix | Existing pages |
|---|---|---|---|
| **Business** (growth/consulting/coaching offers, personal consultant pages) | Blue | `--blue*` | `malorie-dreyfus`, `arik-azoulay`, `jacqueline-c`, `growth-plan`, `branding` |
| **Tech** (AI/engineering offers) | Magenta | `--magenta*` | `ai-production`, `ai-prototyping`, `ai-erp`, `ai-powered-automation` |
| **Marketing** | Orange | `--orange*` | *(no page built yet — see §2.3 before first use)* |

The neutrals (`--ink`, `--hero-bg`, `--gray-1`, `--gray-2`, `--light`, `--font`) are **identical
byte-for-byte** across every page in the repo regardless of unit. Only the accent block changes.

### 2.1 Shared neutrals (every page, every unit)

```css
:root {
  --ink: #0a0a0a;
  --hero-bg: #050505;
  --gray-1: #686868;
  --gray-2: #757575;
  --light: #F5F5F5;
  --font: "Kumbh Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

The tech-unit pages additionally define a small status palette reused for progress/checklist UI
(security-audit style cards, ✓/✗ lists) — include it if the page needs that kind of before/after
or status list:

```css
:root {
  --danger: #D92D20;
  --red-text: #C4271B;   /* 5.75:1 on white */
  --green: #059669;      /* bar fill, 3.23:1 vs track */
  --green-text: #0B7D5A; /* 5.13:1 on white */
  --green-on-dark: #34D399;
  --red-on-dark: #FF9C9C;
  --mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 2.2 Business unit — blue

```css
:root {
  --blue: #5363F5;
  --blue-text: #4B66ED;   /* slightly darker — used for small text/links on white */
  --blue-hover: #4150e8;
  --dark-card: #1B1A36;   /* solid dark surface for featured pricing cards */
}
```
Glows/gradients on this unit are written as `rgba(83,99,245, X)` (i.e. the `--blue` RGB
triplet) directly inside `radial-gradient`/`linear-gradient` — there's no separate glow token,
just reuse the same RGB numbers at different alphas.

### 2.3 Tech unit — magenta

```css
:root {
  --magenta: #DB187C;         /* fills + text on light (white text on it = 4.74:1) */
  --magenta-bright: #FE3B9B;  /* brand magenta: glows, highlights on dark */
  --magenta-hover: #C21169;
  --magenta-on-dark: #FF8FC8; /* magenta text on dark surfaces (9.4:1) */
  --magenta-tint: #FDF2F8;    /* pale tint for icon chips, pull-quotes */
}
```
This is the more complete token set (base / bright-on-dark / hover / on-dark / pale-tint) —
prefer copying **this** pattern, not the blue one, when standing up a brand-new unit, because
it already covers dark-hero and light-section needs separately.

### 2.4 Marketing unit — orange (proposed, not yet used anywhere)

No marketing page exists yet. When you build the first one, start from this proposal
(mirrors the magenta pattern) and get a quick visual sign-off before it ships broadly —
these hexes are a reasonable starting point, not an approved brand value:

```css
:root {
  --orange: #C4570A;          /* fills + text on light — check contrast before shipping */
  --orange-bright: #FF7A29;   /* brand-bright: glows, highlights on dark */
  --orange-hover: #A6480A;
  --orange-on-dark: #FFB27A;  /* orange text on dark surfaces */
  --orange-tint: #FFF4EC;     /* pale tint for icon chips, pull-quotes */
}
```
**Fastest way to build a marketing-unit page**: copy `ai-production/index.html`'s whole
`<style>` block (it's the most complete template — see §4), then do a mechanical find/replace:
`magenta` → `orange`, and swap the literal RGB triplet `254,59,155` (magenta-bright) →
`255,122,41` (orange-bright) and `219,24,124` (magenta) → `196,87,10` (orange) everywhere it
appears inside `rgba(...)` gradients. Everything else (class names, layout, spacing) carries
over unchanged.

## 3. File convention (read before writing any page)

- **Every page is one self-contained `.html` file** — no external requests, no CDN links, no
  separate CSS/JS files. This is required: pages are dropped into an Elementor "HTML" widget /
  iframe on 26lights.com with no build step and no other assets available.
- **The brand font is embedded as base64** inside a single `@font-face` rule at the top of
  `<style>` (~220KB of base64 TTF, `font-family: "Kumbh Sans"`). **Never retype or re-encode
  it.** Copy the exact block byte-for-byte from any existing page — e.g.:
  ```bash
  sed -n '9,11p' ai-production/index.html   # the @font-face rule, verbatim
  ```
  It is identical in every single page in this repo. Do the same for any other base64 image/logo
  you're reusing (team photos, client logos, tool logos) — extract with `sed`/a small Python
  script by line number rather than retyping, and never paste raw base64 through normal editing.
- **Photos/logos are inline base64 `<img src="data:...">`, not files** — except the handful of
  pages that also keep loose asset folders (e.g. `arik-azoulay/*.png`, `jacqueline-c/*.png`,
  `growth-plan/Images/`) for source-of-truth originals; the shipped page still inlines them.
- **Missing-photo placeholder convention** — when a page needs a photo slot that isn't ready
  yet, don't leave it empty: use a gradient placeholder with a centered caption, e.g.
  ```css
  .hero-figure.is-placeholder { background: linear-gradient(135deg, #181a33 0%, #0e1024 100%); }
  .hero-figure.is-placeholder::after {
    content: "Visual to come"; position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.18); font-size: 13px; letter-spacing: 1px; text-transform: uppercase;
  }
  ```
  (Use a light-tinted gradient + darker caption color for placeholders that sit on a white
  section instead of a dark one — see `.why-photo-col--placeholder` in `jacqueline-c`.)

## 4. Page skeleton (boilerplate)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>26lights - <!-- page title --></title>
<meta name="description" content="<!-- one-sentence hook -->">
<style>
@font-face {
  font-family: "Kumbh Sans";
  src: url("data:font/truetype;base64,<!-- copy verbatim from an existing page, see §3 -->");
  font-weight: 100 900;
  font-display: swap;
}
:root {
  /* shared neutrals (§2.1) + exactly one unit's accent block (§2.2/2.3/2.4) */
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font); background: #fff; color: var(--ink);
  -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; overflow-x: hidden;
}
.wrap { max-width: 1100px; margin: 0 auto; padding: 0 48px; }
section { padding: 96px 0; }
/* ... component CSS from §6+ ... */
</style>
</head>
<body>

<div class="page">

  <!-- HERO -->
  <section class="hero" data-screen-label="Hero">
    ...
  </section>

  <!-- more sections ... -->

</div>

<script>
document.documentElement.classList.add('js-reveal');
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (e) { io.observe(e); });
})();
/* + any page-specific entrance animation (count-up, SVG illustration WAAPI — see §11) */
</script>
<script>
/* Auto-resize: report page height to a parent iframe (Elementor embed) */
(function(){
  function h(){ var b=document.body, e=document.documentElement; return Math.max(b.scrollHeight, b.offsetHeight, e.scrollHeight, e.offsetHeight); }
  function send(){ try { parent.postMessage({ type: 'gp-height', height: h() }, '*'); } catch(err){} }
  window.addEventListener('load', send);
  window.addEventListener('resize', send);
  document.addEventListener('DOMContentLoaded', send);
  window.addEventListener('message', function(ev){ if (ev.data && ev.data.type === 'gp-request') send(); });
  if (window.ResizeObserver) { try { new ResizeObserver(send).observe(document.body); } catch(err){} }
  [100,400,900,1600,2600,4000].forEach(function(t){ setTimeout(send, t); });
  Array.prototype.forEach.call(document.images, function(img){ if(!img.complete) img.addEventListener('load', send); });
})();
</script>
</body>
</html>
```

Notes:
- `<div class="page">` wraps all sections; some older pages use `.wrap` directly on `<body>` —
  prefer the `.page` wrapper for new pages.
- `data-screen-label="..."` on `<section>` is used on some pages (production, growth-plan,
  malorie) as a hook for an internal screenshot/QA tool. It's optional but cheap — add it, one
  short label per section (`"Hero"`, `"Pricing"`, `"FAQ"`...).
- The **iframe auto-resize script is verbatim identical in every page** — never modify it.
- The reveal script is also identical; page-specific extras (count-up, SVG entrance animation)
  get appended into the *same* `<script>` tag or a second one, never replacing the reveal block.

## 5. Typography & section rhythm

```css
section { padding: 96px 0; }                       /* 64px on mobile, see §14 */
h2 {
  font-size: clamp(34px, 4vw, 50px);
  font-weight: 400–500;                              /* 400 on tech-unit pages, 500 on business-unit pages */
  letter-spacing: -0.5px; line-height: 1.1;
}
.section-label {
  font-size: 11–13px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase;
  color: var(--blue|magenta|orange); margin-bottom: 18–20px;
}
.sub-text, section > p { font-size: 17px; line-height: 1.6–1.7; color: var(--gray-1); max-width: 56–64ch; }
```
On a dark (`.bistre`/hero) section, flip `.section-label` to a translucent white
(`rgba(255,255,255,0.4)`) and `h2` to `#F7F7F7`.

## 6. Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 9px;
  background: var(--accent); color: #fff;
  font-size: 15px; font-weight: 500; border-radius: 8px; padding: 13px 24px;
  text-decoration: none; border: none; cursor: pointer;
  transition: background .15s ease, transform .15s ease; white-space: nowrap; font-family: inherit;
}
.btn:hover { background: var(--accent-hover); transform: translateY(-1px); }
.btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.btn svg { width: 17px; height: 17px; flex: none; }

.btn-ghost   { background: transparent; border: 1.5px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.92); } /* on dark bg */
.btn-ghost:hover { background: rgba(255,255,255,0.08); }
.btn-outline { background: #fff; border: 1px solid #e2e2ea; color: var(--ink); }                                    /* on light bg */
.btn-outline:hover { background: var(--light); }
.btn-light   { background: #fff; color: var(--ink); }                                                                /* primary CTA sitting on a dark/featured card */
.btn-light:hover { background: #f0f0f0; }
.btn-dark    { background: var(--ink); color: #fff; }                                                                /* alt primary on light bg (business-unit pages) */
.btn-dark:hover { background: #222; }
.btn-wide { width: 286px; }
```
Rule of thumb: `.btn` (solid accent) is the primary CTA everywhere; pick the ghost/outline/light
variant based on what background it sits on, never invent a new button style.

## 7. Section-level surfaces

**`.wrap`** — the standard content container, `max-width: 1100px` (some persona pages use
`1175px`), `padding: 0 48px` (or `0 40px`).

**`.bistre`** — the reusable dark, accent-tinted glow surface used for hero backgrounds, proof
sections, featured pricing cards, and final CTAs. Same recipe every time, only the accent RGB
triplet changes per unit:

```css
.bistre { position: relative; background-color: #050505; color: #fff; isolation: isolate; }
.bistre::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background:
    radial-gradient(85% 120% at 88% -12%, rgba(ACCENT_RGB,0.55) 0%, rgba(ACCENT_RGB,0.18) 32%, rgba(ACCENT_RGB,0) 58%),
    radial-gradient(110% 140% at 4% 120%, rgba(ACCENT_RGB,0.38) 0%, rgba(ACCENT_RGB,0) 52%),
    linear-gradient(150deg, #0d0812 0%, #22112a 46%, #120a16 100%);
}
```
`ACCENT_RGB` = `219,24,124` (magenta), `83,99,245` (blue), `196,87,10` (orange proposal). The
dark linear-gradient base color shifts slightly warmer/cooler per unit too (business unit uses
`#0a0a14 / #14132a / #0c0b18`) — keep it close to what's shown, exact hue isn't load-bearing.

## 8. Hero — two variants, pick by page type

### 8A. Product/offer hero (two-column, centered, visual card on the right)
Use for offer pages (tech-unit AI pages, `growth-plan`). Badges + headline + sub + CTAs on the
left; a glass "visual card" (progress bar, app mockup, chart) on the right.

```html
<section class="hero" data-screen-label="Hero">
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="hero-badges">
        <span class="badge"><svg ...></svg> Claim one</span>
        ...
      </div>
      <h1>Plain lead-in. <em>Accent-colored payoff clause.</em></h1>
      <p class="hero-sub">One sentence of context, ~20 words.</p>
      <div class="hero-ctas">
        <a href="..." class="btn">Primary CTA</a>
        <a href="..." class="btn btn-ghost"><svg ...></svg> Secondary CTA</a>
      </div>
    </div>
    <div class="hero-visual"><!-- glass card, see §13 for the language --></div>
  </div>
</section>
```
```css
.hero { position: relative; padding: 0; background: var(--hero-bg); overflow: hidden; }
.hero::before { /* same recipe as .bistre::before, §7 */ }
.hero-inner { position: relative; z-index: 4; max-width: 1100px; margin: 0 auto; padding: 84px 48px;
  display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 56px; align-items: center; }
.hero-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 26px; }
.badge {
  display: inline-flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600;
  color: rgba(255,255,255,0.88); background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.16);
  border-radius: 20px; padding: 6px 13px; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}
.badge svg { width: 14px; height: 14px; color: var(--accent-on-dark); flex: none; }
.hero h1 { font-size: clamp(40px, 4.9vw, 58px); font-weight: 400; line-height: 1.06; letter-spacing: -0.7px; color: #F7F7F7; }
.hero h1 em { font-style: normal; color: var(--accent-bright); }
.hero-sub { max-width: 500px; margin-top: 20px; font-size: 17px; font-weight: 300; line-height: 1.6; color: rgba(255,255,255,0.76); }
.hero-ctas { display: flex; gap: 14px; align-items: center; margin-top: 32px; flex-wrap: wrap; }
/* entrance: heroUp keyframe staggered across badges → h1 → sub → ctas → visual, see §11 */
```

### 8B. Persona/portrait hero (full-bleed photo + glass credential card)
Use for individual-consultant pages (`malorie-dreyfus`, `arik-azoulay`, `jacqueline-c`).
Fixed-height dark section, full-bleed portrait photo bleeding in from one side, a gradient
overlay for text legibility, headline positioned over it, and a small floating "glass"
credential card pinned to a bottom corner.

```html
<section class="hero" data-screen-label="Hero">
  <img class="hero-portrait" src="data:image/jpeg;base64,..." alt="">
  <div class="hero-overlay"></div>
  <div class="hero-inner">
    <h1>Name-first headline that reads as a promise.</h1>
    <p class="hero-sub">Supporting sentence.</p>
    <div class="hero-proof">
      <img class="hero-proof-avatar" src="..." alt="">
      <div class="hero-proof-text">
        <span class="hero-proof-quote">"One-line social proof quote."</span>
        <span class="hero-proof-name">Name, Role @ Company</span>
      </div>
    </div>
    <div class="hero-ctas"><a href="..." class="btn">Primary CTA</a></div>
  </div>
  <div class="hero-glass-card">
    <div class="hgc-name">CREDENTIAL</div>
    <div class="hgc-title">One line describing the credential.</div>
    <div class="hgc-tags"><span class="hgc-tag">Tag</span><span class="hgc-tag">Tag</span></div>
  </div>
</section>
```
```css
.hero { position: relative; height: 820px; background: var(--hero-bg); overflow: hidden; }
.hero-portrait { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 60% center; z-index: 1; }
.hero-overlay { position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(to right, rgba(5,5,16,0.88) 42%, rgba(5,5,16,0.2) 72%, rgba(5,5,16,0.05) 100%); }
.hero-inner { position: relative; z-index: 4; height: 100%; max-width: 1175px; margin: 0 auto; padding: 0 48px;
  display: flex; flex-direction: column; justify-content: center; }
.hero h1 { width: 580px; font-size: 58px; font-weight: 400; line-height: 66px; letter-spacing: -0.5px; color: #F7F7F7; }
.hero-sub { width: 520px; margin-top: 20px; font-size: 17px; line-height: 28px; color: rgba(255,255,255,0.75); }
.hero-proof { display: flex; align-items: center; gap: 14px; margin-top: 24px; }
.hero-proof-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.25); }
.hero-proof-quote { font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.8); font-style: italic; }
.hero-proof-name { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.04em; }
.hero-ctas { display: flex; gap: 14px; align-items: center; margin-top: 28px; }

/* the "liquid glass" credential card — reused as a floating chip pattern anywhere on dark hero art */
.hero-glass-card {
  position: absolute; bottom: 64px; right: 52px; z-index: 10; width: 260px;
  background: rgba(60,60,140,0.55); backdrop-filter: blur(24px) saturate(140%); -webkit-backdrop-filter: blur(24px) saturate(140%);
  border-radius: 24px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 16px 48px rgba(0,0,0,0.4);
  padding: 22px 24px 24px;
}
.hgc-name { font-size: 13px; font-weight: 700; letter-spacing: 1px; color: #fff; text-transform: uppercase; margin-bottom: 8px; }
.hgc-title { font-size: 14px; font-weight: 500; line-height: 20px; color: rgba(255,255,255,0.85); margin-bottom: 14px; }
.hgc-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.hgc-tag { font-size: 11px; font-weight: 600; letter-spacing: .4px; text-transform: uppercase; color: rgba(255,255,255,0.75);
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); border-radius: 20px; padding: 4px 12px; }
```
Mobile (`≤900px`): drop the portrait entirely, fall back to a `.bistre`-style gradient
background, and make every hero child `position: static` (see the `@media (max-width: 900px)`
block in any persona page for the exact override list).

## 9. Trust bar (logo strip under the hero)

Two flavors exist — pick by density: `arik`/`growth-plan` use a single row (label + logos
inline); `jacqueline` stacks the label above a full-width, space-between logo row (denser,
bigger client roster).

```css
.trust { padding: 36–44px 0; border-bottom: 1px solid #f0f0f0; }
.trust-inner { display: flex; align-items: center; gap: 44–48px; flex-wrap: wrap; }        /* single-row flavor */
.trust-label { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #bbb; }
.trust-logos { display: flex; align-items: center; gap: 36–40px; flex-wrap: wrap; }
.trust-logo { height: 28–46px; width: auto; opacity: 0.8–1; transition: opacity .2s ease; }
.trust-logo:hover { opacity: 1; }
```
The tech-unit equivalent is `.tools` / `.tool-chip` (§10) — a card-chip treatment rather than a
bare logo row, used when the "trusted by" is tools/integrations rather than client logos.

```css
/* .tools variant — frosted chips instead of bare logos (tech unit) */
.tools { position: relative; padding: 52px 0; background: linear-gradient(180deg, var(--accent-tint) 0%, #F7F5FB 55%, #ffffff 100%); }
.tool-chip {
  display: flex; align-items: center; justify-content: center; height: 75px; padding: 0 23px;
  background: rgba(255,255,255,0.72); border: 1px solid rgba(255,255,255,0.9); border-radius: 16px;
  backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
  box-shadow: 0 6px 20px rgba(80,20,60,0.07), inset 0 1px 0 rgba(255,255,255,0.85);
}
.tool-logo { height: 26px; width: auto; object-fit: contain; display: block; } /* bare-class selector — the <img> needs this exact class */
```
**A uniform `height` does not mean uniform visual size — check each logo by eye.** Source logo
files carry wildly different amounts of internal padding around the actual mark (some are
cropped tight to the ink, some have a lot of surrounding whitespace baked into the PNG/SVG
canvas), and some are stacked two-line lockups instead of a single-line wordmark. Constrain
every logo to the same `height` first, but then look at the rendered row: any logo whose visible
mark reads smaller or lighter than its neighbors needs its own boosted height, not a shrink of
the others. In practice a couple of `px` bump classes are enough:
```css
.tool-logo--boost-lg { height: 47px; } /* for a logo with heavy internal padding or a 2-line lockup, e.g. Vercel (padded canvas), OpenAI Codex (stacked icon+text) — 1.8× the base height */
```
Applied per-`<img>`, not per-position — if you swap which tool is 4th in the row, the boost
class travels with the logo that actually needs it. If the whole row later needs to grow or
shrink (e.g. "make everything 30% bigger"), scale every logo height by the same factor —
`.tool-logo`, `.tool-logo--boost-lg`, and `.tool-chip`'s own height/padding all move together so
the boosted logos stay proportional to the base ones instead of drifting back out of balance.

**Balanced row count — don't let `flex-wrap` leave an orphan trailing row.** A `tool-chip` row
left to wrap naturally breaks wherever the container width happens to run out, which can strand
1–2 logos alone on a final line (e.g. 9 logos wrapping 4/4/1). Once you know the total count,
split it into explicit rows yourself instead of trusting the wrap point:
```css
.tools-rows { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.tools-row { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
```
```html
<div class="tools-rows">
  <div class="tools-row"><!-- first 5 chips --></div>
  <div class="tools-row"><!-- remaining 4 chips --></div>
</div>
```
Rule of thumb: rows should differ by at most one item, and a lone row should never have
noticeably fewer logos than the others — for 9, that's 5+4 (or 3+3+3), never 4+4+1. Put the
larger row first. `flex-wrap: wrap` stays on each individual row only as a narrow-viewport
safety net, not as the thing deciding the split.

## 10. Feature / pillar grids (3 across, icon or number + heading + text)

The single most reused pattern in the system. Every page has some variant of "N short pitches
in a row": `.ways-grid` (Malorie/growth-plan), `.approach-grid` (growth-plan), `.services-grid`
(2-col, Malorie), `.recognize-grid` (Malorie's "do you recognize this" pain-point grid),
`.feat-grid` (tech unit, cards with a bordered box + optional illustration).

Minimal numbered/eyebrow version (no card chrome, just rhythm):
```css
.ways-grid, .approach-grid, .recognize-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36–56px; margin-top: 64px; }
.way .eyebrow, .r-item .num, .svc-num { font-size: 13–14px; font-weight: 500–600; color: var(--accent-text|accent); margin-bottom: 16px; }
.way h3, .r-item h3 { font-size: 24–26px; font-weight: 500; line-height: 1.15–1.2; color: var(--ink); margin-bottom: 14–18px; }
.way p, .r-item p { font-size: 15px; line-height: 1.6–1.65; color: var(--gray-1); }
.read-more, .detail-cta { display: inline-flex; align-items: center; gap: 8px; font-size: 14–15px; font-weight: 600; color: var(--accent-text); text-decoration: none; }
.read-more::after, .detail-cta::after { content: "\2192"; transition: transform .15s ease; }
.read-more:hover::after { transform: translateX(4px); }
```

Bordered-card version (tech unit `.feat`):
```css
.feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.feat { border: 1px solid #ececf2; border-radius: 16px; background: #fff; overflow: hidden; transition: border-color .2s ease, transform .2s ease; }
.feat:hover { border-color: #dcdce6; transform: translateY(-2px); }
.feat-body { padding: 26px 28px 0 28px 30px 0 or 0 30px 0; } /* pad varies: with vs without a top illustration slot */
.feat h3 { font-size: 21px; font-weight: 500; margin-bottom: 12px; }
.feat p { font-size: 15px; line-height: 1.65; color: var(--gray-1); }
/* icon-only variant (no illustration): a tinted rounded-square icon chip above the copy */
.feat-icon { width: 48px; height: 48px; border-radius: 12px; background: var(--accent-tint); color: var(--accent); display: flex; align-items: center; justify-content: center; }
```
All icons in this system are 24×24 viewBox, `fill="none" stroke="currentColor" stroke-width="1.5–2.2" stroke-linecap="round"` line icons — **never** fill-colored/multi-color icon sets; recolor by wrapping in a tinted box and letting `currentColor` inherit (see §13).

## 11. Detail / split sections (photo or graphic + copy, alternating sides)

`.detail-split` (growth-plan, generic) / `.why-split` (persona pages, photo-heavy) / production's
`.split-inner` (tech unit) are the same idea: an asymmetric two-column grid, one side a
photo/graphic, one side copy, with a `.flip` modifier to swap which side the visual sits on
every other instance (so alternating sections don't feel monotonous down the page).

```css
.detail-split { max-width: 1100px; margin: 0 auto; padding: 0 48px;
  display: grid; grid-template-columns: minmax(0,0.88fr) minmax(0,1.12fr); column-gap: 64px; align-items: center; }
.detail-split.flip .detail-photo { order: 2; }
.detail-photo { position: relative; overflow: hidden; border-radius: 18px; min-height: 380px; }
.detail-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.detail-title { font-size: clamp(32px, 3.6vw, 44px); font-weight: 500; line-height: 1.06; margin-bottom: 20px; }
.detail-lead { font-size: clamp(18px, 1.7vw, 21px); font-weight: 500; line-height: 1.4; margin-bottom: 18px; }
.detail-content p { font-size: 15px; line-height: 1.7; color: var(--gray-1); }
.pull-quote { margin: 26px 0 0; padding: 16px 20px; background: var(--accent-tint); border-radius: 10px; font-size: 16px; line-height: 1.55; color: var(--ink); }
```
`.detail-photo.detail-graphic` swaps the photo slot for a custom SVG panel (`.schema-panel`,
`.pm-flow`, `.gp-trajectory` — see §12) instead of an `<img>`; same grid, same flip modifier.

## 12. Custom illustration panels (dark, on-brand, entrance-animated)

Reused chrome for any small "abstract diagram" that needs to sit in a detail-split's visual
slot or a hero's visual slot on a dark background:

```css
.schema-panel, .pm-flow, .gp-trajectory {
  position: relative; width: 100%; max-width: 430–460px; background: #0a0a14 (dark) or #fff (light);
  border: 1px solid rgba(255,255,255,.10) or #ececf3; border-radius: 18px;
  box-shadow: 0 24px 60px rgba(20,20,60,0.10–0.22); overflow: hidden;
}
```
Inside, use plain SVG shapes styled with the unit's accent (`fill:rgba(ACCENT,.06); stroke:rgba(ACCENT,.5)`
for nodes/tasks, solid accent for the "current/end" node, a soft blurred glow `<div>` positioned
absolutely behind it at low opacity). Animate the entrance with the **Web Animations API**, not
CSS keyframes, gated on `prefers-reduced-motion` and triggered once via the same
IntersectionObserver used for `.reveal` — see the `pm-flow`/`gp-trajectory` script block in
`growth-plan/index.html` for the exact pattern (`el.animate([...], {duration, delay, easing})`
per `data-anim="pop|pulse|appear"` node, a looping glow pulse, a drawn line via
`stroke-dashoffset`).

The tech unit's version of this idea is the `fv-*` classes (feature-card mini diagrams: nodes,
links that "harden" from dashed to solid + green on reveal, a shield+check for an audit visual,
a code editor mockup with a self-correcting duplicate-line animation) — same spirit, CSS
keyframes gated by `.js-reveal .reveal.in` instead of WAAPI, because they're small and don't
loop.

The **funnel chart** (`.method-funnel`, reused verbatim across Arik/Jacqueline/growth-plan) is a
6-segment SVG funnel where one segment "lights up" accent-color on a loop, cycling through all 6
via `@keyframes cs1..cs6` / `ct1..ct6` on a 12s infinite timer, each keyframe a `0%,X% → Y%,Z%
→ 100%` fill flip — copy verbatim, it's fully self-contained and unit-color-swappable (only
`.seg5{fill:#5363F5}` / the `cs*` fill values need the accent swap).

**Layered draft-stack** (hero visual for "many iterations" stories, e.g. `ai-prototyping`) — a
solid, fully-opaque foreground card carrying the real content, with a couple of liquid-glass
"ghost" cards peeking out behind it (each tagged with a version label, `v1.0`, `v5.0`...),
conveying "many drafts converging on one, readable result." The **front card is the one that has
to be legible**, so it's the one that breaks from the glass language, not the ghosts behind it.

Positioning follows a client-supplied reference (fan pinned at one shared corner — every layer
rotates a little more and shrinks a little as it recedes, all in the *same* direction, rather
than a symmetric left/right spread):
```css
.stackwrap { position: relative; width: 300px; margin: 0 auto; }
.stack-ghost {
  position: absolute; inset: 0; border-radius: 22px;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.16); /* liquid glass, per §13 */
  transform-origin: top left; opacity: 0;
}
@keyframes stackFan { from { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0; } to { transform: translate(var(--fan-x), var(--fan-y)) rotate(var(--fan-r)) scale(var(--fan-s)); opacity: 1; } }
.stack-ghost.v5 { z-index: 2; background: rgba(255,255,255,0.09); --fan-x: 60px; --fan-y: 16px; --fan-r: 3deg; --fan-s: 0.94; animation: stackFan .8s var(--ease) .6s both; }
.stack-ghost.v1 { z-index: 1; --fan-x: 118px; --fan-y: 38px; --fan-r: 5.5deg; --fan-s: 0.87; animation: stackFan .8s var(--ease) .74s both; }
@media (prefers-reduced-motion: reduce) {
  .stack-ghost { animation: none; opacity: 1; transform: translate(var(--fan-x), var(--fan-y)) rotate(var(--fan-r)) scale(var(--fan-s)); }
}
/* the foreground card — opaque, its own light color scheme, NOT glass, no animation (always in place) */
.appcard { position: relative; z-index: 3; background: #fff; border: 1px solid rgba(10,10,20,0.06); border-radius: 22px; box-shadow: 0 30px 70px rgba(0,0,0,0.38); }
/* every label/value inside it uses the light-surface tokens (--ink, --gray-2, --magenta-tint…),
   not the dark-surface ones (#fff text, --magenta-on-dark) the rest of the hero uses */
```
Reads as: pin each ghost's top-left corner where it is, shrink it toward that corner
(`scale()`), rotate it around that same corner, *then* slide the whole result outward
(`translate()`) — `transform-origin: top left` plus that function order is what makes the fan
pivot from a shared corner instead of each layer's own center. The entrance animation runs the
same transform from an identity/invisible start, staggered ~140ms apart, back-to-front, so the
ghosts read as sliding out from behind the front card on load — a dedicated one-shot keyframe
like the hero's own entrance (§19), not the scroll-gated `.reveal` system.

**Wrong turns on the way to this, worth knowing before you build a similar stack:**
- *All layers at similar low opacity is illegible.* The first pass gave every layer — including
  the front card — the same ~0.07–0.10 glass alpha. It read as noise, not depth: the eye
  couldn't tell the layers apart, and the actual content (a balance, a transaction list) was
  sitting on near-invisible text. A stack like this needs exactly **one** layer that's fully
  legible; that's always the front one, since that's where the real content lives.
- *Don't fix it by making a back layer opaque instead* — that was tried next (an opaque white
  ghost card behind the still-glass front card) and broke worse: the front card's
  `backdrop-filter: blur()` picked up the solid white behind it, and its white-on-dark text
  disappeared into the resulting near-white blur. If a glass card ever needs to sit over
  something other than the plain dark hero gradient, that's a sign it should stop being glass,
  not that the thing behind it needs patching.
- *A symmetric left/right ghost spread isn't the same thing as a fan* — the first legible version
  offset the two ghosts in opposite directions from center. The client's own reference fans every
  layer the same way from one shared corner; if given a reference image, match its actual
  geometry (check pivot points, not just "does it look roughly stacked").

## 13. Glass / frosted-card language (used across hero visuals, tool chips, floating credential cards)

One recipe, reused everywhere something needs to look like "premium translucent UI floating
over the dark hero gradient":
```css
background: rgba(255,255,255,0.10);
border: 1px solid rgba(255,255,255,0.20);
border-radius: 20–24px;
box-shadow: 0 26px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14);
backdrop-filter: blur(22px) saturate(150%); -webkit-backdrop-filter: blur(22px) saturate(150%);
```
On a *light* section (e.g. the tools bar), lighten it: `background: rgba(255,255,255,0.72)`,
`border: 1px solid rgba(255,255,255,0.9)`, drop the inset highlight, soften the shadow to
`0 6px 20px rgba(80,20,60,0.07)`.

## 14. Cards library

| Class | Used for | Key traits |
|---|---|---|
| `.tcard` | team member (2–3 up) | circular grayscale photo, `h3` name, `.role` uppercase accent-colored, bio `p`, optional `.tags` chips |
| `.testi-card` | testimonial (3 up, progressive-reveal "show more") | quote in italic, avatar+name+role row pinned to bottom via `margin-top: auto` |
| `.case-card` | dark project/case-study stat card | `.case-stat` huge accent number (optionally `data-count` + count-up script, §15), result line, company/person meta |
| `.how-card` | "how it works" numbered step, dark bg | `.how-num` uppercase step label, `h3`, body copy; `.how-card--featured` modifier for a highlighted step (accent border+tint+glow) |
| `.why-card` | pain-point / reassurance grid item inside a hairline-grid frame | grid of cards separated by 2px gaps on a gray background (`.why-grid`), not individual borders |
| `.plan` / `.tcard`-style pricing card | pricing (grid-card layout) | see §16 |

Team grid alternative for a **6-across roster** (not 2–3 featured members):
```css
.team-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 30px 24px; }
.member-photo { aspect-ratio: 1/1; border-radius: 16px; overflow: hidden; }
.member-photo img { object-fit: cover; filter: grayscale(1) contrast(1.02); }
.member-role { display: inline-block; font-size: 12px; border: 1px solid #dadae3; border-radius: 20px; padding: 4px 12px; }
```
(collapses to `repeat(3,1fr)` at ≤980px, `repeat(2,1fr)` at ≤600px)

**Team section skeleton — two layouts, pick by how much intro copy the team needs.** The
side-by-side version (§ hero-adjacent pages: description left, `.tcard`s right in a
`0.85fr 1.15fr` grid) suits a longer pitch about the team. When the intro is short, a **centered
header above a full-width card row** reads cleaner and is the one to reach for by default:
```css
.team-head { max-width: 640px; margin: 0 auto 48px; text-align: center; }
.team-head h2 { color: var(--ink); margin-bottom: 16px; }
.team-head p { font-size: 17px; line-height: 1.7; color: var(--gray-1); }
.team-meta-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
```
```html
<section class="team">
  <div class="wrap">
    <div class="team-head">
      <div class="section-label reveal">…</div>
      <h2 class="reveal">…</h2>
      <p class="reveal">…</p>
      <div class="team-meta-row"><!-- status pill, chat link, or any other small meta — centered together --></div>
    </div>
    <div class="team-cards team-cards--three"><!-- .tcard × 3, full width, see table above --></div>
  </div>
</section>
```
Reuses the plain `.wrap` container (no bespoke `.team-inner` grid needed) — the same
header-above-grid skeleton as `.features-head`/`.pricing-head` elsewhere in the system, just with
`.tcard`s instead of feature or plan cards.

## 15. Pricing — three layouts, pick by offer shape

1. **Card grid** (tech unit `.plans`/`.plan`, Malorie's `.pricing-shell`) — 3–4 boxed plans side
   by side, one `.plan--featured` (dark, glowing, "Most popular" flag) standing out. Use when
   plans are genuinely parallel/comparable tiers.
2. **Row list** (`.pt-row`, Arik/Jacqueline) — a `name | price | CTA` grid row per line item,
   one `.pt-row--featured` gets an inset tinted background instead of a card border. Use when
   you have many thin offer lines rather than a few rich cards (denser, less "look at me").
3. **Shell with inline plans** (`Malorie` `.pricing-shell`) — one light gray rounded shell
   containing 4 columns (`.plan`), with the featured one a **dark card that visually breaks out**
   of the shell (`margin: -34px -6px` so it "pops" taller than its siblings). Use for exactly the
   3–4-tier product-ladder shape shown there.

Card grid (most reusable — copy this one by default):
```css
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
.plan { border: 1px solid #e6e6ee; border-radius: 18px; padding: 32px 28px; display: flex; flex-direction: column; height: 100%; }
.plan-price b { font-size: 34px; font-weight: 500; }
.plan-list { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.plan-list svg { width: 16px; height: 16px; color: var(--accent); } /* plain checkmark: <path d="m4 12.5 5 5 11-11"/> */
.plan .btn, .plan .plan-cta { margin-top: auto; width: 100%; }      /* CTA always pinned to card bottom */
.plan--featured { background: #140d18; color: #fff; box-shadow: 0 22px 54px rgba(20,10,25,0.28); }
.plan--featured::after { content:""; position:absolute; inset:0; background: radial-gradient(90% 70% at 88% -8%, rgba(ACCENT,.32) 0%, rgba(ACCENT,0) 58%); }
.plan-flag { font-size: 10.5px; font-weight: 700; text-transform: uppercase; color: #fff; background: var(--accent); border-radius: 5px; padding: 4px 9px; }
```

## 16. Social proof / "trusted by" band

Two flavors: a quiet **logo band** (`.proof` — `.bistre` dark surface, headline + short line on
one side, a 2–3-col logo grid on the other, each logo in a translucent chip), or a louder **case
stats band** (`.cases` — same dark gradient, but each cell is a `.case-card` with a huge animated
number + one-line result quote + company/person, i.e. proof via outcome not just logo).

```css
.proof-logos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.proof-cell { height: 84px; display: flex; align-items: center; justify-content: center; padding: 18px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; }
.proof-cell img { max-height: 28px; opacity: .68; } .proof-cell:hover img { opacity: 1; }
```

## 17. FAQ

Flat list, no accordion — every answer is shown, kept short on purpose:
```css
.faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; }
.faq-item { padding: 28px 4px; border-bottom: 1px solid #e6e6ee; }
.faq-item:first-child { border-top: 1px solid #e6e6ee; }
.faq-item h3 { font-size: 17px; font-weight: 600; margin-bottom: 9px; }
.faq-item p { font-size: 15px; line-height: 1.65; color: var(--gray-1); }
```

## 18. Final CTA

Always the last section before `</div>`, always `.bistre` (or the page's dark-hero gradient),
always headline + one CTA row + a small contact line (email / phone / city) — never a form:
```css
.final h2 { color: #fff; margin-bottom: 18px; max-width: 22ch; }
.final h2 em { font-style: normal; color: var(--accent-bright); }
.final p { font-size: 17px; font-weight: 300; color: rgba(255,255,255,0.8); max-width: 52ch; margin-bottom: 30px; }
.final-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
.final-contact { margin-top: 34px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 14px; color: rgba(255,255,255,0.55); display: flex; gap: 20px; flex-wrap: wrap; }
```

## 19. Interaction system

**Reveal-on-scroll** — the one mechanic every section uses. Add `class="reveal"` to any element
that should fade+rise in; stagger siblings with an inline `style="--reveal-delay:80ms"` (steps
of ~60–80ms). The script (verbatim, §4) adds `.js-reveal` to `<html>`, then flips `.reveal` →
`.reveal.in` the first time each element crosses 12% visibility, and un-observes it (fires once).
Always keep the `prefers-reduced-motion` escape hatch that shows everything at `opacity:1` with
no transition.

**Cascade trap: `.reveal` can silently eat a component's own hover transition.** Almost every
card on the page carries both a component class and `.reveal` (e.g. `class="feat reveal"`).
`transition` doesn't merge across two same-specificity rules — whichever selector comes later in
the stylesheet wins *entirely*, discarding the other rule's properties. `.reveal { transition:
opacity .65s, transform .65s; }` defined after `.feat { transition: border-color …, box-shadow …;
}` means `.feat`'s hover transition is dropped without any visible error — box-shadow/border-color
just snap instantly on `:hover` instead of easing, which reads as "cheap" rather than "broken"
(that's exactly what happened on `ai-prototyping`'s feature cards). Fix: give the compound
selector its own rule with every property both sides need, e.g.
```css
.feat.reveal { transition: opacity .65s var(--ease), transform .3s var(--ease), border-color .25s ease, box-shadow .5s var(--ease); }
```
`.feat.reveal` (specificity 0,2,0) always wins over `.reveal` alone (0,1,0), regardless of source
order. Whenever a card class needs its own `:hover` transition, check whether it also carries
`.reveal` and, if so, verify with `getComputedStyle(el).transition` that all the properties you
expect are actually present — don't assume the individual rules combine.

**Count-up numbers** — for a stat that should animate up when scrolled into view
(`.case-stat[data-count]`, growth-plan): put the target number in `data-count` (+ optional
`data-prefix`/`data-suffix`), start the visible text at 0, and ease it up over ~1.1s with a cubic
ease-out on `requestAnimationFrame`, gated by the same IntersectionObserver pattern, threshold
`0.6` (needs to be well into view, unlike `.reveal`'s 0.12). Skip straight to the final value
under reduced motion.

**Hero entrance** — a dedicated `heroFadeUp`/`heroUp` keyframe (not the generic `.reveal`
system, since the hero is always in view on load and needs to animate immediately rather than
wait for a scroll-triggered intersection): stagger badges → h1 → sub → ctas → visual by ~120ms
each, `cubic-bezier(0.16,1,0.3,1)`, translateY(24–28px)→0. Respect reduced motion by disabling
the animation, not by removing the final state.

**Testimonial "show more"** (`arik`/`jacqueline`) — extra testimonial cards start
`display:none; opacity:0`; a plain button toggles a `.open` class on the grid, which reveals the
hidden cards with a staggered fade-up (`nth-child` delays 0/80/160/240/320/400ms). No accordion
library, just a class toggle.

## 20. Responsive breakpoints

Two breakpoints, consistently:
- **`980px`** (some pages use `900px` — treat as equivalent, pick whichever the rest of that
  page already uses) — every multi-column grid collapses to 1 column (or the hero's 2-col grid
  stacks), `.flip` modifiers reset their `order`, dark full-bleed heroes drop the photo and
  switch every absolutely-positioned child to `position: static`.
- **`600px`** — `.wrap` padding drops from 48px to 24px, `section` padding drops from 96px to
  64px, any remaining 3-col grid that survived 980px collapses to 2 or 1, CTA buttons go full
  width (`width: 100%`).

## 21. Checklist — building or migrating a page

1. Decide the **business unit** (§1) → pick the accent token block (§2). If it's the first
   marketing-unit page, confirm the orange hexes (§2.4) before shipping widely.
2. Copy the page skeleton (§4): doctype/head, the `@font-face` block *extracted verbatim* from
   an existing page (never retyped), the shared `:root` neutrals + your unit's accent block,
   `<div class="page">`, both `<script>` blocks unmodified.
3. Pick a **hero variant** (§8A product-hero vs §8B persona-hero) based on whether the page
   sells an offer or introduces a person.
4. Build the body as a sequence of `<section>`s, reusing components from §9–§18 — trust bar,
   a feature/pillar grid, one or two detail-splits, team, proof/cases, pricing, FAQ, final CTA.
   Don't invent new section chrome if an existing pattern fits; do reuse `.flip` to alternate
   detail-split sides down the page.
5. Every icon is a 24×24 stroke line-icon, recolored via `currentColor` inside a tinted box —
   never a filled multi-color icon set, even if the source content (Tailwind exports, stock
   icon packs) used one. Keep the original path data, just re-skin the container (see the
   ai-prototyping migration in this repo's history for a worked example).
6. Tag every direct-child element that should animate in with `class="reveal"` (+ staggered
   `--reveal-delay` on siblings); leave the reveal script untouched.
7. If a photo isn't ready yet, use the placeholder recipe (§3), don't block on the asset.
8. Verify content in a real browser: check text against the source content 1:1, and don't trust
   a screenshot alone for anything below the first viewport on these pages — the heavy embedded
   font + backdrop-filter blur can make a preview-tool's headless renderer stall/tear on scroll
   even when the page is correct (confirmed against `ai-production` itself). Cross-check with
   the page's rendered text/accessibility tree, not just a screenshot, before concluding
   something is broken.
