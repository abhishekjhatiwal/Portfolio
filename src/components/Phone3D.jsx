import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Phone3D() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Mouse tilt effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const slides = [
    {
      appName: 'Trade Battle',
      badge: 'Live',
      badgeColor: 'bg-purple-500',
      nameColor: 'text-emerald-400',
      content: (
        <>
          <div className="h-24 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 rounded-2xl border border-white/10 flex flex-col justify-center items-center">
            <div className="text-xl font-black text-white">$45,210</div>
            <div className="text-[10px] text-emerald-400 font-bold mt-0.5">+12.4% Today</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
              <div className="text-[9px] text-slate-400">Active Battles</div>
              <div className="text-xs font-bold text-white">142 Players</div>
            </div>
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
              <div className="text-[9px] text-slate-400">Win Rate</div>
              <div className="text-xs font-bold text-cyan-400">74.5%</div>
            </div>
          </div>
        </>
      ),
      cta: { label: 'Start Battle', color: 'bg-emerald-500' },
    },
    {
      appName: 'Rupiksha Services',
      badge: 'Play Store',
      badgeColor: 'bg-green-500',
      nameColor: 'text-blue-400',
      content: (
        <>
          <div className="text-xs font-extrabold text-slate-300 mb-2">Book Professional Services</div>
          <div className="grid grid-cols-3 gap-2">
            {['🧹 Cleaning', '🔧 Plumbing', '⚡ Electrician'].map((s, i) => (
              <div key={i} className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center justify-center text-[10px] font-semibold text-white">
                {s}
              </div>
            ))}
          </div>
          <div className="mt-3 bg-white/5 rounded-2xl border border-white/5 p-3 flex items-center justify-between">
            <div>
              <div className="text-[9px] text-slate-400">Ongoing Booking</div>
              <div className="text-[10px] font-bold text-emerald-400">Provider arriving in 4m</div>
            </div>
            <span className="text-[8px] bg-white/10 px-2 py-1 rounded-full text-slate-300 font-bold">Track</span>
          </div>
        </>
      ),
      cta: { label: 'Book Service Now', color: 'bg-blue-600' },
    },
    {
      appName: 'Sound For Silence',
      badge: 'Featured',
      badgeColor: 'bg-indigo-500',
      nameColor: 'text-purple-400',
      content: (
        <>
          <div className="bg-white/5 rounded-2xl border border-white/5 flex flex-col justify-center items-center p-5">
            <div className="text-xs font-bold text-slate-300">Compose UI Course</div>
            <div className="text-[9px] text-purple-400 mt-1.5">Section 4: MVVM Architecture</div>
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" style={{ width: '65%' }} />
            </div>
            <div className="text-[9px] text-slate-500 mt-2">65% Complete</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
              <div className="text-[9px] text-slate-400">Videos</div>
              <div className="text-xs font-bold text-white">24</div>
            </div>
            <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
              <div className="text-[9px] text-slate-400">Quizzes</div>
              <div className="text-xs font-bold text-purple-400">8 Passed</div>
            </div>
          </div>
        </>
      ),
      cta: { label: 'Resume Learning', color: 'bg-purple-600' },
    },
  ];

  const currentApp = slides[currentSlide];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex items-center justify-center py-8"
      style={{ perspective: '1200px' }}
    >
      {/* Floating tech badges around the phone */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-2 md:left-4 px-3 py-1.5 rounded-xl bg-blue-500/15 border border-blue-500/25 text-[11px] font-bold text-blue-400 backdrop-blur-sm z-10"
      >
        Kotlin
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-16 right-0 md:right-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-[11px] font-bold text-emerald-400 backdrop-blur-sm z-10"
      >
        Compose
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 left-0 md:left-2 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/25 text-[11px] font-bold text-amber-400 backdrop-blur-sm z-10"
      >
        Firebase
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-8 right-2 md:right-6 px-3 py-1.5 rounded-xl bg-pink-500/15 border border-pink-500/25 text-[11px] font-bold text-pink-400 backdrop-blur-sm z-10"
      >
        MVVM
      </motion.div>
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-1/2 right-0 md:right-0 px-3 py-1.5 rounded-xl bg-green-500/15 border border-green-500/25 text-[11px] font-bold text-green-400 backdrop-blur-sm z-10"
      >
        GCP
      </motion.div>

      {/* Phone body with 3D tilt */}
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="relative w-[260px] sm:w-[280px] select-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow behind the phone */}
        <div className="absolute -inset-8 bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-purple-600/20 rounded-[60px] blur-3xl opacity-60 pointer-events-none" />

        {/* Phone Bezel */}
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] p-[6px] shadow-2xl shadow-black/60 border border-white/[0.08]">
          {/* Inner Screen */}
          <div className="bg-[#0a0a1a] rounded-[34px] overflow-hidden relative">
            {/* Dynamic island / Notch */}
            <div className="flex justify-center pt-3 pb-1 relative z-10">
              <div className="w-20 h-5 bg-black rounded-full flex items-center justify-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
              </div>
            </div>

            {/* Screen Content */}
            <div className="px-4 pb-3 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
              {/* App Header */}
              <motion.div
                key={`header-${currentSlide}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-between items-center bg-white/[0.04] p-3 rounded-2xl border border-white/[0.06] mb-4"
              >
                <span className={`text-xs font-bold ${currentApp.nameColor}`}>{currentApp.appName}</span>
                <span className={`text-[9px] ${currentApp.badgeColor} text-white px-2.5 py-0.5 rounded-full font-bold`}>
                  {currentApp.badge}
                </span>
              </motion.div>

              {/* Slide Content */}
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex-1 flex flex-col justify-center"
              >
                {currentApp.content}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                key={`cta-${currentSlide}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className={`${currentApp.cta.color} py-3 rounded-2xl text-center text-xs font-bold text-white mt-4 shadow-lg`}
              >
                {currentApp.cta.label}
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-3.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/15'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Home Indicator Bar */}
            <div className="flex justify-center pb-2.5 pt-1">
              <div className="w-28 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
