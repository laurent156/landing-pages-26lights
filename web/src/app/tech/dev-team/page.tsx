import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { TrustBar } from "@/components/sections/TrustBar";
import { TextSection } from "@/components/sections/TextSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { TECH_PROJECTS } from "@/lib/data/tech-projects";
import { TECH_TOOL_ROWS } from "@/lib/data/tech-tools";
import { RelatedPages } from "@/components/sections/RelatedPages";

export const metadata: Metadata = {
  title: "We Will Be Your Dev Team — 26lights",
  description:
    "Finding devs for a startup is tough. We're your DevTeam-as-a-Service: senior, aligned with your vision, and ready to move now.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";



export default function DevTeamPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              We will be <em>your dev team</em>
            </>
          }
          sub="Finding devs for a startup is tough — they're the real unicorns. On top of being technically talented, they need to be fully aligned with your vision, and ready to take risks. That doesn't mean you won't find them. But it doesn't mean you should wait for them to move forward with your project."
          ctas={[
            { label: "Book a 30-min call", href: TALK },
            { label: "See our stack", href: "#stack", variant: "ghost" },
          ]}
          visual={<HeroFigure src="/team/dev-team-header.png" alt="The 26lights development team at work" />}
        />

        <TrustBar />

        <FeatureGrid
          alt
          eyebrow="Why work with us?"
          statement="Why a DevTeam-as-a-Service approach is far more valuable than waiting months or years for your dream team."
          sub="We're comfortable with new projects and ongoing ones — happy to reinforce your team or take over your development operations."
          items={[
            {
              title: "Startup specialists",
              photo: { src: "/team/startup-specialists.png", alt: "26lights mapping a process with a startup client" },
              body: "Accompanying startups in their development is our specialty, from the critical early stages to scaling up. We value agility as a mindset and a competitive advantage — and we believe happiness is one of the key success factors. 10 years and 100+ startups later, it's still our recipe.",
            },
            {
              title: "Only talented people",
              photo: { src: "/team/only-talented-people.png", alt: "Two 26lights developers pairing on a screen" },
              body: "We don't compromise on excellence. Our founder has led multiple companies to success, our tech leads are trailblazing PhDs. We lay solid strategic and technological foundations with senior profiles — then you hire the juniors who grow with your company.",
            },
            {
              title: "Across-the-board expertise",
              photo: { src: "/team/across-the-board-expertise.png", alt: "26lights planning a marketing strategy on a whiteboard" },
              body: "A good product needs solid UX, positioning, and marketing, not just development. Working with a team of varied profiles gets you on-demand access to every skill startup success requires — every step covered, on your terms.",
            },
            {
              title: "Partnership, no ownership",
              photo: { src: "/team/partnership-no-ownership.png", alt: "Close-up of a developer working in a code editor" },
              body: "We don't want your company. We're going to get involved in almost every conceivable way, but we won't take any equity. This gives you total freedom in reassessing the relationship as time goes on — no strings attached, you evaluate us based on the results we bring. Success takes time, but it usually speaks for itself.",
            },
          ]}
          cta={{ label: "See our approach in action", href: TALK, strong: true }}
        />

        <TextSection
          id="stack"
          eyebrow="Our stack"
          title="No technology religion."
          paragraphs={[
            "Whatever your needs are — web, mobile, AI, database — we have experience and knowledge with most available technologies. Having a diverse team of senior devs allows us to cover a lot of ground.",
            "We always choose technology based on relevance to the project, and build sustainable products that satisfy every stakeholder. Our developers come from successful companies such as Amazon or Teads — they know how to build robust software, but also to ship tactical code in a hurry.",
          ]}
          cta={{ label: "Talk about your stack", href: TALK, strong: true }}
          toolRows={TECH_TOOL_ROWS}
        />

        <Projects
          eyebrow="Projects"
          title="We deliver massive value to ambitious entrepreneurs who understand that surrounding themselves with the right people is the key to success."
          items={TECH_PROJECTS}
          cta={{ label: "Start your project", href: TALK, strong: true }}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/cto", "/tech/mvp", "/tech/audit"]}
        />

        <FinalCta
          title="Who are we?"
          sub="At 26lights, we believe that launching or running a company is an incredible but challenging journey — finding good partners is one of the toughest challenges. We're a team of passionate people with skills ranging from IT to business to management. Our main drive is to work on projects that excite us and that we believe in. Does this resonate with you? If so, let's have a chat!"
          primary={{ label: "Get in touch!", href: TALK }}
          host={{ name: "Alicia Dahan", role: "26lights Manager", photo: "/team/alicia-circle.png" }}
        />
      </main>
    </div>
  );
}
