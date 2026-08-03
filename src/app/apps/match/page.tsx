import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité & CGU — GRDN Match",
  description: "Politique de confidentialité et conditions générales d'utilisation de l'application Shopify GRDN Match."
};

export default function GrdnMatchLegalPage() {
  return (
    <AppLegalLayout icon="🧩" name="GRDN Match" lastUpdated="3 août 2026">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">1. Qui est responsable du traitement des données</h2>
        <p className="text-sm text-muted">GRDN Match est éditée par :</p>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Nom / Raison sociale : GRDN — Mathieu Jardin, entrepreneur individuel",
            "SIRET : 93347017100010",
            "Adresse : 39 rue Delerue, Apt B14, Résidence le Clos des Serres, 59290 Wasquehal, France",
            "Contact : mathieu.jardin.pro@gmail.com"
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">2. Ce que fait GRDN Match</h2>
        <p className="text-sm text-muted">
          GRDN Match suggère des produits complémentaires au client dans le panier et au checkout, à partir d&apos;un
          scoring basé sur les métafields produits (catégorie, tags) configurés par le marchand.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">3. Données traitées</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Données boutique : mapping des métafields, poids de scoring, produits mis en avant",
            "Statistiques d'usage agrégées : impressions, clics, ajouts au panier, chiffre d'affaires attribué — rattachées à une session panier, pas à un client identifié nommément",
            "Aucune donnée personnelle de client final identifiable n'est conservée"
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-muted">
          <strong className="text-text">Scopes Shopify utilisés :</strong>{" "}
          <code className="rounded bg-bg/60 px-1.5 py-0.5 text-xs">read_products</code>,{" "}
          <code className="rounded bg-bg/60 px-1.5 py-0.5 text-xs">read_orders</code>,{" "}
          <code className="rounded bg-bg/60 px-1.5 py-0.5 text-xs">read_inventory</code>,{" "}
          <code className="rounded bg-bg/60 px-1.5 py-0.5 text-xs">read_product_listings</code>
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">4. Base légale et finalité</h2>
        <p className="text-sm text-muted">
          Ces données sont traitées sur la base de l&apos;<strong className="text-text">intérêt légitime du marchand</strong>{" "}
          à proposer des recommandations produit pertinentes et à mesurer leur impact.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">5. Durée de conservation</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Conservées tant que l'application reste installée sur la boutique",
            "Supprimées à la désinstallation (webhook app/uninstalled)",
            "Supprimées définitivement en cas de demande shop/redact"
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">6. Droits des personnes concernées</h2>
        <p className="text-sm text-muted">
          Toute personne peut demander l&apos;accès, la rectification ou la suppression de ses données via{" "}
          <a href="mailto:mathieu.jardin.pro@gmail.com" className="text-accent hover:underline">
            mathieu.jardin.pro@gmail.com
          </a>
          . Les demandes de conformité Shopify (customers/data_request, customers/redact) sont traitées
          automatiquement (aucune donnée client n&apos;étant stockée, ce sont des no-ops documentés).
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">7. Sous-traitants et hébergement</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Hébergement applicatif et base de données : Railway (Postgres)",
            "Plateforme de commerce : Shopify (application embarquée, extensions panier et checkout)"
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">8. Sécurité</h2>
        <p className="text-sm text-muted">
          Toutes les données transitent via des connexions chiffrées (HTTPS/TLS).
        </p>
      </div>

      <div className="space-y-2 border-t border-border pt-8">
        <h2 className="text-lg font-semibold">9. Conditions générales d&apos;utilisation</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "L'utilisation de GRDN Match est soumise à l'acceptation des présentes conditions par le marchand lors de l'installation",
            "L'éditeur s'efforce d'assurer la disponibilité et le bon fonctionnement de l'application, sans garantie de résultat commercial",
            "L'éditeur ne pourra être tenu responsable des pertes de revenus ou de données résultant d'une mauvaise configuration par le marchand",
            "Les tarifs applicables sont ceux affichés sur la fiche Shopify App Store au moment de l'installation, susceptibles d'évoluer avec préavis",
            "Les présentes conditions sont soumises au droit français",
            "Contact : mathieu.jardin.pro@gmail.com"
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
