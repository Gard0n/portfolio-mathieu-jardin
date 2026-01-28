import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <div className="space-y-16">
      <section className="reveal rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Portfolio
              </p>
              <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                {home.heroTitle}
              </h1>
              <p className="mt-3 text-lg text-text">{home.heroSubtitle}</p>
            </div>
            <ul className="space-y-2 text-sm">
              {home.heroBullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {home.ctas.map((cta, index) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={index === 0 ? "primary" : index === 1 ? "secondary" : "ghost"}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {home.highlights.map((highlight) => (
              <Card key={highlight.title} title={highlight.title}>
                <ul className="space-y-2 text-sm">
                  {highlight.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Section
        title="À propos, en bref"
        description="Repères rapides avant d&apos;entrer dans le détail."
      >
        <div className="section-grid">
          <Card
            title="Identité"
            description="Business + digital + SCM"
            className="motion-safe:animate-rise"
          >
            <p>
              Étudiant M1 en SCM, alternant dans l&apos;e-commerce. J&apos;aime les
              projets directs et les résultats lisibles.
            </p>
          </Card>
          <Card
            title="Méthode"
            description="Simple, itératif, clair"
            className="motion-safe:animate-rise"
          >
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Prioriser l&apos;impact</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Tester vite</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Documenter simple</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
}
