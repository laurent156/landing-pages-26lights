import { Bistre } from "@/components/ui/Bistre";
import { Wrap } from "@/components/ui/Wrap";

type QuoteBandProps = {
  quote: string;
};

/** A single centered pull-quote on a bistre surface — no name, no photo. For a page that wants
 * one punchy line to breathe between two content sections, not a full `Testimonials` block. */
export function QuoteBand({ quote }: QuoteBandProps) {
  return (
    <Bistre as="section" className="quote-band" data-screen-label="Quote">
      <Wrap>
        <blockquote className="reveal">&ldquo;{quote}&rdquo;</blockquote>
      </Wrap>
    </Bistre>
  );
}
