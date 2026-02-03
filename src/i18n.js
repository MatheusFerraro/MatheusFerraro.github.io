import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-BR', 'fr'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
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
          contact: "Contact Me",
          projectsList: {
            recipeWorld: {
              name: "Recipe World",
              description: "A full-stack web application designed to demonstrate enterprise-level software development practices using ASP.NET Core MVC (.NET 8). This project was built to showcase proficiency in N-Tier Architecture, Secure Authentication, Database Management, and Unit Testing. It features a complete recipe management ecosystem with role-based security, ingredient tracking, and an admin approval workflow."
            },
            embedded: {
              name: "Embedded-Projects (Arduino UNO R3 + ESP32)",
              description: "Hands-on embedded systems projects built with the Elegoo Super Starter Kit UNO R3 and a D1 MINI ESP32. This repo focuses on practical hardware + software integration: GPIO, PWM, analog sensing, timing/state machines, and (on ESP32) WiFi networking."
            }
          }
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
          contact: "Contactez-moi",
          projectsList: {
            recipeWorld: {
              name: "Recipe World",
              description: "Une application web full-stack conçue pour démontrer les pratiques de développement logiciel de niveau entreprise utilisant ASP.NET Core MVC (.NET 8). Ce projet a été construit pour mettre en valeur la maîtrise de l'Architecture N-Tier, l'Authentification Sécurisée, la Gestion de Base de Données et les Tests Unitaires. Il propose un écosystème complet de gestion de recettes avec sécurité basée sur les rôles, suivi des ingrédients et workflow d'approbation admin."
            },
            embedded: {
              name: "Projets Embarqués (Arduino UNO R3 + ESP32)",
              description: "Projets de systèmes embarqués pratiques construits avec le Kit de Démarrage Super Elegoo UNO R3 et un D1 MINI ESP32. Ce dépôt se concentre sur l'intégration pratique matériel + logiciel : GPIO, PWM, détection analogique, machines d'état/temporisation et (sur ESP32) réseau WiFi."
            }
          }
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
          contact: "Entre em contato",
          projectsList: {
            recipeWorld: {
              name: "Recipe World",
              description: "Uma aplicação web full-stack projetada para demonstrar práticas de desenvolvimento de software de nível empresarial usando ASP.NET Core MVC (.NET 8). Este projeto foi construído para mostrar proficiência em Arquitetura N-Tier, Autenticação Segura, Gerenciamento de Banco de Dados e Testes Unitários. Possui um ecossistema completo de gerenciamento de receitas com segurança baseada em funções, rastreamento de ingredientes e fluxo de aprovação de administrador."
            },
            embedded: {
              name: "Projetos Embarcados (Arduino UNO R3 + ESP32)",
              description: "Projetos práticos de sistemas embarcados construídos com o Kit Elegoo Super Starter UNO R3 e um D1 MINI ESP32. Este repositório foca na integração prática de hardware + software: GPIO, PWM, sensoriamento analógico, máquinas de estado/temporização e (no ESP32) rede WiFi."
            }
          }
        }
      }
    }
  });

export default i18n;