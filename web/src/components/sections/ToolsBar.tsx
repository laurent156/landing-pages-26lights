import Image from "next/image";
import { Wrap } from "@/components/ui/Wrap";

type Tool = {
  src: string;
  alt: string;
};

type ToolsBarProps = {
  rows: Tool[][];
};

export function ToolsBar({ rows }: ToolsBarProps) {
  return (
    <div className="tools" data-screen-label="Tools">
      <Wrap>
        <div className="tools-rows">
          {rows.map((row) => (
            <div className="tools-row" key={row.map((t) => t.alt).join("-")}>
              {row.map((tool) => (
                <div className="tool-chip" key={tool.alt}>
                  <Image src={tool.src} alt={tool.alt} width={120} height={40} className="tool-logo" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Wrap>
    </div>
  );
}
