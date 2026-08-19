"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/siteContent";
import { pushDataLayerEvent } from "@/lib/analytics";
import { Squiggle } from "@/components/Squiggle";
import { cn } from "@/lib/utils";

const basePath = (() => {
  try {
    return new URL(siteContent.site.url).pathname.replace(/\/$/, "");
  } catch {
    return "";
  }
})();

export function Header() {
  const pathname = usePathname() || "/";
  const normalizedPath = pathname.replace(/\/$/, "");
  const trimmedPath = basePath && normalizedPath.startsWith(basePath)
    ? normalizedPath.slice(basePath.length) || "/"
    : normalizedPath || "/";

  const isActive = (href: string) => {
    if (href === "/") return trimmedPath === "/";
    return trimmedPath === href || trimmedPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-structure">
          {siteContent.site.name}
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 md:flex">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative pb-1 text-sm transition",
                isActive(item.href) ? "text-structure font-medium" : "text-muted hover:text-text"
              )}
            >
              {item.label}
              {isActive(item.href) ? (
                <Squiggle className="absolute -bottom-0.5 left-0 h-2 w-full text-accent" />
              ) : null}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onClick={() => pushDataLayerEvent("cta_click", { cta: "travailler_ensemble", location: "header" })}
            className="hidden rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-xs font-medium text-accent transition hover:bg-accent/20 md:inline-flex"
          >
            Travailler ensemble
          </Link>
        </div>
      </div>
      <nav
        aria-label="Navigation mobile"
        className="flex items-center gap-3 overflow-x-auto border-t border-border px-6 py-3 text-xs md:hidden"
      >
        {siteContent.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={cn(
              "whitespace-nowrap rounded-full border px-3 py-1",
              isActive(item.href)
                ? "border-accent bg-accent text-bg"
                : "border-border bg-surface/70 text-muted"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
