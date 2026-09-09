import type { Metadata } from "next";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PersonaHero } from "@/components/sections/PersonaHero";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { WhyCards } from "@/components/sections/WhyCards";
import { CaseResults } from "@/components/sections/CaseResults";
import { RateTable } from "@/components/sections/RateTable";
import { Bio } from "@/components/sections/Bio";
import { FinalCta } from "@/components/sections/FinalCta";
import { RelatedPages } from "@/components/sections/RelatedPages";

export const metadata: Metadata = {
  title: "Malorie Dreyfus — Negotiation & Conflict Strategy — 26lights",
  description:
    "Malorie Dreyfus prepares, advises, and stands beside founders and leaders when the outcome is not guaranteed. Negotiation, conflict, emergency situations.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

const RECOGNIZE_ITEMS = [
  {
    num: "01",
    title: "A high-stakes deal is on the table.",
    body: "A contract renewal, an investor discussion, a strategic partnership. You've done the prep - but you know the other side will push hard, and you don't want to find out what you missed after the fact.",
  },
  {
    num: "02",
    title: "A negotiation is going sideways - right now.",
    body: "You're mid-discussion and it's drifting in the wrong direction. You need a sharp outside read, fast. Not tomorrow.",
  },
  {
    num: "03",
    title: "A conflict is fracturing your team.",
    body: "Two people who won't talk. A manager losing ground. A tension that's starting to cost you. It won't resolve on its own - and the longer it runs, the more it spreads.",
  },
  {
    num: "04",
    title: "Your relationship with the other party is the problem.",
    body: "You're too close, too exposed, or too invested to negotiate cleanly. You need someone to take the table in your place, with your interests at the center.",
  },
  {
    num: "05",
    title: "Your team negotiates without a framework.",
    body: "Every day, your people handle objections, manage friction, and close decisions - without method. That gap compounds quietly until it doesn't.",
  },
  {
    num: "06",
    title: "A reorganization is straining everything.",
    body: "Merger, restructuring, strategic disagreement at the leadership level. The tools won't fix it. The human dynamics will.",
  },
];

const WAYS = [
  {
    lead: "01 · Accompaniment & Mandate",
    title: "At your side or in your place",
    body:
      "We prepare together - situation analysis, file construction, pre-negotiation de-escalation, simulation. And if necessary, Malorie can be present on the day. For cases where you prefer to delegate entirely: she conducts the negotiations in your place, within the framework you've defined, with full reporting at every step.",
  },
  {
    lead: "02 · Emergency Consulting",
    title: "Unblocking what can't wait",
    body:
      "A conflict erupts, a negotiation derails, an urgent decision needs to be made. You book a slot online, we analyze the situation together - stakes, dynamics, options - and you leave with a clear course of action. By video or phone, billed by the hour, no commitment.",
  },
  {
    lead: "03 · Team Training",
    title: "Building the right reflexes",
    body:
      "Built from your real challenges, on two tracks: negotiation & influence, or conflict management & team alignment. Active methodology - practical cases adapted to your situation, role-play, debrief. Materials provided to participants, directly applicable.",
  },
];

export default function MalorieDreyfusPage() {
  return (
    <div data-unit="business">
      <main>
        <PersonaHero
          title={
            <>
              Your next <em>high-stakes</em>
              <br />
              <em>negotiation</em> deserves
              <br />
              more than gut instinct.
            </>
          }
          wide
          sub={
            <>
              <strong>Malorie Dreyfus</strong> prepares, advises, and stands beside founders and leaders when the outcome is not
              guaranteed. Negotiation, conflict, emergency situations.
            </>
          }
          ctas={[{ label: "Book a free 30-min discovery call", href: CALL }]}
          portrait={{ src: "/team/Malorie-Dreyfus.png", alt: "Malorie Dreyfus" }}
          glass={{
            name: "Malorie Dreyfus",
            title: "12+ years in high-stakes international negotiations",
            tags: ["HEC Paris", "Deloitte"],
          }}
        />

        <section className="recognize" data-screen-label="Do you recognize this">
          <div className="wrap">
            <h2 className="reveal">Do you recognize this?</h2>
            <div className="recognize-grid">
              {RECOGNIZE_ITEMS.map((item) => (
                <div className="r-item reveal" key={item.num}>
                  <div className="num">{item.num}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
            <div className="recognize-cta reveal">
              <span className="hint">If any of this sounds familiar</span>
              <a href={CALL} target="_blank" rel="noopener" className="btn btn-wide">
                Book a free 30-min call with Malorie
              </a>
            </div>
          </div>
        </section>

        <QuoteBand quote="Behind every stated position, there's a real interest. Most people never find it. That's where deals are lost." />

        <WhyCards
          title="Why this works differently"
          cta={{ label: "Book a free 30-min discovery call", href: CALL }}
          cards={[
            {
              title: "A sparring partner, not a framework.",
              body: "The real people, the real history, the real stakes. Not a methodology applied to your problem. Your problem, worked directly.",
            },
            {
              title: "She reads what's not being said.",
              body: "Power dynamics, hidden agendas, fear-driven positions - these are the real drivers of most negotiations. Recognizing them early, and knowing how to use them, changes everything.",
            },
            {
              title: "She can be in the room.",
              body: "For cases where the dynamic calls for it, Malorie can be present in the negotiation - as a support, an observer, or a lead. Not a background advisor. Fully in the situation.",
            },
            {
              title: "She's available when it can't wait.",
              body: "A session can be activated within hours. No retainer, no onboarding, no friction. You bring the situation, you leave with a line of action.",
            },
          ]}
        />

        <FeatureGrid
          statement="Three ways to work together"
          screenLabel="Three ways to work together"
          columns={3}
          alt
          items={WAYS}
        />

        <CaseResults
          eyebrow="Client results"
          title="What actually changes"
          items={[
            {
              meta: "Grand groupe · Marketplace e-commerce",
              stat: "+18%",
              result: "revenue with a strained supplier",
              body: "Deteriorating relationship with a key referral supplier, creating internal tension and revenue risk. After restructuring the commercial relationship and supporting renegotiation of the contractual framework: relationship stabilised long-term.",
            },
            {
              meta: "ETI industrielle · Réorganisation managériale",
              stat: "20% → 65%",
              result: "of decisions delegated within 6 months",
              body: "CEO identified as the bottleneck: every decision routed through him, teams under strain, growth stalled. Four months of work: decision mapping, trust dynamics, and a delegation framework accepted by everyone.",
            },
            {
              meta: "Équipes commerciales · Formation négociation",
              stat: "9 / 11",
              result: "participants apply the method within one week",
              body: "Teams regularly facing clients pushing to expand scope without compensation, and suppliers in strong positions. One-day training on negotiation fundamentals: reading power dynamics, anchoring, managing concessions, and posture under pressure. Measurable reduction in concessions granted without counterpart.",
            },
          ]}
        />

        <RateTable
          title="Rates"
          rows={[
            {
              name: "On-demand consulting",
              desc: "Diagnosis and recommendations by video or phone, billed by the hour. Activate directly via Calendly.",
              price: "260 €",
              period: "/ h excl. VAT",
              cta: { label: "Book a call", href: CALL },
            },
            {
              name: "3-hour pack",
              desc: "In-depth diagnosis with file follow-up over several days. Available between sessions, no commitment.",
              price: "700 €",
              period: "excl. VAT",
              cta: { label: "Book a call", href: CALL },
            },
            {
              name: "Negotiation mandate",
              desc: "Full file preparation, dedicated working sessions, optional on-site presence, final debrief.",
              price: "4 500 €",
              period: "per mission, excl. VAT",
              cta: { label: "Get in touch", href: CALL },
              badge: "Most requested",
              featured: true,
            },
            {
              name: "Team training",
              desc: "3 levels, in-person or remote. Case studies adapted to your context, materials included.",
              price: "1 800 €",
              period: "excl. VAT",
              cta: { label: "Book a call", href: CALL },
            },
          ]}
        />

        <Bio
          name="Malorie Dreyfus"
          role="Negotiation · Influence · Growth Strategy"
          photo={{ src: "/team/malorie-bio.png", alt: "Malorie Dreyfus" }}
          grayscale
          paragraphs={[
            "HEC graduate and former Deloitte consultant, Malorie built her career at the intersection of strategy, negotiation, and influence dynamics - first with major international development organizations, now as an independent growth strategy consultant.",
            "She works with executives, entrepreneurs, and teams in high-pressure, multicultural environments. Operating in contexts where instability and uncertainty are the norm, she has developed a sharp reading of power dynamics and an attention to the invisible forces that shift a situation, a contract, a relationship.",
            "Behind every negotiation, there are individuals with their interests, their fears, their blind spots. That's where she works.",
          ]}
        />

        <RelatedPages
          title="Other ways we help founders"
          paths={["/growth-plan", "/arik-azoulay", "/jacqueline-c"]}
        />

        <FinalCta
          title="Stop improvising in the moments that count."
          sub="Start with a free 30-minute call. No commitment. One conversation is enough to know if we can do something together."
          primary={{ label: "Book a free 30-min call", href: CALL }}
          secondaryLink={{ label: "Or send an email", href: "mailto:contact@26lights.com" }}
        />
      </main>
    </div>
  );
}
