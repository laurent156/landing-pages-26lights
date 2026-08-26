import Image from "next/image";
import { SectionCta } from "@/components/ui/SectionCta";

type DetailSplitProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  photo?: { src: string; alt: string };
  flip?: boolean;
  cta?: { label: string; href: string };
};

export function DetailSplit({ eyebrow, title, paragraphs, photo, flip, cta }: DetailSplitProps) {
  return (
    <section className="detail detail--light" data-screen-label={eyebrow}>
      <div className={`detail-split ${flip ? "flip" : ""}`}>
        <div className={`detail-photo${photo ? "" : " is-placeholder"}`}>
          {photo ? <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 90vw, 460px" /> : null}
        </div>
        <div className="detail-content">
          <div className="detail-inner">
            <div className="section-label">{eyebrow}</div>
            <h2>{title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {paragraphs.map((paragraph) => (
                <p className="sub-text" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </p>
              ))}
            </div>
            {cta ? <SectionCta {...cta} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
