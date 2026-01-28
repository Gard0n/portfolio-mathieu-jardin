import { cn } from "@/lib/utils";

export type TimelineItem = {
  date: string;
  title: string;
  subtitle?: string;
  details?: readonly string[];
};

type TimelineProps = {
  items: ReadonlyArray<TimelineItem>;
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("grid gap-6", className)}>
      {items.map((item) => (
        <article
          key={`${item.date}-${item.title}`}
          className="relative rounded-3xl border border-border bg-surface/80 p-6 shadow-glow"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            {item.date}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
          {item.subtitle ? <p className="text-sm text-muted">{item.subtitle}</p> : null}
          {item.details ? (
            <ul className="mt-4 space-y-2 text-sm text-text">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
