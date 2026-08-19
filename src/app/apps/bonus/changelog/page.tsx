import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "Changelog — GRDN Bonus",
  description: "Historique des mises à jour de GRDN Bonus."
};

export default function GrdnBonusChangelogPage() {
  return (
    <AppLegalLayout icon="🎁" name="GRDN Bonus" slug="bonus" lastUpdated="19 août 2026" subtitle="Changelog">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">v1.0 — Lancement initial</h2>
        <p className="text-xs text-muted">En attente de publication sur le Shopify App Store</p>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Règles de cadeau combinables : montant du panier, produits/collections achetés, historique d'achat",
            "Priorité entre règles actives et plafond de cadeaux distribués par règle",
            "Ajout automatique du cadeau dans le panier du client, sans configuration technique",
            "Historique des cadeaux distribués (produit, date, valeur)"
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
