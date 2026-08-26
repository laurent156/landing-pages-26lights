import type { ReactNode } from "react";
import Image from "next/image";
import { Bistre } from "@/components/ui/Bistre";

type Logo = {
  src: string;
  alt: string;
};

type TrustBarProps = {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  logos: Logo[];
};

export function TrustBar({ eyebrow, title, sub, logos }: TrustBarProps) {
  return (
    <Bistre as="section" className="proof" data-screen-label="Social proof">
      <div className="proof-inner">
        <div>
          <div className="section-label">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{sub}</p>
        </div>
        <div className="proof-logos">
          {logos.map((logo) => (
            <div className="proof-cell" key={logo.alt}>
              <Image src={logo.src} alt={logo.alt} width={140} height={40} style={{ height: 28, width: "auto" }} />
            </div>
          ))}
        </div>
      </div>
    </Bistre>
  );
}
