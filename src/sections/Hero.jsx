import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { stats, socialLinks } from '../data';
import { MessageSquare, Eye, Download, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import HyperdriveBackground from '../components/HyperdriveBackground';
import HolographicGrid from '../components/HolographicGrid';
import GlitchText from '../components/GlitchText';
import Phone3D from '../components/Phone3D';
import MagneticButton from '../components/MagneticButton';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Hero({ scrollTo, handleDownloadCV, statsContainerRef }) {
  const { darkMode, card, textPrimary, textSecondary, sectionBase } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-6 ${sectionBase}`}
    >
      {/* ── Hyperdrive Background ── */}
      <div className="absolute inset-0 z-0">
        <HyperdriveBackground darkMode={darkMode} />
      </div>

      {/* ── Ambient Glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] ${
            darkMode ? 'bg-[#00f0ff]/15' : 'bg-blue-400/10'
          }`}
        />
        <div
          className={`absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[140px] ${
            darkMode ? 'bg-[#ff00aa]/12' : 'bg-purple-400/8'
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] ${
            darkMode ? 'bg-[#8b5cf6]/10' : 'bg-indigo-300/8'
          }`}
        />
      </div>

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">

        {/* ── Left Column ── */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Availability Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl mb-8 ${
              darkMode
                ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/20'
                : 'bg-emerald-50 border border-emerald-200'
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  darkMode ? 'bg-[#00f0ff]' : 'bg-emerald-400'
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  darkMode
                    ? 'bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.6)]'
                    : 'bg-emerald-500'
                }`}
              />
            </span>
            <span
              className={`text-sm font-semibold ${
                darkMode ? 'text-[#00f0ff] anim-neon-pulse' : 'text-emerald-600'
              }`}
            >
              Available for Remote &amp; Freelance Projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className={`text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 font-display ${textPrimary}`}
          >
            <GlitchText>
              I Build{' '}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00f0ff] to-[#ff00aa]'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
              >
                Android Apps
              </span>
              <br />
              That{' '}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00f0ff] to-[#ff00aa]'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
              >
                People Love
              </span>
            </GlitchText>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className={`text-base sm:text-lg max-w-xl leading-relaxed mb-10 ${textSecondary}`}
          >
            Hey, I&apos;m <span className={`font-semibold ${textPrimary}`}>Abhishek Verma</span> — an
            Android developer who crafts fast, beautiful mobile experiences with{' '}
            <span className={`font-semibold ${textPrimary}`}>Kotlin</span>,{' '}
            <span className={`font-semibold ${textPrimary}`}>Jetpack Compose</span>, and{' '}
            <span className={`font-semibold ${textPrimary}`}>Clean MVVM</span> architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            {/* Hire Me */}
            <MagneticButton>
              <button
                onClick={() => scrollTo('contact')}
                className={`group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
                  darkMode
                    ? 'cyber-btn-primary'
                    : 'rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                }`}
              >
                <MessageSquare size={18} />
                Hire Me
              </button>
            </MagneticButton>

            {/* View My Work */}
            <MagneticButton>
              <button
                onClick={() => scrollTo('projects')}
                className={`group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
                  darkMode
                    ? 'cyber-btn'
                    : `rounded-xl ${card} ${textPrimary}`
                }`}
              >
                <Eye size={18} />
                View My Work
              </button>
            </MagneticButton>

            {/* Resume */}
            <MagneticButton>
              <button
                onClick={handleDownloadCV}
                className={`group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
                  darkMode
                    ? 'cyber-btn'
                    : `rounded-xl ${card} ${textPrimary}`
                }`}
              >
                <Download size={18} />
                Resume
              </button>
            </MagneticButton>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex items-center gap-3"
          >
            {socialLinks.map(({ Icon, href, label }) => (
              <MagneticButton key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? 'bg-white/5 hover:bg-[#00f0ff]/10 text-slate-400 hover:text-[#00f0ff] border border-transparent hover:border-[#00f0ff]/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Icon size={18} />
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        {/* ── Right Column: Phone3D ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex items-center justify-center mt-16 lg:mt-0"
        >
          <Phone3D />
        </motion.div>
      </div>

      {/* ── Stats Grid ── */}
      <motion.div
        ref={statsContainerRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map(({ value, label, icon: StatIcon, id }) => (
          <div
            key={id}
            className={`group relative flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03] ${
              darkMode ? 'holo-card hud-brackets' : card
            }`}
          >
            {/* Icon */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 ${
                darkMode
                  ? 'bg-[#00f0ff]/10 text-[#00f0ff] group-hover:bg-[#00f0ff]/20'
                  : 'bg-blue-50 text-blue-500 group-hover:bg-blue-100'
              }`}
            >
              <StatIcon size={22} />
            </div>

            {/* Counter Value */}
            <span
              id={id}
              data-target={value}
              className={`stat-count text-3xl sm:text-4xl font-black tracking-tight ${textPrimary}`}
            >
              0
            </span>

            {/* Label */}
            <span className={`text-sm font-medium ${textSecondary}`}>
              {label}
            </span>

            {/* Check badge */}
            <div
              className={`absolute top-3 right-3 flex items-center justify-center w-5 h-5 rounded-full ${
                darkMode
                  ? 'bg-[#00f0ff]/10 text-[#00f0ff]'
                  : 'bg-emerald-50 text-emerald-500'
              }`}
            >
              <Check size={12} />
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Holographic Grid Floor ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none">
        <HolographicGrid darkMode={darkMode} />
      </div>
    </section>
  );
}

export default Hero;
