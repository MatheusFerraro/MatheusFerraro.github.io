import { Github, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IconLink } from '../components/IconLink';
import { SectionHeading } from '../components/SectionHeading';
import { Tag } from '../components/Tag';
import { collaborations, collaborator, projects } from '../data/projects';
import { ProjectCard, StatusBadge } from './ProjectCard';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-content scroll-mt-20 px-5 py-16 sm:px-8"
    >
      <SectionHeading
        id="projects-heading"
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Collaborations — smaller sub-block */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-tight">
          {t('projects.collaborations.title')}
        </h3>
        <p className="mt-2 text-muted">
          {t('projects.collaborations.subtitle')}{' '}
          <a
            href={collaborator.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:text-accent-hover"
          >
            @{collaborator.github.split('/').pop()}
          </a>
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {collaborations.map((collab) => (
            <article
              key={collab.id}
              className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h4 className="text-lg font-semibold tracking-tight">{collab.name}</h4>
                {collab.status && <StatusBadge status={collab.status} />}
              </div>
              <p className="mt-2 leading-relaxed text-muted">
                {t(`projects.collaborations.items.${collab.id}.summary`)}
              </p>
              <p className="mt-3 text-sm text-muted">
                <span className="font-semibold text-fg">{t('projects.architectureLabel')}:</span>{' '}
                {collab.architecture}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {collab.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                {collab.live && (
                  <IconLink href={collab.live} icon={Globe} variant="primary">
                    {t('projects.links.live')}
                  </IconLink>
                )}
                <IconLink href={collab.repo} icon={Github} variant="secondary">
                  {t('projects.links.repo')}
                </IconLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
