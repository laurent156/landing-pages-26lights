import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Workflow, Filter, Moon, Users } from "lucide-react";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { ToolStrip } from "@/components/sections/ToolStrip";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Hero } from "@/components/sections/Hero";
import { ExpertCards } from "@/components/sections/ExpertCards";
import { ProofLogos } from "@/components/sections/ProofLogos";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { revealDelay } from "@/lib/style";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { AiErpVisual } from "@/components/illustrations/AiErpVisual";

export const metadata: Metadata = {
  title: "26lights - Autonomous SME ERP",
  description:
    "ERP systems used to be too heavy for SMEs. Now, you can build a simple one with AI — around your real workflows, not the other way around.",
};

const CALL = "https://calendly.com/alicia-26lights/30min?month=2026-02";
const WHATSAPP = "https://wa.me/32492660089";

/** delay(ms) as the `--d` custom property the SVG/bar reveal animations key off. */
function d(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

function CheckDotIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4.5 8.2 2.6 2.6 4.4-5" />
    </svg>
  );
}



/** Feature card 2 — CRM/Inventory/Invoicing/Payroll modules checked off, already built. */
function CoreModulesVisual() {
  const rows = [
    { y: 6, label: "CRM" },
    { y: 38, label: "Inventory" },
    { y: 70, label: "Invoicing" },
    { y: 102, label: "Payroll" },
  ];
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="CRM, Inventory, Invoicing and Payroll modules, each already built">
        {rows.map((row, i) => (
          <g className="fv-step" style={d(60 + i * 90)} key={row.label}>
            <rect className="fv-node" x={8} y={row.y} width={284} height={24} rx={7} />
            <path className="fv-check" d={`m20 ${row.y + 12} 3.4 3.4 6-6.8`} />
            <text className="fv-label" x={40} y={row.y + 12} dy="0.32em">
              {row.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Feature card 3 — Discovery to AI Build to Live, in "2 WEEKS". */
function AiBuildVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="From discovery to an AI-built app live in two weeks">
        <g className="fv-step" style={d(60)}>
          <rect className="fv-node" x={4} y={52} width={86} height={32} rx={9} />
          <text className="fv-label" x={47} y={68} textAnchor="middle" dy="0.35em">
            Discovery
          </text>
        </g>
        <g className="fv-step" style={d(170)}>
          <path className="fv-link" d="M90 68 L107 68" />
        </g>
        <g className="fv-step" style={d(260)}>
          <rect className="fv-node-accent fv-pulse" x={107} y={52} width={86} height={32} rx={9} />
          <text className="fv-label-on" x={150} y={68} textAnchor="middle" dy="0.35em">
            AI Build
          </text>
        </g>
        <g className="fv-step" style={d(350)}>
          <path className="fv-link" d="M193 68 L210 68" />
        </g>
        <g className="fv-step" style={d(440)}>
          <rect className="fv-node" x={210} y={52} width={86} height={32} rx={9} />
          <circle cx={226} cy={68} r={7} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m222.5 68 2.4 2.4 4.2-4.6" />
          <text className="fv-label" x={240} y={68} dy="0.35em">
            Live
          </text>
        </g>
        <g className="fv-step" style={d(520)}>
          <rect x={218} y={24} width={66} height={18} rx={9} fill="var(--ink)" />
          <text x={251} y={33} textAnchor="middle" dy="0.32em" fill="#fff" fontSize={9} fontWeight={700} fontFamily="var(--mono)" letterSpacing={0.3}>
            2 WEEKS
          </text>
        </g>
      </svg>
    </div>
  );
}

const VALUE_ITEMS = [
  {
    title: "Your Workflow",
    body: "Data integrity at the heart of the system.",
    icon: <Workflow aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Minimize information input",
    body: "Ask only what is needed, when it's needed, avoiding data fatigue.",
    icon: <Filter aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Overnight changes",
    body: "Custom adaptations on demand, bypassing slow ERP release cycles.",
    icon: <Moon aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Unlimited users",
    body: "Scale your team without increasing your license costs.",
    icon: <Users aria-hidden="true" strokeWidth={1.8} />,
  },
];

/** "Why Custom" visual — a 2x2 grid of icon+title+body value points. */
function WhyCustomVisual() {
  return (
    <div className="value-grid-2">
      {VALUE_ITEMS.map((item) => (
        <div className="value-item" key={item.title}>
          <span className="value-icon">{item.icon}</span>
          <div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const PATH_CARDS = [
  { title: "Standard SaaS Selection", body: "If an existing software (Odoo, etc.) fits 90% of your needs, we help you select and configure it." },
  { title: "The Hybrid Bridge", body: "We add smart AI layers to your current \"old-school\" ERP to modernize it without a full migration." },
  { title: "Full Custom AI ERP", body: "If your workflows are unique, we build your tailored system from scratch." },
];

/** "Beyond the tool" visual — an auto-cycling off-the-shelf-to-fully-custom spectrum, paired
 * with 3 path cards that take turns lifting as the spectrum's active dot passes under them. */
function PathSpectrumVisual() {
  return (
    <>
      <div className="path-spectrum reveal">
        <div className="ps-labels">
          <span>Off-the-shelf</span>
          <span>Fully custom</span>
        </div>
        <div className="ps-bar">
          <div className="ps-bar-fill" />
        </div>
        <div className="ps-dots">
          <span className="ps-dot" />
          <span className="ps-dot" />
          <span className="ps-dot" />
        </div>
      </div>
      <div className="path-grid">
        {PATH_CARDS.map((card, i) => (
          <div className="path-card reveal" style={revealDelay(i * 80)} key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function AiErpPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              ERP systems used to be
              <br />
              too heavy for SMEs.
              <br />
              <em>Now, you can build a</em>
              <br />
              <em>simple one with AI.</em>
            </>
          }
          sub="We build your simple ERP around your real workflows, not the other way around. AI ERP is the flexible option for companies that don't fit standard packages."
          ctas={[{ label: "Book an ERP discovery call", href: "#packages" }]}
          wide
        />

        <ToolStrip
          caption="We build on the best AI frameworks."
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
          id="capabilities"
          screenLabel="What we can do"
          eyebrow="Capabilities"
          title="What we can do?"
          sub="We don't sell hype. We build engines that run your business better."
          items={[
            { visual: <AiErpVisual />, title: "Simple ERP Architecture", body: "Designing the leanest structure for your needs. We map your data without the bloat." },
            { visual: <CoreModulesVisual />, title: "Core Modules Built", body: "Rapid development of your essential business blocks (CRM, Inventory, Invoicing, etc.)." },
            { visual: <AiBuildVisual />, title: "AI-Assisted Build Method", body: "Using AI to accelerate the coding and integration process, delivering value in weeks, not months." },
          ]}
          ctas={[
            { label: "Explore Packages", href: "#packages" },
            { label: "Book a Discovery Call", href: CALL, variant: "outline" },
          ]}
        />

        <DetailSplit
          eyebrow="Why Custom?"
          title="For companies who don't fit standard ERP packages."
          paragraphs={[
            "Off-the-shelf software forces you to change how you work. We build a system that respects your unique competitive advantage.",
          ]}
          visual={<WhyCustomVisual />}
          flip
          bistre
        />

        <section className="features" id="beyond" data-screen-label="Beyond the tool">
          <div className="wrap">
            <div className="features-head">
              <div className="section-label reveal">Beyond The Tool</div>
              <h2 className="reveal">
                We don&apos;t just build tools. <span>We help you choose the right path.</span>
              </h2>
              <p className="sub-text reveal">
                AI ERP is a powerful option, but it&apos;s not the only one. We use our global ERP expertise to audit your needs and
                guide you toward the most cost-effective solution.
              </p>
            </div>
            <PathSpectrumVisual />
            <div className="hero-ctas reveal" style={{ ...revealDelay(240), marginTop: 44, justifyContent: "center" }}>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-outline">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <ExpertCards
          layout="stacked"
          eyebrow="The Squad"
          title="Tech core team - no one show, long term follow up."
          statusMeta={{ availableLabel: "Available for audit", chatLabel: "Chat on WhatsApp", chatHref: WHATSAPP }}
          experts={[
            {
              name: "Arik",
              role: "Business Strategy",
              body: "Aligning the ERP's architecture with your commercial ROI.",
              tags: [],
              photo: "/team/arik.png",
            },
            {
              name: "Olivier",
              role: "Tech Lead",
              body: "Senior architect focused on building robust, non-experimental systems.",
              tags: [],
              photo: "/team/olivier.jpg",
            },
            {
              name: "Renaud",
              role: "Tech Lead & Security",
              body: "Senior expert ensuring stable, secure implementations for your data.",
              tags: [],
              photo: "/team/renaud.jpg",
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
          id="packages"
          title="Pragmatic Pricing"
          sub="Transparent costs to start your automation journey."
          tiers={[
            {
              name: "Scope your AI ERP",
              bestFor: "A complete technical map and workflow audit.",
              price: "€900",
              period: "one-time",
              lede: "",
              features: ["Workflow Audit", "Data Architecture Map", "Roadmap Delivery"],
              cta: { label: "Select Plan", href: CALL },
            },
            {
              name: "2-Day Work Together",
              bestFor: "Building the first functional core module of your ERP.",
              price: "Custom Quote",
              lede: "",
              features: ["Rapid Prototyping", "Core Module Build", "Immediate Value"],
              cta: { label: "Get Quote", href: CALL },
              featured: true,
              flag: "Featured",
              face: { src: "/team/alicia-circle.png", alt: "Alicia Dahan" },
            },
            {
              name: "Custom Journey",
              bestFor: "For long-term builds and complex integrations.",
              price: "Contact Us",
              lede: "",
              features: ["Full Custom Dev", "Long-term Support", "Legacy Migration"],
              cta: { label: "Chat on WhatsApp", href: WHATSAPP },
            },
          ]}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/erp", "/tech/odoo-implementation", "/ai/powered-automation"]}
        />

        <FinalCta
          title={
            <>
              Ready to build your <em>ERP</em>?
            </>
          }
          primary={{ label: "Book discovery call", href: CALL }}
          contactEmail="alicia@26lights.com"
          phone="+32 492 66 00 89"
          location="Brussels / Paris"
        />
      </main>
    </div>
  );
}
