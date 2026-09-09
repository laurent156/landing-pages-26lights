import type { ReactNode } from "react";
import Image from "next/image";
import { Bistre } from "@/components/ui/Bistre";

type Logo = { src: string; alt: string };

type ProofLogosProps = {
  eyebrow: string;
  title: ReactNode;
  paragraph: string;
  logos: Logo[];
};

/** A dark stat/positioning statement paired with a grid of real client-logo cells — distinct
 * from `TrustBar` (a single light row under a hero) and from a bare `TextSection bistre` (no
 * logos at all). Reach for this specifically when the real source pairs a "years in business /
 * client count" claim with proof logos rather than either alone (validated on ai-production —
 * missed on the first pass because the logo grid carries no text of its own, exactly the
 * "images with no surrounding text" trap this doc already warns about). */
export function ProofLogos({ eyebrow, title, paragraph, logos }: ProofLogosProps) {
  return (
    <Bistre as="section" className="proof" data-screen-label={eyebrow}>
      <div className="proof-inner">
        <div className="proof-left">
          <div className="section-label reveal">{eyebrow}</div>
          <h2 className="reveal">{title}</h2>
          <p className="reveal">{paragraph}</p>
        </div>
        <div className="proof-logos reveal">
          {logos.map((logo) => (
            <div className="proof-cell" key={logo.alt}>
              <Image src={logo.src} alt={logo.alt} width={110} height={28} />
            </div>
          ))}
        </div>
      </div>
    </Bistre>
  );
}
