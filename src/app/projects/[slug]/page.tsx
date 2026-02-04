import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { withBasePath } from "@/lib/utils";

export function generateStaticParams() {
  return siteContent.projects.items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = siteContent.projects.items.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = siteContent.projects.items.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <Link href="/projects" className="text-xs text-muted hover:text-text">
          ← Retour aux projets
        </Link>
        <h1 className="mt-3 text-3xl font-semibold">{project.title}</h1>
        <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">{project.summary}</p>
      </section>

      {"image" in project && project.image && (
        <section className="rounded-3xl border border-border bg-surface/80 p-4 shadow-glow overflow-hidden">
          <Image
            src={withBasePath(project.image)}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl"
          />
        </section>
      )}

      <Section title="Contexte" description="D'où on part.">
        <Card>
          <ul className="space-y-2 text-sm">
            {project.context.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Objectif" description="Ce que je vise.">
        <Card>
          <ul className="space-y-2 text-sm">
            {project.objective.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Ce que j'ai fait" description="Actions concrètes.">
        <Card>
          <ul className="space-y-2 text-sm">
            {project.actions.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Résultats" description="Neutre et factuel.">
        <Card>
          <ul className="space-y-2 text-sm">
            {project.results.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Ce que j'ai appris" description="Synthèse perso.">
        <Card>
          <ul className="space-y-2 text-sm">
            {project.learnings.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </div>
  );
}
