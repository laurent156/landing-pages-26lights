import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Wrap } from "@/components/ui/Wrap";

type ArchCard = {
  photo: { src: string; alt: string };
  title: string;
  lede: string;
  paragraphs: string[];
  href: string;
  /** Names the destination instead of a third identical "Know more" — three cards in a row all
   * saying the same thing told the reader nothing about where each one went. */
  ctaLabel: string;
};

const ARCH_CARDS: ArchCard[] = [
  {
    photo: { src: "/branding/arch-business-coaching.png", alt: "Arik Azoulay coaching a client at a whiteboard" },
    title: "Business coaching",
    lede: "Smart and predictable growth.",
    paragraphs: [
      "We'll help you lay out and implement an ambitious yet realistic GROWTH PLAN, with all the relevant KPIs. We'll be with you at every step of the journey.",
      "Beyond funding, a good BUSINESS PLAN is critical to increase your chances of success and make informed decisions that support long-term growth.",
    ],
    href: "/growth-plan",
    ctaLabel: "See our growth services",
  },
  {
    photo: { src: "/branding/arch-tech-experts.png", alt: "Two 26lights developers pairing on a screen" },
    title: "Tech experts",
    lede: "Experienced tech architects, ready to help",
    paragraphs: [
      "Beyond writing code, our tech architects will be your strategic partners in success. We know how to deliver strong, scalable solutions, built to last.",
      "Our architects either hold a PhD in cybersecurity and artificial intelligence, or come from big companies (Amazon, Teads) or engineered for BNP Paribas Fortis' trading floor.",
    ],
    href: "/tech-team",
    ctaLabel: "See our tech team",
  },
  {
    photo: { src: "/branding/arch-marketing-sales.png", alt: "26lights marketing team mapping a strategy on a whiteboard" },
    title: "Marketing & sales",
    lede: "One team, one unified vision",
    paragraphs: [
      "Creating an outstanding product or service is just the beginning. Ensuring it reaches the right audience, through the right channel, at the perfect timing, within budget is a whole different challenge.",
      "Working with multiple specialized agencies can create gaps in coherence. Our model provides a unified vision and ensures effectiveness of each growth lever utilized.",
    ],
    href: "/marketing",
    ctaLabel: "See our marketing services",
  },
];

function ArrowIcon() {
  return <ArrowRight aria-hidden="true" strokeWidth={1.8} />;
}

/** The site-wide "We are growth architects" closer: same eyebrow, headline, stat line, intro
 * and three cards (Business / Tech / Marketing) on every service page that ends with it —
 * verified word-for-word identical between the live `branding` and `go-to-market` pages. Takes
 * no content props on purpose: this block doesn't vary page to page, only its position does. */
export function GrowthArchitects() {
  return (
    <section className="arch" data-screen-label="Growth architects">
      <div className="arch-inner">
        <div className="arch-head">
          <div className="section-label reveal">Empowering sustainable growth</div>
          <h2 className="reveal">
            We are <span>growth architects</span>
          </h2>
          <p className="reveal arch-stats">
            200 startups helped &middot; 14 years of experience &middot; Based in Brussels, Paris and Lausanne
          </p>
          <p className="reveal">
            For over 14 years, 26lights has partnered with more than 200 startups, scale-ups, and ambitious SMEs,
            guiding them to build sustainable and scalable businesses characterized by healthy growth and robust
            leadership. With offices in Brussels and Paris, our mission is to architect your company&apos;s next
            growth phase through a unique blend of Business, Tech, and Marketing expertise.
          </p>
        </div>
        <div className="arch-grid">
          {ARCH_CARDS.map((card) => (
            <div className="acard reveal" key={card.title}>
              <div className="acard-shot">
                <Image src={card.photo.src} alt={card.photo.alt} width={400} height={260} />
              </div>
              <h3>{card.title}</h3>
              <div className="acard-lede">{card.lede}</div>
              {card.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
              <a href={card.href} className="link-more">
                {card.ctaLabel}
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
