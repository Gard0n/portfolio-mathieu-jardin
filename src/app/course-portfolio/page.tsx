import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
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
          Livrables, méthodologie, analyses, points d&apos;apprentissage.
        </p>
      </section>

      {coursePortfolio.teacherNote ? (
        <Section title="Note à la prof" description="Contexte et intention de la page.">
          <Card>
            <ul className="space-y-2 text-sm">
              {coursePortfolio.teacherNote.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      ) : null}

      <Section title="Cadre et objectifs" description="Point de départ du semestre.">
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

      {coursePortfolio.profile ? (
        <Section title="Présentation" description="Identité et parcours.">
          <Card>
            <ul className="space-y-2 text-sm">
              {coursePortfolio.profile.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      ) : null}

      {coursePortfolio.alternance && coursePortfolio.roles ? (
        <Section title="Alternance & rôle" description="Contexte entreprise et missions.">
          <div className="section-grid">
            <Card title="Contexte AVS">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.alternance.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Missions principales">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.roles.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>
      ) : null}

      {coursePortfolio.objectives ? (
        <Section title="Objectifs professionnels" description="Court, moyen et long terme.">
          <div className="section-grid">
            <Card title="Court terme">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.objectives.short.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Moyen terme">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.objectives.mid.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Long terme">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.objectives.long.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>
      ) : null}

      {coursePortfolio.skills ? (
        <Section title="Compétences" description="Acquises et en développement.">
          <div className="section-grid">
            <Card title="Compétences actuelles">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.skills.current.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Compétences en cours de développement">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.skills.developing.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>
      ) : null}

      {coursePortfolio.experiences ? (
        <Section title="Expériences" description="Professionnelles et extra-professionnelles.">
          <Timeline items={coursePortfolio.experiences} />
        </Section>
      ) : null}

      {coursePortfolio.priorReview ? (
        <Section title="Bilan a priori" description="Point de départ et perception SCM.">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Points forts">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.priorReview.strengths.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Points faibles">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.priorReview.weaknesses.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Ce que je pense connaître">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.priorReview.scmKnowledge.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Vision du SCM">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.priorReview.scmVision.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Exemples d'expérience">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.priorReview.scmExamples.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Points clés">
              <ul className="space-y-2 text-sm">
                {coursePortfolio.priorReview.scmKeyPoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>
      ) : null}

      {coursePortfolio.sessions ? (
        <Section title="Suivi des séances" description="Dates et thèmes abordés.">
          <Card>
            <ul className="space-y-2 text-sm">
              {coursePortfolio.sessions.map((session) => (
                <li key={`${session.date}-${session.title}`} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>
                    <strong>{session.date}</strong> — {session.title}
                    {session.note ? ` : ${session.note}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      ) : null}

      <Section title="Étude de cas principale" description="Beer Game : simulation des flux.">
        <Card title={beerGame.title} description={beerGame.description}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Contexte &amp; objectif</h3>
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
              <h3 className="text-sm font-semibold">Règles &amp; contraintes</h3>
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
              <h3 className="text-sm font-semibold">Méthodologie</h3>
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
              <h3 className="text-sm font-semibold">Résultats observés</h3>
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
            {beerGame.bullets.groupFeedback ? (
              <div>
                <h3 className="text-sm font-semibold">Ressenti sur le groupe</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {beerGame.bullets.groupFeedback.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div>
              <h3 className="text-sm font-semibold">Transposition pro</h3>
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

      {coursePortfolio.caseStudies.trends ? (
        <Section title="Tendances de la supply chain" description="Nearshoring, friendshoring, reshoring.">
          <Card title={coursePortfolio.caseStudies.trends.title} description={coursePortfolio.caseStudies.trends.description}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">Définitions</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.trends.bullets.definitions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Pourquoi c'est important</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.trends.bullets.why.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Impacts sur la stratégie</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.trends.bullets.impacts.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </Section>
      ) : null}

      {coursePortfolio.caseStudies.vuca ? (
        <Section title="Exercice VUCA" description="Volatilité, incertitude, complexité, ambiguïté.">
          <Card title={coursePortfolio.caseStudies.vuca.title} description={coursePortfolio.caseStudies.vuca.description}>
            <p className="text-sm text-muted">
              Produit choisi : <strong>{coursePortfolio.caseStudies.vuca.product}</strong>
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              {coursePortfolio.caseStudies.vuca.format.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">Volatilité</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.analysis.volatility.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Incertitude</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.analysis.uncertainty.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Complexité</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.analysis.complexity.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Ambiguïté</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.analysis.ambiguity.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">Réponses face au V</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.responses.volatility.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Réponses face au U</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.responses.uncertainty.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Réponses face au C</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.responses.complexity.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Réponses face au A</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {coursePortfolio.caseStudies.vuca.responses.ambiguity.map((item) => (
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
      ) : null}

      <Section title="Synthèse d'apprentissage" description="Bilan a posteriori.">
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

      {coursePortfolio.valorization ? (
        <Section title="Valorisation & complémentarité" description="Lien avec l'entreprise et les autres cours.">
          <Card>
            <ul className="space-y-2 text-sm">
              {coursePortfolio.valorization.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      ) : null}

      <Section title="Auto-évaluation" description="Posture et axes de progrès.">
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

      {coursePortfolio.annexes ? (
        <Section title="Annexes" description="Documents complémentaires.">
          <Card>
            <ul className="space-y-2 text-sm">
              {coursePortfolio.annexes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      ) : null}
    </div>
  );
}
