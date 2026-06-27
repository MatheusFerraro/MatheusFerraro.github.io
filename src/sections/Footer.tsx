import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../lib/profile';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>{t('footer.copyright', { year })}</p>
        <p>{t('footer.built')}</p>
        <a
          href={profile.links.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          <Github aria-hidden className="h-4 w-4" />
          {t('footer.source')}
        </a>
      </div>
    </footer>
  );
}
