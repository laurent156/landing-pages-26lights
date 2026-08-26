import Image from "next/image";

type HeroFigureProps = {
  src: string;
  alt: string;
};

export function HeroFigure({ src, alt }: HeroFigureProps) {
  return (
    <div className="hero-figure">
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 90vw, 500px" />
    </div>
  );
}
