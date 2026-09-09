"use client";

import { useState } from "react";
import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";
import { Button } from "@/components/ui/Button";
import { revealDelay } from "@/lib/style";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  initials: string;
};

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  items: Testimonial[];
  cta?: { label: string; href: string; strong?: boolean };
  /** #fafafa (validated default, arik-azoulay) unless a neighboring section is already
   * that shade — pass "white" to break up two same-toned sections sitting back to back. */
  background?: "gray" | "white";
  /** Extra testimonials shown only after the visitor clicks the reveal button — for a page
   * whose source ships 7+ stories but only wants 3 up front (validated on arik-azoulay). */
  moreItems?: Testimonial[];
  moreLabel?: string;
  lessLabel?: string;
  /** 2 (default, validated on tech/mvp) or 3 (validated on arik-azoulay's 7-story grid). */
  columns?: 2 | 3;
};

function TestimonialCard({ item, delay, className = "testi-card reveal" }: { item: Testimonial; delay: number; className?: string }) {
  return (
    <div className={className} style={revealDelay(delay)}>
      <blockquote className="testi-quote">&ldquo;{item.quote}&rdquo;</blockquote>
      <div className="testi-author-row">
        {item.avatar ? (
          <Image src={item.avatar} alt={item.name} width={60} height={60} className="testi-avatar" />
        ) : (
          <span className="testi-avatar-fallback" aria-hidden="true">
            {item.initials}
          </span>
        )}
        <div>
          <div className="testi-author">{item.name}</div>
          <div className="testi-role">
            {item.title}, {item.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials({
  eyebrow,
  title,
  items,
  cta,
  background = "gray",
  moreItems,
  moreLabel = "Read more founder stories →",
  lessLabel = "Show less ↑",
  columns = 2,
}: TestimonialsProps) {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="testimonials"
      style={background === "white" ? { background: "#fff" } : undefined}
      data-screen-label="Testimonials"
    >
      <Wrap>
        <div className="reveal">
          <div className="section-label">{eyebrow}</div>
          <h2>{title}</h2>
        </div>
        <div className={`testi-grid${columns === 3 ? " testi-grid--3" : ""}${open ? " open" : ""}`}>
          {items.map((item, i) => (
            <TestimonialCard item={item} delay={i * 80} key={item.company} />
          ))}
          {moreItems?.map((item, i) => (
            <TestimonialCard
              item={item}
              delay={i * 80}
              className={`testi-card testi-hidden reveal${open ? " in" : ""}`}
              key={item.company}
            />
          ))}
        </div>
        {moreItems?.length ? (
          <button className="testi-more reveal" onClick={() => setOpen((o) => !o)}>
            {open ? lessLabel : moreLabel}
          </button>
        ) : null}
        {cta ? (
          cta.strong ? (
            <div style={{ marginTop: 24 }}>
              <Button href={cta.href} variant="primary" target="_blank" rel="noopener">
                {cta.label}
              </Button>
            </div>
          ) : (
            <SectionCta label={cta.label} href={cta.href} />
          )
        ) : null}
      </Wrap>
    </section>
  );
}
