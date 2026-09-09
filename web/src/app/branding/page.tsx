import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { MarqueeHero } from "@/components/sections/MarqueeHero";
import { PillarRecedeEffect } from "@/components/ui/PillarRecedeEffect";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { GrowthArchitects } from "@/components/sections/GrowthArchitects";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button } from "@/components/ui/Button";
import { capability } from "@/lib/data/marketing-capabilities";

export const metadata: Metadata = {
  title: "Branding & Design — 26lights",
  description:
    "Beyond aesthetics, a strategic growth lever. Branding, brand definition, digital experience and brand execution for startups, scale-ups and SMEs.",
};

const CALL = "https://calendly.com/alicia-26lights/30min";

function CheckIcon() {
  return <Check aria-hidden="true" strokeWidth={1.8} />;
}

function ArrowIcon() {
  return <ArrowRight aria-hidden="true" strokeWidth={1.8} />;
}

const MARQUEE_TILES = [
  { src: "/branding/marquee-609.jpg" },
  { src: "/branding/marquee-610.jpg" },
  { src: "/branding/marquee-611.jpg" },
  { src: "/branding/marquee-612.jpg" },
  { src: "/branding/marquee-613.jpg" },
  { src: "/branding/marquee-614.jpg" },
  { src: "/branding/marquee-615.jpg" },
];

const PILLARS = [
  {
    id: "brand-definition",
    label: "Positioning your brand for lasting impact",
    title: (
      <>
        Brand <span>definition</span>
      </>
    ),
    paragraphs: [
      "Before designing a brand, it's essential to understand the context. What are your actual business needs? Who are you addressing? What level of branding is necessary to solidify your positioning without overspending?",
      "We craft tailored branding strategies that match your stage of development and growth ambitions.",
    ],
    aspectsTitle: "Key aspects we focus on",
    aspects: [
      "Your mission, vision, and values",
      "Your audience segmentation & buyer persona",
      "Competitive insights & differentiation strategy",
      "Tailored creative strategy",
      "Experience mapping to anticipate key touchpoints",
    ],
    cta: { label: "Let's discuss your branding needs", href: CALL },
    shot: { src: "/branding/pillar-brand-definition.png", alt: "Tulyp brand identity by 26lights: business cards and website" },
    flow: false,
  },
  {
    id: "digital-experience",
    label: "From brand identity to tangible experiences",
    title: (
      <>
        Digital experience &amp; <span>brand execution</span>
      </>
    ),
    paragraphs: [
      "Your brand isn't just what you say, it's how people experience it, both digitally and physically. Every touchpoint, from websites to signage, plays a role in shaping perception and engagement.",
      "We ensure your brand is not only strategically positioned but also brought to life through thoughtful design and execution.",
    ],
    aspectsTitle: "Key aspects we focus on",
    aspects: [
      "UX/UI design optimized for adoption & conversion",
      "Website & product interface development aligned with your brand identity",
      "Research-driven user experience strategies to enhance interaction",
      "Prototyping & concept testing before full investment",
      "Photography & visual storytelling to reinforce brand consistency",
      "Graphic design & print materials for digital and offline impact",
      "Signage & environmental branding to create immersive brand experiences",
    ],
    cta: { label: "Contact our branding team", href: "mailto:alicia@26lights.com" },
    shot: { src: "/branding/pillar-digital-experience.png", alt: "Leexi brand and website design by 26lights" },
    flow: false,
  },
  {
    id: "brand-continuity",
    label: "Building a scalable & adaptable identity",
    title: (
      <>
        Brand continuity &amp; <span>internal takeover</span>
      </>
    ),
    paragraphs: [
      "Branding should evolve alongside your business, not restrict it. We design flexible brand identities that grow with you, ensuring continuity while avoiding costly rebranding efforts in the future.",
      "A well-crafted identity strengthens credibility, customer engagement, and investor confidence, key drivers for startups and scale-ups.",
    ],
    aspectsTitle: "Our approach includes",
    aspects: [
      "Modular brand architecture for flexibility",
      "Visual identity & design systems",
      "Clear brand guidelines for consistent execution internally by the marketing lead",
    ],
    cta: { label: "Fix a 20min meeting with our experts", href: CALL },
    shot: { src: "/branding/pillar-brand-continuity.png", alt: "Evoluno brand and product design by 26lights" },
    flow: true,
  },
];

const TILES = [
  { src: "/branding/tile-le-conteur-editorial.jpg", alt: "Le Conteur restaurant kitchen, chef flambéing a dish", client: "Le Conteur", tags: "Editorial photography", shape: "tall" },
  { src: "/branding/tile-tulyp-logo.jpg", alt: "Tulyp business cards, logo design", client: "Tulyp", tags: "Logo design", shape: "sq" },
  { src: "/branding/tile-proxideal-ui.jpg", alt: "Proxideal mobile app interface design", client: "Proxideal", tags: "UI design", shape: "tall" },
  { src: "/branding/tile-smile-corner-brand.jpg", alt: "Smile Corner dental aligner website", client: "Smile Corner", tags: "Brand design", shape: "sq" },
  { src: "/branding/tile-vaurien-product.jpg", alt: "Vaurien beer bottle and glass, product photography", client: "Vaurien", tags: "Product photography", shape: "tall" },
  { src: "/branding/tile-cowboy-web.jpg", alt: "Cowboy e-bike website shown on a tablet", client: "Cowboy", tags: "Web implementation", shape: "sq" },
  { src: "/branding/tile-treetop-brand.jpg", alt: "Treetop Social Club branded hoodie", client: "Treetop Social Club", tags: "Brand asset", shape: "tall" },
  { src: "/branding/tile-leexi-uiux.jpg", alt: "Leexi product interface, UI/UX design", client: "Leexi", tags: "UI/UX design", shape: "sq" },
  { src: "/branding/tile-scene-photo.jpg", alt: "Scène flaming cocktail served in a skull mug", client: "Scène", tags: "Photography", shape: "tall" },
  { src: "/branding/tile-uptown-logo.jpg", alt: "Uptown Hotel Brussels signage, logo design", client: "Uptown Hotel", tags: "Logo design", shape: "sq" },
  { src: "/branding/tile-craves-signage.jpg", alt: "CRAVES breakfast buffet outdoor signage", client: "CRAVES", tags: "Signage", shape: "tall" },
  { src: "/branding/tile-le-conteur-web.jpg", alt: "Le Conteur website shown on a tablet", client: "Le Conteur", tags: "Web design", shape: "sq" },
  { src: "/branding/tile-luminus-photo.jpg", alt: "Luminus lifestyle photography in a kitchen", client: "Luminus", tags: "Photography", shape: "tall" },
  { src: "/branding/tile-profinco-logo.jpg", alt: "Profinco Group logo design", client: "Profinco", tags: "Logo design", shape: "sq" },
  { src: "/branding/tile-craves-photo.jpg", alt: "CRAVES breakfast buffet photography", client: "CRAVES", tags: "Photography", shape: "tall" },
  { src: "/branding/tile-evoluno-brand-web.jpg", alt: "Evoluno brand identity and website design", client: "Evoluno", tags: "Brand design · Web design", shape: "sq" },
  { src: "/branding/tile-fintech-uiux.jpg", alt: "Fintech platform dashboard, UI/UX design", client: "Fintech platform", tags: "UI/UX design", shape: "sq" },
  { src: "/branding/tile-gabi-web.jpg", alt: "gabi smart care website design", client: "gabi", tags: "Web design", shape: "sq" },
  { src: "/branding/tile-yearbook-photo.jpg", alt: "Yearbook merchandise photography", client: "Yearbook", tags: "Photography", shape: "sq" },
];

const ECO_ITEMS = [
  capability("socialContent", "Social media / content strategy"),
  capability("performance", "Performance marketing"),
  capability("seoSea", "SEO & SEA"),
  capability("emailAutomation", "Email marketing & automation"),
];

export default function BrandingPage() {
  return (
    <div data-unit="marketing">
      <PillarRecedeEffect />
      <main>
        <MarqueeHero
          title={
            <>
              Beyond aesthetics, <em>a strategic growth lever.</em>
            </>
          }
          sub="Branding is more than just a logo or a visual identity. It's about shaping perceptions, building trust, and driving long-term values. But when should you invest in it? How far should you go? How is this reflected in the whole customer journey?"
          ctas={[{ label: "Let's discuss your branding needs", href: CALL }]}
          marqueeTiles={MARQUEE_TILES}
        />

        <section className="statement" data-screen-label="Alignment">
          <div className="statement-inner">
            <h2 className="reveal">
              We align your branding <span>with your growth ambitions</span>
            </h2>
            <p className="reveal">
              For <b>startups, scale-ups</b>, and <b>SME&apos;s</b>, <b>branding is a strategic asset</b>. But it must align
              with business maturity, market fit, and growth objectives. Investing too early or too heavily can be
              inefficient, while delaying it may limit your impact and credibility.
            </p>
            <Button href={CALL} target="_blank" rel="noopener" className="reveal">
              Book a 30min meeting with our experts
            </Button>
          </div>
        </section>

        <section className="pillars" data-screen-label="Our offer">
          <div className="wrap">
            <div className="pillars-stack">
              {PILLARS.map((pillar) => (
                <div className={`pillar-sticky${pillar.flow ? " pillar-sticky--flow" : ""}`} key={pillar.id}>
                  <div className="pillar-recede">
                    <div className="pillar pillar-card pillar-card--bleed reveal">
                      <div className="pillar-text">
                        <div className="section-label">{pillar.label}</div>
                        <h2>{pillar.title}</h2>
                        {pillar.paragraphs.map((p) => (
                          <p key={p.slice(0, 30)}>{p}</p>
                        ))}
                        <div className="aspects">
                          <h3>{pillar.aspectsTitle}</h3>
                          <ul>
                            {pillar.aspects.map((a) => (
                              <li key={a}>
                                <CheckIcon />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={pillar.cta.href}
                          target={pillar.cta.href.startsWith("http") ? "_blank" : undefined}
                          rel={pillar.cta.href.startsWith("http") ? "noopener" : undefined}
                          className="btn"
                        >
                          {pillar.cta.label}
                          <ArrowIcon />
                        </a>
                      </div>
                      <div className="pillar-case">
                        <div className="pillar-case-shot">
                          <Image src={pillar.shot.src} alt={pillar.shot.alt} width={900} height={700} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="work-block" id="work" data-screen-label="Work">
                <div className="work-head">
                  <div className="section-label reveal">Selected work</div>
                  <h2 className="reveal">
                    Brands we have <span>built and grown</span>
                  </h2>
                </div>
                <div className="bento">
                  {TILES.map((tile, i) => (
                    <figure className={`tile tile--${tile.shape} reveal`} key={tile.src} tabIndex={0}>
                      <div className="tile-img">
                        <Image src={tile.src} alt={tile.alt} width={tile.shape === "tall" ? 340 : 400} height={tile.shape === "tall" ? 640 : 300} />
                      </div>
                      <div className="tile-veil" aria-hidden="true" />
                      <figcaption className="tile-cap">
                        <div className="tile-client">{tile.client}</div>
                        <div className="tile-tags">{tile.tags}</div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stories" data-screen-label="Client stories">
          <div className="wrap">
            <div className="stories-head">
              <h2 className="reveal">
                Cases that speak <span>for themselves</span>
              </h2>
            </div>
            <div className="story-grid">
              <div className="story reveal">
                <div className="story-body">
                  <div className="story-logo-slot">
                    <Image className="story-logo story-logo--stacked" src="/branding/story-logo-leexi.png" alt="Leexi" width={140} height={80} />
                  </div>
                  <div className="story-tags">
                    <span className="story-tag">Logo Design</span>
                    <span className="story-tag">Rebranding</span>
                    <span className="story-tag">User interface</span>
                    <span className="story-tag">Web Design</span>
                  </div>
                  <p className="story-quote">
                    &ldquo;The new branding of Leexi coincides with <b>a phenomenal surge in our growth</b>. Our need was to
                    increase the attractiveness and credibility of our solution at the European level. This mission was
                    brilliantly accomplished in partnership with the 26lights team.&rdquo;
                  </p>
                  <div className="story-person">
                    <Image src="/branding/story-xavier-lombard.jpg" alt="Xavier Lombard" width={60} height={60} />
                    <div>
                      <b>Xavier Lombard</b>CEO
                    </div>
                  </div>
                </div>
              </div>
              <div className="story reveal">
                <div className="story-body">
                  <div className="story-logo-slot">
                    <Image className="story-logo" src="/branding/story-logo-tulyp.png" alt="Tulyp" width={140} height={52} />
                  </div>
                  <div className="story-tags">
                    <span className="story-tag">Logo Design</span>
                    <span className="story-tag">Rebranding</span>
                    <span className="story-tag">Web Design</span>
                  </div>
                  <p className="story-quote">
                    &ldquo;We have developed and established our product, and our current focus is on customer acquisition. To
                    achieve this, we&apos;ve partnered with 26lights to assist with our{" "}
                    <b>rebranding, website redesign, and Go-To-Market strategy</b>, helping us better connect with our core
                    target audience.&rdquo;
                  </p>
                  <div className="story-person">
                    <Image src="/branding/story-eugene-perret.jpg" alt="Eugène Perret" width={60} height={60} />
                    <div>
                      <b>Eugène Perret</b>COO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BeyondSection
          title={
            <>
              Branding &amp; beyond: <span>a holistic marketing approach</span>
            </>
          }
          intro="Branding is just the beginning. A strong identity is essential, but sustained growth requires a broader marketing ecosystem. We help amplify your brand through strategic marketing tactics designed to engage, convert, and retain your audience."
          items={ECO_ITEMS}
          cta={{ label: "Let's discuss your needs", href: CALL }}
        />

        <GrowthArchitects />

        <FinalCta
          title={
            <>
              Read our <em>manifesto</em>
            </>
          }
          sub="Here are the 12 fundamental practices that drive our work at 26lights."
          primary={{ label: "Let's discuss your branding needs", href: CALL }}
          secondaryButton={{ label: "Read the manifesto", href: "/manifesto" }}
        />
      </main>
    </div>
  );
}
