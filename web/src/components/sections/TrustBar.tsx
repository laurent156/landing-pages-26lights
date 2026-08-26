import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";

type Logo = {
  src: string;
  alt: string;
};

type TrustBarProps = {
  label: string;
  logos: Logo[];
};

export function TrustBar({ label, logos }: TrustBarProps) {
  return (
    <div className="trust" data-screen-label="Trust bar">
      <Wrap>
        <div className="trust-inner">
          <span className="trust-label">{label}</span>
          <div className="trust-logos">
            {logos.map((logo) => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={30} className="trust-logo" />
            ))}
          </div>
        </div>
      </Wrap>
    </div>
  );
}
