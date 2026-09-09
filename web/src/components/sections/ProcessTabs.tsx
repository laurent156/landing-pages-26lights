"use client";

import { useState, type CSSProperties } from "react";
import { Wrap } from "@/components/ui/Wrap";

type Phase = {
  /** "01" — tabular so a row of them lines up. */
  number: string;
  /** The short tab label ("Business Analysis"). */
  label: string;
  /** The fuller sentence shown as the panel's own heading. */
  title: string;
  body: string;
  /** The page this phase is really about. Rendered as an arrow link at the foot of the panel,
   * not on the tab itself — the tab's job is to switch panels, so making it navigate would take
   * the reader off the page on what looks like a filter click. Tech Team's nine phases each name
   * a service that has its own page; without this the hub named them and linked to none. */
  href?: string;
};

type ProcessTabsProps = {
  eyebrow: string;
  title: string;
  phases: Phase[];
  /** Which phase is open before any click. Defaults to the first. */
  defaultOpenIndex?: number;
  /** #fafafa background instead of white — alternate across sections for rhythm, same convention
   * as FeatureGrid/DetailSplit. Ignored when `tint` is also passed. */
  alt?: boolean;
  /** `var(--accent-tint)` ground instead of `#fafafa` — the "working section" surface (design
   * system §30), for a tab grid dense enough that flat white cells on flat `#fafafa` read as one
   * undifferentiated field. Takes precedence over `alt`. Validated on tech-team's 3×3 grid: white
   * cells + tinted ground read as a real interactive block, not just more page. */
  tint?: boolean;
  /** Tabs per row. Defaults to one row (`phases.length`, capped at 4) — the shape validated on
   * Odoo's 4-phase process. Pass explicitly to wrap a longer list onto multiple rows (validated
   * at `columns={3}` for Tech Team's 9 capabilities, a 3×3 grid). */
  columns?: number;
};

/** A click-through phase-by-phase process — one panel visible at a time, switched by a row of
 * numbered tabs. Distinct from `WhyAccordion` (vertical, single-open, paired with a fixed photo)
 * and from a plain numbered `FeatureGrid` (every phase visible at once, no interaction): this is
 * for a real source that itself gates the detail behind tabs (validated on Odoo Implementation's
 * "Business Analysis / Solutions Panel / Building & Delivery / Support & Maintenance"). New this
 * page — promote it out of one-off status once a second real source reaches for the same shape.
 *
 * The card and panel stay light, and the active tab lifts to solid white with an accent
 * underline against its light-gray siblings. Two earlier passes tried darker active states — the
 * whole card as a `.bistre` surface, then just the active tab inverted to dark — both read worse
 * than this plain light/white contrast once actually checked in the browser. */
export function ProcessTabs({ eyebrow, title, phases, defaultOpenIndex = 0, alt, tint, columns }: ProcessTabsProps) {
  const [active, setActive] = useState(defaultOpenIndex);
  const phase = phases[active];
  const cols = columns ?? Math.min(phases.length, 4);
  const sectionStyle = tint ? { background: "var(--accent-tint)" } : alt ? { background: "#fafafa" } : undefined;

  return (
    <section data-screen-label={eyebrow} style={sectionStyle}>
      <Wrap>
        <div className="reveal" style={{ marginBottom: 40 }}>
          <div className="section-label">{eyebrow}</div>
          <h2 style={{ maxWidth: "22ch" }}>{title}</h2>
        </div>
        <div className="process-tabs reveal">
          <div className="process-tablist" role="tablist" style={{ "--process-cols": cols } as CSSProperties}>
            {phases.map((p, i) => (
              <button
                key={p.label}
                role="tab"
                aria-selected={i === active}
                className={`process-tab${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="process-tab-num">{p.number}</span>
                <span className="process-tab-label">{p.label}</span>
              </button>
            ))}
          </div>
          <div className="process-panel" key={phase.label}>
            <h3>{phase.title}</h3>
            <p>{phase.body}</p>
            {phase.href ? (
              <a href={phase.href} className="read-more">
                See the {phase.label} offer
              </a>
            ) : null}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
