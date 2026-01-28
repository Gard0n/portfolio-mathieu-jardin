import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Portfolio SCM"
};

export default function CoursePortfolioPage() {
  const { coursePortfolio } = siteContent;
  const beerGame = coursePortfolio.caseStudies.beerGame;

  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Supply Chain</p>
        <h1 className="mt-3 text-3xl font-semibold">Portfolio SCM</h1>
        <p className="mt-3 text-sm text-muted">
          Livrables, analyses, points d&apos;apprentissage.
        </p>
      </section>

      <Section title="Intro" description="Point de départ du semestre.">
        <Card>
          <ul className="space-y-2 text-sm">
            {coursePortfolio.intro.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Bilan a priori" description="Ce que je pensais avant.">
        <Card>
          <ul className="space-y-2 text-sm">
            {coursePortfolio.priorReview.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Études de cas" description="Cas et retours d'expérience.">
        <Card title={beerGame.title} description={beerGame.description}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Description activité</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {beerGame.bullets.description.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Consignes</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {beerGame.bullets.instructions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Travail réalisé</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {beerGame.bullets.work.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Démarche</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {beerGame.bullets.approach.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Résultats</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {beerGame.bullets.results.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Analyse réflexive</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {beerGame.bullets.reflection.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Parallèle vie pro</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {beerGame.bullets.workParallel.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Bilan a posteriori" description="À compléter après le semestre.">
        <Card>
          <ul className="space-y-2 text-sm">
            {coursePortfolio.postReview.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Auto-évaluation" description="Auto-critique simple.">
        <Card>
          <ul className="space-y-2 text-sm">
            {coursePortfolio.selfAssessment.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </div>
  );
}
