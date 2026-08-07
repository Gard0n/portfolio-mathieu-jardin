import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { EarlyAccessLink } from "@/components/EarlyAccessLink";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "GRDN Bonus — Cadeau automatique pour Shopify",
  description: "GRDN Bonus ajoute automatiquement un produit cadeau au panier de vos clients selon des règles configurables, jusqu'à l'historique d'achat.",
  openGraph: {
    images: [{ url: "/og/bonus.png", width: 1200, height: 630, alt: "GRDN Bonus" }]
  },
  twitter: {
    images: ["/og/bonus.png"]
  }
};

const features = [
  {
    icon: "🎯",
    title: "Règles configurables",
    description: "Montant du panier, produits ou collections déclencheurs, cadeau associé — tout se configure depuis l'admin, sans toucher au code."
  },
  {
    icon: "🕓",
    title: "Basé sur l'historique d'achat",
    description: "Offrez un cadeau aux clients selon ce qu'ils ont déjà acheté : upsell catégorie, fidélisation, relance ciblée."
  },
  {
    icon: "📦",
    title: "Suivi des cadeaux distribués",
    description: "Historique complet (produit, date, valeur) pour piloter la marge et mesurer l'impact des campagnes."
  }
];

const benefits = [
  "Augmenter le panier moyen sans développer de code custom",
  "Automatiser une opération aujourd'hui souvent gérée à la main",
  "Garder la main sur les règles depuis l'admin, en autonomie"
];

export default function GrdnBonusPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow md:p-12">
        <Link href="/apps" className="text-xs text-muted hover:text-text">
          ← Tous les produits GRDN
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-4xl">🎁</span>
          <div>
            <h1 className="text-3xl font-semibold md:text-4xl">GRDN Bonus</h1>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Bientôt sur le Shopify App Store
            </span>
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-lg text-text">
          Le bon cadeau, au bon moment, sans y penser.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          GRDN Bonus ajoute automatiquement un produit cadeau au panier de vos clients dès que les conditions que vous
          définissez sont remplies — jusqu&apos;à des règles basées sur l&apos;historique d&apos;achat, pour récompenser vos clients
          les plus engagés.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <EarlyAccessLink slug="bonus" appName="GRDN Bonus" />
          <Link
            href="/apps/bonus/cgu"
            className="inline-flex rounded-full border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent/50 hover:text-accent"
          >
            Politique de confidentialité & CGU
          </Link>
        </div>
      </section>

      <Section title="Le problème" description="Configurer des cadeaux promo à la main, c'est vite du temps perdu.">
        <Card>
          <p className="text-sm text-muted">
            Gérer des campagnes de cadeaux &laquo; à la main &raquo; (code Liquid custom, apps génériques mal adaptées)
            demande du temps de dev à chaque nouvelle règle, et complique le suivi de ce qui a réellement été offert.
            GRDN Bonus déplace cette logique dans un espace de configuration simple, pensé pour les marchands.
          </p>
        </Card>
      </Section>

      <Section title="Ce que fait GRDN Bonus" description="Trois piliers, pensés pour rester simples à opérer.">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Pourquoi GRDN Bonus">
        <Card>
          <ul className="space-y-2 text-sm">
            {benefits.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <section className="rounded-[32px] border border-border bg-surface/60 p-8 text-center">
        <p className="text-xs text-muted">
          Cart Transform natif Shopify · Hébergé sur Railway (Postgres) · Connexions chiffrées HTTPS/TLS
        </p>
        <p className="mt-4 text-sm text-muted">
          Détails sur les données traitées et les scopes utilisés :{" "}
          <Link href="/apps/bonus/cgu" className="text-accent hover:underline">
            Politique de confidentialité & CGU
          </Link>
        </p>
      </section>
    </div>
  );
}
