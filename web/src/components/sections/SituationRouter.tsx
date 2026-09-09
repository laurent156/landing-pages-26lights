import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Wrap } from "@/components/ui/Wrap";
import { OFFERS } from "@/lib/data/offers";
import { revealDelay } from "@/lib/style";

type Situation = {
  /** The moment a visitor recognises, in their words — this is the hook, not a category. */
  title: string;
  body: string;
  /** Routes, read from `OFFERS` so a label is never retyped here. */
  paths: string[];
};

type Expert = {
  path: string;
  name: string;
  credential: string;
  photo: string;
};

type SituationRouterProps = {
  /** Anchor target — the hero's secondary CTA points down at this block. */
  id?: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  situations: Situation[];
  /** The "or you need one named person" row under the grid. */
  experts?: { label: string; items: Expert[] };
};

function OfferLink({ path }: { path: string }) {
  const offer = OFFERS[path];
  if (!offer) return null;
  return (
    <li>
      <Link href={path}>
        <span>{offer.label}</span>
        <ArrowRight aria-hidden="true" strokeWidth={1.8} />
      </Link>
    </li>
  );
}

function ExpertRow({ label, items }: { label: string; items: Expert[] }) {
  return (
    <div className="router-experts reveal">
      <h3 className="router-experts-label">{label}</h3>
      <div className="router-experts-row">
        {items.map((expert) => (
          <Link href={expert.path} className="router-expert" key={expert.path}>
            <Image src={expert.photo} alt={expert.name} width={112} height={112} />
            <span className="router-expert-text">
              <span className="router-expert-name">{expert.name}</span>
              <span className="router-expert-cred">{expert.credential}</span>
            </span>
            <ArrowRight aria-hidden="true" strokeWidth={1.8} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function RouterHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="reveal router-head">
      <div className="section-label">{eyebrow}</div>
      <h2>{title}</h2>
      {sub ? <p className="sub-text">{sub}</p> : null}
    </div>
  );
}

/** The homepage's router: four situations a founder recognises, each opening onto the pages that
 * answer it, plus the three named consultants.
 *
 * It replaces the one thing the homepage never did. The page listed 22 capabilities as plain text
 * and carried no internal link at all, so a visitor who recognised their problem had no route to
 * the page about it — and the three "Know more" buttons that existed pointed back at the
 * WordPress site being replaced. A taxonomy (Business / Tech / Marketing) asks the visitor to
 * know how we are organised; a situation asks them only to recognise themselves.
 *
 * Everything is visible at once, deliberately. Two alternatives were built and compared in the
 * browser: full-width rows with hairlines instead of cards, and a pick-then-reveal version that
 * showed only the chosen situation's offers. The reveal version read best per screen but put
 * only four of the nineteen links in the HTML, which weakens the internal linking this block
 * exists to provide — so all four situations and all their links stay on the page.
 *
 * The "01…04" index sits in the top-right corner in grey rather than leading each card: the four
 * situations are alternatives, not steps, and a numeral at the head of the card implied the
 * reader should start at the first one. */
export function SituationRouter({
  id,
  eyebrow = "Where are you right now?",
  title,
  sub,
  situations,
  experts,
}: SituationRouterProps) {
  return (
    <section id={id} className="router" data-screen-label="Router">
      <Wrap>
        <RouterHead eyebrow={eyebrow} title={title} sub={sub} />

        <div className="router-grid">
          {situations.map((situation, i) => (
            <div className="router-card router-card--corner reveal" style={revealDelay(i * 90)} key={situation.title}>
              <span className="router-card-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{situation.title}</h3>
              <p>{situation.body}</p>
              <ul className="router-links">
                {situation.paths.map((path) => (
                  <OfferLink path={path} key={path} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {experts ? <ExpertRow label={experts.label} items={experts.items} /> : null}
      </Wrap>
    </section>
  );
}
