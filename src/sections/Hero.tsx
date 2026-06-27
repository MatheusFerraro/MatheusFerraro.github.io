import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IconLink } from '../components/IconLink';
import { profile } from '../lib/profile';

const socials = [
  { key: 'GitHub', href: profile.links.github, icon: Github, external: true },
  { key: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin, external: true },
  { key: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="mx-auto max-w-content px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {t('hero.greeting')}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-4 text-xl font-semibold text-muted sm:text-2xl">{t('hero.role')}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t('hero.intro')}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <IconLink href="#projects" icon={ArrowRight} variant="primary">
            {t('hero.viewProjects')}
          </IconLink>
          <IconLink href={profile.resumePath} icon={Download} variant="secondary" download>
            {t('nav.downloadResume')}
          </IconLink>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {socials.map(({ key, href, icon: Icon, external }) => (
            <a
              key={key}
              href={href}
              aria-label={key}
              title={key}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon aria-hidden className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
