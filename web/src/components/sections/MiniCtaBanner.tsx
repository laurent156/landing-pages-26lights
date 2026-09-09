import { Bistre } from "@/components/ui/Bistre";
import { Button } from "@/components/ui/Button";
import { Wrap } from "@/components/ui/Wrap";

type MiniCtaBannerProps = {
  title: string;
  note?: string;
  cta: { label: string; href: string };
};

/** A short, punchy mid-page CTA band — for a page whose source drops a one-line joke/hook
 * plus a button between two bigger sections, not a full FinalCta. */
export function MiniCtaBanner({ title, note, cta }: MiniCtaBannerProps) {
  return (
    <Bistre as="section" className="mini-cta">
      <Wrap className="mini-cta-inner reveal">
        <div>
          <h3>{title}</h3>
          {note ? <p>{note}</p> : null}
        </div>
        <Button href={cta.href}>{cta.label}</Button>
      </Wrap>
    </Bistre>
  );
}
