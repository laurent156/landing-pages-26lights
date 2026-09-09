import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Folder, LayoutTemplate, Clock, ShieldCheck } from "lucide-react";
import { ToolStrip } from "@/components/sections/ToolStrip";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Hero } from "@/components/sections/Hero";
import { ExpertCards } from "@/components/sections/ExpertCards";
import { ProofLogos } from "@/components/sections/ProofLogos";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { AutomationPipelineVisual } from "./AutomationPipelineVisual";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { AiAutomationVisual } from "@/components/illustrations/AiAutomationVisual";

export const metadata: Metadata = {
  title: "26lights - AI-Powered Automation",
  description:
    "Automation used to be too expensive for most SMEs. With AI, it isn't anymore. We help SMEs unlock AI-powered task automation — quickly, pragmatically, and affordably.",
};

const CALL = "https://calendly.com/alicia-26lights/30min?month=2026-02";
const WHATSAPP = "https://wa.me/32492660089";

/** delay(ms) as the `--d` custom property the SVG reveal animations key off. */
function d(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

/** Feature card 1 — a set of automation opportunities ranked by ROI, the best one highlighted. */
function OpportunityMapVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="A set of automation opportunities ranked by ROI, with the highest one highlighted">
        <g className="fv-step" style={d(60)}>
          <rect className="fv-node" x={20} y={70} width={40} height={38} rx={6} />
          <rect className="fv-node" x={76} y={50} width={40} height={58} rx={6} />
          <rect className="fv-node-accent fv-pulse" x={132} y={20} width={40} height={88} rx={6} />
          <rect className="fv-node" x={188} y={60} width={40} height={48} rx={6} />
        </g>
        <g className="fv-step" style={d(220)}>
          <rect x={128} y={4} width={80} height={18} rx={9} fill="var(--ink)" />
          <text x={168} y={13} textAnchor="middle" dy="0.32em" fill="#fff" fontSize={9} fontWeight={700} fontFamily="var(--mono)" letterSpacing={0.3}>
            HIGH ROI
          </text>
        </g>
      </svg>
    </div>
  );
}


/** Feature card 3 — a central AI agent handling support, data entry and lead qualification. */
function CustomAgentsVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="A central AI agent handling support, data entry and lead qualification">
        <g className="fv-step" style={d(60)}>
          <circle cx={150} cy={46} r={28} fill="none" stroke="#E4E4EE" strokeWidth={1.4} />
          <circle className="fv-pulse" cx={150} cy={46} r={28} fill="none" stroke="var(--accent)" strokeWidth={1.4} strokeDasharray="3 5" />
          <circle className="fv-node-accent" cx={150} cy={46} r={18} />
          <path d="M143 46l5 5 9-10" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
        <g className="fv-step" style={d(220)}>
          <rect className="fv-node" x={24} y={96} width={72} height={24} rx={7} />
          <text className="fv-label" x={60} y={108} textAnchor="middle" dy="0.35em">
            Support
          </text>
          <rect className="fv-node" x={114} y={96} width={72} height={24} rx={7} />
          <text className="fv-label" x={150} y={108} textAnchor="middle" dy="0.35em">
            Data Entry
          </text>
          <rect className="fv-node" x={204} y={96} width={72} height={24} rx={7} />
          <text className="fv-label" x={240} y={108} textAnchor="middle" dy="0.35em">
            Lead Qual.
          </text>
        </g>
      </svg>
    </div>
  );
}

const SHIFT_CARDS = [
  {
    title: "Fewer Custom Builds",
    body: "Reducing complexity and unnecessary costs.",
    icon: <Folder aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "More Reusable Patterns",
    body: "Leveraging proven frameworks.",
    icon: <LayoutTemplate aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Faster Validation",
    body: "Proving ROI in record time.",
    icon: <Clock aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    title: "Unlock Scaling",
    body: "Freeing your team from bottlenecks.",
    icon: <ShieldCheck aria-hidden="true" strokeWidth={1.8} />,
  },
];

export default function AiPoweredAutomationPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title={
            <>
              Automation used to
              <br />
              be too expensive
              <br />
              for most SMEs.
              <br />
              <em>With AI, it isn&apos;t</em>
              <br />
              <em>anymore.</em>
            </>
          }
          sub="We help SMEs unlock AI-powered task automation — quickly, pragmatically, and affordably."
          ctas={[
            { label: "Schedule an SME scan", href: CALL },
            { label: "Chat with us", href: WHATSAPP, variant: "ghost" },
          ]}
          visual={<AutomationPipelineVisual />}
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
          eyebrow="Pragmatic AI"
          title="What we can do?"
          sub="We don't sell hype. We build engines that run your business better."
          items={[
            { visual: <OpportunityMapVisual />, title: "Automation Opportunity Map", body: "ROI-first prioritization to identify exactly where AI saves you the most time and money before writing a single line of code." },
            { visual: <AiAutomationVisual />, title: "AI-Assisted Workflows", body: "Automating manual, repetitive tasks to streamline your operations. Connect your CRM, Email, and Tools into one intelligent flow." },
            { visual: <CustomAgentsVisual />, title: "Custom AI Agents", body: "We build and deploy your dedicated AI agent to handle specific business functions like customer support, data entry, or lead qualification." },
          ]}
          ctas={[
            { label: "Schedule an SME scan", href: CALL },
            { label: "Chat with us", href: WHATSAPP, variant: "outline" },
          ]}
        />

        <FeatureCards
          id="value-shift"
          screenLabel="The value shift"
          tone="dark"
          columns={4}
          eyebrow="The Value Shift"
          title="What used to cost months now takes days."
          sub="The old way of building software is slow and expensive. We leverage proven automation frameworks to skip the boilerplate and get straight to value."
          items={SHIFT_CARDS.map((card) => ({ title: card.title, body: card.body, icon: card.icon }))}
        />

        <ExpertCards
          layout="stacked"
          eyebrow="Tech Core Team"
          title="No One-Man Show."
          intro="We provide long-term follow-up with a senior multi-disciplinary team. We build systems, not just scripts."
          statusMeta={{ availableLabel: "Available for audit", chatLabel: "Chat with the team", chatHref: WHATSAPP }}
          experts={[
            {
              name: "Arik",
              role: "Business Strategy",
              body: "Ensuring automation drives real business growth and ROI. He bridges the gap between tech and profit.",
              tags: [],
              photo: "/team/arik.png",
            },
            {
              name: "Olivier",
              role: "Tech Lead",
              body: "20+ years of experience in high-level architecture. Ensures your automations are scalable and secure.",
              tags: [],
              photo: "/team/olivier.jpg",
            },
            {
              name: "Renaud",
              role: "Tech Lead & Security",
              body: "Senior expert focused on robust implementation. He ensures we build stable systems that don't break.",
              tags: [],
              photo: "/team/renaud.jpg",
            },
          ]}
        />

        <ProofLogos
          eyebrow="Trusted by Visionaries"
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
          title="Pragmatic Pricing"
          sub="Transparent costs to start your automation journey."
          tiers={[
            {
              name: "Build Automation Map",
              bestFor: "A complete roadmap prioritizing your highest ROI automation opportunities.",
              price: "€900",
              period: "one-time",
              lede: "",
              features: ["Process Audit", "ROI Calculation", "Implementation Plan"],
              cta: { label: "Get Roadmap", href: CALL },
            },
            {
              name: "2-Day Work Together",
              bestFor: "Rapid implementation of your first AI workflows or agents.",
              price: "Custom Quote",
              lede: "",
              features: ["Rapid Setup (48h)", "Live Implementation", "Team Training"],
              cta: { label: "Start Now", href: CALL },
              featured: true,
              flag: "Featured",
              face: { src: "/team/alicia-circle.png", alt: "Alicia Dahan" },
            },
            {
              name: "Let's Talk",
              bestFor: "Long-term scaling and custom agent development.",
              price: "Contact Us",
              lede: "",
              features: ["Complex Integrations", "Ongoing Support", "Dedicated Team"],
              cta: { label: "Chat on WhatsApp", href: WHATSAPP },
            },
          ]}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/ai/erp", "/tech/erp", "/tech/audit"]}
        />

        <FinalCta
          title={
            <>
              Ready to automate your <em>growth</em>?
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
