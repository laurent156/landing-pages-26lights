import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

type CtaLink = { label: string; href: string; variant?: "primary" | "ghost" };

type MarqueeTile = { src: string; alt?: string };

type MarqueeHeroProps = {
  title: ReactNode;
  sub: string;
  ctas: CtaLink[];
  /** Real portfolio shots for the infinite scrolling strip below the copy — pass the set once;
   * the component duplicates it for the seamless loop, so don't pre-double it yourself. */
  marqueeTiles: MarqueeTile[];
};

/** Full-bleed dark hero with no visual column: a text block over its own glow, and an infinite
 * horizontal marquee of real portfolio shots underneath (branding's own pattern — distinct from
 * the product-offer `Hero`'s two-column grid and from `PersonaHero`'s cutout portrait). */
export function MarqueeHero({ title, sub, ctas, marqueeTiles }: MarqueeHeroProps) {
  const loopedTiles = [...marqueeTiles, ...marqueeTiles];

  return (
    <section className="marquee-hero" data-screen-label="Hero">
      <div className="marquee-hero-inner">
        <div className="marquee-hero-text">
          <h1 className="hero-h1 reveal">{title}</h1>
          <p className="hero-sub reveal">{sub}</p>
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
      </div>
      <div className="hero-marquee reveal" aria-hidden="true">
        <div className="hero-marquee-track">
          {loopedTiles.map((tile, i) => (
            <div className="hero-marquee-tile" key={i}>
              <Image src={tile.src} alt={tile.alt ?? ""} width={340} height={400} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
