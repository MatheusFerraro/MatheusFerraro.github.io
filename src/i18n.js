import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-BR', 'pt', 'fr'],
    nonExplicitSupportedLngs: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            about: "About",
            projects: "Projects",
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
            title: "Tech Stack",
            frontend: "Frontend",
            backend: "Backend",
            database: "Database",
            embedded: "Embedded Systems",
            versionControl: "Version Control",
            testing: "Testing",
            devops: "DevOps"
          },
          projects: "Projects",
          contact: "Contact Me",
          projectsList: {
            recipeWorld: {
              name: "Recipe World",
              description: "A full-stack web application designed to demonstrate enterprise-level software development practices using ASP.NET Core MVC (.NET 8). This project was built to showcase proficiency in N-Tier Architecture, Secure Authentication, Database Management, and Unit Testing. It features a complete recipe management ecosystem with role-based security, ingredient tracking, and an admin approval workflow."
            },
            smartRetail: {
              name: "Smart Retail System",
              description: "A full-stack IoT application that automates retail shelf inventory tracking — from hardware sensor to live web dashboard. An ESP32 measures product stock via an ultrasonic sensor and transmits telemetry over Wi-Fi to a C# ASP.NET Core REST API. The backend persists readings in SQL Server and serves them to a live dashboard that auto-updates in real time."
            },
            snakeGame: {
              name: "ESP32 Snake Game",
              description: "A classic Snake Game built from scratch for the ESP32 — demonstrating OOP principles, State Machine architecture, and hardware-level I2C communication in embedded C++. The firmware uses abstract interfaces and polymorphism to fully decouple game logic from hardware drivers, with dynamic fallback to Serial Monitor when no hardware is detected."
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
            about: "À propos",
            projects: "Projets",
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
            title: "Stack Technique",
            frontend: "Frontend",
            backend: "Backend",
            database: "Base de Données",
            embedded: "Systèmes Embarqués",
            versionControl: "Contrôle de Version",
            testing: "Tests",
            devops: "DevOps"
          },
          projects: "Projets",
          contact: "Contactez-moi",
          projectsList: {
            recipeWorld: {
              name: "Recipe World",
              description: "Une application web full-stack conçue pour démontrer les pratiques de développement logiciel de niveau entreprise utilisant ASP.NET Core MVC (.NET 8). Ce projet a été construit pour mettre en valeur la maîtrise de l'Architecture N-Tier, l'Authentification Sécurisée, la Gestion de Base de Données et les Tests Unitaires. Il propose un écosystème complet de gestion de recettes avec sécurité basée sur les rôles, suivi des ingrédients et workflow d'approbation admin."
            },
            smartRetail: {
              name: "Système Smart Retail",
              description: "Une application IoT full-stack qui automatise le suivi d'inventaire en rayon — du capteur matériel au tableau de bord web en direct. Un ESP32 mesure le stock de produits via un capteur ultrasonique et transmet la télémétrie par Wi-Fi à une API REST C# ASP.NET Core. Le backend persiste les lectures dans SQL Server et les affiche sur un tableau de bord en temps réel."
            },
            snakeGame: {
              name: "Jeu Snake ESP32",
              description: "Un jeu Snake classique construit de zéro pour l'ESP32 — démontrant les principes de POO, l'architecture Machine d'État et la communication I2C au niveau matériel en C++ embarqué. Le firmware utilise des interfaces abstraites et le polymorphisme pour découpler complètement la logique du jeu des pilotes matériels, avec repli dynamique vers le Moniteur Série lorsqu'aucun matériel n'est détecté."
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
            about: "Sobre",
            projects: "Projetos",
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
            title: "Tecnologias",
            frontend: "Frontend",
            backend: "Backend",
            database: "Banco de Dados",
            embedded: "Sistemas Embarcados",
            versionControl: "Controle de Versão",
            testing: "Testes",
            devops: "DevOps"
          },
          projects: "Projetos",
          contact: "Entre em contato",
          projectsList: {
            recipeWorld: {
              name: "Recipe World",
              description: "Uma aplicação web full-stack projetada para demonstrar práticas de desenvolvimento de software de nível empresarial usando ASP.NET Core MVC (.NET 8). Este projeto foi construído para mostrar proficiência em Arquitetura N-Tier, Autenticação Segura, Gerenciamento de Banco de Dados e Testes Unitários. Possui um ecossistema completo de gerenciamento de receitas com segurança baseada em funções, rastreamento de ingredientes e fluxo de aprovação de administrador."
            },
            smartRetail: {
              name: "Sistema Smart Retail",
              description: "Uma aplicação IoT full-stack que automatiza o rastreamento de inventário em prateleiras — do sensor de hardware ao painel web em tempo real. Um ESP32 mede o estoque de produtos via sensor ultrassônico e transmite telemetria por Wi-Fi para uma API REST C# ASP.NET Core. O backend persiste as leituras no SQL Server e as exibe em um painel que atualiza automaticamente em tempo real."
            },
            snakeGame: {
              name: "Jogo Snake ESP32",
              description: "Um jogo Snake clássico construído do zero para o ESP32 — demonstrando princípios de POO, arquitetura de Máquina de Estados e comunicação I2C em nível de hardware em C++ embarcado. O firmware usa interfaces abstratas e polimorfismo para desacoplar completamente a lógica do jogo dos drivers de hardware, com fallback dinâmico para o Monitor Serial quando nenhum hardware é detectado."
            },
            embedded: {
              name: "Projetos Embarcados (Arduino UNO R3 + ESP32)",
              description: "Projetos práticos de sistemas embarcados construídos com o Kit Elegoo Super Starter UNO R3 e um D1 MINI ESP32. Este repositório foca na integração prática de hardware + software: GPIO, PWM, sensoriamento analógico, máquinas de estado/temporização e (no ESP32) rede WiFi."
            }
          }
        }
      },
      'pt': {
        translation: {
          nav: {
            about: "Sobre",
            projects: "Projetos",
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
            title: "Tecnologias",
            frontend: "Frontend",
            backend: "Backend",
            database: "Banco de Dados",
            embedded: "Sistemas Embarcados",
            versionControl: "Controle de Versão",
            testing: "Testes",
            devops: "DevOps"
          },
          projects: "Projetos",
          contact: "Entre em contato",
          projectsList: {
            recipeWorld: {
              name: "Recipe World",
              description: "Uma aplicação web full-stack projetada para demonstrar práticas de desenvolvimento de software de nível empresarial usando ASP.NET Core MVC (.NET 8). Este projeto foi construído para mostrar proficiência em Arquitetura N-Tier, Autenticação Segura, Gerenciamento de Banco de Dados e Testes Unitários. Possui um ecossistema completo de gerenciamento de receitas com segurança baseada em funções, rastreamento de ingredientes e fluxo de aprovação de administrador."
            },
            smartRetail: {
              name: "Sistema Smart Retail",
              description: "Uma aplicação IoT full-stack que automatiza o rastreamento de inventário em prateleiras — do sensor de hardware ao painel web em tempo real. Um ESP32 mede o estoque de produtos via sensor ultrassônico e transmite telemetria por Wi-Fi para uma API REST C# ASP.NET Core. O backend persiste as leituras no SQL Server e as exibe em um painel que atualiza automaticamente em tempo real."
            },
            snakeGame: {
              name: "Jogo Snake ESP32",
              description: "Um jogo Snake clássico construído do zero para o ESP32 — demonstrando princípios de POO, arquitetura de Máquina de Estados e comunicação I2C em nível de hardware em C++ embarcado. O firmware usa interfaces abstratas e polimorfismo para desacoplar completamente a lógica do jogo dos drivers de hardware, com fallback dinâmico para o Monitor Serial quando nenhum hardware é detectado."
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