import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CaseResults } from "@/components/sections/CaseResults";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { GrowthArchitects } from "@/components/sections/GrowthArchitects";
import { FinalCta } from "@/components/sections/FinalCta";
import { capability } from "@/lib/data/marketing-capabilities";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";
import { HowWeWork } from "@/components/sections/HowWeWork";

export const metadata: Metadata = {
  title: "Go-To-Market Team — 26lights",
  description:
    "Test and access your market(s), with the right acquisition techniques. A tailored, testable go-to-market strategy to acquire your first customers.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

const SCENARIOS = [
  {
    company: "Lileo",
    photo: { src: "/go-to-market/case-lileo.png", alt: "Lileo landing page used to test go-to-market messaging" },
    result: "Test a GTM approach across several audiences and channels",
    tags: ["Marketing strategy", "Coaching", "Brand / sales messaging", "Landing pages"],
  },
  {
    company: "Monizze",
    photo: { src: "/go-to-market/case-monizze.jpg", alt: "Monizze payment card campaign testing market interest" },
    result: "Testing market interest for a new financial product",
    tags: ["Testing strategy", "Landing pages", "Targeted ad campaigns", "Data collection"],
  },
  {
    company: "Museum of Infinite Realities",
    photo: { src: "/go-to-market/case-moir.png", alt: "Museum of Infinite Realities local acquisition campaign" },
    result: "Build a sales powerhouse for a hidden location before launch",
    tags: ["Acquisition tactics", "Local brand experience", "Ads", "User-generated content"],
  },
  {
    company: "Penbox",
    photo: { src: "/go-to-market/case-penbox.png", alt: "Penbox lead-generation funnel built for internal teams" },
    result: "Build a lead-generation machine easily operated by internal teams",
    tags: ["Lead generation", "Cold emailing", "Sales process optimization", "Bottom-funnel content"],
  },
];

const ECO_ITEMS = [
  capability("seoSea", "SEO & SEA"),
  capability("emailAutomation", "Email marketing & automation"),
  capability("socialContent", "Social media / content strategy"),
  capability("nurturing", "Nurturing"),
  capability("performance", "Performance marketing"),
];

export default function GoToMarketPage() {
  return (
    <div data-unit="marketing">
      <main>
        <Hero
          title={
            <>
              Test and access your market(s), <br />
              <em>with the right acquisition techniques</em>
            </>
          }
          ctas={[{ label: "Let's discuss your go-to-market objectives", href: CALL }]}
          proofLogos={HERO_PROOF_LOGOS}
          wide
        />

        <FeatureGrid
          eyebrow="Our approach"
          statement="A tailored and actionable go-to-market strategy to acquire your (first) customers"
          sub="If you're launching a startup, you need to identify the right channels and messages that'll resonate with your audience. This is something you should do before you build your product so you know people are interested in what you're offering. This will both help you get started with customer acquisition and help you raise money."
          cta={{ label: "Book a 30min meeting with our experts", href: CALL, strong: true }}
          columns={3}
          items={[
            {
              lead: "01",
              title: "Aligned & Tailored Strategy",
              body: "Within a week, we review your product and objectives by mapping out your audience's journey.",
            },
            {
              lead: "02",
              title: "Testing to find the right techniques",
              body: "According to objectives, we find the right acquisition strategies to test out different approaches to reach out to your customers.",
            },
            {
              lead: "03",
              title: "Team rollout with on-demand experts",
              body: "Once tested, the best approach is devised and integrated within your roadmap, and becomes the core of your sales processes.",
            },
          ]}
        />

        <DetailSplit
          eyebrow="Phase 1"
          title="Aligned, Tailored Strategy & Plan"
          paragraphs={[
            "We start by looking in-depth in what you are building, your product/service, and what you have been already testing in order to map what market might be the most accurate and how to penetrate these market(s).",
          ]}
          photo={{ src: "/team/business-plan-whiteboard.jpg", alt: "26lights team mapping a strategy on a whiteboard" }}
          alt
          checklist={{
            label: "Key aspects we focus on",
            points: [
              "Understanding your set of products and services",
              "Mapping out your audiences and pricing",
              "Identifying key objections and opportunities",
              "Market research and benchmark analysis",
              "Acquisition strategy mapping",
              "Align on a short term roadmap",
            ],
          }}
          cta={{ label: "Book an intro meeting with our experts", href: CALL }}
        />

        <DetailSplit
          eyebrow="Phase 2"
          title="Testing to Find the Right Acquisition Techniques"
          paragraphs={[
            "If you're starting out on a new project, you need to establish the right acquisition channels and messages. This is crucial both to generate income and to get investors on board.",
          ]}
          photo={{ src: "/go-to-market/phase2-testing.jpg", alt: "Laptop showing a marketing analytics dashboard tracking campaign performance" }}
          flip
          checklist={{
            label: "Key aspects we focus on",
            points: ["Market Testing", "A/B Testing", "Ads", "Cold Emailing", "Event testing", "Webinars"],
          }}
          cta={{ label: "Contact our marketing team", href: CALL }}
        />

        <DetailSplit
          eyebrow="Phase 3"
          title="Integration Via On-Demand Expert Support"
          paragraphs={[
            "You've found what works best to reach out to your customers following the testing phase, we propose to train your team to enable full integration with your sales process.",
          ]}
          photo={{ src: "/team/across-the-board-expertise.png", alt: "Two 26lights experts reviewing an acquisition strategy together" }}
          alt
          checklist={{
            label: "Our approach includes",
            points: ["Quality review", "Campaign brainstormings", "Sales training", "Sales talking points"],
          }}
          cta={{ label: "Fix a 20min meeting with our experts", href: CALL }}
        />

        <CaseResults
          eyebrow="Use cases"
          title="A few of the markets we've helped test"
          intro="Every go-to-market is different. Here's a look at four real situations we helped clients test — from a hidden pop-up location to a brand-new financial product."
          items={SCENARIOS}
          columns={2}
          photoRatio="16/9"
        />

        <HowWeWork
          eyebrow="Your go-to-market team"
          title="How we work: From Building To Autonomy"
          intro="The endgame isn't for us to stay on your team forever. The goal is for us to help you build the ideal system and then pass ownership on to your team."
          phases={[
            {
              title: "Phase 1: Testing phase to find the right set of acquisition techniques",
              body: "We start by designing and launching your tailored go-to-market system, built around three core pillars:",
              points: [
                "Strategy: Align marketing and sales around a shared narrative and goals",
                "Test: Create and distribute the right content across the right channels",
                "Integrate: Track engagement and feed insights back to your sales team",
              ],
              note: "This phase typically lasts 6 months, depending on your existing assets and team bandwidth. We work based on a global estimated budget, adapting as needed to reach full operational capacity.",
            },
            {
              title: "Phase 2: Internal rollout supported by our experts (CMO as a service)",
              body: "Once the system is running smoothly, we shift focus to training and coaching your team. We support a designated internal lead on a recurring basis — until they're fully equipped to operate, maintain, and evolve the system independently.",
              note: "You walk away with a system that works and the ability to run it without us.",
              cta: { label: "Let's discuss your challenges", href: CALL },
            },
          ]}
        />

        <BeyondSection
          title={
            <>
              Go-To-Market and Beyond: <span>a holistic marketing and nurturing approach</span>
            </>
          }
          intro="A go-to-market plan is just the beginning. Reaching the right audience is essential, but sustained growth requires a broader marketing ecosystem. We help amplify your reach through strategic marketing tactics designed to engage, convert, and retain your audience."
          items={ECO_ITEMS}
          cta={{ label: "Let's discuss your needs", href: CALL }}
        />

        <GrowthArchitects />

        <FinalCta
          title={
            <>
              Let&apos;s talk about <em>your growth now</em>
            </>
          }
          primary={{ label: "Book a meeting with Alicia", href: CALL }}
        />
      </main>
    </div>
  );
}
