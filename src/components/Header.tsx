import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          {siteContent.site.name}
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 md:flex">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-medium text-text transition hover:border-accent/50 md:inline-flex"
          >
            Contact
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
            className="whitespace-nowrap rounded-full border border-border bg-surface/70 px-3 py-1 text-muted"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
