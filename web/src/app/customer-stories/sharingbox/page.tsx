import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { TextSection } from "@/components/sections/TextSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "sharingbox — Customer Story — 26lights",
  description: "How a custom ERP helped a photo booth hardware company automate 120+ tasks and expand to 19 countries.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

export default function SharingboxStoryPage() {
  return (
    <div>
      <main>
        <PageHeader
          eyebrow="Customer story"
          title="sharingbox"
          sub="B Team / ERP Implementation — how to automate 120+ tasks to help a hardware company expand internationally."
        />

        <DetailSplit
          eyebrow="The Challenge"
          title="A 120-booth request that Excel couldn't handle"
          paragraphs={[
            "sharingbox started as an innovative photo booth company letting users take pictures at events and receive them by email — and grew fast, expanding to 19 countries in just 3 years.",
            "A pivotal moment came when a major retail chain requested 120 photo booths for a simultaneous activation across all their stores — a bold investment that became a real competitive advantage, letting sharingbox handle large-scale, multi-location events for brands like L'Oréal.",
            "But as the company scaled, the well-made Excel sheet that ran the business from day one started falling short. That's when CEO Sidney Valenta contacted us.",
          ]}
          photo={{ src: "/customer-stories/sharingbox-banner.png", alt: "Sharingbox photo booths at an event" }}
        />

        <TextSection
          alt
          eyebrow="Process Mapping & B Team"
          title="Mapping every process before automating any of it"
          paragraphs={[
            "We always start by the why — so our first conversation with Sidney focused on understanding what was really slowing him down: project management and operational issues that had become overwhelming.",
            "That led to a Process Mapping exercise covering every single business process sharingbox ran at the time.",
            "Since sharingbox already had a strong technical team on hardware and software, what they needed wasn't more developers — it was an external eye to automate and streamline. That's what our B-Team solution is built for.",
          ]}
        />

        <TextSection
          eyebrow="ERP Implementation"
          title="A custom ERP built on three pillars"
          paragraphs={[
            "Once we knew exactly what to automate, we built a custom ERP tailored to sharingbox, orchestrating close to 120 distinct tasks across 10 different company roles — from booth installation through monitoring and support.",
          ]}
          checklist={{
            label: "Three pillars, one system",
            points: [
              "Project management tool covering the full operational workflow",
              "Logistics engine for dispatch timing, booth reservations, and maintenance",
              "Client interface with streamlined forms and a mobile app for stock managers",
            ],
          }}
        />

        <StatsRow
          stats={[
            { value: 120, suffix: "+", label: "tasks automated across the business" },
            { value: 19, label: "countries reached in 3 years" },
          ]}
          alt
        />

        <TextSection
          eyebrow="Results"
          title="From founder-dependent to sellable"
          paragraphs={[
            "The custom ERP cut email overload, reduced misunderstandings between teams, and improved customer satisfaction through better service delivery.",
            "But the real impact was making the business more valuable and transferable. Before the ERP, critical operational knowledge lived only in the founders' heads — the new system externalized it into structured processes and automated workflows.",
            "That transformation proved itself when NCP, sharingbox's Japanese printer supplier, acquired the company. The project management system and embedded business intelligence meant the business could run independently of its founders — which is exactly what made it sellable.",
          ]}
        />

        <RelatedPages
          title="The offers behind this story"
          paths={["/tech/erp", "/tech/dev-team"]}
        />

        <FinalCta
          title={
            <>
              Do you have a <em>story to tell?</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
          secondaryButton={{ label: "Visit sharingbox's website", href: "https://www.sharingbox.com/" }}
        />
      </main>
    </div>
  );
}
