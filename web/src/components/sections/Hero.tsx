import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "ghost" | "outline" | "light" | "dark";
};

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  sub: string;
  ctas: CtaLink[];
  visual?: ReactNode;
};

export function Hero({ eyebrow, title, sub, ctas, visual }: HeroProps) {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero-inner">
        <div>
          {eyebrow ? (
            <div className="hero-badges">
              <span className="badge">{eyebrow}</span>
            </div>
          ) : null}
          <h1>{title}</h1>
          <p className="hero-sub">{sub}</p>
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
        {visual}
      </div>
    </section>
  );
}
