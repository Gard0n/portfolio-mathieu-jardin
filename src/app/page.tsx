import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Squiggle } from "@/components/Squiggle";
import { siteContent } from "@/content/siteContent";

const metrics = [
  { value: "40 000", label: "abonnés newsletter" },
  { value: "50%", label: "taux d'ouverture" },
  { value: "4 mois", label: "migration Shopify" },
  { value: "1 boutique", label: "Shopify pilotée" }
];

export default function HomePage() {
  const { home } = siteContent;

  return (
    <div className="space-y-16">
      <section className="reveal rounded-[32px_32px_32px_8px] border border-border bg-surface/80 p-8 shadow-glow md:p-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">
            {home.heroTitle}
          </h1>
          <Squiggle className="mx-auto mt-1 h-3 w-40 text-accent md:w-52" />
          <p className="mt-5 whitespace-pre-line text-lg text-text">{home.heroSubtitle}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {home.specialties.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              size="lg"
              trackEvent="cta_click"
              trackParams={{ cta: "travailler_avec_moi", location: "home_hero" }}
            >
              Travailler avec moi
            </Button>
            {home.ctas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant="secondary"
                trackEvent="cta_click"
                trackParams={{ cta: cta.label, location: "home_hero" }}
              >
                {cta.label}
              </Button>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted">
            {home.heroBullets[0]} · Réponse sous 24h · Remote &amp; Lille
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-border bg-surface/80 p-6 text-center md:p-8"
          >
            <p className="text-3xl font-semibold text-accent">{m.value}</p>
            <p className="mt-2 text-xs text-muted">{m.label}</p>
          </div>
        ))}
      </section>

      <Section title="Ils en parlent" description="Retours de personnes avec qui j'ai travaillé.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:p-8">
            <p className="text-sm leading-relaxed">
              &ldquo;Proactif et fiable. J&apos;ai pu travailler avec lui pendant plusieurs mois et je suis très satisfait de son implication, son autonomie et sa communication claire. Ça m&apos;a permis d&apos;avancer sur des sujets commerciaux importants.&rdquo;
            </p>
            <p className="mt-4 text-xs text-muted">Co-fondateur, entreprise e-commerce</p>
          </Card>
          <Card className="md:p-8">
            <p className="text-sm leading-relaxed">
              &ldquo;Professionnel dans son travail. Il va au bout de ses idées et a totalement compris les enjeux du marketing et de la communication. La bonne personne pour un projet sérieux.&rdquo;
            </p>
            <p className="mt-4 text-xs text-muted">Entrepreneur, secteur tech &amp; influence</p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
