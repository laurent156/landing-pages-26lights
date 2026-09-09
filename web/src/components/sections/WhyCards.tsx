import { Bistre } from "@/components/ui/Bistre";
import { Wrap } from "@/components/ui/Wrap";
import { Button } from "@/components/ui/Button";
import { revealDelay } from "@/lib/style";

type WhyCard = {
  title: string;
  body: string;
};

type WhyCardsProps = {
  title: string;
  cards: WhyCard[];
  cta?: { label: string; href: string };
};

/** A centered heading over a flat grid of white cards on a bistre surface — no photo, no
 * accordion. Named distinctly from `WhyAccordion` (framed photo + single-open FAQ list): the two
 * "why work with me" shapes a persona page can use, picked per the real source's own layout. */
export function WhyCards({ title, cards, cta }: WhyCardsProps) {
  return (
    <Bistre as="section" className="why-cards" data-screen-label="Why this works differently">
      <Wrap>
        <h2 className="reveal">{title}</h2>
        <div className="why-cards-grid">
          {cards.map((card, i) => (
            <div className="why-card reveal" style={revealDelay(i * 80)} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
        {cta ? (
          <div className="why-cards-cta reveal">
            <Button href={cta.href} target="_blank" rel="noopener" wide>
              {cta.label}
            </Button>
          </div>
        ) : null}
      </Wrap>
    </Bistre>
  );
}
