import Image from "next/image";
import Link from "next/link";
import { Wrap } from "@/components/ui/Wrap";

type FooterLink = { label: string; href: string };

type FooterGroup = { label: string; items: FooterLink[] };

/** Columns hold one or two stacked groups — the same Tech / AI / Business / Marketing families
 * the header mega-menu uses, so the two navigation surfaces agree. A single flat column of a
 * dozen offers (what the live site's footer does) gives the eye nothing to anchor on. */
const FOOTER_COLUMNS: FooterGroup[][] = [
  [
    {
      label: "Tech",
      items: [
        { label: "CTO", href: "/tech/cto" },
        { label: "Dev team", href: "/tech/dev-team" },
        { label: "MVP", href: "/tech/mvp" },
        { label: "Audit", href: "/tech/audit" },
        { label: "ERP Implementation", href: "/tech/erp" },
      ],
    },
    {
      label: "AI",
      items: [
        { label: "Vibe Coding", href: "/ai/production" },
        { label: "AI ERP", href: "/ai/erp" },
        { label: "AI Prototyping", href: "/ai/prototyping" },
        { label: "AI-Powered Automations", href: "/ai/powered-automation" },
      ],
    },
  ],
  [
    {
      label: "Business",
      items: [
        { label: "Business", href: "/growth-plan" },
        { label: "Tech partner", href: "https://www.26lights.com/business/cofounder/" },
        { label: "Coworking", href: "https://www.26lights.com/coworking-space-in-brussels/" },
      ],
    },
    {
      label: "Marketing",
      items: [
        { label: "Marketing", href: "/marketing" },
        { label: "Branding", href: "/branding" },
        { label: "Go-to-Market", href: "/go-to-market" },
      ],
    },
  ],
  [
    {
      label: "Company",
      items: [
        { label: "Manifesto", href: "/manifesto" },
        { label: "Stories", href: "/customer-stories" },
        { label: "Events", href: "https://www.26lights.com/events/" },
        { label: "Careers", href: "https://www.26lights.com/careers/" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      label: "Resources",
      items: [
        { label: "Blog", href: "https://www.26lights.com/blog/" },
        { label: "All our resources", href: "https://www.26lights.com/resources/" },
      ],
    },
  ],
];

function FooterLinkAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith("/")) {
    return <Link href={href}>{children}</Link>;
  }
  return <a href={href}>{children}</a>;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Wrap>
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo">
              <Image src="/logos/26lights-logo.png" alt="26lights" width={210} height={91} />
            </Link>
            <p className="site-footer-tagline">We are growth architects.</p>
            <div className="site-footer-contact">
              <a href="mailto:info@26lights.com">info@26lights.com</a>
              <a href="tel:+32492660089">+32 492 66 00 89</a>
            </div>
            <div className="site-footer-social">
              <a href="https://www.linkedin.com/company/26-lights" aria-label="26lights on LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div className="site-footer-col" key={column[0].label}>
              {column.map((group) => (
                <div className="site-footer-group" key={group.label}>
                  <h4>{group.label}</h4>
                  <div className="site-footer-links">
                    {group.items.map((link) => (
                      <FooterLinkAnchor href={link.href} key={link.label}>
                        {link.label}
                      </FooterLinkAnchor>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Wrap>

      <div className="site-footer-bottom">
        <Wrap className="site-footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} 26lights SPRL &mdash; Brussels / Paris</p>
          <div className="site-footer-legal">
            <a href="https://www.26lights.com/privacy-policy/">Privacy Policy</a>
          </div>
        </Wrap>
      </div>
    </footer>
  );
}
