import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { CaseResults } from "@/components/sections/CaseResults";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { GrowthArchitects } from "@/components/sections/GrowthArchitects";
import { FinalCta } from "@/components/sections/FinalCta";
import { capability } from "@/lib/data/marketing-capabilities";
import { NURTURING_CASES } from "@/lib/data/nurturing-cases";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";
import { HowWeWork } from "@/components/sections/HowWeWork";

export const metadata: Metadata = {
  title: "Nurturing (Sales-led) — 26lights",
  description:
    "Stay top of mind by building a nurturing powerhouse. A repeatable, multi-channel system to reactivate cold leads, nurture hot prospects, and help your sales team close faster.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";


const ECO_ITEMS = [
  capability("socialContent", "Social Media / Content Strategy"),
  capability("prospecting", "Prospecting & Outreach"),
  capability("seoSea", "SEO & SEA"),
  capability("performance", "Performance Marketing"),
];

export default function NurturingPage() {
  return (
    <div data-unit="marketing">
      <main>
        <Hero
          eyebrow="Nurturing and Sales support"
          title={
            <>
              Stay top of mind by
              <br />
              building a nurturing
              <br />
              powerhouse.
            </>
          }
          ctas={[
            { label: "Book a meeting", href: CALL },
            { label: "Contact an expert", href: CALL, variant: "outline" },
          ]}
          visual={<HeroFigure src="/team/only-talented-people.png" alt="Two 26lights consultants reviewing work together" />}
          proofLogos={HERO_PROOF_LOGOS}
        />

        <FeatureGrid
          statement="A Multi-Touchpoint Nurturing System to Drive Customer Acquisition"
          sub="Trust takes time, especially in long sales cycles. We help sales teams build a repeatable, multi-channel engine designed to reactivate cold leads, nurture hot prospects, and deliver actionable interaction data directly to your team so you can close deals faster."
          cta={{ label: "Let's talk about your needs", href: CALL, strong: true }}
          columns={3}
          screenLabel="Nurturing system"
          alt
          items={[
            {
              title: "Strategy",
              body: "We audit your current marketing and sales processes to uncover gaps and identify key opportunities.",
              photo: { src: "/team/business-plan-whiteboard.jpg", alt: "26lights team reviewing a marketing and sales process" },
            },
            {
              title: "Content Factory",
              body: "We deploy a tailored multi-touch campaign aligned with your prospects' real questions and objections.",
              photo: { src: "/team/collab-whiteboard.png", alt: "26lights team mapping a content strategy on a whiteboard" },
            },
            {
              title: "Feedback Loop",
              body: "We feed interaction data back into your sales process for smarter, timely follow-ups.",
              photo: { src: "/team/across-the-board-expertise.png", alt: "Two 26lights experts reviewing engagement data together" },
            },
          ]}
        />

        <DetailSplit
          eyebrow="Sales and Marketing Strategy"
          title="Laying the right foundations for relevant nurturing"
          paragraphs={[
            "We start by assessing your current sales and marketing processes. We look at what's already working, where you're losing attention, and where nurturing can tip the scales.",
            "We align your positioning, prospect journey, and sales objections to create a nurturing approach that supports conversions.",
          ]}
          photo={{ src: "/team/business-plan-whiteboard.jpg", alt: "26lights team mapping a sales and marketing strategy on a whiteboard" }}
          checklist={{
            label: "Key aspects we focus on",
            points: [
              "Understanding your sales process and timelines",
              "Mapping out your audience's decision journey",
              "Identifying key objections and opportunities to educate",
              "Aligning content channels and formats with sales stages",
              "Collaborating with your team to set priorities",
            ],
          }}
          cta={{ label: "Book a consultation with one of our experts", href: CALL }}
        />

        <DetailSplit
          eyebrow="Content Factory"
          title="Designing a tailored multi-touch content machine"
          paragraphs={[
            "We build a scalable content marketing process that mirrors your real-life conversations and reaches your prospects at the right place and at the right time.",
            "We work closely with your sales team to provide them with material that'll help them get prospects further down the pipeline.",
          ]}
          photo={{ src: "/team/collab-whiteboard.png", alt: "26lights team building a content strategy together" }}
          flip
          alt
          checklist={{
            label: "Key aspects we focus on",
            points: [
              "Regular syncs with your sales team to identify real-time needs",
              "Creation of tailored content for email, blog, podcasts, social media, webinars, and more",
              "Repurposing formats to maximize reach and content efficiency",
              "Campaigns that nurture over weeks and months, with 4 to 6 touch points per month",
              "Content delivered at the right moment in the journey",
              "Reactivating cold leads as well as nurturing hot ones",
            ],
          }}
          cta={{ label: "Contact our nurturing team", href: CALL }}
        />

        <DetailSplit
          eyebrow="Nurturing Insights Feedback Loop"
          title="Using insight to refine, not guess"
          paragraphs={[
            "We track content interactions and feed them back to your CRM and sales team in order to leverage them.",
            "Your sales team get actionable insight into which prospects are warming up, what topics resonate, and when it's the right time to reach out.",
          ]}
          photo={{ src: "/team/across-the-board-expertise.png", alt: "Two 26lights experts reviewing engagement insights together" }}
          checklist={{
            label: "Key aspects we focus on",
            points: [
              "Connecting tools to track content engagement (email, LinkedIn, webinars, etc.)",
              "Scoring leads based on real interaction",
              "Prioritizing follow-ups based on intent signals",
              "Sharing actionable insight with your sales team weekly",
              "Regular reports to follow up on recent and global operations",
            ],
          }}
          cta={{ label: "Fix a 20min meeting with our experts", href: CALL }}
        />

        <DetailSplit
          eyebrow="More than content"
          title="A system that sells even between meetings"
          paragraphs={[
            "Nurturing is often seen as creating and distributing content. It's more than that. It's a repeatable system that keeps you top of mind, answers objections before they're raised, and gives your sales team the tools and insights they need to close faster.",
          ]}
          photo={{ src: "/team/homepage-team-at-work.jpg", alt: "The 26lights team at work" }}
          bistre
          flip
          checklist={{
            label: "Our approach takes you from scattered follow-ups and cold leads to:",
            points: [
              "Warm prospects ready to engage",
              "A sales team backed by strategic content",
              "A clear view of what's working and what's not",
              "A system that compounds over time",
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
              Nurturing &amp; Beyond: <span>a holistic marketing approach</span>
            </>
          }
          intro="Nurturing is just the beginning. Staying top of mind is essential, but sustained growth requires a broader marketing ecosystem. We help amplify your reach through strategic marketing tactics designed to engage, convert, and retain your audience."
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
