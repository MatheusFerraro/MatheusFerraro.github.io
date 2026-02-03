# Portfolio step-by-step (React + i18n + Theme + Projects)

This guide helps you build a clean, one-page portfolio site in a similar spirit to `briancabello.github.io` (hero, sections, smooth layout), but customized for you:

- 3 languages: English (`en`), Portuguese Brazil (`pt-BR`), French (`fr`)
- Dark/Light mode (saved in `localStorage`)
- Resume download button
- Development stack section
- Projects section (manual list or auto-loaded from your GitHub)
- Deploy to GitHub Pages (`gh-pages`)

You already have Create React App + `react-i18next` + `gh-pages` installed in this repo, so you can follow this guide directly.

---

## 0) Quick checklist (what you’ll build)

Suggested sections:

1. **Navbar**: language selector + theme toggle + resume button
2. **Hero**: name, role, short intro, CTA buttons
3. **Stack**: technologies (chips/cards)
4. **Projects**: cards with repo links
5. **Contact**: email + socials
6. **Footer**

---

## 1) Organize your folders

Create these folders/files:

- `public/resume/Resume.pdf` (your resume)
- `src/components/` (UI components)
- `src/sections/` (page sections)
- `src/data/stack.js` (stack list)
- `src/data/projects.js` (optional manual projects list)

You can keep everything in `App.js` at first, then refactor into components.

---

## 2) Internationalization (EN + PT-BR + FR)

You already have [src/i18n.js](../src/i18n.js). I recommend small upgrades:

### 2.1 Use standard locale keys

Use:

- `en`
- `pt-BR`
- `fr`

Why: `pt` is generic, but you specifically want Brazilian Portuguese.

### 2.2 Add `supportedLngs` and language detection

In `i18next`, configure:

- `fallbackLng: 'en'`
- `supportedLngs: ['en', 'pt-BR', 'fr']`
- `nonExplicitSupportedLngs: true` (optional)

This makes detection safer.

### 2.3 Translation structure

Use nested keys so your text stays organized:

- `nav.resume`
- `nav.projects`
- `hero.greeting`
- `stack.title`
- `projects.title`

Example translation skeleton:

```js
resources: {
  en: { translation: { nav: { resume: 'Resume' }, hero: { title: "Hi, I'm Matheus" } } },
  'pt-BR': { translation: { nav: { resume: 'Currículo' }, hero: { title: 'Oi, eu sou Matheus' } } },
  fr: { translation: { nav: { resume: 'CV' }, hero: { title: 'Salut, je suis Matheus' } } },
}
```

### 2.4 Language switcher

In your navbar you already do:

```js
i18n.changeLanguage('en')
```

Use `pt-BR` for Brazilian Portuguese:

- `i18n.changeLanguage('pt-BR')`

Tip: show “PT-BR” in the button text.

---

## 3) Dark/Light mode (theme toggle)

The simplest reliable approach:

- Put your colors in CSS variables
- Toggle a `data-theme="dark" | "light"` attribute on `<html>`
- Save the user’s selection in `localStorage`

### 3.1 CSS variables

In `src/index.css` (or `App.css`), create variables:

```css
:root {
  --bg: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --card: #f1f5f9;
  --border: #e2e8f0;
  --accent: #2563eb;
}

:root[data-theme='dark'] {
  --bg: #0b1220;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --card: #0f1a30;
  --border: #1f2a44;
  --accent: #60a5fa;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

### 3.2 Theme hook (recommended)

Create `src/hooks/useTheme.js`:

```js
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'theme';

export function useTheme() {
  const prefersDark = useMemo(() => {
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
  }, []);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ?? (prefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
```

Then in `App.js`:

```js
const { theme, toggleTheme } = useTheme();
```

And a button:

```jsx
<button onClick={toggleTheme} aria-label="Toggle theme">
  {theme === 'dark' ? 'Light' : 'Dark'}
</button>
```

---

## 4) Resume download button

1) Put your PDF at: `public/resume/Resume.pdf`

2) Add a link in the navbar:

```jsx
<a className="btn" href="/resume/Resume.pdf" download>
  {t('nav.resume')}
</a>
```

Notes:

- Using `/resume/Resume.pdf` works in CRA because `public/` is served as the site root.
- For GitHub Pages, this still works as long as it’s included in the build output (CRA copies `public/` to `build/`).

---

## 5) Stack section

Create a simple data file: `src/data/stack.js`

```js
export const stack = [
  { name: 'React', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
];
```

Then render it in a section:

```jsx
<section id="stack">
  <h2>{t('stack.title')}</h2>
  <div className="grid">
    {stack.map((item) => (
      <div key={item.name} className="card">
        <strong>{item.name}</strong>
        <div className="muted">{item.level}</div>
      </div>
    ))}
  </div>
</section>
```

---

## 6) Projects section (two options)

You can either:

- **A) Manual list** (best for curated projects)
- **B) Load repos from GitHub API** (automatic, but less curated)

### A) Manual list (curated)

Create `src/data/projects.js`:

```js
export const projects = [
  {
    name: 'Project One',
    description: 'Short description',
    url: 'https://github.com/MatheusFerraro/REPO_NAME',
    tags: ['React', 'API'],
  },
];
```

Render cards:

```jsx
<section id="projects">
  <h2>{t('projects.title')}</h2>
  <div className="grid">
    {projects.map((p) => (
      <a key={p.url} className="card" href={p.url} target="_blank" rel="noreferrer">
        <strong>{p.name}</strong>
        <p className="muted">{p.description}</p>
        <div className="tags">{p.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </a>
    ))}
  </div>
</section>
```

### B) Load from GitHub API (automatic)

Create `src/hooks/useGithubRepos.js`:

```js
import { useEffect, useState } from 'react';

export function useGithubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data = await res.json();

        const filtered = data
          .filter((r) => !r.fork)
          .slice(0, 12)
          .map((r) => ({
            name: r.name,
            description: r.description,
            url: r.html_url,
            language: r.language,
            stars: r.stargazers_count,
          }));

        if (!cancelled) setRepos(filtered);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { repos, loading, error };
}
```

Then in `Projects` section:

```js
const { repos, loading, error } = useGithubRepos('MatheusFerraro');
```

Render states:

- if `loading`, show skeletons
- if `error`, show fallback + link to GitHub profile

---

## 7) Styling to get a “modern portfolio” feel

Key styling ideas (simple but effective):

- Max width container (e.g. 980px)
- Soft card backgrounds, subtle borders
- Section spacing (e.g. 64–96px)
- Responsive grid (`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`)

Suggested CSS snippets:

```css
.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
  text-decoration: none;
  color: inherit;
}

.muted { color: var(--muted); }
```

---

## 8) Deployment to GitHub Pages

Your `package.json` already includes:

- `gh-pages`
- `homepage: "https://MatheusFerraro.github.io/my-portfolio"`
- scripts: `predeploy` + `deploy`

Steps:

1) Ensure your repo name matches the homepage path (here: `my-portfolio`).
2) Push to GitHub.
3) Run:

```bash
npm run deploy
```

4) In GitHub repo settings → Pages:

- Source should be `gh-pages` branch

---

## 9) Recommended next improvements

- Add smooth scrolling: `html { scroll-behavior: smooth; }`
- Add “Back to top” button
- Add SEO: update `public/index.html` title + meta description
- Add OpenGraph preview image (`public/og.png`)
- Add animations (optional): `framer-motion`

---

## 10) Suggested translation keys (starter list)

Use these keys in all three languages:

- `nav.stack`
- `nav.projects`
- `nav.contact`
- `nav.resume`
- `hero.title`
- `hero.subtitle`
- `hero.ctaProjects`
- `hero.ctaContact`
- `stack.title`
- `projects.title`
- `projects.moreOnGithub`
- `contact.title`
- `contact.emailMe`

---

## If you want, I can implement this structure for you

I can:

- Refactor `App.js` into `Navbar`, `Hero`, `Stack`, `Projects`, `Contact`
- Upgrade i18n to `pt-BR` + structured translation keys
- Add the theme toggle + CSS variables
- Add resume download
- Add GitHub projects loader

Tell me whether you prefer **manual curated projects** or **auto from GitHub** (or both).