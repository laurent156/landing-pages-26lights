import Image from "next/image";

export type Tool = {
  /** The tool's name — the image's alt text, and the chip's label when there is no logo. */
  name: string;
  /** Logo file. Omit for a text-only chip. */
  src?: string;
  /** Source-selection hints for next/image. The rendered height comes from `.tool-logo` in CSS
   * (26px, or 47/23px with the size modifiers), so these only affect which file Next serves. */
  width?: number;
  height?: number;
  /** `tool-logo--boost-lg` or `tool-logo--shrink-sm`, for a mark that reads too small or too
   * large beside its neighbours at the default 26px. */
  className?: string;
};

/** A run of tool chips. The chip markup was written three times — the hand-rolled strip on the
 * four AI pages, `TextSection`'s `toolRows`, and `ToolGroups` — while the containers around it
 * are genuinely different shapes (a captioned strip, a strip under prose, labelled groups). So
 * only the chip is shared here; each caller keeps its own container.
 */
export function ToolChips({ tools }: { tools: Tool[] }) {
  return (
    <>
      {tools.map((tool) =>
        tool.src ? (
          <div className="tool-chip" key={tool.name}>
            <Image
              src={tool.src}
              alt={tool.name}
              width={tool.width ?? 120}
              height={tool.height ?? 40}
              className={`tool-logo${tool.className ? ` ${tool.className}` : ""}`}
            />
          </div>
        ) : (
          <div className="tool-chip tool-chip--label" key={tool.name}>
            {tool.name}
          </div>
        )
      )}
    </>
  );
}
