# Matheus Camilo Ferraro — Portfolio

🌐 **Live:** [matheusferraro.github.io](https://matheusferraro.github.io)

Personal portfolio of Matheus Ferraro — Backend Developer (C# / .NET). A clean,
fast, multilingual single-page site that puts the projects first.

## Stack

- **React + Vite + TypeScript**
- **Tailwind CSS** (dark/light via a `dark` class on `<html>`; brand colors are
  CSS-variable tokens defined in [`src/index.css`](src/index.css))
- **react-i18next** — English (default), Brazilian Portuguese, French
- **lucide-react** icons
- Deployed to **GitHub Pages** via GitHub Actions

## Run it locally

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
npm run build    # type-check and build to dist/
npm run preview  # preview the production build locally
```

Requires Node 20+.

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which runs `npm ci`, builds to `dist/`, and publishes it to GitHub Pages. No manual
step is needed. Because this is a GitHub **user page** served from the domain root,
Vite's `base` is `/` (see [`vite.config.ts`](vite.config.ts)).

## Project structure

```
index.html                 Vite entry + no-flash theme script + meta tags
src/
  main.tsx                 App bootstrap (loads i18n + styles)
  App.tsx                  Page composition (Header + sections + Footer)
  index.css                Tailwind layers + theme color tokens
  i18n/
    index.ts               i18next setup
    locales/{en,pt-BR,fr}.json   all translated copy
  data/
    projects.ts            project + collaboration data (source of truth)
    skills.ts              skill groups
  lib/profile.ts           name, email, social links, résumé path
  hooks/useTheme.ts        dark/light theme (class + localStorage)
  components/              Header, switchers, shared UI bits
  sections/                Hero, About, Projects, Skills, Contact, Footer
public/
  resume/Resume.pdf        the "Download résumé" target
  logo.svg favicon.svg manifest.json robots.txt
```

## How to add a project

1. Add an entry to the `projects` array in [`src/data/projects.ts`](src/data/projects.ts).
   Set a unique `id`, the `name`, `stack` tags, `architecture` label, `status`
   (`production` | `in-progress` | `standard`), and `links` (`live`, `repo`,
   `demo`, or `privateRepo: true`). Tech and architecture labels stay in English.
2. Add the one-line summary for that `id` in **all three** locale files under
   `projects.items.<id>.summary` — see [`src/i18n/locales/en.json`](src/i18n/locales/en.json).

Order in the array is the order on the page. (Collaborations live in the
`collaborations` array of the same file, with summaries under
`projects.collaborations.items.<id>.summary`.)

## How to add or edit a translation string

All visible copy lives in [`src/i18n/locales/`](src/i18n/locales/) — `en.json`,
`pt-BR.json`, and `fr.json`. Keep the same key in all three files. Components read
it with `t('some.key')`. Project names and tech terms (ASP.NET Core, PostgreSQL, …)
stay in English across every language.

> The French file has a `_translatorNotes` block at the top listing phrasings to
> double-check. It's ignored by i18next — it's only a review aid.
