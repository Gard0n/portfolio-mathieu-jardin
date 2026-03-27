import Link from "next/link";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Services",
  description: "Création et migration Shopify, email marketing, stratégie e-commerce. Missions freelance pour TPE, PME et créateurs."
};

const featured = {
  icon: "🚀",
  title: "Pack Lancement Complet",
  description:
    "La formule complète pour les marques qui partent de zéro : boutique Shopify + email marketing Klaviyo configurés et prêts à vendre.",
  deliverables: [
    "Boutique Shopify personnalisée (thème + apps)",
    "Architecture produits, collections, navigation",
    "Klaviyo configuré : welcome, abandon, post-achat",
    "Calendrier éditorial + 4 premières newsletters",
    "Formation prise en main (1h)"
  ],
  delay: "~4 semaines · 350 €/semaine · ajustable selon le périmètre",
  price: "À partir de 1 400 €"
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
    delay: "2-3 semaines · ~200 €/semaine · selon la sophistication",
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
    delay: "~1 semaine · selon les besoins",
    price: "À partir de 600 €"
  },
  {
    icon: "📊",
    title: "Stratégie & Audit E-commerce",
    description:
      "Audit de la boutique, identification des points de friction et recommandations concrètes pour améliorer la conversion et la croissance.",
    deliverables: [
      "Audit complet de la boutique",
      "Rapport de recommandations",
      "Roadmap priorisée",
      "Session de restitution (1h)"
    ],
    delay: "~1 semaine · 100 €/semaine · selon les besoins",
    price: "À partir de 300 €"
  },
  {
    icon: "🔧",
    title: "Maintenance & Retainer",
    description:
      "Un accompagnement mensuel pour les boutiques déjà en place. Modifications thème, nouveaux flows Klaviyo, newsletters ponctuelles, petits chantiers récurrents.",
    deliverables: [
      "Nombre d'heures définies ensemble",
      "Modifications Shopify (thème, pages, apps)",
      "Newsletters et flows au fil de l'eau",
      "Point mensuel de bilan"
    ],
    delay: "Récurrent — engagement mensuel",
    price: "À partir de 500 €/mois"
  },
  {
    icon: "🎓",
    title: "Formation & Accompagnement",
    description:
      "Sessions 1:1 adaptées à ton profil et tes objectifs. Du commerce à la technique, on couvre ce dont tu as besoin pour avancer.",
    deliverables: [
      "Shopify (thème, apps, gestion quotidienne)",
      "Stratégie e-commerce & email marketing",
      "Techniques de vente, négociation, phoning",
      "Support écrit + ressources post-session"
    ],
    delay: "À définir selon le programme",
    price: "200 €/session"
  }
];

const clients = [
  { label: "TPE & PME", desc: "Entreprises qui lancent ou développent leur présence en ligne" },
  { label: "Petites boutiques", desc: "E-commerces indépendants qui veulent professionnaliser leur boutique" },
  { label: "Créateurs", desc: "Artisans, créateurs de contenu, marques personnelles" }
];

const faqs = [
  {
    q: "Comment se passe une mission concrètement ?",
    a: "On commence par un échange pour cadrer ton besoin, puis je t'envoie un devis détaillé. Une fois validé, je travaille par étapes avec des points réguliers. Livraison, retours, ajustements — tout est documenté."
  },
  {
    q: "Tu travailles en remote ?",
    a: "Oui, à 100% en remote. Je suis basé à Lille mais travaille avec des clients partout en France. Les échanges se font par visio, email ou messagerie selon ta préférence."
  },
  {
    q: "Les tarifs sont fixes ?",
    a: "Non, ce sont des fourchettes indicatives. Chaque projet est différent — le devis final dépend du périmètre, du niveau de personnalisation et des délais souhaités."
  },
  {
    q: "Tu peux intervenir sur une boutique déjà existante ?",
    a: "Oui, c'est même la majorité des cas. Migration, refonte partielle, ajout de fonctionnalités, audit — je m'adapte à l'existant."
  },
  {
    q: "Quel est le délai de réponse ?",
    a: "Je réponds sous 24h en semaine. Pour les projets urgents, dis-le moi directement dans ton message."
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
          Tarifs et délais indicatifs — tout dépend de ton projet.
        </p>
      </section>

      <Section title="Pour qui ?" description="Les profils avec qui je travaille le mieux.">
        <div className="grid gap-4 md:grid-cols-3">
          {clients.map((c) => (
            <Card key={c.label}>
              <p className="font-semibold">{c.label}</p>
              <p className="mt-1 text-sm text-muted">{c.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Pack vedette" description="La formule la plus complète.">
        <Card className="border-accent/30 bg-accent/5">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{featured.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold">{featured.title}</h3>
              <p className="mt-1 text-sm text-muted">{featured.description}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm">
            {featured.deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <div>
              <p className="text-sm font-medium text-accent">{featured.price}</p>
              <p className="text-xs text-muted">{featured.delay}</p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-2 text-xs font-medium text-bg transition hover:opacity-90"
            >
              Travailler ensemble →
            </Link>
          </div>
        </Card>
      </Section>

      <Section title="Offres à la carte" description="Chaque service peut être commandé seul.">
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
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
                <div>
                  <p className="text-sm font-medium text-accent">{service.price}</p>
                  <p className="text-xs text-muted">{service.delay}</p>
                </div>
                <Link
                  href="/contact"
                  className="rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-text transition hover:border-accent/50 hover:text-accent"
                >
                  Travailler ensemble →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="FAQ" description="Les questions qu'on me pose souvent.">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Card key={faq.q}>
              <p className="font-medium">{faq.q}</p>
              <p className="mt-2 text-sm text-muted">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="rounded-[32px] border border-accent/30 bg-accent/5 p-8 text-center">
        <p className="text-sm text-muted">Projet spécifique ou budget différent ?</p>
        <h2 className="mt-2 text-xl font-semibold">Parlons-en, je m&apos;adapte.</h2>
        <p className="mt-3 text-sm text-muted">
          Actuellement disponible pour des missions freelance. Réponse sous 24h.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Travailler ensemble
        </Link>
      </section>
    </div>
  );
}
