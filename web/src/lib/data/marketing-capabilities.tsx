import type { ReactNode } from "react";
import { MessageCircle, TrendingUp, Search, Mail, MessageCircleMore, Send } from "lucide-react";

/** The capabilities the "… & Beyond: a holistic marketing approach" carousel draws from. Every
 * marketing-unit page closes on `BeyondSection` with a different subset of the same list, and
 * the real source repeats each capability's one-liner and icon word-for-word from page to page —
 * only the *title casing* drifts ("Social media / content strategy" on branding, "Social Media /
 * Content Strategy" on nurturing), which is why the title stays the caller's to pass. */
export type CapabilityKey =
  | "socialContent"
  | "performance"
  | "seoSea"
  | "emailAutomation"
  | "nurturing"
  | "prospecting";

const ICON_PROPS = { "aria-hidden": true, strokeWidth: 1.8 } as const;

const CAPABILITIES: Record<CapabilityKey, { body: string; icon: ReactNode }> = {
  socialContent: {
    body: "Engage your audiences with meaningful interactions",
    icon: <MessageCircle {...ICON_PROPS} />,
  },
  performance: {
    body: "Data-driven campaigns for measurable impact",
    icon: <TrendingUp {...ICON_PROPS} />,
  },
  seoSea: {
    body: "Enhance visibility and drive qualified traffic",
    icon: <Search {...ICON_PROPS} />,
  },
  emailAutomation: {
    body: "Nurture leads and build long-term relationships",
    icon: <Mail {...ICON_PROPS} />,
  },
  nurturing: {
    body: "Prospecting campaigns that drive insightful discussions",
    icon: <MessageCircleMore {...ICON_PROPS} />,
  },
  prospecting: {
    body: "Prospecting campaigns that start conversations",
    icon: <Send {...ICON_PROPS} />,
  },
};

/** One `BeyondSection` item: the shared one-liner and icon, with the title the page's own real
 * source gives it. */
export function capability(key: CapabilityKey, title: string) {
  return { title, ...CAPABILITIES[key] };
}
