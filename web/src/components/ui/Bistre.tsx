import type { ElementType, HTMLAttributes, ReactNode } from "react";

type BistreProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
};

export function Bistre({ children, className, as: Tag = "div", ...props }: BistreProps) {
  return (
    <Tag className={["bistre", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Tag>
  );
}
