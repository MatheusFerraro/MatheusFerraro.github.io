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
            greeting: "Hi, I'm",
            name: "Matheus Camilo Ferraro",
            title: "Software Development Student"
          },
          bio: {
            intro: "I am a Software Development Student at NBCC Moncton (Class of 2026), originally from Brazil 🇧🇷.",
            skills: "I bridge the gap between high-level software (ASP.NET Core, React) and low-level hardware (Arduino, ESP32).",
            current: "Currently, I am applying my technical problem-solving skills as an Electronic Associate at Walmart.",
            seeking: "I am seeking an Internship or Junior IT role for 2026. My focus is on C#/.NET ecosystems and Embedded Systems."
          },
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
            greeting: "Salut, je suis",
            name: "Matheus Camilo Ferraro",
            title: "Étudiant en Développement Logiciel"
          },
          bio: {
            intro: "Je suis étudiant en développement logiciel au NBCC Moncton (Promotion 2026), originaire du Brésil 🇧🇷.",
            skills: "Je fais le pont entre les logiciels de haut niveau (ASP.NET Core, React) et le matériel de bas niveau (Arduino, ESP32).",
            current: "Actuellement, j'applique mes compétences en résolution de problèmes techniques en tant qu'associé électronique chez Walmart.",
            seeking: "Je recherche un stage ou un poste junior en TI pour 2026. Je me concentre sur les écosystèmes C#/.NET et les systèmes embarqués."
          },
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
            greeting: "Oi, eu sou",
            name: "Matheus Camilo Ferraro",
            title: "Estudante de Desenvolvimento de Software"
          },
          bio: {
            intro: "Sou estudante de Desenvolvimento de Software no NBCC Moncton (Turma de 2026), originalmente do Brasil 🇧🇷.",
            skills: "Faço a ponte entre software de alto nível (ASP.NET Core, React) e hardware de baixo nível (Arduino, ESP32).",
            current: "Atualmente, aplico minhas habilidades de resolução de problemas técnicos como Associado Eletrônico no Walmart.",
            seeking: "Estou em busca de um Estágio ou função Junior em TI para 2026. Meu foco está em ecossistemas C#/.NET e Sistemas Embarcados."
          },
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