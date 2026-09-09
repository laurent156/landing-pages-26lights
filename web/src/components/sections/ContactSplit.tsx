"use client";

import type { FormEvent } from "react";
import { Wrap } from "@/components/ui/Wrap";

type ContactSplitProps = {
  eyebrow: string;
  title: string;
  sub: string;
  /** Add a "Company name" field between Name and Email — for a page whose real form asks for
   * it (validated on marketing/strategy-and-plan), omitted for homepage's plain 3-field form. */
  company?: boolean;
  /** #fafafa instead of white — same alternation escape hatch every other section has. */
  alt?: boolean;
};

/**
 * The homepage's real closing section: a light two-column split (copy + form), not the
 * dark full-bleed FinalCta used on offer pages. No backend endpoint exists yet for this
 * form — submission is a no-op until the team decides where leads should land (Strapi,
 * email, a form service). Ported verbatim from homepage/index.html's `.contact` section.
 */
export function ContactSplit({ eyebrow, title, sub, company, alt }: ContactSplitProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      className="contact"
      id="contact"
      data-screen-label="Get in touch"
      style={alt ? { background: "#fafafa" } : undefined}
    >
      <Wrap>
        <div className="contact-split">
          <div className="contact-left">
            <div className="section-label reveal">{eyebrow}</div>
            <h2 className="reveal">{title}</h2>
            <p className="sub reveal">{sub}</p>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" autoComplete="name" required />
            {company ? <input type="text" name="company" placeholder="Company name" autoComplete="organization" /> : null}
            <input type="email" name="email" placeholder="Email" autoComplete="email" required />
            <textarea name="message" placeholder="Message" required />
            <button type="submit" className="btn">
              Send message
            </button>
          </form>
        </div>
      </Wrap>
    </section>
  );
}
