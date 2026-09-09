import Image from "next/image";
import type { ReactNode } from "react";
import { revealDelay } from "@/lib/style";

type Expert = {
  name: string;
  /** Short uppercase credential line — "Tech Lead · PhD, Computer Science". */
  role: string;
  body: string;
  /** Skill chips under the body. Keep to 2-3: they are a scan aid, not a CV. */
  tags: string[];
  photo: string;
  /** Show this expert's real photo colors instead of the default grayscale treatment — the
   * source explicitly does this for some rosters (ai-prototyping's trio) and not others
   * (ai-production's duo); don't default to color, only opt in when the source does. */
  color?: boolean;
};

type ExpertCardsProps = {
  eyebrow: string;
  title: ReactNode;
  /** Omit for a real source whose squad section has no intro paragraph (validated on ai/erp). */
  intro?: string;
  experts: Expert[];
  /** "split" (default): text-left / cards-right, paired with the stacked-avatars `meta`
   * footnote — validated on ai-production's duo. "stacked": a centered head above a full-width
   * card grid, paired with `statusMeta` (a live-status pill + chat link) instead — validated on
   * ai-prototyping's trio. Pick based on the real source's layout, not the expert count. */
  layout?: "split" | "stacked";
  /** The stacked-avatars footnote under the intro ("In-house team / Based in Brussels & Paris") —
   * "split" layout only. */
  meta?: { lead: string; detail: string };
  /** A live-status pill + chat link under the centered head — "stacked" layout only. */
  statusMeta?: { availableLabel: string; chatLabel: string; chatHref: string };
};

function PingDot() {
  return (
    <span className="status-dot">
      <i className="ping" />
      <i />
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.34-1.6-1.5-1.9-.15-.3-.01-.46.14-.61.13-.14.3-.37.45-.55.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.45s1.05 2.84 1.2 3.04c.15.2 2.07 3.31 5.02 4.5 2.45.98 2.95.79 3.48.74.53-.05 1.72-.7 1.96-1.39.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.57-.35zM12 21.5a9.5 9.5 0 0 1-4.84-1.32L4 21l.85-3.06A9.5 9.5 0 1 1 12 21.5zm0-20.5a11 11 0 0 0-9.4 16.68L1 23l5.5-1.53A11 11 0 1 0 12 1z" />
    </svg>
  );
}

function ExpertCard({ expert, delay }: { expert: Expert; delay: number }) {
  return (
    <div className="tcard reveal" style={revealDelay(delay)}>
      <Image
        src={expert.photo}
        alt={`${expert.name}, ${expert.role}`}
        width={96}
        height={96}
        style={expert.color ? { filter: "none" } : undefined}
      />
      <h3>{expert.name}</h3>
      <div className="role">{expert.role}</div>
      <p>{expert.body}</p>
      <div className="tags">
        {expert.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two or three named experts in depth — photo, credential, what they specifically do, skill
 * chips. Distinct from `Team.tsx`, which shows the whole roster as a grid of small avatars:
 * reach for that to prove the company has a team, and for this when the argument is *seniority*
 * and a visitor needs to see exactly who would touch their work (validated on ai-production's
 * two PhDs and ai-prototyping's trio of architects).
 */
export function ExpertCards({ eyebrow, title, intro, experts, layout = "split", meta, statusMeta }: ExpertCardsProps) {
  const cardsClass = `team-cards${experts.length === 3 ? " team-cards--three" : ""}`;

  if (layout === "stacked") {
    return (
      <section className="team" data-screen-label={eyebrow}>
        <div className="wrap">
          <div className="team-head">
            <div className="section-label reveal">{eyebrow}</div>
            <h2 className="reveal">{title}</h2>
            {intro ? <p className="reveal">{intro}</p> : null}
            {statusMeta ? (
              <div className="team-meta-row">
                <div className="status-pill reveal" style={revealDelay(80)}>
                  <PingDot />
                  {statusMeta.availableLabel}
                </div>
                <a href={statusMeta.chatHref} target="_blank" rel="noopener" className="chat-link reveal" style={revealDelay(140)}>
                  <WhatsAppIcon />
                  {statusMeta.chatLabel}
                </a>
              </div>
            ) : null}
          </div>
          <div className={cardsClass}>
            {experts.map((expert, i) => (
              <ExpertCard expert={expert} delay={i * 80} key={expert.name} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="team" data-screen-label={eyebrow}>
      <div className="team-inner">
        <div className="team-left">
          <div className="section-label reveal">{eyebrow}</div>
          <h2 className="reveal">{title}</h2>
          {intro ? <p className="reveal">{intro}</p> : null}
          {meta ? (
            <div className="team-meta reveal">
              <div className="team-stack">
                {experts.map((expert) => (
                  <Image key={expert.name} src={expert.photo} alt={expert.name} width={46} height={46} />
                ))}
              </div>
              <div className="team-meta-txt">
                <b>{meta.lead}</b>
                {meta.detail}
              </div>
            </div>
          ) : null}
        </div>
        <div className={cardsClass}>
          {experts.map((expert, i) => (
            <ExpertCard expert={expert} delay={i * 90} key={expert.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
