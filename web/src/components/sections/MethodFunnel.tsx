import { Bistre } from "@/components/ui/Bistre";

/** The co-creation "method" funnel — six numbered stages narrowing from "map the business
 * together" to "delivered, with follow-through". Same section, same copy, same SVG on
 * growth-plan and arik-azoulay (they had drifted by one em-dash), so it takes no props: a page
 * that needs different stages should get a prop rather than a second copy. */
export function MethodFunnel() {
  return (
<Bistre as="section" id="method" className="method" data-screen-label="The method">
      <div className="wrap">
        <div className="method-split">
          <div className="method-left">
            <div className="section-label method-label reveal">The method</div>
            <h2 className="method-h2 reveal">Why co-creation actually works</h2>
            <p className="method-intro reveal">
              A structured process that turns a room of different perspectives into one shared plan, in a single day.
            </p>
          </div>
          <div className="method-right reveal">
            <svg className="method-funnel" width="100%" viewBox="0 0 720 520" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="40" x2="720" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="112" x2="720" y2="112" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="184" x2="720" y2="184" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="256" x2="720" y2="256" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="328" x2="720" y2="328" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="400" x2="720" y2="400" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <polygon className="seg1" points="110,40 390,40 367.5,112 132.5,112" />
              <polygon className="seg2" points="132.5,112 367.5,112 345,184 155,184" />
              <polygon className="seg3" points="155,184 345,184 322.5,256 177.5,256" />
              <polygon className="seg4" points="177.5,256 322.5,256 300,328 200,328" />
              <polygon className="seg5" points="200,328 300,328 277.5,400 222.5,400" />
              <polygon className="seg6" points="222.5,400 277.5,400 250,472" />
              <text className="txt1" x="88" y="76" fontSize="19" fontWeight="600" textAnchor="end" dominantBaseline="central">
                01
              </text>
              <text className="txt2" x="88" y="148" fontSize="19" fontWeight="600" textAnchor="end" dominantBaseline="central">
                02
              </text>
              <text className="txt3" x="88" y="220" fontSize="19" fontWeight="600" textAnchor="end" dominantBaseline="central">
                03
              </text>
              <text className="txt4" x="88" y="292" fontSize="19" fontWeight="600" textAnchor="end" dominantBaseline="central">
                04
              </text>
              <text className="txt5" x="88" y="364" fontSize="19" fontWeight="700" textAnchor="end" dominantBaseline="central">
                05
              </text>
              <text className="txt6" x="88" y="436" fontSize="19" fontWeight="600" textAnchor="end" dominantBaseline="central">
                06
              </text>
              <text className="txt1" x="408" y="76" fontSize="19" fontWeight="500" dominantBaseline="central">
                Map the business together
              </text>
              <text className="txt2" x="408" y="148" fontSize="19" fontWeight="500" dominantBaseline="central">
                50+ ideas surface in one session
              </text>
              <text className="txt3" x="408" y="220" fontSize="19" fontWeight="500" dominantBaseline="central">
                Evaluated in small groups
              </text>
              <text className="txt4" x="408" y="292" fontSize="19" fontWeight="500" dominantBaseline="central">
                Prioritized together
              </text>
              <text className="txt5" x="408" y="364" fontSize="19" fontWeight="700" dominantBaseline="central">
                3-5 ideas validated
              </text>
              <text className="txt6" x="408" y="436" fontSize="19" fontWeight="500" dominantBaseline="central">
                Delivered, with follow-through
              </text>
            </svg>
          </div>
        </div>
      </div>
    </Bistre>
  );
}
