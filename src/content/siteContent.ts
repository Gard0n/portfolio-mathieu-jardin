import contentJson from "./content.json";

export const siteContent = {
  // Données depuis content.json (éditables via l'admin)
  site: contentJson.site,
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projects" },
    { label: "Services", href: "/services" },
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
      "21 ans, en M1 Commerce & Distribution Connectés à l'IAE Lille.",
      "Développeur Shopify et stratège e-commerce en alternance chez Animaux Vie et Santé (Wasquehal).",
      "Freelance en parallèle : Shopify, email marketing Klaviyo, stratégie e-commerce.",
      "Basé à Lille, disponible 100 % en remote sur tout le territoire.",
      "Autodidacte en développement web — je construis mes propres outils (Nexus, Minus, Bullet Journal).",
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
    items: contentJson.projects.map(p => ({
      ...p,
      context: p.context || [],
      objective: p.objective || [],
      actions: p.actions || [],
      results: p.results || [],
      learnings: p.learnings || []
    }))
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
