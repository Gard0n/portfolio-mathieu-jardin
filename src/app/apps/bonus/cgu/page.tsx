import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité & CGU — GRDN Bonus",
  description: "Politique de confidentialité et conditions générales d'utilisation de l'application Shopify GRDN Bonus."
};

export default function GrdnBonusLegalPage() {
  return (
    <AppLegalLayout icon="🎁" name="GRDN Bonus" slug="bonus" lastUpdated="3 août 2026">
      <div className="rounded-2xl border border-danger/40 bg-danger/10 p-4 text-sm text-text">
        GRDN Bonus peut traiter l&apos;historique d&apos;achat des clients d&apos;une boutique, lorsque le marchand active
        les règles de cadeau basées sur cet historique. Voir la section 3 ci-dessous.
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">1. Qui est responsable du traitement des données</h2>
        <p className="text-sm text-muted">GRDN Bonus est éditée par :</p>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Nom / Raison sociale : GRDN — Mathieu Jardin, entrepreneur individuel",
            "SIRET : 93347017100010",
            "Adresse : 39 rue Delerue, Apt B14, Résidence le Clos des Serres, 59290 Wasquehal, France",
            "Contact : contact@grdn.fr"
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">2. Ce que fait GRDN Bonus</h2>
        <p className="text-sm text-muted">
          GRDN Bonus ajoute automatiquement un produit cadeau au panier d&apos;un client quand certaines conditions sont
          remplies — y compris, si le marchand active cette option, des conditions basées sur l&apos;historique d&apos;achat
          du client (ex. &laquo; a déjà acheté dans telle catégorie &raquo;).
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">3. Données traitées</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Données boutique : règles de cadeau, produits offerts, campagnes",
            "Historique d'achat du client, uniquement quand la fonctionnalité de règles basées sur l'historique est activée par le marchand : identifiant client Shopify, tags/collections/types de produits déjà achetés, dates d'achat. Cette donnée sert exclusivement à évaluer si un client est éligible à un cadeau.",
            "Historique des cadeaux distribués (produit, date, valeur)"
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
          <code className="rounded bg-bg/60 px-1.5 py-0.5 text-xs">read_customers</code> (ou équivalent selon
          configuration), <code className="rounded bg-bg/60 px-1.5 py-0.5 text-xs">write_cart_transforms</code>
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">4. Base légale et finalité</h2>
        <p className="text-sm text-muted">
          Les données boutique (règles, campagnes) sont traitées sur la base de l&apos;
          <strong className="text-text">intérêt légitime du marchand</strong>. L&apos;historique d&apos;achat client, quand
          utilisé, l&apos;est également sur cette base, dans le seul but de déterminer l&apos;éligibilité à une offre —
          jamais à des fins de profilage marketing plus large ou de revente à des tiers.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">5. Durée de conservation</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Les données sont conservées tant que l'application reste installée sur la boutique",
            "Supprimées à la désinstallation (webhook app/uninstalled)",
            "En cas de demande de suppression via Shopify (customers/redact), l'historique d'achat du client concerné est purgé spécifiquement",
            "En cas de demande shop/redact, toutes les données de la boutique, y compris l'historique d'achat de tous ses clients, sont supprimées définitivement"
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
          Toute personne peut demander l&apos;accès, la rectification ou la suppression de son historique d&apos;achat
          conservé par l&apos;application via{" "}
          <a href="mailto:contact@grdn.fr" className="text-accent hover:underline">
            contact@grdn.fr
          </a>
          , ou via les canaux de conformité Shopify (customers/data_request, customers/redact), traités
          automatiquement par l&apos;application.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">7. Sous-traitants et hébergement</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Hébergement applicatif et base de données : Railway (Postgres)",
            "Plateforme de commerce : Shopify (application embarquée, extension panier)"
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
          Toutes les données transitent via des connexions chiffrées (HTTPS/TLS). L&apos;accès aux données
          d&apos;historique client est limité aux besoins fonctionnels de l&apos;évaluation des règles de cadeau.
        </p>
      </div>

      <div className="space-y-2 border-t border-border pt-8">
        <h2 className="text-lg font-semibold">9. Conditions générales d&apos;utilisation</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "L'utilisation de GRDN Bonus est soumise à l'acceptation des présentes conditions par le marchand lors de l'installation",
            "Le marchand est responsable d'informer ses propres clients de l'utilisation de leur historique d'achat s'il active cette fonctionnalité, conformément à sa propre politique de confidentialité boutique",
            "L'éditeur s'efforce d'assurer la disponibilité et le bon fonctionnement de l'application, sans garantie de résultat commercial",
            "L'éditeur ne pourra être tenu responsable des pertes de revenus ou de données résultant d'une mauvaise configuration par le marchand",
            "Les tarifs applicables sont ceux affichés sur la fiche Shopify App Store au moment de l'installation, susceptibles d'évoluer avec préavis",
            "Les présentes conditions sont soumises au droit français",
            "Contact : contact@grdn.fr"
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
