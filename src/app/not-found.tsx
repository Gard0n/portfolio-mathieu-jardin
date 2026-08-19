import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="text-6xl motion-safe:animate-floaty">🛒</span>
      <p className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-danger/40 bg-danger/10 px-3 py-1 text-xs font-medium text-danger">
        <span className="h-1.5 w-1.5 rounded-full bg-danger" />
        Rupture de stock
      </p>
      <h1 className="mt-4 text-4xl font-semibold">Erreur 404</h1>
      <p className="mt-4 max-w-sm text-sm text-muted">
        Cette page n&apos;est plus disponible. Contrairement à un vrai produit, je ne peux pas te proposer
        d&apos;être prévenu·e quand elle revient — parce qu&apos;elle ne reviendra pas.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg transition hover:bg-accent-hover"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border bg-surface/80 px-6 py-2.5 text-sm font-medium text-text transition hover:border-accent/50"
        >
          Travailler ensemble
        </Link>
      </div>
    </div>
  );
}
