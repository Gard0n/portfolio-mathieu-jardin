"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const THEME_KEY = "theme";

type Theme = "light" | "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const isDark = theme === "dark";
  const label = isDark ? "Passer en mode clair" : "Passer en mode sombre";

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme =
      stored === "dark" || stored === "light" ? (stored as Theme) : prefersDark ? "dark" : "light";

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-2 text-xs font-medium text-muted transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label={label}
      aria-pressed={isDark}
    >
      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
      {label}
    </button>
  );
}
