import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";

type PricingTier = {
  name: string;
  /** The "Best for: …" qualifier — helps a visitor self-select instead of comparing prices. */
  bestFor: string;
  /** The figure itself ("€1,250"), or a phrase ("Let's talk") when the tier is not priced. */
  price: string;
  /** "one-time", "/month" — omitted on an unpriced tier. */
  period?: string;
  lede: string;
  features: string[];
  cta: { label: string; href: string };
  /** Renders the dark, glow-tinted card. Reserve for exactly one tier. */
  featured?: boolean;
  /** Small uppercase flag above the name on the featured tier ("Most requested"). */
  flag?: string;
  /** A softer alternative under the CTA, for visitors not ready to buy. */
  callLink?: { label: string; href: string };
  /** A face on the tier that is a conversation rather than a checkout. */
  face?: { src: string; alt: string };
};

type PricingProps = {
  /** Anchor target, for a page whose CTAs link down to the packages. */
  id?: string;
  title: string;
  sub: string;
  tiers: PricingTier[];
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 8.5L6 11.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Three priced paths side by side, one featured on a dark card. Prefer this over a plain
 * `FeatureGrid` whenever the real page states actual figures — the price *is* the content,
 * and burying it in prose is what makes visitors bounce to ask "how much?" by email. */
export function Pricing({ id, title, sub, tiers }: PricingProps) {
  return (
    <section id={id} className="pricing" data-screen-label="Pricing">
      <Wrap>
        <div className="pricing-head">
          <h2 className="reveal">{title}</h2>
          <p className="reveal">{sub}</p>
        </div>
        <div className="plans">
          {tiers.map((tier) => (
            <div className={`plan reveal${tier.featured ? " plan--featured" : ""}`} key={tier.name}>
              {tier.flag ? <span className="plan-flag">{tier.flag}</span> : null}
              {tier.face ? (
                <Image className="plan-face" src={tier.face.src} alt={tier.face.alt} width={60} height={60} />
              ) : null}
              <div className="plan-name">{tier.name}</div>
              <div className="plan-for">{tier.bestFor}</div>
              <div className="plan-price">
                <b>{tier.price}</b>
                {tier.period ? <span>{tier.period}</span> : null}
              </div>
              <p className="plan-lede">{tier.lede}</p>
              <ul className="plan-list">
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              {tier.featured ? (
                <Button href={tier.cta.href} variant="light" target="_blank" rel="noopener">
                  {tier.cta.label}
                </Button>
              ) : (
                <a className="plan-cta" href={tier.cta.href} target="_blank" rel="noopener">
                  {tier.cta.label}
                </a>
              )}
              {tier.callLink ? (
                <a className="plan-call-link" href={tier.callLink.href} target="_blank" rel="noopener">
                  {tier.callLink.label}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
