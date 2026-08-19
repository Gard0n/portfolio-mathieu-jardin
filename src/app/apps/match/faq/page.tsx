import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "FAQ - GRDN Match",
  description: "Questions fréquentes sur GRDN Match : configuration du scoring, affichage des recommandations, attribution du chiffre d'affaires."
};

export default function GrdnMatchFaqPage() {
  return (
    <AppLegalLayout icon="🧩" name="GRDN Match" slug="match" lastUpdated="19 août 2026" subtitle="Foire aux questions">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Comment définir quels produits se recommandent entre eux ?</h2>
        <p className="text-sm text-muted">
          Le scoring se base sur les métafields de vos produits (type, catégorie, ou tout autre champ que vous
          utilisez déjà dans votre catalogue) - pas sur des catégories figées imposées par l&apos;application. Vous
          définissez depuis l&apos;admin quels champs comptent et avec quel poids.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Comment le score est-il calculé quand plusieurs critères correspondent ?</h2>
        <p className="text-sm text-muted">
          Chaque critère qui correspond entre le produit du panier et un produit candidat ajoute des points selon le
          poids que vous lui avez donné. Le score final cumule ces correspondances de façon additive - les produits
          candidats sont ensuite classés par score décroissant.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Où les recommandations s&apos;affichent-elles ?</h2>
        <p className="text-sm text-muted">
          Dans le panier et à l&apos;étape de paiement (checkout), via des extensions Shopify natives - pas de script
          tiers injecté dans le thème.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Comment lire l&apos;attribution du chiffre d&apos;affaires ?</h2>
        <p className="text-sm text-muted">
          Le tableau de bord affiche le chiffre d&apos;affaires généré par les produits ajoutés au panier depuis une
          recommandation, en plus des statistiques d&apos;impressions et de clics - sans donnée client identifiable
          associée, uniquement des statistiques agrégées.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Faut-il coder pour configurer les règles de scoring ?</h2>
        <p className="text-sm text-muted">
          Non. Le scoring, les poids et les critères se configurent entièrement depuis l&apos;administration Shopify de
          l&apos;application.
        </p>
      </div>
    </AppLegalLayout>
  );
}
