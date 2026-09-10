import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { TextSection } from "@/components/sections/TextSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Evoluno — Customer Story — 26lights",
  description: "How strategic coaching, sales coaching, a nurturing framework, and a website redesign guided a mental-health-at-work company toward sustainable growth.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

export default function EvolunoStoryPage() {
  return (
    <div>
      <main>
        <PageHeader
          eyebrow="Customer story"
          title="Evoluno"
          sub="Process Optimization / Web Design / Sales Coaching / Growth Plan — guiding Evoluno toward sustainable growth."
        />

        <DetailSplit
          eyebrow="The Challenge"
          title="A mental-health partner still finding its shape"
          paragraphs={[
            "Evoluno specializes in mental health in the workplace, positioning itself as a mental health partner for organizations. It wanted to strengthen its market authority and clarify its unique approach, starting with a web experience that actually conveyed its value.",
            "Beneath that surface need sat deeper questions: product or service model? How to structure growth and positioning? How to keep leads engaged through a long B2B sales cycle? How to make the sales team more effective? And which partnership opportunities were actually worth pursuing, without in-house expertise to evaluate them?",
          ]}
          photo={{ src: "/customer-stories/evoluno-banner.png", alt: "The Evoluno team" }}
        />

        <TextSection
          alt
          eyebrow="Strategic Coaching & Process Optimization"
          title="A neutral advisor for the hard calls"
          paragraphs={[
            "For a B2B healthcare company, finding the right balance between product and service is a major call. We stepped in as a neutral strategic advisor — no stake in the outcome, just an objective read on the options.",
          ]}
          checklist={{
            label: "What we helped Evoluno do",
            points: [
              "Clarify their business model and market positioning",
              "Define the priorities of their growth plan",
              "Evaluate a white-label partnership opportunity",
              "Avoid costly mistakes in contractual negotiations",
            ],
          }}
        />

        <TextSection
          eyebrow="Sales Coaching"
          title="Freeing the sales team to just close"
          paragraphs={[
            "In parallel, we worked directly with the sales team: overhauling the pitch, restructuring the slide deck around the real value proposition, and running call/meeting simulations across the full funnel — from first contact to close.",
            "The goal was simple: let the sales team focus on what they do best, closing deals, instead of carrying the whole narrative on their shoulders.",
          ]}
        />

        <TextSection
          alt
          eyebrow="Nurturing & Lead Activation"
          title="A structured system for a long sales cycle"
          paragraphs={[
            "To convert a growing pipeline into active opportunities, we built a nurturing system designed for long B2B cycles — sustaining engagement, re-awakening dormant contacts, and tightening the link between marketing and sales.",
          ]}
          checklist={{
            label: "How the system works",
            points: [
              "Multi-channel, multi-touch strategy across newsletters, webinars, social, and LinkedIn",
              "High-value content created once, repurposed across channels and formats",
              "Webinar strategy positioning Evoluno as a workplace mental-health thought leader",
              "Data-driven lead scoring to prioritise the most engaged, qualified leads",
            ],
          }}
        />

        <TextSection
          bistre
          eyebrow="Website Redesign"
          title="A site that finally tells the real story"
          paragraphs={[
            "We reorganized the existing content so every visitor understands Evoluno's value proposition and vision from the first click, with real copywriting work to strengthen editorial consistency.",
            "Using the Evoluno app's own design tokens, we built a simple, engaging site that stays true to the brand while explaining the why behind it — designed collaboratively in Figma into a responsive prototype, then implemented on Webflow.",
          ]}
        />

        <TextSection
          eyebrow="Results"
          title="A complete brand experience, not just a website"
          paragraphs={[
            "The new site went further than a showcase — it's a full brand experience built around readability, action, and emotional impact, with the digital presence finally consistent with the company's real identity.",
          ]}
          checklist={{
            label: "What changed",
            points: [
              "Positive client feedback on the new site's clarity and professionalism",
              "Strategic support opened real white-label partnership discussions",
              "Expertise Evoluno couldn't have hired in-house, at a fraction of the cost",
              "Management got the time and energy back to focus on the business itself",
            ],
          }}
        />

        <RelatedPages
          title="The offers behind this story"
          paths={["/growth-plan", "/nurturing-marketing-led"]}
        />

        <FinalCta
          title={
            <>
              Do you have a <em>story to tell?</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
          secondaryButton={{ label: "Visit Evoluno's website", href: "https://www.evoluno.com/" }}
        />
      </main>
    </div>
  );
}
