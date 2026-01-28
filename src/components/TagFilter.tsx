"use client";

import { cn } from "@/lib/utils";

type TagFilterProps = {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
};

export function TagFilter({ tags, active, onChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
      {tags.map((tag) => {
        const isActive = active === tag;
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={isActive}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "border-accent bg-accent text-bg"
                : "border-border bg-surface/80 text-muted hover:text-text"
            )}
            onClick={() => onChange(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
