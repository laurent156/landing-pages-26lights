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
  eyebrow: string;
  title: string;
  sub?: string;
  members: TeamMember[];
  cta?: { label: string; href: string };
};

export function Team({ eyebrow, title, sub, members, cta }: TeamProps) {
  return (
    <section style={{ background: "#fafafa" }} data-screen-label="Team">
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
