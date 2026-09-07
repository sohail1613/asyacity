import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    const mediaQuery = window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : { matches: false, addEventListener: () => {}, removeEventListener: () => {} };
    const applyTheme = () => root.classList.toggle('dark', theme === 'dark' || (theme === 'system' && mediaQuery.matches));
    applyTheme();
    if (theme === 'system') mediaQuery.addEventListener('change', applyTheme);
    localStorage.setItem('theme', theme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'system' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
