import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PrincipleAccordion } from "@/components/sections/PrincipleAccordion";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "The 26manifesto — 26lights",
  description:
    "16 fundamental practices and philosophy driving our work — a pledge of our commitment to quality, always.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

const PRINCIPLES = [
  {
    number: "01",
    title: "No copy-paste",
    body: "Have you ever seen two companies succeed using exactly the same method? We haven't. While we love drawing inspiration from our experience, we truly believe that your path to success is unique. Let's discover it together.",
  },
  {
    number: "02",
    title: "Human-centric growth",
    body: "True growth partnership relies on real human contact, not on pure service delivery. A growth partner is a therapist for your company: the more they know about your goals, hopes, beliefs, and fears, the better they can help.",
  },
  {
    number: "03",
    title: "Co-creation is mandatory",
    body: "Co-creation is a powerful approach that leads to superior outcomes: you're the specialist of your business, we're the specialists of the core activities (IT, Marketing, Operations, HR, …).",
  },
  {
    number: "04",
    title: "Goal-driven partnerships",
    body: "Execution without strategy is lottery, and strategy without execution is nothing. This is why we're not simply strategists: we're doers who love to achieve goals.",
  },
  {
    number: "05",
    title: "One team, all skills",
    body: "A fast growing company's challenge is to do everything in parallel to make it work. An integrated team helps reduce friction and coordination time, making operations more efficient on your side.",
  },
  {
    number: "06",
    title: "Engineering excellence",
    body: "Technical excellence and robust engineering practices form the foundation of effective, scalable software solutions.",
  },
  {
    number: "07",
    title: "Determination drives breakthroughs",
    body: "Fundamental determination comes from the founder. Your energy and vision propel the company toward success, while our role is to channel this force and implement it through our expertise.",
  },
  {
    number: "08",
    title: "Master the local market",
    body: "Proximity and market knowledge are essential to provide the support and expertise that startups need to succeed in a unique and complex market.",
  },
  {
    number: "09",
    title: "Blending experience with fresh perspectives",
    body: "Experience matters. We believe experienced and specialized consultants are necessary to deliver tailor-made solutions. Our golden ratio: 1 junior for every 5 seniors — not the other way around.",
  },
  {
    number: "10",
    title: "Agility across all functions",
    body: "Agility is a key success factor. We are early adopters of agile methodologies. In a fast-changing environment, your ability to adapt is crucial. We are structured to be your agile partner and would be glad to show you how this can apply to your organization.",
  },
  {
    number: "11",
    title: "Embrace simplicity",
    body: "Simplicity is key. Take an honest look and focus on what actually needs doing. We have the visual thinking methodologies to support this approach, as we believe a single visual is worth a thousand words.",
  },
  {
    number: "12",
    title: "Transparency builds trust",
    body: "True growth partnership flourishes on a foundation of trust and mutual commitment. We believe in open communication, especially when challenges arise. Experience builds faith in our process, while our transparent approach strengthens your confidence in us as a partner. That's why we developed My26, our collaborative platform that provides both consultants and clients with real-time visibility into all project aspects.",
  },
  {
    number: "13",
    title: "Passion is our driving force",
    body: "We genuinely love what we do and the clients we work with. This passion fuels our commitment to go the extra mile on every project, delivering exceptional results that exceed expectations.",
  },
  {
    number: "14",
    title: "Do more with less",
    body: "Efficiency is in our DNA. We continuously seek to automate processes and eliminate tedious tasks, enabling you to focus your energy on high-value activities that drive meaningful growth.",
  },
  {
    number: "15",
    title: "No nonsense approach",
    body: "Unaligned projects waste time and resources. We maintain rigorous focus on outcomes by constantly validating our work against original objectives, ensuring every effort contributes directly to your goals.",
  },
  {
    number: "16",
    title: "Lifelong commitment",
    body: "For us, consulting isn't just a career stepping stone: it's a vocation. We recruit talented professionals that inspire us, and are genuinely dedicated to helping others succeed.",
  },
];

export default function ManifestoPage() {
  return (
    <div>
      <main>
        <Hero
          eyebrow="The 26manifesto"
          title="16 practices behind everything we build."
          sub="Fundamental practices and philosophy driving our work — a pledge of our commitment to quality, always."
          ctas={[{ label: "Read the principles", href: "#principles", variant: "ghost" }]}
        />

        <PrincipleAccordion id="principles" items={PRINCIPLES} />

        <FinalCta
          title={
            <>
              These aren&apos;t slogans. <em>See them in practice.</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
        />
      </main>
    </div>
  );
}
