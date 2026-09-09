import Image from "next/image";
import Link from "next/link";
import { Wrap } from "@/components/ui/Wrap";
import { revealDelay } from "@/lib/style";

export type CaseItem = {
  /** Omit for a card with no numeric/anonymized meta line — a real screenshot card identified
   * by its own headline instead (validated on go-to-market). */
  meta?: string;
  /** Omit when `result` is a headline on its own rather than a value with a stat prefix. */
  stat?: string;
  result?: string;
  body?: string;
  /** Real client logo + name — for a page whose case grid identifies the company (validated on
   * growth-plan), as opposed to an anonymized "Grand groupe · ..." meta line (malorie-dreyfus). */
  logo?: { src: string; alt: string };
  company?: string;
  /** A real product/site screenshot at the top of the card — for a case that's illustrated by
   * what it looks like rather than a number (validated on go-to-market's 4 client previews). */
  photo?: { src: string; alt: string };
  /** Short tactic/tag chips instead of (or alongside) `body` — for a case whose point is which
   * techniques were used, not a written summary (validated on go-to-market). */
  tags?: string[];
  /** Makes the whole card a link to a real case-study writeup, with a "Read story" arrow-link at
   * the foot — for a hub page whose cases are teasers into their own detail page, rather than
   * the full result already told in the card (validated on customer-stories). */
  href?: string;
};

type CaseResultsProps = {
  /** Anchor target, for a page whose hero CTA links down to the cases. */
  id?: string;
  /** Omit both for a grid with no header of its own — following straight on from the section
   * above (validated on go-to-market, whose real source gives this grid no heading). */
  eyebrow?: string;
  title?: string;
  /** A short intro sentence under the title — for a grid that needs a line of context before
   * the cards rather than the title standing alone (validated on go-to-market). */
  intro?: string;
  items: CaseItem[];
  /** 3 (default, validated on malorie-dreyfus) or 2 (validated on growth-plan's 4-card grid). */
  columns?: 2 | 3;
  /** "center" (default, validated on malorie-dreyfus) or "left" (validated on growth-plan). */
  align?: "center" | "left";
  /** Light surface instead of the dark gradient — for a page that would otherwise stack two
   * dark sections back to back (validated on go-to-market, which sits right under the hero). */
  alt?: boolean;
  /** The photo frame's aspect ratio. Default (~4.5:1 on desktop, via a fixed height rather than
   * a true ratio) suits a product/site screenshot, where the point is legibility, not the crop.
   * "16/9" is a real `aspect-ratio` — a standard widescreen banner — for cards illustrated by
   * real photography instead (validated on customer-stories' team/event photos), where a
   * consistent crop across breakpoints matters more than showing as much of the shot as
   * possible. Applies to every `photo` card in this grid. */
  photoRatio?: "default" | "16/9";
};

/** A card grid for real case studies/results. Distinct from `Projects` (bistre, expects a client
 * logo and a count-up stat) and from `ProofLogos` (a claim paired with a logo wall): this is for
 * a page's own client cases, either a stat-led result (`stat`/`result`/`body`, optionally naming
 * the company via `logo`/`company`) or a screenshot-led scenario (`photo`/`result` as headline/
 * `tags`) — same card and grid, two ways to fill it depending on what the real source gives. */
export function CaseResults({
  id,
  eyebrow,
  title,
  intro,
  items,
  columns = 3,
  align = "center",
  alt,
  photoRatio = "default",
}: CaseResultsProps) {
  return (
    <section id={id} className={`cases${alt ? " cases--alt" : ""}`} data-screen-label="Case studies">
      <Wrap>
        {eyebrow || title ? (
          <div className={`cases-header reveal${align === "left" ? " cases-header--left" : ""}`}>
            {eyebrow ? <p className="cases-eyebrow">{eyebrow}</p> : null}
            {title ? (
              <h2 className="cases-title" style={intro ? { marginBottom: 14 } : undefined}>
                {title}
              </h2>
            ) : null}
            {intro ? <p className="cases-intro">{intro}</p> : null}
          </div>
        ) : null}
        <div className={`cases-grid${columns === 2 ? " cases-grid--2" : ""}`}>
          {items.map((item, i) => {
            const key = item.meta ?? item.result ?? i;
            const className = `case-card reveal${item.href ? " case-card--link" : ""}`;
            const style = revealDelay(i * 80);
            const content = (
              <>
                {item.photo ? (
                  <div className={`case-shot${photoRatio === "16/9" ? " case-shot--wide" : ""}`}>
                    <Image src={item.photo.src} alt={item.photo.alt} fill sizes="(max-width: 900px) 90vw, 500px" />
                  </div>
                ) : null}
                {item.logo ? (
                  <div className="case-logo">
                    <span className="logo-chip">
                      <Image src={item.logo.src} alt={item.logo.alt} width={110} height={22} />
                    </span>
                  </div>
                ) : null}
                {item.meta ? <div className="case-meta">{item.meta}</div> : null}
                {item.result ? (
                  <div className="case-result">
                    {item.stat ? <span className="case-stat">{item.stat}</span> : null}
                    {item.result}
                  </div>
                ) : null}
                {item.company ? <p className="case-company">{item.company}</p> : null}
                {item.body ? <p className="case-body">{item.body}</p> : null}
                {item.tags ? (
                  <div className="case-tags">
                    {item.tags.map((tag) => (
                      <span className="case-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                {item.href ? <span className="read-more case-read-more">Read story</span> : null}
              </>
            );
            if (item.href?.startsWith("http")) {
              return (
                <a className={className} style={style} key={key} href={item.href} target="_blank" rel="noopener">
                  {content}
                </a>
              );
            }
            if (item.href) {
              return (
                <Link className={className} style={style} key={key} href={item.href}>
                  {content}
                </Link>
              );
            }
            return (
              <div className={className} style={style} key={key}>
                {content}
              </div>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}
