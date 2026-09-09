import type { CSSProperties } from "react";

/** The prototype-sprint card's visual: three app variations side by side, the strongest one highlighted and approved. */
export function AiPrototypingVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="Three app variations side by side, the strongest one highlighted and approved">
        <g className="fv-step" style={{ "--d": "60ms" } as CSSProperties}>
          <rect className="fv-node" x={8} y={12} width={76} height={104} rx={10} />
          <rect className="fv-bar" x={20} y={28} width={52} height={6} rx={3} />
          <rect className="fv-bar" x={20} y={42} width={34} height={6} rx={3} />
          <rect className="fv-bar" x={20} y={94} width={52} height={14} rx={4} />
        </g>
        <g className="fv-step" style={{ "--d": "180ms" } as CSSProperties}>
          <rect className="fv-node" x={112} y={12} width={76} height={104} rx={10} />
          <rect className="fv-bar" x={124} y={28} width={52} height={6} rx={3} />
          <rect className="fv-bar" x={124} y={42} width={28} height={6} rx={3} />
          <rect className="fv-bar" x={124} y={94} width={52} height={14} rx={4} />
        </g>
        <g className="fv-step" style={{ "--d": "320ms" } as CSSProperties}>
          <rect className="fv-node-accent fv-pulse" x={216} y={8} width={76} height={112} rx={10} />
          <rect className="fv-bar-on" x={228} y={25} width={52} height={6} rx={3} />
          <rect className="fv-bar-on" x={228} y={39} width={30} height={6} rx={3} />
          <circle cx={278} cy={22} r={9} fill="#fff" />
          <path className="fv-check" d="m274.3 22 2.5 2.5 4.4-4.8" />
        </g>
      </svg>
    </div>
  );
}
