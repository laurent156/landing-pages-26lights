import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Compass, Gauge, UserCheck, ShieldCheck } from "lucide-react";
import { ToolStrip } from "@/components/sections/ToolStrip";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Hero } from "@/components/sections/Hero";
import { ValueSplit } from "@/components/sections/ValueSplit";
import { ExpertCards } from "@/components/sections/ExpertCards";
import { ProofLogos } from "@/components/sections/ProofLogos";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { AiPrototypingVisual } from "@/components/illustrations/AiPrototypingVisual";

export const metadata: Metadata = {
  title: "26lights - AI Prototype Sprint",
  description:
    "Don't fall in love with your first version. Explore 10x more possibilities and validate with users faster for roughly the cost of one traditional prototype.",
};

const CALL = "https://calendly.com/alicia-26lights/30min?month=2026-02";
const WHATSAPP = "https://wa.me/32492660089";

function MenuIcon() {
  return (
    <svg className="appcard-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
      <path d="M20 7L4 7" />
      <path d="M20 12L4 12" />
      <path d="M20 17L4 17" />
    </svg>
  );
}

function DeltaUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 7L14.6203 14.3347C13.6227 15.3263 13.1238 15.822 12.5051 15.822C11.8864 15.8219 11.3876 15.326 10.3902 14.3342L10.1509 14.0962C9.15254 13.1035 8.65338 12.6071 8.03422 12.6074C7.41506 12.6076 6.91626 13.1043 5.91867 14.0977L2 18M16.4179 7H22V12.5458" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path d="M3.74181 20.5545C4.94143 22 7.17414 22 11.6395 22H12.3607C16.8261 22 19.0589 22 20.2585 20.5545M3.74181 20.5545C2.54219 19.1091 2.95365 16.9146 3.77657 12.5257C4.36179 9.40452 4.65441 7.84393 5.7653 6.92196M20.2585 20.5545C21.4581 19.1091 21.0466 16.9146 20.2237 12.5257C19.6385 9.40452 19.3459 7.84393 18.235 6.92196M18.235 6.92196C17.1241 6 15.5363 6 12.3607 6H11.6395C8.46398 6 6.8762 6 5.7653 6.92196" />
      <path strokeLinecap="round" d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 5.6L19.4 9.4 13.8 11.2 12 16.8 10.2 11.2 4.6 9.4 10.2 7.6 12 2z" />
    </svg>
  );
}

function ValueIcon1() {
  return <Compass aria-hidden="true" strokeWidth={1.8} />;
}

function ValueIcon2() {
  return <Gauge aria-hidden="true" strokeWidth={1.8} />;
}

function ValueIcon3() {
  return <UserCheck aria-hidden="true" strokeWidth={1.8} />;
}

function ValueIcon4() {
  return <ShieldCheck aria-hidden="true" strokeWidth={1.8} />;
}

/** The hero's "stack of prototypes" visual — one real app mockup card up front, two ghost cards
 * fanned out behind it (v1.0 / v5.0). The visual metaphor for "we don't build one, we build 10."
 * Page-specific: extract to a shared component if a second page reaches for the same shape. */
function StackVisual() {
  return (
    <div className="stackwrap">
      <div className="stack-ghost v1">
        <span className="stack-tag">v1.0</span>
      </div>
      <div className="stack-ghost v5">
        <span className="stack-tag">v5.0</span>
      </div>
      <div className="appcard">
        <div className="appcard-head">
          <MenuIcon />
        </div>
        <div className="appcard-balance">
          <div className="appcard-label">Total balance</div>
          <div className="appcard-amount">$24,500.00</div>
          <div className="appcard-delta">
            <DeltaUpIcon />
            +12%
          </div>
        </div>
        <div className="appcard-actions">
          <span className="primary">Send</span>
          <span className="ghost">Request</span>
        </div>
        <div className="appcard-tx">
          <div className="appcard-tx-left">
            <span className="appcard-tx-icon">
              <BagIcon />
            </span>
            <div>
              <div className="appcard-tx-name">Apple Store</div>
              <div className="appcard-tx-cat">Electronics</div>
            </div>
          </div>
          <span className="appcard-tx-amt">-$299</span>
        </div>
        <div className="appcard-tx">
          <div className="appcard-tx-left">
            <span className="appcard-tx-icon">
              <BoltIcon />
            </span>
            <div>
              <div className="appcard-tx-name">Electricity</div>
              <div className="appcard-tx-cat">Utilities</div>
            </div>
          </div>
          <span className="appcard-tx-amt">-$45</span>
        </div>
        <div className="appcard-insight">
          <span className="appcard-insight-icon">
            <SparkleIcon />
          </span>
          <div>
            <div className="appcard-insight-label">AI insight</div>
            <div className="appcard-insight-txt">Optimize spending?</div>
          </div>
        </div>
      </div>
    </div>
  );
}


/** Feature 2's visual — one idea branching into three UX flows, the clearest one highlighted
 * and checked. */
function UxApproachesVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="One idea branching into three UX flows, with the clearest flow highlighted and checked">
        <g className="fv-step" style={{ "--d": "60ms" } as CSSProperties}>
          <rect className="fv-node" x={4} y={52} width={62} height={24} rx={7} />
          <text className="fv-label" x={35} y={64} textAnchor="middle" dy="0.35em">
            Idea
          </text>
        </g>
        <g className="fv-step" style={{ "--d": "170ms" } as CSSProperties}>
          <path className="fv-link" d="M66 64 C104 64, 110 20, 150 20" />
          <path className="fv-link" d="M66 64 C104 64, 110 64, 150 64" />
          <path className="fv-link" d="M66 64 C104 64, 110 108, 150 108" />
        </g>
        <g className="fv-step" style={{ "--d": "280ms" } as CSSProperties}>
          <rect className="fv-node" x={150} y={8} width={72} height={24} rx={7} />
          <text className="fv-label" x={186} y={20} textAnchor="middle" dy="0.35em">
            Flow A
          </text>
          <rect className="fv-node-accent fv-pulse" x={150} y={52} width={72} height={24} rx={7} />
          <text className="fv-label-on" x={186} y={64} textAnchor="middle" dy="0.35em">
            Flow B
          </text>
          <rect className="fv-node" x={150} y={96} width={72} height={24} rx={7} />
          <text className="fv-label" x={186} y={108} textAnchor="middle" dy="0.35em">
            Flow C
          </text>
        </g>
        <g className="fv-step" style={{ "--d": "390ms" } as CSSProperties}>
          <circle cx={250} cy={64} r={9} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m246.5 64 2.4 2.4 4.2-4.6" />
        </g>
      </svg>
    </div>
  );
}

/** Feature 3's visual — two early users whose feedback gets marked approved. */
function EarlyUsersVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="Two early users whose feedback gets marked approved">
        <g className="fv-step" style={{ "--d": "60ms" } as CSSProperties}>
          <circle className="fv-node" cx={30} cy={40} r={19} />
          <text className="fv-label" x={30} y={40} textAnchor="middle" dy="0.35em">
            U1
          </text>
          <circle className="fv-node" cx={30} cy={92} r={19} />
          <text className="fv-label" x={30} y={92} textAnchor="middle" dy="0.35em">
            U2
          </text>
        </g>
        <g className="fv-step" style={{ "--d": "180ms" } as CSSProperties}>
          <path className="fv-link" d="M49 40 C110 40, 110 55, 168 60" />
          <path className="fv-link" d="M49 92 C110 92, 110 76, 168 70" />
        </g>
        <g className="fv-step" style={{ "--d": "320ms" } as CSSProperties}>
          <rect className="fv-node-accent fv-pulse" x={168} y={42} width={122} height={46} rx={10} />
          <text className="fv-label-on" x={246} y={65} textAnchor="end" dy="0.35em">
            Approved
          </text>
          <path d="M256 65 l6.5 6.5 13-14" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </svg>
    </div>
  );
}

export default function AiPrototypingPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              Don&apos;t build one prototype.
              <br />
              <em>We build 10 with AI.</em>
            </>
          }
          sub="Don't fall in love with your first version. Explore 10x more possibilities and validate with users faster for roughly the cost of one traditional prototype."
          ctas={[
            { label: "Book a sprint intro", href: CALL },
            { label: "Contact an expert", href: WHATSAPP, variant: "ghost" },
          ]}
          visual={<StackVisual />}
        />

        <ToolStrip
          caption="We use the best tools to deliver 10x more value, faster."
          rows={[
            [
              { name: "Make", src: "/logos/tools/make.png", width: 120, height: 32 },
              { name: "Bolt.new", src: "/logos/tools/bolt-new.png", width: 120, height: 32 },
              { name: "Cursor", src: "/logos/tools/cursor.png", width: 120, height: 32 },
              { name: "Vercel", src: "/logos/tools/vercel.png", width: 140, height: 47, className: "tool-logo--boost-lg" },
              { name: "Lovable", src: "/logos/tools/lovable.png", width: 90, height: 23, className: "tool-logo--shrink-sm" },
            ],
            [
              { name: "Orchids", src: "/logos/tools/orchids.png", width: 120, height: 32 },
              { name: "Base44", src: "/logos/tools/base44.svg", width: 140, height: 47, className: "tool-logo--boost-lg" },
              { name: "OpenAI Codex", src: "/logos/tools/openai-codex.png", width: 120, height: 32 },
              { name: "Claude", src: "/logos/tools/claude.webp", width: 120, height: 32 },
            ],
          ]}
        />

        <FeatureCards
          id="solution"
          screenLabel="Stop guessing, start testing"
          eyebrow="High-speed exploration"
          title="Stop guessing. Start testing."
          sub="Why wait weeks for a single version? We leverage Bolt and Lovable to deliver a full product landscape in days."
          items={[
            { visual: <AiPrototypingVisual />, title: "10+ App Variations", body: "We don't just iterate; we diverge. Explore every angle of your product idea simultaneously." },
            { visual: <UxApproachesVisual />, title: "10+ UX Approaches", body: "Find the most intuitive flow by testing radically different user journeys side-by-side." },
            { visual: <EarlyUsersVisual />, title: "Test with Early Users", body: "Get real data immediately. Don't debate theories; put working models in front of users." },
          ]}
          ctas={[
            { label: "Book a sprint intro", href: CALL },
            { label: "Contact an expert", href: WHATSAPP, variant: "outline" },
          ]}
        />

        <ValueSplit
          title="Why explore 10 versions instead of one?"
          paragraph="Traditional development forces you to commit too early. Our AI-driven process allows for radical divergence at the start, ensuring you converge on the absolute best solution, not just the first one."
          items={[
            { icon: <ValueIcon1 />, title: "Broader product exploration", body: "See the full potential of your idea." },
            { icon: <ValueIcon2 />, title: "Faster decision cycles", body: "Compare working models, don't debate theories." },
            { icon: <ValueIcon3 />, title: "Better early validation", body: "Know what users want before the big build." },
            { icon: <ValueIcon4 />, title: "Lower product risk", body: "Avoid building the wrong thing." },
          ]}
        />

        <ExpertCards
          eyebrow="The architects"
          layout="stacked"
          title={
            <>
              The Squad Behind <span>the Machines.</span>
            </>
          }
          intro="Forget one-man shows. We provide a senior, multi-disciplinary trio with 14 years of experience and 200+ startups supported."
          statusMeta={{ availableLabel: "Available for sprints now", chatLabel: "Chat on WhatsApp", chatHref: WHATSAPP }}
          experts={[
            {
              name: "Arik",
              role: "Business & Product Vision",
              body: 'The architect of the "Why." Arik ensures your prototypes are commercially viable and aligned with your growth objectives.',
              tags: [],
              photo: "/team/arik.png",
              color: true,
            },
            {
              name: "Céline",
              role: "Product Mapping & UX Strategy",
              body: "Our ex-Sortlist expert. She transforms raw vision into structured \"product maps\" to guarantee every feature serves the user.",
              tags: [],
              photo: "/team/celine.jpg",
              color: true,
            },
            {
              name: "Laurent",
              role: "Branding & UI Design",
              body: "The guardian of visual excellence. Laurent ensures AI speed never compromises your brand identity, delivering world-class UI.",
              tags: [],
              photo: "/team/laurent.jpg",
              color: true,
            },
          ]}
        />

        <ProofLogos
          eyebrow="Trusted by visionaries"
          title={
            <>
              <em>14 years.</em> 200+ clients.
            </>
          }
          paragraph="We aren't just developers; we are Growth Architects who have been scaling businesses since 2012."
          logos={[
            { src: "/logos/cowboy.png", alt: "Cowboy" },
            { src: "/logos/lizy.png", alt: "Lizy" },
            { src: "/logos/sortlist-black.png", alt: "Sortlist" },
            { src: "/logos/ringtwice.png", alt: "RingTwice" },
            { src: "/logos/monizze.png", alt: "Monizze" },
            { src: "/logos/labbox.png", alt: "LABBOX" },
          ]}
        />

        <Pricing
          title="Packages"
          sub="Transparent pricing to validate your ideas."
          tiers={[
            {
              name: "Audit Your Prototype",
              bestFor: "A deep review of your current version.",
              price: "€500",
              period: "one-time",
              lede: "A deep review of your current version.",
              features: ["UX Flow Review", "Tech Feasibility Check", "Actionable Report"],
              cta: { label: "Book Audit", href: CALL },
            },
            {
              name: "2-Day AI Sprint",
              bestFor: "We build 10+ AI prototypes together.",
              price: "€2,500",
              period: "one-time",
              lede: "We build 10+ AI prototypes together.",
              features: ["2 Days Dedicated Work", "10+ Prototype Variations", "User Testing Setup"],
              cta: { label: "Start Sprint", href: CALL },
              featured: true,
              flag: "Most popular",
            },
            {
              name: "Custom Roadmap",
              bestFor: "For complex or long-term needs.",
              price: "Let's talk",
              lede: "For complex or long-term needs.",
              features: ["Tailored Scope", "Fractional Team", "Ongoing Iteration"],
              cta: { label: "Chat on WhatsApp", href: WHATSAPP },
              face: { src: "/team/alicia.png", alt: "Alicia, General Manager" },
            },
          ]}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/ai/production", "/tech/mvp", "/tech/dev-team"]}
        />

        <FinalCta
          title={
            <>
              Ready to turn your vision into <em>reality</em>
            </>
          }
          primary={{ label: "Book a Call with an expert", href: CALL }}
          contactEmail="alicia@26lights.com"
          phone="+32 492 66 00 89"
          location="Brussels / Paris"
        />
      </main>
    </div>
  );
}
