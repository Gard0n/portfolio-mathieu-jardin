import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Project } from "@/content/siteContent";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-3xl border border-border bg-surface/80 p-6 shadow-glow transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>
      <span className="mt-4 inline-flex text-xs font-medium text-accent">
        Voir le détail →
      </span>
    </Link>
  );
}
