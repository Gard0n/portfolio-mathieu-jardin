export const siteContent = {
  site: {
    name: "Portfolio MJ V1.05",
    role: "Business Developer / Shopify / E-commerce",
    description:
      "Portfolio simple et direct : parcours, alternance, projets et livrables Supply Chain.",
    url: "https://gard0n.github.io/portfolio-mathieu-jardin",
    ogImage: "/og.svg",
    email: "mathieu.jardin.pro@gmail.com"
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projects" },
    { label: "Portfolio SCM", href: "/course-portfolio" },
    { label: "Contact", href: "/contact" }
  ],
  home: {
    heroTitle: "Portfolio MJ V1.05",
    heroSubtitle:
      "Étudiant M1 CDC IAE Lille / Business Developer chez AVS /\nFreelance stratégie et Shopify",
    heroBullets: ["Fan de jeux vidéo", "Fan de manga", "Fan de musique"],
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
      "Bienvenue sur mon portfolio : le but est de résumer qui je suis.",
      "J'espère que ça vous plaira !",
      "Ici : expériences, projets, compétences."
    ],
    timeline: [
      {
        date: "avr. 2025 - aujourd'hui",
        title: "Business Developer",
        subtitle: "Animaux Vie et Santé — stage puis alternance (Hybride, Wasquehal)",
        details: [
          "Gestion de la newsletter Chat",
          "Développement de la boutique Shopify",
          "Gestion de projet, CRM, vente"
        ]
      },
      {
        date: "sept. 2024 - mai 2025",
        title: "Développement commercial",
        subtitle: "Gabby — Freelance (Hybride, Lille)",
        details: ["Prise de rendez-vous", "Suivi clients", "Formation B2C"]
      },
      {
        date: "mai 2024 - juil. 2024",
        title: "Commercial B2C",
        subtitle: "Gabby — Stage (Hybride, Lille)",
        details: [
          "RDV d'estimations pour agences partenaires",
          "Suivi des rendez-vous",
          "Gestion de l'équipe B2C"
        ]
      },
      {
        date: "déc. 2023 - sept. 2025",
        title: "Équipier polyvalent",
        subtitle: "KOEZIO France — CDI temps partiel (Lille)",
        details: [
          "Accueil client",
          "Service en salle",
          "Préparation des plats / envoi en jeu"
        ]
      },
      {
        date: "janv. 2023 - déc. 2023",
        title: "Équipier polyvalent",
        subtitle: "Lidl France — CDI temps partiel (Lesquin)",
        details: ["Accueil client et encaissement", "Mise en rayon", "Optimisation des stratégies"]
      },
      {
        date: "juin 2023 - août 2023",
        title: "Rédacteur",
        subtitle: "Feel — Stage (À distance)",
        details: [
          "Production de textes",
          "Visuels associés",
          "Collaboration avec des professionnels de santé"
        ]
      }
    ],
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
    goals: {
      short: [
        "Valider le M1 CDC avec mention",
        "Développer l'activité e-commerce chez AVS",
        "Améliorer mes compétences Shopify (apps, thèmes)"
      ],
      mid: [
        "Obtenir le Master CDC",
        "Évoluer vers un poste de Product Owner e-commerce",
        "Développer une expertise en stratégie omnicanale"
      ],
      long: [
        "Diriger une équipe e-commerce / digital",
        "Lancer un projet entrepreneurial dans le commerce connecté",
        "Devenir référent sur les sujets Shopify en France"
      ]
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
