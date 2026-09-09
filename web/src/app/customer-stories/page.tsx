import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CaseResults } from "@/components/sections/CaseResults";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";
import { TEAM } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Customer Stories — 26lights",
  description: "Discover stories from companies that partnered with us to go to their next stage of growth.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

/** Three of these "Read story" links still point at the live WordPress detail page — those are
 * real long-form case studies (challenge / approach / results, several quotes) being ported one
 * at a time; this hub does not wait on all four. e-maprod shipped first; repoint the rest to
 * "/customer-stories/<slug>" as each one ships. */
const FEATURED = [
  {
    photo: { src: "/customer-stories/e-maprod-banner.png", alt: "The e-maprod team" },
    result: "Maximizing growth and efficiency through process optimization and ERP integration",
    body: "“Our collaboration with e-maprod consisted of a shared responsibility to ensure all numbers are correct. That's why, from the choice of the ERP to its maintenance today, we have always paid an utmost attention to the quality of the delivery.” — Alicia Dahan, Manager, 26lights",
    href: "/customer-stories/e-maprod",
  },
  {
    photo: { src: "/customer-stories/sharingbox-banner.png", alt: "Sharingbox photo booths at an event" },
    result: "Automating 120+ tasks to support a fast, international expansion",
    body: "When faced with managing 120 photo booths for simultaneous activations, an Excel-based system couldn't keep up with their growth. We developed a comprehensive ERP solution that streamlined operations across project management, logistics, and client interfaces.",
    href: "https://www.26lights.com/customer-stories/sharingbox/",
  },
  {
    photo: { src: "/customer-stories/corset-daum-banner.png", alt: "The Corset DAUM founding team" },
    result: "How to leverage founders' years of expertise to improve their business.",
    body: "Founded by Reuwen and Sarah Daum, the Corset DAUM® is a groundbreaking orthopaedic brace, featuring an innovative dynamic piston solution, effectively treating various back pain conditions by redistributing body weight and enabling vertebral decompression.",
    href: "https://www.26lights.com/customer-stories/corset-daum/",
  },
  {
    photo: { src: "/customer-stories/evoluno-banner.png", alt: "The Evoluno team" },
    result: "From strategic uncertainty to structured clarity",
    body: "Evoluno is a company specializing in mental health in the workplace. It positions itself as a mental health partner for organizations, offering solutions to improve employees' psychological well-being and create a healthier work environment.",
    href: "https://www.26lights.com/customer-stories/evoluno/",
  },
];

export default function CustomerStoriesPage() {
  return (
    <div>
      <main>
        <PageHeader
          title="Customer Stories"
          sub="Discover stories from companies that partnered with us to go to their next stage of growth."
          cta={{ label: "Read the stories", href: "#stories" }}
        />

        <CaseResults id="stories" columns={2} alt photoRatio="16/9" items={FEATURED} />

        <Team
          eyebrow="Team"
          title="Meet our experts."
          sub="Their track records and expertise are just something else. They work collaboratively as a team and alongside you to unlock your business's full potential."
          members={TEAM}
          background="white"
          cta={{ label: "Let's meet", href: CALL }}
        />

        <FinalCta
          title={
            <>
              Ready to write <em>your own story?</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
        />
      </main>
    </div>
  );
}
