"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Wires the fade-up-on-scroll mechanic for every `.reveal` element on the page.
 *
 * The effect is keyed on `pathname`, and that is load-bearing rather than incidental: this
 * component lives in the root layout, so it never remounts during client-side navigation. With
 * an empty dependency array it observed only the *first* page's elements — every page reached
 * by clicking a nav link kept `.js-reveal .reveal { opacity: 0 }` forever, leaving everything
 * below the hero invisible. Re-running per route re-queries the new page's elements, which both
 * fixes that and gives each navigation a visible entrance animation. */
export function RevealSetup() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-reveal");

    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
