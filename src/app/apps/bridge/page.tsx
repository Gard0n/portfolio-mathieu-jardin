import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { EarlyAccessLink } from "@/components/EarlyAccessLink";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "GRDN Bridge — Sync prix Shopify vers Recharge",
  description: "GRDN Bridge répercute automatiquement vos prix catalogue et remises Shopify sur les abonnements Recharge, en lecture seule.",
  openGraph: {
    images: [{ url: "/og/bridge.png", width: 1200, height: 630, alt: "GRDN Bridge" }]
  },
  twitter: {
    images: ["/og/bridge.png"]
  }
};

const features = [
  {
    icon: "🔒",
    title: "Lecture seule côté Shopify",
    description: "Aucune écriture sur votre catalogue : GRDN Bridge lit vos prix et remises automatiques, point final. Zéro risque sur vos données produits."
  },
  {
    icon: "⚡",
    title: "Synchronisation automatique",
    description: "Le prix envoyé à Recharge suit vos remises Shopify en temps réel — pas de mise à jour manuelle à chaque changement de tarif."
  },
  {
    icon: "🧾",
    title: "Historique des synchronisations",
    description: "Produit, quantité, prix Shopify, prix envoyé, date : chaque sync est tracée pour pouvoir vérifier ou auditer facilement."
  }
];

const benefits = [
  "Fini les écarts de prix entre la boutique et l'abonnement",
  "Zéro maintenance manuelle récurrente sur les tarifs Recharge",
  "Aucune donnée personnelle de client final stockée"
];

export default function GrdnBridgePage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow md:p-12">
        <Link href="/apps" className="text-xs text-muted hover:text-text">
          ← Tous les produits GRDN
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-4xl">🔗</span>
          <div>
            <h1 className="text-3xl font-semibold md:text-4xl">GRDN Bridge</h1>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Bientôt sur le Shopify App Store
            </span>
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-lg text-text">
          Vos remises Shopify, toujours à jour sur vos abonnements Recharge.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          GRDN Bridge lit vos prix catalogue et vos remises automatiques Shopify (lecture seule) et répercute le bon
          prix sur les abonnements Recharge de vos clients, sans intervention manuelle.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <EarlyAccessLink slug="bridge" appName="GRDN Bridge" />
          <Link
            href="/apps/bridge/cgu"
            className="inline-flex rounded-full border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent/50 hover:text-accent"
          >
            Politique de confidentialité & CGU
          </Link>
        </div>
      </section>

      <Section title="Le problème" description="Recharge ne suit pas toujours vos remises automatiques Shopify.">
        <Card>
          <p className="text-sm text-muted">
            Une remise automatique Shopify ne se répercute pas nativement sur le prix d&apos;un abonnement Recharge.
            Résultat : des écarts de prix entre la boutique et l&apos;abonnement, des réclamations clients, et des
            ajustements manuels récurrents côté marchand. GRDN Bridge automatise cette synchronisation.
          </p>
        </Card>
      </Section>

      <Section title="Ce que fait GRDN Bridge" description="Trois piliers, pensés pour rester simples à opérer.">
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

      <Section title="Pourquoi GRDN Bridge">
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
          Scopes read_products / read_discounts (lecture seule) · Clés API Recharge chiffrées AES-256-GCM · Hébergé
          sur Railway (Postgres)
        </p>
        <p className="mt-4 text-sm text-muted">
          Détails sur les données traitées et les scopes utilisés :{" "}
          <Link href="/apps/bridge/cgu" className="text-accent hover:underline">
            Politique de confidentialité & CGU
          </Link>
        </p>
      </section>
    </div>
  );
}
