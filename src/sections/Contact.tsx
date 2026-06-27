import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IconLink } from '../components/IconLink';
import { profile } from '../lib/profile';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-content scroll-mt-20 px-5 py-16 sm:px-8"
    >
      <div className="rounded-2xl border border-border bg-surface px-6 py-12 text-center sm:px-12">
        <span aria-hidden className="mx-auto mb-3 block h-1 w-10 rounded-full bg-accent" />
        <h2 id="contact-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('contact.title')}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">{t('contact.description')}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <IconLink href={`mailto:${profile.email}`} icon={Mail} variant="primary">
            {t('contact.emailLabel')}
          </IconLink>
          <IconLink href={profile.links.linkedin} icon={Linkedin} variant="secondary">
            {t('contact.linkedinLabel')}
          </IconLink>
          <IconLink href={profile.links.github} icon={Github} variant="secondary">
            {t('contact.githubLabel')}
          </IconLink>
        </div>
      </div>
    </section>
  );
}
