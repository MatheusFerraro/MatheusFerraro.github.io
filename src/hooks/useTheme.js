import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = 'theme';

export function useTheme() {
  const prefersDark = useMemo(() => {
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.
    matches ?? false;}, []);

    const [theme, setTheme] = useState(() => {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ?? (prefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t => (t === 'dark' ? 'light' : 
      'dark')));

    return { theme, toggleTheme };
    
  }