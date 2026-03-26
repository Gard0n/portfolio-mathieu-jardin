import Link from "next/link";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Services"
};

const services = [
  {
    icon: "🛍️",
    title: "Création & Migration Shopify",
    description:
      "Lancement d'une boutique from scratch ou migration depuis une autre plateforme. Architecture produits, thème personnalisé, apps clés et SEO.",
    deliverables: [
      "Boutique Shopify opérationnelle",
      "Thème personnalisé (sections/blocs)",
      "Intégration des apps essentielles",
      "Redirections 301 & SEO de base"
    ],
    price: "À partir de 800 €"
  },
  {
    icon: "📧",
    title: "Email Marketing (Klaviyo)",
    description:
      "Mise en place de Klaviyo, création des séquences automatisées et gestion des newsletters. Segmentation, A/B tests et suivi des KPIs.",
    deliverables: [
      "Configuration Klaviyo complète",
      "Flows welcome, abandon, post-achat",
      "Calendrier éditorial + rédaction",
      "Reporting mensuel"
    ],
    price: "À partir de 400 €"
  },
  {
    icon: "📊",
    title: "Stratégie E-commerce",
    description:
      "Audit de votre boutique, identification des points de friction et recommandations concrètes pour améliorer la conversion et la croissance.",
    deliverables: [
      "Audit complet de la boutique",
      "Rapport de recommandations",
      "Roadmap priorisée",
      "Session de restitution (1h)"
    ],
    price: "À partir de 300 €"
  },
  {
    icon: "🎨",
    title: "UI/UX & Contenu",
    description:
      "Refonte de pages clés, optimisation des fiches produits et copywriting orienté conversion pour améliorer l'expérience client.",
    deliverables: [
      "Refonte des pages prioritaires",
      "Fiches produits optimisées",
      "Copywriting orienté conversion",
      "Intégration dans Shopify"
    ],
    price: "À partir de 250 €"
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-border bg-surface/80 p-8 shadow-glow">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Freelance</p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Disponible
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold">Services</h1>
        <p className="mt-3 text-sm text-muted">
          Missions freelance en Shopify, email marketing et stratégie e-commerce.
          Tarifs indicatifs — devis personnalisé sur demande.
        </p>
      </section>

      <Section title="Offres" description="Ce que je propose, du plus complet au plus ciblé.">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-medium text-accent">{service.price}</span>
                <Link
                  href="/contact"
                  className="rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-text transition hover:border-accent/50 hover:text-accent"
                >
                  Me contacter →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <section className="rounded-[32px] border border-accent/30 bg-accent/5 p-8 text-center">
        <p className="text-sm text-muted">Projet spécifique ou budget différent ?</p>
        <h2 className="mt-2 text-xl font-semibold">Parlons-en, je m'adapte.</h2>
        <p className="mt-3 text-sm text-muted">
          Actuellement disponible pour des missions freelance. Réponse sous 24h.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Me contacter
        </Link>
      </section>
    </div>
  );
}
