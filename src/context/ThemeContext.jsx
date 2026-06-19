import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('portfolio-theme');
    if (stored !== null) return stored === 'dark';
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Persist theme choice
  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  /* Computed style tokens used across all sections */
  const card = darkMode
    ? 'bg-white/[0.03] border border-white/10 backdrop-blur-md'
    : 'bg-white border border-slate-200 shadow-sm';
  const textPrimary = darkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = darkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = darkMode ? 'text-slate-500' : 'text-slate-500';
  const sectionAlt = darkMode ? 'bg-[#0a0a24]' : 'bg-slate-50/50';
  const sectionBase = darkMode ? 'bg-[#07071a]' : 'bg-white';

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        card,
        textPrimary,
        textSecondary,
        textMuted,
        sectionAlt,
        sectionBase,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
