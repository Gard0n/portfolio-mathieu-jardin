import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "Changelog - GRDN Bridge",
  description: "Historique des mises à jour de GRDN Bridge."
};

export default function GrdnBridgeChangelogPage() {
  return (
    <AppLegalLayout icon="🔗" name="GRDN Bridge" slug="bridge" lastUpdated="19 août 2026" subtitle="Changelog">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">v1.0 - Lancement initial</h2>
        <p className="text-xs text-muted">En attente de publication sur le Shopify App Store</p>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Synchronisation automatique des remises Shopify par palier de quantité vers le prix récurrent Recharge",
            "Contrôle périodique (toutes les heures) qui rattrape tout écart, y compris pour les remises programmées",
            "Remise automatique au prix plein tarif quand une remise est supprimée",
            "Tableau de bord des remises actives et de l'historique de synchronisation",
            "Interface disponible en français et en anglais"
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
