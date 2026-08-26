import type { ElementType, HTMLAttributes, ReactNode } from "react";

type WrapProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
};

export function Wrap({ children, className, as: Tag = "div", ...props }: WrapProps) {
  return (
    <Tag className={["wrap", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Tag>
  );
}
