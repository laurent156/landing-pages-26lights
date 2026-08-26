import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";
import { SectionCta } from "@/components/ui/SectionCta";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  initials: string;
};

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  items: Testimonial[];
  cta?: { label: string; href: string };
  /** #fafafa (validated default, arik-azoulay) unless a neighboring section is already
   * that shade — pass "white" to break up two same-toned sections sitting back to back. */
  background?: "gray" | "white";
};

export function Testimonials({ eyebrow, title, items, cta, background = "gray" }: TestimonialsProps) {
  return (
    <section
      className="testimonials"
      style={background === "white" ? { background: "#fff" } : undefined}
      data-screen-label="Testimonials"
    >
      <Wrap>
        <div className="section-label">{eyebrow}</div>
        <h2>{title}</h2>
        <div className="testi-grid">
          {items.map((item) => (
            <div className="testi-card" key={item.company}>
              <blockquote className="testi-quote">&ldquo;{item.quote}&rdquo;</blockquote>
              <div className="testi-author-row">
                {item.avatar ? (
                  <Image src={item.avatar} alt={item.name} width={60} height={60} className="testi-avatar" />
                ) : (
                  <span className="testi-avatar-fallback" aria-hidden="true">
                    {item.initials}
                  </span>
                )}
                <div>
                  <div className="testi-author">{item.name}</div>
                  <div className="testi-role">
                    {item.title}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cta ? <SectionCta {...cta} /> : null}
      </Wrap>
    </section>
  );
}
