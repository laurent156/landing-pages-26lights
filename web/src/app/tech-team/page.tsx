import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProcessTabs } from "@/components/sections/ProcessTabs";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { TextSection } from "@/components/sections/TextSection";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";
import { TEAM } from "@/lib/data/team";
import { TECH_TOOLS } from "@/lib/data/tech-tools";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";

export const metadata: Metadata = {
  title: "Tech & AI — 26lights",
  description:
    "Experienced tech architects, ready to help. Beyond just coding, our tech architects can be your strategic partners in success.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";


export default function TechTeamPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              Experienced tech architects,
              <br />
              ready to help.
            </>
          }
          sub="Beyond just coding, our tech architects can be your strategic partners in success."
          ctas={[{ label: "Discover how we can be your CTO", href: "/tech/cto" }]}
          proofLogos={HERO_PROOF_LOGOS}
          wide
        />

        <ProcessTabs
          eyebrow="What we do"
          tint
          columns={3}
          title="Our technical team is very stable. Our lead developers have been here since our very beginning."
          phases={[
            {
              number: "01",
              label: "B-Team",
              href: "/tech/dev-team",
              title: "Are you missing an integration, an internal tool, or a feature your team can't handle right now?",
              body: "No matter how many developers you have, there's always an extra project that needs doing, or that you keep putting off. Our team can join yours to work on a specific project and accelerate the development of crucial features.",
            },
            {
              number: "02",
              label: "Tech Audit",
              href: "/tech/audit",
              title: "It's easy to get caught up in the Build Trap.",
              body: "There's always waste in your code. The longer you do nothing about it, the harsher it'll feel once it breaks your business. We provide an external look — a pair of fresh eyes to review your codebase, unbiased about any specific language or technology.",
            },
            {
              number: "03",
              label: "Security Audit",
              href: "/tech/audit",
              title: "The more your company grows, the more you stand to lose.",
              body: "To be fair, it's not just about you, but also your users and their data. With an external look at your code, no bias is involved. Proactive measures are the bedrock of a strong growth — security is no joke.",
            },
            {
              number: "04",
              label: "DRP",
              href: "/tech/drp",
              title: "In today's cloud-centric world, preparation and backups are paramount.",
              body: "A strong Disaster Recovery plan is mandatory to keep your business afloat at all times. We make sure that downtime never happens.",
            },
            {
              number: "05",
              label: "Tech Leading",
              href: "/tech/cto",
              title: "We shoulder your development team to deliver on your business plan.",
              body: "From shaping architecture to enhancing code quality, our leadership guides your tech journey to success. We can also train your next A player, be it a CTO or a front/back/fullstack developer.",
            },
            {
              number: "06",
              label: "ERP",
              href: "/tech/erp",
              title: "Using Excel as your business copilot works for early stage, but it is not a scalable solution.",
              body: "We know how to turn your information system into a powerful engine driving your business to new heights of success.",
            },
            {
              number: "07",
              label: "DevOps",
              title: "We work hand in hand, integrating seamlessly and strengthening deployment strategies.",
              body: "Imagine your code evolving into powerful, scalable solutions at the speed of innovation. We want to build a future where your tech goals match your purpose.",
            },
            {
              number: "08",
              label: "MVP",
              href: "/tech/mvp",
              title: "Product development should always start with a Minimum Viable Product.",
              body: "We focus on the pain point we want to solve, identify the best way to do it, and build just that — collecting valuable data fast, and putting you in a comfortable position when it comes to raising money.",
            },
            {
              number: "09",
              label: "UX/UI",
              title: "More than building strong and scalable codebases, we know how to design delightful interfaces.",
              body: "We're user centric from the first line of code to the last component of the app — blending form and function into experiences that make sense for your business.",
            },
          ]}
        />

        <DetailSplit
          eyebrow="We're a team of experts"
          title="Ready to help, anytime."
          photo={{ src: "/team/only-talented-people.png", alt: "Two 26lights tech architects pairing on a screen" }}
          paragraphs={[
            "We don't compromise when it comes to excellence and quality. This is why our team is only comprised of high-level talents.",
            "Our architects either hold a PhD in cybersecurity and artificial intelligence, or come from big companies (Amazon, Teads) or engineered for BNP Paribas Fortis' trading floor.",
          ]}
        />

        <DetailSplit
          eyebrow="We're startup specialists"
          title="15+ years with startups, scaleups and SMEs."
          flip
          alt
          photo={{ src: "/team/startup-specialists.png", alt: "26lights mapping a process with a startup client" }}
          paragraphs={[
            "With 15+ years of experience with startups, scaleups and SMEs, our architects know what's going on in the ecosystem — from the critical early stages of your project to its scale-up.",
            "We value agility as a mindset, and a competitive advantage.",
          ]}
        />

        <TextSection
          eyebrow="Our stack"
          title="#NoTechReligion"
          paragraphs={[
            "Whatever your needs are (web, mobile, AI, database…) we have experience and knowledge with most available technologies. Having a diverse team of senior devs allows us to cover a lot of ground.",
            "We always choose technology based on relevance to the project. We build sustainable products that satisfy every stakeholder.",
            "From a low-code solution (Bubble, Odoo, Monday), to a complete custom application, our team not only knows how to create anything you want but also define which tool will best fit your project.",
          ]}
          toolRows={[TECH_TOOLS.slice(0, 8), TECH_TOOLS.slice(8)]}
        />

        <Projects
          eyebrow="We helped these companies"
          title="Discover how we helped businesses like yours take their tech architecture to the next level."
          items={[
            {
              company: "Sharingbox",
              logo: "/logos/sharingbox.png",
              meta: "Core business automation",
              stat: { value: 6, suffix: "×" },
              result: "MRR in 2 years, without recruiting",
              description:
                "Sharingbox was growing fast, but they lacked internal processes — juggling between Excel sheets took 70% of their time. Thanks to a comprehensive information system, they doubled their efficiency and envisioned a very successful exit strategy.",
            },
            {
              company: "Corset Daum",
              logo: "/logos/corset-daum.jpg",
              meta: "Custom ERP · Low-code on Monday",
              stat: { value: 3, suffix: "×" },
              result: "MRR in 3 years, 80% of tasks automated",
              description:
                "Corset Daum came to us when their main medical ERP tool shut down its services. With a custom ERP built on top of Monday, 80% of their tasks are now automated.",
            },
          ]}
          cta={{ label: "Talk about your case", href: TALK, strong: true }}
        />

        <Testimonials
          eyebrow="Our clients say it best"
          title="What our clients have to say."
          background="white"
          items={[
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
                "26lights came in to help develop and ship our Cowboy Care platform. Their engineers worked directly with our team — no overhead, and communication was fluid. We recommend working with them!",
              name: "Tanguy Goretti",
              title: "CTO",
              company: "Cowboy",
              avatar: "/team/testi-tanguy-goretti.png",
              initials: "TG",
            },
            {
              quote:
                "We brought 26lights in to do a full audit of our two applications and set up a new workflow that fits our internal team better. We loved their flexibility and solution-oriented mindset. Would work with them again!",
              name: "Simon Detienne",
              title: "Product Lead",
              company: "Koalect",
              avatar: "/team/testi-simon-detienne.png",
              initials: "SD",
            },
          ]}
          columns={3}
        />

        <DetailSplit
          eyebrow="You are in control"
          title="Tracking tools you won't find anywhere else."
          flip
          alt
          photo={{ src: "/team/my26-control.png", alt: "Digital presentation of 26lights' internal tool My26" }}
          paragraphs={[
            "We've developed proprietary technology to allow you to follow the evolution of every project in real time and be aware of how resources are being allocated at any given moment.",
            "My26 is our investment in openness and trust, which we believe are the building blocks of growth partnership.",
          ]}
          cta={{ label: "Discover My26", href: TALK }}
        />

        <FeatureGrid
          eyebrow="Approach"
          statement="You're the expert in running your business. We specialize in building startups, structuring organizations, and creating cutting-edge technology."
          items={[
            {
              title: "Co-creation",
              body: "Through years of R&D alongside leading researchers, we've developed proprietary methodologies rooted in Visual Thinking — one image communicates what words cannot.",
            },
            {
              title: "Flexibility",
              body: "Whether you need a full team or just a few hours of consultation, we tailor our team composition to your needs — adjust the workload monthly, without losing knowledge retention.",
            },
            {
              title: "Transparency",
              body: "We act as your dedicated team — full access to all relevant information, and actively involved in every major decision.",
            },
          ]}
        />

        <Team
          eyebrow="Team"
          title="Meet our experts."
          sub="Their track records and expertise are just something else. They work collaboratively as a team and alongside you to unlock your business's full potential."
          members={TEAM}
          cta={{ label: "Let's meet", href: TALK }}
        />

        <FinalCta title="Let's shape your tech team." primary={{ label: "Let's Talk!", href: TALK }} />
      </main>
    </div>
  );
}
