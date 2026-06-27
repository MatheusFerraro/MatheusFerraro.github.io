import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';
import fr from './locales/fr.json';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt-BR', label: 'PT', name: 'Português' },
  { code: 'fr', label: 'FR', name: 'Français' },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]['code'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-BR', 'fr'],
    load: 'currentOnly',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      // Map any browser Portuguese variant (pt, pt-PT, …) onto our pt-BR resource.
      // NOTE: we deliberately avoid `nonExplicitSupportedLngs` — it strips
      // "pt-BR" down to "pt", which isn't in supportedLngs, so the language
      // switcher would silently fall back to English.
      convertDetectedLanguage: (lng) => (lng.toLowerCase().startsWith('pt') ? 'pt-BR' : lng),
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      'pt-BR': { translation: ptBR },
      fr: { translation: fr },
    },
  });

// Keep <html lang> in sync for accessibility / SEO.
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});
document.documentElement.lang = i18n.resolvedLanguage ?? 'en';

export default i18n;
