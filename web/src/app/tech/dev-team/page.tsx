import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroFigure } from "@/components/sections/HeroFigure";
import { TrustBar } from "@/components/sections/TrustBar";
import { TextSection } from "@/components/sections/TextSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { Projects } from "@/components/sections/Projects";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "We Will Be Your Dev Team — 26lights",
  description:
    "Finding devs for a startup is tough. We're your DevTeam-as-a-Service: senior, aligned with your vision, and ready to move now.",
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
  { name: "Malorie", role: "Negotiation Expert", photo: "/team/Malorie-Dreyfus.png" },
  { name: "Olivier", role: "Tech Lead", photo: "/team/olivier.jpg" },
  { name: "Renaud", role: "Tech Lead", photo: "/team/renaud.jpg" },
  { name: "Laurent", role: "Brand Director", photo: "/team/laurent.jpg" },
  { name: "Forster", role: "Growth Marketer", photo: "/team/forster.png" },
  { name: "Aliénor", role: "Back-end Developer", photo: "/team/alienor.jpg" },
  { name: "Gaspard", role: "Front-end Developer", photo: "/team/gaspard.jpg" },
  { name: "Emilie", role: "Full-stack Developer", photo: "/team/emilie.jpg" },
];

export default function DevTeamPage() {
  return (
    <div>
      <main>
        <Hero
          title={
            <>
              We will be <em>your dev team</em>
            </>
          }
          sub="Finding devs for a startup is tough — they're the real unicorns. On top of being technically talented, they need to be fully aligned with your vision, and ready to take risks. That doesn't mean you won't find them. But it doesn't mean you should wait for them to move forward with your project."
          ctas={[
            { label: "Meet our team!", href: "#team" },
            { label: "Let's talk", href: TALK, variant: "ghost" },
          ]}
          visual={<HeroFigure src="/team/collab-whiteboard.png" alt="26lights working through a process map with a client" />}
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

        <ApproachSection
          eyebrow="Why work with us?"
          statement="Why a DevTeam-as-a-Service approach is far more valuable than waiting months or years for your dream team. We're comfortable with new projects and ongoing ones — happy to reinforce your team or take over your development operations."
          cards={[
            {
              title: "Startup specialists",
              body: "Accompanying startups in their development is our specialty, from the critical early stages to scaling up. We value agility as a mindset and a competitive advantage — and we believe happiness is one of the key success factors. 10 years and 100+ startups later, it's still our recipe.",
            },
            {
              title: "Only talented people",
              body: "We don't compromise on excellence. Our founder has led multiple companies to success, our tech leads are trailblazing PhDs. We lay solid strategic and technological foundations with senior profiles — then you hire the juniors who grow with your company.",
            },
            {
              title: "Across-the-board expertise",
              body: "A good product needs solid UX, positioning, and marketing, not just development. Working with a team of varied profiles gets you on-demand access to every skill startup success requires — every step covered, on your terms.",
            },
            {
              title: "Partnership, no ownership",
              body: "We don't want your company. We're going to get involved in almost every conceivable way, but we won't take any equity. This gives you total freedom in reassessing the relationship as time goes on — no strings attached, you evaluate us based on the results we bring. Success takes time, but it usually speaks for itself.",
            },
          ]}
          cta={{ label: "See our approach in action", href: TALK }}
        />

        <TextSection
          eyebrow="Our stack"
          title="No technology religion."
          alt
          paragraphs={[
            "Whatever your needs are — web, mobile, AI, database — we have experience and knowledge with most available technologies. Having a diverse team of senior devs allows us to cover a lot of ground.",
            "We always choose technology based on relevance to the project, and build sustainable products that satisfy every stakeholder. Our developers come from successful companies such as Amazon or Teads — they know how to build robust software, but also to ship tactical code in a hurry.",
          ]}
          cta={{ label: "Talk about your stack", href: TALK, strong: true }}
          toolRows={TOOL_ROWS}
        />

        <Projects
          eyebrow="Projects"
          title="We deliver massive value to ambitious entrepreneurs who understand that surrounding themselves with the right people is the key to success."
          items={[
            {
              company: "Umedia",
              logo: "/logos/umedia.png",
              meta: "Film production · Process & coaching",
              stat: { value: 60, prefix: "+", suffix: "%" },
              result: "more investments with no additional recruitment",
              description:
                "A film production company that has invested $670M in over 100 movies. They came to us when they hit a plateau. We helped them increase their investments by 60% without growing the team — modeling their business and automating the recurring tasks that held them back.",
            },
            {
              company: "Yields.io",
              logo: "/logos/yields.png",
              meta: "MVP development · Tech lead",
              stat: { value: 5, prefix: "€", suffix: "M" },
              result: "raised, from MVP to a 35-person company",
              description:
                "The founder came to us with an idea while still holding a day job. We challenged it and built the first version of the product, which helped raise €1.25M from VC firms. Six years and a few rounds later, the company has 35 people, and we're still working together daily, mainly through coaching sessions.",
            },
            {
              company: "Sharingbox",
              logo: "/logos/sharingbox.png",
              meta: "Process mapping · Sparring",
              stat: { value: 2, prefix: "×" },
              result: "process efficiency, then a successful exit",
              description:
                "We helped Sharingbox simplify the sequence of actions needed to deploy their technology in the real world. We mapped their internal processes and built the tools to standardize them, making the company twice as efficient — which also eased knowledge transfer when the founders came to exit.",
            },
            {
              company: "e-maprod",
              logo: "/logos/emaprod.png",
              meta: "Process · Acceleration",
              stat: { value: 5, prefix: "×" },
              result: "headcount in 10 years · +100% in 3 years",
              description:
                "We helped e-maprod reorganize their team by putting all the cards on the table, hiring the right people, and giving teams a real sense of ownership so they could run autonomously — while optimizing internal workflows so they could stop relying on spreadsheets.",
            },
          ]}
          cta={{ label: "Start your project", href: TALK, strong: true }}
        />

        <Team
          eyebrow="Team"
          title="Meet our experts."
          sub="Their track records and expertise are just something else. They work collaboratively as a team and alongside you to unlock your business's full potential."
          members={TEAM}
          cta={{ label: "Work with us", href: TALK }}
        />

        <FinalCta
          title={
            <>
              Let&apos;s start <em>building!</em>
            </>
          }
          sub="Finding the right devs shouldn't be what's holding your project back. Book a meeting with Alicia and let's talk about what you need."
          primary={{ label: "Contact us now", href: TALK }}
          host={{ name: "Alicia Dahan", role: "26lights Manager", photo: "/team/alicia-circle.png" }}
        />
      </main>
    </div>
  );
}
