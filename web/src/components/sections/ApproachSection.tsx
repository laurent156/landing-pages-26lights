import type { CSSProperties } from "react";
import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";
import { revealDelay } from "@/lib/style";

type ApproachCard = {
  title: string;
  body: string;
  photo?: { src: string; alt: string };
};

type ApproachSectionProps = {
  eyebrow: string;
  statement: string;
  cards: ApproachCard[];
  alt?: boolean;
  cta?: { label: string; href: string };
};

export function ApproachSection({ eyebrow, statement, cards, alt, cta }: ApproachSectionProps) {
  const showPhotoSlot = cards.some((card) => card.photo);
  const columns = cards.length >= 4 ? 2 : cards.length;

  return (
    <section style={alt ? { background: "#fafafa" } : undefined} data-screen-label={eyebrow}>
      <Wrap>
        <div className="reveal">
          <div className="section-label">{eyebrow}</div>
          <h2 className="lead-statement" style={{ maxWidth: "60ch" }}>
            {statement}
          </h2>
          {cta ? (
            <div style={{ marginTop: 24 }}>
              <Button href={cta.href} variant="primary" target="_blank" rel="noopener">
                {cta.label}
              </Button>
            </div>
          ) : null}
        </div>
        <div className="approach-grid" style={{ "--approach-cols": columns } as CSSProperties}>
          {cards.map((card, i) => (
            <div className="appr-card reveal" style={revealDelay(i * 100)} key={card.title}>
              {showPhotoSlot ? (
                <div className={`appr-card-photo${card.photo ? "" : " is-placeholder"}`}>
                  {card.photo ? (
                    <Image src={card.photo.src} alt={card.photo.alt} fill sizes="(max-width: 900px) 90vw, 340px" />
                  ) : null}
                </div>
              ) : null}
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
