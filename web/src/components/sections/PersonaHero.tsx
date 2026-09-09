import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

type CtaLink = { label: string; href: string; variant?: "primary" | "ghost" };

type GlassCard = {
  name: string;
  title: string;
  tags: string[];
};

type ProofRow = {
  avatar: { src: string; alt: string };
  quote: string;
  name: string;
};

type PersonaHeroProps = {
  title: ReactNode;
  sub: ReactNode;
  ctas: CtaLink[];
  portrait: { src: string; alt: string };
  glass: GlassCard;
  /** A small social-proof row (avatar + quote + name) between the sub and the CTAs — for a
   * page whose hero leads with a real client line instead of going straight to the ask
   * (validated on arik-azoulay). */
  proof?: ProofRow;
  /** Widen the text column from 586px to 720px — the offer `Hero`'s equivalent escape hatch
   * (see its own `wide` prop) for a real title too long to reach 2-3 lines at the shared H1
   * size in the default measure. Break the title into `<br />`-separated clauses yourself,
   * sized to fit this width. */
  wide?: boolean;
};

/** Full-bleed cutout portrait + gradient + floating "glass" credential card — the persona/
 * portrait hero for individual-consultant pages (design-system §8B). Distinct from the
 * product-offer `Hero`: fixed-height dark section, no two-column grid, portrait bleeds in from
 * one side instead of a visual card sitting in its own column. */
export function PersonaHero({ title, sub, ctas, portrait, glass, proof, wide }: PersonaHeroProps) {
  return (
    <section className="persona-hero" data-screen-label="Hero">
      <div className="persona-hero-bound">
        <Image className="persona-hero-portrait" src={portrait.src} alt={portrait.alt} width={804} height={1073} priority />
      </div>
      <div className="persona-hero-inner">
        <div className={`persona-hero-text${wide ? " wide" : ""}`}>
          <h1 className="hero-h1 reveal">{title}</h1>
          <p className="hero-sub reveal">{sub}</p>
          {proof ? (
            <div className="hero-proof reveal">
              <Image src={proof.avatar.src} alt={proof.name} width={44} height={44} className="hero-proof-avatar" />
              <div className="hero-proof-text">
                <span className="hero-proof-quote">&ldquo;{proof.quote}&rdquo;</span>
                <span className="hero-proof-name">{proof.name}</span>
              </div>
            </div>
          ) : null}
          <div className="hero-ctas reveal">
            {ctas.map((cta) =>
              cta.variant === "ghost" ? (
                <a href={cta.href} target={cta.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="btn btn-ghost" key={cta.label}>
                  {cta.label}
                </a>
              ) : (
                <Button href={cta.href} target={cta.href.startsWith("http") ? "_blank" : undefined} rel="noopener" key={cta.label}>
                  {cta.label}
                </Button>
              )
            )}
          </div>
        </div>
        <div className="hero-glass-card reveal">
          <div className="hgc-name">{glass.name}</div>
          <div className="hgc-title">{glass.title}</div>
          <div className="hgc-tags">
            {glass.tags.map((tag) => (
              <span className="hgc-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
