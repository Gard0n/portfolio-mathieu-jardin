import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Normes de sécurité des enfants — Stepz",
  description: "Normes de sécurité des enfants et politique de prévention des abus de l'application Stepz.",
};

export default function StepzSafetyPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <Link href="/stepz/privacy" className="text-xs text-muted hover:text-text">
          ← Politique de confidentialité
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-4xl">🛡️</span>
          <div>
            <h1 className="text-3xl font-semibold">Stepz</h1>
            <p className="text-sm text-muted">Normes de sécurité des enfants</p>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow space-y-8">
        <p className="text-xs text-muted">Dernière mise à jour : juillet 2026</p>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">1. Public cible</h2>
          <p className="text-sm text-muted">
            Stepz est une application de remise en forme destinée exclusivement aux utilisateurs âgés de <strong className="text-text">18 ans et plus</strong>. L&apos;inscription requiert la création d&apos;un compte avec une adresse email valide. Aucun mineur n&apos;est autorisé à utiliser l&apos;application.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">2. Fonctionnalités sociales limitées</h2>
          <p className="text-sm text-muted">
            Les fonctionnalités sociales de Stepz sont strictement limitées :
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "Les groupes sont fermés — les membres ne peuvent rejoindre un groupe que sur invitation explicite",
              "Aucune messagerie directe entre utilisateurs",
              "Aucune communication vocale ou vidéo",
              "Seuls le pseudonyme et le nombre de pas sont visibles par les membres d'un même groupe",
              "Aucune interaction avec des inconnus n'est possible"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">3. Prévention des abus sexuels sur mineurs (CSAM)</h2>
          <p className="text-sm text-muted">
            Stepz adopte une politique de tolérance zéro envers tout contenu d&apos;exploitation ou d&apos;abus sexuel sur mineurs (CSAM). L&apos;application ne permet pas le partage de contenu multimédia entre utilisateurs, à l&apos;exception des photos de profil personnelles stockées de manière sécurisée.
          </p>
          <p className="mt-3 text-sm text-muted">
            Tout contenu ou comportement suspect signalé est immédiatement examiné et, le cas échéant, transmis aux autorités compétentes conformément aux lois applicables.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">4. Signalement</h2>
          <p className="text-sm text-muted">
            Les utilisateurs peuvent signaler tout problème lié à la sécurité directement depuis l&apos;application (écran Profil) ou en contactant :{" "}
            <a href="mailto:mathieu.jardin.pro@gmail.com" className="text-accent hover:underline">
              mathieu.jardin.pro@gmail.com
            </a>
          </p>
          <p className="mt-3 text-sm text-muted">
            Tout signalement concernant un mineur ou du contenu illégal sera immédiatement transmis aux autorités nationales compétentes (PHAROS en France) conformément à la législation en vigueur.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">5. Conformité légale</h2>
          <p className="text-sm text-muted">
            Stepz respecte toutes les lois applicables relatives à la protection des enfants en ligne, notamment le RGPD (Union européenne) et la loi COPPA (États-Unis). L&apos;application est conforme aux règles de Google Play concernant les normes de sécurité des enfants.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">6. Contact</h2>
          <p className="text-sm text-muted">
            Pour toute question relative à la sécurité des enfants ou pour signaler un abus :{" "}
            <a href="mailto:mathieu.jardin.pro@gmail.com" className="text-accent hover:underline">
              mathieu.jardin.pro@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
