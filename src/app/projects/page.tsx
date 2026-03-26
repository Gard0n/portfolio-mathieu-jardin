import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { withBasePath } from "@/lib/utils";

export const metadata = {
  title: "Projets",
  description: "Missions e-commerce et projets personnels : migration Shopify, newsletter, développement commercial, et applications web."
};

function ProjectGrid({ projects }: { projects: typeof siteContent.projects.items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => {
        const imageSrc = "image" in project && project.image
          ? withBasePath(project.image as string)
          : null;
        return (
          <div key={project.slug} className="group relative rounded-3xl border border-border bg-surface/80 overflow-hidden shadow-glow transition hover:shadow-soft motion-safe:hover:-translate-y-1">
            {imageSrc ? (
              <Link href={`/projects/${project.slug}`} className="block w-full aspect-video overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition motion-safe:group-hover:scale-105"
                />
              </Link>
            ) : null}
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <Link href={`/projects/${project.slug}`}>
                <h3 className="mt-4 text-lg font-semibold hover:text-accent transition">{project.title}</h3>
              </Link>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
              {"metrics" in project && Array.isArray(project.metrics) && (project.metrics as string[]).length > 0 ? (
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
              <div className="mt-4 flex items-center gap-3">
                <Link href={`/projects/${project.slug}`} className="text-xs font-medium text-accent">
                  Voir le détail →
                </Link>
                {"liveUrl" in project && project.liveUrl ? (
                  <a
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted transition hover:border-accent/50 hover:text-text"
                  >
                    Voir le projet ↗
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectsPage() {
  const { projects } = siteContent;
  const proProjects = projects.items.filter(
    (p) => "category" in p && p.category === "pro"
  );
  const persoProjects = projects.items.filter(
    (p) => "category" in p && p.category === "perso"
  );

  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Sélection</p>
        <h1 className="mt-3 text-3xl font-semibold">Projets</h1>
        <p className="mt-3 text-sm text-muted">
          Missions e-commerce et projets personnels.
        </p>
      </section>

      <Section title="Missions e-commerce" description="Projets pro : résultats concrets, format court.">
        <ProjectGrid projects={proProjects as typeof projects.items} />
      </Section>

      <Section title="Projets personnels" description="Apps construites pour un usage réel.">
        <ProjectGrid projects={persoProjects as typeof projects.items} />
      </Section>
    </div>
  );
}
