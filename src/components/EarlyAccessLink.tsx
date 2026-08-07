"use client";

type EarlyAccessLinkProps = {
  slug: string;
  appName: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function EarlyAccessLink({ slug, appName }: EarlyAccessLinkProps) {
  const subject = encodeURIComponent(`${appName} - Accès anticipé`);

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "app_early_access_click", app_slug: slug });
  };

  return (
    <a
      href={`mailto:contact@grdn.fr?subject=${subject}`}
      onClick={handleClick}
      className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent-hover"
    >
      Être prévenu au lancement
    </a>
  );
}
