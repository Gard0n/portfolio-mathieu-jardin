"use client";

import Link from "next/link";
import { pushDataLayerEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ButtonBase = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  trackEvent?: string;
  trackParams?: Record<string, unknown>;
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
    "bg-accent text-bg hover:bg-accent-hover shadow-soft focus-visible:ring-2 focus-visible:ring-ring",
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

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, trackEvent, trackParams } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  const track = () => {
    if (trackEvent) pushDataLayerEvent(trackEvent, trackParams);
  };

  if ("href" in props) {
    const { href, target, rel } = props as ButtonLinkProps;
    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={track}>
        {children}
      </Link>
    );
  }

  const { type, href: _href, trackEvent: _trackEvent, trackParams: _trackParams, onClick, ...buttonProps } = props;
  return (
    <button
      type={type ?? "button"}
      className={classes}
      onClick={(e) => {
        track();
        onClick?.(e);
      }}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
