import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { TrackedLink } from "@/components/TrackedLink";
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
        const employer = "employer" in project ? (project.employer as string | undefined) : undefined;
        const employmentType = "employmentType" in project ? (project.employmentType as string | undefined) : undefined;
        return (
          <div key={project.slug} className="group relative rounded-[28px_28px_28px_6px] border border-border bg-surface/80 overflow-hidden shadow-glow transition duration-300 hover:shadow-soft motion-safe:hover:-translate-y-1 motion-safe:hover:rotate-1">
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
              {employer && employmentType ? (
                <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-structure/30 bg-structure/10 px-3 py-1 text-[11px] font-medium text-structure">
                  Réalisé en {employmentType.toLowerCase()} chez {employer}
                </p>
              ) : null}
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
                <TrackedLink
                  href={`/projects/${project.slug}`}
                  event="project_detail_click"
                  eventParams={{ slug: project.slug, location: "projects_grid" }}
                  className="text-xs font-medium text-accent"
                >
                  Voir le détail →
                </TrackedLink>
                {"liveUrl" in project && project.liveUrl ? (
                  <TrackedLink
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noreferrer"
                    event="outbound_link_click"
                    eventParams={{ label: "project_live_url", slug: project.slug }}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted transition hover:border-accent/50 hover:text-text"
                  >
                    Voir le projet ↗
                  </TrackedLink>
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
  const alternanceProjects = projects.items.filter(
    (p) => "category" in p && p.category === "alternance" && "employmentType" in p && p.employmentType === "Alternance"
  );
  const stageProjects = projects.items.filter(
    (p) => "category" in p && p.category === "alternance" && "employmentType" in p && p.employmentType === "Stage"
  );
  const freelanceGabbyProjects = projects.items.filter(
    (p) => "category" in p && p.category === "alternance" && "employmentType" in p && p.employmentType === "Freelance"
  );
  const persoProjects = projects.items.filter(
    (p) => "category" in p && p.category === "perso"
  );

  return (
    <div className="space-y-16">
      <section className="rounded-[32px_32px_32px_8px] border border-border bg-surface/80 p-8 shadow-glow">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Projets</h1>
        <p className="mt-3 text-sm text-muted">
          Trois volets : mon activité freelance GRDN, mon expérience professionnelle (alternance, freelance et stage), et mes projets personnels.
        </p>
      </section>

      <Section title="Freelance GRDN" description="Missions Shopify, email marketing et stratégie e-commerce, en indépendant.">
        <div className="rounded-[28px_28px_28px_6px] border border-border bg-surface/80 p-8 shadow-glow">
          <Badge className="bg-accent/10 text-accent border-accent/30">Freelance</Badge>
          <h3 className="mt-4 text-lg font-semibold">GRDN - Développeur Shopify &amp; stratège e-commerce</h3>
          <p className="mt-2 text-sm text-muted">
            En parallèle de mon alternance, j&apos;accompagne des TPE, PME et créateurs sur leurs projets Shopify : création et migration de boutiques,
            email marketing (Klaviyo) et stratégie e-commerce. Les études de cas clients seront publiées ici au fur et à mesure des missions.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Shopify</Badge>
            <Badge>Email Marketing</Badge>
            <Badge>Stratégie e-commerce</Badge>
          </div>
          <TrackedLink
            href="/services"
            event="cta_click"
            eventParams={{ cta: "voir_services", location: "projects_freelance_grdn" }}
            className="mt-6 inline-flex rounded-full bg-accent px-5 py-2 text-xs font-medium text-bg transition hover:bg-accent-hover"
          >
            Voir les services GRDN →
          </TrackedLink>
        </div>
      </Section>

      <Section
        title="Expérience professionnelle"
        description="Alternance et missions, chacune chez un employeur différent."
      >
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-structure">
              Alternance - Animaux Vie et Santé
            </h3>
            <ProjectGrid projects={alternanceProjects as typeof projects.items} />
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-structure">
              Freelance - Gabby
            </h3>
            <ProjectGrid projects={freelanceGabbyProjects as typeof projects.items} />
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-structure">
              Stage - Gabby
            </h3>
            <ProjectGrid projects={stageProjects as typeof projects.items} />
          </div>
        </div>
      </Section>

      <Section title="Projets personnels" description="Apps construites pour un usage réel.">
        <ProjectGrid projects={persoProjects as typeof projects.items} />
      </Section>
    </div>
  );
}
