import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "ghost" | "outline" | "light" | "dark";
};

/** Keep in step with `.hero-proof-logo`'s height in components.css — it is what turns a logo's
 * aspect ratio into the display width Next needs to serve a sharp source. */
const PROOF_LOGO_HEIGHT = 30;

type ProofLogo = {
  src: string;
  alt: string;
  /** The file's real intrinsic size. Worth passing: the strip renders by height, so a wide
   * wordmark ends up ~200px across, and the 120px default hint makes Next serve a 128px source
   * that is then upscaled and visibly soft. */
  width?: number;
  height?: number;
  /** Extra class for a mark that reads visibly smaller than its neighbours at the same height —
   * same escape hatch as `TrustBar`'s. */
  className?: string;
};

type HeroProps = {
  eyebrow?: string;
  /** Multiple short claim pills instead of one eyebrow label — "100% code ownership", "No
   * vendor lock-in" — for an offer hero that leads with concrete guarantees. Takes precedence
   * over `eyebrow` when both are passed. */
  badges?: string[];
  title: ReactNode;
  /** A short bold line between the title and the sub — for an offer hero that names its
   * sub-products right under the headline (validated on growth-plan: "Growth Plan. Business
   * Plan. Process mapping."). Distinct from `note`, which sits after the sub instead. */
  tagline?: string;
  /** Omit for a hero whose real source goes straight from the headline to the CTA, with no
   * separate positioning sentence (validated on go-to-market). */
  sub?: string;
  /** A short factual line under the sub, on its own row — where the real source keeps a detail
   * like "Offices in Brussels and Paris." separate from the positioning sentence. */
  note?: string;
  ctas: CtaLink[];
  visual?: ReactNode;
  /** Put the visual on the left and the copy on the right instead of the default copy-left/
   * visual-right order. */
  reverse?: boolean;
  /** "stretch" makes the visual column occupy the full height of the copy column, top and
   * bottom, instead of vertically centering it. Reach for this when `visual` is a compact,
   * intrinsic-height card (a glass stat/progress card) rather than a `HeroFigure` photo — a
   * photo already fills the row edge-to-edge via `object-fit: cover`, so centering it looks
   * flush either way. A card only sized to its own content, centered against a taller copy
   * column, floats with dead space above (or, top-aligned alone, still falls short of the CTA
   * row at the bottom) instead of reading as attached to the headline the way a photo does. */
  visualAlign?: "center" | "stretch";
  /** Copy centred, with the visual on its own row underneath at up to 1080px wide, instead of
   * beside it in the 541px column. Reach for this when `visual` is an app or dashboard mockup
   * whose detail is unreadable at column width — the ERP window on ai/erp measured 541px, which
   * is narrower than the interface it depicts. A portrait photo does not need it. Requires
   * `visual`; takes precedence over `reverse`, which has no meaning in a single column. */
  stacked?: boolean;
  /** Client logos inside the hero, on the dark surface at its bottom edge, instead of the
   * separate light `TrustBar` strip underneath — for a page whose hero is tall enough that the
   * proof would otherwise land below the fold. Pass the same files the TrustBar uses; they are
   * flattened to white. When you use this, drop the page's `TrustBar` rather than showing both. */
  proofLogos?: { label?: string; logos: ProofLogo[] };
  /** Widen the no-visual column from 586px to 1080px (matches `stacked`'s visual-row width) —
   * for a real title too long to fit the shared measure at full size in 2 lines. Keeps the
   * shared H1 size instead of shrinking it; break the title into two `<br />`-separated clauses
   * yourself, sized to fit this width (validated on go-to-market's 71-character title). Only
   * meaningful without `visual`. */
  wide?: boolean;
};

export function Hero({ eyebrow, badges, title, tagline, sub, note, ctas, visual, reverse, visualAlign, stacked, proofLogos, wide }: HeroProps) {
  const isStacked = Boolean(visual && stacked);
  const modifiers = [
    visual ? "" : "no-visual",
    isStacked ? "stacked" : reverse ? "reverse" : "",
    visualAlign === "stretch" && !isStacked ? "visual-stretch" : "",
    !visual && wide ? "wide" : "",
  ].filter(Boolean);

  return (
    <section className="hero" data-screen-label="Hero">
      <div className={["hero-inner", ...modifiers].join(" ")}>
        <div className="hero-copy">
          {badges?.length ? (
            <div className="hero-badges">
              {badges.map((badge) => (
                <span className="badge" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
          ) : eyebrow ? (
            <div className="hero-badges">
              <span className="badge">{eyebrow}</span>
            </div>
          ) : null}
          <h1 className="hero-h1">{title}</h1>
          {tagline ? <div className="hero-tagline">{tagline}</div> : null}
          {sub ? <p className="hero-sub">{sub}</p> : null}
          {note ? <p className="hero-note">{note}</p> : null}
          <div className="hero-ctas">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant ?? "primary"}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener" : undefined}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
        {visual ? <div className="hero-visual-in">{visual}</div> : null}
        {proofLogos ? (
          <div className="hero-proof-bar">
            {proofLogos.label ? <span className="hero-proof-bar-label">{proofLogos.label}</span> : null}
            <div className="hero-proof-bar-logos">
              {proofLogos.logos.map((logo) => {
                /* The CSS sizes these by height, so a logo's intrinsic width is not its display
                   width and Next has nothing to pick a source from — a wide wordmark came out
                   upscaled from 144px to 195px. Derive the display width from the aspect ratio
                   instead and ask for twice it, which is the sharp source on a 2x screen. */
                const displayWidth =
                  logo.width && logo.height ? Math.round((PROOF_LOGO_HEIGHT * logo.width) / logo.height) : 120;
                return (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={displayWidth * 2}
                    height={PROOF_LOGO_HEIGHT * 2}
                    className={`hero-proof-logo${logo.className ? ` ${logo.className}` : ""}`}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
