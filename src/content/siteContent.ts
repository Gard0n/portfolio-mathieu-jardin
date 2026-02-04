import contentJson from "./content.json";

export const siteContent = {
  // Données depuis content.json (éditables via l'admin)
  site: contentJson.site,
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projects" },
    { label: "Portfolio SCM", href: "/course-portfolio" },
    { label: "Contact", href: "/contact" }
  ],
  home: {
    ...contentJson.home,
    ctas: [
      { label: "Voir projets", href: "/projects" },
      { label: "Portfolio SCM", href: "/course-portfolio" },
      { label: "Me contacter", href: "/contact" }
    ],
    highlights: [
      {
        title: "Alternance",
        items: ["Animaux Vie et Santé", "Développement commercial", "E-commerce"]
      },
      {
        title: "Spécialités",
        items: ["Shopify (Liquid)", "Communication", "Stratégie commerciale"]
      },
      {
        title: "Actuellement",
        items: ["M1 + alternance", "Projets perso", "Veille e-commerce"]
      }
    ]
  },
  about: {
    identity: [
      "Business Development e-commerce avec culture Shopify et CRM.",
      "Basé à Lille, mobile (voiture) et ouvert aux opportunités et nouveaux défis.",
      "Autodidacte en code : je crée des sites et outils utiles (ex : bullet journal).",
      "Passionné de jeux vidéo et de manga, j'aime les projets concrets et efficaces."
    ],
    timeline: contentJson.about.timeline,
    education: [
      {
        date: "sept. 2025 - août 2027",
        title: "Master Commerce et Distribution Connectés",
        subtitle: "IAE Lille",
        details: ["Parcours M1 CDC", "Commerce & distribution connectés", "En alternance"]
      },
      {
        date: "janv. 2022 - août 2025",
        title: "Bachelor Marketing",
        subtitle: "ISEG",
        details: [
          "Association Communication",
          "Association Décor (Trésorier)",
          "Marketing digital, négociation, études de marché"
        ]
      }
    ],
    interests: ["Manga", "Jeux vidéo", "Musique"],
    goals: contentJson.about.goals,
    skills: contentJson.about.skills
  },
  projects: {
    tags: [
      "Shopify",
      "Emailing",
      "CRM",
      "Content Marketing",
      "E-commerce",
      "Liquid",
      "Business Development",
      "B2C",
      "Management"
    ],
    items: contentJson.projects.map(p => ({
      ...p,
      context: p.context || [],
      objective: p.objective || [],
      actions: p.actions || [],
      results: p.results || [],
      learnings: p.learnings || []
    })) || [
      {
        slug: "migration-shopify",
        title: "Migration Shopify (10/2025)",
        subtitle: "Étude de cas",
        tags: ["Shopify"],
        image: "/projects/migration-shopify.svg",
        summary: "Préparer une migration propre, sans perdre la perf.",
        context: [
          "Plateforme à stabiliser",
          "Besoin d'un design plus clair",
          "Timing contraint"
        ],
        objective: [
          "Assurer la continuité",
          "Limiter les frictions",
          "Garder une base saine"
        ],
        actions: [
          "Audit des pages clés",
          "Plan de migration étape par étape",
          "Coordination interne"
        ],
        results: ["Livrables de cadrage", "Risques identifiés", "Plan d'action validé"],
        learnings: [
          "Importance des tests",
          "Rôle du brief clair",
          "Prioriser l'expérience client"
        ]
      },
      {
        slug: "newsletter-bu-chat",
        title: "Newsletter BU Chat (3 emails / semaine)",
        subtitle: "Process & tests",
        tags: ["Emailing"],
        image: "/projects/newsletter-bu-chat.svg",
        summary: "Rythme soutenu, contenu utile, amélioration continue.",
        context: ["Cadence élevée", "Audience multi-profils", "Besoin d'engagement"],
        objective: [
          "Stabiliser un rythme",
          "Tester des angles",
          "Garder la cohérence"
        ],
        actions: [
          "Matrice de contenus",
          "A/B tests simples",
          "Rétros rapides"
        ],
        results: ["Process clarifié", "Meilleure régularité", "Feedbacks internes"],
        learnings: ["Clarté > complexité", "Mesurer ce qui compte", "Iterer vite"]
      },
      {
        slug: "partenariats-developpement",
        title: "Partenariats & développement",
        subtitle: "Approche commerciale",
        tags: ["Partenariats"],
        image: "/projects/partenariats-developpement.svg",
        summary: "Cibler, qualifier, négocier sans bruit.",
        context: ["Opportunités hétérogènes", "Ressources limitées", "Besoin de prioriser"],
        objective: ["Cadrer les deals", "Maintenir la qualité", "Créer du long terme"],
        actions: [
          "Pré-qualification",
          "Pitch court",
          "Suivi simple"
        ],
        results: ["Pistes clarifiées", "Partenaires alignés", "Apprentissages terrain"],
        learnings: ["Moins mais mieux", "Préparer ses échanges", "Documenter"]
      }
    ]
  },
  coursePortfolio: {
    teacherNote: [
      "Page structurée pour l'évaluation : objectifs, méthode, résultats, analyse.",
      "Format volontairement synthétique pour faciliter la lecture."
    ],
    intro: [
      "Objectif : présenter les livrables SCM du semestre.",
      "Structure : contexte, méthodologie, résultats, analyse, transposition pro."
    ],
    priorReview: [
      "Connaissances de base en logistique",
      "Vision partielle de la coordination",
      "Envie de comprendre les flux réels"
    ],
    caseStudies: {
      beerGame: {
        title: "Beer Game",
        description:
          "Simulation des flux et des décisions dans une chaîne d'approvisionnement.",
        bullets: {
          description: [
            "Simulation en équipes",
            "Rôles : détaillant, grossiste, distributeur, usine",
            "Objectif : minimiser les coûts et ruptures"
          ],
          instructions: [
            "Commandes à chaque tour",
            "Délais fixes",
            "Infos limitées"
          ],
          work: [
            "Suivi des stocks et ruptures",
            "Observation de l'effet bullwhip",
            "Debrief collectif"
          ],
          approach: ["Décisions progressives", "Ajustements prudents", "Notes à chaque tour"],
          results: ["Variabilité amplifiée", "Stocks instables", "Compréhension des effets"],
          reflection: [
            "Besoin d'alignement",
            "Importance des infos partagées",
            "Rôle critique du rythme"
          ],
          workParallel: [
            "Même logique que la coordination inter-équipes",
            "La clarté réduit le stress opérationnel"
          ]
        }
      }
    },
    postReview: [
      "Meilleure compréhension des flux logistiques",
      "Vision plus systémique des chaînes d'approvisionnement",
      "Conscience accrue de l'importance de la coordination",
      "Capacité à anticiper les effets domino",
      "Liens concrets entre théorie SCM et réalité opérationnelle"
    ],
    selfAssessment: [
      "Rigueur : capacité à suivre des process et documenter proprement",
      "Synthèse : facilité à extraire l'essentiel pour des livrables clairs",
      "Prise de décision : apprentissage en cours, besoin d'affiner l'arbitrage sous contraintes",
      "Collaboration : bonne écoute et communication en équipe",
      "Réflexivité : capacité à tirer des apprentissages de chaque exercice"
    ]
  },
  contact: {
    links: [
      { label: "GitHub", href: "https://github.com/Gard0n" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mathieujardin/" }
    ]
  }
} as const;

type ProjectBase = (typeof siteContent.projects.items)[number];
export type Project = Omit<ProjectBase, "tags"> & { tags: readonly string[] };
