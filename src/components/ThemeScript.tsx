/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";

const code = `document.documentElement.classList.add('dark');`;

export function ThemeScript() {
  return (
    <Script
      id="theme-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
