import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Wrap } from "@/components/ui/Wrap";
import { OFFERS } from "@/lib/data/offers";
import { revealDelay } from "@/lib/style";

type RelatedPagesProps = {
  /** Routes, in the order they should read. Each must exist in `OFFERS`. */
  paths: string[];
  /** Defaults to "Related offers". */
  eyebrow?: string;
  title?: string;
};

/** A compact exit at the foot of a service page: three sibling offers, each a real link.
 *
 * It exists because the site had exactly one internal link across 23 pages — every service page
 * was a cul-de-sac whose only ways out were the mega menu and Calendly, and the "Know more"
 * buttons that did exist pointed back at the WordPress site being replaced. Deliberately small:
 * it replaces two much bigger blocks (the repeated Approach grid and the 12-face Team grid) that
 * were making eight pages share an identical bottom third, so a page that gains this and loses
 * those gets shorter, not longer.
 *
 * Sits on `--accent-tint` unconditionally (design system §30) rather than white/`#fafafa` — this
 * is the page's own "go do the next thing" block, so it's the block the tint rule is for. No
 * page pairs this with another tinted section, so there's nothing to collide with; if that ever
 * changes, drop the tint on whichever section is less load-bearing rather than adding a prop
 * back here to opt out per page. */
export function RelatedPages({ paths, eyebrow = "Related offers", title }: RelatedPagesProps) {
  return (
    <section className="related" data-screen-label="Related offers">
      <Wrap>
        <div className="reveal" style={{ marginBottom: 28 }}>
          <div className="section-label">{eyebrow}</div>
          {title ? <h2 style={{ maxWidth: "26ch" }}>{title}</h2> : null}
        </div>
        <div className="related-grid">
          {paths.map((path, i) => {
            const offer = OFFERS[path];
            if (!offer) return null;
            return (
              <Link href={path} className="related-card reveal" style={revealDelay(i * 80)} key={path}>
                <h3>{offer.label}</h3>
                <p>{offer.blurb}</p>
                <span className="related-card-cta">
                  Learn more
                  <ArrowRight aria-hidden="true" strokeWidth={1.8} />
                </span>
              </Link>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}
