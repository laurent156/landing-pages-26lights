"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrap } from "@/components/ui/Wrap";

type NavLink = { label: string; href: string; description?: string };

type NavSubgroup = { label: string; items: NavLink[] };

type Featured = { title: string; body: string; ctaLabel: string; href: string };

type NavGroup = {
  label: string;
  href: string;
  /** One-line description of the family itself, under its eyebrow label. */
  tagline: string;
  items: NavLink[];
  /** A labelled, divided cluster below the main items — for services that read as one
   * sub-family (ERP) rather than separate top-level offers. */
  subgroups?: NavSubgroup[];
  /** A real case-study teaser, used to fill a family column that has fewer services than
   * its siblings. */
  featured?: Featured;
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Tech & AI",
    href: "/tech-team",
    tagline: "Build, ship, and scale with AI",
    items: [
      { label: "MVP", href: "/tech/mvp", description: "From idea to product in market." },
      { label: "Dev Team", href: "/tech/dev-team", description: "Vetted developers, aligned with your vision." },
      { label: "CTO as a Service", href: "/tech/cto", description: "Senior tech leadership, without the hire." },
      { label: "Tech Audit", href: "/tech/audit", description: "Code and infra reviewed before it costs you." },
      { label: "DRP", href: "/tech/drp", description: "A recovery plan for when things break." },
    ],
    subgroups: [
      {
        label: "ERP",
        items: [
          { label: "ERP Implementation", href: "/tech/erp", description: "Replace Excel with a system that fits." },
          {
            label: "Odoo Implementation",
            href: "/tech/odoo-implementation",
            description: "Odoo, set up by Odoo architects.",
          },
          {
            label: "AI ERP",
            href: "/ai/erp",
            description: "Built around your workflows, powered by AI.",
          },
        ],
      },
      {
        label: "AI",
        items: [
          {
            label: "AI App Development",
            href: "/ai/production",
            description: "Secure, scalable, production-ready.",
          },
          {
            label: "AI Prototyping",
            href: "/ai/prototyping",
            description: "Ten times more directions, validated faster.",
          },
          {
            label: "AI-Powered Automations",
            href: "/ai/powered-automation",
            description: "Affordable automation for SME workflows.",
          },
        ],
      },
    ],
  },
  {
    label: "Business",
    href: "/growth-plan",
    tagline: "Structure, fund and steer your growth",
    items: [
      {
        label: "Business Sparring Partner",
        href: "/arik-azoulay",
        description: "A partner who pressure-tests your plan.",
      },
      {
        label: "Fundraising Advisor",
        href: "/jacqueline-c",
        description: "An investor's eye before you pitch.",
      },
      {
        label: "Negotiation Expert",
        href: "/malorie-dreyfus",
        description: "By your side in high-stakes talks.",
      },
      {
        label: "Business Plan",
        href: "/growth-plan#business",
        description: "An airtight plan to raise and grow.",
      },
      { label: "Growth Plan", href: "/growth-plan#growth", description: "A fresh eye on your growth levers." },
      {
        label: "Process Mapping",
        href: "/growth-plan#process",
        description: "The processes you never have time for.",
      },
    ],
  },
  {
    label: "Marketing",
    href: "/marketing",
    tagline: "Reach the people who need your product",
    items: [
      {
        label: "Go To Market",
        href: "/go-to-market",
        description: "Acquisition strategy: research, SEO, ads.",
      },
      {
        label: "Strategy and Plan",
        href: "/marketing",
        description: "A plan built on your real audience.",
      },
      {
        label: "Branding",
        href: "/branding",
        description: "Shape perception, build long-term value.",
      },
      {
        label: "Nurturing (Sales-led)",
        href: "/nurturing",
        description: "Stay top of mind between conversations.",
      },
      {
        label: "Nurturing (Marketing-led)",
        href: "/nurturing-marketing-led",
        description: "An autonomous engine behind your sales team.",
      },
      {
        label: "Video Creation",
        href: "/video-creation",
        description: "High-impact video, strategy through editing.",
      },
    ],
  },
];

const FLAT_LINKS: NavLink[] = [
  { label: "Manifesto", href: "/manifesto" },
  { label: "Stories", href: "/customer-stories" },
  { label: "Events", href: "https://www.26lights.com/events/" },
  { label: "Blog", href: "https://www.26lights.com/blog/" },
  { label: "Careers", href: "https://www.26lights.com/careers/" },
];

const CONTACT_HREF = "/contact";
const TALK = "https://calendly.com/alicia-26lights/30min";

function isInternal(href: string) {
  return href.startsWith("/");
}

function NavAnchor({
  href,
  className,
  ariaCurrent,
  children,
}: {
  href: string;
  className?: string;
  ariaCurrent?: boolean;
  children: React.ReactNode;
}) {
  const current = ariaCurrent ? "page" : undefined;
  if (isInternal(href)) {
    return (
      <Link href={href} className={className} aria-current={current}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} aria-current={current}>
      {children}
    </a>
  );
}

function MegaLink({ item, current }: { item: NavLink; current?: string | null }) {
  const isHere = item.href === current;
  return (
    <NavAnchor href={item.href} className={isHere ? "is-current" : undefined} ariaCurrent={isHere}>
      <span className="site-mega-link-title">{item.label}</span>
      {item.description ? <span className="site-mega-link-desc">{item.description}</span> : null}
    </NavAnchor>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 2.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 2.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Signals "this label is itself a page" on the mega-menu's family titles (Tech/AI/Business/
 * Marketing) — plain `color: inherit; text-decoration: none` gave the link zero visual
 * difference from a section label, so nothing suggested it was clickable at all. */
function PageArrowIcon() {
  return (
    <svg className="site-mega-col-title-arrow" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close every menu once the route changes. This header lives in the root layout and never
  // remounts, so an open panel would otherwise stay open on top of the page just navigated to —
  // and the panel closing is itself a useful signal that the navigation happened.
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const solid = scrolled;
  // Does the page we are on live under the Services menu? Drives the "you are here" state on
  // the trigger, so the menu says which section you are in without being opened.
  const servicesHasCurrent = NAV_GROUPS.some((group) =>
    [...group.items, ...(group.subgroups?.flatMap((s) => s.items) ?? [])].some(
      (item) => item.href === pathname
    )
  );

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <Wrap as="div" className="site-header-inner">
        <Link href="/" className="site-logo" onClick={() => setMobileOpen(false)}>
          {solid ? (
            <Image src="/logos/26lights-logo.png" alt="26lights" width={140} height={61} priority />
          ) : (
            <Image src="/logos/26lights-logo-white.png" alt="26lights" width={140} height={41} priority />
          )}
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <div className="site-nav-item" ref={servicesRef}>
            <button
              type="button"
              className={`site-nav-trigger${servicesHasCurrent ? " is-current" : ""}`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronIcon />
            </button>
            {servicesOpen ? (
              <div className="site-mega">
                <div className="site-mega-cols">
                  {NAV_GROUPS.map((group) => {
                    // A family dense enough to carry subgroups (today: only "Tech & AI", after
                    // merging what used to be two separate columns pointing at the same page)
                    // spans two grid tracks and splits its own content into two sub-columns —
                    // main items left, subgroups right — instead of stacking everything into one
                    // column that ends up roughly twice as tall as its siblings and forces a
                    // scrollbar inside the panel.
                    const isWide = !!group.subgroups?.length;
                    const main = (
                      <>
                        <div className="site-mega-col-title">
                          <NavAnchor href={group.href}>
                            {group.label}
                            <PageArrowIcon />
                          </NavAnchor>
                        </div>
                        <p className="site-mega-col-sub">{group.tagline}</p>
                        <div className="site-mega-links">
                          {group.items.map((item) => (
                            <MegaLink item={item} key={item.label} current={pathname} />
                          ))}
                        </div>
                        {group.featured ? (
                          <div className="site-mega-featured">
                            <h5>{group.featured.title}</h5>
                            <p>{group.featured.body}</p>
                            <a href={group.featured.href}>{group.featured.ctaLabel}</a>
                          </div>
                        ) : null}
                      </>
                    );
                    const aside = group.subgroups?.map((subgroup) => (
                      <div className="site-mega-subgroup" key={subgroup.label}>
                        <p className="site-mega-subgroup-label">{subgroup.label}</p>
                        <div className="site-mega-links">
                          {subgroup.items.map((item) => (
                            <MegaLink item={item} key={item.label} current={pathname} />
                          ))}
                        </div>
                      </div>
                    ));
                    return (
                      <div key={group.label} className={isWide ? "site-mega-col-wide" : undefined}>
                        {isWide ? (
                          <>
                            <div className="site-mega-col-main">{main}</div>
                            <div className="site-mega-col-aside">{aside}</div>
                          </>
                        ) : (
                          <>
                            {main}
                            {aside}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="site-mega-foot">
                  <Link className="site-mega-foot-link" href="/customer-stories">
                    See our customer stories
                  </Link>
                  <div className="site-mega-foot-helper">
                    <span>Not sure what you need?</span>
                    <a className="btn" href={TALK} target="_blank" rel="noopener">
                      Book 30 minutes
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {FLAT_LINKS.map((link) => (
            <a className="site-nav-link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header-cta">
          <a className={`btn ${solid ? "btn-outline" : "btn-ghost"}`} href={CONTACT_HREF}>
            <CalendarIcon />
            Contact us
          </a>
        </div>

        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </Wrap>

      {mobileOpen ? (
        <div className="site-mobile-nav">
          <div className="site-mobile-group">
            <button
              type="button"
              className="site-mobile-group-trigger"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronIcon />
            </button>
            {mobileServicesOpen ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "14px 0 20px" }}>
                {NAV_GROUPS.map((group) => (
                  <div key={group.label}>
                    <div className="site-mega-col-title" style={{ marginBottom: 10 }}>
                      <NavAnchor href={group.href}>{group.label}</NavAnchor>
                    </div>
                    <div className="site-mobile-sublist">
                      {/* subgroup items are flattened in here too — the desktop panel shows them
                          under their own label, but they must stay reachable on mobile. */}
                      {[...group.items, ...(group.subgroups?.flatMap((s) => s.items) ?? [])].map((item) => (
                        <NavAnchor href={item.href} key={item.label} className="">
                          {item.label}
                        </NavAnchor>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {FLAT_LINKS.map((link) => (
            <a className="site-mobile-link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}

          <div className="site-mobile-cta">
            <a className="btn btn-outline" href={CONTACT_HREF}>
              <CalendarIcon />
              Contact us
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
