import type { Metadata } from "next";
import { AppLegalLayout } from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité & CGU - GRDN Bridge",
  description: "Politique de confidentialité et conditions générales d'utilisation de l'application Shopify GRDN Bridge."
};

export default function GrdnBridgeLegalPage() {
  return (
    <AppLegalLayout icon="🔗" name="GRDN Bridge" slug="bridge" lastUpdated="3 août 2026">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">1. Qui est responsable du traitement des données</h2>
        <p className="text-sm text-muted">GRDN Bridge est éditée par :</p>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Nom / Raison sociale : GRDN - Mathieu Jardin, entrepreneur individuel",
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
        <h2 className="text-lg font-semibold">2. Ce que fait GRDN Bridge</h2>
        <p className="text-sm text-muted">
          GRDN Bridge lit les prix catalogue et les remises automatiques configurées sur Shopify (lecture seule,
          aucune écriture côté Shopify), puis répercute le prix correct sur les abonnements Recharge du marchand.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">3. Données traitées</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "Données boutique : configuration de la remise abonnement, langue de l'interface",
            "Identifiants d'API Recharge du marchand (jeton d'accès, secret webhook) - chiffrés en base (AES-256-GCM)",
            "Historique des synchronisations de prix (produit, quantité, prix Shopify, prix envoyé, date)",
            "Aucune donnée personnelle de client final n'est collectée ni stockée - l'app ne traite que des données produits et des configurations boutique"
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
          <code className="rounded bg-bg/60 px-1.5 py-0.5 text-xs">read_discounts</code> (lecture seule)
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">4. Base légale et finalité</h2>
        <p className="text-sm text-muted">
          Ces données sont traitées sur la base de l&apos;<strong className="text-text">intérêt légitime du marchand</strong>{" "}
          à faire fonctionner correctement ses remises sur les commandes d&apos;abonnement récurrentes.
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
          <a href="mailto:contact@grdn.fr" className="text-accent hover:underline">
            contact@grdn.fr
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
            "Plateforme de commerce : Shopify (application embarquée)",
            "API tierce : Recharge (plateforme d'abonnement du marchand), pour la synchronisation des prix"
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
          Les identifiants d&apos;API Recharge sont chiffrés en base de données (AES-256-GCM). Toutes les données
          transitent via des connexions chiffrées (HTTPS/TLS).
        </p>
      </div>

      <div className="space-y-2 border-t border-border pt-8">
        <h2 className="text-lg font-semibold">9. Conditions générales d&apos;utilisation</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            "L'utilisation de GRDN Bridge est soumise à l'acceptation des présentes conditions par le marchand lors de l'installation",
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
