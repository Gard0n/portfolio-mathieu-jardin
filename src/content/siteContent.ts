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
    profile: [
      "Mathieu Jardin, 21 ans, originaire du Nord.",
      "M1 CDC (IAE Lille) après un bachelor marketing & communication digitale (ISEG Lille).",
      "Passionné de jeux vidéo, manga et musique (rap français).",
      "En appartement depuis sept. 2024 pour simplifier le quotidien."
    ],
    alternance: [
      "Alternance chez Animaux Vie et Santé (après un stage en fin de bachelor).",
      "E-commerce de compléments, pâtées et friandises pour chiens et chats, axe naturel.",
      "Deux sites : boutique AVS + site de formation positive pour propriétaires de chiens."
    ],
    roles: [
      "Développeur Shopify (création et gestion de la boutique depuis 06/2025, migration en 10/2025).",
      "Responsable BU chat (newsletter : 3 emails/semaine).",
      "Développement via les partenariats."
    ],
    objectives: {
      short: [
        "Terminer mon alternance chez AVS et monter en compétences.",
        "Développer un freelance progressivement.",
        "Lancer des projets avec des proches."
      ],
      mid: [
        "Trouver mon sujet de prédilection.",
        "Tester différents environnements (AVS ou ailleurs).",
        "Continuer à apprendre par l'expérimentation."
      ],
      long: [
        "Rester ouvert aux opportunités et construire mon parcours.",
        "Faire évoluer mon rôle selon les expériences et rencontres."
      ]
    },
    skills: {
      current: [
        "Marketing & communication : vision stratégique globale.",
        "Shopify (Liquid) : personnalisation et gestion de boutique.",
        "Négociation : expériences commerciales.",
        "Contact client : jobs étudiants et terrain."
      ],
      developing: [
        "Compétences rédactionnelles.",
        "Posture professionnelle (réflexion, communication, conciliation)."
      ]
    },
    experiences: [
      {
        date: "janv. 2023 - déc. 2023",
        title: "Employé polyvalent",
        subtitle: "Lidl — Contrat 12h",
        details: [
          "Mise en rayon, rangement, nettoyage",
          "Responsable boulangerie",
          "Caisse",
          "Organisation et efficacité en rythme soutenu"
        ]
      },
      {
        date: "déc. 2023 - sept. 2025",
        title: "Équipier polyvalent",
        subtitle: "Koezio — Contrat 15h",
        details: [
          "Accueil & briefing client",
          "Bar et cuisine",
          "Responsable parcours en hauteur (CQPOPAH niveau 4)",
          "Formation SST",
          "Adaptation rapide et travail en équipe"
        ]
      },
      {
        date: "juin 2024 - août 2024",
        title: "Commercial BtoC",
        subtitle: "Gabby.Immo — Stage",
        details: [
          "Contact clients pour agences immobilières",
          "Gestion des conflits",
          "Relation BtoB & BtoC"
        ]
      },
      {
        date: "avr. 2025 - août 2025",
        title: "Business Dev",
        subtitle: "Animaux Vie et Santé — Stage",
        details: [
          "Newsletter chat (3 emails/semaine)",
          "Création du site Shopify",
          "Découverte de l'univers animalier"
        ]
      },
      {
        date: "sept. 2025 - présent",
        title: "Business Dev",
        subtitle: "Animaux Vie et Santé — Alternance",
        details: [
          "Continuité du stage",
          "Réflexion stratégique globale",
          "Formation des équipes aux nouveaux outils"
        ]
      }
    ],
    priorReview: {
      strengths: [
        "Autonome, organisé et proactif.",
        "Curieux, besoin de comprendre les enjeux avant d'agir.",
        "À l'aise en environnement dynamique et en situation de rush.",
        "Capable de distinguer solutions court vs long terme.",
        "Apprécie le travail en équipe pour l'échange d'idées."
      ],
      weaknesses: [
        "Manque de temps ou d'informations qui peut freiner l'action.",
        "Besoin de comprendre le fond avant d'agir, parfois au détriment de la vitesse.",
        "Moins à l'aise avec la rédaction.",
        "Risque d'oubli quand plusieurs tâches s'accumulent."
      ],
      scmKnowledge: [
        "Gestion des flux de produits et des stocks.",
        "Gestion des ruptures et de leurs impacts.",
        "Chaîne complète : des matières premières à la réception client.",
        "Vision basée sur approvisionnement, logistique et organisation."
      ],
      scmExamples: [
        "Commande des produits chez AVS.",
        "Gestion des commandes via notre ESAT.",
        "Dysfonctionnements possibles : retards, surcoûts, baisse de qualité perçue."
      ],
      scmVision: [
        "Supply chain à la fois opérationnelle et stratégique.",
        "Centrale pour l'entreprise.",
        "Créatrice de valeur ou de difficultés si mal gérée."
      ],
      scmKeyPoints: [
        "La coordination entre acteurs est la plus difficile.",
        "La communication est essentielle pour éviter ruptures, retards et décisions d'urgence."
      ]
    },
    sessions: [
      {
        date: "07/01/2026",
        title: "Séance",
        note: "Absent"
      },
      {
        date: "28/01/2026",
        title: "Beer Game",
        note: "Simulation Transentis"
      },
      {
        date: "28/01/2026",
        title: "Tendances supply",
        note: "Nearshoring / Friendshoring / Reshoring"
      },
      {
        date: "04/02/2026",
        title: "Eco-Market",
        note: "Cas + gestion des risques"
      },
      {
        date: "02/02/2026",
        title: "VUCA",
        note: "Analyse PS5"
      }
    ],
    caseStudies: {
      beerGame: {
        title: "Beer Game",
        description:
          "Simulation des flux et des décisions dans une chaîne d'approvisionnement.",
        bullets: {
          description: [
            "Simulation Beer Game (Transentis), rôle : retailer",
            "Jeu réalisé en individuel (absence lors de la séance collective)",
            "24 semaines / 24 tours",
            "Objectif : répondre aux commandes, éviter ruptures, limiter coûts et surstock"
          ],
          instructions: [
            "Une seule décision par tour : quantité à commander",
            "Commandes à chaque tour",
            "Accès uniquement à ses informations (stock, commandes, livraisons)",
            "Pas de communication avec les autres rôles",
            "Délai entre commande et réception (≈ 2 semaines)",
            "Consignes restrictives et peu claires au départ"
          ],
          work: [
            "Stratégie initiale prudente (sécurité)",
            "Ajustement des commandes en cas de surstock",
            "Décisions basées sur commandes clients et stock",
            "Correction des erreurs passées (surstock / rupture)",
            "Seconde partie plus maîtrisée"
          ],
          approach: [
            "Décisions rationnelles malgré un manque d'informations",
            "Début marqué par l'incompréhension",
            "Progression vers une logique d'anticipation",
            "Limiter les commandes excessives sans créer de ruptures"
          ],
          results: [
            "Première phase : surstock important",
            "Seconde phase : apparition de ruptures",
            "Coûts globalement maîtrisés",
            "Situation finale relativement équilibrée"
          ],
          reflection: [
            "Meilleure compréhension des liens flux / délais / décisions",
            "Importance de l'anticipation",
            "Décisions prises à l'aveugle dans un contexte incomplet",
            "Jeu pertinent sur les mécanismes malgré un réalisme partiel"
          ],
          groupFeedback: [
            "Sentiment d'isolement lié au fait de jouer seul",
            "Le jeu aurait été plus fluide en groupe",
            "Être seul a favorisé la réflexion mais augmenté la confusion"
          ],
          workParallel: [
            "Décisions sans toutes les informations (alternance)",
            "Lien entre manque d'information, décisions imparfaites, impacts opérationnels",
            "Importance de l'anticipation et de la communication"
          ]
        }
      },
      trends: {
        title: "Tendances actuelles des stratégies de production",
        description: "Nearshoring, friendshoring, reshoring : concepts et impacts.",
        bullets: {
          definitions: [
            "Nearshoring : produire proche du marché de consommation.",
            "Friendshoring : produire dans des pays alliés et stables.",
            "Reshoring : relocaliser la production dans le pays d'origine."
          ],
          why: [
            "Chaînes mondiales fragilisées par crises sanitaires, géopolitiques, logistiques.",
            "Réduction des délais et risques d'approvisionnement.",
            "Attentes environnementales et éthiques."
          ],
          impacts: [
            "Diversification des lieux de production.",
            "Chaînes plus courtes et sécurisées.",
            "Arbitrage coût / sécurité / flexibilité.",
            "Coûts unitaires parfois plus élevés mais mieux maîtrisés."
          ]
        }
      },
      vuca: {
        title: "Exercice VUCA",
        description: "Analyse de la PlayStation 5 post-Covid.",
        product: "PlayStation 5",
        format: [
          "1 groupe = 1 produit",
          "1h15 de préparation, 5 minutes de restitution"
        ],
        analysis: {
          volatility: [
            "Pénurie mondiale de semi-conducteurs → production limitée.",
            "Flambée des coûts de transport maritime.",
            "Demande très instable (pic confinement puis ralentissement).",
            "Ruptures, scalping, difficulté de prévision."
          ],
          uncertainty: [
            "Fin de pénurie incertaine.",
            "Demande future imprévisible.",
            "Risque de nouvelles crises.",
            "Planification long terme difficile."
          ],
          complexity: [
            "Chaîne mondiale longue : puces (TSMC), composants multiples, assemblage Asie.",
            "Transporteurs + distributeurs (Fnac, Amazon, Carrefour).",
            "Effet cascade si un maillon bloque."
          ],
          ambiguity: [
            "Origine exacte de la pénurie difficile à isoler.",
            "Problème temporaire ou structurel ?",
            "Demande réelle ou artificiellement gonflée ?"
          ]
        },
        responses: {
          volatility: [
            "Contrats prioritaires avec fabricants de puces.",
            "Diversification des fournisseurs.",
            "Augmentation progressive de la production."
          ],
          uncertainty: [
            "Production progressive plutôt que massive.",
            "Vente en ligne contrôlée.",
            "Ajustement des volumes selon la demande."
          ],
          complexity: [
            "Meilleure coordination avec fabricants, assembleurs, distributeurs.",
            "Planification plus agile des livraisons."
          ],
          ambiguity: [
            "Communication officielle sur la pénurie.",
            "Explication publique des difficultés.",
            "Systèmes anti-scalping chez certains vendeurs."
          ]
        }
      },
      ecoMarket: {
        title: "Cas Eco-Market",
        description: "Organisation et gestion des risques dans un modèle social.",
        bullets: {
          restructuring: [
            "Restructuration de l'équipe.",
            "Inventaire en papier.",
            "Inventaire entrepôt.",
            "Paiement en espèces.",
            "Information RS.",
            "Offre « panier ».",
            "Caissier et acheteur en balance."
          ],
          socialModel: [
            "Donner aux précaires.",
            "Réduction d'impôt."
          ],
          riskPrinciples: [
            "Un risque n'est pas un événement, c'est l'effet potentiel d'un événement.",
            "Notion évoquée : risque avant 2015.",
            "« Demand risks » : risques de la demande."
          ]
        }
      }
    },
    postReview: [
      "Comparer le bilan initial et le bilan final.",
      "Expliquer ce que je connais désormais du SCM.",
      "Identifier les connaissances consolidées ou remises en question.",
      "Dégager les compétences acquises.",
      "Montrer l'évolution du lien apprentissage / supply chain."
    ],
    valorization: [
      "Réutiliser ces connaissances en entreprise.",
      "Créer des liens avec l'alternance et le futur métier.",
      "Identifier les apports dans les autres cours.",
      "Montrer la valeur ajoutée du cours dans le parcours global."
    ],
    selfAssessment: [
      "Auto-évaluation honnête sur 6 points (progression, compréhension, prise de recul).",
      "Justifier brièvement chaque ligne pour montrer la cohérence.",
      "Rigueur : capacité à suivre des process et documenter proprement",
      "Synthèse : facilité à extraire l'essentiel pour des livrables clairs",
      "Prise de décision : apprentissage en cours, besoin d'affiner l'arbitrage sous contraintes",
      "Collaboration : bonne écoute et communication en équipe",
      "Réflexivité : capacité à tirer des apprentissages de chaque exercice"
    ],
    annexes: [
      "Document source : Management Supply Chain (PDF)."
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
