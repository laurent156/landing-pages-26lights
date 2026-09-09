"use client";

import { useEffect } from "react";

/** Drives the recede tilt/blur/fade on branding's sticky pillar stack (design system §23) — the
 * CSS (`.pillar-recede`) reads `--cover`/`--cover-step` off each card and was written to fall
 * back to a flat, un-receded stack when nothing sets them, but no script ever actually set them.
 *
 * Each `.pillar-sticky` wrapper carries a 300px `padding-bottom` buffer purely so this effect has
 * scroll distance to animate through: while the wrapper's natural (unstuck) span is still above
 * that buffer, the card sits fully stuck at `top` with `--cover` at 0. The instant scroll enters
 * the buffer, `--cover` ramps 0→1 over those 300px, and the wrapper unsticks exactly as `--cover`
 * reaches 1 — so the card has already scaled down, tilted, blurred, and faded to nothing by the
 * time it would otherwise pop out of position. `--cover-step` is a delayed twin used only for the
 * blur (`filter: blur(calc(var(--cover-step,0) * 5px))`): blur only ramps across the *second*
 * half of the recede, so the card is still legible while it's mostly just shrinking/tilting.
 *
 * Last card (`.pillar-sticky--flow`) is exempt — the CSS itself neutralizes `--cover` there, and
 * it never needs the buffer, so `.pillar-sticky:nth-of-type(3)` sets its `padding-bottom` back to
 * 0 rather than eating scroll distance for an effect that will never show. */
export function PillarRecedeEffect() {
  useEffect(() => {
    const wraps = Array.from(document.querySelectorAll<HTMLElement>(".pillar-sticky"));
    if (!wraps.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const recedes = wraps.map((w) => w.querySelector<HTMLElement>(".pillar-recede"));

    let bufferStarts: number[] = [];

    // A sticky element's own rect reflects wherever it's currently stuck, not its resting
    // document position — un-stick every wrapper for the moment of measuring, then restore
    // (synchronous, so there's no visible flicker), per §23.
    function measure() {
      wraps.forEach((w) => {
        w.style.position = "static";
      });
      bufferStarts = wraps.map((w) => {
        const rect = w.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        // padding-bottom is part of the measured height; the buffer is the wrapper's own last
        // 300px (0 on the flow card, so its bufferStart just sits at its own natural bottom —
        // harmless, since it has no .pillar-recede transform left to drive anyway).
        return top + rect.height - 300;
      });
      wraps.forEach((w) => {
        w.style.removeProperty("position");
      });
    }

    let ticking = false;
    function update() {
      ticking = false;
      const scrollY = window.scrollY;
      for (let i = 0; i < recedes.length; i++) {
        const recede = recedes[i];
        if (!recede) continue;
        const cover = Math.max(0, Math.min(1, (scrollY - bufferStarts[i]) / 300));
        const coverStep = Math.max(0, Math.min(1, (cover - 0.5) / 0.5));
        recede.style.setProperty("--cover", String(cover));
        recede.style.setProperty("--cover-step", String(coverStep));
      }
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    function onResize() {
      measure();
      update();
    }

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
