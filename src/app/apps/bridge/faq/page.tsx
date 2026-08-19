import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "FAQ — GRDN Bridge",
  description: "Questions fréquentes sur GRDN Bridge : types de remise supportés, prérequis Recharge, comportement à la suppression d'une remise."
};

export default function GrdnBridgeFaqPage() {
  return (
    <AppLegalLayout icon="🔗" name="GRDN Bridge" slug="bridge" lastUpdated="19 août 2026" subtitle="Foire aux questions">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Quels types de remise sont supportés ?</h2>
        <p className="text-sm text-muted">
          Aujourd&apos;hui, uniquement les remises automatiques Shopify en pourcentage avec palier de quantité (par
          exemple &laquo; 3 achetés = -10%, 6 achetés = -15% &raquo;). Les remises à montant fixe, les offres du type
          &laquo; achetez-en un, obtenez-en un &raquo;, les codes promo et les remises créées via une Shopify Function ne
          sont pas encore supportés.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Faut-il déjà avoir Recharge installé ?</h2>
        <p className="text-sm text-muted">
          Oui. GRDN Bridge nécessite que Recharge soit déjà installé et configuré sur la boutique — l&apos;application
          synchronise les prix vers des abonnements Recharge existants, elle ne crée pas de système d&apos;abonnement.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Que se passe-t-il quand je supprime une remise ?</h2>
        <p className="text-sm text-muted">
          Le prix de l&apos;abonnement Recharge concerné repasse automatiquement à son tarif plein (ou à la remise
          restante s&apos;il y en avait plusieurs), sans action de votre part.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">En combien de temps une remise est-elle répercutée ?</h2>
        <p className="text-sm text-muted">
          La synchronisation se déclenche automatiquement dès la création, la modification ou la suppression d&apos;une
          remise. Un contrôle périodique (toutes les heures) vérifie en complément que chaque abonnement facture bien
          le prix attendu, y compris pour les remises programmées à une date future.
        </p>
      </div>
    </AppLegalLayout>
  );
}
