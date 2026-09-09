import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { TextSection } from "@/components/sections/TextSection";
import { ToolGroups } from "@/components/sections/ToolGroups";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { HERO_PROOF_LOGOS } from "@/lib/data/proof-logos";

export const metadata: Metadata = {
  title: "We Can Help You Get Out of Excel — 26lights",
  description:
    "Using Excel as your business copilot works for early stage, but it's not a scalable solution. We know how to discover and build your ideal ERP.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";


export default function ErpPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              It&apos;s time to ditch Excel
              <br />
              for <em>a better solution.</em>
            </>
          }
          sub="Using Excel as your business copilot works for early stage. But it is not a scalable solution. We know how to discover and build your ideal ERP, with your needs in mind."
          ctas={[{ label: "Let's talk", href: "#contact" }]}
          proofLogos={HERO_PROOF_LOGOS}
          wide
        />

        <FeatureGrid
          eyebrow="Digital Transformation"
          statement="We know how to turn your information system into a powerful engine, driving your business to new heights."
          items={[
            {
              title: "It's not a Database",
              photo: { src: "/team/not-a-database-test-2.png", alt: "It's not a database" },
              body: "Spreadsheets organize data into rows and columns for calculations, whereas a database is a structured data collection allowing efficient manipulation and retrieval. Don't use Excel as a database — it's not meant for it.",
            },
            {
              title: "Narrow Security",
              photo: { src: "/team/narrow-security.png", alt: "Narrow security" },
              body: "Excel spreadsheets containing critical data shouldn't be open to all your team members. A simple screenshot or data pull is all it takes to disrupt your business' integrity.",
            },
            {
              title: "Poor Error Handling",
              photo: { src: "/team/poor-error-handling.png", alt: "Poor error handling" },
              body: "90% of Excel files contain calculation or formulae errors. It can be very costly. With multiple people collaborating on the same internally-shared file, mistakes can occur anytime — and stay silent until it's too late.",
            },
          ]}
          cta={{ label: "Review your current setup", href: "#contact", strong: true }}
        />

        <DetailSplit
          eyebrow="Benefits"
          title="Why should I automate my business now?"
          alt
          photo={{ src: "/team/across-the-board-expertise.png", alt: "26lights planning a strategy on a whiteboard" }}
          paragraphs={["The key is Business Automation."]}
          items={[
            {
              title: "Free from Validations",
              body: "Without an information system in place, your team will have a hard time continuously grasping your vision — you're always prompted to validate or remind things that should've been documented. With a complete ERP in place, you unite your company around a single source of truth.",
            },
            {
              title: "Automate what works",
              body: "Any business effort that has proven successful ROI? It's time to automate it qualitatively to shift your focus elsewhere. You need to eliminate tedious things to solely focus on growing your business and exploring new opportunities.",
            },
            {
              title: "Efficiency first",
              body: "An ERP system serves as the backbone of this endeavor. By centralizing data and automating routine tasks, you'll minimize room for error, gain real-time insight into performance, and make informed decisions swiftly.",
            },
          ]}
          cta={{ label: "See what to automate first", href: "#contact", strong: true }}
          secondaryCta={{ label: "See our stack", href: "#stack" }}
        />

        <TextSection
          id="stack"
          eyebrow="No Tech Religion"
          title="We know how to define the information systems you need."
          bistre
          paragraphs={[
            "We've been doing it for more than 10 years. Automating your core business with an ERP built on a low-code tool can cost around 10k, while a fully custom-developed solution can reach up to 500k.",
            "Now, the question is: which option will be able to scale for the next 5 years? This is the initial inquiry we aim to address when identifying the challenges that our solution can address. This is why we won't push you toward the solution we know best, but the one that best aligns with your business' objectives and ambitions.",
          ]}
          quote={{
            text: "Your business' scalability depends on the quality of your information system.",
            name: "Arik Azoulay",
            role: "Business Coach",
            photo: { src: "/team/arik.png", alt: "Arik Azoulay, Business Coach at 26lights" },
          }}
        />

        <ToolGroups
          eyebrow="Our stack"
          title="We know how to build your ERP, CRM, project tracker, and more — with no code, low code, or custom code."
          alt
          groups={[
            {
              label: "Low code",
              tools: [
                { name: "Softr", src: "/logos/tools/softr.png" },
                { name: "Notion", src: "/logos/tools/notion.png" },
                { name: "Odoo", src: "/logos/tools/odoo.png" },
                { name: "Monday", src: "/logos/tools/monday.png" },
                { name: "Bubble", src: "/logos/tools/bubble.png" },
                { name: "Airtable", src: "/logos/tools/airtable.png" },
              ],
            },
            {
              label: "Custom dev",
              tools: [
                { name: "React", src: "/logos/tools/react.png" },
                { name: "Python", src: "/logos/tools/python.png" },
                { name: "Ruby on Rails", src: "/logos/tools/rubyonrails.png" },
                { name: "Docker", src: "/logos/tools/docker.png" },
              ],
            },
            {
              label: "Integrated with your current stack",
              wide: true,
              tools: [
                { name: "Mailchimp", src: "/logos/tools/mailchimp.png" },
                { name: "HubSpot", src: "/logos/tools/hubspot.png" },
                { name: "Pipedrive", src: "/logos/tools/pipedrive.png" },
                { name: "Slack", src: "/logos/tools/slack.png" },
                { name: "Asana", src: "/logos/tools/asana.png" },
                { name: "Salesforce", src: "/logos/tools/salesforce.png" },
              ],
            },
          ]}
        />

        <FeatureGrid
          eyebrow="Choosing the right solution"
          statement="Our team of passionate experts can guide you to choose and implement the solutions your business didn't know it needed."
          items={[
            {
              title: "Connecting your systems",
              body: "Think of your information systems like interconnected living beings, rather than independent blocks of your business. They have to communicate with each other to bring maximum value. You can trust us on that.",
            },
            {
              title: "Don't be stingy",
              body: "Some great business-piloting solutions cost a few dozen euros per month. While it's tempting to save on costs, think about the potential time saved from automation, reduction in costly errors, and potential for increased leads. Your company's scalability depends on your information system.",
            },
            {
              title: "Choosing the Right Solution",
              body: "From an existing tool to a custom ERP, we know how to define which will best benefit your company's processes. We're committed to electing the solution that will best fit your needs for at least the next 3 years.",
            },
          ]}
        />

        <Projects
          eyebrow="Case Studies"
          title="Discover how we helped businesses like yours transition from Excel to exponential growth."
          items={[
            {
              company: "Sharingbox",
              logo: "/logos/sharingbox.png",
              meta: "Information system · Resource planning",
              stat: { value: 6, suffix: "×" },
              result: "MRR in 2 years, without recruiting",
              description:
                "Sharingbox was growing fast, but they lacked internal processes — juggling between Excel sheets took 70% of their time. They didn't know they needed to streamline all their operations into a scalable resource planning system, until we framed their needs with them. Thanks to a comprehensive information system, they doubled their efficiency and managed to envision an exit strategy that has proven very successful.",
            },
            {
              company: "Corset Daum",
              logo: "/logos/corset-daum.jpg",
              meta: "Custom ERP · Low-code on Monday",
              stat: { value: 80, suffix: "%" },
              result: "of tasks automated, MRR ×3 in 3 years",
              description:
                "A company with an incredible mission, which needed guidance to streamline their activity. Corset Daum came to us when their main medical ERP tool shut down its services — they needed a solution fully tailored to their complex business, fostering a close, personal approach with their clients and doctor partners. With a custom ERP built on top of Monday, 80% of their tasks are now automated, which multiplied their MRR by 3 in only 3 years.",
            },
          ]}
          cta={{ label: "Talk about your case", href: "#contact", strong: true }}
        />

        <DetailSplit
          eyebrow="You are in control"
          title="Tracking tools and methods you won't find anywhere else."
          flip
          photo={{ src: "/team/my26-control.png", alt: "Digital presentation of 26lights' internal tool My26" }}
          paragraphs={[
            "As you already know, transparency and flexibility are priorities for us. This is why we've developed proprietary technology called My26, to allow you to follow the evolution of every project in real time and be aware of how resources are being allocated at any given moment.",
            "My26 is our investment in openness and trust, which are the building blocks of growth partnership.",
          ]}
          cta={{ label: "Discover My26", href: "#contact" }}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/odoo-implementation", "/ai/erp", "/ai/powered-automation"]}
        />

        <FinalCta
          title={
            <>
              A team of experts, proven methods, transparency first, <em>#NoTechReligion.</em>
            </>
          }
          sub="We can help you get out of Excel, implement a viable business plan for the next 5 years, advise you on recruitment, build your MVP, and build your ERP."
          primary={{ label: "Book 30 minutes", href: TALK }}
        />
      </main>
    </div>
  );
}
