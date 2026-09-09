---
name: impeccable
description: >
  Systematic design + QA finishing pass on a page in the `web/` Next.js app before it is called
  done — catches contrast failures, fabricated placeholder content, dead links, dead CSS, links
  unreachable at mobile widths, repeated section silhouettes, duplicated photos, oversized or
  orphaned assets, and console errors, verifying every finding in the live DOM instead of guessing
  from a screenshot. Use this whenever the user signals a page is finished or wants it tightened —
  "on valide ?", "c'est bon pour toi ?", "review this page", "polish/audit/check it", "make it
  impeccable / nickel / propre / production-ready" — and before committing or deploying front-end
  work, even if they only ask you to "have a look".
---

# The impeccable pass

A page that renders is not a page that ships. This pass is the difference between "it looks fine
in the preview" and "nothing embarrassing is left in it" — run it before telling the user a page
is done, and run it again after a round of their feedback, because fixes create new defects
(a removed component leaves dead CSS; a swapped photo orphans a file).

Load the `26lights-design-system` skill alongside this one if it is not already in context — you
need the token names, the component inventory, and the documented section rules to tell a real
violation from a deliberate choice.

## What you are producing

A short findings report, severity-ordered, where **every finding carries evidence** — a measured
number, a grep hit, an HTTP status, a quoted line. A finding you have not verified is a hypothesis;
either verify it or leave it out. This matters more here than in most review work because the
preview tooling in this repo actively misleads (see *Measure, don't look*), so "it looked wrong in
the screenshot" is not evidence, and neither is "this pattern is usually a problem".

## The fix/ask contract

Getting this split right is most of the value of the pass:

- **Fix silently, then report**: anything objectively broken or measurable — a link that 404s, text
  under 4.5:1 contrast, a service unreachable on mobile, dead CSS, a console error, an invented
  client name. There is no taste question in these; asking permission just adds a round trip.
- **Surface, never unilaterally change**: proportion, spacing, size, copy tone, section order,
  how much white space a hero should have. These are the user's calls and they have opinions. Show
  the measurement and your recommendation, then stop.

The failure mode to avoid in both directions: asking "should I fix this broken link?" (obviously
yes) or quietly rewriting a headline because you preferred your version (not yours to decide).

## Phase 1 — static audit

Run the bundled script. It covers the checks that need no dev server and that are tedious to do by
hand, which is exactly why they get skipped:

```bash
python3 .claude/skills/impeccable/scripts/static_audit.py --root .
```

It reports dead CSS classes, orphaned and oversized assets under `web/public/`, non-URL-safe
filenames, and hex values that duplicate an existing design token. Add `--json` if you want to
process the output.

Treat each line as a **lead, not a verdict** — the script greps, so confirm by reading the file
before acting. In particular: an asset flagged as orphaned may be referenced from somewhere the
grep cannot see, and a class flagged as dead may be legitimately built from a template literal
(the script already handles the `` `appr-card--${cardStyle}` `` family, but not every case).

## Phase 2 — the live page

Start the dev server through the Browser pane (`preview_start` with `{name: "web"}`), never through
Bash, and navigate to the page.

### Measure, don't look

Screenshots in this pane are unreliable in a specific, repeatable way: one taken immediately after
a state change (opening a menu, scrolling) frequently returns a **stale frame** showing the
previous state. Whole minutes get lost concluding a feature is broken when the DOM is fine. So:

- Read geometry and colour from `getBoundingClientRect()` and `getComputedStyle()`. Those numbers
  have never lied in this repo.
- When you do need a screenshot of a transient state, put the state change and the capture in one
  `browser_batch` call so nothing runs between them — and if the result still looks stale, take a
  second screenshot as a separate call rather than believing the first.
- Use screenshots to judge *taste* (does this look good), not to establish *fact* (is this element
  there). Facts come from the DOM.

### Checks

Run these against the live page, at a real desktop width (1440×900 via `resize_window`) and then
at least one narrow width (900 or below) — **breakpoints are where defects hide**, because
responsive rules and conditional rendering diverge there.

1. **Console and network.** `read_console_messages` with `onlyErrors: true`. One caveat specific to
   this repo: after deleting or renaming a component, Turbopack often reports a phantom
   `X is not defined` for code that is actually correct. Confirm by checking the symbol really
   exists (`grep`) and that the DOM rendered; if both hold, it is stale HMR — recover with
   `preview_stop` → `rm -rf web/.next` → `preview_start`, which also reassigns the port.
2. **Reachability at every width.** Count the interactive items in each navigation surface at
   desktop and at mobile, and compare the totals. A desktop panel and a mobile accordion are
   different code paths over the same data, so items added to one silently go missing from the
   other — this shipped once here, with three ERP services present in the desktop mega-menu and
   absent from the mobile menu, because the mobile branch mapped only `group.items` and ignored
   `group.subgroups`.
3. **Contrast.** Check the small, grey, low-priority text — that is where failures live, never in
   the headline. `--gray-1` (#686868) and `--gray-2` (#757575) both clear AA on white; the
   ~#a4a8bb–#bbb greys that design mocks reach for do not, and have failed audits in this repo
   twice. On a `.bistre` surface, white at 0.6 alpha or above is safe; below that, check.
4. **Fold and overflow.** Measure whether the things that should fit the first screen do
   (`rect.bottom <= window.innerHeight`), and confirm `document.body.scrollWidth` equals the
   viewport width — a percentage-width image with no `max-width` has blown up a hero here before.
5. **Interaction correctness.** For anything dismissible, verify it closes on outside click and on
   Escape, and that links *inside* it are actually clickable. Closing on the trigger's `blur`
   looks equivalent and is not: clicking a link inside the panel blurs the trigger first, which
   unmounts the link out from under the click. Also check `:focus-visible` renders something.
6. **Design-system conformance.** Components should read the semantic `--accent-*` aliases, not
   `--blue`/`--magenta`/`--orange` directly, and one page carries exactly one business-unit accent.
7. **Rhythm and repetition.** Look at consecutive sections as silhouettes: two adjacent sections
   with the same shape (photo-left/text-right twice running) read as a template even when the
   content differs, and a long run of white sections needs breaking up. This is the one *taste*
   item worth raising proactively — but propose, don't rewrite.
8. **Imagery.** No photo twice on the same page, and no photo identical to the equivalent card on
   a sibling page. Company-wide facts (team roster, client logos, case-study numbers) are meant to
   be reused verbatim; decorative photography is not.

## Phase 3 — content truth

The most damaging defects are the ones that look finished. Every visible claim should trace to a
real source, so for each number, client name, logo, quote and destination, ask where it came from:

- **Fabricated content is a blocker.** Design references and mockups arrive full of invented
  clients and metrics — a mock handed over in this project promoted a case study for a company
  that does not exist. Swap placeholders for a real story (`page.tsx` data, the live site) before
  building, and if no real equivalent exists, say so rather than inventing a plausible one.
- **Verify every destination.** `curl -s -o /dev/null -w "%{http_code}" -L <url>` on each new
  href. Labels get invented to match a page that was never built: "See all services" had to become
  "See our customer stories" here because `/services/`, `/our-services/` and `/offers/` all 404.
- **Compressed is fine, invented is not.** Shortening real copy into a one-line teaser is ordinary
  editing. Writing a new claim about capability or results is not.

## Phase 4 — report

Keep it scannable, lead with what you changed, and be explicit about what you did not touch:

```
## Fixed
- <what> — <evidence: the measurement, status code or grep hit>

## Needs your call
- <what> — <measurement> — <your recommendation, one line>

## Checked, clean
<one line naming the surfaces and widths you verified, so the user knows the scope>
```

Report honestly: if you could not verify something, say which check you skipped and why, rather
than letting "Checked, clean" imply coverage you do not have. A pass that quietly omits its blind
spots is worse than no pass, because it buys false confidence.

## Closing the loop

When a finding is a rule rather than a one-off — a threshold, a pattern that keeps recurring, a
mistake worth never repeating — write it into `26lights-design-system/SKILL.md` next to the
component it governs. That is what stops the same defect being re-introduced on the next page,
and it is the reason this pass gets cheaper each time it runs.
