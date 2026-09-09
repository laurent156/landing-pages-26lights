import { Wrap } from "@/components/ui/Wrap";
import { revealDelay } from "@/lib/style";
import { ToolChips, type Tool } from "@/components/sections/ToolChips";

type ToolStripProps = {
  /** The one-line caption above the rows — "We build on the best AI frameworks." */
  caption: string;
  /** One array per visual row. Rows are not wrapped automatically: the split is a layout
   * decision the page makes, so a row of five and a row of four stay as authored. */
  rows: Tool[][];
  screenLabel?: string;
};

/** A captioned strip of tool logos on the pale accent wash — the band that sits under the hero
 * on every AI page. It was hand-written on all four of them with identical markup.
 *
 * Distinct from the other two ways tools appear: `ToolGroups` titles and groups them for a page
 * that compares stacks, and `TextSection`'s `toolRows` puts a strip under a block of prose in
 * the same section. Only the chip is shared between the three (see `ToolChips`).
 */
export function ToolStrip({ caption, rows, screenLabel }: ToolStripProps) {
  return (
    <div className="tools" data-screen-label={screenLabel ?? "Tools"}>
      <Wrap>
        <p>{caption}</p>
        <div className="tools-rows">
          {rows.map((row, i) => (
            <div className="tools-row reveal" style={revealDelay(i * 80)} key={row.map((t) => t.name).join("-")}>
              <ToolChips tools={row} />
            </div>
          ))}
        </div>
      </Wrap>
    </div>
  );
}
