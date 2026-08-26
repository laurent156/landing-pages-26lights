import type { ReactNode } from "react";
import Image from "next/image";
import { Bistre } from "@/components/ui/Bistre";
import { Button } from "@/components/ui/Button";
import { Wrap } from "@/components/ui/Wrap";

type CtaLink = {
  label: string;
  href: string;
};

type Host = {
  name: string;
  role: string;
  photo: string;
};

type FinalCtaProps = {
  title: ReactNode;
  sub: string;
  primary: CtaLink;
  host?: Host;
  contactEmail?: string;
  phone?: string;
  location?: string;
};

export function FinalCta({ title, sub, primary, host, contactEmail, phone, location }: FinalCtaProps) {
  return (
    <Bistre as="section" id="contact" className="final" data-screen-label="Final CTA">
      <Wrap style={{ position: "relative", zIndex: 1 }} className="reveal">
        <h2>{title}</h2>
        <p>{sub}</p>
        {host ? (
          <div className="final-host">
            <Image src={host.photo} alt={host.name} width={48} height={48} className="final-host-avatar" />
            <div>
              <div className="final-host-name">{host.name}</div>
              <div className="final-host-role">{host.role}</div>
            </div>
          </div>
        ) : null}
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
