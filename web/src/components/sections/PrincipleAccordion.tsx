"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Wrap } from "@/components/ui/Wrap";

type Principle = {
  /** "01"…"16" — zero-padded so the column of numbers lines up. */
  number: string;
  title: string;
  body: string;
};

type PrincipleAccordionProps = {
  id?: string;
  items: Principle[];
  /** Which items start open. Defaults to none — sixteen principles is a lot to read at once,
   * and unlike `WhyAccordion`'s single-open FAQ (3-4 items, one argument at a time), a reader
   * here plausibly wants two or three open side by side to compare. */
  defaultOpen?: number[];
};

function ChevronIcon() {
  return <ChevronDown className="principle-icon" aria-hidden="true" strokeWidth={1.8} />;
}

/** The manifesto's numbered list of principles — full-width, no photo, every item independently
 * toggled. Distinct from `WhyAccordion` (photo + copy split, single-open, 3-4 items built for a
 * persona page's "why work with me" case): this is the shape for a real source that lists many
 * short, independent statements with nothing else to anchor the section on. */
export function PrincipleAccordion({ id, items, defaultOpen = [] }: PrincipleAccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen));

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section id={id} data-screen-label="Manifesto">
      <Wrap>
        <div className="principle-list">
          {items.map((item, i) => {
            const isOpen = open.has(i);
            return (
              // The outer element's className must never change after mount: the scroll-reveal
              // script adds the "in" class to ".reveal" elements imperatively (classList.add,
              // outside React), and React overwrites the whole className attribute on any render
              // where the JSX-computed string differs — which silently deleted "in" (and reset
              // the item to opacity:0) the instant "is-open" was toggled. "is-open" now lives on
              // an inner element that carries no "reveal" class of its own, so React never has a
              // reason to touch this div's className again after the first render.
              <div className="principle-item reveal" key={item.number}>
                <div className={isOpen ? "principle-body is-open" : "principle-body"}>
                  <button
                    className="principle-toggle"
                    aria-expanded={isOpen}
                    aria-controls={`principle-panel-${item.number}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="principle-num">{item.number}</span>
                    <span className="principle-title">{item.title}</span>
                    <ChevronIcon />
                  </button>
                  <div className="principle-panel" id={`principle-panel-${item.number}`}>
                    <div className="principle-panel-inner">
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}
