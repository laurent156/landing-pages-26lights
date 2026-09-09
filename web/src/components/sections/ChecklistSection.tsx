import { CircleCheck } from "lucide-react";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";
import { SectionCta } from "@/components/ui/SectionCta";
import { revealDelay } from "@/lib/style";

type ChecklistGroup = {
  label: string;
  items: string[];
  /** Bento tile width — 2 spans wider for a group with more items. Defaults to 1. */
  span?: 1 | 2;
};

type ChecklistSectionProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  groups: ChecklistGroup[];
  alt?: boolean;
  cta?: { label: string; href: string; strong?: boolean };
};

export function ChecklistSection({ eyebrow, title, sub, groups, alt, cta }: ChecklistSectionProps) {
  return (
    <section style={alt ? { background: "#fafafa" } : undefined} data-screen-label={eyebrow}>
      <Wrap>
        <div className="reveal">
          <div className="section-label">{eyebrow}</div>
          <h2 style={{ marginBottom: sub ? 14 : cta ? 20 : 0 }}>{title}</h2>
          {sub ? (
            <p className="sub-text" style={{ marginBottom: 24, maxWidth: "56ch" }}>
              {sub}
            </p>
          ) : null}
          {cta ? (
            cta.strong ? (
              <Button
                href={cta.href}
                variant="primary"
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener" : undefined}
              >
                {cta.label}
              </Button>
            ) : (
              <SectionCta label={cta.label} href={cta.href} />
            )
          ) : null}
        </div>
        <div className="checklist-groups">
          {groups.map((group, gi) => (
            <div
              className={`checklist-group reveal${group.span === 2 ? " checklist-group--wide" : ""}`}
              style={revealDelay(gi * 80)}
              key={group.label}
            >
              <h3 className="checklist-group-label">{group.label}</h3>
              <div className="checklist-list">
                {group.items.map((item) => (
                  <div className="checklist-item" key={item}>
                    <CircleCheck aria-hidden="true" strokeWidth={1.8} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
