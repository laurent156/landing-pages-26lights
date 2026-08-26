import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";

type Project = {
  name: string;
  logo?: string;
  description: string;
  href?: string;
};

type ProjectsProps = {
  eyebrow: string;
  title: string;
  items: Project[];
};

export function Projects({ eyebrow, title, items }: ProjectsProps) {
  return (
    <section data-screen-label="Projects">
      <Wrap>
        <div className="section-label">{eyebrow}</div>
        <h2 style={{ marginBottom: 40 }}>{title}</h2>
        <div className="project-grid">
          {items.map((item) => (
            <div className="project-card" key={item.name}>
              {item.logo ? (
                <Image src={item.logo} alt={item.name} width={140} height={40} className="logo" />
              ) : (
                <h3>{item.name}</h3>
              )}
              <p>{item.description}</p>
              {item.href ? <a href={item.href}>Read case →</a> : null}
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
