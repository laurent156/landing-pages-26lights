import type { Metadata } from "next";
import { Megaphone, Mail, Search, Target, MessageCircle, FileText, Link2, Handshake, Printer } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { CaseResults } from "@/components/sections/CaseResults";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProcessFlowVisual } from "@/components/illustrations/ProcessFlowVisual";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { TEAM } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Marketing Strategy & Plan — 26lights",
  description:
    "Building a product or service is only half of the job. Strategy, branding, and go-to-market — we act as your dedicated marketing team.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

const CAPABILITIES = [
  {
    title: "Social Ads",
    body: "Paid campaigns on Meta and LinkedIn to reach the right audience fast.",
    icon: <Megaphone aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Email Automation",
    body: "Nurture leads and build long-term relationships.",
    icon: <Mail aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "SEO",
    body: "Keyword strategy and on-page optimization to grow organic traffic.",
    icon: <Search aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "SEA",
    body: "Google Ads and Meta campaigns, tested and optimized for ROI.",
    icon: <Target aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Social Media Marketing",
    body: "Engage your audiences with meaningful interactions.",
    icon: <MessageCircle aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Content Strategy",
    body: "Landing pages, blog articles, and newsletters built to convert.",
    icon: <FileText aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Affiliate Programs",
    body: "Extend your reach through partners who promote you.",
    icon: <Link2 aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Partnerships",
    body: "Strategic alliances that open new distribution channels.",
    icon: <Handshake aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Print",
    body: "Physical campaigns for the moments a screen can't reach.",
    icon: <Printer aria-hidden="true" strokeWidth={1.8} />,
  },
];

export default function MarketingStrategyPlanPage() {
  return (
    <div data-unit="marketing">
      <main>
        <Hero
          eyebrow="Strategy. Branding. Go-to-market."
          title={
            <>
              Building a product
              <br />
              or service
              <br />
              is only half of the job
            </>
          }
          sub="Creating an outstanding product or service is just the beginning. Ensuring it reaches the right audience, through the right channels, at the perfect timing, and within budget is a whole different challenge."
          ctas={[{ label: "Let's talk", href: CALL }]}
          visual={<HeroFigure src="/team/business-plan-whiteboard.jpg" alt="26lights team mapping a marketing strategy on a whiteboard" />}
        />

        <TrustBar />

        <FeatureGrid
          eyebrow="Our marketing services"
          statement="There's no such thing as an overnight success. Everyone knows that by now. We have a proven track record of turning a product into a brand, and a brand into a commercial success."
          sub="From a global marketing strategy, to customer acquisition tactics, to branding, and communication, we've done it all."
          cta={{ label: "Let's talk", href: CALL }}
          alt
          columns={3}
          items={[
            {
              title: "Marketing strategy",
              body: "You likely already know who your market is, what channels make sense to you, and what messages work. But until it's all organized into a systematic strategy that you can optimize, you won't be able to scale.",
              note: "Need help figuring out your market and channels? We can do that too!",
            },
            {
              title: "Branding",
              body: "People don't bond with businesses. They bond with brands.",
              note: "Defining your identity early on to build something others can identify with is what will make a difference in the long run.",
            },
            {
              title: "Go-to-market",
              body: "If you're starting out on a new project, you need to establish the right acquisition channels and messages.",
              note: "This is crucial both to generate income and to get investors on board. But we've got you covered!",
            },
          ]}
        />

        <DetailSplit
          eyebrow="Marketing strategy"
          title="Having a solid marketing strategy is a key point of startup growth."
          paragraphs={[
            "It provides a clear direction and helps you allocate resources efficiently. A well-thought-out marketing strategy also helps you stay competitive by identifying opportunities and challenges in your market and developing a plan to address them.",
          ]}
          visual={<ProcessFlowVisual />}
          cta={{ label: "Ready to take your marketing to the next level?", href: CALL }}
        />

        <DetailSplit
          eyebrow="Branding"
          title="When people go straight to you to solve their pain point, you've achieved brand success."
          paragraphs={[
            "Brand success is the best kind because it all rides on internal assets. You don't rely on third parties and you don't have to constantly buy people's attention. They give it to you willingly.",
          ]}
          photo={{ src: "/team/collab-whiteboard.png", alt: "26lights team mapping a brand strategy on a whiteboard" }}
          flip
          alt
          checklist={{
            label: "What we deliver",
            points: [
              "Development and optimization of your website and management of your social media presence",
              "Social advertising (Meta Ads, LinkedIn Ads) to increase brand awareness",
              "Event concept building or building a personal gift strategy",
            ],
          }}
          cta={{ label: "Ready to take your marketing to the next level?", href: CALL }}
        />

        <DetailSplit
          eyebrow="Go-to-market"
          title="If you're launching a startup, you need to identify the right channels and messages that'll resonate with your audience."
          paragraphs={[
            "This is something you should do before you build your product so you know people are interested in what you're offering. This will both help you get started with customer acquisition and help you raise money. Investors will be a lot more confident financing your business knowing there's a market and that you can reach it.",
          ]}
          photo={{ src: "/team/across-the-board-expertise.png", alt: "Two 26lights experts reviewing an acquisition strategy together" }}
          checklist={{
            label: "What we deliver",
            points: [
              "SEO: Defining the keyword strategy, on-page optimization, creation of optimized content, and development of targeted landing pages",
              "SEA: Setting up Google Ads and Meta campaigns, conducting rigorous A/B testing, and continuous optimization to maximize return on investment",
              "Inbound: Automating LinkedIn/Email campaigns and sending personalized messages to reach your B2B targets",
              "Content Factory: Process to create content: landing pages, blog articles, writing of engaging posts/videos, and design of targeted newsletters",
            ],
          }}
          cta={{ label: "Ready to take your marketing to the next level?", href: CALL }}
        />

        <BeyondSection
          eyebrow="What we do"
          title="We act as your dedicated marketing team"
          intro="Managing every aspect from Social Ads and Email Automation to SEO, SEA, Social Media Marketing, Content Strategy, Affiliate Programs, Partnerships, and even Print campaigns."
          items={CAPABILITIES}
          cta={{ label: "Let's talk", href: CALL }}
          columns={3}
        />

        <FeatureGrid
          eyebrow="Approach"
          statement="This is what happens when you bring together a team of passionate experts who put people first and strive for success. Strong partnership is the key."
          cta={{ label: "Let's talk", href: CALL }}
          columns={3}
          items={[
            {
              title: "Co-creation",
              body: "You're the expert at running your business. We are experts at building startups, organizing companies, and developing amazing tech. Through years of R&D with leading researchers, we have developed proprietary methodologies grounded in Visual Thinking to forge a collaborative future with you.",
            },
            {
              title: "Flexibility",
              body: "Whether you require a complete team for the implementation of a new project or just a few hours of consultation, we have the internal flexibility to adjust the composition of the team catering to your needs. You will have the freedom to determine the workload on a monthly basis.",
            },
            {
              title: "Transparency",
              body: "During our collaboration, we will become your dedicated team. Transparency is crucial to building trust, which is why we ensure you have access to all relevant information and involve you in any significant decision-making processes.",
            },
          ]}
        />

        <CaseResults
          eyebrow="Projects"
          title="We deliver massive value to ambitious entrepreneurs who understand that surrounding themselves with the right people is the key to success."
          align="left"
          columns={2}
          items={CASE_STUDIES}
        />

        <Team
          eyebrow="Team"
          title="Meet our experts."
          sub="Their track records and expertise are just something else. They work collaboratively as a team and alongside you to unlock your business's full potential."
          members={TEAM}
          cta={{ label: "Let's talk", href: CALL }}
        />

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
