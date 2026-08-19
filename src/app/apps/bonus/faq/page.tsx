import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "FAQ - GRDN Bonus",
  description: "Questions fréquentes sur GRDN Bonus : règles combinables, priorités, plafonds de cadeaux, historique d'achat."
};

export default function GrdnBonusFaqPage() {
  return (
    <AppLegalLayout icon="🎁" name="GRDN Bonus" slug="bonus" lastUpdated="19 août 2026" subtitle="Foire aux questions">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Comment combiner plusieurs conditions dans une règle ?</h2>
        <p className="text-sm text-muted">
          Chaque règle peut associer plusieurs conditions à la fois : montant minimum du panier, produit ou collection
          acheté, et historique d&apos;achat du client. Toutes les conditions d&apos;une même règle doivent être remplies
          pour que le cadeau associé soit ajouté.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Comment fonctionnent la priorité et le plafond de cadeaux ?</h2>
        <p className="text-sm text-muted">
          Si plusieurs règles actives correspondent au même panier, la priorité que vous définissez détermine laquelle
          s&apos;applique. Un plafond de cadeaux distribués peut être fixé par règle, pour garder le contrôle sur le
          volume d&apos;une opération promotionnelle plutôt que de la laisser tourner sans limite.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Que signifie concrètement la condition &laquo; historique d&apos;achat &raquo; ?</h2>
        <p className="text-sm text-muted">
          Quand vous activez une règle basée sur l&apos;historique, l&apos;application retient l&apos;identifiant Shopify du
          client et les attributs des produits qu&apos;il a déjà achetés (tag, collection, type de produit, fournisseur) -
          jamais son nom, son email ou son adresse. Cette donnée sert exclusivement à évaluer l&apos;éligibilité à un
          cadeau. Le détail complet (finalité, durée de conservation, droits) est dans la{" "}
          <a href="/apps/bonus/cgu" className="text-accent hover:underline">
            politique de confidentialité
          </a>
          .
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Le client peut-il retirer le cadeau de son panier ?</h2>
        <p className="text-sm text-muted">
          Non, pas aujourd&apos;hui. Le cadeau s&apos;ajoute automatiquement dès que les conditions sont remplies, et il
          n&apos;y a pas d&apos;option pour le retirer manuellement côté client.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Faut-il coder pour configurer les règles ?</h2>
        <p className="text-sm text-muted">
          Non. Les règles, les cadeaux associés et les plafonds se configurent entièrement depuis l&apos;administration
          Shopify de l&apos;application, sans intervention technique.
        </p>
      </div>
    </AppLegalLayout>
  );
}
