import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { DetailSplit } from "@/components/sections/DetailSplit";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessTabs } from "@/components/sections/ProcessTabs";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { RelatedPages } from "@/components/sections/RelatedPages";

export const metadata: Metadata = {
  title: "Tailored Odoo Implementation — 26lights",
  description:
    "From initial business process analysis to custom technical integration, we help you deploy Odoo effortlessly. A unified ERP aligned with your growth goals.",
};

const TALK = "https://calendly.com/alicia-26lights/30min";

export default function OdooImplementationPage() {
  return (
    <div data-unit="tech">
      <main>
        <Hero
          title="Tailored Odoo Implementation"
          sub="From initial business process analysis to custom technical integration, we help you deploy Odoo effortlessly. Get a unified ERP perfectly aligned with your growth goals — co-created with your team and built without unnecessary complexity."
          ctas={[{ label: "Let's talk", href: TALK }]}
          visualAlign="stretch"
          visual={
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1024 / 650",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 28px 70px rgba(0,0,0,0.5)",
              }}
            >
              <Image src="/odoo/mockup.png" alt="A real Odoo accounting dashboard" fill sizes="(max-width: 900px) 90vw, 560px" style={{ objectFit: "cover" }} />
            </div>
          }
        />

        <TrustBar />

        <DetailSplit
          eyebrow="Why Odoo"
          title="Infinitely modular, just like your business."
          flip
          alt
          photo={{ src: "/odoo/modular.png", alt: "Odoo apps connecting every part of a business" }}
          photoFit="contain"
          paragraphs={[
            "Odoo is undoubtedly the most versatile solution when it comes to connecting every part of your business into one single tool.",
            "Between all the Odoo apps, the thousands of community-developed apps, and the ability to self-host and make custom code changes, even your most intricate needs can be fulfilled — and fine-tuned as your business keeps changing.",
          ]}
        />

        <DetailSplit
          eyebrow="Widely respected and used"
          title="50,000+ SMEs and mid-caps run Odoo as their business information system."
          photo={{ src: "/odoo/respected.png", alt: "Odoo's presence and reputation in the ERP market" }}
          photoFit="contain"
          paragraphs={[
            "If you have LinkedIn, you may have heard of it more than once. Hard to find a better indicator that Odoo is one of the best ERP solutions on the market for small to medium-sized companies.",
          ]}
        />

        <DetailSplit
          eyebrow="One single source of truth"
          title="Connect every business module into Odoo — really, all of them."
          flip
          alt
          photo={{ src: "/odoo/single-source.png", alt: "Odoo centralizing every business module into one app" }}
          photoFit="contain"
          paragraphs={[
            "Billing platform, ecommerce website, CRM — connect every single one of your business modules into Odoo and benefit from an experience where everything is centralized.",
            "One single app shows you and your team the information that's relevant to them, and nothing else.",
          ]}
        />

        <FeatureGrid
          eyebrow="Tailoring Odoo to your needs"
          statement="Custom implementation, or low-code — which one is actually right for you?"
          bistre
          columns={2}
          items={[
            {
              title: "Custom implementation",
              body: "At most times, will cost more and take more time — but if your business needs this flexibility for its next 5 years of growth, it's definitely worth the investment, if not required.",
            },
            {
              title: "Low-code implementation",
              body: "Doesn't mean we choose the apps, click once, and get out. Deciding your ERP can work this way is the result of a thorough framing of your problems and needs.",
            },
          ]}
        />

        <ProcessTabs
          eyebrow="Process"
          title="Our mission: finding, building, and maintaining your next growth engine."
          phases={[
            {
              number: "01",
              label: "Business Analysis",
              title: "Mapping out all your needs, even those you didn't know you needed.",
              body: "We map all the challenges your business faces and your processes to truly pin-point what's needed — and could be changed or adjusted. Maybe you don't even need an ERP in the first place? That's what we're going to analyze.",
            },
            {
              number: "02",
              label: "Solutions Panel",
              title: "We bring to you all the solutions, and we define the best together.",
              body: "After mapping all your needs, we'll find which tool will help you best optimize, streamline and automate your very own processes. It can range from no tool at all to the most custom option. But the only one who decides what must be done is you.",
            },
            {
              number: "03",
              label: "Building & Delivery",
              title: "We co-create the product directly with you.",
              body: "From the first function to the final push to production, you'll be involved in every single part of your ERP's construction. It's your own tool, built with you, not just for you.",
            },
            {
              number: "04",
              label: "Support & Maintenance",
              title: "We continuously assess quality and offer maintenance.",
              body: "We're not simply integrators. More than shipping good code, we'll train your internal teams to use the product, and show your technical department how to keep track of errors and correct them.",
            },
          ]}
        />

        <DetailSplit
          eyebrow="You are in control"
          alt
          title="Tracking tools and methods you won't find anywhere else."
          flip
          photo={{ src: "/team/my26-control.png", alt: "Digital presentation of 26lights' internal tool My26" }}
          paragraphs={[
            "As you already know, transparency and flexibility are priorities for us. This is why we've developed proprietary technology called My26, to allow you to follow the evolution of every project in real time and be aware of how resources are being allocated at any given moment.",
            "My26 is our investment in openness and trust, which are the building blocks of growth partnership.",
          ]}
          cta={{ label: "Discover My26", href: TALK }}
        />

        <Projects
          eyebrow="Case studies"
          title="They chose us to build their business information system."
          items={[
            {
              company: "e-maprod",
              logo: "/logos/emaprod.png",
              meta: "Odoo · Tailored resource planning",
              stat: { value: 10, prefix: "×" },
              result: "MRR in 5 years, thanks to a tailored resource planning solution",
              description:
                "We came in to help e-maprod reorganize their team by putting all the cards on the table — building the tool that helped them finally stop relying on Excel.",
            },
            {
              company: "Umedia",
              logo: "/logos/umedia.png",
              meta: "Custom ERP · Security-first",
              result: "A fully custom ERP, built to meet the client's specific security needs.",
              description:
                "Another company that chose 26lights to build their information system — this time, a fully custom ERP because of our client's specific security requirements.",
            },
          ]}
          cta={{ label: "Talk about your case", href: TALK, strong: true }}
        />

        <RelatedPages
          title="Where teams usually go next"
          paths={["/tech/erp", "/ai/erp", "/ai/powered-automation"]}
        />

        <FinalCta
          title="We can help digitalize your business. Why not you?"
          primary={{ label: "Let's talk", href: TALK }}
        />
      </main>
    </div>
  );
}
