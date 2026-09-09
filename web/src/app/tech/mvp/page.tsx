import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { TrustBar } from "@/components/sections/TrustBar";
import { TextSection } from "@/components/sections/TextSection";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { TECH_PROJECTS } from "@/lib/data/tech-projects";
import { TECH_TOOL_ROWS } from "@/lib/data/tech-tools";
import { RelatedPages } from "@/components/sections/RelatedPages";

export const metadata: Metadata = {
  title: "We Build Your MVP — 26lights",
  description:
    "Time is money. We help you build your Minimum Viable Product around your one killer feature and get to market fast.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";



export default function MvpPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              We create <em>successful MVP&apos;s</em>
            </>
          }
          sub="Time is money. And you don't want to waste it. If you know what problem you're solving, you don't need a thousand features to get started. We'll help you build your Minimum Viable Product and get to market asap. And if you don't know what problem you're solving, we can talk about that too."
          ctas={[
            { label: "Let's talk", href: TALK },
            { label: "See our work", href: "#projects", variant: "ghost" },
          ]}
          visual={<HeroFigure src="/team/hero-work.png" alt="26lights team at work" />}
        />

        <TrustBar />

        <DetailSplit
          eyebrow="The concept of the MVP goes straight to the point"
          title="Find your killer feature."
          paragraphs={[
            "What makes your product essential? What's the one feature that delivers the most value to your target audience? That's your killer feature — focus on it, build an MVP, and leave the rest for later.",
            "Developing countless features that no one uses is a waste of time, energy, and money.",
            "An MVP is a fully functional product. Test your killer feature in the market and start making your first sales — then keep building the rest of your app, iterating on real feedback.",
          ]}
          photo={{ src: "/team/business-plan-whiteboard.jpg", alt: "26lights mapping out an MVP scope on a whiteboard" }}
          cta={{ label: "Find your killer feature", href: TALK, strong: true }}
        />

        <DetailSplit
          eyebrow="Connected to the world"
          title="Receive users feedback and immediately come into contact with the real market!"
          flip
          alt
          paragraphs={[
            "Your audience comes before your product. So we try, we tweak, and we move forward to offer them exactly what they need.",
            "We regularly change the scope, but the mission remains unchanged.",
            "Fast iterations allow you to get to know your market better while generating revenue.",
          ]}
          photo={{ src: "/team/startup-specialists.png", alt: "26lights reviewing user feedback with a startup client" }}
          cta={{ label: "Let's talk", href: TALK, strong: true }}
        />

        <TextSection
          eyebrow="Our stack"
          title="No technology religion."
          paragraphs={[
            "Whether it's a mobile app, big data, artificial intelligence, or other technologies, we bring extensive experience and a comprehensive 360° approach to every project.",
            "We tailor our solutions to fit the unique needs, goals, and budgets of each partner.",
          ]}
          cta={{ label: "Talk about your stack", href: TALK, strong: true }}
          toolRows={TECH_TOOL_ROWS}
        />

        <Testimonials
          eyebrow="Our clients say it best"
          title="Two teams that shipped fast, on purpose."
          items={[
            {
              quote:
                "26lights came in to help develop and ship our Cowboy Care platform, our on-demand service for maintenance and tyre puncture fixes. Their engineers worked directly with our team — no overhead, fluid communication. We recommend working with them.",
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
          cta={{ label: "Talk to our team", href: TALK, strong: true }}
        />

        <Projects
          eyebrow="Projects"
          title="We deliver massive value to ambitious entrepreneurs who understand that surrounding themselves with the right people is the key to success."
          items={TECH_PROJECTS}
          cta={{ label: "Start your MVP", href: TALK, strong: true }}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/dev-team", "/ai/prototyping", "/tech/cto"]}
        />

        <FinalCta
          title={
            <>
              We&apos;re in the business of <em>making a difference.</em> Let&apos;s get started!
            </>
          }
          sub="Want to see what difference we can bring to your business? Book a consultation today."
          primary={{ label: "Book a free 30-min call", href: TALK }}
        />
      </main>
    </div>
  );
}
