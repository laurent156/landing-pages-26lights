import type { Metadata } from "next";
import { PersonaHero } from "@/components/sections/PersonaHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { WhyAccordion } from "@/components/sections/WhyAccordion";
import { Bio } from "@/components/sections/Bio";
import { FinalCta } from "@/components/sections/FinalCta";
import { revealDelay } from "@/lib/style";
import { RelatedPages } from "@/components/sections/RelatedPages";

export const metadata: Metadata = {
  title: "Jacqueline C — Fundraising & Investor Strategy — 26lights",
  description:
    "Jacqueline spent years as a venture and growth investor across the UK, Europe, and Israel. She knows how investment decisions actually get made — and she gets founders ready before they walk into the room.",
};

const CALL = "https://calendly.com/alicia-26lights/30min?month=2026-06";

const SERVICES = [
  {
    num: "01",
    title: "Fundraising preparation & positioning",
    body: "Pitch materials, financial models, and a narrative that hold up under investor scrutiny — with a business case sharpened to match what investors actually look for.",
    deliverables: ["Pitch & narrative positioning", "Financial model review", "Investment-case sense-check"],
  },
  {
    num: "02",
    title: "Investor targeting",
    body: "The right investors identified by sector fit, geography, stage, business model, and growth trajectory — with a read on each one's quality, so you know who's worth pursuing.",
    deliverables: ["Targeted investor mapping", "Investor quality assessment", "What to expect from each partner"],
  },
  {
    num: "03",
    title: "Through the fundraising process",
    body: "A strategist on call during the live raise, helping you handle the questions that surface mid-process with sharp, credible answers.",
    deliverables: ["Live strategy advice", "Competitive & growth-assumption framing", "Investor Q&A preparation"],
  },
  {
    num: "04",
    title: "Deal structuring & closing",
    body: "Hands-on support through the final stretch — term sheet review, structuring, and negotiation, drawn from direct investment experience.",
    deliverables: ["Term sheet review", "Deal structuring & negotiation", "Valuation benchmarking"],
  },
];

export default function JacquelineCPage() {
  return (
    <div data-unit="business">
      <main>
        <PersonaHero
          title={
            <>
              Raise your round with
              <br />
              someone who has sat on
              <br />
              the <em>other side of the table.</em>
            </>
          }
          wide
          sub="Jacqueline spent years as a venture and growth investor across the UK, Europe, and Israel. She knows how investment decisions actually get made — and she gets founders ready before they walk into the room."
          ctas={[
            { label: "Book a free intro call", href: CALL },
            { label: "What she does", href: "#services", variant: "ghost" },
          ]}
          portrait={{ src: "/team/jacqueline.png", alt: "Jacqueline C" }}
          glass={{
            name: "Jacqueline C",
            title: "Investment advisory · 30+ transactions · $150M+ follow-on raised",
            tags: ["Fundraising", "Investor strategy", "Deal structuring"],
          }}
        />

        <TrustBar
          label="Background"
          logos={[
            { src: "/logos/imperial-college.png", alt: "Imperial College London" },
            { src: "/logos/stanford.png", alt: "Stanford University" },
            { src: "/logos/bcg.png", alt: "Boston Consulting Group" },
            { src: "/logos/hearst-ventures.png", alt: "Hearst Ventures" },
          ]}
        />

        <section className="services" id="services" data-screen-label="What she does">
          <div className="wrap">
            <div className="section-label reveal">What she does for clients</div>
            <h2 className="reveal">Support at every stage of your raise.</h2>
            <div className="services-grid">
              {SERVICES.map((service, i) => (
                <div className="svc-item reveal" style={revealDelay(i * 80)} key={service.num}>
                  <div className="svc-num">{service.num}</div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ul className="svc-deliverables">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a href={CALL} target="_blank" rel="noopener" className="btn btn-services reveal" style={revealDelay(320)}>
              Book a free intro call
            </a>
          </div>
        </section>

        <QuoteBand quote="Founders lose rounds they should have won — not on the business, but on how they walk into the room." />

        <WhyAccordion
          eyebrow="Why Jacqueline"
          title="An investor's instinct, on your side of the deal."
          intro="Seed through Series C. Rounds from $5M to $50M. Companies from early stage through ~$100M in revenue. Jacqueline brings the pattern recognition of someone who has evaluated hundreds of deals — and puts it to work for founders."
          photo={{ src: "/team/jacqueline-why.jpg", alt: "Jacqueline C" }}
          items={[
            {
              label: "She's been on the other side",
              body: "Years as a venture and growth investor mean she knows exactly how investment decisions are made — and what makes a partner say yes.",
            },
            {
              label: "Dual perspective",
              body: "Comfortable with both early-stage dynamics and later-stage growth pressures, having worked across the full growth spectrum.",
            },
            {
              label: "Pattern recognition + rigor",
              body: "Combines investor instinct with the strategic discipline of a former Boston Consulting Group strategist.",
            },
            {
              label: "Cross-border by default",
              body: "Operates across the UK, Europe, Israel and the U.S. — at ease in multicultural, cross-border fundraising contexts.",
            },
          ]}
        />

        <Bio
          name="Jacqueline C"
          role="Investment Advisory · Fundraising · Deal Strategy"
          photo={{ src: "/team/jacqueline-bio.jpg", alt: "Jacqueline C" }}
          paragraphs={[
            "An engineering degree from Imperial College London and a business degree from Stanford, followed by strategy work at Boston Consulting Group — Jacqueline built her career where analytical rigor meets real-world capital.",
            "As a venture and growth investor for the US conglomerate Hearst, she invested across the UK, Europe, and Israel, covering seed stage through Series C with total round sizes from $5M to $50M. She was involved in 30+ transactions across B2B and B2C, and the companies she backed went on to raise more than $150M in follow-on funding.",
            "Having worked with businesses from early stage through roughly $100M in revenue, she reads both the scrappy dynamics of a first round and the pressures of later-stage growth. That dual perspective — investor pattern recognition paired with strategic discipline — is what she now brings to the founders she advises.",
          ]}
        />

        <RelatedPages
          title="Other ways we help founders"
          paths={["/growth-plan", "/arik-azoulay", "/malorie-dreyfus"]}
        />

        <FinalCta
          title="Most founders pitch before they're ready. Walk in with an investor already in your corner."
          sub="One free call. No pitch deck required — just a straight read on how ready your round actually is."
          primary={{ label: "Book a free intro call", href: CALL }}
        />
      </main>
    </div>
  );
}
