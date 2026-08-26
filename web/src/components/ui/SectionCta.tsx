type SectionCtaProps = {
  label: string;
  href: string;
};

export function SectionCta({ label, href }: SectionCtaProps) {
  return (
    <a href={href} target="_blank" rel="noopener" className="section-cta">
      {label}
    </a>
  );
}
