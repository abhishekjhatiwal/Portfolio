import { ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t transition-colors duration-500 ${
        darkMode
          ? 'bg-[#050512] border-white/5'
          : 'bg-slate-900 border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/abhishek.jpeg"
              alt="Abhishek Verma"
              className="w-8 h-8 rounded-xl object-cover"
            />
            <span className="text-sm text-slate-400 font-medium">
              © 2026 Abhishek Verma. All rights reserved.
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Designed and built using React, Three.js &amp; Tailwind
          </p>
        </div>

        {/* Right — Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
