import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";

type Tool = {
  src: string;
  alt: string;
};

type TextSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** Alternate light-gray background (validated: #fafafa, never a colored tint on a business-unit page) */
  alt?: boolean;
  cta?: { label: string; href: string };
  /** Tool/tech logos, rendered in the same section right below the text (not a separate section) */
  toolRows?: Tool[][];
};

export function TextSection({ eyebrow, title, paragraphs, alt, cta, toolRows }: TextSectionProps) {
  return (
    <section
      className={toolRows ? "tools" : undefined}
      style={alt ? { background: "#fafafa" } : toolRows ? { paddingTop: 96, paddingBottom: 96 } : undefined}
    >
      <Wrap>
        <div className="section-label">{eyebrow}</div>
        <h2 style={{ marginBottom: 24, maxWidth: "20ch" }}>{title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {paragraphs.map((paragraph) => (
            <p className="sub-text" key={paragraph.slice(0, 40)}>
              {paragraph}
            </p>
          ))}
        </div>
        {cta ? <SectionCta {...cta} /> : null}
        {toolRows ? (
          <div className="tools-rows" style={{ marginTop: 48 }}>
            {toolRows.map((row) => (
              <div className="tools-row" key={row.map((t) => t.alt).join("-")}>
                {row.map((tool) => (
                  <div className="tool-chip" key={tool.alt}>
                    <Image src={tool.src} alt={tool.alt} width={120} height={40} className="tool-logo" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : null}
      </Wrap>
    </section>
  );
}
