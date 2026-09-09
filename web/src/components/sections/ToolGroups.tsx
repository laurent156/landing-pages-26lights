import { Wrap } from "@/components/ui/Wrap";
import { ToolChips, type Tool } from "@/components/sections/ToolChips";

type ToolGroup = {
  label: string;
  tools: Tool[];
  /** Span both columns of the 2-up grid — for a group that should sit on its own row below
   * the others (e.g. "Integrated with your current stack" under "Low code"/"Custom dev"). */
  wide?: boolean;
};

type ToolGroupsProps = {
  eyebrow: string;
  title: string;
  alt?: boolean;
  groups: ToolGroup[];
};

export function ToolGroups({ eyebrow, title, alt, groups }: ToolGroupsProps) {
  return (
    <section style={alt ? { background: "#fafafa" } : undefined} data-screen-label={eyebrow}>
      <Wrap>
        <div className="reveal">
          <div className="section-label">{eyebrow}</div>
          <h2 style={{ marginBottom: 40, maxWidth: "24ch" }}>{title}</h2>
        </div>
        <div className="tool-groups">
          {groups.map((group) => (
            <div className={`tool-group${group.wide ? " tool-group--wide" : ""}`} key={group.label}>
              <div className="tool-group-label">{group.label}</div>
              <div className="tool-group-chips">
                <ToolChips tools={group.tools} />
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
