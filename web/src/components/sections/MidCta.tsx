import { Button } from "@/components/ui/Button";
import { Wrap } from "@/components/ui/Wrap";

type MidCtaProps = {
  title: string;
  href: string;
  label: string;
};

export function MidCta({ title, href, label }: MidCtaProps) {
  return (
    <section style={{ paddingTop: 0, paddingBottom: 0 }} data-screen-label="Mid CTA">
      <Wrap
        style={{
          borderTop: "1px solid #f0f0f0",
          padding: "56px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.2px" }}>{title}</h3>
        <Button href={href} target="_blank" rel="noopener">
          {label}
        </Button>
      </Wrap>
    </section>
  );
}
