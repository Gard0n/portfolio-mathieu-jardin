import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "Changelog - GRDN Match",
  description: "Historique des mises à jour de GRDN Match."
};

export default function GrdnMatchChangelogPage() {
  return (
    <AppLegalLayout icon="🧩" name="GRDN Match" slug="match" lastUpdated="19 août 2026" subtitle="Changelog">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">v1.0 - Lancement initial</h2>
        <p className="text-xs text-muted">En attente de publication sur le Shopify App Store</p>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Recommandations produit configurables par métafields, sans catégories imposées",
            "Affichage des recommandations dans le panier et au checkout via des extensions Shopify natives",
            "Attribution du chiffre d'affaires généré par les recommandations affichées",
            "Statistiques agrégées (impressions, clics), sans donnée client identifiable conservée"
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </AppLegalLayout>
  );
}
