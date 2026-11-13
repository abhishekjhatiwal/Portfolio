import { ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GooglePlayIcon from '../components/GooglePlayIcon';
import { googlePlayDeveloper } from '../data';

const Footer = () => {
  const { darkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative transition-colors duration-500 ${
        darkMode
          ? 'bg-[#020108]'
          : 'bg-slate-900'
      }`}
    >
      {/* Neon gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background: darkMode
            ? 'linear-gradient(90deg, transparent, var(--color-neon-cyan), var(--color-neon-magenta), transparent)'
            : 'linear-gradient(90deg, transparent, #3b82f6, #6366f1, transparent)',
        }}
      />

      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <div
              className="relative"
              style={
                darkMode
                  ? {
                      borderRadius: '12px',
                      boxShadow: '0 0 10px rgba(0, 240, 255, 0.3), 0 0 25px rgba(0, 240, 255, 0.1)',
                    }
                  : undefined
              }
            >
              <img
                src="/abhishek.jpeg"
                alt="Abhishek Verma"
                className={`w-8 h-8 rounded-xl object-cover ${
                  darkMode ? 'ring-1 ring-[rgba(0,240,255,0.4)]' : ''
                }`}
              />
            </div>
            <span className="text-sm text-slate-400 font-medium">
              © 2026 Abhishek Verma. All rights reserved.
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Designed and built as a Neural Interface using React, Three.js &amp; Tailwind
          </p>
        </div>

        {/* Center — Google Play & Links */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href={googlePlayDeveloper.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
              darkMode
                ? 'bg-white/5 hover:bg-[#00f0ff]/10 text-slate-300 hover:text-[#00f0ff] border border-white/10 hover:border-[#00f0ff]/30'
                : 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white'
            }`}
          >
            <GooglePlayIcon size={15} />
            <span>Google Play Console</span>
          </a>
          <a
            href="https://github.com/abhishekjhatiwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-jhatiwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Right — Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`p-3 rounded-2xl transition-all duration-300 ${
            darkMode
              ? 'holo-card hud-brackets !rounded-2xl text-slate-400 hover:text-[var(--color-neon-cyan)] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] border-[rgba(0,240,255,0.2)]'
              : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
