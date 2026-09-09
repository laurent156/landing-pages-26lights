import type { ReactNode } from "react";
import { Wrap } from "@/components/ui/Wrap";

type BeyondItem = {
  title: string;
  /** Omit for a real source that only names the capability, with no per-item line of its own
   * (validated on marketing/strategy-and-plan's 9-item capability list). */
  body?: string;
  icon: ReactNode;
};

type BeyondSectionProps = {
  /** Omit for the two "beyond X" closers, which lead with the title alone — for a page that
   * wants this section to carry the same small category label every other section on the page
   * has (validated on marketing/strategy-and-plan). */
  eyebrow?: string;
  /** ReactNode, not string: both real pages give the closing clause its own <span>. */
  title: ReactNode;
  intro: string;
  items: BeyondItem[];
  cta: { label: string; href: string };
  /** Override the auto column guess (4, or 5 at exactly 5 items) — for a longer real list that
   * needs its own density instead of wrapping unevenly (validated on a 9-item list at 3). */
  columns?: 3 | 4 | 5;
};

/** The "beyond X: a holistic marketing approach" closer — same intro paragraph, same card
 * recipe (icon/title/body) on every page that leads into it, validated word-for-word identical
 * between `branding`'s "Beyond branding" and the live `go-to-market` page's "Go-To-Market and
 * Beyond" (which adds a 5th "Nurturing" item branding doesn't have) — hence `items` stays a
 * prop instead of a fixed list like `GrowthArchitects`. */
export function BeyondSection({ eyebrow, title, intro, items, cta, columns }: BeyondSectionProps) {
  const cols = columns ?? (items.length === 5 ? 5 : 4);
  return (
    <section className="eco" data-screen-label="Beyond">
      <Wrap>
        <div className="eco-head">
          {eyebrow ? <div className="section-label reveal">{eyebrow}</div> : null}
          <h2 className="reveal">{title}</h2>
          <p className="sub-text reveal">{intro}</p>
        </div>
        <div className={`dgrid${cols !== 4 ? ` dgrid--${cols}` : ""}`}>
          {items.map((item, i) => (
            <div className="dcard reveal" key={`${item.title}-${i}`}>
              {item.icon}
              <b>{item.title}</b>
              {item.body ? <span>{item.body}</span> : null}
            </div>
          ))}
        </div>
        <div className="eco-cta reveal">
          <a href={cta.href} target={cta.href.startsWith("http") ? "_blank" : undefined} rel={cta.href.startsWith("http") ? "noopener" : undefined} className="btn">
            {cta.label}
          </a>
        </div>
      </Wrap>
    </section>
  );
}
