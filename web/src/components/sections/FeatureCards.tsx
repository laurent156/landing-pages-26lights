import type { ReactNode } from "react";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";
import { revealDelay } from "@/lib/style";

type FeatureCard = {
  title: string;
  body: string;
  /** The card's illustration — a page-local SVG component. It sits above the copy, full-bleed,
   * and is expected to carry its own `.feat-visual` wrapper, as every existing one does. */
  visual?: ReactNode;
  /** A small icon chip instead of a full-bleed illustration, for a denser card. Reuses the
   * `.value-icon` chip ValueSplit already uses, rather than inventing a third icon treatment. */
  icon?: ReactNode;
};

type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

type FeatureCardsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  sub: string;
  items: FeatureCard[];
  ctas?: CtaLink[];
  /** Surface. "dark" is the shared hero glow — for a section that should read as a break rather
   * than a step in the light/grey alternation. */
  tone?: "white" | "dark";
  /** How many cards sit side by side. Four is the icon-card density: at that width an
   * illustration band has no room, so pass `icon` on the items rather than `visual`. */
  columns?: 3 | 4;
  /** QA screenshot label. Defaults to the eyebrow, but all four existing pages label this
   * section by what it *does* ("What we can do") rather than by its eyebrow ("Pragmatic AI"),
   * so they pass it explicitly. */
  screenLabel?: string;
};

/** The offer's capabilities as a row of bordered cards, each led by its own illustration —
 * the section that carries the core content on every AI page.
 *
 * This markup lived four times, hand-copied across ai/erp, ai/powered-automation, ai/production
 * and ai/prototyping with byte-identical classes. Extracting it changed no pixel; the point is
 * that the next edit happens once instead of four times, and the fifth page cannot drift.
 * The dark, icon-card variant on ai/powered-automation ("The value shift") was the fifth copy,
 * left behind by that first pass — it is folded in now via `tone="dark"` and `columns={4}`.
 */
export function FeatureCards({ id, eyebrow, title, sub, items, ctas, screenLabel, tone, columns }: FeatureCardsProps) {
  const cols = columns ?? 3;
  return (
    <section
      className={`features${tone === "dark" ? " features--dark" : ""}`}
      id={id}
      data-screen-label={screenLabel ?? eyebrow}
    >
      <Wrap>
        <div className="features-head">
          <div className="section-label reveal">{eyebrow}</div>
          <h2 className="reveal">{title}</h2>
          <p className="sub-text reveal">{sub}</p>
        </div>
        <div className={`feat-grid${cols === 4 ? " feat-grid--4" : ""}`}>
          {items.map((item, i) => (
            <div className="feat reveal" style={revealDelay(i * 80)} key={item.title}>
              {item.visual}
              <div className="feat-body">
                {item.icon ? <span className="value-icon">{item.icon}</span> : null}
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        {ctas?.length ? (
          <div
            className="hero-ctas reveal"
            style={{ ...revealDelay(items.length * 80), marginTop: 44, justifyContent: "center" }}
          >
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
        ) : null}
      </Wrap>
    </section>
  );
}
