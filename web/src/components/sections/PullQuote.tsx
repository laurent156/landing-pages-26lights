import { Wrap } from "@/components/ui/Wrap";

type PullQuoteProps = {
  line: string;
  tag: string;
};

export function PullQuote({ line, tag }: PullQuoteProps) {
  return (
    <section className="pull-band" data-screen-label="Pull quote">
      <Wrap>
        <p className="line">{line}</p>
        <p className="tag">{tag}</p>
      </Wrap>
    </section>
  );
}
