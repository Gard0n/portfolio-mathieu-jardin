import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Page introuvable</h1>
      <p className="mt-4 max-w-sm text-sm text-muted">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border bg-surface/80 px-6 py-2.5 text-sm font-medium text-text transition hover:border-accent/50"
        >
          Me contacter
        </Link>
      </div>
    </div>
  );
}
