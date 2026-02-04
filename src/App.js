import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './hooks/useTheme';
import { projects } from './data/projects';
import { FrontStack, BackStack, DatabaseStack, EmbeddedStack, versionControl, testStack, devOpsStack } from './data/stack';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stackCategories = [
    { name: t('stack.frontend'), items: FrontStack },
    { name: t('stack.backend'), items: BackStack },
    { name: t('stack.database'), items: DatabaseStack },
    { name: t('stack.embedded'), items: EmbeddedStack },
    { name: t('stack.versionControl'), items: versionControl },
    { name: t('stack.testing'), items: testStack },
    { name: t('stack.devops'), items: devOpsStack }
  ];

  const translatedProjects = [
    {
      name: t('projectsList.recipeWorld.name'),
      description: t('projectsList.recipeWorld.description'),
      url: projects[0].url,
      technologies: projects[0].technologies
    },
    {
      name: t('projectsList.embedded.name'),
      description: t('projectsList.embedded.description'),
      url: projects[1].url,
      technologies: projects[1].technologies
    }
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Matheus Ferraro Logo" className="logo" onClick={scrollToTop} />
        </div>
        <div className="nav-center">
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            {t('nav.about')}
          </button>
          <button className="nav-link" onClick={() => scrollToSection('stack')}>
            {t('stack.title')}
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            {t('nav.projects')}
          </button>
        </div>
        <div className="nav-right">
          <div className="lang-buttons">
            <button 
              className={`lang-btn ${i18n.language === 'en' || i18n.language.startsWith('en') ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'fr' || i18n.language.startsWith('fr') ? 'active' : ''}`}
              onClick={() => changeLanguage('fr')}
            >
              FR
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'pt-BR' || i18n.language === 'pt' || i18n.language.startsWith('pt') ? 'active' : ''}`}
              onClick={() => changeLanguage('pt-BR')}
            >
              PT
            </button>
          </div>
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a className="btn" href="/resume/Resume.pdf" download>
            {t('nav.resume')}
          </a>
        </div>
      </nav>

      <header id="about" className="hero">
        <p className="hero-greeting">{t('hero.greeting')}</p>
        <h1>{t('hero.name')}</h1>
        <p className="hero-title">{t('hero.title')}</p>
        <div className="hero-bio">
          <p>{t('bio.intro')}</p>
          <p>{t('bio.skills')}</p>
          <p>{t('bio.current')}</p>
          <p className="hero-seeking">{t('bio.seeking')}</p>
        </div>
      </header>

      <section id="stack">
        <h2>{t('stack.title')}</h2>
        <div className="stack-categories">
          {stackCategories.map((category) => (
            <div key={category.name} className="stack-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="stack-grid">
                {category.items.map((item) => (
                  <div key={item.name} className="stack-card">
                    <img src={item.icon} alt={item.name} className="stack-icon" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>{t('projects')}</h2>
        <div className="projects-grid">
          {translatedProjects.map((p, index) => (
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
          <a href="https://www.linkedin.com/in/mcamiloferraro/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>

      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
