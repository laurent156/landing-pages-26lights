import type { Metadata } from "next";
import { ShieldCheck, CircleCheck, Scale } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { MiniCtaBanner } from "@/components/sections/MiniCtaBanner";
import { WhyAccordion } from "@/components/sections/WhyAccordion";
import { Projects } from "@/components/sections/Projects";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { FinalCta } from "@/components/sections/FinalCta";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";

export const metadata: Metadata = {
  title: "Disaster Recovery Plan — 26lights",
  description:
    "A regularly updated Disaster Recovery Plan ensures operational continuity and minimizes disaster impact. We help you build one.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";

export default function DrpPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              Downtime doesn&apos;t have to
              <br />
              end your company.
            </>
          }
          sub="A power outage, data breach, or cyber-attack can cripple operations overnight. We build the disaster recovery plan that keeps you running — the same kind investors check before they wire the money."
          ctas={[{ label: "Book a meeting now", href: TALK }]}
          proofLogos={HERO_PROOF_LOGOS}
          wide
        />

        <FeatureGrid
          eyebrow="What is a DRP?"
          statement="Not just a measure to ensure business continuity — the ultimate peace of mind, and increasingly a condition VCs check before they invest."
          alt
          cardStyle="bistre"
          items={[
            {
              title: "Minimize Losses",
              body: "Recover swiftly from a breach, since every scenario has been envisioned prior.",
              icon: <ShieldCheck aria-hidden="true" strokeWidth={1.8} />,
            },
            {
              title: "Maintain Trust",
              body: "Keep serving customers and reassuring stakeholders even during challenging times.",
              icon: <CircleCheck aria-hidden="true" strokeWidth={1.8} />,
            },
            {
              title: "Stay Compliant",
              body: "Avoid penalties, legal issues, and protect your business ethically.",
              icon: <Scale aria-hidden="true" strokeWidth={1.8} />,
            },
          ]}
        />

        <FeatureGrid
          eyebrow="What we do — from Olivier Samyn, Technical Lead"
          statement="A DRP built in four steps."
          columns={4}
          items={[
            {
              lead: "01",
              title: "Identify Critical Assets",
              body: "We assess all the processes with business recovery in mind, taking into account every possible scenario to envision a solution that works for every single disaster scenario.",
            },
            {
              lead: "02",
              title: "Define Recovery Objectives",
              body: "We establish clear recovery time and objectives to protect what's most important while alleviating as much loss as possible, to get you back on track fast and secure.",
            },
            {
              lead: "03",
              title: "Educate Collaborators",
              body: "We ensure employees are familiar with the plan and their roles in case anything breaks down — every role and task centralized in a single source of truth.",
            },
            {
              lead: "04",
              title: "Continuous Risk Assessment",
              body: "We continuously assess risks and document lessons learned. A DRP is never final — it should always evolve with what you and we know and foresee.",
            },
          ]}
        />

        <MiniCtaBanner
          title="Every DRP starts with an audit"
          note="Defining the DRP that suits your business best starts with a complete technical audit of your infrastructure and processes."
          cta={{ label: "Let's discuss", href: TALK }}
        />

        <WhyAccordion
          eyebrow="Why us"
          title="Sure, you can handle the creation of your DRP yourself."
          intro="Here's why choosing us is the better option for your business' integrity over time."
          photo={{ src: "/team/collab-whiteboard.png", alt: "26lights working through a process map with a client" }}
          items={[
            {
              label: "External Look",
              body: "A pair of fresh (and expert) eyes will easily spot things you haven't noticed in some time — backed by our extensive knowledge of current potential disasters.",
            },
            {
              label: "No Bias",
              body: "We have nothing to lose when auditing your business. We'll be as honest as we can when spotting mistakes — that's what helps you discover what to rework.",
            },
            {
              label: "We Know Startups",
              body: "We've been helping startups with their tech challenges for years. With this extensive knowledge, we know how to dive deeper into strengthening your business against risk.",
            },
          ]}
        />

        <Projects
          eyebrow="Case studies"
          title="Check how we helped our clients face what they didn't see coming."
          items={[
            {
              company: "Cowboy",
              logo: "/logos/cowboy.png",
              meta: "Dev team reinforcement",
              result: "Scaled the dev team to launch a new product (care) and a new market (US).",
              description:
                "Cowboy needed to reinforce its core dev team to launch a new product line and enter the US market at the same time — without slowing either down.",
            },
            {
              company: "Yields.io",
              logo: "/logos/yields.png",
              meta: "MVP development · Tech lead",
              stat: { value: 5, prefix: "€", suffix: "M" },
              result: "raised, from MVP to a 35-person Series A fintech.",
              description:
                "We built the first version of the product, which enabled Yields.io to raise €1.25M from VC firms. Six years and a few rounds later, the company has 35 people and we're still working together.",
            },
            {
              company: "Sharingbox",
              logo: "/logos/sharingbox.png",
              meta: "Core business automation",
              result: "A centralized tool to manage thousands of events with hundreds of partners.",
              description:
                "We conceptualized a centralized tool that enables Sharingbox to manage thousands of events with hundreds of partners, fully automated.",
            },
          ]}
          cta={{ label: "Talk about your case", href: TALK, strong: true }}
        />

        <DetailSplit
          eyebrow="You are in control"
          title="Tracking tools and methods you won't find anywhere else."
          flip
          photo={{ src: "/team/my26-control.png", alt: "Digital presentation of 26lights' internal tool My26" }}
          paragraphs={[
            "As you already know, transparency and flexibility are priorities for us. This is why we've developed proprietary technology called My26, to allow you to follow the evolution of every project in real time and be aware of how resources are being allocated at any given moment.",
            "My26 is our investment in openness and trust, which are the building blocks of growth partnership.",
          ]}
          cta={{ label: "Discover My26", href: TALK }}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/audit", "/tech/cto", "/tech/erp"]}
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
