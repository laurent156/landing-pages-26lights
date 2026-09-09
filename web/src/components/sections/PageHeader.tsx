import type { ReactNode } from "react";
import { Bistre } from "@/components/ui/Bistre";
import { Button } from "@/components/ui/Button";
import { Wrap } from "@/components/ui/Wrap";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  /** A single soft ask, e.g. an anchor down to the page's own content — not a sales CTA. Omit
   * for a page with nothing to point at yet. */
  cta?: { label: string; href: string };
};

/** The compact opener for a utility page — a hub, an index, a legal page — that has a title and
 * a line of context to give, and nothing else to sell in the first screen.
 *
 * `Hero` is `calc((100vh - 107px) * 0.85)` tall because it is built to carry an offer: badges, a
 * value-prop headline, a CTA row, sometimes a visual or a proof-logo bar — a real "why us, why
 * now" moment worth a near-full screen. A page like Customer Stories has none of that; it just
 * needs to say what the page is. Reusing `Hero` there rendered a mostly-empty dark screen above
 * the real content. `PageHeader` wears the same dark glow (via `Bistre`, so the recipe is
 * declared once) but at title-bar height: no min-height, no grid, no visual/badges/proofLogos
 * slot, at most one soft CTA. Reach for `Hero` the moment the page has an actual offer to lead
 * with; reach for this when it doesn't. */
export function PageHeader({ eyebrow, title, sub, cta }: PageHeaderProps) {
  return (
    <Bistre as="section" className="page-header" data-screen-label="Header">
      <Wrap>
        <div className="page-header-inner reveal">
          {eyebrow ? <div className="section-label">{eyebrow}</div> : null}
          <h1 className="page-header-title">{title}</h1>
          {sub ? <p className="page-header-sub">{sub}</p> : null}
          {cta ? (
            <div className="page-header-cta">
              <Button href={cta.href} variant="ghost">
                {cta.label}
              </Button>
            </div>
          ) : null}
        </div>
      </Wrap>
    </Bistre>
  );
}
