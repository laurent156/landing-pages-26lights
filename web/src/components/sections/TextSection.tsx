import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { ToolChips, type Tool } from "@/components/sections/ToolChips";
import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";
import { Button } from "@/components/ui/Button";
import { Bistre } from "@/components/ui/Bistre";
import { revealDelay } from "@/lib/style";

type Quote = {
  text: string;
  name: string;
  role: string;
  photo: { src: string; alt: string };
};

type TextSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** Alternate light-gray background (validated: #fafafa, never a colored tint on a business-unit page) */
  alt?: boolean;
  /** Dark accent-tinted gradient surface (same as Hero/FinalCta/Projects) instead of white —
   * use sparingly, to break up a long run of light sections rather than as a default. */
  bistre?: boolean;
  cta?: { label: string; href: string; strong?: boolean };
  /** Tool/tech logos, rendered in the same section right below the text (not a separate section) */
  toolRows?: Tool[][];
  /** Anchor id, for CTAs elsewhere on the page that jump straight to this section. */
  id?: string;
  /** An attributed pull-quote, rendered below the paragraphs — for a real quoted line with a
   * named, photographed source (validated on tech/erp's Arik Azoulay quote). */
  quote?: Quote;
  /** A flat checklist below the paragraphs — same styling as `DetailSplit`'s checklist, for a
   * full-width section that still wants a labeled group of short bullet points rather than a
   * two-column split (validated on customer-stories/e-maprod's six-process ERP list). */
  checklist?: { label: string; points: string[] };
};

export function TextSection({ eyebrow, title, paragraphs, alt, bistre, cta, toolRows, id, quote, checklist }: TextSectionProps) {
  const content = (
    <Wrap>
      <div className="reveal">
        <div className="section-label">{eyebrow}</div>
        <h2 style={{ marginBottom: 24, maxWidth: "20ch" }}>{title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {paragraphs.map((paragraph) => (
            <p className="sub-text" key={paragraph.slice(0, 40)}>
              {paragraph}
            </p>
          ))}
        </div>
        {checklist ? (
          <div style={{ marginTop: 24 }}>
            <h3 className="checklist-group-label">{checklist.label}</h3>
            <div className="checklist-list">
              {checklist.points.map((point) => (
                <div className="checklist-item" key={point}>
                  <CircleCheck aria-hidden="true" strokeWidth={1.8} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {cta ? (
          cta.strong ? (
            <div style={{ marginTop: 24 }}>
              <Button href={cta.href} variant="primary" target="_blank" rel="noopener">
                {cta.label}
              </Button>
            </div>
          ) : (
            <SectionCta label={cta.label} href={cta.href} />
          )
        ) : null}
        {quote ? (
          <div className="text-quote">
            <p>&ldquo;{quote.text}&rdquo;</p>
            <div className="text-quote-author">
              <Image src={quote.photo.src} alt={quote.photo.alt} width={44} height={44} />
              <div>
                <div className="text-quote-name">{quote.name}</div>
                <div className="text-quote-role">{quote.role}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {toolRows ? (
        <div className="tools-rows" style={{ marginTop: 48 }}>
          {toolRows.map((row, i) => (
            <div className="tools-row reveal" style={revealDelay(i * 80)} key={row.map((t) => t.name).join("-")}>
              <ToolChips tools={row} />
            </div>
          ))}
        </div>
      ) : null}
    </Wrap>
  );

  if (bistre) {
    return (
      <Bistre as="section" id={id} className={toolRows ? "tools" : undefined} style={toolRows ? { paddingTop: 96, paddingBottom: 96 } : undefined}>
        {content}
      </Bistre>
    );
  }

  return (
    <section
      id={id}
      className={toolRows ? "tools" : undefined}
      style={{
        ...(alt ? { background: "#fafafa" } : undefined),
        ...(toolRows ? { paddingTop: 96, paddingBottom: 96 } : undefined),
      }}
    >
      {content}
    </section>
  );
}
