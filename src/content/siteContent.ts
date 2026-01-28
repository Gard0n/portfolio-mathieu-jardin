export const siteContent = {
  site: {
    name: "Mathieu Jardin",
    role: "Business Developer / Shopify / E-commerce",
    description:
      "Portfolio simple et direct : parcours, alternance, projets et livrables Supply Chain.",
    url: "https://gard0n.github.io/portfolio-mathieu-jardin",
    ogImage: "/og.svg",
    email: "mathieu.jardin@email.fr"
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projects" },
    { label: "Portfolio SCM", href: "/course-portfolio" },
    { label: "Contact", href: "/contact" }
  ],
  home: {
    heroTitle: "Mathieu Jardin",
    heroSubtitle: "Business Developer / Shopify / E-commerce",
    heroBullets: [
      "Étudiant M1 Supply Chain Management",
      "Alternant chez Animaux Vie et Santé",
      "Passion e-commerce et optimisation opérationnelle"
    ],
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
      "Profil hybride : business, digital, supply chain.",
      "J'aime les projets concrets, les tests rapides et les feedbacks clairs.",
      "Mon style : simple, efficace, orienté impact."
    ],
    timeline: [
      {
        date: "2025 - Aujourd'hui",
        title: "M1 Supply Chain Management",
        subtitle: "Parcours en alternance",
        details: [
          "Cours SCM + projets appliqués",
          "Focus flux, coordination, décision",
          "Livrables orientés terrain"
        ]
      },
      {
        date: "2024 - Aujourd'hui",
        title: "Alternance",
        subtitle: "Animaux Vie et Santé",
        details: [
          "E-commerce & développement",
          "Shopify, email, partenariats",
          "Collaboration équipes internes"
        ]
      },
      {
        date: "Avant 2024",
        title: "Formation initiale",
        subtitle: "Marketing / commerce",
        details: ["Bases business", "Culture digitale", "Projets de groupe"]
      }
    ],
    interests: ["Jeux vidéo", "Mangas", "Rap FR"],
    goals: {
      short: ["Renforcer mes bases SCM", "Gagner en impact sur Shopify"],
      mid: ["Piloter des projets e-commerce complets", "Structurer des process"],
      long: ["Manager une équipe produit/ops", "Créer un projet entrepreneurial"]
    },
    skills: [
      {
        name: "Shopify (Liquid)",
        detail: "Appris via alternance + projets perso"
      },
      {
        name: "Emailing & CRM",
        detail: "Tests hebdo, analyses simples, itérations"
      },
      {
        name: "Partenariats",
        detail: "Négociation, cadrage, suivi"
      },
      {
        name: "Supply Chain basics",
        detail: "Cours + études de cas"
      },
      {
        name: "Communication",
        detail: "Projets d'équipe, briefs clairs"
      }
    ]
  },
  projects: {
    tags: ["Shopify", "Emailing", "Partenariats", "SCM"],
    items: [
      {
        slug: "migration-shopify",
        title: "Migration Shopify (10/2025)",
        subtitle: "Étude de cas",
        tags: ["Shopify"],
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
    intro: [
      "Objectif : centraliser les livrables SCM du semestre.",
      "Format : bullets, clair, actionnable."
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
            "Jeu en équipes",
            "Rôles : détaillant, grossiste, distributeur, usine",
            "Objectif : minimiser les coûts et ruptures"
          ],
          instructions: [
            "Commandes à chaque tour",
            "Délais fixes",
            "Infos limitées"
          ],
          work: [
            "Observation des ruptures",
            "Analyse des bullwhip",
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
    postReview: ["À compléter après les prochains livrables"],
    selfAssessment: ["À compléter", "Axes : rigueur, synthèse, prise de décision"]
  },
  contact: {
    links: [
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" }
    ]
  }
} as const;

export type Project = (typeof siteContent.projects.items)[number];
