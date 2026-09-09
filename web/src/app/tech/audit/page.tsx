import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MiniCtaBanner } from "@/components/sections/MiniCtaBanner";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { TECH_PROJECTS } from "@/lib/data/tech-projects";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";

export const metadata: Metadata = {
  title: "Let's Audit your Codebase — 26lights",
  description:
    "You start building, and then some more, and you never take the time to stop and make sure your code is free of liabilities. We help make sure this doesn't happen.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";

export default function TechAuditPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              Your codebase has liabilities
              <br />
              you haven&apos;t found yet.
            </>
          }
          sub="A fixed-scope audit: what's fragile, what's a security risk, what will fail investor due diligence — with a prioritised fix list any dev team can execute."
          ctas={[{ label: "Book a meeting now", href: "#contact" }]}
          proofLogos={HERO_PROOF_LOGOS}
          wide
        />

        <FeatureGrid
          alt
          eyebrow="Tech audit"
          statement="Why you should do a tech audit."
          cardStyle="boxed"
          leadPhoto={{ src: "/team/dev-team-header.png", alt: "26lights working through code" }}
          items={[
            {
              title: "Avoid waste",
              body: "The longer you work with non optimized code, the more resources you're wasting down the line. Technical debt can accumulate fast and you might find yourself in a corner before you realize it. This will impair your ability to build value-adding features and thus negatively impact your ROI.",
            },
            {
              title: "Secure your funding",
              body: "If you're planning on raising funds, the quality of your code can make or break your deal. Sure, you can try and bury it, but more often than not, it's going to blow up in your face. Which would be too bad.",
            },
          ]}
          cta={{ label: "Contact us now", href: "#contact", strong: true }}
        />

        <MiniCtaBanner
          title="Your app won't audit itself"
          note="(Be a lot cooler if it did. But it won't)"
          cta={{ label: "Contact us now", href: "#contact" }}
        />

        <FeatureGrid
          eyebrow="Why externalize"
          statement="Why externalize your app audit."
          alt
          items={[
            {
              title: "External look",
              photo: { src: "/team/collab-whiteboard.png", alt: "26lights working through a process map with a client" },
              body: "It's easy to overlook things when you've been working on the same app for a while. A fresh look from an external team will reveal the weak points in your code that might cost you down the line. Also, it can be difficult for employees to question legacy code that was initially written by a founder and is causing trouble for the app as a whole.",
            },
            {
              title: "No bias",
              photo: { src: "/team/across-the-board-expertise.png", alt: "26lights planning a marketing strategy on a whiteboard" },
              body: "Our team won't be partial to a piece of code or to a specific technology. This allows us to provide unbiased advice that'll help optimize your app.",
            },
            {
              title: "Expertise/Experience",
              photo: { src: "/team/only-talented-people.png", alt: "Two 26lights developers pairing on a screen" },
              body: "All our software engineers are experts who have either worked at top-level companies like Amazon or hold PHDs. They have worked on dozens of apps and share their respective experiences with each other in order to cover as much ground as possible.",
            },
          ]}
        />

        <ChecklistSection
          eyebrow="The audit"
          title="What do we actually do?"
          sub="A senior team going through every layer of your app — nothing left unchecked."
          groups={[
            {
              label: "Code quality",
              items: [
                "Evaluate code readability",
                "Evaluate app tests (coverage and relevance)",
                "Evaluate architecture (code structure, consistency,...)",
                "Evaluate performance",
              ],
            },
            {
              label: "Getting started",
              items: ["Evaluate app launch documentation", "Launch, compile, and deploy the app locally"],
            },
            {
              label: "Infrastructure & dependencies",
              items: [
                "Evaluate infrastructure (costs, scaling capacity, DRP, etc.)",
                "Evaluate external interdependent uses (licenses, over-reliance, etc.)",
              ],
            },
            {
              label: "Experience & compliance",
              items: ["Evaluate UX, UI, and accessibility", "Evaluate GDPR compliance"],
            },
          ]}
          cta={{ label: "Get in touch!", href: "#contact", strong: true }}
        />

        <Projects
          eyebrow="Projects"
          title="We deliver massive value to ambitious entrepreneurs who understand that surrounding themselves with the right people is the key to success."
          items={TECH_PROJECTS}
          cta={{ label: "Start your project", href: TALK, strong: true }}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/drp", "/tech/cto", "/tech/dev-team"]}
        />

        <FinalCta
          title="Book a meeting with Alicia"
          primary={{ label: "Book a meeting now", href: TALK }}
          host={{ name: "Alicia Dahan", role: "Manager", photo: "/team/alicia-circle.png" }}
        />
      </main>
    </div>
  );
}
