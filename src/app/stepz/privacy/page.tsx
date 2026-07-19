import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Stepz",
  description: "Politique de confidentialité de l'application Stepz, disponible sur Google Play Store.",
};

export default function StepzPrivacyPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <Link href="/projects/stepz-app" className="text-xs text-muted hover:text-text">
          ← Retour à Stepz
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-4xl">👟</span>
          <div>
            <h1 className="text-3xl font-semibold">Stepz</h1>
            <p className="text-sm text-muted">Politique de confidentialité</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow space-y-8">
        <p className="text-xs text-muted">Dernière mise à jour : juillet 2026</p>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">1. Données collectées</h2>
          <p className="text-sm text-muted">
            Stepz collecte les données suivantes pour fonctionner :
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "Données d'activité physique (nombre de pas, distance parcourue) via le podomètre iOS ou Health Connect sur Android",
              "Adresse email et pseudonyme pour l'authentification et le classement",
              "Photo de profil (optionnelle, stockée sur nos serveurs)",
              "Données de classement partagées avec vos groupes d'amis (pas hebdomadaires et mensuels)",
              "Notifications push (si vous les activez)"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">2. Utilisation des données</h2>
          <p className="text-sm text-muted">Ces données sont utilisées exclusivement pour :</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "Afficher votre activité physique quotidienne et hebdomadaire",
              "Calculer et afficher votre classement dans vos groupes d'amis",
              "Envoyer des notifications de rappel (si activées par vous)",
              "Générer des statistiques personnelles (streak, records, badges)"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">
            Vos données ne sont <strong className="text-text">jamais vendues</strong> ni partagées avec des tiers à des fins publicitaires ou commerciales.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">3. Stockage et sécurité</h2>
          <p className="text-sm text-muted">
            Les données sont stockées de façon sécurisée via <strong className="text-text">Supabase</strong> (hébergement EU). Les données d&apos;activité restent sur votre appareil jusqu&apos;à synchronisation manuelle. Les mots de passe ne sont jamais stockés en clair.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">4. Partage des données</h2>
          <p className="text-sm text-muted">
            Seules vos données de classement (pseudonyme et nombre de pas) sont visibles par les membres de vos groupes. Aucune donnée n&apos;est partagée avec des tiers commerciaux.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">5. Suppression de vos données</h2>
          <p className="text-sm text-muted">
            Vous pouvez supprimer votre compte et l&apos;intégralité de vos données à tout moment depuis l&apos;écran de profil de l&apos;application ou en contactant{" "}
            <a href="mailto:mathieu.jardin.pro@gmail.com" className="text-accent hover:underline">
              mathieu.jardin.pro@gmail.com
            </a>.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">6. Permissions Android</h2>
          <p className="text-sm text-muted">
            Stepz peut demander l&apos;accès à <strong className="text-text">Health Connect</strong> pour lire vos données de pas. Cet accès est facultatif — vous pouvez saisir vos pas manuellement. Les permissions peuvent être révoquées à tout moment dans les paramètres de votre téléphone.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">7. Contact</h2>
          <p className="text-sm text-muted">
            Pour toute question relative à vos données personnelles :{" "}
            <a href="mailto:mathieu.jardin.pro@gmail.com" className="text-accent hover:underline">
              mathieu.jardin.pro@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Back to app */}
      <section className="rounded-[32px] border border-accent/30 bg-accent/5 p-8 text-center">
        <p className="text-sm text-muted">Vous utilisez Stepz ?</p>
        <h2 className="mt-2 text-xl font-semibold">Téléchargez l&apos;application.</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.gardenny.stepz"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg transition hover:bg-accent-hover"
        >
          Voir sur Google Play ↗
        </a>
      </section>
    </div>
  );
}
