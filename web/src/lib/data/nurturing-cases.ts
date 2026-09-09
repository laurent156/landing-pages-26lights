import type { CaseItem } from "@/components/sections/CaseResults";

/** The three nurturing engagements, identical word-for-word and screenshot-for-screenshot on
 * both real nurturing pages (sales-led and marketing-led) — hence shared rather than copied. */
export const NURTURING_CASES: CaseItem[] = [
  {
    company: "Evoluno",
    photo: { src: "/nurturing/case-evoluno.png", alt: "Evoluno nurturing campaign screenshot" },
    result: "Build a multichannel nurturing machine to activate hot and cold leads",
    tags: ["Nurturing strategy", "Content creation", "Webinar strategy", "Data collection", "Lead scoring", "Visual identity"],
  },
  {
    company: "Corset & Daum",
    photo: { src: "/nurturing/case-corsetdaum.png", alt: "Corset & Daum content marketing campaign screenshot" },
    result: "Implement a multichannel content marketing strategy to appeal both doctors and patients",
    tags: ["Marketing strategy", "High impact content", "Brand visibility", "Sales materials"],
  },
  {
    company: "Aydo",
    photo: { src: "/nurturing/case-aydo.png", alt: "Aydo content marketing campaign screenshot" },
    result: "Build a content machine across several audiences to build trust and help sales team convert",
    tags: ["Marketing strategy", "High impact content", "Brand visibility", "Sales materials"],
  },
];
