import type { CSSProperties } from "react";

/** Typed style object for the --reveal-delay custom property read by .reveal in globals.css */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
