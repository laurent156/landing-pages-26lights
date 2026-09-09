type SectionCtaProps = {
  label: string;
  href: string;
};

export function SectionCta({ label, href }: SectionCtaProps) {
  const isExternal = href.startsWith("http");
  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener" : undefined} className="section-cta">
      {label}
    </a>
  );
}
