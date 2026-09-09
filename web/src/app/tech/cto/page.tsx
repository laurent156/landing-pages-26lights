import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { TextSection } from "@/components/sections/TextSection";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { TECH_PROJECTS } from "@/lib/data/tech-projects";
import { TECH_TOOL_ROWS } from "@/lib/data/tech-tools";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";
import { RelatedPages } from "@/components/sections/RelatedPages";

export const metadata: Metadata = {
  title: "We Can Be Your CTO — 26lights",
  description:
    "Finding a CTO is tough, they're the real unicorns. We'll be your CTO-as-a-Service, without taking any equity.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";



export default function CtoPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              We will be <em>your CTO</em>
            </>
          }
          sub="Finding a CTO is tough; they're the real unicorns. On top of being technically talented, they need to be fully aligned with your vision, and be ready to take risks joining a startup. It doesn't mean you won't find them. But it doesn't mean you should wait for them to move forward with your project."
          note="(without taking equity)"
          ctas={[{ label: "Book your free consultation now!", href: "#contact" }]}
          visual={<HeroFigure src="/team/hero-work.png" alt="26lights team at work" />}
          reverse
          proofLogos={HERO_PROOF_LOGOS}
        />

        <FeatureShowcase
          eyebrow="CTO-as-a-Service"
          title="Why work with us?"
          sub="Why working with us in a CTO-as-a-Service approach is far more valuable than waiting to find the perfect fit for the hardest position to fill in the company."
          primaryCta={{ label: "Contact us now", href: "#contact" }}
          secondaryCta={{ label: "See our stack", href: "#stack" }}
          items={[
            {
              title: "Startup specialists",
              photo: { src: "/team/startup-specialists.png", alt: "26lights mapping a process with a startup client" },
              body: "Accompanying startups in their development is our specialty, from the critical early stages to the scaling up of operations. We value agility as a mindset and as a competitive advantage, and we believe happiness is one of the key success factors.",
            },
            {
              title: "Across-the-board expertise",
              photo: { src: "/team/across-the-board-expertise.png", alt: "26lights planning a marketing strategy on a whiteboard" },
              body: "A good product needs solid UX, positioning, and marketing that speaks to its audience. Working with a team of varied profiles gets you on-demand access to every skill startup success requires.",
            },
            {
              title: "Only the most talented people",
              photo: { src: "/team/only-talented-people.png", alt: "Two 26lights developers pairing on a screen" },
              body: "Our founder has led multiple companies to success, our tech leads are trailblazing PhDs. We lay solid strategic and technological foundations with senior profiles.",
            },
            {
              title: "Partnership, no ownership",
              photo: { src: "/team/partnership-no-ownership.png", alt: "Close-up of a developer working in a code editor" },
              body: "We're going to get involved in almost every conceivable way, but we won't take any equity — no strings attached, you evaluate us based on the results we bring.",
            },
          ]}
        />

        <TextSection
          id="stack"
          eyebrow="Our stack"
          title="No Technology Religion."
          alt
          paragraphs={[
            "Whatever your needs are (web, mobile, AI, database,...), we have experience and knowledge with most available technologies. Having a diverse team of senior devs allows us to cover a lot of ground.",
            "We always choose technology based on relevance to the project, and build sustainable products that satisfy every stakeholder. Our developers come from successful companies such as Amazon or Teads — they know how to build robust software, but also to ship tactical code in a hurry.",
          ]}
          cta={{ label: "Talk about your stack", href: "#contact", strong: true }}
          toolRows={TECH_TOOL_ROWS}
        />

        <DetailSplit
          eyebrow="About us"
          title="Who are we?"
          photo={{ src: "/team/collab-whiteboard.png", alt: "26lights working through a process map with a client" }}
          paragraphs={[
            "At 26lights, we believe that launching or running a company is an incredible but challenging journey. Finding good partners is one of the toughest challenges.",
            "We're a team of passionate people with skills ranging from IT (Software/App/Web Development, A.I., Devops, Architecture, UX/UI, Scrum), to business (Business Model, Business Plan, Customer Journey, Marketing strategy and execution), to management (Leadership Coaching, Recruitment Advisory, Team Dynamic, Agile Organization).",
            "Our main drive is to work on projects that excite us and that we believe in. We want to build beautiful companies we can talk about with pride.",
          ]}
          cta={{ label: "Get in touch!", href: "#contact" }}
        />

        <Projects
          eyebrow="Projects"
          title="We deliver massive value to ambitious entrepreneurs who understand that surrounding themselves with the right people is the key to success."
          items={TECH_PROJECTS}
          cta={{ label: "Start your project", href: TALK, strong: true }}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/dev-team", "/tech/audit", "/tech-team"]}
        />

        <FinalCta
          title={
            <>
              Does this resonate with you? <em>Let&apos;s have a chat!</em>
            </>
          }
          primary={{ label: "Let's Talk!", href: TALK }}
        />
      </main>
    </div>
  );
}
