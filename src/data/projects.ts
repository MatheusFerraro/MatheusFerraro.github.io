/**
 * Project data — the single source of truth for the Projects section.
 *
 * Non-translated facts (name, tech tags, architecture label, links, status)
 * live here. The translated one-line summary lives in the locale files under
 * `projects.items.<id>.summary` and is looked up by `id` in <ProjectCard>.
 *
 * To add a project: add an entry here, then add a `summary` for its `id` in
 * all three files under src/i18n/locales/. Tech names and architecture labels
 * stay in English across every language.
 */

export type ProjectStatus = 'production' | 'in-progress' | 'standard';

export interface ProjectLinks {
  /** A running, public site. */
  live?: string;
  /** Public source repository. */
  repo?: string;
  /** Video walkthrough / demo. */
  demo?: string;
  /** Repo is private — render a non-clickable "coming soon" pill instead. */
  privateRepo?: boolean;
}

export interface Project {
  /** i18n key, e.g. `projects.items.flightPlan.summary`. */
  id: string;
  /** Proper name — not translated. */
  name: string;
  /** Tech stack tags, English in every language. */
  stack: string[];
  /** Architecture style label, English in every language. */
  architecture: string;
  status: ProjectStatus;
  links: ProjectLinks;
}

export interface Collaboration {
  id: string;
  name: string;
  stack: string[];
  architecture: string;
  repo: string;
  /** A running, public site. */
  live?: string;
  /** Drives the status badge (e.g. "Live · Production"). */
  status?: ProjectStatus;
}

// Order matters — Flight Plan first (the only one live in production).
export const projects: Project[] = [
  {
    id: 'flightPlan',
    name: 'Flight Plan (TA-FLIGHTPLAN)',
    stack: [
      '.NET 8',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'SQL Server',
      'ASP.NET Core Identity',
      'FreeSpire.XLS',
      'Serilog',
      'Application Insights',
    ],
    architecture: 'N-Tier · Layered (5-project solution)',
    status: 'production',
    links: {
      live: 'https://miplandevuelo.com',
    },
  },
  {
    id: 'nbTcgTrader',
    name: 'NB TCG Trader',
    stack: [
      '.NET 9',
      'ASP.NET Core Web API',
      'PostgreSQL (Supabase)',
      'EF Core / Npgsql',
      'Identity + JWT',
      'FluentValidation',
      'Serilog',
      'xUnit + Shouldly',
      'CsvHelper / ClosedXML',
      'Scalar (OpenAPI)',
      'Docker',
      'React + TypeScript (Vite)',
      'Azure Container Apps',
    ],
    architecture: 'Modular monolith · Vertical Slice',
    status: 'in-progress',
    links: {
      privateRepo: true,
    },
  },
  {
    id: 'recipeWorld',
    name: 'RecipeWorld',
    stack: [
      '.NET 8',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'SQL Server',
      'ASP.NET Core Identity (RBAC)',
      'xUnit',
      'Moq',
      'Bootstrap',
    ],
    architecture: 'Layered · Service pattern',
    status: 'standard',
    links: {
      repo: 'https://github.com/MatheusFerraro/RecipeWorld',
    },
  },
  {
    id: 'smartRetail',
    name: 'SmartRetail-System',
    stack: [
      'ASP.NET Core Web API',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'Chart.js',
      'ESP32 (C++)',
    ],
    architecture: 'Client–API–DB · Real-time polling',
    status: 'standard',
    links: {
      repo: 'https://github.com/MatheusFerraro/SmartRetail-System',
      demo: 'https://www.youtube.com/watch?v=raHG7weVkfM',
    },
  },
];

export const collaborations: Collaboration[] = [
  {
    id: 'flavorDaCasa',
    name: 'Flavor-da-Casa',
    stack: ['Java', 'Spring Boot'],
    architecture: 'Clean Architecture',
    repo: 'https://github.com/briancabello/Flavor-da-Casa',
  },
  {
    id: 'triviaQuest',
    name: 'Trivia-Quest',
    stack: ['Node.js', 'Express', 'Socket.io'],
    architecture: 'Real-time multiplayer',
    repo: 'https://github.com/briancabello/Trivia-Quest',
    live: 'https://trivia-quest-h17e.onrender.com/',
    status: 'production',
  },
];

export const collaborator = {
  name: 'Brian Cabello',
  github: 'https://github.com/briancabello',
} as const;
