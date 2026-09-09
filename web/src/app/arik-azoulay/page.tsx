import type { Metadata } from "next";
import { PersonaHero } from "@/components/sections/PersonaHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyAccordion } from "@/components/sections/WhyAccordion";
import { Testimonials } from "@/components/sections/Testimonials";
import { RateTable } from "@/components/sections/RateTable";
import { FinalCta } from "@/components/sections/FinalCta";
import { Bistre } from "@/components/ui/Bistre";
import { revealDelay } from "@/lib/style";
import { MethodFunnel } from "@/components/sections/MethodFunnel";
import { RelatedPages } from "@/components/sections/RelatedPages";

export const metadata: Metadata = {
  title: "Arik Azoulay – Business Sparring Partner · 26lights",
  description:
    "Arik Azoulay built 4 companies, sold one, and has coached 200+ startups. Book a sparring session that pressure-tests your plan instead of just validating it.",
};

const CONTACT = "/contact";

export default function ArikAzoulayPage() {
  return (
    <div data-unit="business">
      <main>
        <PersonaHero
          title={
            <>
              Every founder needs
              <br />
              someone who won&apos;t
              <br />
              <em>lie to them.</em>
            </>
          }
          wide
          sub="Arik built 4 companies, sold one, and spent 14 years inside the messiest moments of 200+ startups. He's not here to validate your plan — he's here to pressure-test it, because he actually wants to see you win."
          proof={{
            avatar: { src: "/team/testi-jonathan-shockaert.jpg", alt: "Jonathan Shockaert" },
            quote: "His proficiency in simplifying complex processes became a huge asset for the team.",
            name: "Jonathan Shockaert, CEO, Ring Twice",
          }}
          ctas={[
            { label: "Book a free 30-min discovery call", href: CONTACT },
            { label: "See packages", href: "#pricing", variant: "ghost" },
          ]}
          portrait={{ src: "/team/arik-hero.png", alt: "Arik Azoulay" }}
          glass={{
            name: "Arik Azoulay",
            title: "CEO 26lights · 4 companies built · 200+ coached",
            tags: ["Strategist", "Builder", "No-BS"],
          }}
        />

        <TrustBar />

        <WhyAccordion
          eyebrow="Why Arik"
          title="Built, broken, and rebuilt."
          intro="Arik isn't a consultant who runs an audit and leaves with a deck. Across 200+ startups, he's stayed in the room long after the analysis — building the plan alongside the team, not just diagnosing it from the outside. He's not a VC doing due diligence. He's the partner who's still there when the plan hits reality."
          photo={{ src: "/team/arik-why.jpg", alt: "Arik Azoulay" }}
          cta={{ label: "See packages", href: "#pricing" }}
          items={[
            {
              label: "No-Bullshit Talker",
              body: "No vague frameworks. No polite hedging. If your plan has a hole, you'll know in the first 10 minutes.",
            },
            {
              label: "All-Rounder",
              body: "He won't tell you it's a marketing problem when it's actually your pricing. He sees the whole board.",
            },
            {
              label: "Visual Thinker",
              body: "He maps your business live, in front of you — so the blind spots become impossible to ignore, even for you.",
            },
            {
              label: "Hands-On Builder",
              body: "He doesn't diagnose and disappear. He stays until the plan actually runs.",
            },
          ]}
        />

        <Bistre as="section" className="how" data-screen-label="How it works">
          <div className="wrap">
            <div className="section-label reveal">How it works</div>
            <h2 className="reveal">Two ways to work together</h2>
            <div className="how-grid">
              <div className="how-card how-card--featured reveal">
                <div className="how-num">01 — Co-creation workshops</div>
                <h3>Think together, live</h3>
                <p>
                  You explain your business. Arik maps it live on a shared board — connecting the dots you&apos;ve been too
                  close to see. Then you solve it together.
                </p>
                <a href="#method" className="how-method-link">
                  See how the method works ↓
                </a>
              </div>
              <div className="how-card reveal" style={revealDelay(120)}>
                <div className="how-num">02 — On-call support</div>
                <h3>Unblock in real time</h3>
                <p>
                  Between sessions, message Arik directly when you hit a wall. No waiting for the next meeting to unblock a
                  decision.
                </p>
              </div>
            </div>
            <a href="#pricing" className="btn btn-how reveal" style={revealDelay(200)}>
              See rates
            </a>
          </div>
        </Bistre>

        <MethodFunnel />

        <Testimonials
          eyebrow="What clients say"
          title="Founders who've been in the room"
          columns={3}
          background="gray"
          items={[
            {
              quote:
                "I loved this afternoon with Arik, which brought brilliant ideas around a Chrome extension, which truly helped me rethink my strategy. His pragmatic approach and his hands-on coaching gave me loads of enthusiasm and energy to continue my project.",
              name: "Alexandre de Clercq",
              title: "Founder",
              company: "Jay",
              avatar: "/team/testi-alexandre-de-clercq.png",
              initials: "AC",
            },
            {
              quote:
                "Arik's coaching helped us understand the importance of a clear sales strategy and a rigorous discipline in task follow-up, while bringing a structure to better our collective productivity and team cohesion.",
              name: "Davy Diamant",
              title: "CEO",
              company: "Archetype",
              avatar: "/team/testi-davy-diamant.jpg",
              initials: "DD",
            },
            {
              quote:
                "Arik offers a very pragmatic and concrete coaching, with a hands-on approach that allowed me to better structure and challenge my commercial strategy. It is a rich discussion with someone who understands the challenges of startups well.",
              name: "Adrien Charles",
              title: "CEO",
              company: "Lyriks.io",
              avatar: "/team/testi-adrien-charles.jpg",
              initials: "AC",
            },
          ]}
          moreItems={[
            {
              quote:
                "I loved my exchanges with Arik. Beyond his personality, his advice are truly sharp and honest, which is rare. He's not afraid to say harsh truths, such as targeting a specific persona for fundraising which quickly helped me refine my strategy.",
              name: "Ambre P.",
              title: "Co-Founder",
              company: "Simple Reset",
              avatar: "/team/testi-ambre-p.png",
              initials: "AP",
            },
            {
              quote:
                "With the Detailed Business Process method, we quickly pointed out processes that could be optimized, and acted on it. This fulfilled my need to get out of the operational aspects of my day-to-day, letting me focus on higher value tasks.",
              name: "Stéphane Benaym",
              title: "CFO",
              company: "e-maprod",
              avatar: "/team/testi-stephane-benaym.png",
              initials: "SB",
            },
            {
              quote:
                "Arik brings a truly pragmatic and innovative approach, most notably his propositions to automate and ease the manual work thanks to tools such as machine learning. His proficiency in simplifying complex processes became a huge asset for the team.",
              name: "Jonathan Shockaert",
              title: "CEO",
              company: "Ring Twice",
              avatar: "/team/testi-jonathan-shockaert.jpg",
              initials: "JS",
            },
            {
              quote:
                "Arik brings a true product-centered culture, understands every business, technical and marketing challenge, by integrating himself as a true team member to maximize value for each action, which frees me from micro-management and boosts productivity.",
              name: "Risvan Asif",
              title: "Co-Founder",
              company: "Carden",
              avatar: "/team/testi-risvan-asif.jpg",
              initials: "RA",
            },
            {
              quote:
                "Arik's coaching is valued for its pragmatic and founder-focused approach, combining technical, marketing, and strategic expertise, with a strong emphasis on constructive challenge and long-term support to guide startups towards their goals.",
              name: "Sebastien De Grauwe",
              title: "CEO",
              company: "HeronTrack",
              avatar: "/team/testi-sebastien-de-grauwe.jpg",
              initials: "SD",
            },
            {
              quote: "In only 30 minutes, Arik quickly found out what the true needs of my company were, and I got out with incredible insights I applied the next day.",
              name: "Céleste Coez",
              title: "Co-Founder",
              company: "Reusses",
              avatar: "/team/testi-celeste-coez.jpg",
              initials: "CC",
            },
          ]}
        />

        <RateTable
          title="No retainer. Start where it makes sense."
          rows={[
            {
              name: "Gut-Check",
              desc: "One sharp session. Find out if your plan survives contact with someone who won't just nod along. Billed upfront, no commitment.",
              price: "€600",
              period: "2 hours",
              cta: { label: "Book a session", href: "https://buy.stripe.com/8x2cN63rd2J28qddp728801" },
            },
            {
              name: "Build Your Plan",
              desc: "Workshop + full analysis. For founders who need the plan built, not just reviewed. Direct access between sessions.",
              price: "€2,600",
              period: "10 hours · was €3,000",
              cta: { label: "Book a session", href: "https://buy.stripe.com/dRm14o8Lx3N6aylcl328802" },
              badge: "Most popular",
              featured: true,
            },
            {
              name: "Full Sparring Partner",
              desc: "Workshop + Analysis + direct WhatsApp access. The closest thing to having Arik as a co-founder, without the equity.",
              price: "€5,000",
              period: "25 hours · was €7,500",
              cta: { label: "Book a session", href: "https://buy.stripe.com/9B614obXJ4Ra5e13Ox28803" },
            },
          ]}
          footnote={
            <>
              Need something more tailored? <a href={CONTACT}>Let&apos;s talk.</a>
            </>
          }
        />

        <RelatedPages
          title="Other ways we help founders"
          paths={["/growth-plan", "/jacqueline-c", "/malorie-dreyfus"]}
        />

        <FinalCta
          title="Most founders wait too long to find someone who'll tell them the truth."
          sub="One free call. No deck, no pitch — just a straight read on where you're stuck."
          primary={{ label: "Book a free 30-min discovery call", href: CONTACT }}
        />
      </main>
    </div>
  );
}
