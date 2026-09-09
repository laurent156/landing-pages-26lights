import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { TrustBar } from "@/components/sections/TrustBar";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CaseResults } from "@/components/sections/CaseResults";
import { Team } from "@/components/sections/Team";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { ProcessFlowVisual } from "@/components/illustrations/ProcessFlowVisual";
import { TEAM } from "@/lib/data/team";
import { MethodFunnel } from "@/components/sections/MethodFunnel";

export const metadata: Metadata = {
  title: "Smart, Predictable Growth — 26lights",
  description:
    "Everyone needs a reliable partner with a fresh eye and who knows what they're doing. We'll help you build and improve the company of your dreams with a plan that's unique to your business.",
};

const CALL = "https://calendly.com/alicia-26lights/30min?month=2026-06";


/** "Growth plan" detail visual — an ascending KPI trajectory with milestone nodes. */
function GrowthTrajectoryVisual() {
  return (
    <div className="gp-trajectory" role="img" aria-label="An ascending growth trajectory with milestones over a KPI grid">
      <div className="gp-trajectory__glow" />
      <svg viewBox="0 0 600 480" preserveAspectRatio="xMidYMid meet">
        <g className="gp-grid">
          <line x1="40" y1="440" x2="560" y2="440" />
          <line x1="40" y1="360" x2="560" y2="360" opacity="0.5" />
          <line x1="40" y1="280" x2="560" y2="280" opacity="0.5" />
          <line x1="40" y1="200" x2="560" y2="200" opacity="0.5" />
          <line x1="40" y1="120" x2="560" y2="120" opacity="0.5" />
        </g>
        <path className="gp-ref" d="M0,310 C170,260 360,370 600,255" />
        <g className="gp-droppers">
          <line x1="200" y1="338" x2="200" y2="440" />
          <line x1="320" y1="260" x2="320" y2="440" />
          <line x1="450" y1="170" x2="450" y2="440" />
        </g>
        <path
          className="gp-line"
          pathLength={100}
          d="M40,420 C140,405 150,355 200,338 C260,318 280,290 320,260 C380,222 400,205 450,170 C505,132 520,116 560,88"
        />
        <g className="gp-nodes">
          <circle className="gp-halo" style={{ "--d": "2.2s" } as React.CSSProperties} cx={40} cy={420} r={14} />
          <circle className="gp-node" style={{ "--d": "1.0s" } as React.CSSProperties} cx={40} cy={420} r={6} />
          <circle className="gp-halo" style={{ "--d": "2.5s" } as React.CSSProperties} cx={200} cy={338} r={14} />
          <circle className="gp-node" style={{ "--d": "1.25s" } as React.CSSProperties} cx={200} cy={338} r={6} />
          <circle className="gp-halo" style={{ "--d": "2.8s" } as React.CSSProperties} cx={320} cy={260} r={14} />
          <circle className="gp-node" style={{ "--d": "1.5s" } as React.CSSProperties} cx={320} cy={260} r={6} />
          <circle className="gp-halo" style={{ "--d": "3.1s" } as React.CSSProperties} cx={450} cy={170} r={14} />
          <circle className="gp-node" style={{ "--d": "1.75s" } as React.CSSProperties} cx={450} cy={170} r={6} />
          <circle className="gp-halo" style={{ "--d": "3.4s" } as React.CSSProperties} cx={560} cy={88} r={20} />
          <circle className="gp-node gp-node--goal" style={{ "--d": "2.0s" } as React.CSSProperties} cx={560} cy={88} r={9} />
          <circle className="gp-core" style={{ "--d": "2.4s" } as React.CSSProperties} cx={560} cy={88} r={3.5} />
        </g>
      </svg>
    </div>
  );
}

const WAYS = [
  {
    lead: "01 · Growth plan",
    title: "A long-term plan that matches your ambition",
    body: "In just a few workshops, we take a deep dive into your business together to build a solid long-term growth plan that matches your ambition and resources.",
    link: { label: "Read more", href: "#growth" },
  },
  {
    lead: "02 · Business plan",
    title: "An airtight plan to raise and grow",
    body: "An airtight business plan is crucial in order to raise money and plan your business growth and success. Whether you need a new one or want to challenge the one you already have, we've got you!",
    link: { label: "Read more", href: "#business" },
  },
  {
    lead: "03 · Process mapping",
    title: "The right processes to really scale",
    body: "Whether it's for sales, marketing, customer success, product-building… implementing the right processes reshapes how your business runs day to day and lets you really scale your operations.",
    link: { label: "Read more", href: "#process" },
  },
];

export default function GrowthPlanPage() {
  return (
    <div data-unit="business">
      <main>
        <Hero
          title={
            <>
              Smart, <em>predictable</em> growth
            </>
          }
          tagline="Growth Plan. Business Plan. Process mapping."
          sub="Everyone needs a reliable partner with a fresh eye and who knows what they're doing. We'll help you build and improve the company of your dreams with a plan that's unique to your business."
          ctas={[
            { label: "Let's talk", href: CALL },
            { label: "Discover growth plan", href: "#growth", variant: "ghost" },
          ]}
          visual={<HeroFigure src="/team/homepage-team-at-work.jpg" alt="26lights team at work" />}
        />

        <TrustBar />

        <FeatureGrid
          eyebrow="Our growth services"
          statement="One partner for every part of your growth."
          sub="The journey of launching or running a business can be an incredible but challenging one. That's why having a growth partner is essential in making things more manageable. It can be difficult to find the right partner, so we made it our mission to provide a 360° approach to cover all aspects of business growth."
          columns={3}
          items={WAYS}
        />

        <DetailSplit
          id="growth"
          eyebrow="Growth plan"
          title="Growth plan"
          lead="We'll help you lay out and implement an ambitious but realistic plan as well as all the relevant KPIs. We'll be with you every step of the way."
          paragraphs={[
            "Whether you're just starting out or need to reevaluate where you are, having a clear growth plan is essential. It helps the company set clear goals, prioritize resources, and track progress towards its objectives. It also provides a roadmap for success and helps the company stay focused on its mission.",
          ]}
          visual={<GrowthTrajectoryVisual />}
          alt
          cta={{ label: "Build your growth plan", href: CALL }}
        />

        <DetailSplit
          id="business"
          eyebrow="Business plan"
          title="Business plan"
          lead="Beyond funding, a good business plan is critical to increase your chances of success and make informed decisions that support long-term growth. And we can help with that!"
          paragraphs={[
            "Maybe you're just starting out, or maybe your previous plan got punched in the mouth. Either way, we'll work with you to lay out your company's goals, strategy, and operating model. We'll also build a clear view of the target market, competition, and the resources required to bring the product or service to market.",
          ]}
          photo={{ src: "/team/business-plan-whiteboard.jpg", alt: "26lights mapping a business plan on a whiteboard" }}
          flip
          cta={{ label: "Build your business plan", href: CALL }}
        />

        <DetailSplit
          id="process"
          eyebrow="Process mapping"
          title="Process mapping"
          lead="It's hard to establish new processes when you spend your time putting out fires, and to keep a big-picture view when you never take a step back. Crucial knowledge shouldn't only reside in the founder's head."
          paragraphs={[
            "Mapping efficient business processes unlocks the untapped potential of an otherwise healthy business and makes the company less reliant on one person. It also provides a necessary and solid base for future projects.",
            "Sometimes, you just need to rewire the machine for it to work better. And we've got the best engineers!",
          ]}
          visual={<ProcessFlowVisual />}
          alt
          cta={{ label: "Map your processes", href: CALL }}
        />

        <FeatureGrid
          eyebrow="Approach"
          statement="This is what happens when you bring together a team of passionate experts who put people first and strive for success."
          cta={{ label: "Let's talk", href: CALL, strong: true }}
          items={[
            {
              title: "Co-creation",
              body: (
                <>
                  You&apos;re the expert at running your business. We are experts at building startups, organizing companies,
                  and developing amazing tech. Through years of R&amp;D with leading researchers, we&apos;ve developed
                  proprietary methodologies grounded in <b>Visual Thinking</b> to forge a collaborative future with you. We
                  believe in the power of visual representation: one picture can convey more than a thousand words. Our aim is
                  to keep you in control while making the collaboration efficient from the very first session.
                </>
              ),
            },
            {
              title: "Flexibility",
              body: "Whether you require a complete team for a new project or just a few hours of consultation, we have the internal flexibility to adjust the composition of the team to your needs. You're free to determine the workload on a monthly basis. This flexibility never compromises the retention of knowledge, because we've built an environment meant to retain talent. Our consultants can hop on and off your team without any issue.",
            },
            {
              title: "Transparency",
              body: "During our collaboration, we become your dedicated team. Transparency is crucial to building trust, which is why we ensure you have access to all relevant information and involve you in any significant decision-making process.",
            },
          ]}
        />

        <MethodFunnel />

        <CaseResults
          eyebrow="Projects"
          title="We deliver massive value to ambitious entrepreneurs who understand that surrounding themselves with the right people is the key to success."
          align="left"
          columns={2}
          alt
          items={CASE_STUDIES}
        />

        <Team
          eyebrow="Team"
          title="Meet our experts."
          sub="Their track records and expertise are just something else. They work collaboratively as a team and alongside you to unlock your business's full potential."
          members={TEAM}
          background="white"
          cta={{ label: "Let's talk", href: CALL }}
        />

        <section className="contact" id="contact" data-screen-label="Get in touch" style={{ background: "#fafafa" }}>
          <div className="wrap">
            <div className="contact-inner">
              <div className="section-label reveal">Get in touch</div>
              <h2 className="reveal">We&apos;re in the business of making a difference. Let&apos;s get started!</h2>
              <p className="sub reveal">
                Want to see what difference we can bring to your business? Tell us about it and we&apos;ll take it from there.
              </p>
              <Button href="/contact" target="_blank" rel="noopener" wide>
                Contact us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
