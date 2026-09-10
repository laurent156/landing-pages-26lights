---
name: 26lights-design-system
description: >
  The 26lights landing-page design system — tokens, page skeleton, and the full component
  library (hero variants, cards, pricing, team, proof, illustrations, reveal/count-up scripts,
  bento galleries, sticky scroll-stacks) extracted from the live pages in this repo
  (ai-production, growth-plan, malorie-dreyfus, arik-azoulay, jacqueline-c, branding). Load this
  whenever building a new landing page in this repo, restyling/migrating a page to match the
  design system, adding a section to an existing page, or asked about 26lights' brand colors /
  business units (business=blue, tech=magenta, marketing=blue — orange was retired, §2.4).
---

# 26lights landing-page design system

This repo holds standalone marketing landing pages for 26lights (a product/growth-engineering
studio). Historically each page was one self-contained HTML file embedded on 26lights.com inside
an Elementor iframe — that is what most of this document describes, and those files are still the
source the recipes below were extracted from. They all share one visual system — same font, same
neutrals, same button/card/section recipes, same reveal-on-scroll mechanic — but each is skinned
to one of three **business units** via a single accent color.

**New pages are no longer built as standalone HTML.** The repo is migrating to a real stack
(Next.js → Strapi → Vercel), and the Next.js app at `web/` is now the canonical implementation —
build new pages there, not as another self-contained HTML file. The CSS/typography/spacing
recipes documented below still apply (they were ported into `web/src/styles/tokens.css` and
`web/src/styles/components.css` verbatim, and every ratio/value in this doc is what actually
ships), but instead of copy-pasting a `<section>` block per page you compose a shared React
component from `web/src/components/sections/` with page-specific data. Two live pages exist as
reference: `web/src/app/tech/mvp/page.tsx` and `web/src/app/tech/dev-team/page.tsx` — read one of
those, plus the components it imports, before building a third. Sections 3 and 4 below (file
convention, page skeleton) describe the *old* HTML boilerplate — skip them for a new page and go
straight to whichever component covers the section you need; the section numbers still map
1:1 to a component (§6 buttons → `Button.tsx`, §8 hero → `Hero.tsx` / `HeroFigure.tsx`, §9 trust
bar → `TrustBar.tsx`, §11 detail split → `DetailSplit.tsx` / `TextSection.tsx`, team/project/
final-CTA → `Team.tsx` / `Projects.tsx` / `FinalCta.tsx`, site-wide header/footer → `Header.tsx` /
`Footer.tsx`, §24).

**Vocabulary: "component" vs. "section type".** Both words come up a lot talking about this repo,
and they're not quite the same thing — this maps directly onto three real folders:

- **`web/src/components/sections/*.tsx`** — **section types**. Each one is a horizontal slice of
  a page (Team, Hero, FeatureGrid, Pricing, CaseResults, ProcessTabs, …) that takes props to vary
  its content per page. When someone says "the Team section" or "a features-type section", this
  is the folder they mean.
- **`web/src/components/ui/*.tsx`** — smaller primitives used *inside* section types, not full
  page slices on their own: `Button`, `Wrap`, `Bistre`, `CountUp`, `SectionCta`, `RevealSetup`,
  `PillarRecedeEffect`. A section type is usually built out of several of these.
- **`web/src/components/layout/*.tsx`** — site-wide chrome (`Header.tsx`, `Footer.tsx`), outside
  any individual page's own section stack.

**The same section type can have more than one implementation.** "Hero" is one conceptual role —
open the page — but three different components fill it, because the source pages don't all share
enough shape to force one component to do everything:
- `Hero.tsx` — offer pages: two-column grid, badges, CTA row, optional visual card.
- `PersonaHero.tsx` — consultant pages: full-bleed cutout portrait, floating glass credential card.
- `MarqueeHero.tsx` — branding: full-bleed text over glow, horizontal portfolio marquee underneath.

Picking the right one for a new page is a §8-style judgment call (what does the *real source*
actually give you to work with), not a technical constraint — see §8 for the two offer-hero
sub-variants and §8B/PersonaHero's own doc comment for the rest.

"Component" (unqualified) covers all three folders above — reach for "section type" specifically
when the distinction matters (e.g. comparing two hero *section types*, not two `ui/` primitives).

**This is a standalone site now, not an iframe-embedded fragment.** The stack is Claude, GitHub,
Strapi, Vercel — `web/` replaces 26lights.com outright, it does not get dropped into an Elementor
HTML widget. `layout.tsx` renders a real `<Header>` and `<Footer>` around every page (§24); do not
treat a page's own sections as the whole deliverable, and do not reintroduce the old iframe
height-postMessage script here — that only applies to the legacy per-page HTML files elsewhere in
this repo.

**`ServiceColumns.tsx`** — the three business units side by side, each column carrying its unit
name as a small accent eyebrow, an offer title ("On-demand tech expertise"), the real list of
named services inside that unit, and a "Know more" arrow-link to its hub page. Built for the
company-level homepage, where a visitor arrives not yet knowing which of the three units they
need, so the section works as the routing table into the rest of the site. Prefer
`FeatureGrid` when the columns are *arguments* (title + prose); reach for this only when
each column is genuinely a list of named offers. Note it stays on the page's single accent rather
than colouring each column with its own unit hue — §1's one-accent-per-page rule still holds on
the homepage, even though all three units appear on it.

**`Pricing.tsx`** — §15, three priced tiers side by side with one `featured` on a dark glow card
(radial accent gradient, like `.plan--featured`). Reach for this over `FeatureGrid` whenever
the real source states actual figures — burying a price in prose is what makes a visitor bounce to
ask "how much?" by email instead of buying. Every tier's `cta.href` should be the real checkout
link (Stripe, Calendly, WhatsApp — whatever the source actually uses), not a generic `#contact`.

**`ExpertCards.tsx`** — a column of argument next to two or three named experts shown in depth
(large photo, credential line, what they specifically do, skill-chip tags). Distinct from
`Team.tsx`'s full-roster grid of small avatars: reach for `Team` to prove the company has a team,
and for this when the argument is *seniority* and the page's whole promise rests on who exactly
would touch the visitor's work (validated on `ai-production`, whose two PhDs are the entire pitch).

**`FeatureShowcase.tsx`** — a centered eyebrow/statement/sub header with two CTAs (a solid
primary + a soft arrow-link), followed by a photo on one side and a clickable list of reasons on
the other. Each row is a single-open accordion (clicking one collapses the others — only the
active row's body is visible) and the photo swaps to match whichever row is active. Reach for
this over the plain `FeatureGrid` grid when a page has 3-5 "why us" style reasons and you
want the section to feel interactive rather than a static card layout (validated on
`tech/cto`'s "Why work with us?"). It is a client component (`"use client"`, holds its own
`useState` for the active row) — pass `items: {title, body, photo}[]`, a `primaryCta`, and an
optional `secondaryCta`.

**Reuse company-wide content verbatim across pages — do not re-derive it per page.** Team roster,
project/case-study data, and the "trusted by" logo set are the same real facts regardless of
which offer page they appear on. When a new page's live source shows a *subset* of the trust-bar
logos or a differently-worded project blurb, that is usually just what that one page happened to
render, not a deliberate per-page variant — reuse the exact data already in another page's
`page.tsx` (`TEAM`, the `Projects` items, the `TrustBar` logos array) rather than take the
page-specific subset at face value. Confirmed as a real mistake once: `tech/dev-team` initially
shipped a 4-logo trust bar because that is what the live dev-team page's DOM happened to contain,
when the actual set (same real clients) is the fuller 7-logo one already used on `tech/mvp`.

**A muted/opacity-dimmed logo or element is not the same claim as "grayscale."** `ai-production`'s
proof-logo grid renders each client's real colour (pink Lizy, red LAB BOX, black Cowboy) at
`opacity: .68` on a dark card — `filter: grayscale()` is nowhere in the source. At small size on a
dark background this reads, at a glance, as a uniformly muted grey wall, which is a legitimate
reason a reviewer asks "weren't these grey?" — verify with `getComputedStyle(...).filter` and
`.opacity` before either agreeing or "fixing" it; don't take the visual impression as ground truth
in either direction.

**Bespoke CSS/SVG illustrations are real page content, not optional polish to wave through.**
`ai-production` pairs two sections with hand-built illustrations — an animated terminal
(`.code-card`, AI's line errors at the production wall, 26lights fixes it, it ships) and three
SVG diagrams on the "What we do" cards (a self-deduplicating code editor, a Stripe/OAuth/API
integration diagram, a security-checklist shield) — each wired to the same `.reveal`/`.js-reveal`
mechanism everything else uses, via per-element `--d`/`--reveal-delay` stagger. A first pass
substituted plain text sections (`TextSection`, `ApproachSection`) for both, reasoning that
porting bespoke animated illustrations across 4 similar AI pages would be slow — that is a real
scope tradeoff worth naming out loud to the user, not a simplification to make silently: caught
only because the user asked "tu repasses bien sur tout?" after catching an unrelated, smaller gap
(the missing proof logos, below). When a section's whole visual identity is a custom illustration,
treat dropping it as equivalent to dropping a paragraph of real copy — flag it, don't quietly swap
in the nearest existing component.

**When rebuilding a page from its live source, verify structure via the DOM, not just extracted
text.** A plain text-only read of a live page reliably misses: images (client/tool logos, staff
photos) that carry no surrounding text of their own; which heading is an eyebrow label versus the
real title (both can render as literal `<h2>` tags with no semantic distinction in the markup);
and content-vs-photo pairings when a page's build tool splits a section across sibling DOM nodes
that don't line up with `.closest('section')`. Confirmed missed at least twice: a stat row and a
named testimonial photo on `tech/mvp`, and a page-specific trust bar plus a 16-logo tools grid on
`tech/dev-team` — all four were invisible to a text-only scrape and only surfaced by walking up
from a distinctive text match to find the real image siblings. **Do not restructure real content
into an invented section shape to fill a gap** — if a paragraph reads as one block on the live
page, do not split it into its own titled sub-section with a fabricated eyebrow/CTA/photo unless
the source actually presents it that way (confirmed mistake: `tech/dev-team`'s "Partnership, no
ownership" paragraph was really the fourth reason under "Why work with us", not a standalone
section — it only looked separate because of where it fell in a flattened text extraction).

Read this top-to-bottom the first time you build or migrate a page. Section headers let you
jump straight to a component once you know the system.

**Inserting a new CSS rule by string-matching an anchor like `".hero-ctas {"` can land inside a
compound selector instead of before it — verify the diff, don't just trust the anchor matched
where intended.** Adding `.hero-note` this way spliced it into the middle of
`.hero-inner.no-visual .hero-badges,\n.hero-inner.no-visual .hero-ctas { justify-content: center; }`
— the tool matched the literal substring `.hero-ctas {` that happened to sit inside that
multi-line selector, not a top-level rule. The result compiled without any CSS error (a comment
between two selectors in a list is syntactically legal) but silently turned into two different
bugs: `.hero-note` became wrongly scoped to only the no-visual hero variant, and — the one that
actually got noticed — `.hero-ctas { justify-content: center; }` became **global, unscoped**,
centering the CTA row's buttons on every two-column hero site-wide (`tech/mvp`, `tech/dev-team`,
`tech/cto`, `ai/production`, the homepage) instead of only the intentional no-visual/centered
variant. It read as "the buy button is indented, off to the right" — worse on mobile, where the
button is much narrower than its full-width flex container so the centering offset is large and
obvious, but present at every width. Confirmed only when the user compared a hero screenshot
against the H1's left edge; a glance at desktop alone didn't make it obvious since two full-width
buttons leave less empty space for `justify-content: center` to redistribute. When you append or
insert a CSS block programmatically, re-read the few lines immediately around the insertion point
afterward and confirm the selector list you expected to still exist, still does, verbatim.

**Every page must set its own `data-unit`, or it silently renders in `layout.tsx`'s default
(`business`/blue).** `[data-unit="business"|"tech"|"marketing"]` on an element retargets every
`--accent-*` alias for that subtree (§2); `layout.tsx` sets `business` on `<html>` for the site
chrome (header/footer stay one consistent blue identity regardless of which page you're on — do
not change that), but nothing below it overrides this per page. Confirmed shipped wrong on six
pages before being caught: `tech/mvp`, `tech/dev-team`, `tech/audit`, `tech/cto`, `tech/erp`, and
`ai/production` all rendered in business blue despite being Tech-unit pages (their own ported CSS
even defines `--magenta` as the accent) — nobody had added `data-unit="tech"` to any of them. Fix:
put `data-unit="<unit>"` on the page's own top-level wrapper div (`<div data-unit="tech"><main>…`),
never on `<html>` — that keeps the header/footer on business blue while the page content takes on
its real unit's accent. When starting a new page, set this **first**, before writing content, or
it is easy to build an entire page and only notice the wrong colour by explicitly checking
`getComputedStyle(...).getPropertyValue('--accent-text')`, which is what caught it here — a
glance at the rendered page did not, because plausible-looking blue and correct magenta are not
obviously "wrong" side by side without a reference to compare against.

**The accent split: background stays blue everywhere; every foreground colored element follows
the unit.** This took three rounds of correction in one session to land on — read it carefully
before touching any accent-related CSS, and see `tokens.css`'s own comment for the enforcement
rule. Final version, confirmed against `tech/erp` (the page the user pointed to as "the one page
you got right"):

- **`--glow-rgb` and `--bistre-base-1/2/3` (tokens.css) are fixed to blue, unconditionally, with
  no `[data-unit]` override.** These drive only the large dark-surface background washes —
  `.bistre::before`, `.hero::before`, `.value-split::before`, `.appr-card--bistre::before`,
  `.plan--featured::after`, `.split--light::before`, `.feat-visual::before`, `.tools`'s own tint —
  every one of them reads `--glow-rgb`, never `--accent-rgb`. This is "le fond" — it never
  changes, on any page, regardless of unit.
- **`--accent` and every other alias — `--accent-text`, `--accent-hover`, `--accent-bright`,
  `--accent-on-dark`, `--accent-tint`, and `--accent-rgb` itself when used for a small foreground
  border/tint (not a background wash), e.g. `.site-mega-featured a`'s underline or
  `.appcard-insight`'s border — do vary per `[data-unit]`.** Buttons, section-labels, icons,
  badges, arrow-links, chip tints: all of it. "Tous les éléments colorés" (the user's words) means
  exactly that — not just `.btn`, everything foreground.
- **`data-unit="tech"` covers both the general Tech family (MVP, Dev Team, Tech Audit, CTO, ERP
  Implementation) and every AI-branded page** (`ai/production`, `ai/prototyping`, `ai/erp`,
  `ai/powered-automation`) — one shared magenta foreground accent, put on each page's own
  top-level wrapper div (never on `<html>` — `layout.tsx` hardcodes `business` there for the site
  chrome, which must stay blue always so header/footer read as one consistent identity across
  every page). `data-unit="marketing"` gets the same treatment with orange, whenever a Marketing
  page exists.
- **When adding a new background-wash rule, reach for `--glow-rgb` by default — reach for
  `--accent-rgb` only for a genuinely small foreground accent (a thin border, an icon tint), and
  say why in a comment.** Getting this backwards is the exact mistake that shipped and had to be
  unwound twice: once when every accent-colored surface (including the backgrounds) was retinted
  per unit, and once when a first attempt to fix that centered a `--btn-accent`-only split before
  the user clarified they meant *only* the background stays fixed, not everything-but-the-button.

## 1. The three business units

26lights has three units, each with its own accent color layered on the same neutral base.
**Never mix accents on one page** — pick the unit the page belongs to and use only that
accent token throughout.

| Unit | Accent | Token prefix | Existing pages |
|---|---|---|---|
| **Business** (growth/consulting/coaching offers, personal consultant pages, general tech-adjacent services) | Blue | `--blue*` | `malorie-dreyfus`, `arik-azoulay`, `jacqueline-c`, `growth-plan`, `web/tech/mvp` |
| **Tech** (offers that are specifically about AI-built software) | Magenta | `--magenta*` | `ai-production`, `ai-prototyping`, `ai-erp`, `ai-powered-automation` |
| **Marketing** | Blue (no override — orange was retired, §2.4) | `--blue*` | `marketing`, `branding`, `go-to-market`, `nurturing`, `nurturing-marketing-led`, `video-creation` |

**Don't pattern-match the unit from the live site's URL path.** 26lights.com groups a wide
set of offers under one `/tech/...` nav section — MVP building, Dev Team, Tech Audit, CTO as a
Service, DRP, ERP/Odoo implementation — alongside the actually-AI-specific pages (AI Prototyping,
AI ERP, AI-Powered Automation, vibe-coding). Magenta is reserved for that AI-specific subset only.
A page like `/tech/mvp/` is a general build-a-product engagement, not an AI offer, so it takes the
**business** (blue) unit — confirmed when rebuilding it in the new stack, where the first pass
defaulted it to magenta purely from the URL and had to be corrected.

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
  --blue-text: #3D56E0;   /* darker — used for small text/links on white */
  --blue-hover: #4150e8;
  --blue-on-dark: #7C89F7; /* lightened — small/bold text on a bistre surface */
  --dark-card: #1B1A36;   /* solid dark surface for featured pricing cards */
}
```
Glows/gradients on this unit are written as `rgba(83,99,245, X)` (i.e. the `--blue` RGB
triplet) directly inside `radial-gradient`/`linear-gradient` — there's no separate glow token,
just reuse the same RGB numbers at different alphas.

**`--blue-on-dark` and the `--blue-text` value were both corrected by a WCAG contrast audit
(`a11y-architect`) on the `tech/mvp` Next.js build.** Before the fix, business was the only
unit whose `--accent-on-dark` alias pointed straight back at the plain accent instead of a
genuinely lightened variant the way `--magenta-on-dark` (§2.3) and `--orange-on-dark` (§2.4)
already do — small/bold blue text on a `.bistre` surface (a section eyebrow, a card heading)
only cleared ~3.3–4.2:1 there, short of the 4.5:1 AA floor for normal text. `--blue-text` was
also found riding the AA line (4.55:1 on `#fafafa`, essentially no margin). **When adding a
new unit or a new `--accent-on-dark`-style alias, verify the actual contrast ratio against a
real dark surface rather than assuming the base accent is legible — it usually is not for
text below the large-text threshold.**

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

### 2.4 Marketing unit — retired orange, now plain blue (2026-09-08)

**Superseded — kept only as the record of why.** Marketing shipped on `#feb93e` for one day
(`marketing`, `branding`, `go-to-market`, `nurturing`, `nurturing-marketing-led`,
`video-creation`) and it measured **1.72:1 on white** against a 4.5:1 requirement — the ramp had
been collapsed to a single value with no real text step, unlike blue (`--blue-text`) and magenta,
which both pass. Rather than manufacture a third accent's text step for a colour nobody had
signed off on, the call was to drop it: `tokens.css`'s `[data-unit="marketing"]` block is now
empty (a comment explaining this, nothing else), so `[data-unit="marketing"]` pages simply
inherit the `:root` default — plain blue, same as the business unit.

**What this means building a marketing-unit page today:** do nothing accent-related. `data-unit
="marketing"` on the page wrapper is still correct (keeps the unit semantically tagged even
though it carries no override), and every `--accent*`/`--blue*` reference in this doc already
does the right thing with no extra step. There is no orange token left to reach for — if you see
one in an old page or a stale doc passage, that's drift, not a still-valid option.

## 3. File convention — LEGACY standalone pages only

> **This whole section applies only to the old single-file pages at the repo root**
> (`ai-production/index.html`, `growth-plan/`, `malorie-dreyfus/`, …), which are embedded in
> Elementor iframes on the live WordPress site. **The `web/` Next.js app — where all current work
> happens — follows none of it**: real components under `web/src/components/`, styles in
> `web/src/styles/{tokens,components}.css`, fonts via `next/font`, images as files under
> `web/public/` served through `next/image`. Read §§5-29 for the app; read this section only when
> touching a root-level legacy page.

- **Every legacy page is one self-contained `.html` file** — no external requests, no CDN links, no
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
- **Processing source images before embedding** — macOS ships `sips` (no ImageMagick/Pillow
  needed): resize with `sips -Z <maxdim> in.png --out out.png` (caps the *long* edge, keeps
  aspect), re-encode to a smaller JPEG with `sips -s format jpeg -s formatOptions 80 in.png
  --out out.jpg`. For a gallery of many photos, cap the long edge around 1100px at quality 80 —
  that kept nineteen portfolio shots (`branding`'s bento, §22) at 35–210KB each (~2.5MB total)
  instead of the 29MB of source PNGs, in line with this repo's existing asset-weight budget.
- **"Zoom" a photo that reads too loose inside its tile by cropping tighter, not by scaling in
  CSS.** `object-fit: cover` already crops to the tile's own aspect ratio, but if the subject
  itself (a logo mockup, a UI screenshot) still reads small because the source photo has a lot
  of dead space around it, fix that before embedding: center-crop the source to a smaller box at
  the same aspect ratio — for a 1.2× zoom, crop to `width/1.2 × height/1.2` centered on the
  original (`sips -c <h> <w> in.png --out cropped.png`), then resize that crop back up to the
  normal embed size as above. This lands cleaner than a CSS `transform: scale()` on the `<img>`,
  which would need to compose with any hover-zoom transition already on that element instead of
  just replacing it.

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
.wrap { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
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

Values below are what the `web/` app actually renders (verified against `globals.css` and
`components.css`, not what an earlier draft of this doc claimed):

```css
section { padding: 96px 0; }                       /* 64px on mobile, see §14 */
h2 {
  font-size: clamp(32px, 3.6vw, 44px);               /* globals.css — renders 26px at 390px */
  font-weight: 400–500;                              /* 400 on tech-unit pages, 500 on business-unit pages */
  letter-spacing: -0.5px; line-height: 1.1;
}
.section-label {
  font-size: 13px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase;
  color: var(--accent-text);                         /* never a raw unit colour — see §2.4 */
  margin-bottom: 18–20px;
}
.sub-text, section > p { font-size: 17px; line-height: 1.5; color: var(--gray-1); max-width: 56–64ch; }
```
On a dark (`.bistre`/hero) section, flip `.section-label` to a translucent white
(`rgba(255,255,255,0.4)`) and `h2` to `#F7F7F7`.

**No two adjacent sections may share the same background.** Every section resolves to one of:
white, the light-gray `alt` tint (`#fafafa`/`#F5F5F5`), or `.bistre` dark — and a page reads as
a sequence of distinct blocks only when consecutive sections alternate between them. This has
recurred three times in this repo (two stacked white sections back to back on `nurturing` and
`nurturing-marketing-led`, then again on a freshly-built `tech/drp`) — always the same shape:
a component's *default* background (no `alt`, no `bistre`) is white, so two defaults in a row
are invisibly identical even though nothing in either component call looks wrong on its own.
Before calling a page done, list every section's actual rendered background in order (a plain
`getComputedStyle(...).backgroundColor` walk over each `[data-screen-label]`, since a class name
like `alt` doesn't prove the section that follows it isn't *also* plain) and fix any adjacent
pair that matches — usually by toggling one section's `alt`/`bistre` flag, never by inventing a
new surface color. Watch for a bar-component (`TrustBar`, `MiniCtaBanner`) sitting between two
content sections too — its background counts the same as any other section's for this rule.

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

**`.wrap`** — the standard content container, `max-width: 1280px` (widened from the original
1100px across every Next.js page in `web/` — validated on `tech/erp`, more breathing room on
the 1440px+ viewports the multi-column bento/tool-group layouts get viewed on; the old HTML
pages below still use 1100px, and persona pages used `1175px`).

**`.bistre`** — the reusable dark, accent-tinted glow surface used for hero backgrounds, proof
sections, featured pricing cards, and final CTAs. In the `web/` app the recipe is identical on
every unit: `tokens.css` pins `--glow-rgb` to the blue triplet site-wide on purpose, so a magenta
or orange page still gets the same blue-violet dark. Do not re-tint it per unit — an earlier
draft of this doc said the triplet changes per unit, and it does not.

Four surfaces still hand-roll their own dark base instead of using this recipe — `.cases`,
`.method`, `.gp-trajectory__glow`, `.appr-card--bistre`. They read as slightly-wrong copies of
the house dark; fold them in when you next touch them. The legacy root-level HTML pages do vary
the triplet per unit, as below:

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

**The alpha/stop values above are the ones that drift — check them, don't assume them.**
`arik-azoulay`, `jacqueline-c`, and `malorie-dreyfus` all shipped with inflated first-gradient
alpha/stop values (seen: `0.92`/`0.30`/`56%` and `0.45`/`50%`, vs. the `0.55`/`0.18`/`58%` and
`0.38`/`52%` above) before being corrected to this exact recipe — three for three. Whenever
touching a `.bistre` or hero-glow background on any page, diff its actual `rgba(...)` numbers
against this block rather than assuming a prior page already got it right.

## 8. Hero — two variants, pick by page type

### 8A. Product/offer hero (two-column, centered, visual card on the right)
Use for offer pages (tech-unit AI pages, `growth-plan`). Badges + headline + sub + CTAs on the
left; a glass "visual card" (progress bar, app mockup, chart) on the right.

**Prefer a real photo over an illustrated card whenever one exists for the page.** The glass
"visual card" pattern below (progress bar, checklist, chart) is a fallback for pages that have
no real photography to show — it's not the default. `growth-plan`'s hero uses a real "team at
work" photo (`.hero-figure`, aspect-ratio 4/5, framed with a border/shadow, see §8B's cutout
variant for the framing recipe) and that's the validated look for any offer page that has one.
A first pass on the `tech/mvp` rebuild reached for an invented illustration before a real photo
was pointed out as the better, already-approved choice — check for a usable photo first.
Skip the `.hero-badges` pill entirely unless the page actually needs to claim something specific
(an offer, a limited slot) — an empty/generic badge is worse than no badge.

**Reversed order (visual on the left, copy on the right)** is a same-styling variant of this
hero — pass `reverse` to `Hero.tsx` (adds `.reverse` to `.hero-inner`, which sets `order: -1` on
the visual column via CSS `order` — no change to the dark/bistre background, copy, or CTAs).
Reach for it purely for visual rhythm when a page's hero would otherwise look identical to
another page right above it in the nav, not as a signal of anything semantic (validated on
`tech/cto`).

**`visualAlign="stretch"` is only for a visual meant to fill the column both ways — check the real
source's own width for that visual before reaching for it.** It shipped wrongly applied to
`ai-prototyping`'s hero once: that page's `.stackwrap` sets an explicit fixed `width: 300px`
(centered, with two fanned "ghost" cards behind it — the width matters to the fan effect), and
`visual-stretch`'s `.hero-visual-in > * { width: 100% }` silently overrode it to fill the entire
column (~629px), stretching a card that was supposed to stay compact. Caught only when the user
asked to compare the built width against the real source's. Use it for a visual with no width
opinion of its own (`ai-production`'s `.prog-card`, which is a plain block with no explicit
width) — never for one that deliberately sets its own fixed size.

**Hero height rule — fill most of the first screen together with the trust bar, not the hero
alone.** `.hero` (in `components.css`) is `min-height: calc((100vh - 107px) * 0.85)` — `107px` is
the real measured height of `.trust` (§9) at desktop width, so hero + trust bar land almost
exactly at the viewport fold; the `* 0.85` keeps it from reading as a rigid, perfectly-snapped
100vh block and lets the next section peek in. On mobile (`≤900px`) this is overridden back to
`min-height: auto` — the trust bar wraps to more rows there and its height stops being
predictable, so let the hero size to its own content instead of fighting the calc. Apply this
same formula to any new full-bleed dark hero rather than inventing a fixed px height per page
(validated through several rounds of user sizing feedback on `tech/erp`).

The `.hero-inner.no-visual` variant (centered, no visual column — used whenever `Hero` gets no
`visual` prop, see §8 boilerplate below) uses **asymmetric** top/bottom padding: `padding-top:
120px` but `padding-bottom: 72px`. Because `.hero`'s content is vertically centered inside the
`min-height` box, trimming only the inner box's own bottom padding (not the top) pulls the CTA
button closer to the section's bottom edge without also shrinking the gap above the headline —
a straight symmetric padding cut moves both gaps by the same amount and doesn't fix a
bottom-heavy hero on its own.

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
.hero-inner { position: relative; z-index: 4; max-width: 1280px; margin: 0 auto; padding: 84px 48px;
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
.hero-proof-avatar { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.25); }
.hero-proof-quote { font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.8); font-style: italic; }
.hero-proof-name { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.04em; }
.hero-ctas { display: flex; gap: 14px; align-items: center; margin-top: 28px; }
```
**Check for a duplicate, dead `.hero-proof` rule before trusting this one — it has shipped
twice.** Both `arik-azoulay` and `jacqueline-c` carried an *earlier*, unused `.hero-proof`
definition (an italic quote-style block with `border-left`/`padding-left`/`width: 500px`) left
over from before the page switched to this avatar+quote flex layout. CSS cascades per property,
so the dead rule's untouched properties (notably `width`/`max-width`) kept quietly applying on
top of the real one — on `arik-azoulay` this showed up as a stray blue vertical bar next to the
proof avatar; on `jacqueline-c` the whole `.hero-proof` block was dead code outright (that page
never renders a proof quote in the hero at all). Delete the old block entirely rather than
editing around it, and if `.hero-proof` is kept, give it its own explicit `max-width` (~480px)
so removing the leftover `width: 500px` does not let it grow wide enough to collide with the
portrait. `malorie-dreyfus` was checked and does not have this bug — it never adopted the
`.hero-proof` component at all (its hero uses a different, older markup: absolute-positioned
`h1`/`.hero-sub`/`.btn` plus `.hero-glass-card`, no proof-quote element), so there is nothing
to fix there. Still worth a quick check on any *other* persona page before trusting it blind.
```css

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

**Cutout variant — when a real transparent-background cutout of the person exists (not just a
rectangular photo), skip the cover-photo-plus-overlay recipe above and put the cutout straight
on a `.bistre` glow instead** (built for `arik-azoulay`, also applied to `malorie-dreyfus`):
`.hero { background-color: #050505; }` + a `.hero::before` carrying the full `.bistre` gradient
(§7, blue accent), no `.hero-overlay` at all (nothing needs darkening — there is no background
photo pixel data left in the cutout to clash with the glow). Size the cutout with `object-fit:
contain` (never `cover` — there is no spare background to crop into; cropping at all just cuts
into the person) and anchor it `position: absolute; bottom: 0; right: X%; height: Y%; width:
auto;`, tuned to give it real headroom rather than starting the crop right at the hairline. This
variant is independent of the hero's text layout — `malorie-dreyfus` keeps its own older,
absolute-positioned `h1`/`.hero-sub`/`.btn` markup (fixed pixel `top`/`left`, no `.hero-inner`
flex column) rather than being restructured to match `arik-azoulay`'s flex layout; only the
background/photo treatment needs to match, not the surrounding text architecture.

**Absolutely-positioned decorative elements sitting directly against a full-bleed `.hero` drift
to the physical screen edge on a wide monitor, disconnected from the text column.** `right: 3%`
(or any percentage `right`/`left`) on `.hero-portrait` or `.hero-glass-card` is a percentage of
the *entire viewport*, since `.hero` itself is intentionally full-bleed — `.hero-inner` already
solves this for the text column via its own `max-width`, but a decorative element positioned as
a direct sibling of `.hero-inner` (not nested inside it) does not inherit that cap. Wrap it in a
bound instead of positioning it straight against `.hero`:
```css
.hero-bound { position: absolute; inset: 0; max-width: 1400px; margin: 0 auto; z-index: 1; }
```
(1400px here, wider than `.hero-inner`'s 1175px, since a photo/decoration usually wants more
breathing room than the text column — pick whatever cap keeps it a sane distance from the copy
at your widest realistic viewport, not necessarily the same number as `.hero-inner`.) A card
meant to sit *inside* the text column's own boundary (e.g. `.hero-glass-card` flush with the
copy's right edge) should instead be nested inside `.hero-inner` itself and positioned `right:
0` there, rather than getting its own bound.

**`.hero`'s own padding is not `0` by default — it inherits the generic `section { padding: 96px
0; }` rule (§5) unless explicitly reset, and nothing in this recipe resets it.** That is easy to
miss because the *background* still fills the full `height: 820px` (padding does not affect a
solid-color/gradient fill), so the section looks correct at a glance. What it actually shrinks is
`.hero-inner`'s own box: `height: 100%` resolves against `.hero`'s *content* box, i.e.
`820 − 96 − 96 = 628px`, not 820, and that shorter box is what ends up vertically centered
(`justify-content: center`) inside the visually-820px section. Anything measured or positioned
against "the hero's height" — a `.hero-glass-card`'s `bottom` offset, a script computing where
the CTA row sits — has to account for this 628px box, not the 820px one, or it will be off by
however much padding is silently in effect. Verify with
`getComputedStyle(document.querySelector('.hero-inner')).height` rather than assuming it matches
`.hero`'s own `height` value.

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

**Diagram labels (`.fv-label`/`.fv-label-on`) are always set in `var(--mono)`, never the display
font — even when the diagram itself isn't code.** The `fv-*` node/link diagrams (§12) started out
using the regular display font for their labels ("Stripe", "OAuth", flow names, audit checklist
items), which read a little soft/generic next to card 1's actual code editor. Setting every
diagram label in the monospace stack (`font-family: var(--mono); letter-spacing: 0;`, and drop
the size ~1px since mono reads slightly larger) ties every card in the grid to the same
technical, "this is real system output" register, whether the card shows literal code or not.
```css
.fv-label { fill: #6E6E78; font-size: 9.5px; font-weight: 600; font-family: var(--mono); letter-spacing: 0; }
.fv-label-on { fill: #fff; font-size: 10px; font-weight: 700; font-family: var(--mono); letter-spacing: 0; }
```
Corollary: an abstract diagram row is weaker than a labeled one. The security-audit illustration
originally represented each checklist line as a bare gray bar (`.fv-bar`) with no text — it read
as unfinished placeholder decoration. Real short labels ("Auth tokens encrypted", "SQL injection
guards"…) in the same row, in this same mono style, make it read as an actual report. Default to
real text over an abstract filler shape whenever a diagram row is meant to represent a specific,
nameable thing.

## 11. Detail / split sections (photo or graphic + copy, alternating sides)

`.detail-split` (growth-plan, generic) / `.why-split` (persona pages, photo-heavy) / production's
`.split-inner` (tech unit) are the same idea: an asymmetric two-column grid, one side a
photo/graphic, one side copy, with a `.flip` modifier to swap which side the visual sits on
every other instance (so alternating sections don't feel monotonous down the page).

```css
.detail-split { max-width: 1280px; margin: 0 auto; padding: 0 48px;
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

**A real product screenshot goes in `photoFit="contain"`, not the plain `cover` default.**
`cover` (the default) is right for a portrait/team photo — fill the frame edge to edge, crop
what doesn't fit. A screenshot of real software is the opposite case: cropping into it loses the
point of showing it. `photoFit="contain"` (`DetailSplit.tsx`) shrinks the image to ~70% on a
`var(--light)` backdrop instead — `.detail-photo--contain { display:flex; align-items:center;
justify-content:center; background:var(--light); } .detail-photo--contain img { width:70%;
height:auto; object-fit:contain; }`. Validated on `tech/odoo-implementation`'s three real Odoo
screenshots, which read as oddly zoomed/cropped under plain `cover`.

Before reaching for a custom SVG/CSS illustration to *replace* a real screenshot in this slot
("make it feel more on-brand"), try `photoFit="contain"` first — a hand-drawn abstract diagram
standing in for a real product is a bigger swing, and one attempt on this exact page (a dark
hub-and-spokes diagram, magenta center node, six connected modules) was reverted after checking
it live: it read as a generic tech diagram, not specific to the product, and didn't sit well
next to the other two real screenshots on the same page. Real screenshot > abstract diagram
unless a specific illustration has already been checked live and approved.

**`.why-split` (persona pages) should use this same framed-photo treatment, not the older
full-bleed one.** The original persona-page recipe stretched the photo edge-to-edge and as tall
as the content column happened to need (`grid-template-columns: 40% 1fr; min-height: 700px;`,
`.why-photo-col` with no `.wrap`, no radius) — both `arik-azoulay` and `jacqueline-c` shipped
this way and both needed the same fix: wrap the split in `.wrap`, give the photo column a fixed
`height` (520px worked for both) and `border-radius: 18px`, and use the `.detail-split`-style
column ratio above instead of a bare `40% 1fr`. Build any new persona "why" section with the
framed version from the start:
```css
.why-split { display: grid; grid-template-columns: minmax(0,0.85fr) minmax(0,1.15fr); column-gap: 64px; align-items: start; }
.why-photo-col { position: relative; overflow: hidden; border-radius: 18px; height: 520px; align-self: start; }
.why-photo { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
```

**`.split--light`'s pink gradient is reserved for one specific narrative beat, not a generic
"light section" utility.** In production it marks *the* dramatic moment — "Escape the 80% trap"
— where the page names the problem. It is not a stand-in for "this section should be gray
instead of white." Reaching for `.split--light` on a different split section just because it's
the closest existing class (e.g. a "why choose us" or "why custom" section) plants an
accent-tinted background somewhere the content never called for one, and it reads as visual
noise rather than a deliberate choice — this happened rebuilding `ai-erp`'s "Why Custom?"
section, which the original content had as a plain neutral gray, not pink. If a split section
needs a light-but-not-white background and isn't that specific problem/tension beat, use a
neutral tone instead:
```css
.split--neutral { background: #fafafa; }
```
Before reusing any `--light`/`--accent`/dark surface modifier on a new section, check what that
modifier is *for* elsewhere on the page (or other pages), not just whether the name superficially
fits — matching a class name isn't the same as matching its intent.

**Grid `align-items: stretch` only equalizes the outer card — it doesn't align what's inside
it.** `.feat-grid`'s default stretch makes every `.feat` in a row the same total height, but if
each card's `.feat-visual` illustration has a different intrinsic height, the leftover space
just pools at the bottom of the shorter cards — so `.feat-body` (the heading/copy) starts at a
different vertical line in each card even though the cards themselves line up. Production avoids
this by giving every SVG illustration the same `viewBox` aspect ratio (300:128), so they're
naturally the same height. Custom/mixed illustrations (icon grids, rings, mockups — not a single
consistent SVG shape) don't get that for free; give `.feat-visual` an explicit shared height
instead:
```css
.feat-visual { min-height: 160px; display: flex; align-items: center; justify-content: center; }
```
Check this by measuring, not by eye — `getBoundingClientRect().height` on each card's
`.feat-visual` should come back equal (or very close) before calling a feature grid done.

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

**Aligning a tag row (or any fixed content) below sibling cards whose own logos/marks are
different shapes.** Two cards side by side, each with a client mark above a row of discipline
tags — if one mark is a stacked icon+wordmark (taller) and the other is a flat wordmark
(shorter), the tag row below sits at a different height in each card even though both cards
start at the same `padding-top`. Fix it with a fixed-height slot around the mark, bottom-aligned,
sized to the tallest variant in play:
```css
.mark-slot { height: 80px; display: flex; align-items: flex-end; margin-bottom: 24px; }
.mark-slot img { height: 52px; width: auto; display: block; }      /* flat wordmark */
.mark-slot img.stacked { height: 80px; }                            /* icon + wordmark, taller */
```
The slot's fixed height (not the image's) is what both cards agree on, so whatever sits below it
— a tag row, a divider — starts at the exact same y in every card regardless of which mark shape
that particular card happens to carry.

**Real people's photos (proof avatars, testimonial avatars, team photos) read as too small at
44px — 60px is the floor.** `.hero-proof-avatar` and `.testi-avatar` both shipped at 44px on
every persona page originally (`arik-azoulay`, `jacqueline-c`); a client review of `branding`
flagged them as illegible at that size, and re-checking on-screen confirmed it — a 44px circle
loses individual features (eyes, expression) at normal viewing distance, so the photo stops
doing its job of making the quote feel like it came from a specific person. Fixed on `branding`
(`.story-person img`) and `arik-azoulay` at 60px; **`jacqueline-c` still has this at 44px and has
not been fixed** (out of scope of the sessions that caught it so far — flag it next time that
page is touched, or fix it proactively). When auditing any page against this system, check every
circular person-photo class (`hero-proof-avatar`, `testi-avatar`, `tcard` photo, team-grid
photo, `hero-proof-quote`/`hero-glass-card` — anything with a real face in it, not a logo) against
this 60px floor rather than assuming the page's existing value is correct; this drift is easy to
miss because 44px still *looks* like a normal avatar size in isolation, it only reads as too
small next to the copy it is meant to lend credibility to.

**Four-plus short traits, each with a sentence of supporting copy, read as heavy in the
`.why-grid` hairline-card layout — reach for a single-open accordion instead when that
happens.** The card grid works fine for two or three items; at four, showing every paragraph at
once next to a photo (persona `.why` sections) reads as a wall of text. An accordion — plain
list, no card chrome, only one item's copy visible at a time — fixes this without losing any
content, first built for `arik-azoulay`:
```css
.why-accordion { border-top: 1px solid #e6e6e6; margin-bottom: 40px; }
.why-item { border-bottom: 1px solid #e6e6e6; }
.why-item-toggle {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 20px 2px; background: none; border: none; cursor: pointer; text-align: left;
  font-family: inherit;
}
.why-item-label { font-size: 18px; font-weight: 600; color: var(--ink); letter-spacing: -0.2px; }
.why-item-icon { width: 20px; height: 20px; flex: none; color: var(--gray-2); transition: transform .3s var(--ease); }
.why-item.is-open .why-item-icon { transform: rotate(180deg); color: var(--blue); }
/* the 0fr/1fr grid-rows trick animates height without ever measuring it in JS */
.why-item-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s var(--ease); }
.why-item.is-open .why-item-panel { grid-template-rows: 1fr; }
.why-item-panel-inner { overflow: hidden; }
.why-item-panel p { font-size: 15px; line-height: 26px; color: #444; max-width: 480px; margin: 0; padding: 0 2px 20px; }
```
Each `.why-item-toggle` is a real `<button>` (`aria-expanded` synced on click, chevron icon
rotating from the `.is-open` state), so it stays keyboard- and screen-reader-usable without
extra work. JS closes every other item before opening the clicked one — never more than one
open — and toggling the already-open item closes it, leaving none open, which is fine (lighter
still). Default one item open on load so the section is not empty at first paint; pick whichever
trait is the strongest hook. Use the `grid-template-rows: 0fr → 1fr` transition, not
`max-height`, for the collapse animation — `max-height` needs a guessed-too-large value and
therefore animates at the wrong speed for short content, while `0fr`/`1fr` measures itself and
just works regardless of how much text is in the panel.

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
   Any real person's photo (proof avatar, testimonial avatar, team photo) should be 60px or
   larger — don't assume an existing page's value is already correct, check it (§14).
8. Verify content in a real browser: check text against the source content 1:1, and don't trust
   a screenshot alone for anything below the first viewport on these pages — the heavy embedded
   font + backdrop-filter blur can make a preview-tool's headless renderer stall/tear on scroll
   even when the page is correct (confirmed against `ai-production` itself). Cross-check with
   the page's rendered text/accessibility tree, not just a screenshot, before concluding
   something is broken.

## 22. Bento / portfolio grid (mixed-footprint gallery)

For a "many project shots, no captions until hover" gallery (`branding`'s portfolio), a
six-column CSS grid with two tile footprints reads far less templated than a uniform photo grid:

```css
.bento {
  display: grid; grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 100px; gap: 18px; grid-auto-flow: dense;
}
.tile { position: relative; overflow: hidden; border-radius: 14px; }
.tile--tall { grid-column: span 2; grid-row: span 4; }   /* renders ~323×454, ratio 0.71 — portrait/product shots */
.tile--sq   { grid-column: span 2; grid-row: span 2; }   /* renders ~323×218, ratio 1.48 — laptop/logo/wide shots */
.tile-img { position: absolute; inset: 0; }
.tile-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
```
Pick each shot's footprint by which of the two ratios its own aspect is closer to (0.71 vs 1.48),
so `object-fit: cover` crops the least. Caption is hover/focus-only — a dark veil fades in from
the bottom and a `figcaption` (client name + middot-separated discipline tags) rides in just
behind it, so the grid itself stays purely visual until someone engages with a tile:
```css
.tile-veil { position: absolute; inset: 0; opacity: 0; pointer-events: none;
  background: linear-gradient(to top, rgba(8,8,18,.90) 0%, rgba(8,8,18,.48) 40%, rgba(8,8,18,.04) 78%);
  transition: opacity .35s var(--ease); }
.tile-cap { position: absolute; left: 0; right: 0; bottom: 0; padding: 20px 22px;
  opacity: 0; transform: translateY(12px); transition: opacity .3s var(--ease), transform .45s var(--ease); }
.tile:hover .tile-veil, .tile:focus-visible .tile-veil { opacity: 1; }
.tile:hover .tile-cap, .tile:focus-visible .tile-cap { opacity: 1; transform: none; }
@media (hover: none) { .tile-veil, .tile-cap { opacity: 1; transform: none; } } /* no hover on touch */
```
**`grid-auto-flow: dense` decouples visual/curation order from the packing math.** Without
`dense`, the browser's sparse auto-placement fills cells strictly in DOM order, so mixing a tall
(2×4) and a sq (2×2) footprint gaplessly requires hand-sequencing the tiles — a tall has to be
immediately followed by whatever still fits beside it (more talls, or a pair of sq stacked in its
remaining rows) before the layout is free to drop to a plain row of sq. That constraint fights
directly against wanting the tiles ordered by *content* (e.g. mixing photography/branding/UI/web
work throughout, rather than grouping all-tall-then-all-sq). `dense` lets the browser backfill
gaps regardless of order — since every tile here is exactly 2 columns wide (one of three equal
lanes), it behaves like a simple shortest-lane-first packer, so any DOM order of tall/sq tiles
still closes with zero gaps as long as the total cell count is a multiple of the column count
(here: 8 tall × 8 rows + 11 sq × 4 rows = 108 cells = 18 full rows of 6). Verify this by measuring,
not by eye — read every tile's actual `getBoundingClientRect()` after forcing `.reveal` classes
on, and confirm the container's height matches `rows × (rowHeight + gap) − gap` with zero
overlaps. The tradeoff: `dense` can reorder a tile's *visual* position away from its DOM/tab
order in some packings, which sparse never does — fine for a hover-caption gallery like this
one, worth checking on anything where tab order needs to track visual order exactly.

## 23. Sticky scroll-stack with receding cards

A stack of `position: sticky` cards that pin in turn, each one visually receding (shrink, tilt,
blur, fade) as the next one arrives, built for `branding`'s three-pillar section. Two real
browser gotchas surfaced building this one, both worth knowing before reaching for the same
pattern rather than re-discovering them:

**Never put both `position: sticky` and a `transform` on the same element.** It is tempting to
drive the recede effect (`scale`/`rotateX`/`opacity`) as a transform directly on the sticky
wrapper itself — it is the element with the right z-index and the right pin behavior, so it
feels like the natural place. Some browsers lose track of re-engaging sticky positioning on an
element that also carries a transform, especially after it has scrolled out of its pin range and
back — symptom: scroll all the way down the page, then back up, and the cards that should
recompose stay stuck mid-recede (or invisible) instead of returning to full size/opacity, even
though every computed style reads back as correct. Fix: keep the sticky wrapper transform-free
and put the transform/opacity/filter on a plain inner `<div>` instead:
```css
.stack-item { position: sticky; top: ...; }                 /* transform-free, always */
.stack-item .recede {                                        /* plain div, never sticky itself */
  transform: perspective(1500px) rotateX(calc(var(--cover,0) * 38deg)) scale(calc(1 - var(--cover,0) * .3));
  opacity: max(0, min(1, calc((1 - var(--cover,0)) / .6)));
}
```
Put the inner wrapper's effect on a genuinely new div, not on whatever content element is already
there if that element also carries the page's `.reveal`/`.in` entrance-animation classes —
`.reveal.in { opacity: 1; transform: none; }` (§19) has the same specificity as a rule written
directly against that same element and sits later in the sheet, so it silently wins and cancels
the recede effect the instant the card's own entrance reveal fires. A plain, otherwise-unstyled
wrapper sidesteps that fight entirely.

**A `position: sticky` element's `getBoundingClientRect()` reflects wherever it is *currently
stuck on screen*, not its resting document position.** Any script that measures a sticky
element's natural top (to compute pin ranges, cover fractions, etc.) via `rect.top +
window.pageYOffset` gets the right answer only if that element happens not to be actively stuck
at the moment of measuring. If that measurement runs again on `resize` — and it should, since a
viewport size change legitimately changes the geometry — a resize firing while the user has
already scrolled past that card (window resize, a mobile browser's toolbar collapsing) captures
the *stuck* position instead, silently corrupting the stored geometry with no self-correction
until the next reload. This reads as "cards recede far too early, consistently, until I refresh"
— stable and reproducible, not a transient scroll glitch. Fix: temporarily un-stick every card
for the moment of measuring, then restore:
```js
wraps.forEach(function (w) { w.style.position = 'static'; });
var tops = wraps.map(function (w) { return w.getBoundingClientRect().top + window.pageYOffset; });
wraps.forEach(function (w) { w.style.removeProperty('position'); });
```
This runs synchronously inside one JS task (no repaint happens until the task yields), so there
is no visible flicker — verify by reproducing the exact failure first (scroll deep, dispatch a
`resize` event, compare the sticky element's real stuck `rect.top` against what the un-sticking
trick reads at the same scroll position — they will differ by however far the element has
scrolled past its pin point) before trusting that the fix actually changed anything.

## 24. Site header & footer (site-wide chrome)

Unlike every other section in this doc, `Header.tsx` and `Footer.tsx` are not per-page
components — they're rendered once, in `web/src/app/layout.tsx`, and wrap every page. Content
(nav labels, footer columns, contact block) is ported verbatim from the live 26lights.com header
and footer via live-DOM inspection, same "reuse real content" principle as everywhere else in
this doc — do not invent nav items or footer copy.

**Transparent-over-hero header, solid on scroll.** Every page in this app opens on a dark
`.hero` (§8), so the header is designed to sit *on top of* it rather than as a separate white bar
above it — `position: fixed`, `background: transparent` by default, with a white logo variant
(`/logos/26lights-logo-white.png`, not a CSS filter — a real light-wordmark asset the user
supplied, since inverting the colored icon with `filter: brightness(0) invert(1)` would flatten
its actual brand colors to solid white) and white/translucent nav text. `Header.tsx` tracks
`window.scrollY` and flips a `solid` boolean (`scrolled || servicesOpen || mobileOpen`) once past
`24px`, adding `.is-solid` to `.site-header`: background goes white, the logo swaps back to the
colored `/logos/26lights-logo.png`, nav text and the hamburger bars go from white to `--ink`, and
the header CTA swaps `btn-ghost` (transparent, for the transparent state) to `btn-outline` (for
the solid state). The mega-menu panel and the mobile nav panel are always opaque white regardless
of scroll — only the top bar itself toggles. Opening the mega-menu does **not** force `solid` —
`const solid = scrolled` only — the bar must stay transparent behind an open panel (confirmed
mistake: an earlier version also forced `solid` on `servicesOpen`/`mobileOpen`, which flashed the
bar white the moment "Services" was clicked; the floating panel is a self-contained opaque card,
it doesn't need the bar behind it to go solid too).

Reach for `fixed` positioning here specifically because the header must overlay the hero with no
layout push (a `sticky` header, like the old per-page static HTML used, reserves its own row and
pushes the hero down, recreating exactly the "white bar above the hero" look this pattern
replaces). `.site-mobile-nav`'s `top` offset is hand-matched to the header's own real height
(`65px` at the current thin nav-bar sizing) — if the header's vertical padding or logo size ever
changes, update that offset alongside it or the mobile panel will show a gap or overlap under the
bar.

**State that lives in the root layout does not reset on navigation — reset it on `pathname`
yourself.** `layout.tsx` never remounts during client-side navigation, so anything stateful it
renders survives a route change, and two real bugs shipped from exactly this:

- `RevealSetup` ran its `IntersectionObserver` in a `useEffect(…, [])`, so it only ever observed
  the *first* page's `.reveal` elements. Every page reached by clicking a nav link kept
  `.js-reveal .reveal { opacity: 0 }` forever — **the entire page below the hero rendered
  invisible**, which read to the user as "I can't see or feel that I changed page" (the hero has
  no `.reveal`, so it alone stayed visible). Keying the effect on `usePathname()` re-queries the
  new page's elements, and the fade-up doubles as the arrival animation.
- `Header`'s open mega-menu / mobile-menu state stayed open on top of the page just navigated to.
  Closing all menus in a `useEffect` keyed on `pathname` fixes it, and the panel closing is itself
  feedback that navigation happened.

Treat "does this reset on navigation?" as a standing question for any layout-level state.

**Give the nav a "you are here" state.** Every page in this app opens on a similar dark hero, so
without it a route change is nearly invisible. `Header` compares `usePathname()` against the nav
data: the matching mega-menu row keeps the `--accent-tint` background plus an inset accent rule on
its left edge and gets `aria-current="page"`, and the `Services` trigger carries an underline
while the current route is any of its services (white over the transparent hero, `--accent` once
the bar is solid). Derive it from the same `NAV_GROUPS` data the menu renders — never hand-maintain
a second list of "which paths are under Services".

**Mega-menu dismissal must be click-outside + Escape, never `onBlur`.** An earlier version closed
the "Services" dropdown on the trigger button's `blur` event — this silently broke every link
inside the panel, because clicking a link blurs the trigger (moving focus toward the link) before
the click's own action fires, so the panel closed and unmounted the link out from under the click.
Fixed by tracking a ref on the nav-item wrapper and closing only on a `pointerdown` outside that
ref, plus an `Escape` keydown handler. Any future dropdown/menu in this app should follow the same
pattern, not `onBlur`.

**Mega-menu shape: family → service → one-line teaser, not a bare link list.** Each `NavGroup`
("Tech" / "AI" / "Business" / "Marketing") is a *family* — its own small uppercase colored eyebrow
(`.site-mega-col-title`, 12px, `--accent-text`, not a big heading — a large column title reads as
competing with the item titles below it rather than a quiet category label). Each `NavLink`
underneath is a real named *service* with its own short *teaser* description (`.site-mega-link-
title` bold 15px + `.site-mega-link-desc` 13px gray, both inside one `<a>` so the whole row is
clickable, with a rounded `var(--light)` hover highlight behind the row via negative margin +
padding). Write the teaser as a compressed, factual summary of that service's own real hero/meta
copy (its already-built `page.tsx` sub, or the live 26lights.com page's meta description /
hero-sub if not migrated yet) — never an unrelated invented marketing line.

**Keep every teaser to one rendered line, and give each family its own tagline.** Two-line
descriptions push the panel past the fold and leave the columns ending at wildly different
heights — the whole panel measured 1060px tall (in a 900px viewport) before the copy was trimmed,
767px after, which is what makes it read as designed rather than as a dump of everything on offer.
Each family also carries a one-line `tagline` under its eyebrow (`.site-mega-col-sub`, 13px,
`--gray-2` — deliberately one step lighter than the items' `--gray-1`, both still clearing AA on
white; do **not** use the ~#a4a8bb greys that design mocks reach for here, they fail contrast the
same way the old `#bbb` trust-bar label did, §9). **No "Popular"/promo badges on menu items** — a
design reference put a `Popular` chip on MVP and Go To Market, and it was cut on sight: 26lights
does not rank its own offers in the nav, and the chip pulls the eye away from the family the
visitor is actually scanning. Don't reintroduce per-item badges here.

**Cluster a sub-family behind its own label instead of leaving it inline.** Tech's three ERP
offers (ERP Implementation, Odoo Implementation, AI ERP) sit in a `subgroups` entry rendered under
a small `ERP` label with a hairline top border (`.site-mega-subgroup`) — they read as one decision
("which ERP route?") rather than three unrelated top-level services, and it pulls AI ERP next to
its siblings instead of stranding it in the AI column. **When you add a subgroup, flatten its
items back into the mobile accordion** (`[...group.items, ...group.subgroups?.flatMap(s => s.items)]`)
— the mobile panel has no subgroup UI, and a confirmed bug shipped briefly where the three ERP
services were unreachable on mobile because the accordion only mapped `group.items`.

**Fill a short family column with a real case study, never a fabricated one.** `.site-mega-featured`
is a `--light` card (title / one line / accent-colored "Read the story" link) closing the gap under
AI's three services. It must cite a real client with real numbers — this one uses Corset Daum
("80% of tasks automated", custom ERP on Monday, MRR ×3 in three years), the same case study
already shipping in `/tech/erp`'s `Projects` section, linked to its real `customer-stories/` page.
A design reference for this slot arrived with an invented client ("How Hexa cut 12 hours a week");
swap that kind of placeholder for a real story before building it, don't ship the mock's copy.

**Close the panel with an exit bar.** `.site-mega-foot` (a `--light` strip with a top hairline)
holds a browse link on the left and "Not sure what you need?" + a solid `.btn` on the right,
pointing at the real Calendly 30-minute link every page already uses — so a visitor who does not
recognise their own problem in 23 service names still has a way out. Only link destinations that
actually exist: the reference's "See all services" had to become "See our customer stories"
(`/customer-stories/`, verified 200) because 26lights has no all-services overview page —
`/services/`, `/our-services/` and `/offers/` all 404.

**Split an oversized family into two columns along a real seam, not an arbitrary half-cut.** The
live site's own nav groups everything under one "Tech & AI" family (~11 items) next to "Business"
and "Marketing" (~6 each) — once every item carries a teaser line, that one column runs roughly
twice as tall as the other two, unbalancing the whole panel. Fixed by splitting it into two
`NavGroup`s along the split the label itself already implies: **Tech** (MVP, Dev Team, Tech Audit,
CTO as a Service, DRP, ERP Implementation, Odoo Implementation — the classic dev/implementation
offers) and **AI** (Ai App development, AI Prototyping, AI ERP, AI-Powered Automations — the
AI-branded offers, matching the separate `ai-*` pages already called out in §1's business-unit
table). This is the "family already has two names joined by &" pattern — reach for it whenever a
family's real item count runs far ahead of its siblings, rather than reflowing items into
same-family sub-columns or trimming real services to force a false balance. Both `Tech` and `AI`
currently link their column-title eyebrow to the same real hub URL (`/tech-team/`), since no
separate AI-only hub page exists on the live site yet.

**The panel must center on the page, not on whichever nav item triggered it, and can run nearly
full-width.** `.site-mega` is `position: fixed` (not `absolute`) specifically so its containing
block is the viewport, not `.site-nav-item` — nesting it inside a `position:relative` trigger
wrapper with `absolute` positioning centers it on that trigger's own bounding box, which sits well
left of true page-center once "Services" is the first nav item. `top` is a hand-matched pixel
value (`84px`) rather than `calc(100% + Npx)`, since percentage/`100%` offsets on a `fixed`
element resolve against the viewport height, not the header's height. Width is `min(1240px,
94vw)` — close to the page's own `.wrap` max-width (1280px), so the panel visually aligns with the
page content grid beneath it rather than reading as a narrow dropdown. Grid (`.site-mega-cols`) is
`1.05fr 1fr 1fr 1fr` — four family columns, the first slightly wider because Tech carries the ERP
subgroup. There is no separate promo/filler column: an earlier version added a 5th one (a photo
tile promoting Arik Azoulay's coaching offer) but once every item carries its own teaser line
there was no room left for it — removed once the user flagged "on a déjà pas assez de place", and
the job of filling a short column now belongs to the in-column `.site-mega-featured` case-study
card instead. Note `.site-mega` itself holds no padding and sets `overflow: hidden` — the padding
lives on `.site-mega-cols`, so the exit bar below can run edge-to-edge inside the rounded corners.

**Nav destinations: internal route if it exists in `web/`, otherwise the live 26lights.com page.**
The full mega-menu and footer link sets mirror the real site's, but most of those destinations
(Manifesto, Stories, Business/Marketing offer pages, most of the Tech & AI sub-pages) haven't been
migrated into this Next.js app yet. `Header.tsx`/`Footer.tsx` link straight to the equivalent
`https://www.26lights.com/...` URL for anything not yet built, and to the internal route
(`/tech/mvp`, `/tech/dev-team`, `/tech/audit`, `/tech/cto`, `/tech/erp`) for the handful of pages
that exist. As more pages get migrated, swap their entries from the external URL to the internal
route — do not leave a page linking externally to itself once it has a real internal route.

Footer is a flat dark neutral (`#25282b`), not the accent-tinted `.bistre` glow — three link
columns (Services / Offers / Blog) plus a contact block (address, email, phone, a `btn-ghost`
"Let's Talk!" pill, a LinkedIn icon), then a plain centered "Proud partner of ambitious companies"
badge image below the link grid. No page-specific final CTA logic here; that belongs to each
page's own `FinalCta` section (§18), which still renders inside `<main>`, above this footer.

## 25. Process tabs — click-through phase reveal (`ProcessTabs.tsx`)

A numbered row of tabs above one content panel, only the selected phase's detail visible at a
time — distinct from a plain numbered `FeatureGrid` (every phase visible at once, no click) and
from `WhyAccordion` (vertical, single-open, paired with one fixed photo beside it). Reach for
this specifically when the real source itself gates detail behind clickable tabs (validated on
`tech/odoo-implementation`'s "Business Analysis / Solutions Panel / Building & Delivery / Support
& Maintenance"). New this page — promote it out of one-off status once a second real source
reaches for the same shape.

```
<ProcessTabs eyebrow="Process" title="..." alt
  phases={[{ number: "01", label: "Business Analysis", title: "...", body: "..." }, ...]} />
```

**Card and panel stay light; the active tab alone gets the emphasis treatment — and that
treatment took three live-checked passes to land right, in this order:**
1. Whole card as a dark `.bistre` glow surface (matching `.appr-card--bistre`) — the active tab's
   own highlight barely read against its own already-dark surrounding card, and white-on-dark
   body text was harder to read for a real paragraph than dark-on-light.
2. Active tab alone inverted to solid dark (`var(--ink)`) against its light-gray siblings — still
   rejected once checked live ("ça marche pas trop je trouve").
3. **Shipped:** active tab lifts to solid white (`#fff`) with `box-shadow: inset 0 -2px 0
   var(--accent)` as the bottom rule, label in `var(--ink)`, number in `var(--accent-text)` —
   plain contrast against the `var(--light)` inactive tabs, no dark fill anywhere in the
   component. Simplest option, and the one that actually read correctly once rendered.
Don't skip straight to a "make the active state bolder/darker" instinct on this pattern — check
the plain light/white contrast first; it's carried the weight on every pass tried so far.

## 26. Three standing rules settled this session (apply on the next page, not just Odoo)

- **No two adjacent sections may share the same background** (white / `#fafafa` alt / `.bistre`
  dark) — see §5. Walk every section's actual rendered background in order before calling a page
  done; a component's *default* (no `alt`, no `bistre`) is white, so two defaults in a row are
  invisibly identical even though neither prop call looks wrong on its own. Recurred three times
  before it became a documented rule (`nurturing`, `nurturing-marketing-led`, then `tech/drp`).
- **`StatsRow` (the "14 years / 200+ startups / 90%" counter strip) is gone from every page that
  had it** (`tech/cto`, `tech/dev-team`, `tech/audit`; never added to `tech/drp` or
  `tech/odoo-implementation`) — a standing removal, not a one-off preference. Don't reach for it
  on a new tech-unit page; if a section right before or after it depended on it for background
  alternation, fix that with `alt` on the neighboring section instead of bringing it back.
- **`TrustBar` needs no `logos` prop on a real client-trust page.** It ships with a hardcoded
  canonical 9-logo roster (`TrustBar.tsx`, matching the live homepage's own logo marquee — Lizy,
  Sharingbox, Cowboy, Umedia, beAngels, Yields.io, LABBOX, RingTwice, Sortlist) as its default, so
  a page just renders `<TrustBar />`. Pass an explicit `logos` array only for a bar that isn't a
  client-trust strip at all (`jacqueline-c`'s "Background" — her CV, not her clients). Previously
  every page hand-typed its own subset and they'd all quietly drifted from each other and from the
  real homepage list.
- **A "Team" section pulls the full canonical 12-person roster from `src/lib/data/team.ts`
  (`members={TEAM}`)**, never a hand-picked subset — the same 12 people already reused verbatim
  across `tech/erp`, `tech/mvp`, `tech/cto`, `tech/dev-team`, `tech/audit` and `marketing`. A first
  draft of `tech/drp` shipped with 6 people before this was caught and fixed.

## 27. The dark finale is a deliberate exception to the alternation rule

§26's "no two adjacent sections may share the same background" has one sanctioned exception, at
the very bottom of a page: **`GrowthArchitects` → `FinalCta`** (both `#050505`), and its
persona-page twin **`Bio` → `FinalCta`**. Both components are unconditionally dark, the pairing
appears on every page that closes this way (`branding`, `go-to-market`, `nurturing`,
`nurturing-marketing-led`, `video-creation`, `jacqueline-c`, `malorie-dreyfus`), and the invisible
boundary is the point: the page ends on one continuous dark finale rather than two stacked slabs.
Approved explicitly rather than "fixed" — do not add an `alt` to break it up, and do not build a
light variant of `FinalCta` to satisfy the rule.

The rule still bites everywhere above the fold-out: a dark section running into `CaseResults`
(dark unless `alt`) mid-page, or a `.bistre` `DetailSplit` landing on `Projects`, is a real bug.
`CaseResults`' `alt` prop exists for exactly that.

## 28. Shared data files — check these before typing an array into a page

Retyping a roster into a page is how every drift in this repo started. Current shared sources:

| File | Exports | Used by |
|---|---|---|
| `lib/data/team.ts` | `TEAM` (12 people) | every `Team` section |
| `lib/data/case-studies.ts` | `CASE_STUDIES` | `CaseResults` on growth-plan, marketing |
| `lib/data/nurturing-cases.ts` | `NURTURING_CASES` | both nurturing pages |
| `lib/data/marketing-capabilities.tsx` | `capability(key, title)` | every marketing page's `BeyondSection` |
| `lib/data/tech-projects.ts` | `TECH_PROJECTS` (4 client cases) | `Projects` on mvp, dev-team, cto, audit |
| `lib/data/tech-tools.ts` | `TECH_TOOLS` (16), `TECH_TOOL_ROWS` (4×4) | `TextSection`'s `toolRows` on mvp, dev-team, cto, tech-team |
| `lib/data/proof-logos.ts` | `HERO_PROOF_LOGOS` (the 9 canonical clients, white) | `Hero`'s `proofLogos` on cto, go-to-market, both nurturing pages |

`HERO_PROOF_LOGOS` is the white-silhouette twin of `TrustBar`'s roster (§26) — a page shows the
client strip either as the light `TrustBar` under the hero **or** as `proofLogos` inside it, never
both, and both lists must stay the same nine clients. cto used to hand-pick four (and included
Listminut', which isn't on the roster at all).

Two section shapes were also deduplicated, and a third copy of either should reuse the component
rather than being pasted again:

- **`HowWeWork.tsx`** — the "from building to autonomy" pair of boxed cards (checklist on the
  first, button on the second). Was three near-identical bespoke `<section>`s on `go-to-market`
  and both nurturing pages.
- **`MethodFunnel.tsx`** — the six-stage co-creation funnel SVG. Was duplicated verbatim (bar one
  em-dash) between `growth-plan` and `arik-azoulay`. Takes no props on purpose.

### 28.1 `CaseResults`' `photoRatio="16/9"` — pass it on every real-photo grid, not just some

`CaseResults` items come in two flavors: a `logo` card (no image at all — growth-plan, marketing,
malorie-dreyfus) and a `photo` card (a real screenshot or photograph). `photoRatio` only matters
for the second kind, and it defaults to `"default"` (a fixed-height crop built for a *product
screenshot*, where legibility matters more than the crop). The moment the photo is real
photography — team photos, event shots, campaign banners, not a UI screenshot — pass
`photoRatio="16/9"` instead, so the crop is a deliberate widescreen banner instead of whatever
height the screenshot recipe happens to produce.

This is opt-in per call site, not automatic, which is exactly how it drifted: `nurturing` and
`nurturing-marketing-led` both render `NURTURING_CASES` (real campaign screenshots/banners, not
product UI) through the same `CaseResults` grid as `customer-stories` and `go-to-market`, but only
the newer two pages had `photoRatio` set when the prop shipped — the two `nurturing` pages were
never revisited. Fixed 2026-09-09. **Current real-photo grids, all now `photoRatio="16/9"`:**
`customer-stories` (hub + `e-maprod`), `go-to-market`, `nurturing`, `nurturing-marketing-led`.
Before adding a new `CaseResults` with `photo` items, check whether the photos are real
photography (→ set it) or a product screenshot (→ leave it at `"default"`) — don't just copy
whatever the nearest existing page did.

## 29. Photography is black and white, from `public/team/`

Every photo in the bank is desaturated (measured: saturation 0.00 across `team/*`). Two colour
files pulled straight off the live WordPress site onto `tech-team` (saturation 0.15 and 0.35) read
as foreign immediately and were swapped for bank photos. So: source photos from `public/team/`,
and if a genuinely new photo has to come in, desaturate it first.

The persona heroes want one more thing: a **cut-out portrait with an alpha channel**
(`arik-hero.png`, `jacqueline.png`, `Malorie-Dreyfus.png` — all `alpha=Blend`), so the subject
sits in the dark hero gradient instead of bringing a light rectangle into it. A flattened copy of
Malorie's portrait had shipped and looked wrong for exactly this reason. Check with
`magick <file> -format "%A" info:` before wiring a new portrait in.

When you replace an image file in place, the dev server keeps serving the old optimized bytes from
`.next/dev/cache/images` — delete that directory (production builds are unaffected).

## 30. The accent-tinted section ground (`--accent-tint` as a surface)

A fourth light surface, added 2026-09-08 and validated on the homepage's `SituationRouter`: the
section ground is `var(--accent-tint)` and the cards on it stay white.

**Why it exists.** The router shipped as white cards on `#fafafa`. Those two differ by five
units of luminance (1.05:1), so the four cards read as one flat field and the block a visitor is
supposed to *act on* went unnoticed — the user's words were "blanc sur gris, ça passe un peu
inaperçu". `--accent-tint` is `#eef0fe` on the blue units, which is 14 units off white *and*
differs in hue, so the card edges appear without needing a heavy border.

**The recipe** (all of it matters; a tinted ground with the old flat cards still looks soft):

```css
.router { background: var(--accent-tint); }
.router-card {
  background: #fff;
  border: 1px solid rgba(var(--accent-rgb), 0.16);
  box-shadow: 0 1px 2px rgba(var(--glow-rgb), 0.04), 0 8px 24px rgba(var(--glow-rgb), 0.06);
}
.router-card:hover {
  border-color: rgba(var(--accent-rgb), 0.5);
  box-shadow: 0 2px 4px rgba(var(--glow-rgb), 0.06), 0 16px 40px rgba(var(--glow-rgb), 0.12);
  transform: translateY(-2px);
}
/* hairlines and quiet marks inside the card have to step up too, or they vanish */
.router-links { border-color: #ececf3; }
.router-card--corner .router-card-num { color: rgba(var(--accent-rgb), 0.34); }
```

**The lifted-white-card shadow is its own reusable recipe — copy the value, don't approximate
it.** Three components now put a white card on this tint and lift it off with a shadow
(`router-card` above, `ProcessTabs`' `.process-tabs`, `RelatedPages`' `.related-card`), and the
first two passes each wrote a slightly different rgba by feel instead of reusing the first one —
one used `rgba(0,0,0,…)` instead of `rgba(var(--glow-rgb),…)`, another used different blur/spread
numbers for no real reason. Consolidated 2026-09-09 to a single two-step value, resting and
hover:
```css
/* resting */
box-shadow: 0 1px 2px rgba(var(--glow-rgb), 0.04), 0 8px 24px rgba(var(--glow-rgb), 0.06);
/* hover / lifted */
box-shadow: 0 2px 4px rgba(var(--glow-rgb), 0.06), 0 16px 40px rgba(var(--glow-rgb), 0.12);
```
Always `var(--glow-rgb)`, never a literal black — a black shadow under a card on a colored tint
reads muddier than a shadow tinted the same hue as the ground it's lifting off. The next
component that needs a card lifted off a tinted (or any light-colored) ground reuses this literal
value; if it genuinely doesn't fit, that's worth a note here explaining why, not a fourth
unexplained variant.

**The rule: at most one per page, on the block the visitor is meant to act on.** The tint is a
"this is the working section" signal. Use it twice and neither section reads as the important
one — you have just invented a second `#fafafa`. Every other light section on the page stays
white or `#fafafa`. `RelatedPages` is the one documented exception to "use sparingly": it always
sits on the tint (no prop to opt out) because it is by definition the page's single "go do the
next thing" block — see its own doc comment for why that makes it safe to leave unconditional
rather than threading a prop through 15 call sites.

**It counts as its own tone for §26's alternation rule.** `#eef0fe` next to white is a visible
step, so `TINT → WHITE` is fine; `TINT → #fafafa` is not (both are near-white lights and the
boundary reads as an accident).

**Before using it on a tech or AI page, look at it.** `--accent-tint` follows the unit, so on
`[data-unit="tech"]` the ground renders `#fdf2f8` — pale pink. That is the documented magenta
tint and it is not wrong, but it is a much warmer ground than the blue, and it sits badly next
to the black-and-white photography if the section also carries photos. Check it in the browser
rather than assuming it ports.

**Second validation: `ProcessTabs` on `tech-team`, 2026-09-09.** Shipped via a new `tint` prop
(takes precedence over `alt`) rather than repurposing `alt` itself — `ProcessTabs` also renders on
`tech/odoo-implementation`, which wasn't asked for this and shouldn't silently change. Paired
with two more readability fixes on the same component, worth keeping together as one recipe:
- Grid cells went from `var(--light)` (gray, same tone as most inactive UI) to solid white — a
  gray cell reads as *disabled*, which fights scanability on a 9-cell grid at a glance.
- Each cell's number switched from `var(--gray-2)` to `var(--accent-text)`, on every cell, not
  just the active one — an accent-colored index is what makes the grid scan as "9 things to pick
  from" instead of "1 highlighted, 8 dimmed".
The panel below keeps `var(--light)` as its own fill, so the white grid and the gray panel still
read as two zones of one card, and the whole card picked up a shadow (`0 1px 2px rgba(0,0,0,.04),
0 12px 32px rgba(0,0,0,.06)`) to lift it off the now-tinted ground — flat cells with only a
1px border had nothing to separate them from `#fafafa`; on a colored ground the flatness read
worse, not better.

**Candidates worth trying next** (each needs the one-per-page check first):

- `Pricing` on the four `ai/*` pages, and `RateTable` on `arik-azoulay` / `malorie-dreyfus` — the
  decision block on a page that states a price.
- `ChecklistSection` is *not* a candidate: it is read, not acted on.

## 31. Headline line count is never left to chance

Every `Hero`/`PageHeader` title (and any `DetailSplit`/`TextSection` `h2` long enough to wrap) is
`text-wrap: balance` by default (§5), but **balance only reshapes the line count the browser was
already going to use — it does not choose it.** Left alone, a title wraps to whatever number of
lines its column width happens to produce, which drifts per page (tech-team's title wrapped to
3 uneven lines purely because nobody checked). The rule: **decide the line count, don't inherit
it.**

**Correction, 2026-09-09 — there is no reliable character-count budget, and the earlier version
of this table was wrong.** It claimed `no-visual` (~17–20 chars/line) was meaningfully tighter
than the two-column `Hero` (~28–32 chars/line) at the *same* 586px measure. A full site audit
(13 of ~27 titles were overflowing their intended line count, most far past 2 lines) showed the
real cause: both variants share the identical 586px measure and the identical `clamp(44px, 5.2vw,
62px)` font — the earlier numbers came from comparing tests run at *different, uncontrolled
browser viewport widths*, not from a real difference between the variants. Kumbh Sans at 62px
(the size any desktop ≥1192px wide actually renders, since that's where the clamp maxes out) is
wide enough that the honest capacity of a 586px line is **~17–22 characters** regardless of
variant, dropping to single words once you add an `<em>` weight shift. Character-counting by eye
undershoots this badly and produces exactly the accidental-overflow bug this section exists to
prevent — don't estimate, measure.

**How to measure a candidate line for real, before touching JSX:**
```js
// run in the browser console/devtools on any page — reuses the page's own loaded font
const ctx = document.createElement('canvas').getContext('2d');
ctx.font = '400 62px kumbhSans';           // the maxed-out clamp() size, ~1192px+ viewports
ctx.measureText('Every founder needs someone').width;   // → 880 (px)
```
Compare that to the real available width — `document.querySelector('.hero-h1, .page-header-title,
[class*="-text"]').getBoundingClientRect().width` on the actual page, not a guessed container
max-width, since the grid can shave a few px off it. A fragment fits if its measured width is
*less* than the container width; there is no fixed character count that reliably predicts this
across fragments with different letter-width mixes ("nurturing" alone measured 267px — a 9-letter
word eating nearly half a 586px line).

**To force an exact, controlled line count:**
1. Split the title into clauses at natural boundaries — commas, "and", a relative pronoun, the
   sentence's own subject/predicate break. Never split mid-word or mid-phrase.
2. Join the fragments with `<br />` inside a `<>...</>` fragment. `text-wrap: balance` will not
   undo a hard `<br />`; it only balances the line count normal wrapping inside *each* fragment
   was already going to produce — so a fragment that's still too long for its line will balance
   into 2 (or more) sub-lines instead of overflowing raggedly, but it still adds a line you didn't
   plan for.
3. Measure every fragment (technique above) against the real container width before reloading —
   this catches most misses before you burn a round-trip on it. Reload and count anyway
   (`h1.getBoundingClientRect()` plus a `Range` over each text node, one rect group per real
   line — grouping by `Math.round(rect.top)` across *text nodes*, not the whole `h1`, since a
   `display:block` child like `.marquee-hero-text h1 em` produces its own container rect that
   inflates a naive count by one).
4. If a fragment still overflows: shorten that specific fragment, or — only where the component
   offers it — widen the measure instead of shrinking the type:
   - `Hero` (no `visual`): pass `wide` → 1080px measure (`wide`'s own doc comment in `Hero.tsx`
     explains the tradeoff; validated on `go-to-market`'s 71-character title).
   - `PersonaHero`: pass `wide` → 720px measure (added 2026-09-09 for exactly this — `arik-azoulay`,
     `malorie-dreyfus`, and `jacqueline-c` all needed it; **cap around 820px**, not further — the
     text column shares the section with the portrait bleeding in from the right, and CSS alone
     can't warn you if you've pushed the measure into it, only a screenshot will).
   - A `Hero` **with** a `visual` has no widening escape hatch — the two-column grid gives the
     copy column a hard 586px ceiling. Expect to split verbose copy into 3-4 short fragments
     instead of 2 (`ai/powered-automation`'s 78-character title needed 5 controlled lines; there
     was no clean way to do it in fewer without cutting words).
5. **2 lines is the ideal, not a hard requirement — 3 is a fine, deliberate outcome; what's never
   acceptable is an *uncontrolled* line count** (text wrapping wherever the browser happens to
   break it, unverified). If a title needs 4-5 lines even fully split and widened, that's a copy
   problem: the sentence is trying to say too much for this slot, and no amount of `<br />`
   placement fixes that — flag it instead of forcing an ugly break.

**Applies to:** `Hero` title, `PersonaHero` title, `PageHeader` title. `DetailSplit`'s `title`
already has its own downsizing escape hatch (`LONG_TITLE_THRESHOLD`, §11) for a long
single-clause title instead of line-count control — that's a different fix for a different shape
of problem (one long clause vs. a title that reads better as several), don't conflate them.

**Always pin the browser viewport width before measuring or comparing results across pages** —
`resize_window` to a fixed size (1440×900 is a reasonable real-desktop default) first. The
`clamp()` maxes out at ~1192px, so anything at or above that renders the same H1 size, but the
grid's *actual* column width can still drift a little below that, and two checks done at
different uncontrolled widths are not comparable — this exact mistake produced the wrong budget
table above.
