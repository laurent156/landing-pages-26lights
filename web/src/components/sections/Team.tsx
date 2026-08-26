import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

type TeamProps = {
  eyebrow: string;
  title: string;
  members: TeamMember[];
};

export function Team({ eyebrow, title, members }: TeamProps) {
  return (
    <section style={{ background: "#fafafa" }} data-screen-label="Team">
      <Wrap>
        <div className="section-label">{eyebrow}</div>
        <h2 style={{ marginBottom: 40 }}>{title}</h2>
        <div className="team-simple-grid">
          {members.map((member) => (
            <div className="team-simple-item" key={member.name}>
              <Image src={member.photo} alt={member.name} width={240} height={240} />
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
