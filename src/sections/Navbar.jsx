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
              ? 'bg-[#07071a]/90 shadow-[0_4px_30px_rgba(0,0,0,.6)] backdrop-blur-xl border-b border-white/5'
              : 'bg-white/90 shadow-md backdrop-blur-xl border-b border-slate-200'
            : 'bg-transparent'
        }`}
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
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-blue-500/30 group-hover:ring-blue-500/60 transition-all duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#07071a]" />
            </div>
            <span className={`text-lg font-bold tracking-tight ${textPrimary}`}>
              Abhishek{' '}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
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
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                    isActive
                      ? 'text-blue-500 bg-blue-500/10'
                      : `${textSecondary} hover:${darkMode ? 'text-white' : 'text-slate-900'} hover:bg-${darkMode ? 'white/5' : 'slate-100'}`
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-blue-500/10 -z-10"
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
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Available for work
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
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
                  ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
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
                ? 'bg-[#07071a]/95 backdrop-blur-xl border-b border-white/5'
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
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                      isActive
                        ? 'text-blue-500 bg-blue-500/10'
                        : `${textSecondary} ${
                            darkMode ? 'hover:text-white hover:bg-white/5' : 'hover:text-slate-900 hover:bg-slate-100'
                          }`
                    }`}
                  >
                    {item}
                  </motion.button>
                );
              })}

              {/* Mobile Availability Badge */}
              <div className="mt-3 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-400">
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
