import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "light" | "dark";

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "",
  ghost: "btn-ghost",
  outline: "btn-outline",
  light: "btn-light",
  dark: "btn-dark",
};

type CommonProps = {
  variant?: Variant;
  wide?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

function buildClassName(variant: Variant, wide: boolean | undefined, className: string | undefined) {
  return ["btn", VARIANT_CLASS[variant], wide ? "btn-wide" : "", className].filter(Boolean).join(" ");
}

export function Button({ variant = "primary", wide, icon, children, className, ...props }: ButtonProps) {
  const classes = buildClassName(variant, wide, className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
