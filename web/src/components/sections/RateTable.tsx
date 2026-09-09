import type { ReactNode } from "react";
import { Wrap } from "@/components/ui/Wrap";
import { revealDelay } from "@/lib/style";

type RateRow = {
  name: string;
  desc: string;
  price: string;
  period?: string;
  cta: { label: string; href: string };
  badge?: string;
  featured?: boolean;
};

type RateTableProps = {
  title: string;
  rows: RateRow[];
  /** A closing line under the table for a case the fixed rows don't cover — e.g. "Need
   * something more tailored? Let's talk." (validated on arik-azoulay). */
  footnote?: ReactNode;
};

/** A horizontal rate list — name/description on the left, a price, and a CTA button — for a
 * consultant's hourly/package rates. Distinct from `Pricing` (three feature-checklist cards,
 * one dark "featured" card): this is a flat list of straightforward paid formats, no feature
 * comparison needed. */
export function RateTable({ title, rows, footnote }: RateTableProps) {
  return (
    <section className="pricing" id="pricing" data-screen-label="Pricing">
      <Wrap>
        <h2 className="reveal">{title}</h2>
        <div className="pricing-table">
          {rows.map((row, i) => (
            <div className={`pt-row${row.featured ? " pt-row--featured" : ""} reveal`} style={revealDelay(i * 60)} key={row.name}>
              <div>
                {row.badge ? <div className="pt-badge">{row.badge}</div> : null}
                <div className="pt-name">{row.name}</div>
                <div className="pt-desc">{row.desc}</div>
              </div>
              <div className="pt-price">
                {row.price}
                {row.period ? <span>{row.period}</span> : null}
              </div>
              <a href={row.cta.href} target="_blank" rel="noopener" className="btn">
                {row.cta.label}
              </a>
            </div>
          ))}
        </div>
        {footnote ? <p className="pricing-custom reveal">{footnote}</p> : null}
      </Wrap>
    </section>
  );
}
