import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Contact — 26lights",
  description:
    "Tell us what you are building and we will tell you whether we can help. Offices in Brussels, Paris and Lausanne — or book a 30-minute call with Alicia.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

export default function ContactPage() {
  return (
    <div>
      <main>
        <Hero
          eyebrow="Contact"
          title="Tell us what you are building."
          sub="Two ways in: send the form below and we answer within a working day, or take a 30-minute slot straight in Alicia's calendar if you would rather talk it through."
          note="Offices in Brussels, Paris and Lausanne."
          ctas={[{ label: "Book a 30-min call", href: CALL }]}
          wide
        />

        <ContactSplit
          eyebrow="Send a message"
          title="Curious about the impact we can bring to your business?"
          sub="Tell us where you are and what is in the way. If we are not the right team for it, we will say so."
          company
        />

        <FinalCta
          title={
            <>
              Prefer to just <em>talk?</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
          host={{ name: "Alicia Dahan", role: "26lights Manager", photo: "/team/alicia-circle.png" }}
          contactEmail="info@26lights.com"
          phone="+32 492 66 00 89"
        />
      </main>
    </div>
  );
}
