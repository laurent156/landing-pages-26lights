import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { Bistre } from "@/components/ui/Bistre";
import { Button } from "@/components/ui/Button";
import { SectionCta } from "@/components/ui/SectionCta";
import { revealDelay } from "@/lib/style";

type FeatureItem = {
  title: string;
  /** Omit for a real one-liner with no separate title of its own — the sentence carries the
   * whole card (validated on nurturing's "Multi-Touchpoint Framework" 3 one-liners). */
  body?: ReactNode;
  photo?: { src: string; alt: string };
  /** "cover" (default) fills the frame, cropping — right for a photograph. "contain" shows the
   * whole image on a white backdrop with a hairline border, for a product screenshot: those
   * carry their own light background, so under `cover` they dissolve into the section and lose
   * the frame the photographs next to them have (validated on the homepage's My26 card, whose
   * phone mockup was also being cropped off). Mirrors `DetailSplit`'s prop of the same name. */
  photoFit?: "cover" | "contain";
  /** A bespoke SVG illustration instead of a photograph, for an offer whose own page already
   * has one — it carries its own `.feat-visual` wrapper, as every illustration in
   * `components/illustrations/` does. Takes precedence over `photo`. */
  visual?: ReactNode;
  icon?: ReactNode;
  /** A short lead-in above the title — a step number ("01"), or a number and a label
   * ("01 · Growth plan"). Set in tabular figures so a column of them lines up. */
  lead?: string;
  /** Arrow link at the foot of the block. */
  link?: { label: string; href: string };
  /** A short closing line in bold under the body (validated on tech/mvp's two points). */
  note?: string;
};

type FeatureGridProps = {
  /** Omit the whole header — eyebrow, statement, sub and cta — for a grid that follows
   * straight on from the section above it (validated on tech/mvp's two points). */
  eyebrow?: string;
  statement?: string;
  /** Supporting detail below the statement, rendered as regular body text rather than
   * lead-statement size — for when the real copy is really two sentences (a headline
   * clause plus a logistical one), so the whole thing does not carry hero-scale weight. */
  sub?: string;
  items: FeatureItem[];
  alt?: boolean;
  cta?: { label: string; href: string; strong?: boolean };
  /** Force the photo-slot layout even before any card has a real photo yet — renders
   * "Visual to come" placeholders for every card so real photos can be dropped in later
   * without a layout change. */
  withPhotos?: boolean;
  /** Dark .bistre surface instead of white/alt — for arguments that need to read as higher-
   * stakes than a plain light section (validated on tech-audit's "why do a tech audit"). */
  bistre?: boolean;
  /** Card surface for a small number of arguments that need to read as distinct, weighted
   * callouts rather than a plain column: "boxed" = light-gray card, "bistre" = dark glow
   * card. Omit for the bare/no-card default (validated on growth-plan, mvp, dev-team). */
  cardStyle?: "boxed" | "bistre";
  /** A single lead photo for the whole section, placed in a left column with the cards
   * stacked vertically on the right — instead of the default side-by-side card grid. */
  leadPhoto?: { src: string; alt: string };
  /** How many blocks sit side by side. Left unset it follows the old rule — one column per
   * item, folding to 2 at four or more. Set it explicitly to pick a density: the count drives
   * the type scale and the gap, because a 278px block cannot carry 15px prose (~35 characters
   * a line) the way a 560px one can. */
  columns?: 2 | 3 | 4;
  /** QA screenshot label — defaults to the eyebrow, which is absent on a headerless grid. */
  screenLabel?: string;
};

export function FeatureGrid({
  eyebrow,
  statement,
  sub,
  items,
  alt,
  cta,
  withPhotos,
  bistre,
  cardStyle,
  leadPhoto,
  columns,
  screenLabel,
}: FeatureGridProps) {
  const showPhotoSlot = withPhotos || items.some((item) => item.photo);
  const showVisualSlot = items.some((item) => item.visual);
  const showIconSlot = items.some((item) => item.icon);
  const cols = columns ?? (items.length >= 4 ? 2 : items.length);

  const cardsMarkup = items.map((item, i) => (
    <div
      className={`appr-card reveal${cardStyle ? ` appr-card--${cardStyle}` : ""}`}
      style={revealDelay(i * 100)}
      key={item.title}
    >
      {showIconSlot && item.icon ? <div className="appr-card-icon">{item.icon}</div> : null}
      {item.visual ? (
        item.visual
      ) : showVisualSlot ? null : showPhotoSlot ? (
        <div
          className={`appr-card-photo${item.photo ? "" : " is-placeholder"}${
            item.photoFit === "contain" ? " appr-card-photo--contain" : ""
          }`}
        >
          {item.photo ? (
            <Image src={item.photo.src} alt={item.photo.alt} fill sizes="(max-width: 900px) 90vw, 340px" />
          ) : null}
        </div>
      ) : null}
      {item.lead ? <div className="appr-card-lead">{item.lead}</div> : null}
      <h3>{item.title}</h3>
      {item.body ? <p>{item.body}</p> : null}
      {item.note ? <p className="appr-card-note">{item.note}</p> : null}
      {item.link ? (
        <a href={item.link.href} className="read-more">
          {item.link.label}
        </a>
      ) : null}
    </div>
  ));

  const content = (
    <Wrap>
      {eyebrow || statement ? (
      <div className="reveal">
        {eyebrow ? <div className="section-label">{eyebrow}</div> : null}
        {statement ? (
          <h2 className="lead-statement" style={{ maxWidth: "60ch" }}>
            {statement}
          </h2>
        ) : null}
        {sub ? (
          <p className="sub-text" style={{ marginTop: 14, maxWidth: "60ch" }}>
            {sub}
          </p>
        ) : null}
        {cta ? (
          cta.strong ? (
            <div style={{ marginTop: 24 }}>
              <Button
                href={cta.href}
                variant="primary"
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener" : undefined}
              >
                {cta.label}
              </Button>
            </div>
          ) : (
            <SectionCta label={cta.label} href={cta.href} />
          )
        ) : null}
      </div>
      ) : null}
      {leadPhoto ? (
        <div className="approach-split">
          <div className="approach-split-photo reveal">
            <Image src={leadPhoto.src} alt={leadPhoto.alt} fill sizes="(max-width: 900px) 90vw, 460px" />
          </div>
          <div className="approach-split-cards">{cardsMarkup}</div>
        </div>
      ) : (
        <div className={`approach-grid approach-grid--${cols}`} style={{ "--approach-cols": cols } as CSSProperties}>
          {cardsMarkup}
        </div>
      )}
    </Wrap>
  );

  if (bistre) {
    return (
      <Bistre as="section" data-screen-label={screenLabel ?? eyebrow}>
        {content}
      </Bistre>
    );
  }

  return (
    <section style={alt ? { background: "#fafafa" } : undefined} data-screen-label={screenLabel ?? eyebrow}>
      {content}
    </section>
  );
}
