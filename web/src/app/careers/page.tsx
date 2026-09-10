import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { MiniCtaBanner } from "@/components/sections/MiniCtaBanner";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";
import { TEAM } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Careers — 26lights",
  description: "Open roles at 26lights, and how we work as a team.",
};

const JOIN = "mailto:alicia@26lights.com";
const CALL = "https://calendly.com/alicia-26lights/30min";

export default function CareersPage() {
  return (
    <div>
      <main>
        <PageHeader eyebrow="Careers" title="Careers" sub="Join a small team doing hands-on work for ambitious startups, scale-ups and SMEs." />

        <FeatureGrid
          eyebrow="Open roles"
          statement="Two roles we're actively hiring for."
          columns={2}
          cardStyle="boxed"
          items={[
            {
              title: "Front/back end Developer",
              body: "Are you a talented developer with a passion for crafting seamless digital experiences? We're looking for a creative, detail-oriented professional to help build the cutting-edge applications that drive our clients' success.",
              link: { label: "Apply for this role", href: JOIN },
            },
            {
              title: "Growth Marketer",
              body: "Are you a data-driven marketer with a knack for scaling businesses and driving results? We're looking for a Growth Marketer who can think up and execute the strategies that accelerate our clients' growth.",
              link: { label: "Apply for this role", href: JOIN },
            },
          ]}
        />

        <MiniCtaBanner
          title="Join our talent pool"
          note="If you thrive on challenges and have a passion for contributing to start-up growth, we want to hear from you — even without an open role that fits today."
          cta={{ label: "Join our talent pool", href: JOIN }}
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
          cta={{ label: "Let's meet", href: CALL }}
        />

        <FinalCta
          title={
            <>
              Ready to <em>join us?</em>
            </>
          }
          primary={{ label: "Join our talent pool", href: JOIN }}
        />
      </main>
    </div>
  );
}
