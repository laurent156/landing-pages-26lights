import type { CSSProperties } from "react";

/** delay(ms) as the `--d` custom property the SVG reveal animations key off. */
function d(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

/** The AI-app-development card's visual: a security checklist where three checks pass and a flagged issue is patched in place — the "last 20% of engineering" argument, drawn. */
export function AiProductionVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="A security audit report: three checks passed, and a flagged issue gets patched live">
        <g className="fv-step" style={d(60)}>
          <path
            className="fv-shield fv-pulse"
            d="M46 14 C60 20, 74 22, 74 22 L74 62 C74 84, 60 96, 46 104 C32 96, 18 84, 18 62 L18 22 C18 22, 32 20, 46 14 Z"
          />
          <path className="fv-check" d="m35 58 8 8 16-18" />
        </g>
        <g className="fv-step" style={d(180)}>
          <rect className="fv-node" x={98} y={8} width={198} height={24} rx={7} />
          <path className="fv-check" d="m110 20 3.4 3.4 6-6.8" />
          <text className="fv-label" x={130} y={20} dy="0.32em">
            Auth tokens encrypted
          </text>
        </g>
        <g className="fv-step" style={d(270)}>
          <rect className="fv-node" x={98} y={40} width={198} height={24} rx={7} />
          <path className="fv-check" d="m110 52 3.4 3.4 6-6.8" />
          <text className="fv-label" x={130} y={52} dy="0.32em">
            SQL injection guards
          </text>
        </g>
        <g className="fv-step" style={d(360)}>
          <g className="fv-flagrow">
            <rect x={98} y={72} width={198} height={24} rx={7} fill="rgba(217,45,32,0.06)" stroke="rgba(217,45,32,0.24)" strokeWidth={1.4} />
            <circle cx={115} cy={84} r={7} fill="none" stroke="var(--danger)" strokeWidth={1.8} />
            <path className="fv-flag" d="M115 80.6 v3.6 M115 87.6 v.1" />
            <text className="fv-label" x={130} y={84} dy="0.32em" fill="var(--danger)">
              Admin routes exposed
            </text>
          </g>
          <g className="fv-fixedrow">
            <rect className="fv-node" x={98} y={72} width={198} height={24} rx={7} />
            <path className="fv-check" d="m110 84 3.4 3.4 6-6.8" />
            <text className="fv-label" x={130} y={84} dy="0.32em">
              Admin routes secured
            </text>
          </g>
        </g>
        <g className="fv-step" style={d(450)}>
          <rect className="fv-node" x={98} y={104} width={198} height={24} rx={7} />
          <path className="fv-check" d="m110 116 3.4 3.4 6-6.8" />
          <text className="fv-label" x={130} y={116} dy="0.32em">
            Rate limiting enabled
          </text>
        </g>
      </svg>
    </div>
  );
}
