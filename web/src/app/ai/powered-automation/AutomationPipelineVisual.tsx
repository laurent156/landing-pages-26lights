"use client";

import { useEffect, useRef } from "react";
import { Bell, FileText, Table, Briefcase, MessageSquare } from "lucide-react";

type Step = {
  icon: React.ReactNode;
  label: string;
  title: string;
  tag?: string;
  checked?: boolean;
};

const STEPS: (Step & { activateAt?: number; isTrigger?: boolean; isLast?: boolean })[] = [
  {
    isTrigger: true,
    label: "Trigger",
    title: "New inquiry received",
    icon: <Bell aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    activateAt: 450,
    label: "Notion · 0.2s",
    title: "Create client page",
    icon: <FileText aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    activateAt: 900,
    label: "Spreadsheet · 0.4s",
    title: "Log new entry",
    tag: "+Row",
    icon: <Table aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    activateAt: 1350,
    label: "CRM · 1.1s",
    title: "Create deal & contact",
    checked: true,
    icon: <Briefcase aria-hidden="true" strokeWidth={1.8} />,
  },
  {
    activateAt: 1800,
    isLast: true,
    label: "Slack · 0.1s",
    title: "Notify team",
    icon: <MessageSquare aria-hidden="true" strokeWidth={1.8} />,
  },
];

function CheckDotIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4.5 8.2 2.6 2.6 4.4-5" />
    </svg>
  );
}

/** Hero visual — a fake automation pipeline: a light beam travels down through 5 steps, each
 * lighting up on its own delay (real numbers from the source, not evenly spaced). */
export function AutomationPipelineVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const rows = root.querySelectorAll<HTMLDivElement>(".auto-row[data-activate]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    rows.forEach((row) => {
      if (reduceMotion) {
        row.classList.add("is-active");
        return;
      }
      const delay = parseInt(row.getAttribute("data-activate") ?? "0", 10) || 0;
      timers.push(window.setTimeout(() => row.classList.add("is-active"), delay));
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  return (
    <div className="erp-window">
      <div className="erp-titlebar">
        <div className="code-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="erp-url">automation.26lights.flow</span>
      </div>
      <div className="auto-pipeline" ref={ref}>
        <div className="auto-beam" />
        {STEPS.map((step) => (
          <div
            className={`auto-row${step.isTrigger ? " is-trigger reveal" : ""}${step.isLast ? " is-last" : ""}`}
            data-activate={step.activateAt}
            key={step.title}
          >
            <span className="auto-icon">{step.icon}</span>
            <div className="auto-row-text">
              <span className="auto-row-label">{step.label}</span>
              <span className="auto-row-title">{step.title}</span>
            </div>
            {step.tag ? <span className="auto-row-tag">{step.tag}</span> : null}
            {step.checked ? (
              <span className="erp-check-dot">
                <CheckDotIcon />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
