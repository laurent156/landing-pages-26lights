import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { TextSection } from "@/components/sections/TextSection";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Corset DAUM — Customer Story — 26lights",
  description: "How business coaching, a modern ERP, and a marketing strategy turned a family orthopaedic brand into an acquisition-ready company.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

export default function CorsetDaumStoryPage() {
  return (
    <div>
      <main>
        <PageHeader
          eyebrow="Customer story"
          title="Corset DAUM"
          sub="Business Coaching / ERP Implementation / Marketing Strategy — turning a groundbreaking product into an attractive acquisition target."
        />

        <DetailSplit
          eyebrow="The Challenge"
          title="A revolutionary product, stuck at a turning point"
          paragraphs={[
            "Founded by Reuwen and Sarah Daum, Corset DAUM® grew from a modest family venture into a leading medical innovator — its dynamic-piston orthopaedic brace treats low back pain without restricting movement, a genuine first.",
            "When we first met the founders, they had a simple question: \"Our product is groundbreaking, so why can't we go further?\" A round of discussions showed why: business knowledge lived only in the founders' heads, their scheduling software had an 80's interface, marketing relied on lengthy emails, and production was capped by a small Brussels workshop.",
            "Together, we concluded the most strategic move was to turn the company into an attractive acquisition target — improving adoption among doctors, and reducing the business's dependency on its founders.",
          ]}
          photo={{ src: "/customer-stories/corset-daum-banner.png", alt: "The Corset DAUM founding team" }}
        />

        <TextSection
          alt
          eyebrow="Business Coaching"
          title="Turning founder knowledge into a system"
          paragraphs={[
            "We started by establishing a management committee and taking a strategic role in structuring their processes — starting with a full review of their financial statements across multiple companies to model salary costs and get real visibility per business unit.",
            "On the sales side, we identified new audiences for the Corset DAUM® and folded them into a fundraising strategy built to maximise company valuation on both current performance and future potential.",
            "On production, their small Brussels townhouse workshop was the real ceiling. We convinced the committee to outsource production — Corset Daum then opened two new centers, in Liège and Namur.",
          ]}
        />

        <TextSection
          eyebrow="ERP Implementation"
          title="Replacing an 80's interface with a real system"
          paragraphs={[
            "We started with a CRM module for physician relationship management — doctors are the primary source of patient referrals, so this alone replaced lengthy emails and paper tracking with automated workflows.",
            "From there we expanded into a full ERP, built on top of Monday, that tracks the business end to end and — crucially — encodes their proprietary manufacturing process into the software instead of the founders' heads.",
          ]}
          checklist={{
            label: "What the ERP now runs",
            points: ["Prospection tracking", "Stock management", "Production tracking", "KPI monitoring", "Operational coordination"],
          }}
        />

        <TextSection
          alt
          eyebrow="Marketing Strategy"
          title="We became their marketing department"
          paragraphs={[
            "Hiring an in-house marketing team wasn't cost-effective at their size, so we took that role directly — website development, a full SEO audit and content strategy for the Belgian market, brand material updates, and regular doctor-nurturing campaigns.",
          ]}
        />

        <TextSection
          eyebrow="Results"
          title="From behind the scenes to the CEO seat"
          paragraphs={[
            "Sarah could fully step into her CEO role — previously working more in her husband's shadow, she now leads decisions with confidence, backed by ongoing sales training and strategic guidance.",
            "The new production centers beyond Brussels opened real expansion perspectives despite early reluctance, and the ERP significantly increased the company's operational independence and overall value — positioning it as a genuine acquisition target.",
          ]}
        />

        <QuoteBand quote="It's essentially led to the creation of 26lights: helping entrepreneurs with a clear sense of purpose. And for that, clear processes are as important as culture." />

        <RelatedPages
          title="The offers behind this story"
          paths={["/growth-plan", "/tech/erp", "/marketing"]}
        />

        <FinalCta
          title={
            <>
              Do you have a <em>story to tell?</em>
            </>
          }
          primary={{ label: "Book a 30-min call", href: CALL }}
        />
      </main>
    </div>
  );
}
