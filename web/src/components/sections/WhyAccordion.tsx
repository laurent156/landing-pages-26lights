"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";

type AccordionItem = {
  label: string;
  body: string;
};

type WhyAccordionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: AccordionItem[];
  photo: { src: string; alt: string };
  /** Which item is open before any click — matches the source's own default-open item. */
  defaultOpenIndex?: number;
  /** An optional CTA under the accordion (validated on arik-azoulay's "See packages", a dark
   * button rather than the page's accent color). */
  cta?: { label: string; href: string };
};

function ChevronIcon() {
  return <ChevronDown className="why-item-icon" aria-hidden="true" strokeWidth={1.8} />;
}

/** A framed photo beside a single-open FAQ-style accordion — for a page whose "why work with
 * her/him" case rests on 3-4 traits, each with real detail visitors only need one at a time.
 * Distinct from `DetailSplit`'s static `items` list: only one panel's copy is ever visible. */
export function WhyAccordion({ eyebrow, title, intro, items, photo, defaultOpenIndex = 0, cta }: WhyAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <section className="why" data-screen-label={eyebrow}>
      <Wrap>
        <div className="why-split">
          <div className="why-photo-col">
            <Image className="why-photo" src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 90vw, 460px" />
          </div>
          <div className="why-content-col">
            <div className="section-label reveal">{eyebrow}</div>
            <h2 className="reveal">{title}</h2>
            <p className="why-intro reveal">{intro}</p>
            <div className="why-accordion reveal">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div className={`why-item${isOpen ? " is-open" : ""}`} key={item.label}>
                    <button
                      className="why-item-toggle"
                      aria-expanded={isOpen}
                      aria-controls={`why-panel-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="why-item-label">{item.label}</span>
                      <ChevronIcon />
                    </button>
                    <div className="why-item-panel" id={`why-panel-${i}`}>
                      <div className="why-item-panel-inner">
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {cta ? (
              <Button href={cta.href} variant="dark">
                {cta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
