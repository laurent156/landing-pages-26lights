import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";

type Logo = {
  src: string;
  alt: string;
  /** Extra class for a logo whose source mark carries a lot of internal padding and reads
   * visibly smaller than its neighbors at the same height (validated: Yields.io, Umedia). */
  className?: string;
};

type TrustBarProps = {
  /** Defaults to "Trusted by" — the wording every real client-logo strip uses. Override for a
   * bar that isn't a client trust strip at all (validated: jacqueline-c's "Background", a CV
   * strip of universities/employers rather than clients). */
  label?: string;
  /** Defaults to the canonical client set below — every real client-trust-strip page draws from
   * the same roster (validated against the live homepage's logo marquee), so a page just gets
   * `<TrustBar />` instead of retyping a hand-picked subset that quietly drifts from the real
   * one. Pass an explicit list only for a bar that genuinely isn't the client strip (again,
   * jacqueline-c's "Background"). */
  logos?: Logo[];
};

/** The real homepage's logo marquee, deduped to its 9 distinct clients — the canonical "Trusted
 * by" roster reused everywhere this bar means client trust rather than something page-specific. */
const CLIENT_LOGOS: Logo[] = [
  { src: "/logos/lizy.png", alt: "Lizy" },
  { src: "/logos/sharingbox.png", alt: "Sharingbox" },
  { src: "/logos/cowboy.png", alt: "Cowboy" },
  { src: "/logos/umedia.png", alt: "Umedia", className: "trust-logo--boost" },
  { src: "/logos/be-angels.png", alt: "beAngels" },
  { src: "/logos/yields.png", alt: "Yields.io", className: "trust-logo--boost" },
  { src: "/logos/labbox.png", alt: "LABBOX", className: "trust-logo--boost" },
  { src: "/logos/ringtwice.png", alt: "RingTwice" },
  { src: "/logos/sortlist-black.png", alt: "Sortlist" },
];

export function TrustBar({ label = "Trusted by", logos = CLIENT_LOGOS }: TrustBarProps) {
  return (
    <div className="trust reveal" data-screen-label="Trust bar">
      <Wrap>
        <div className="trust-inner">
          <span className="trust-label">{label}</span>
          <div className="trust-logos">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={30}
                className={`trust-logo${logo.className ? ` ${logo.className}` : ""}`}
              />
            ))}
          </div>
        </div>
      </Wrap>
    </div>
  );
}
