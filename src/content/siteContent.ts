import contentJson from "./content.json";

export const siteContent = {
  // Données depuis content.json (éditables via l'admin)
  site: contentJson.site,
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Portfolio SCM", href: "/course-portfolio" },
    { label: "Contact", href: "/contact" }
  ],
  home: {
    ...contentJson.home,
    ctas: [
      { label: "Me recruter", href: "/contact" },
      { label: "Mes services", href: "/services" },
      { label: "Voir les projets", href: "/projects" }
    ],
    highlights: [
      {
        title: "Alternance",
        items: ["Animaux Vie et Santé", "Développement commercial", "E-commerce"]
      },
      {
        title: "Spécialités",
        items: ["Shopify (Liquid)", "Email Marketing", "Stratégie e-commerce"]
      },
      {
        title: "Disponibilité",
        items: ["Missions freelance ouvertes", "Réponse sous 24h", "Remote & Lille"]
      }
    ]
  },
  about: {
    identity: [
      "Développeur Shopify et stratège e-commerce freelance.",
      "Basé à Lille, disponible en remote sur tout le territoire.",
      "Autodidacte en code : je construis mes propres outils (Nexus, Minus, Bullet).",
      "Passionné de jeux vidéo, manga et rap français."
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
    interests: ["Manga", "Jeux vidéo", "Rap français"],
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
      "Management",
      "React",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "Python",
      "Dev personnel"
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
        date: "02/02/2026",
        title: "VUCA",
        note: "Analyse PS5"
      },
      {
        date: "04/02/2026",
        title: "Eco-Market",
        note: "Cas + gestion des risques"
      },
      {
        date: "04/02/2026",
        title: "For Sure",
        note: "Matrice des risques R1–R7"
      },
      {
        date: "04/03/2026",
        title: "GIFI ERP",
        note: "Migration ERP — étude de cas"
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
      forSure: {
        title: "For Sure — Matrice des risques",
        description: "Identification et priorisation des risques supply chain pour Eco-Market.",
        risks: [
          {
            id: "R1",
            label: "Rupture de stock provisionnelle",
            description: "Mauvaise synchronisation des stocks",
            proba: 4,
            impact: 4,
            score: 16,
            level: 1,
            strategy: "Anticiper mieux",
            action: "Créer un planning de suivi. Contrôles du stock (entre commande et reçu)."
          },
          {
            id: "R2",
            label: "Défaillance logistique",
            description: "Retards de livraison en période forte",
            proba: 3,
            impact: 4,
            score: 12,
            level: 3,
            strategy: "Adapter aux périodes",
            action: "Prévoir la demande avec des employés supplémentaires et des machines de rechange."
          },
          {
            id: "R3",
            label: "Cyberattaque",
            description: "Fuite de données clients",
            proba: 3,
            impact: 5,
            score: 15,
            level: 2,
            strategy: "Mieux se protéger",
            action: "Audit de sécurité et contrôles. Prévoir un plan d'action d'urgence."
          },
          {
            id: "R4",
            label: "Résistance des vendeurs",
            description: "Difficulté d'adoption des outils digitaux",
            proba: 4,
            impact: 3,
            score: 12,
            level: 3,
            strategy: "Former",
            action: "Via les managers. Plans long terme et audit de satisfaction employé."
          },
          {
            id: "R5",
            label: "Dépassement budgétaire",
            description: "Sous-estimation des coûts IT",
            proba: 3,
            impact: 4,
            score: 12,
            level: 3,
            strategy: "Point mensuel (voire bi-hebdo)",
            action: "Point sur les démarches (frais + bénéf). Ajustement en fonction du budget."
          },
          {
            id: "R6",
            label: "Baisse temporaire des ventes",
            description: "Perturbation durant le déploiement",
            proba: 3,
            impact: 3,
            score: 9,
            level: 4,
            strategy: "Prévoir",
            action: "Avoir une solution de backup en cas de mauvaise réception. Être prêt à agir pour récupérer le retard."
          },
          {
            id: "R7",
            label: "Dépendance fournisseur IT",
            description: "Retard de livraison des modules",
            proba: 2,
            impact: 4,
            score: 8,
            level: 5,
            strategy: "Rechercher un autre fournisseur",
            action: "Backup fournisseur et pression prix / livraison."
          }
        ]
      },
      ecoMarket: {
        title: "Cas Eco-Market",
        description:
          "Gestion d'une crise ransomware en tant que directrice/directeur des opérations.",
        bullets: {
          context: [
            "Attaque ransomware sur les serveurs centraux.",
            "Balances connectées et caisses automatiques hors service.",
            "Stock périssable à écouler rapidement.",
            "Algorithme de gestion des stocks effacé (flux entrants inconnus).",
            "Données de 500 000 clients exfiltrées, crise d'image.",
            "Clients filment les caissiers, climat tendu.",
            "Le service informatique ne comprend pas la faille."
          ],
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
          ],
          decisionsImmediate: [
            "Activer une cellule de crise et clarifier les rôles en magasin.",
            "Basculer en mode manuel : inventaire papier, caisse manuelle, pesée alternative.",
            "Sécuriser l'écoulement du périssable (panier anti-gaspi, dons).",
            "Isoler les systèmes touchés et bloquer les canaux numériques sensibles.",
            "Informer clients et équipes avec des consignes claires."
          ],
          decisionsShortTerm: [
            "Reconstituer un stock fiable (inventaires tournants + consolidation entrepôt).",
            "Recréer des règles de réapprovisionnement simples (min/max temporaires).",
            "Renforcer la cybersécurité (audit, sauvegardes, procédures de reprise).",
            "Mettre en place un plan de communication post-incident.",
            "Stabiliser l'offre et prioriser les produits essentiels."
          ],
          vuca: {
            volatility: [
              "Demande instable et achats opportunistes.",
              "Risque de ruptures rapides sur produits frais."
            ],
            uncertainty: [
              "Durée inconnue de la panne.",
              "Flux entrants non visibles."
            ],
            complexity: [
              "Multiplicité des acteurs : IT, magasins, entrepôt, clients.",
              "Dépendance aux systèmes connectés."
            ],
            ambiguity: [
              "Cause exacte et périmètre de l'attaque flous.",
              "Décisions à prendre sans données fiables."
            ]
          },
          bani: {
            brittle: [
              "Systèmes trop centralisés → panne globale.",
              "Besoin de procédures manuelles de secours."
            ],
            anxious: [
              "Stress des équipes et des clients.",
              "Nécessité de consignes claires et rassurantes."
            ],
            nonlinear: [
              "Un incident IT crée des impacts logistiques immédiats.",
              "Prioriser les flux critiques pour limiter l'effet domino."
            ],
            incomprehensible: [
              "Faille non comprise par l'IT.",
              "Appel à des experts externes + documentation continue."
            ]
          }
        }
      },
      gifiErp: {
        title: "GiFi — Migration ERP (juin 2023)",
        description: "Étude de cas : bascule vers SAP ECC 6 et ses conséquences sur la supply chain.",
        intro: [
          "En juin 2023, GiFi a procédé à la bascule vers un nouvel ERP (SAP ECC 6 + Aptos, Reflex, Optimix).",
          "L'intégration s'est révélée plus complexe que prévu : suivi des résultats, stocks et approvisionnements perturbés.",
          "Ce cas illustre les risques liés à la transformation numérique dans la grande distribution."
        ],
        dysfunctions: [
          "Désorganisation logistique totale : rayons vides, mauvaises destinations, stocks désynchronisés.",
          "Procédures manuelles d'urgence mises en place pour pallier les défaillances.",
          "Perte de CA de ~9% sur l'année (jusqu'à -25/30% sur les mois post-déploiement).",
          "Négociation de nouveaux financements bancaires.",
          "Tensions internes entre IT et opérationnels, dégradation de l'image client."
        ],
        pilotErrors: [
          "Timing catastrophique : bascule en juin, période d'intensification des achats estivaux.",
          "Instabilité dans la direction : le directeur de la transformation quittera l'entreprise début 2024.",
          "Architecture trop complexe (best-of-breed : SAP + Aptos + Reflex + Optimix) mal orchestrée."
        ],
        technicalRisks: [
          "Désynchronisation des données : stocks virtuels ≠ réalité physique en entrepôts.",
          "Mauvais paramétrage du module MM (Material Management).",
          "Tests insuffisants avant déploiement généralisé sur 600 points de vente."
        ],
        internalResistance: [
          "Équipes non formées aux nouveaux processus.",
          "Gestion du changement trop centralisée, éloignant les collaborateurs.",
          "Démotivation et surcharge opérationnelle (retour aux process manuels)."
        ],
        correctiveActions: [
          "Plan de continuité d'activité (PCA) avec procédures de rollback dès le départ.",
          "Chef de projet dédié + gouvernance claire + jalons de validation stricts.",
          "Déploiement progressif par vagues (pilote 5–10 magasins) avant généralisation.",
          "Impliquer les opérationnels dès la conception (approche 'key users').",
          "Accompagnement au changement structuré avec formations et ambassadeurs internes."
        ],
        conclusion: [
          "Changer d'ERP n'est pas une décision anodine : une migration mal conduite coûte plus cher que maintenir l'existant.",
          "La gestion du changement n'est pas un accessoire — elle est centrale.",
          "Évaluer la maturité des processus, la qualité des données et la capacité organisationnelle avant de décider."
        ]
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
