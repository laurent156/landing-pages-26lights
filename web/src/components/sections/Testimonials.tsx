import { Bistre } from "@/components/ui/Bistre";
import { Wrap } from "@/components/ui/Wrap";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  items: Testimonial[];
};

export function Testimonials({ eyebrow, title, items }: TestimonialsProps) {
  return (
    <Bistre as="section" data-screen-label="Testimonials">
      <Wrap style={{ position: "relative", zIndex: 1 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 style={{ color: "#F7F7F7", marginBottom: 40 }}>{title}</h2>
        <div className="testi-grid">
          {items.map((item) => (
            <div className="testi-card" key={item.name}>
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <div className="attribution">
                {item.name} — {item.role}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </Bistre>
  );
}
