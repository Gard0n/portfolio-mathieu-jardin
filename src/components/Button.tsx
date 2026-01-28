\"use client\";

import Link from \"next/link\";
import { cn } from "@/lib/utils";

type ButtonBase = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonLinkProps = ButtonBase & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonButtonProps = ButtonBase &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonLinkProps | ButtonButtonProps;

const variants = {
  primary:
    "bg-accent text-bg hover:bg-accent/90 shadow-soft focus-visible:ring-2 focus-visible:ring-ring",
  secondary:
    "bg-surface text-text border border-border hover:border-accent/50 focus-visible:ring-2 focus-visible:ring-ring",
  ghost:
    "bg-transparent text-text hover:bg-surface border border-transparent focus-visible:ring-2 focus-visible:ring-ring"
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base"
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props) {
    const { href, target, rel } = props;
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const { type, ...rest } = props;
  return (
    <button type={type ?? "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}
