import type { ReactNode } from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { SectionCta } from "@/components/ui/SectionCta";
import { Button } from "@/components/ui/Button";
import { Bistre } from "@/components/ui/Bistre";
import { revealDelay } from "@/lib/style";

type Quote = {
  text: string;
  name: string;
  role: string;
  photo: { src: string; alt: string };
};

type DetailItem = {
  title: string;
  body: string;
};

type DetailSplitProps = {
  /** Anchor target for an in-page or nav link — growth-plan's three sections are each linked
   * to from the header nav and from the page's own "Read more" arrows. */
  id?: string;
  eyebrow: string;
  /** ReactNode, not string: ai/production's heading is two-tone — a plain clause plus a
   * `<span>` the CSS greys out. A plain string past `LONG_TITLE_THRESHOLD` chars automatically
   * renders at a smaller size (see `LONG_TITLE_THRESHOLD` below) — a ReactNode title can't be
   * measured this way and always keeps the default size, which is fine today since every
   * ReactNode title in use is short. */
  title: ReactNode;
  /** A bigger, bolder lead line between the title and the body paragraphs — for a page that
   * wants one emphasized sentence up front (validated on growth-plan's `.detail-lead`). */
  lead?: string;
  paragraphs: string[];
  photo?: { src: string; alt: string };
  /** "cover" (default) fills the frame edge to edge, cropping — right for a portrait/team photo.
   * "contain" shrinks the image to ~70% of the frame on a light backdrop instead of cropping —
   * for a real product screenshot, where cropping into it loses the point (validated on Odoo
   * Implementation's three app screenshots, previously stretched full-bleed via cover). */
  photoFit?: "cover" | "contain";
  /** A bespoke illustration (SVG/CSS), for a page whose visual isn't a photograph — alternative
   * to `photo`, wrapped in the same `.detail-photo` frame plus `.detail-graphic` (centers
   * content instead of cropping to fill, validated on growth-plan's animated diagrams). */
  visual?: ReactNode;
  flip?: boolean;
  cta?: { label: string; href: string; strong?: boolean };
  /** A soft arrow-link CTA next to `cta`, for a page that wants two calls to action side by
   * side instead of one. */
  secondaryCta?: { label: string; href: string };
  /** #fafafa background instead of white — alternate across sections for rhythm */
  alt?: boolean;
  /** Dark accent-tinted gradient surface (same as Hero/FinalCta/Projects) instead of white —
   * use sparingly, to break up a long run of light sections rather than as a default. */
  bistre?: boolean;
  /** An attributed pull-quote, rendered below the paragraphs — for a real quoted line with a
   * named, photographed source. */
  quote?: Quote;
  /** A static list of sub-points below the paragraphs, each with its own small heading — all
   * visible at once (not an accordion), for content that has a lead-in plus a few named
   * reasons rather than just prose. */
  items?: DetailItem[];
  /** A flat checklist below the paragraphs — a labeled group of short, equally-weighted bullet
   * points (e.g. "Key aspects we focus on") rather than `items`' named sub-reasons, each with
   * its own heading. Reuses `ChecklistSection`'s check-icon row styling. */
  checklist?: { label: string; points: string[] };
};

/** Past this length, a real sentence-length title reads heavier at the default 44px-max size
 * than a short declarative one does — drop to `.detail-title--long` instead (validated on
 * marketing/strategy-and-plan's Go-to-market title, 121 chars, vs. Marketing strategy's 69). */
const LONG_TITLE_THRESHOLD = 90;

function CheckIcon() {
  return <CircleCheck aria-hidden="true" strokeWidth={1.8} />;
}

export function DetailSplit({ id, eyebrow, title, lead, paragraphs, photo, photoFit, visual, flip, cta, secondaryCta, alt, bistre, quote, items, checklist }: DetailSplitProps) {
  const media =
    visual ??
    (photo ? (
      photoFit === "contain" ? (
        <Image src={photo.src} alt={photo.alt} width={960} height={600} sizes="(max-width: 900px) 70vw, 320px" style={{ width: "70%", height: "auto", objectFit: "contain" }} />
      ) : (
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 90vw, 460px" />
      )
    ) : null);
  const isLongTitle = typeof title === "string" && title.length > LONG_TITLE_THRESHOLD;

  const body = (
    <>
      {lead ? <p className="detail-lead">{lead}</p> : null}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {paragraphs.map((paragraph) => (
          <p className="sub-text" key={paragraph.slice(0, 40)}>
            {paragraph}
          </p>
        ))}
      </div>
      {items ? (
        <div className="detail-items">
          {items.map((item) => (
            <div className="detail-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      ) : null}
      {checklist ? (
        <div style={{ marginTop: 24 }}>
          <h3 className="checklist-group-label">{checklist.label}</h3>
          <div className="checklist-list">
            {checklist.points.map((point) => (
              <div className="checklist-item" key={point}>
                <CheckIcon />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {cta || secondaryCta ? (
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          {cta ? (
            cta.strong ? (
              <Button
                href={cta.href}
                variant="primary"
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener" : undefined}
              >
                {cta.label}
              </Button>
            ) : (
              <SectionCta label={cta.label} href={cta.href} />
            )
          ) : null}
          {secondaryCta ? <SectionCta label={secondaryCta.label} href={secondaryCta.href} /> : null}
        </div>
      ) : null}
      {quote ? (
        <div className="text-quote">
          <p>&ldquo;{quote.text}&rdquo;</p>
          <div className="text-quote-author">
            <Image src={quote.photo.src} alt={quote.photo.alt} width={44} height={44} />
            <div>
              <div className="text-quote-name">{quote.name}</div>
              <div className="text-quote-role">{quote.role}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );

  const content = (
    <div className={`detail-split ${flip ? "flip" : ""}`}>
      <div
        className={`detail-photo reveal${visual ? " detail-graphic" : photo ? "" : " is-placeholder"}${photoFit === "contain" ? " detail-photo--contain" : ""}`}
      >
        {media}
      </div>
      <div className="detail-content">
        <div className="detail-inner reveal" style={revealDelay(120)}>
          <div className="section-label">{eyebrow}</div>
          <h2 className={`detail-title${isLongTitle ? " detail-title--long" : ""}`}>{title}</h2>
          {body}
        </div>
      </div>
    </div>
  );

  if (bistre) {
    return (
      <Bistre as="section" id={id} data-screen-label={eyebrow}>
        {content}
      </Bistre>
    );
  }

  return (
    <section id={id} className={`detail${alt ? " detail--light" : ""}`} data-screen-label={eyebrow}>
      {content}
    </section>
  );
}
