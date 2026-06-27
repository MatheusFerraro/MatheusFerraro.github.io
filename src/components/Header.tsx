import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profile } from '../lib/profile';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = ['about', 'projects', 'skills', 'contact'] as const;

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a
          href="#top"
          aria-label={t('a11y.homeLogo')}
          className="flex items-center rounded-md"
        >
          <img src="/logo.svg" alt="" className="h-9 w-9" width={36} height={36} />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            <Download aria-hidden className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">{t('nav.downloadResume')}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
