/** One entry per page a visitor can be sent to, keyed by its route. `RelatedPages` reads this so
 * a cross-link never has to retype a label or a blurb — the header's mega-menu descriptions and
 * these are the same sentences, and keeping one copy is what stops them drifting apart the way
 * the client rosters and tool lists did. */
export type Offer = { label: string; blurb: string };

export const OFFERS: Record<string, Offer> = {
  "/tech-team": { label: "Tech & AI", blurb: "Every tech and AI offer in one place." },
  "/tech/mvp": { label: "MVP", blurb: "From idea to product in market." },
  "/tech/dev-team": { label: "Dev team as a service", blurb: "Senior developers, aligned with your vision." },
  "/tech/cto": { label: "CTO as a service", blurb: "Senior tech leadership, without the hire." },
  "/tech/audit": { label: "Codebase audit", blurb: "Code and infra reviewed before it costs you." },
  "/tech/drp": { label: "Disaster recovery plan", blurb: "A recovery plan for when things break." },
  "/tech/erp": { label: "ERP implementation", blurb: "Replace Excel with a system that fits." },
  "/tech/odoo-implementation": { label: "Odoo implementation", blurb: "Odoo, set up by Odoo architects." },
  "/ai/erp": { label: "AI ERP", blurb: "Built around your workflows, powered by AI." },
  "/ai/production": { label: "AI app development", blurb: "Secure, scalable, production-ready." },
  "/ai/prototyping": { label: "AI prototype sprint", blurb: "Ten times more directions, validated faster." },
  "/ai/powered-automation": { label: "AI-powered automations", blurb: "Affordable automation for SME workflows." },
  "/growth-plan": { label: "Growth & business plan", blurb: "Structure, fund and steer your growth." },
  "/arik-azoulay": { label: "Business sparring partner", blurb: "A partner who pressure-tests your plan." },
  "/jacqueline-c": { label: "Fundraising advisor", blurb: "An investor's eye before you pitch." },
  "/malorie-dreyfus": { label: "Negotiation expert", blurb: "By your side in high-stakes talks." },
  "/marketing": { label: "Marketing strategy & plan", blurb: "A plan built on your real audience." },
  "/branding": { label: "Branding & design", blurb: "Shape perception, build long-term value." },
  "/go-to-market": { label: "Go-to-market", blurb: "Acquisition strategy: research, SEO, ads." },
  "/nurturing": { label: "Follow-up, sales-led", blurb: "Stay top of mind between conversations." },
  "/nurturing-marketing-led": { label: "Follow-up, marketing-led", blurb: "An engine running behind your sales team." },
  "/video-creation": { label: "Video & podcasting", blurb: "Expert video content from day one." },
};
