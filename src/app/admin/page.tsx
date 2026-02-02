"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import contentData from "@/content/content.json";

type ContentData = typeof contentData;
type Project = ContentData["projects"][0];

export default function AdminPage() {
  const [content, setContent] = useState<ContentData>(contentData);
  const [activeTab, setActiveTab] = useState<"site" | "home" | "goals" | "projects">("site");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const jsonString = JSON.stringify(content, null, 2);
    navigator.clipboard.writeText(jsonString);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateSite = (field: keyof ContentData["site"], value: string) => {
    setContent((prev) => ({
      ...prev,
      site: { ...prev.site, [field]: value },
    }));
  };

  const updateHome = (field: keyof ContentData["home"], value: string | string[]) => {
    setContent((prev) => ({
      ...prev,
      home: { ...prev.home, [field]: value },
    }));
  };

  const updateGoals = (category: keyof ContentData["about"]["goals"], goals: string[]) => {
    setContent((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        goals: { ...prev.about.goals, [category]: goals },
      },
    }));
  };

  const addProject = () => {
    const newProject: any = {
      slug: "nouveau-projet",
      title: "Nouveau Projet",
      subtitle: "Description courte",
      tags: ["Tag1"],
      image: "/projects/placeholder.svg",
      summary: "Résumé du projet...",
      context: ["Contexte 1", "Contexte 2"],
      objective: ["Objectif 1", "Objectif 2"],
      actions: ["Action 1", "Action 2"],
      results: ["Résultat 1", "Résultat 2"],
      learnings: ["Apprentissage 1", "Apprentissage 2"],
    };
    setContent((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const updateProject = (index: number, field: keyof Project, value: string | string[]) => {
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.map((p, i) =>
        i === index ? { ...p, [field]: value } : p
      ),
    }));
  };

  const deleteProject = (index: number) => {
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-bg p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 rounded-3xl border border-border bg-surface/80 p-8 shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Admin No-Code</h1>
              <p className="mt-2 text-sm text-muted">
                Édite ton portfolio sans toucher au code
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" href="/">
                ← Retour au site
              </Button>
              <Button onClick={handleSave}>
                {saved ? "✓ Copié !" : "💾 Sauvegarder"}
              </Button>
            </div>
          </div>

          {saved && (
            <div className="mt-4 rounded-2xl border border-success bg-success/10 p-4 text-sm text-success">
              ✓ JSON copié ! Colle-le dans <code className="rounded bg-success/20 px-2 py-1">src/content/content.json</code> et sauvegarde.
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("site")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${
              activeTab === "site"
                ? "bg-accent text-bg"
                : "bg-surface/80 text-muted hover:text-text"
            }`}
          >
            Infos du site
          </button>
          <button
            onClick={() => setActiveTab("home")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${
              activeTab === "home"
                ? "bg-accent text-bg"
                : "bg-surface/80 text-muted hover:text-text"
            }`}
          >
            Page d&apos;accueil
          </button>
          <button
            onClick={() => setActiveTab("goals")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${
              activeTab === "goals"
                ? "bg-accent text-bg"
                : "bg-surface/80 text-muted hover:text-text"
            }`}
          >
            Objectifs
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${
              activeTab === "projects"
                ? "bg-accent text-bg"
                : "bg-surface/80 text-muted hover:text-text"
            }`}
          >
            Projets ({content.projects.length})
          </button>
        </div>

        {/* Site Info Tab */}
        {activeTab === "site" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-glow">
              <h2 className="mb-4 text-xl font-semibold">Informations du site</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Nom du site</label>
                  <input
                    type="text"
                    value={content.site.name}
                    onChange={(e) => updateSite("name", e.target.value)}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Rôle / Titre</label>
                  <input
                    type="text"
                    value={content.site.role}
                    onChange={(e) => updateSite("role", e.target.value)}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Description</label>
                  <textarea
                    value={content.site.description}
                    onChange={(e) => updateSite("description", e.target.value)}
                    rows={3}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={content.site.email}
                    onChange={(e) => updateSite("email", e.target.value)}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">URL du site</label>
                  <input
                    type="url"
                    value={content.site.url}
                    onChange={(e) => updateSite("url", e.target.value)}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Home Tab */}
        {activeTab === "home" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-glow">
              <h2 className="mb-4 text-xl font-semibold">Page d&apos;accueil</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Titre principal</label>
                  <input
                    type="text"
                    value={content.home.heroTitle}
                    onChange={(e) => updateHome("heroTitle", e.target.value)}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Sous-titre</label>
                  <textarea
                    value={content.home.heroSubtitle}
                    onChange={(e) => updateHome("heroSubtitle", e.target.value)}
                    rows={3}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Points clés (un par ligne)</label>
                  <textarea
                    value={content.home.heroBullets.join("\n")}
                    onChange={(e) => updateHome("heroBullets", e.target.value.split("\n"))}
                    rows={5}
                    placeholder="Fan de jeux vidéo&#10;Fan de manga&#10;Fan de musique"
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === "goals" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-glow">
              <h2 className="mb-4 text-xl font-semibold">Objectifs professionnels</h2>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">Court terme (un par ligne)</label>
                  <textarea
                    value={content.about.goals.short.join("\n")}
                    onChange={(e) => updateGoals("short", e.target.value.split("\n"))}
                    rows={4}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Moyen terme (un par ligne)</label>
                  <textarea
                    value={content.about.goals.mid.join("\n")}
                    onChange={(e) => updateGoals("mid", e.target.value.split("\n"))}
                    rows={4}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Long terme (un par ligne)</label>
                  <textarea
                    value={content.about.goals.long.join("\n")}
                    onChange={(e) => updateGoals("long", e.target.value.split("\n"))}
                    rows={4}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Mes projets</h2>
              <Button onClick={addProject}>+ Ajouter un projet</Button>
            </div>

            {content.projects.map((project, index) => (
              <div key={index} className="rounded-3xl border border-border bg-surface/80 p-6 shadow-glow">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Projet #{index + 1}</h3>
                  <button
                    onClick={() => deleteProject(index)}
                    className="rounded-full bg-danger/10 px-4 py-2 text-sm text-danger hover:bg-danger/20"
                  >
                    🗑 Supprimer
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Slug (URL)</label>
                      <input
                        type="text"
                        value={project.slug}
                        onChange={(e) => updateProject(index, "slug", e.target.value)}
                        className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Image (chemin)</label>
                      <input
                        type="text"
                        value={project.image}
                        onChange={(e) => updateProject(index, "image", e.target.value)}
                        className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Titre</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => updateProject(index, "title", e.target.value)}
                      className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Sous-titre</label>
                    <input
                      type="text"
                      value={project.subtitle}
                      onChange={(e) => updateProject(index, "subtitle", e.target.value)}
                      className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Tags (séparés par des virgules)</label>
                    <input
                      type="text"
                      value={project.tags.join(", ")}
                      onChange={(e) => updateProject(index, "tags", e.target.value.split(",").map(t => t.trim()))}
                      placeholder="Shopify, Emailing, SCM"
                      className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Résumé</label>
                    <textarea
                      value={project.summary}
                      onChange={(e) => updateProject(index, "summary", e.target.value)}
                      rows={3}
                      className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="mb-4 text-base font-semibold text-accent">Détails du projet</h4>

                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Contexte (un par ligne)</label>
                        <textarea
                          value={"context" in project ? (project.context as string[]).join("\n") : ""}
                          onChange={(e) => updateProject(index, "context", e.target.value.split("\n"))}
                          rows={4}
                          placeholder="Plateforme à stabiliser&#10;Besoin d'un design plus clair&#10;Timing contraint"
                          className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Objectifs (un par ligne)</label>
                        <textarea
                          value={"objective" in project ? (project.objective as string[]).join("\n") : ""}
                          onChange={(e) => updateProject(index, "objective", e.target.value.split("\n"))}
                          rows={4}
                          placeholder="Assurer la continuité&#10;Limiter les frictions&#10;Garder une base saine"
                          className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Actions réalisées (une par ligne)</label>
                        <textarea
                          value={"actions" in project ? (project.actions as string[]).join("\n") : ""}
                          onChange={(e) => updateProject(index, "actions", e.target.value.split("\n"))}
                          rows={4}
                          placeholder="Audit des pages clés&#10;Plan de migration&#10;Coordination interne"
                          className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Résultats (un par ligne)</label>
                        <textarea
                          value={"results" in project ? (project.results as string[]).join("\n") : ""}
                          onChange={(e) => updateProject(index, "results", e.target.value.split("\n"))}
                          rows={4}
                          placeholder="Livrables de cadrage&#10;Risques identifiés&#10;Plan d'action validé"
                          className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Apprentissages (un par ligne)</label>
                        <textarea
                          value={"learnings" in project ? (project.learnings as string[]).join("\n") : ""}
                          onChange={(e) => updateProject(index, "learnings", e.target.value.split("\n"))}
                          rows={4}
                          placeholder="Importance des tests&#10;Rôle du brief clair&#10;Prioriser l'expérience client"
                          className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
