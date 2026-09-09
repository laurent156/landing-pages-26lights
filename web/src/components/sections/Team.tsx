import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";
import { revealDelay } from "@/lib/style";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

type TeamProps = {
  /** Anchor target, for a page whose hero CTA links down to the team ("Meet our team!"). */
  id?: string;
  eyebrow: string;
  title: string;
  sub?: string;
  members: TeamMember[];
  cta?: { label: string; href: string };
  /** "gray" (default, #fafafa) or "white" — same escape hatch as `Testimonials`, for a page
   * whose neighbouring section is already #fafafa. */
  background?: "gray" | "white";
};

export function Team({ id, eyebrow, title, sub, members, cta, background = "gray" }: TeamProps) {
  return (
    <section id={id} style={{ background: background === "white" ? "#fff" : "#fafafa" }} data-screen-label="Team">
      <Wrap>
        <div className="reveal">
          <div className="section-label">{eyebrow}</div>
          <h2 style={{ marginBottom: sub ? 16 : 40 }}>{title}</h2>
          {sub ? (
            <p className="sub-text" style={{ marginBottom: 40 }}>
              {sub}
            </p>
          ) : null}
        </div>
        <div className="team-simple-grid">
          {members.map((member, i) => (
            <div className="team-simple-item reveal" style={revealDelay((i % 4) * 60)} key={member.name}>
              <Image src={member.photo} alt={member.name} width={240} height={240} />
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
            </div>
          ))}
        </div>
        {cta ? <SectionCta {...cta} /> : null}
      </Wrap>
    </section>
  );
}
