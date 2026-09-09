"use client";

import { useState } from "react";
import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";
import { SectionCta } from "@/components/ui/SectionCta";

type ShowcaseItem = {
  title: string;
  body: string;
  photo?: { src: string; alt: string };
};

type FeatureShowcaseProps = {
  eyebrow: string;
  title: string;
  sub: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  items: ShowcaseItem[];
  /** Alternate light-gray background (validated: #fafafa, never a colored tint on a business-unit page) */
  alt?: boolean;
  /** Give the list column more room than the photo (photo stays a supporting visual instead of
   * competing with the text for attention). Default is an even 1fr/1fr split. */
  compactPhoto?: boolean;
};

export function FeatureShowcase({ eyebrow, title, sub, primaryCta, secondaryCta, items, alt, compactPhoto }: FeatureShowcaseProps) {
  const [active, setActive] = useState(0);
  const showPhoto = items.some((item) => item.photo);
  const activeItem = items[active];

  const list = (
    <div className="showcase-list">
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <button
            key={item.title}
            className={`showcase-item${isActive ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <h3>{item.title}</h3>
            <div className="showcase-item-panel">
              <div className="showcase-item-panel-inner">
                <p>{item.body}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <section style={alt ? { background: "#fafafa" } : undefined} data-screen-label={eyebrow}>
      <Wrap>
        <div className="showcase-header reveal">
          <div className="section-label" style={{ textAlign: "center" }}>
            {eyebrow}
          </div>
          <h2 style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>{title}</h2>
          <p className="sub-text" style={{ textAlign: "center", margin: "16px auto 0", maxWidth: "56ch" }}>
            {sub}
          </p>
          {primaryCta || secondaryCta ? (
            <div className="showcase-ctas">
              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  variant="primary"
                  target={primaryCta.href.startsWith("http") ? "_blank" : undefined}
                  rel={primaryCta.href.startsWith("http") ? "noopener" : undefined}
                >
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? <SectionCta label={secondaryCta.label} href={secondaryCta.href} /> : null}
            </div>
          ) : null}
        </div>

        {showPhoto ? (
          <div className={`showcase-split${compactPhoto ? " showcase-split--compact" : ""}`}>
            <div className="showcase-photo">
              {activeItem.photo ? (
                <Image src={activeItem.photo.src} alt={activeItem.photo.alt} fill sizes="(max-width: 900px) 90vw, 460px" />
              ) : null}
            </div>
            {list}
          </div>
        ) : (
          <div className="showcase-list-solo">{list}</div>
        )}
      </Wrap>
    </section>
  );
}
