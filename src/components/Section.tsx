import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ title, description, className, children }: SectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
