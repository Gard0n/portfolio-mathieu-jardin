import Link from "next/link";
import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-text font-medium">{siteContent.site.name}</p>
          <p>{siteContent.site.role}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {siteContent.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-text">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          {siteContent.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-border px-3 py-1 hover:border-accent/60"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
