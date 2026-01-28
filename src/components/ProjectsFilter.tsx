"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { TagFilter } from "@/components/TagFilter";
import { Project } from "@/content/siteContent";

const ALL_TAG = "Tous";

export function ProjectsFilter({ projects, tags }: { projects: Project[]; tags: string[] }) {
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG);
  const filterTags = [ALL_TAG, ...tags];

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="space-y-6">
      <TagFilter tags={filterTags} active={activeTag} onChange={setActiveTag} />
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-muted">Aucun projet pour ce tag.</p>
      ) : null}
    </div>
  );
}
