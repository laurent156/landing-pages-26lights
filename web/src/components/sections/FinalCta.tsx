import type { ReactNode } from "react";
import { Bistre } from "@/components/ui/Bistre";
import { Button } from "@/components/ui/Button";
import { Wrap } from "@/components/ui/Wrap";

type CtaLink = {
  label: string;
  href: string;
};

type FinalCtaProps = {
  title: ReactNode;
  sub: string;
  primary: CtaLink;
  contactEmail?: string;
  phone?: string;
  location?: string;
};

export function FinalCta({ title, sub, primary, contactEmail, phone, location }: FinalCtaProps) {
  return (
    <Bistre as="section" id="contact" className="final" data-screen-label="Final CTA">
      <Wrap style={{ position: "relative", zIndex: 1 }}>
        <h2>{title}</h2>
        <p>{sub}</p>
        <div className="final-ctas">
          <Button href={primary.href} target="_blank" rel="noopener">
            {primary.label}
          </Button>
        </div>
        {contactEmail || phone || location ? (
          <div className="final-contact">
            {contactEmail ? <a href={`mailto:${contactEmail}`}>{contactEmail}</a> : null}
            {phone ? <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a> : null}
            {location ? <span>{location}</span> : null}
          </div>
        ) : null}
      </Wrap>
    </Bistre>
  );
}
