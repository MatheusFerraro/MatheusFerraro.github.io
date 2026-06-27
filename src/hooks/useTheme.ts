import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  return prefersDark ? 'dark' : 'light';
}

/**
 * Dark/light theme. Toggles the `dark` class on <html> (Tailwind's class
 * strategy) and persists the choice in localStorage. The matching no-flash
 * script in index.html applies the same class before React mounts.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  );

  return { theme, toggleTheme };
}
