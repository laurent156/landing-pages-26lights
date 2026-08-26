import { Wrap } from "@/components/ui/Wrap";

type TextSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** Alternate light-gray background (validated: #fafafa, never a colored tint on a business-unit page) */
  alt?: boolean;
};

export function TextSection({ eyebrow, title, paragraphs, alt }: TextSectionProps) {
  return (
    <section style={alt ? { background: "#fafafa" } : undefined}>
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
      </Wrap>
    </section>
  );
}
