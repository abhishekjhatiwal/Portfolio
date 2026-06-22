import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { navItems } from '../data';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ scrolled, activeSection, scrollTo, menuOpen, setMenuOpen }) {
  const { darkMode, toggleDarkMode, card, textPrimary, textSecondary } = useTheme();

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? 'bg-[#020108]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,.6)]'
              : 'bg-white/90 shadow-md backdrop-blur-xl border-b border-slate-200'
            : 'bg-transparent'
        }`}
        style={
          scrolled && darkMode
            ? { borderBottom: '1px solid rgba(0,240,255,0.1)' }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* ── Left: Avatar + Brand ── */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src="/abhishek.jpeg"
                alt="Abhishek"
                className={`w-9 h-9 rounded-xl object-cover ring-2 transition-all duration-300 ${
                  darkMode
                    ? 'ring-[#00f0ff]/30 group-hover:ring-[#00f0ff]/60'
                    : 'ring-blue-500/30 group-hover:ring-blue-500/60'
                }`}
              />
              <span
                className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 ${
                  darkMode
                    ? 'bg-[#00f0ff] border-[#020108] shadow-[0_0_6px_rgba(0,240,255,0.6)]'
                    : 'bg-emerald-400 border-white'
                }`}
              />
            </div>
            <span className={`text-lg font-bold tracking-tight ${textPrimary}`}>
              Abhishek{' '}
              <span className={`bg-clip-text text-transparent ${
                darkMode
                  ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500'
              }`}>
                Verma
              </span>
            </span>
          </button>

          {/* ── Center: Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold uppercase font-mono tracking-wider transition-all duration-300 ${
                    isActive
                      ? darkMode
                        ? 'text-[#00f0ff]'
                        : 'text-blue-500'
                      : `${textSecondary} ${
                          darkMode
                            ? 'hover:text-white hover:bg-white/5'
                            : 'hover:text-slate-900 hover:bg-slate-100'
                        }`
                  }`}
                  style={
                    isActive && darkMode
                      ? { textShadow: '0 0 10px rgba(0,240,255,0.5), 0 0 30px rgba(0,240,255,0.2)' }
                      : undefined
                  }
                >
                  {isActive ? `[ ${item} ]` : item}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 rounded-full ${
                        darkMode
                          ? 'bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.4)]'
                          : 'bg-blue-500'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Right: Badge + Theme Toggle + Hamburger ── */}
          <div className="flex items-center gap-3">
            {/* Availability Badge */}
            <div
              className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                darkMode
                  ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/20'
                  : 'bg-emerald-500/10 border border-emerald-500/20'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    darkMode ? 'bg-[#00f0ff]' : 'bg-emerald-400'
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    darkMode
                      ? 'bg-[#00f0ff] shadow-[0_0_6px_rgba(0,240,255,0.5)]'
                      : 'bg-emerald-500'
                  }`}
                />
              </span>
              <span
                className={`text-xs font-semibold ${
                  darkMode ? 'text-[#00f0ff] anim-neon-pulse' : 'text-emerald-400'
                }`}
              >
                Available for work
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-transparent hover:border-[#00f0ff]/40 hover:shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'moon' : 'sun'}
                  initial={{ scale: 0, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-transparent hover:border-[#00f0ff]/40'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ scale: 0, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-20 inset-x-0 z-40 overflow-hidden lg:hidden ${
              darkMode
                ? 'bg-[#020108]/95 backdrop-blur-xl border-b border-[#00f0ff]/10'
                : 'bg-white/95 backdrop-blur-xl border-b border-slate-200'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item;
                return (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      scrollTo(item);
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold uppercase font-mono tracking-wider transition-all duration-300 ${
                      isActive
                        ? darkMode
                          ? 'text-[#00f0ff] holo-card hud-brackets'
                          : 'text-blue-500 bg-blue-500/10'
                        : `${textSecondary} ${
                            darkMode
                              ? 'hover:text-white hover:bg-white/5'
                              : 'hover:text-slate-900 hover:bg-slate-100'
                          }`
                    }`}
                    style={
                      isActive && darkMode
                        ? { textShadow: '0 0 10px rgba(0,240,255,0.5)' }
                        : undefined
                    }
                  >
                    {isActive ? `[ ${item} ]` : item}
                  </motion.button>
                );
              })}

              {/* Mobile Availability Badge */}
              <div
                className={`mt-3 flex items-center gap-2 px-4 py-3 rounded-xl ${
                  darkMode
                    ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/20'
                    : 'bg-emerald-500/10 border border-emerald-500/20'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      darkMode ? 'bg-[#00f0ff]' : 'bg-emerald-400'
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      darkMode
                        ? 'bg-[#00f0ff] shadow-[0_0_6px_rgba(0,240,255,0.5)]'
                        : 'bg-emerald-500'
                    }`}
                  />
                </span>
                <span
                  className={`text-xs font-semibold ${
                    darkMode ? 'text-[#00f0ff]' : 'text-emerald-400'
                  }`}
                >
                  Available for work
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
