import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Produits",
  description: "Applications Shopify éditées sous la marque GRDN : cadeau automatique, synchronisation de prix Recharge et cross-sell par scoring."
};

const apps = [
  {
    slug: "bonus",
    icon: "🎁",
    name: "GRDN Bonus",
    tagline: "Ajoute automatiquement un produit cadeau au panier selon des règles configurables, pouvant inclure l'historique d'achat du client.",
    tags: ["Cadeau automatique", "Panier"]
  },
  {
    slug: "bridge",
    icon: "🔗",
    name: "GRDN Bridge",
    tagline: "Synchronise les prix et remises catalogue Shopify vers les abonnements Recharge du marchand.",
    tags: ["Abonnements", "Recharge"]
  },
  {
    slug: "match",
    icon: "🧩",
    name: "GRDN Match",
    tagline: "Suggère des produits complémentaires au panier et au checkout via un moteur de scoring sur les métafields produits.",
    tags: ["Cross-sell", "Checkout"]
  }
];

export default function AppsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <h1 className="text-3xl font-semibold">Produits</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          En parallèle des missions freelance, je développe des applications Shopify sous la marque GRDN, à destination
          de tous les marchands.
        </p>
      </section>

      <Section title="Applications GRDN">
        <div className="grid gap-6 md:grid-cols-3">
          {apps.map((app) => (
            <div
              key={app.slug}
              className="flex flex-col rounded-3xl border border-border bg-surface/80 p-6 shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{app.icon}</span>
                <Badge>Bientôt disponible</Badge>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{app.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{app.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/apps/${app.slug}`}
                className="mt-6 text-xs text-muted hover:text-text"
              >
                Politique de confidentialité & CGU →
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
