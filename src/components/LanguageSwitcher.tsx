import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';

/** Segmented EN / PT / FR switcher. The active language is reflected with
 *  aria-pressed so screen readers announce the current choice. */
export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div
      role="group"
      aria-label={t('a11y.selectLanguage')}
      className="inline-flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5"
    >
      {SUPPORTED_LANGUAGES.map(({ code, label, name }) => {
        const active = current === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={active}
            title={name}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
              active ? 'bg-accent text-white' : 'text-muted hover:text-fg'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
