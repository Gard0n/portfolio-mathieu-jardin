import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata = {
  title: "Produits",
  description: "Applications Shopify éditées sous la marque GRDN : cadeau automatique, synchronisation de prix Recharge et cross-sell par scoring.",
  openGraph: {
    images: [{ url: "/og/apps.png", width: 1200, height: 630, alt: "Produits GRDN" }]
  },
  twitter: {
    images: ["/og/apps.png"]
  }
};

const apps = [
  {
    slug: "bonus",
    icon: "🎁",
    name: "GRDN Bonus",
    hook: "Le bon cadeau, au bon moment, sans y penser.",
    tagline: "Ajoute automatiquement un produit cadeau au panier selon des règles configurables, jusqu'à l'historique d'achat du client.",
    tags: ["Cadeau automatique", "Panier"]
  },
  {
    slug: "bridge",
    icon: "🔗",
    name: "GRDN Bridge",
    hook: "Vos remises Shopify, toujours à jour sur vos abonnements.",
    tagline: "Synchronise automatiquement les prix et remises catalogue Shopify vers les abonnements Recharge, en lecture seule.",
    tags: ["Abonnements", "Recharge"]
  },
  {
    slug: "match",
    icon: "🧩",
    name: "GRDN Match",
    hook: "Les bons produits complémentaires, au bon moment.",
    tagline: "Suggère des produits complémentaires pertinents au panier et au checkout via un moteur de scoring sur les métafields produits.",
    tags: ["Cross-sell", "Checkout"]
  }
];

export default function AppsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow md:p-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Marque GRDN</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Des apps Shopify qui font gagner du temps</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          En parallèle des missions freelance, je développe des applications Shopify sous la marque GRDN : des
          automatisations simples, pensées pour des besoins concrets de marchands e-commerce.
        </p>
      </section>

      <Section title="Applications GRDN" description="Chaque app fait une seule chose, mais la fait bien.">
        <div className="grid gap-6 md:grid-cols-3">
          {apps.map((app) => (
            <TrackedLink
              key={app.slug}
              href={`/apps/${app.slug}`}
              event="apps_card_click"
              eventParams={{ app: app.slug }}
              className="group flex flex-col rounded-3xl border border-border bg-surface/80 p-6 shadow-glow transition motion-safe:hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{app.icon}</span>
                <Badge>Bientôt disponible</Badge>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{app.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{app.hook}</p>
              <p className="mt-2 flex-1 text-sm text-muted">{app.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-6 text-xs font-medium text-text group-hover:text-accent">
                Découvrir {app.name} →
              </span>
            </TrackedLink>
          ))}
        </div>
      </Section>

      <section className="rounded-[32px] border border-border bg-surface/60 p-6 text-center">
        <p className="text-xs text-muted">
          Politiques de confidentialité et conditions d&apos;utilisation disponibles sur chaque fiche produit.
        </p>
      </section>
    </div>
  );
}
