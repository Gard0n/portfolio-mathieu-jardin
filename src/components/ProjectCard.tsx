import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Project } from "@/content/siteContent";
import { withBasePath } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const imageSrc = "image" in project && project.image
    ? withBasePath(project.image)
    : null;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-3xl border border-border bg-surface/80 overflow-hidden shadow-glow transition hover:shadow-soft motion-safe:hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {imageSrc ? (
        <div className="w-full aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover transition motion-safe:group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        {"metrics" in project && Array.isArray(project.metrics) && project.metrics.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {(project.metrics as string[]).map((m) => (
              <span key={m} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {m}
              </span>
            ))}
          </div>
        ) : null}
        {"duration" in project && project.duration ? (
          <p className="mt-2 text-xs text-muted">{project.duration as string}</p>
        ) : null}
        <span className="mt-4 inline-flex text-xs font-medium text-accent">
          Voir le détail →
        </span>
      </div>
    </Link>
  );
}
