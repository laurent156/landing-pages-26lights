import type { ReactNode } from "react";
import Image from "next/image";
import { Bistre } from "@/components/ui/Bistre";
import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { revealDelay } from "@/lib/style";

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type Project = {
  company: string;
  logo?: string;
  meta: string;
  stat?: Stat;
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
    <Bistre as="section" id="projects" data-screen-label="Projects">
      <Wrap style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <div className="section-label">{eyebrow}</div>
          <h2 className="lead-statement" style={{ color: "#F7F7F7", marginBottom: 40, maxWidth: "58ch" }}>
            {title}
          </h2>
        </div>
        <div className="project-grid">
          {items.map((item, i) => (
            <div className="project-card reveal" style={revealDelay(i * 80)} key={item.company}>
              {item.logo ? (
                <span className="logo-chip">
                  <Image src={item.logo} alt={item.company} width={160} height={36} />
                </span>
              ) : null}
              <div className="meta">{item.meta}</div>
              <div className="result">
                {item.stat ? (
                  <span className="stat">
                    <CountUp {...item.stat} />
                  </span>
                ) : null}{" "}
                {item.result}
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
