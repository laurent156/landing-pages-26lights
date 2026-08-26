import { CountUp } from "@/components/ui/CountUp";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

type StatsCardProps = {
  stats: Stat[];
};

export function StatsCard({ stats }: StatsCardProps) {
  return (
    <div className="stats-card">
      {stats.map((stat) => (
        <div className="stat-row" key={stat.label}>
          <div className="stat-num">
            <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
