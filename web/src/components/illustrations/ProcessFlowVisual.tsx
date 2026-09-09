/** A linear process-mapping flow: start, task, decision gate, task, goal — in the shared
 * `.pm-flow` dark-card/single-accent style (see components.css). Shared because the real source
 * reuses the same "process mapping" diagram concept on both growth-plan and
 * marketing/strategy-and-plan, just with different rainbow-colored flat art there; this redraws
 * it once, on-brand, for both. */
export function ProcessFlowVisual() {
  return (
    <div className="pm-flow" role="img" aria-label="A linear process: start, task, decision gateway, task, goal">
      <div className="pm-flow__glow" />
      <svg viewBox="0 0 600 480" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="pmArrow" markerWidth={8} markerHeight={8} refX={5.6} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.45)" />
          </marker>
        </defs>
        <line className="pm-conn" x1="82" y1="240" x2="98" y2="240" markerEnd="url(#pmArrow)" />
        <line className="pm-conn" x1="232" y1="240" x2="248" y2="240" markerEnd="url(#pmArrow)" />
        <line className="pm-conn" x1="334" y1="240" x2="350" y2="240" markerEnd="url(#pmArrow)" />
        <line className="pm-conn" x1="484" y1="240" x2="500" y2="240" markerEnd="url(#pmArrow)" />
        <circle className="pm-start" cx={53} cy={240} r={16} />
        <rect className="pm-task" x={111} y={204} width={108} height={72} rx={14} />
        <path className="pm-gate" d="M291,210 L321,240 L291,270 L261,240 Z" />
        <rect className="pm-task" x={363} y={204} width={108} height={72} rx={14} />
        <circle className="pm-halo" cx={529} cy={240} r={34} />
        <circle className="pm-end" cx={529} cy={240} r={16} />
      </svg>
    </div>
  );
}
