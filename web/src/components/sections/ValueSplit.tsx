import type { ReactNode } from "react";
import { revealDelay } from "@/lib/style";

type ValueItem = {
  icon: ReactNode;
  title: string;
  body: string;
};

type ValueSplitProps = {
  title: string;
  paragraph: string;
  items: ValueItem[];
};

/** A bistre section pairing an intro (h2 + paragraph) with a flat list of icon + title +
 * one-line-body items — for a "why this approach" argument made of several short, named
 * reasons rather than prose. Distinct from `ChecklistSection` (a bento grid of grouped plain-
 * text items, no per-item icon) and from `FeatureGrid cardStyle="bistre"` (full cards in a
 * grid, not a compact list). Reach for this when the real source pairs each reason with its own
 * small icon in a single-column list (validated on ai-prototyping's "why explore 10 versions").
 */
export function ValueSplit({ title, paragraph, items }: ValueSplitProps) {
  return (
    <section className="value-split" data-screen-label={title}>
      <div className="value-split-inner">
        <div className="value-split-text">
          <h2 className="reveal">{title}</h2>
          <p className="reveal">{paragraph}</p>
        </div>
        <div className="value-list">
          {items.map((item, i) => (
            <div className="value-item reveal" style={revealDelay(i * 60)} key={item.title}>
              <span className="value-icon">{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
