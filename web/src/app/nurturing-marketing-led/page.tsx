import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { CaseResults } from "@/components/sections/CaseResults";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { GrowthArchitects } from "@/components/sections/GrowthArchitects";
import { FinalCta } from "@/components/sections/FinalCta";
import { NURTURING_CASES } from "@/lib/data/nurturing-cases";
import { capability } from "@/lib/data/marketing-capabilities";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";
import { HowWeWork } from "@/components/sections/HowWeWork";

export const metadata: Metadata = {
  title: "Nurturing (Marketing-led) — 26lights",
  description:
    "Build a nurturing engine to turn traffic into trust. A structured mid-funnel system that engages prospects beyond the first visit, builds intent over time, and converts passive interest into qualified leads.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

const ECO_ITEMS = [
  capability("socialContent", "Social Media / Content Strategy"),
  capability("prospecting", "Prospecting & Outreach"),
  capability("seoSea", "SEO & SEA"),
  capability("performance", "Performance Marketing"),
];

export default function NurturingMarketingLedPage() {
  return (
    <div data-unit="marketing">
      <main>
        <Hero
          eyebrow="Nurturing and Sales support"
          title={
            <>
              Build a nurturing
              <br />
              engine to turn
              <br />
              traffic into trust.
            </>
          }
          ctas={[
            { label: "Book a meeting", href: CALL },
            { label: "Contact an expert", href: CALL, variant: "outline" },
          ]}
          visual={<HeroFigure src="/team/hero-work.png" alt="The 26lights team at work" />}
          proofLogos={HERO_PROOF_LOGOS}
        />

        <FeatureGrid
          statement="A Multi-Touchpoint Nurturing System to Drive Customer Acquisition"
          sub="Trust takes time, especially in long sales cycles. We help marketing-led teams build a repeatable, multi-channel engine designed to engage prospects beyond the first visit, build authority and intent over time, and convert passive interest into qualified leads. Ideal for B2B/B2C SaaS, PLG companies, inbound and subscription-based services, and teams with traction but no structured mid-funnel system."
          cta={{ label: "Book a 30min meeting with our experts", href: CALL, strong: true }}
          columns={3}
          screenLabel="Nurturing system"
          alt
          items={[
            {
              title: "Strategy",
              body: "We review your current marketing and sales processes to spot gaps and opportunities.",
              photo: { src: "/team/business-plan-whiteboard.jpg", alt: "26lights team reviewing a marketing process" },
            },
            {
              title: "Content Factory",
              body: "We build a multi-touch and multichannel engine aligned with your prospects' real questions and objections.",
              photo: { src: "/team/collab-whiteboard.png", alt: "26lights team mapping a content strategy on a whiteboard" },
            },
            {
              title: "Feedback Loop",
              body: "Feed prospect interactions directly back into your sales process for smarter follow-up and better timing.",
              photo: { src: "/team/across-the-board-expertise.png", alt: "Two 26lights experts reviewing engagement data together" },
            },
          ]}
        />

        <DetailSplit
          eyebrow="Marketing Strategy and Journey Mapping"
          title="Laying the right foundations for building intent"
          paragraphs={[
            "We begin by analyzing how your leads flow, from first touch to conversion. Where do they drop off? What slows them down? What questions or objections aren't being answered?",
            "Then, we structure a nurturing strategy that speaks directly to your audience's needs, doubts, and motivations and aligns with your business model, goals, and timeline.",
          ]}
          photo={{ src: "/team/business-plan-whiteboard.jpg", alt: "26lights team mapping a lead journey on a whiteboard" }}
          checklist={{
            label: "Key aspects we focus on",
            points: [
              "Understanding your acquisition model (free trial, demo request, gated content, etc.)",
              "Mapping user journeys and key inflection points",
              "Identifying content gaps and decision friction",
              "Clarifying positioning across the funnel",
              "Matching content to lead intent, with smart CRM tracking",
            ],
          }}
          cta={{ label: "Book a consultation with one of our experts", href: CALL }}
        />

        <DetailSplit
          eyebrow="Content Factory and Distribution Strategy"
          title="Creating the content that compounds"
          paragraphs={[
            "We build a structured content system designed to scale and repeat. Evergreen assets, automated sequences, and timely live touchpoints work together to guide leads through the funnel.",
            "We iterate on formats, channels, frequency, and timing until we find the combinations that drive conversion.",
          ]}
          photo={{ src: "/team/collab-whiteboard.png", alt: "26lights team building a content system together" }}
          flip
          alt
          checklist={{
            label: "Key aspects we focus on",
            points: [
              "Structured, scalable content calendar aligned with funnel stages",
              "Email sequences: onboarding, lead nurturing, post-webinar, reactivation",
              "Evergreen blog/podcast/video content tied to search and awareness",
              "LinkedIn and social media flows to stay visible",
              "Lead magnets, educational series, and webinars that deepen interest",
              "Smart reuse and distribution across channels",
            ],
          }}
          cta={{ label: "Contact our nurturing team", href: CALL }}
        />

        <DetailSplit
          eyebrow="Nurturing Insights Feedback Loop"
          title="Using insight to refine, not guess"
          paragraphs={[
            "There's no “publish and pray.” We connect your content activity to actual engagement.",
            "We track what people click, download, replay, or ignore and feed that insight back into your funnel strategy and lead scoring logic.",
          ]}
          photo={{ src: "/team/across-the-board-expertise.png", alt: "Two 26lights experts reviewing engagement insights together" }}
          checklist={{
            label: "Key aspects we focus on",
            points: [
              "Cross-channel performance tracking (email, LinkedIn, landing pages, webinars…)",
              "CRM-integrated lead scoring based on real behavior",
              "Optimized timing for follow-ups, upsells, and conversion nudges",
              "Iterative refinement based on what moves leads forward",
            ],
          }}
          cta={{ label: "Fix a 20min meeting with our experts", href: CALL }}
        />

        <DetailSplit
          eyebrow="More than content"
          title="A funnel that converts on its own terms"
          paragraphs={[
            "Nurturing is often seen as distributing content to prospects. It's more than that. It's a repeatable system that keeps you top of mind, answers objections before they're raised, and gives your team the tools and insights needed to close more deals.",
            "When nurturing is structured, your marketing efforts stop operating in isolation. Content, campaigns, automation, and data begin working together, compounding value over time instead of resetting with every new initiative.",
            "The result is a flexible, conversion-ready machine that supports everything from self-serve funnels to sales-assisted models and adapts as you grow.",
          ]}
          photo={{ src: "/team/homepage-team-at-work.jpg", alt: "The 26lights team at work" }}
          bistre
          flip
          checklist={{
            label: "We help you go from disconnected efforts to:",
            points: [
              "A clear, structured nurturing journey",
              "Content that aligns with your audience's pace and questions",
              "A CRM that scores based on real engagement",
              "A team that knows what to publish and why",
              "A system that compounds value and can evolve as you grow",
            ],
          }}
        />

        <CaseResults
          eyebrow="Use cases"
          title="Nurturing systems we've built"
          intro="Three real engagements — from activating a cold base to running a content machine across several audiences at once."
          items={NURTURING_CASES}
          columns={2}
          alt
          photoRatio="16/9"
        />

        <HowWeWork
          title="How We Work: From Building to Autonomy"
          intro="The endgame isn't for us to stay on your team forever. The goal is for us to help you build the ideal system and then pass ownership on to your team."
          phases={[
            {
              title: "Building the machine",
              body: "We start by designing and launching your tailored nurturing system, built around three core pillars:",
              points: [
                "Strategy: Align marketing and sales around a shared narrative and goals",
                "Content Factory: Create and distribute the right content across the right channels",
                "Data Feedback Loop: Track engagement and feed insights back to your sales team",
              ],
              note: "This phase typically lasts 6 months, depending on your existing assets and team bandwidth. We work based on a global estimated budget, adapting as needed to reach full operational capacity.",
            },
            {
              title: "Transfer and Autonomy",
              body: "Once the system is running smoothly, we shift focus to training and coaching your team. We support a designated internal lead on a recurring basis — until they're fully equipped to operate, maintain, and evolve the system independently.",
              note: "You walk away with a system that works and the ability to run it without us.",
              cta: { label: "Let's discuss your situation", href: CALL },
            },
          ]}
        />

        <BeyondSection
          title={
            <>
              Nurturing &amp; Beyond: <span>marketing and go-to-market approach</span>
            </>
          }
          intro="Nurturing is just the beginning. An autonomous content engine is essential, but sustained growth requires a broader marketing ecosystem. We help amplify your reach through strategic marketing tactics designed to engage, convert, and retain your audience."
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
