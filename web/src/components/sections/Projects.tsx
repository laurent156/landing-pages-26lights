import type { ReactNode } from "react";
import Image from "next/image";
import { Bistre } from "@/components/ui/Bistre";
import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";
import { Button } from "@/components/ui/Button";

type Project = {
  company: string;
  logo?: string;
  meta: string;
  stat?: string;
  result: ReactNode;
  description: string;
};

type ProjectsProps = {
  eyebrow: string;
  title: string;
  items: Project[];
  cta?: { label: string; href: string; strong?: boolean };
};

export function Projects({ eyebrow, title, items, cta }: ProjectsProps) {
  return (
    <Bistre as="section" data-screen-label="Projects">
      <Wrap style={{ position: "relative", zIndex: 1 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 style={{ color: "#F7F7F7", marginBottom: 40, maxWidth: "58ch" }}>{title}</h2>
        <div className="project-grid">
          {items.map((item) => (
            <div className="project-card" key={item.company}>
              {item.logo ? (
                <span className="logo-chip">
                  <Image src={item.logo} alt={item.company} width={100} height={22} />
                </span>
              ) : null}
              <div className="meta">{item.meta}</div>
              <div className="result">
                {item.stat ? <span className="stat">{item.stat}</span> : null} {item.result}
              </div>
              <h3>{item.company}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {cta ? (
          cta.strong ? (
            <div style={{ marginTop: 24 }}>
              <Button href={cta.href} variant="light" target="_blank" rel="noopener">
                {cta.label}
              </Button>
            </div>
          ) : (
            <SectionCta label={cta.label} href={cta.href} />
          )
        ) : null}
      </Wrap>
    </Bistre>
  );
}
