import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";
import { siteContent } from "@/content/siteContent";

// Remplace G-XXXXXXXXXX par ton ID de mesure Google Analytics 4
const GA_ID = "G-XXXXXXXXXX";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.site.url),
  title: {
    default: siteContent.site.name,
    template: `%s — ${siteContent.site.name}`
  },
  description: siteContent.site.description,
  openGraph: {
    title: siteContent.site.name,
    description: siteContent.site.description,
    url: siteContent.site.url,
    siteName: siteContent.site.name,
    images: [
      {
        url: new URL(siteContent.site.ogImage, siteContent.site.url).toString(),
        width: 1200,
        height: 630,
        alt: siteContent.site.name
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.name,
    description: siteContent.site.description,
    images: [new URL(siteContent.site.ogImage, siteContent.site.url).toString()]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <ThemeScript />
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
