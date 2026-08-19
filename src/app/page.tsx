import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Squiggle } from "@/components/Squiggle";
import { siteContent } from "@/content/siteContent";
import { withBasePath } from "@/lib/utils";

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
      <section className="reveal rounded-[32px_32px_32px_8px] border border-border bg-surface/80 p-8 shadow-glow md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src={withBasePath("/projects/photoMJ.png")}
                  alt="Mathieu Jardin"
                  width={56}
                  height={56}
                  className="rounded-full object-cover ring-2 ring-border"
                />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Freelance disponible
                </span>
              </div>
              <h1 className="mt-4 text-6xl font-semibold tracking-tight md:text-8xl">
                {home.heroTitle}
              </h1>
              <Squiggle className="mt-1 h-3 w-40 text-accent md:w-52" />
              <p className="mt-3 text-lg text-text whitespace-pre-line">
                {home.heroSubtitle}
              </p>
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
                  trackEvent="cta_click"
                  trackParams={{ cta: cta.label, location: "home_hero" }}
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

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-border bg-surface/80 p-5 text-center"
          >
            <p className="text-2xl font-semibold text-accent">{m.value}</p>
            <p className="mt-1 text-xs text-muted">{m.label}</p>
          </div>
        ))}
      </section>

      <Section title="Ils en parlent" description="Retours de personnes avec qui j'ai travaillé.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm leading-relaxed">
              &ldquo;Proactif et fiable. J&apos;ai pu travailler avec lui pendant plusieurs mois et je suis très satisfait de son implication, son autonomie et sa communication claire. Ça m&apos;a permis d&apos;avancer sur des sujets commerciaux importants.&rdquo;
            </p>
            <p className="mt-4 text-xs text-muted">Co-fondateur, entreprise e-commerce</p>
          </Card>
          <Card>
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
