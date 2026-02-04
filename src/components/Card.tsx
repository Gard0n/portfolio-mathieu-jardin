import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  title?: string;
  description?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Card({ title, description, href, className, children }: CardProps) {
  const content = (
    <div
      className={cn(
        "rounded-3xl border border-border bg-surface/80 p-6 shadow-glow backdrop-blur",
        className
      )}
    >
      {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
      {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <div className="transition motion-safe:group-hover:-translate-y-1 group-hover:shadow-soft">
          {content}
        </div>
      </Link>
    );
  }

  return content;
}
