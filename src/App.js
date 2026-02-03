import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="container">
      <nav className="navbar">
        <div className="lang-switch">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('fr')}>FR</button>
          <button onClick={() => changeLanguage('pt-BR')}>PT</button>
        </div>
        <div className="theme-switch">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
        </div>
        <a className="btn" href="/resume/Resume.pdf" download>
        {t('nav.resume')}
        </a>
      </nav>
      <header className="hero">
        <h1>{t('hero.title')}</h1>
        <p>{t('description')}</p>
       
      </header>
      </div>
  );
}

export default App;
