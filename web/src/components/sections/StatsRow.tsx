import { CountUp } from "@/components/ui/CountUp";
import { Wrap } from "@/components/ui/Wrap";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

type StatsRowProps = {
  stats: Stat[];
  alt?: boolean;
};

/** A short row of headline numbers (years in business, clients helped, etc.) — for pages
 * whose source opens with a credibility strip like this right under the hero/trust bar. */
export function StatsRow({ stats, alt }: StatsRowProps) {
  return (
    <section style={alt ? { background: "#fafafa" } : undefined}>
      <Wrap>
        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stats-item reveal" key={stat.label}>
              <div className="stats-value">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
