import Link from "next/link";

type AppLegalLayoutProps = {
  icon: string;
  name: string;
  slug: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function AppLegalLayout({ icon, name, slug, lastUpdated, children }: AppLegalLayoutProps) {
  return (
    <div className="space-y-12">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <Link href={`/apps/${slug}`} className="text-xs text-muted hover:text-text">
          ← Retour à {name}
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-4xl">{icon}</span>
          <div>
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-sm text-muted">Politique de confidentialité & CGU</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted">Dernière mise à jour : {lastUpdated}</p>
      </section>

      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow space-y-8">
        {children}
      </section>

      <section className="rounded-[32px] border border-border bg-surface/60 p-8 text-center">
        <p className="text-sm text-muted">{name} n&apos;est pas encore publiée sur le Shopify App Store.</p>
        <p className="mt-2 text-xs text-muted">
          Une question sur ce document ?{" "}
          <a href="mailto:contact@grdn.fr" className="text-accent hover:underline">
            contact@grdn.fr
          </a>
        </p>
      </section>
    </div>
  );
}
