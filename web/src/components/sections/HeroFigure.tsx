import Image from "next/image";

type HeroFigureProps = {
  src: string;
  alt: string;
  /** No border/shadow/crop — for a product screenshot or illustration that should show at its
   * natural proportions instead of being framed like a portrait photo. */
  bare?: boolean;
};

export function HeroFigure({ src, alt, bare }: HeroFigureProps) {
  return (
    <div className={`hero-figure${bare ? " hero-figure--bare" : ""}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 90vw, 500px" />
    </div>
  );
}
