import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { TextSection } from "@/components/sections/TextSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "e-maprod — Customer Story — 26lights",
  description: "How a 3-person real estate business became a European leader through process mapping and a custom Odoo ERP.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

export default function EmaprodStoryPage() {
  return (
    <div>
      <main>
        <PageHeader
          eyebrow="Customer story"
          title="e-maprod"
          sub="Process Mapping / Odoo Implementation — how a 3-person family business became a European real estate leader."
        />

        <DetailSplit
          eyebrow="The Challenge"
          title="From a 3-person business to a European real estate leader"
          paragraphs={[
            "For more than 20 years, e-maprod has been carrying out real estate projects in Belgium and internationally, creating top-tier living environments for investors and tenants.",
            "In 2014, founder Stéphane Benaym decided it was time to grow the 3-person company into a prominent European real estate actor — that's how he came to meet us.",
          ]}
          photo={{ src: "/customer-stories/e-maprod-banner.png", alt: "The e-maprod team" }}
          quote={{
            text: "The idea was to take a blank sheet of paper, redefine the processes and people of the company, and point out what input an external eye can offer about different organisational aspects. Very quickly, we found a human resource challenge.",
            name: "Stéphane Benaym",
            role: "Co-founder and CFO, e-maprod",
            photo: { src: "/team/testi-stephane-benaym.png", alt: "Stéphane Benaym" },
          }}
        />

        <TextSection
          alt
          eyebrow="Process Mapping"
          title="Mapping the business before automating it"
          paragraphs={[
            "We started by mapping all of e-maprod's business to understand who's in charge of what, with one objective: establish and improve work practices across the whole team to elevate productivity in every activity.",
            "We introduced visual thinking into e-maprod's daily practices — replacing Word documents with a whiteboard and Post-Its. Teams immediately grasped the complexity of their processes and found ways to streamline their workflow.",
            "Thanks to this business mapping, everyone at e-maprod could now clearly see what piece of the puzzle they were.",
          ]}
        />

        <TextSection
          eyebrow="ERP Implementation"
          title="Building e-madoo, a custom ERP on Odoo"
          paragraphs={[
            "After this restructuring, it was clear the Excel sheet running most of e-maprod's business couldn't work forever — many processes had to be automated, and the solution had to fit the business mapping already done.",
            "e-maprod was expecting significant growth in the years ahead, so they needed a scalable, all-in-one solution built to evolve with their processes. Our business analyst researched every option, and a custom ERP built on top of Odoo came out as the best choice: open source, easy to set up, and scalable enough to match their growth plan.",
            "We paid special attention to the accuracy of financial data and security — e-maprod handles very significant investments every day. A thorough validation process was added before bill payments, so only transactions approved by the CFO go through.",
            "We gradually onboarded teams while building the next features block by block, testing each one before moving on. This collaborative approach accelerated both development and adoption.",
          ]}
          checklist={{
            label: "One tool, six streamlined processes",
            points: [
              "Real estate feasibility study",
              "Project tracking",
              "Financial monitoring",
              "Automated invoicing",
              "Stock management",
              "Service provider management",
            ],
          }}
        />

        <StatsRow
          stats={[
            { value: 10, suffix: "x", label: "MRR growth in 5 years" },
            { value: 20, suffix: "+", label: "years in real estate" },
          ]}
          alt
        />

        <TextSection
          eyebrow="Results"
          title="A single source of truth the whole team runs on"
          paragraphs={[
            "Today, e-madoo — e-maprod's own name for the tool — is used by every team, every day, to track every activity in the company. It helped them multiply their MRR by 10 in five years.",
            "Teams are now organized around a single source of truth that automates recurring tasks, streamlines the hardest parts of real estate operations, and makes every team fully autonomous.",
            "Our collaboration with e-maprod hasn't stopped there — we continue working closely with them to analyze the impact of what we've built and keep improving it.",
          ]}
          quote={{
            text: "Our collaboration with e-maprod consisted of a shared responsibility to ensure all numbers are correct. That's why, from the choice of the ERP to its maintenance today, we have always paid an utmost attention to the quality of the delivery.",
            name: "Alicia Dahan",
            role: "Manager, 26lights",
            photo: { src: "/team/alicia.png", alt: "Alicia Dahan" },
          }}
        />

        <QuoteBand quote="It's essentially led to the creation of 26lights: helping entrepreneurs with a clear sense of purpose. And for that, clear processes are as important as culture." />

        <RelatedPages
          title="The offers behind this story"
          paths={["/tech/erp", "/tech/odoo-implementation"]}
        />

        <FinalCta
          title={
            <>
              Do you have a <em>story to tell?</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
          secondaryButton={{ label: "Visit e-maprod's website", href: "https://emaprod.com/en/" }}
        />
      </main>
    </div>
  );
}
