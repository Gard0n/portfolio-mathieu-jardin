import { Section } from "@/components/Section";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Projets"
};

export default function ProjectsPage() {
  const { projects } = siteContent;

  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Sélection</p>
        <h1 className="mt-3 text-3xl font-semibold">Projets</h1>
        <p className="mt-3 text-sm text-muted">
          Cases concrets, format court, bullet points.
        </p>
      </section>

      <Section title="Filtrer" description="Choisis un angle, je m'adapte.">
        <ProjectsFilter projects={projects.items} tags={projects.tags} />
      </Section>
    </div>
  );
}
