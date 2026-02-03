import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    debug: false,
    fallbackLng: 'en', // Use English if detected language is not available
    supportedLngs: ['en', 'pt-BR', 'fr'],
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: {
          nav: {
            resume: "Resume"
          },
          hero: {
            title: "Hi, I'm Matheus Ferraro"
          },
          description: "I am a Software Developer based in Canada.",
          stack: {
            title: "Tech Stack"
          },
          projects: "Projects",
          contact: "Contact Me"
        }
      },
      fr: {
        translation: {
          nav: {
            resume: "CV"
          },
          hero: {
            title: "Salut, je suis Matheus Ferraro"
          },
          description: "Je suis un développeur de logiciels basé au Canada.",
          stack: {
            title: "Stack Technique"
          },
          projects: "Projets",
          contact: "Contactez-moi"
        }
      },
      'pt-BR': {
        translation: {
          nav: {
            resume: "Currículo"
          },
          hero: {
            title: "Oi, eu sou Matheus Ferraro"
          },
          description: "Sou um desenvolvedor de software morando no Canadá.",
          stack: {
            title: "Tecnologias"
          },
          projects: "Projetos",
          contact: "Entre em contato"
        }
      }
    }
  });

export default i18n;