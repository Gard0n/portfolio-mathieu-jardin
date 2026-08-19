"use client";

import Link from "next/link";
import { useRef, useState } from "react";
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

function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35
    });
  };

  const onMouseLeave = () => setOffset({ x: 0, y: 0 });

  return { ref, onMouseMove, onMouseLeave, style: { transform: `translate(${offset.x}px, ${offset.y}px)` } };
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, trackEvent, trackParams } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  const track = () => {
    if (trackEvent) pushDataLayerEvent(trackEvent, trackParams);
  };

  const magneticLink = useMagnetic<HTMLAnchorElement>();
  const magneticButton = useMagnetic<HTMLButtonElement>();

  if ("href" in props) {
    const { href, target, rel } = props as ButtonLinkProps;
    return (
      <Link
        ref={magneticLink.ref}
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={track}
        onMouseMove={magneticLink.onMouseMove}
        onMouseLeave={magneticLink.onMouseLeave}
        style={magneticLink.style}
      >
        {children}
      </Link>
    );
  }

  const { type, href: _href, trackEvent: _trackEvent, trackParams: _trackParams, onClick, style, ...buttonProps } = props;
  return (
    <button
      ref={magneticButton.ref}
      type={type ?? "button"}
      className={classes}
      onClick={(e) => {
        track();
        onClick?.(e);
      }}
      onMouseMove={magneticButton.onMouseMove}
      onMouseLeave={magneticButton.onMouseLeave}
      style={{ ...magneticButton.style, ...style }}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
