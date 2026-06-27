/**
 * Skills, grouped. Group labels are translated via `skills.groups.<id>` in the
 * locale files; the individual tech names stay in English across all languages.
 */
export interface SkillGroup {
  /** i18n key under `skills.groups`. */
  id: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    items: [
      'C#',
      '.NET 8 / 9',
      'ASP.NET Core (MVC & Web API)',
      'Entity Framework Core',
      'ASP.NET Core Identity',
      'JWT auth',
      'FluentValidation',
      'Serilog',
    ],
  },
  {
    id: 'data',
    items: ['SQL Server', 'PostgreSQL', 'Npgsql', 'LINQ', 'CsvHelper', 'ClosedXML'],
  },
  {
    id: 'architecture',
    items: [
      'Clean Architecture',
      'Layered / N-Tier',
      'Vertical Slice',
      'Modular Monolith',
      'REST APIs',
      'OpenAPI (Scalar / Swagger)',
    ],
  },
  {
    id: 'cloud',
    items: [
      'Docker',
      'Azure Container Apps',
      'Application Insights',
      'GitHub Actions (CI/CD)',
      'Supabase',
    ],
  },
  {
    id: 'frontend',
    items: ['React', 'TypeScript', 'Vite', 'JavaScript', 'HTML5', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'tools',
    items: ['Git & GitHub', 'xUnit', 'Moq', 'Shouldly', 'Postman', 'Scalar'],
  },
];
