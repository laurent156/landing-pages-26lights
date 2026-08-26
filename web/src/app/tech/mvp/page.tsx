import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { TrustBar } from "@/components/sections/TrustBar";
import { TextSection } from "@/components/sections/TextSection";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { ToolsBar } from "@/components/sections/ToolsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { MidCta } from "@/components/sections/MidCta";
import { Projects } from "@/components/sections/Projects";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "We Build Your MVP — 26lights",
  description:
    "Time is money. We help you build your Minimum Viable Product around your one killer feature and get to market fast.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";

const TOOL_ROWS = [
  [
    { src: "/logos/tools/typescript.png", alt: "TypeScript" },
    { src: "/logos/tools/react.png", alt: "React" },
    { src: "/logos/tools/nodejs.png", alt: "Node.js" },
    { src: "/logos/tools/python.png", alt: "Python" },
  ],
  [
    { src: "/logos/tools/postgresql.png", alt: "PostgreSQL" },
    { src: "/logos/tools/graphql.png", alt: "GraphQL" },
    { src: "/logos/tools/openapi.png", alt: "OpenAPI" },
    { src: "/logos/tools/docker.png", alt: "Docker" },
  ],
  [
    { src: "/logos/tools/kotlin.png", alt: "Kotlin" },
    { src: "/logos/tools/scala.png", alt: "Scala" },
    { src: "/logos/tools/akka.png", alt: "Akka" },
    { src: "/logos/tools/kafka.png", alt: "Kafka" },
  ],
  [
    { src: "/logos/tools/odoo.png", alt: "Odoo" },
    { src: "/logos/tools/bubble.png", alt: "Bubble" },
    { src: "/logos/tools/ansible.png", alt: "Ansible" },
    { src: "/logos/tools/android.png", alt: "Android" },
  ],
];

const TEAM = [
  { name: "Alicia", role: "General Manager", photo: "/team/alicia.png" },
  { name: "Kelly", role: "France Manager", photo: "/team/kelly.png" },
  { name: "Céline", role: "Product Owner", photo: "/team/celine.jpg" },
  { name: "Arik", role: "Business Coach", photo: "/team/arik.png" },
  { name: "Malorie", role: "Negotiation Expert", photo: "/team/malorie.png" },
  { name: "Olivier", role: "Tech Lead", photo: "/team/olivier.jpg" },
  { name: "Renaud", role: "Tech Lead", photo: "/team/renaud.jpg" },
  { name: "Laurent", role: "Brand Director", photo: "/team/laurent.jpg" },
  { name: "Forster", role: "Growth Marketer", photo: "/team/forster.png" },
  { name: "Aliénor", role: "Back-end Developer", photo: "/team/alienor.jpg" },
  { name: "Gaspard", role: "Front-end Developer", photo: "/team/gaspard.jpg" },
  { name: "Emilie", role: "Full-stack Developer", photo: "/team/emilie.jpg" },
];

export default function MvpPage() {
  return (
    <div>
      <main>
        <Hero
          title={
            <>
              We create <em>successful MVP&apos;s</em>
            </>
          }
          sub="Time is money. And you don't want to waste it. If you know what problem you're solving, you don't need a thousand features to get started. We'll help you build your Minimum Viable Product and get to market asap. And if you don't know what problem you're solving, we can talk about that too."
          ctas={[{ label: "Let's talk", href: TALK }]}
          visual={<HeroFigure src="/team/hero-work.png" alt="26lights team at work" />}
        />

        <TrustBar
          label="Trusted by"
          logos={[
            { src: "/logos/lizy.png", alt: "Lizy" },
            { src: "/logos/sharingbox.png", alt: "Sharingbox" },
            { src: "/logos/cowboy.png", alt: "Cowboy" },
            { src: "/logos/umedia.png", alt: "Umedia" },
            { src: "/logos/be-angels.png", alt: "beAngels" },
            { src: "/logos/labbox.png", alt: "LABBOX" },
            { src: "/logos/ringtwice.png", alt: "RingTwice" },
          ]}
        />

        <DetailSplit
          eyebrow="The idea"
          title="The concept of the MVP goes straight to the point."
          paragraphs={[
            "What makes your product essential? What's the one feature that delivers the most value to your target audience? That's your killer feature — focus on it, build an MVP, and leave the rest for later.",
            "Developing countless features that no one uses is a waste of time, energy, and money.",
            "An MVP is a fully functional product. Test your killer feature in the market and start making your first sales — then keep building the rest of your app, iterating on real feedback.",
          ]}
          cta={{ label: "Find your killer feature", href: TALK }}
        />

        <DetailSplit
          eyebrow="How we work"
          title="Connected to the world."
          flip
          paragraphs={[
            "Your audience comes before your product. So we try, we tweak, and we move forward to offer them exactly what they need — regularly changing the scope, while the mission stays unchanged.",
            "Fast iterations let you get to know your market better while generating revenue. Building an MVP means you can leverage user feedback quickly, measure ROI early, and reinvest in future iterations.",
            "That's how you manage your investment effectively, control your growth, and minimize financial risk.",
          ]}
          cta={{ label: "See how we iterate", href: TALK }}
        />

        <TextSection
          eyebrow="Want to try it?"
          title="No technology religion."
          paragraphs={[
            "Launching a project quickly doesn't mean rushing the work. Building an MVP involves a fast-paced process of validation and optimization.",
            "Quick does not mean dirty.",
          ]}
          cta={{ label: "Talk about your stack", href: TALK }}
        />

        <ToolsBar rows={TOOL_ROWS} />

        <Testimonials
          eyebrow="Our clients say it best"
          title="Two teams that shipped fast, on purpose."
          items={[
            {
              quote:
                "26lights came in to help develop and ship our Cowboy Care platform, our on-demand service for maintenance and tyre puncture fixes. Their engineers worked directly with our team — no overhead, fluid communication. We recommend working with them.",
              title: "CTO",
              company: "Cowboy",
              initials: "C",
            },
            {
              quote:
                "We brought 26lights in to do a full audit of our two applications and set up a new workflow that fits our internal team better. We loved their flexibility and solution-oriented mindset. Would work with them again!",
              title: "Product Lead",
              company: "Koalect",
              initials: "K",
            },
          ]}
          cta={{ label: "Talk to our team", href: TALK }}
        />

        <DetailSplit
          eyebrow="Approach"
          title="You run the business. We build the tech."
          paragraphs={[
            "You're the expert at running your business. We're experts at building startups, organizing companies, and developing amazing tech. Through years of R&D with leading researchers, we've developed proprietary methodologies grounded in Visual Thinking — because one picture can convey more than a thousand words.",
            "Whether you need a complete team to implement a new project or just a few hours of consultation, we adjust the composition of the team to your needs — you decide the workload, month by month.",
            "During our collaboration, we become your dedicated team. Transparency is crucial to building trust, so you have access to all relevant information and a seat in every significant decision.",
          ]}
          cta={{ label: "See our approach in action", href: TALK }}
        />

        <MidCta
          title="Let's talk about your growth."
          href={TALK}
          label="Let's talk"
        />

        <Projects
          eyebrow="Projects"
          title="MVPs that turned into real businesses."
          items={[
            {
              company: "Umedia",
              logo: "/logos/umedia.png",
              meta: "Film production · Process & coaching",
              stat: "+60%",
              result: "more investments with no additional recruitment",
              description:
                "A film production company that has invested $670M in over 100 movies. They came to us when they hit a plateau. We helped them increase their investments by 60% without growing the team — modeling their business and automating the recurring tasks that held them back.",
            },
            {
              company: "Yields.io",
              meta: "MVP development · Tech lead",
              stat: "€5M",
              result: "raised, from MVP to a 35-person company",
              description:
                "The founder came to us with an idea while still holding a day job. We challenged it and built the first version of the product, which helped raise €1.25M from VC firms. Six years and a few rounds later, the company has 35 people, and we're still working together daily, mainly through coaching sessions.",
            },
            {
              company: "Sharingbox",
              logo: "/logos/sharingbox.png",
              meta: "Process mapping · Sparring",
              stat: "×2",
              result: "process efficiency, then a successful exit",
              description:
                "We helped Sharingbox simplify the sequence of actions needed to deploy their technology in the real world. We mapped their internal processes and built the tools to standardize them, making the company twice as efficient — which also eased knowledge transfer when the founders came to exit.",
            },
            {
              company: "e-maprod",
              logo: "/logos/emaprod.png",
              meta: "Process · Acceleration",
              stat: "×5",
              result: "headcount in 10 years · +100% in 3 years",
              description:
                "We helped e-maprod reorganize their team by putting all the cards on the table, hiring the right people, and giving teams a real sense of ownership so they could run autonomously — while optimizing internal workflows so they could stop relying on spreadsheets.",
            },
          ]}
          cta={{ label: "Start your MVP", href: TALK }}
        />

        <Team eyebrow="Team" title="Let's meet." members={TEAM} cta={{ label: "Work with us", href: TALK }} />

        <FinalCta
          title={
            <>
              Let&apos;s talk about <em>your MVP.</em>
            </>
          }
          sub="Want to see what difference we can bring to your business? Book a consultation today."
          primary={{ label: "Book a free 30-min call", href: TALK }}
          contactEmail="alicia@26lights.com"
          phone="+32 492 66 00 89"
          location="Brussels & Paris"
        />
      </main>
    </div>
  );
}
