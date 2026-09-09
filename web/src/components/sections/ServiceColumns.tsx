import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";
import { revealDelay } from "@/lib/style";

type ServiceColumn = {
  /** The business unit this column belongs to — Business, Tech, Marketing & Sales. */
  unit: string;
  /** The practice's promise, in one line. */
  title: string;
  /** Capabilities inside that unit that have no page of their own — the named offers that do
   * have one are reachable from the router and from the hub this column links to, and listing
   * them again here made the two sections the same directory twice (measured: 20 of 21
   * destinations identical). */
  offers: string[];
  cta: { label: string; href: string };
};

type ServiceColumnsProps = {
  eyebrow: string;
  /** The argument the three columns exist to make. Without it the section reads as a directory,
   * which is the router's job, not this one's. */
  statement?: string;
  sub?: string;
  columns: ServiceColumn[];
  alt?: boolean;
};

/** The three practices side by side: what each one promises, what it covers, and a link to its
 * hub. Not a directory — it makes the "one team, three practices" argument that a visitor
 * comparing us to three separate agencies needs, and leaves the routing to `SituationRouter`.
 */
export function ServiceColumns({ eyebrow, statement, sub, columns, alt }: ServiceColumnsProps) {
  return (
    <section style={alt ? { background: "#fafafa" } : undefined} data-screen-label={eyebrow}>
      <Wrap>
        <div className="reveal service-columns-head">
          <div className="section-label">{eyebrow}</div>
          {statement ? <h2 className="lead-statement">{statement}</h2> : null}
          {sub ? <p className="sub-text">{sub}</p> : null}
        </div>
        <div className="service-columns">
          {columns.map((column, i) => (
            <div className="service-column reveal" style={revealDelay(i * 90)} key={column.unit}>
              <div className="service-column-unit">{column.unit}</div>
              <h3>{column.title}</h3>
              <ul className="service-column-offers">
                {column.offers.map((offer) => (
                  <li key={offer}>{offer}</li>
                ))}
              </ul>
              <SectionCta label={column.cta.label} href={column.cta.href} />
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
