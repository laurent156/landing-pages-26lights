import { Wrap } from "@/components/ui/Wrap";

type TextSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  tinted?: boolean;
};

export function TextSection({ eyebrow, title, paragraphs, tinted }: TextSectionProps) {
  return (
    <section style={tinted ? { background: "var(--accent-tint)" } : undefined}>
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
