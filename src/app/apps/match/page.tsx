import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { EarlyAccessLink } from "@/components/EarlyAccessLink";
import { Section } from "@/components/Section";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "GRDN Match — Cross-sell par scoring pour Shopify",
  description: "GRDN Match suggère des produits complémentaires pertinents dans le panier et au checkout, via un moteur de scoring sur les métafields produits.",
  openGraph: {
    images: [{ url: "/og/match.png", width: 1200, height: 630, alt: "GRDN Match" }]
  },
  twitter: {
    images: ["/og/match.png"]
  }
};

const features = [
  {
    icon: "⚖️",
    title: "Scoring configurable",
    description: "Poids par catégorie, tags et métafields — le moteur de recommandation se configure depuis l'admin, sans ligne de code."
  },
  {
    icon: "🛒",
    title: "Panier + Checkout",
    description: "Extensions Shopify natives, intégrées à l'expérience d'achat, du panier jusqu'au paiement."
  },
  {
    icon: "📈",
    title: "Statistiques agrégées",
    description: "Impressions, clics, ajouts au panier, chiffre d'affaires attribué — pour mesurer l'impact réel de chaque recommandation."
  }
];

const benefits = [
  "Augmenter le panier moyen avec des suggestions pertinentes, pas génériques",
  "Mesurer précisément le ROI de chaque recommandation produit",
  "Aucune donnée client identifiable conservée"
];

export default function GrdnMatchPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[32px_32px_32px_8px] border border-border bg-surface/80 p-8 shadow-glow md:p-12">
        <Link href="/apps" className="text-xs text-muted hover:text-text">
          ← Tous les produits GRDN
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-4xl">🧩</span>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">GRDN Match</h1>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Bientôt sur le Shopify App Store
            </span>
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-lg text-text">
          Les bons produits complémentaires, au bon moment.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          GRDN Match suggère des produits complémentaires pertinents dans le panier et au checkout, grâce à un moteur
          de scoring basé sur les métafields que vous configurez.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <EarlyAccessLink slug="match" appName="GRDN Match" />
          <TrackedLink
            href="/apps/match/faq"
            event="faq_link_click"
            eventParams={{ app: "match", location: "hero" }}
            className="inline-flex rounded-full border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent/50 hover:text-accent"
          >
            FAQ
          </TrackedLink>
          <TrackedLink
            href="/apps/match/cgu"
            event="cgu_link_click"
            eventParams={{ app: "match", location: "hero" }}
            className="inline-flex rounded-full border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent/50 hover:text-accent"
          >
            Politique de confidentialité & CGU
          </TrackedLink>
        </div>
      </section>

      <Section title="Le problème" description="Le cross-sell générique convertit mal.">
        <Card>
          <p className="text-sm text-muted">
            Les suggestions &laquo; produits similaires &raquo; par défaut sont rarement pertinentes, et un vrai moteur
            de recommandation coûte cher à développer sur mesure. GRDN Match apporte un scoring configurable, sans
            l&apos;investissement d&apos;un développement custom.
          </p>
        </Card>
      </Section>

      <Section title="Ce que fait GRDN Match" description="Trois piliers, pensés pour rester simples à opérer.">
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

      <Section title="Pourquoi GRDN Match">
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

      <section className="rounded-[32px_32px_32px_8px] border border-border bg-surface/60 p-8 text-center">
        <p className="text-xs text-muted">
          Extensions Shopify natives (panier + checkout) · Statistiques agrégées, non nominatives · Hébergé sur
          Railway (Postgres)
        </p>
        <p className="mt-4 text-sm text-muted">
          Comment configurer le scoring :{" "}
          <Link href="/apps/match/faq" className="text-accent hover:underline">
            FAQ
          </Link>
          {" · "}Détails sur les données traitées et les scopes utilisés :{" "}
          <Link href="/apps/match/cgu" className="text-accent hover:underline">
            Politique de confidentialité & CGU
          </Link>
          {" · "}
          <Link href="/apps/match/changelog" className="text-accent hover:underline">
            Changelog
          </Link>
        </p>
      </section>
    </div>
  );
}
