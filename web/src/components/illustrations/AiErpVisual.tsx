import type { CSSProperties } from "react";

/** delay(ms) as the `--d` custom property the SVG reveal animations key off. */
function d(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

/** The AI-ERP card's visual: customers, orders and invoices data feeding into one simple core. */
export function AiErpVisual() {
  return (
    <div className="feat-visual" aria-hidden="true">
      <svg viewBox="0 0 300 128" role="img" aria-label="Customers, orders and invoices data feeding into one simple ERP core">
        <g className="fv-step" style={d(60)}>
          <rect className="fv-node" x={4} y={10} width={76} height={24} rx={7} />
          <text className="fv-label" x={42} y={22} textAnchor="middle" dy="0.35em">
            Customers
          </text>
          <rect className="fv-node" x={4} y={52} width={76} height={24} rx={7} />
          <text className="fv-label" x={42} y={64} textAnchor="middle" dy="0.35em">
            Orders
          </text>
          <rect className="fv-node" x={4} y={94} width={76} height={24} rx={7} />
          <text className="fv-label" x={42} y={106} textAnchor="middle" dy="0.35em">
            Invoices
          </text>
        </g>
        <g className="fv-step" style={d(170)}>
          <path className="fv-link" d="M80 22 C122 22, 128 56, 168 62" />
          <path className="fv-link" d="M80 64 C122 64, 130 64, 168 64" />
          <path className="fv-link" d="M80 106 C122 106, 128 72, 168 66" />
        </g>
        <g className="fv-step" style={d(280)}>
          <circle cx={124} cy={32} r={8} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m120.5 32 2.4 2.4 4.2-4.6" />
          <circle cx={124} cy={64} r={8} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m120.5 64 2.4 2.4 4.2-4.6" />
          <circle cx={124} cy={96} r={8} fill="#fff" stroke="#E4E4EE" strokeWidth={1.2} />
          <path className="fv-check" d="m120.5 96 2.4 2.4 4.2-4.6" />
        </g>
        <g className="fv-step" style={d(390)}>
          <rect className="fv-node-accent fv-pulse" x={168} y={46} width={112} height={36} rx={9} />
          <text className="fv-label-on" x={224} y={64} textAnchor="middle" dy="0.35em">
            Simple Core
          </text>
        </g>
      </svg>
    </div>
  );
}
