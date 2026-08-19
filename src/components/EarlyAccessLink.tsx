"use client";

import { pushDataLayerEvent } from "@/lib/analytics";

type EarlyAccessLinkProps = {
  slug: string;
  appName: string;
};

export function EarlyAccessLink({ slug, appName }: EarlyAccessLinkProps) {
  const subject = encodeURIComponent(`${appName} - Accès anticipé`);

  return (
    <a
      href={`mailto:contact@grdn.fr?subject=${subject}`}
      onClick={() => pushDataLayerEvent("app_early_access_click", { app_slug: slug })}
      className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent-hover"
    >
      Être prévenu au lancement
    </a>
  );
}
