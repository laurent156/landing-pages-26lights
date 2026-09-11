import Image from "next/image";
import { Bistre } from "@/components/ui/Bistre";
import { Button } from "@/components/ui/Button";
import { Wrap } from "@/components/ui/Wrap";

const CALL = "https://calendly.com/alicia-26lights/30min";

/** The homepage's own hero — a distinct shape from the shared offer/persona/marquee heroes
 * (Hero.tsx, PersonaHero.tsx, MarqueeHero.tsx): the H1 and the sub/CTA column sit side by side
 * instead of stacked, and a strip of real team photos runs below instead of a single portrait
 * card. Bespoke on purpose, since no other page shares this split-column + photo-strip shape —
 * promote it into a real variant if a second page ever wants the same thing. Still reuses the
 * shared .hero-h1 type recipe, .badge pill, and Button component rather than inventing new ones
 * for this layout, and takes no props since it's homepage-only, like GrowthArchitects. */
export function HomeHero() {
  return (
    <Bistre as="section" className="home-hero" data-screen-label="Hero">
      <Wrap>
        <div className="home-hero-top">
          <div className="home-hero-left">
            <h1 className="hero-h1">
              We are <em>growth architects</em>.
            </h1>
            <div className="badge">200+ companies · Offices in Brussels and Paris.</div>
          </div>
          <div className="home-hero-right">
            <p className="home-hero-sub">
              For 14 years we have been the outside team that startups, scale-ups and ambitious SMEs bring in when
              the business is ready to move faster than it can hire — business, tech and marketing under one roof,
              month to month, no equity.
            </p>
            <div className="home-hero-ctas">
              <Button href={CALL} target="_blank" rel="noopener">
                Book a 30-min call
              </Button>
              <Button href="#router" variant="ghost">
                Find your starting point
              </Button>
            </div>
          </div>
        </div>
      </Wrap>
      <Wrap>
        <div className="home-hero-strip reveal">
          <div className="home-hero-photo">
            <Image src="/team/homepage-team-at-work.jpg" alt="26lights team at work" fill sizes="(max-width: 900px) 50vw, 25vw" />
          </div>
          <div className="home-hero-photo">
            <Image src="/team/dev-team-header.png" alt="A 26lights developer at work on a laptop" fill sizes="(max-width: 900px) 50vw, 25vw" />
          </div>
          <div className="home-hero-photo">
            <Image src="/team/only-talented-people.png" alt="Two 26lights architects pairing on a screen" fill sizes="(max-width: 900px) 50vw, 25vw" />
          </div>
          <div className="home-hero-photo">
            <Image
              src="/team/business-plan-whiteboard.jpg"
              alt="The 26lights team mapping a process on a whiteboard"
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
            />
          </div>
        </div>
      </Wrap>
    </Bistre>
  );
}
