import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './hooks/useTheme';
import { projects } from './data/projects';
import { FrontStack, BackStack, DatabaseStack, EmbeddedStack, versionControl, testStack, devOpsStack } from './data/stack';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const allStack = [
    ...FrontStack,
    ...BackStack,
    ...DatabaseStack,
    ...EmbeddedStack,
    ...versionControl,
    ...testStack,
    ...devOpsStack
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-left">
          <button 
            className={i18n.language === 'en' ? 'active' : ''}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button 
            className={i18n.language === 'fr' ? 'active' : ''}
            onClick={() => changeLanguage('fr')}
          >
            FR
          </button>
          <button 
            className={i18n.language === 'pt-BR' ? 'active' : ''}
            onClick={() => changeLanguage('pt-BR')}
          >
            PT-BR
          </button>
        </div>
        <div className="nav-right">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a className="btn" href="/resume/Resume.pdf" download>
            {t('nav.resume')}
          </a>
        </div>
      </nav>

      <header className="hero">
        <h1>{t('hero.title')}</h1>
        <p className="hero-description">{t('description')}</p>
      </header>

      <section id="stack">
        <h2>{t('stack.title')}</h2>
        <div className="stack-grid">
          {allStack.map((item) => (
            <div key={item.name} className="stack-card">
              <img src={item.icon} alt={item.name} className="stack-icon" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>{t('projects')}</h2>
        <div className="projects-grid">
          {projects.map((p, index) => (
            <a key={index} className="project-card" href={p.url} target="_blank" rel="noreferrer">
              <h3>{p.name}</h3>
              <p className="project-description">{p.description}</p>
              <div className="tech-tags">
                {p.technologies?.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>{t('contact')}</p>
        <div className="social-links">
          <a href="https://github.com/MatheusFerraro" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/matheusferraro" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
