import { Github, Globe, Lock, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IconLink } from '../components/IconLink';
import { Tag } from '../components/Tag';
import type { Project } from '../data/projects';

export function StatusBadge({ status }: { status: Project['status'] }) {
  const { t } = useTranslation();
  if (status === 'standard') return null;

  const styles =
    status === 'production'
      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
      : 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400';

  const key = status === 'production' ? 'projects.status.production' : 'projects.status.inProgress';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {t(key)}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const { id, name, stack, architecture, status, links } = project;

  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="mt-3 leading-relaxed text-muted">{t(`projects.items.${id}.summary`)}</p>

      <p className="mt-4 text-sm text-muted">
        <span className="font-semibold text-fg">{t('projects.architectureLabel')}:</span>{' '}
        {architecture}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
        {links.live && (
          <IconLink href={links.live} icon={Globe} variant="primary">
            {t('projects.links.live')}
          </IconLink>
        )}
        {links.repo && (
          <IconLink href={links.repo} icon={Github} variant="secondary">
            {t('projects.links.repo')}
          </IconLink>
        )}
        {links.demo && (
          <IconLink href={links.demo} icon={Youtube} variant="secondary">
            {t('projects.links.demo')}
          </IconLink>
        )}
        {links.privateRepo && (
          <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2 text-sm font-medium text-muted">
            <Lock aria-hidden className="h-4 w-4 shrink-0" />
            {t('projects.links.private')}
          </span>
        )}
      </div>
    </article>
  );
}
