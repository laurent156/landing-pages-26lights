import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { GrowthArchitects } from "@/components/sections/GrowthArchitects";
import { FinalCta } from "@/components/sections/FinalCta";
import { capability } from "@/lib/data/marketing-capabilities";

export const metadata: Metadata = {
  title: "Video Content & Podcasting — 26lights",
  description:
    "Effortless expert video content from day 1. You show up, we handle everything else — no barriers, no expertise needed.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

const BEYOND_ITEMS = [
  capability("nurturing", "Nurturing"),
  capability("performance", "Performance Marketing"),
  capability("seoSea", "SEO & SEA"),
  capability("emailAutomation", "Email Marketing & Automation"),
  capability("socialContent", "Social Media / Content Strategy"),
];

export default function VideoCreationPage() {
  return (
    <div data-unit="marketing">
      <main>
        <Hero
          eyebrow="Video Content & Podcasting"
          title="Effortless Expert Video Content From Day 1"
          sub="Step right into a video-first world. You show up, we handle everything else — no barriers, no expertise needed."
          note="Ideal for: leaders who want to position themselves as industry experts but lack time, companies that need a steady flow of branded content, established companies entering a video-first market."
          ctas={[{ label: "Let's start creating videos!", href: CALL }]}
          wide
        />

        <FeatureGrid
          eyebrow="Why it works"
          statement="Our content ladder methodology: you start small and grow into more impactful formats."
          sub="You don't need experience — we guide you and pilot the project."
          alt
          columns={3}
          cta={{ label: "Book a call and see it in action", href: CALL, strong: true }}
          items={[
            {
              title: "Start small with simple, low-exposure videos",
              body: "Get used to the process with straightforward, face-based content. Starting with content that's easy to talk about and presents no liability gets you into a groove without the pressure of performing or overthinking every word — the easiest way to build confidence, find your voice, and turn video creation into a natural habit.",
            },
            {
              title: "We guide and edit everything",
              body: "We decide on an editorial line together, and then we take the process off your hands. After a recording we handle everything and deliver the final products, which can always be edited. The effort on your part is minimal.",
            },
            {
              title: "Your content grows with your confidence over time",
              body: "The more you speak on camera, the more confident and natural you become. You'll find it easier to articulate your thoughts, dive into more meaningful topics, and make the most of your time by creating more and higher-impact content.",
            },
          ]}
        />

        <FeatureGrid
          eyebrow="The process"
          statement="From a call to a published video, in three steps."
          columns={3}
          cta={{ label: "Get started and start posting", href: CALL }}
          items={[
            {
              lead: "01",
              title: "We call you",
              body: "We work around your schedule and set a time to record a call — your setup is prepared beforehand.",
            },
            {
              lead: "02",
              title: "We edit",
              body: "We edit the content into one or more videos based on the story you want to tell, using your brand elements to create a consistent experience across videos.",
            },
            {
              lead: "03",
              title: "You (or we) publish",
              body: "When the content is ready, all you have to do is hit \"Publish\" — and if you'd like us to handle your content calendar, we can do that too.",
            },
          ]}
        />

        <DetailSplit
          eyebrow="Tools for every use case"
          title="On-demand video creation"
          alt
          paragraphs={[
            "We define your needs, understand what you want to communicate, and transform it into a clear visual narrative. Together we co-create a storyboard that defines the entire process, so you have a clear view of the objective.",
            "Using professional tools like Adobe Premiere Pro and After Effects, we craft multiple versions so you can choose what fits best. The result is a video that's creative, precise, and perfectly aligned with your message.",
          ]}
          photo={{ src: "/team/collab-whiteboard.png", alt: "26lights team co-creating a video storyboard on a whiteboard" }}
          cta={{ label: "Let's talk", href: CALL }}
        />

        <DetailSplit
          eyebrow="Content factory"
          title="Build a content factory"
          paragraphs={[
            "With LiLiCAST, we help you industrialize content creation by building your own content factory — a system that automates the production of videos, podcasts, and visuals while keeping every piece perfectly on brand.",
            "By integrating your brand assets and workflows into the platform, we make it easy to create, adapt, and publish content at scale: a faster, more consistent, and fully customized way to generate professional content for every use case.",
          ]}
          photo={{ src: "/video-creation/lilicast-editor.png", alt: "Screenshot of LiLiCAST's video editor" }}
          photoFit="contain"
          flip
          cta={{ label: "Let's talk", href: CALL }}
          secondaryCta={{ label: "Discover LiLiCAST", href: "https://lilicast.com" }}
        />

        <FeatureGrid
          eyebrow="For business owners who want to"
          alt
          columns={3}
          items={[
            { title: "Build visibility and authority in their market" },
            { title: "Create consistent, professional content without the hassle" },
            { title: "Start small and grow into a sustainable video rhythm" },
          ]}
        />

        <BeyondSection
          title={
            <>
              Video and Beyond: <span>a holistic marketing and nurturing approach</span>
            </>
          }
          intro="Creating captivating videos is one part of a bigger system. Our 360° approach connects the dots to help you turn attention into revenue."
          items={BEYOND_ITEMS}
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
