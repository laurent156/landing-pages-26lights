import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Check, X, TriangleAlert } from "lucide-react";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { ToolStrip } from "@/components/sections/ToolStrip";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Hero } from "@/components/sections/Hero";
import { ExpertCards } from "@/components/sections/ExpertCards";
import { ProofLogos } from "@/components/sections/ProofLogos";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { AiProductionVisual } from "@/components/illustrations/AiProductionVisual";

export const metadata: Metadata = {
  title: "From Vibe to Production — 26lights",
  description:
    "You've built the core with vibe coding. We provide the final 20% of engineering: secure, scalable, and ready for the market.",
};

const CALL = "https://calendly.com/alicia-26lights/30min?month=2026-06";
const AUDIT_CHECKOUT = "https://buy.stripe.com/00wdRa6Dp0AU9uh98R2880c";
const SPRINT_CHECKOUT = "https://buy.stripe.com/dRmaEY9PB0AUfSFdp72880b";
const WHATSAPP = "https://wa.me/32492660089";

function BadgeCheckIcon() {
  return <Check aria-hidden="true" size={16} strokeWidth={1.8} />;
}

function XIcon() {
  return <X aria-hidden="true" size={16} strokeWidth={1.8} />;
}

/** delay(ms) as the `--d` custom property the reveal animations key off. */
function d(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

function WarningIcon() {
  return <TriangleAlert aria-hidden="true" strokeWidth={1.8} />;
}

function TinyCheckIcon() {
  return <Check aria-hidden="true" strokeWidth={2} />;
}

/** The "80% trap" illustration — a real terminal: the AI-written line errors out at the
 * production wall, 26lights steps in, and the app ships. Lines stagger in via `.reveal` (each
 * carries its own --d), the error shakes and dims, "Shipped successfully." pulses once. */
function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-bar">
        <div className="code-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="code-file">production_ready.ts</span>
      </div>
      <div className="code-body">
        <div className="ln" style={d(0)}>
          <span className="n">1</span>
          <span>
            <span className="kw">import</span> {"{"} Security, Scale {"}"} <span className="kw">from</span> <span className="str">&apos;@26lights/core&apos;</span>;
          </span>
        </div>
        <div className="ln" style={d(0)}>
          <span className="n">2</span>
          <span />
        </div>
        <div className="ln" style={d(120)}>
          <span className="n">3</span>
          <span>
            <span className="kw">const</span> app = <span className="kw">new</span> <span className="fn">VibeApp</span>();
          </span>
        </div>
        <div className="ln" style={d(260)}>
          <span className="n">4</span>
          <span className="err">
            <WarningIcon />
            ERROR: production wall hit at 80%
          </span>
        </div>
        <div className="ln" style={d(1350)}>
          <span className="n">5</span>
          <span className="cm">// 26lights steps in…</span>
        </div>
        <div className="ln" style={d(1500)}>
          <span className="n">6</span>
          <span className="ok">
            <TinyCheckIcon />
            <span className="kw">await</span> app.<span className="fn">finalize</span>(Security.<span className="fn">audit</span>());
          </span>
        </div>
        <div className="ln" style={d(1650)}>
          <span className="n">7</span>
          <span className="ok">
            <TinyCheckIcon />
            <span className="kw">await</span> app.<span className="fn">deploy</span>();
          </span>
        </div>
        <div className="ln" style={d(1800)}>
          <span className="n">8</span>
          <span className="done">&gt; Shipped successfully.</span>
        </div>
      </div>
    </div>
  );
}

/** Feature card 1's visual — a mini editor that de-duplicates its own code: a copy-pasted
 * function gets struck through, collapses, and "Duplicate removed" appears. */
function DedupeVisual() {
  return (
    <div className="feat-visual feat-visual--code" aria-hidden="true">
      <div className="mini-editor">
        <div className="mini-editor-bar">
          <div className="code-dots">
            <i />
            <i />
            <i />
          </div>
          <span className="mini-editor-file">validators.js</span>
        </div>
        <div className="mini-editor-body">
          <div className="mc-row">
            <span className="kw">function</span> <span className="fn">isValid</span>(e) {"{"}
          </div>
          <div className="mc-row mc-indent">
            <span className="mc-text">
              <span className="kw">return</span> e.<span className="fn">includes</span>(<span className="str">&apos;@&apos;</span>); {"}"}
            </span>
          </div>
          <div className="mc-dup-block">
            <div className="mc-row mc-dup-row">
              <span className="mc-text">
                <span className="kw">function</span> <span className="fn">checkValid</span>(e) {"{"}
              </span>
            </div>
            <div className="mc-row mc-dup-row mc-indent">
              <span className="mc-text">
                <span className="kw">return</span> e.<span className="fn">includes</span>(<span className="str">&apos;@&apos;</span>); {"}"}
              </span>
            </div>
          </div>
          <div className="mc-flag">
            <i className="mc-flag-dot" />
            Duplicate removed
          </div>
        </div>
      </div>
    </div>
  );
}

/** Feature card 2's visual — Stripe/OAuth/Custom API nodes connect to "Your app" through links
 * that visibly harden (dashed → solid, grey → green) as each one checks out. */
function IntegrationVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="Stripe, OAuth and API services connected to your app through secured links">
        <g className="fv-step" style={d(60)}>
          <rect className="fv-node" x={4} y={10} width={76} height={24} rx={7} />
          <text className="fv-label" x={42} y={22} textAnchor="middle" dy="0.35em">
            Stripe
          </text>
          <rect className="fv-node" x={4} y={52} width={76} height={24} rx={7} />
          <text className="fv-label" x={42} y={64} textAnchor="middle" dy="0.35em">
            OAuth
          </text>
          <rect className="fv-node" x={4} y={94} width={76} height={24} rx={7} />
          <text className="fv-label" x={42} y={106} textAnchor="middle" dy="0.35em">
            Custom API
          </text>
        </g>
        <g className="fv-step" style={d(170)}>
          <path className="fv-link" d="M80 22 C122 22, 128 56, 168 62" />
          <path className="fv-link" d="M80 64 C122 64, 130 64, 168 64" />
          <path className="fv-link" d="M80 106 C122 106, 128 72, 168 66" />
        </g>
        <g className="fv-step" style={d(280)}>
          <circle cx={124} cy={32} r={8} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m120.5 32 2.4 2.4 4.2-4.6" />
          <circle cx={124} cy={64} r={8} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m120.5 64 2.4 2.4 4.2-4.6" />
          <circle cx={124} cy={96} r={8} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m120.5 96 2.4 2.4 4.2-4.6" />
        </g>
        <g className="fv-step" style={d(390)}>
          <rect className="fv-node-accent fv-pulse" x={168} y={46} width={112} height={36} rx={9} />
          <text className="fv-label-on" x={224} y={64} textAnchor="middle" dy="0.35em">
            Your app
          </text>
        </g>
      </svg>
    </div>
  );
}


/** The hero's "development progress" glass card — the page's central visual metaphor (AI sprints
 * to 80%, stalls at "the wall", 26lights pushes it to 100%). Page-specific: extract to a shared
 * component if a second page reaches for the same before/after progress-bar shape. */
function ProgressCard() {
  return (
    <div className="prog-card">
      <div className="prog-head">
        <span className="prog-title">Development progress</span>
        <span className="prog-val">
          80% → <b>100%</b>
        </span>
      </div>
      <div className="prog-track">
        <div className="prog-fill" />
        <div className="prog-wall" />
      </div>
      <div className="prog-scale">
        <span>Idea</span>
        <span className="wall">The wall</span>
        <span className="end">Production</span>
      </div>
      <div className="prog-list">
        <div className="prog-item bad">
          <XIcon />
          Security vulnerabilities
        </div>
        <div className="prog-item good">
          <BadgeCheckIcon />
          Audited &amp; hardened security
        </div>
        <div className="prog-item bad">
          <XIcon />
          Database logic that won&apos;t scale
        </div>
        <div className="prog-item good">
          <BadgeCheckIcon />
          Built to scale under real traffic
        </div>
      </div>
    </div>
  );
}

export default function AiProductionPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              AI gets you fast
              <br />
              to 80%. <em>We take you</em>
              <br />
              <em>to 100%.</em>
            </>
          }
          sub="You've built the core with vibe coding. We provide the final 20% of engineering: secure, scalable, and ready for the market."
          ctas={[
            { label: "Buy the €500 audit", href: AUDIT_CHECKOUT },
            { label: "Book a free 30-min call", href: CALL, variant: "ghost" },
          ]}
          visual={<ProgressCard />}
          visualAlign="stretch"
        />

        <ToolStrip
          caption="We provide the final 20% for apps built with tools like"
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

        <DetailSplit
          eyebrow="The problem"
          title={
            <>
              Escape the 80% trap. <span>Ship your AI app.</span>
            </>
          }
          paragraphs={[
            "Vibe coding is magic until you hit the production wall. Most AI-built projects stall right before launch, because AI struggles with the invisible 20%: real security, complex logic refactoring, and infrastructure that scales.",
          ]}
          visual={<CodeCard />}
          cta={{ label: "Buy the €500 audit", href: AUDIT_CHECKOUT, strong: true }}
          alt
        />

        <FeatureCards
          id="solution"
          screenLabel="What we do"
          eyebrow="What we do for you"
          title="From a working demo to a scalable product."
          sub="AI tools are incredible at building interfaces, but they struggle with production-grade logic. We step in to clean up your code and make sure your app doesn't break the moment you go live."
          items={[
            { visual: <DedupeVisual />, title: "Code sanitization & logic cleanup", body: "AI-generated code is often redundant. We refactor your core logic by hand to cut technical debt and keep your app workable for the next round of AI prompts." },
            { visual: <IntegrationVisual />, title: "Hardened third-party integrations", body: "Reliable connections for Stripe payments, OAuth logins, and custom APIs, tested against the edge cases that cause silent failures once real users show up." },
            { visual: <AiProductionVisual />, title: "Real-world security audit", body: "A demo can get away with shortcuts. A live product can't. We run deep security testing to protect user data and meet industry compliance standards." },
          ]}
        />

        <ExpertCards
          eyebrow="Meet your architects"
          title={
            <>
              Seniority matters. <span>Meet the experts behind the code.</span>
            </>
          }
          intro="We don't outsource. Your project is reviewed by PhDs in computer science, with 20+ years of engineering experience between them, including 13 years right here at 26lights. Reading and re-architecting code, whichever tool wrote it, is exactly what that depth of training is for."
          meta={{ lead: "In-house team", detail: "Based in Brussels & Paris" }}
          experts={[
            {
              name: "Olivier",
              role: "Tech Lead",
              body: "Expert in scalable architecture and system integration. Makes sure your technical foundation can handle growth from day one.",
              tags: ["Architecture", "Scalability"],
              photo: "/team/olivier.jpg",
            },
            {
              name: "Renaud",
              role: "Tech Lead",
              body: "Specialist in backend robustness, security protocols, AI and DevOps. Focused on hardening your infrastructure against vulnerabilities.",
              tags: ["Security", "DevOps"],
              photo: "/team/renaud.jpg",
            },
          ]}
        />

        <ProofLogos
          eyebrow="Trusted by builders"
          title={
            <>
              <em>14 years.</em> 200+ clients.
            </>
          }
          paragraph="We aren't just developers. We're growth architects who have been scaling businesses since 2012."
          logos={[
            { src: "/logos/labbox.png", alt: "LABBOX" },
            { src: "/logos/monizze.png", alt: "Monizze" },
            { src: "/logos/ringtwice.png", alt: "RingTwice" },
            { src: "/logos/sortlist-black.png", alt: "Sortlist" },
            { src: "/logos/lizy.png", alt: "Lizy" },
            { src: "/logos/cowboy.png", alt: "Cowboy" },
          ]}
        />

        <Pricing
          title="Three paths to production"
          sub="Transparent pricing to get you unblocked and live."
          tiers={[
            {
              name: "The 10-hour tech lead sprint",
              bestFor: "Best for: you already know what's broken.",
              price: "€1,250",
              period: "one-time",
              lede: "You need a senior expert to dive in and unblock your project now.",
              features: ["10 hours of dedicated execution", "Code fixes and hardened integrations", "No fluff, no long meetings"],
              cta: { label: "Buy 10h support", href: SPRINT_CHECKOUT },
            },
            {
              name: "The ship-ready audit",
              bestFor: "Best for: you're not sure yet where the risk is.",
              price: "€500",
              period: "one-time",
              lede: "Identify mission-critical leaks and secure your launch.",
              features: ["5-hour deep dive with a senior lead", "Security & scalability report", "Roadmap of the top 5 priority fixes"],
              cta: { label: "Buy the €500 audit", href: AUDIT_CHECKOUT },
              featured: true,
              flag: "Most requested",
              callLink: { label: "Prefer a call first? Book free 30-min call", href: CALL },
            },
            {
              name: "Custom growth path",
              bestFor: "Best for: you want an ongoing technical partner.",
              price: "Let's talk",
              lede: "Fractional CTO and long-term scaling, scoped to your roadmap.",
              features: ["Tailored scope", "Fractional team", "Ongoing iteration"],
              cta: { label: "Message on WhatsApp", href: WHATSAPP },
              face: { src: "/team/alicia.png", alt: "Alicia, General Manager" },
            },
          ]}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/ai/prototyping", "/tech/dev-team", "/tech/cto"]}
        />

        <FinalCta
          title={
            <>
              Ready to turn your vibe into a <em>venture?</em>
            </>
          }
          sub="Start with a free 30-minute call, or buy the audit and get a clear picture of what stands between your prototype and production."
          primary={{ label: "Book a free 30-min call", href: CALL }}
          contactEmail="alicia@26lights.com"
          phone="+32 492 66 00 89"
          location="Brussels & Paris"
        />
      </main>
    </div>
  );
}
