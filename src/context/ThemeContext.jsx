import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('portfolio-theme');
    if (stored !== null) return stored === 'dark';
    // Fall back to system preference — default to dark for sci-fi
    return true;
  });

  // Persist theme choice
  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  /* Computed style tokens — Sci-Fi themed */
  const card = darkMode
    ? 'holo-card hud-brackets'
    : 'bg-white/90 border border-slate-200 shadow-sm rounded-2xl';

  const textPrimary = darkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = darkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = darkMode ? 'text-slate-500' : 'text-slate-500';

  const sectionAlt = darkMode
    ? 'bg-[#05011a]'
    : 'bg-slate-50/50';

  const sectionBase = darkMode
    ? 'bg-[#020108]'
    : 'bg-white';

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
