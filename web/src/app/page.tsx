import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { TrustBar } from "@/components/sections/TrustBar";
import { SituationRouter } from "@/components/sections/SituationRouter";
import { ServiceColumns } from "@/components/sections/ServiceColumns";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";
import { TEAM } from "@/lib/data/team";
import { TECH_PROJECTS } from "@/lib/data/tech-projects";
import { AiProductionVisual } from "@/components/illustrations/AiProductionVisual";
import { AiPrototypingVisual } from "@/components/illustrations/AiPrototypingVisual";
import { AiErpVisual } from "@/components/illustrations/AiErpVisual";
import { AiAutomationVisual } from "@/components/illustrations/AiAutomationVisual";

export const metadata: Metadata = {
  title: "26lights — We Are Growth Architects",
  description:
    "Business, tech and marketing under one roof, month to month, no equity. The outside team 200+ startups, scale-ups and SMEs bring in when the business is ready to move faster than it can hire. Brussels, Paris, Lausanne.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

export default function Home() {
  return (
    <div>
      <main>
        <Hero
          title={
            <>
              We are <em>growth architects</em>.
            </>
          }
          sub="For 14 years we have been the outside team that startups, scale-ups and ambitious SMEs bring in when the business is ready to move faster than it can hire — business, tech and marketing under one roof, month to month, no equity."
          note="200+ companies · Offices in Brussels, Paris and Lausanne."
          ctas={[
            { label: "Book a 30-min call", href: CALL },
            { label: "Find your starting point", href: "#router", variant: "ghost" },
          ]}
          visual={<HeroFigure src="/team/homepage-team-at-work.jpg" alt="26lights team at work" />}
        />

        <TrustBar />

        <SituationRouter
          id="router"
          title="Four situations. Pick yours, and we'll point you at the one page worth reading."
          sub="Most people arrive here knowing the problem, not the department it belongs to. So start from the problem."
          situations={[
            {
              title: "You have an idea, not a product yet",
              body: "Validate it, cost it, and get something real in front of users before you raise.",
              paths: ["/tech/mvp", "/ai/prototyping", "/growth-plan", "/jacqueline-c"],
            },
            {
              title: "You have a product, and growth has stalled",
              body: "Find the channel that works, then make it repeatable instead of heroic.",
              paths: [
                "/go-to-market",
                "/marketing",
                "/branding",
                "/nurturing",
                "/nurturing-marketing-led",
                "/video-creation",
              ],
            },
            {
              title: "Your tech can't keep up with the business",
              body: "Senior engineering you can start with next week, or a second opinion on what you already have.",
              paths: ["/tech/dev-team", "/tech/cto", "/tech/audit", "/tech/drp", "/ai/production"],
            },
            {
              title: "Your operations still run on spreadsheets",
              body: "Map the process first, then put a real system under it — off-the-shelf or built for you.",
              paths: ["/tech/erp", "/tech/odoo-implementation", "/ai/erp", "/ai/powered-automation"],
            },
          ]}
          experts={{
            label: "Or you need one expert, this week:",
            items: [
              {
                path: "/arik-azoulay",
                name: "Arik Azoulay",
                credential: "Business sparring · 4 companies built",
                photo: "/team/arik.png",
              },
              {
                path: "/jacqueline-c",
                name: "Jacqueline C",
                credential: "Fundraising · 30+ transactions",
                photo: "/team/jacqueline.png",
              },
              {
                path: "/malorie-dreyfus",
                name: "Malorie Dreyfus",
                credential: "Negotiation · 12+ years, high-stakes",
                photo: "/team/Malorie-Dreyfus.png",
              },
            ],
          }}
        />

        <ServiceColumns
          eyebrow="One team, three practices"
          statement="Most companies end up buying business, tech and marketing from three different suppliers, and paying for the gaps between them."
          sub="We run all three in-house, so the strategy, the product and the go-to-market are decided in the same room. You can start with one practice and pull in the others when you need them — the people already know your file."
          columns={[
            {
              unit: "Business",
              title: "The plan, the numbers, and the org behind them.",
              offers: [
                "Financial planning & modeling",
                "Human resources management",
                "Organizational design & structuring",
                "Operational excellence",
              ],
              cta: { label: "See our growth services", href: "/growth-plan" },
            },
            {
              unit: "Tech & AI",
              title: "Senior architects who ship, and stay.",
              offers: [
                "Front-end & back-end",
                "Mobile app development",
                "DevOps & infrastructure",
                "UX/UI design & experience",
                "Software integration",
              ],
              cta: { label: "See our tech team", href: "/tech-team" },
            },
            {
              unit: "Marketing & Sales",
              title: "Reach the people who need what you built.",
              offers: [
                "Web design & development",
                "Paid media & performance",
                "SEO & SEA strategy",
                "Social media management",
              ],
              cta: { label: "See our marketing services", href: "/marketing" },
            },
          ]}
        />

        <FeatureGrid
          eyebrow="Most asked for right now"
          statement="AI work that reaches production, not a demo that impresses once."
          sub="Each one starts with a fixed-scope first step, so you find out what the work is worth before committing to build it. Four ways in, each with its own page."
          bistre
          cardStyle="boxed"
          columns={4}
          screenLabel="AI"
          items={[
            {
              title: "AI app development",
              visual: <AiProductionVisual />,
              body: "You built the core with vibe coding. We add the last 20% of engineering that makes it secure, scalable and ready for real users.",
              link: { label: "See the scope", href: "/ai/production" },
            },
            {
              title: "AI prototype sprint",
              visual: <AiPrototypingVisual />,
              body: "Ten directions explored and tested with users for roughly the cost of one traditional prototype, so you stop falling in love with your first version.",
              link: { label: "See the scope", href: "/ai/prototyping" },
            },
            {
              title: "AI ERP",
              visual: <AiErpVisual />,
              body: "ERPs used to be too heavy for an SME. Built around your real workflows with AI, a simple one goes live in about two weeks.",
              link: { label: "See the scope", href: "/ai/erp" },
            },
            {
              title: "AI-powered automations",
              visual: <AiAutomationVisual />,
              body: "The recurring work your team does by hand, mapped and automated — starting with the tasks that pay for the project.",
              link: { label: "See the scope", href: "/ai/powered-automation" },
            },
          ]}
        />

        <Testimonials
          eyebrow="Our clients say it best"
          title="What our clients have to say."
          background="white"
          columns={3}
          items={[
            {
              quote:
                "26lights came in to help develop and ship our Cowboy Care platform. Their engineers worked directly with our team — no overhead, and communication was fluid. We recommend working with them!",
              name: "Tanguy Goretti",
              title: "CTO",
              company: "Cowboy",
              avatar: "/team/testi-tanguy-goretti.png",
              initials: "TG",
            },
            {
              quote:
                "26lights demonstrated the ability to model our business, optimize it, and build a platform that automated numerous recurring tasks within our team. The results were here: a 60% increase in investments in 6 years, no recruitment needed!",
              name: "Pauline Boussin",
              title: "Head of Human Business Potential",
              company: "Umedia",
              avatar: "/team/testi-pauline-boussin.png",
              initials: "PB",
            },
            {
              quote:
                "His proficiency in simplifying complex processes became a huge asset for the team. Pragmatic, hands-on, and honest about what would and would not work.",
              name: "Jonathan Shockaert",
              title: "CEO",
              company: "Ring Twice",
              avatar: "/team/testi-jonathan-shockaert.jpg",
              initials: "JS",
            },
          ]}
        />

        <Projects
          eyebrow="Client results"
          title="Success Stories"
          items={TECH_PROJECTS}
          cta={{ label: "Book a 30-min call", href: CALL, strong: true }}
        />

        <FeatureGrid
          eyebrow="How a project runs"
          statement="You're the expert in running your business. We build startups, structure organizations, and ship technology."
          alt
          columns={3}
          cta={{ label: "Book a 30-min call", href: CALL }}
          items={[
            {
              title: "Co-creation",
              photo: { src: "/team/collab-whiteboard.png", alt: "26lights working through a process map with a client" },
              body: "Years of R&D alongside leading researchers produced our own methodologies, rooted in Visual Thinking — one image communicates what words cannot. You stay in control throughout.",
            },
            {
              title: "Flexibility",
              photo: { src: "/team/across-the-board-expertise.png", alt: "Two 26lights experts planning together at a whiteboard" },
              body: "A full team for a new project or a few hours of consultation, adjusted month by month. Our consultants step in and out without the knowledge leaving with them.",
            },
            {
              title: "Transparency",
              photo: { src: "/team/my26-control.png", alt: "My26, 26lights' own project-tracking platform" },
              photoFit: "contain",
              body: "We act as your dedicated team: full access to everything relevant, and involved in every major decision.",
              note: "My26, our own platform, shows you every project's progress and how resources are allocated, in real time.",
            },
          ]}
        />

        <Team
          eyebrow="Team"
          title="Meet our experts."
          sub="Their track records and expertise are just something else. They work collaboratively as a team and alongside you to unlock your business's full potential."
          members={TEAM}
          background="white"
          cta={{ label: "Book a 30-min call", href: CALL }}
        />

        <FinalCta
          title={
            <>
              Let&apos;s talk about <em>your growth now</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
          host={{ name: "Alicia Dahan", role: "26lights Manager", photo: "/team/alicia-circle.png" }}
        />
      </main>
    </div>
  );
}
