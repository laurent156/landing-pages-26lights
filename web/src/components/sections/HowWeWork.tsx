import type { CSSProperties } from "react";
import { CircleCheck } from "lucide-react";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";
import { revealDelay } from "@/lib/style";

type Phase = {
  title: string;
  body: string;
  /** The three pillars the first phase is built around, as a check-icon list. */
  points?: string[];
  /** A short closing line in bold under the body. */
  note?: string;
  cta?: { label: string; href: string };
};

type HowWeWorkProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  phases: [Phase, Phase];
};

/** The "from building to autonomy" pair of boxed cards: we build the system, then we hand it
 * over. Two phases, side by side, the first carrying its pillars as a checklist and the second
 * closing on a button. Existed as three near-identical bespoke sections (go-to-market and both
 * nurturing pages) — the copy differs, the shape never does. Distinct from `FeatureGrid`, which
 * has no per-card checklist or button and no caller that wants one. */
export function HowWeWork({ eyebrow, title, intro, phases }: HowWeWorkProps) {
  return (
    <section data-screen-label="How we work">
      <Wrap>
        <div className="reveal" style={{ marginBottom: 48 }}>
          {eyebrow ? <div className="section-label">{eyebrow}</div> : null}
          <h2 style={{ maxWidth: "18ch" }}>{title}</h2>
          <p className="sub-text" style={{ marginTop: 14, maxWidth: "60ch" }}>
            {intro}
          </p>
        </div>
        <div className="approach-grid approach-grid--2" style={{ "--approach-cols": 2 } as CSSProperties}>
          {phases.map((phase, i) => (
            <div className="appr-card appr-card--boxed reveal" style={revealDelay(i * 100)} key={phase.title}>
              <h3>{phase.title}</h3>
              <p>{phase.body}</p>
              {phase.points ? (
                <div className="checklist-list" style={{ marginTop: 16, marginBottom: 16 }}>
                  {phase.points.map((point) => (
                    <div className="checklist-item" key={point}>
                      <CircleCheck aria-hidden="true" strokeWidth={1.8} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              {phase.note ? <p className="appr-card-note">{phase.note}</p> : null}
              {phase.cta ? (
                <div style={{ marginTop: 20 }}>
                  <Button href={phase.cta.href} target="_blank" rel="noopener">
                    {phase.cta.label}
                  </Button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
