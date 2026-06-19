import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import confetti from 'canvas-confetti';
import { Check, X } from 'lucide-react';

// Context
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Components
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import Preloader from './components/Preloader';

// Sections
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function PortfolioApp() {
  const { darkMode } = useTheme();

  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const statsContainerRef = useRef(null);

  /* ─── Lenis Smooth Scroll & Preloader ─── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => setIsLoaded(true), 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  /* ─── Scroll Detection ─── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'];
      const pos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── GSAP Stat Counter Animation ─── */
  useEffect(() => {
    if (!isLoaded) return;
    const targets = document.querySelectorAll('.stat-count');
    targets.forEach((target) => {
      const targetVal = parseInt(target.getAttribute('data-target'), 10);
      gsap.fromTo(
        target,
        { textContent: 0 },
        {
          textContent: targetVal,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: { trigger: target, start: 'top 85%' },
          snap: { textContent: 1 },
          onUpdate: function () {
            if (target.id === 'stat-client') {
              target.textContent = this.targets()[0].textContent + '%';
            } else {
              target.textContent = this.targets()[0].textContent + '+';
            }
          },
        }
      );
    });
  }, [isLoaded]);

  /* ─── Helpers ─── */
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleDownloadCV = () => {
    triggerToast('Preparing your CV download...');
    setTimeout(() => {
      window.open(
        'https://drive.google.com/file/d/15MTtHyK18dBZcrcLGZpUNk1r4ttiRZhI/view?usp=sharing',
        '_blank'
      );
      confetti({ particleCount: 80, spread: 80 });
    }, 1200);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-[#07071a] text-white' : 'bg-white text-slate-900'
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Global Overlays */}
      <CustomCursor />
      <NoiseOverlay />
      <Preloader isLoaded={isLoaded} />

      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2 border border-blue-400/30"
          >
            <Check className="w-5 h-5" /> {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        scrollTo={scrollTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Sections */}
      <Hero
        scrollTo={scrollTo}
        handleDownloadCV={handleDownloadCV}
        statsContainerRef={statsContainerRef}
      />
      <Services setShowCalendly={setShowCalendly} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#07071a] rounded-3xl border border-white/15 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#0a0a24]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
                Discovery Call Schedule
              </h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="p-1.5 bg-white/5 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full bg-white">
              <iframe
                src="https://calendly.com/"
                className="w-full h-full"
                title="Calendly Scheduler"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}