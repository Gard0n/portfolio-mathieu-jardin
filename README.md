# Portfolio Mathieu Jardin

Portfolio statique moderne, responsive et accessible. Contenu en FR, structuré en bullets, facile à modifier.

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS
- ESLint + Prettier

## Installation
```bash
npm install
```

## Développement
```bash
npm run dev
```

## Build & run
```bash
npm run build
npm run start
```

## Format
```bash
npm run format
```

## Déploiement (Vercel)
- Importer le repo dans Vercel
- Build command : `npm run build`
- Output : `.next`

## Contenu
Tous les textes sont centralisés ici :
- `src/content/siteContent.ts`

Pense à mettre à jour :
- `siteContent.site.url` (URL finale)
- Les liens sociaux (GitHub, LinkedIn)
- L'email si besoin

## Structure
- `src/app` : pages et routes
- `src/components` : design system léger
- `src/content` : contenu unique
- `public` : assets (favicon, OG)

## Commandes git (init + premier commit)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_DU_REPO>
git push -u origin main
```

## Licence
MIT
