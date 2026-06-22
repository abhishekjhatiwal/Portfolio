import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { experienceRoles } from '../data';
import GlitchText from '../components/GlitchText';

const Experience = () => {
  const { darkMode, card, textPrimary, textSecondary, textMuted, sectionAlt } = useTheme();
  const [expandedRole, setExpandedRole] = useState(null);

  const toggleRole = (id) => {
    setExpandedRole((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className={`py-20 md:py-28 ${sectionAlt} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-block mb-4 ${
              darkMode
                ? 'section-badge'
                : 'px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}
          >
            Timeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-black ${textPrimary} ${darkMode ? 'font-display' : ''}`}
          >
            Career{' '}
            <GlitchText text="History" />
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-8 sm:pl-12">
          {/* Vertical gradient line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 rounded-full"
            style={{
              background: darkMode
                ? 'linear-gradient(to bottom, var(--color-neon-cyan), var(--color-neon-magenta))'
                : 'linear-gradient(to bottom, #3b82f6, #6366f1)',
              filter: darkMode ? 'drop-shadow(0 0 6px rgba(0, 240, 255, 0.4))' : 'none',
            }}
          />

          {experienceRoles.map((role, index) => {
            const isExpanded = expandedRole === role.id;

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Indicator dot */}
                <div className="absolute -left-8 sm:-left-12 top-6 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      darkMode ? 'border-[var(--color-void)]' : 'border-slate-50'
                    }`}
                    style={{
                      background: darkMode
                        ? 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-magenta))'
                        : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                      boxShadow: darkMode
                        ? '0 0 12px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.15)'
                        : '0 4px 12px rgba(59, 130, 246, 0.3)',
                    }}
                  />
                </div>

                {/* Card */}
                <div className={`${card} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg ${
                  darkMode ? 'hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]' : 'hover:shadow-slate-200'
                }`}>
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-black leading-tight"
                        style={{
                          background: darkMode
                            ? 'linear-gradient(to right, var(--color-neon-cyan), var(--color-neon-magenta))'
                            : 'linear-gradient(to right, #3b82f6, #6366f1)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        {role.icon && (
                          <span className="text-lg">{role.icon}</span>
                        )}
                        <span className={`text-sm font-medium ${textSecondary}`}>
                          {role.company}
                        </span>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide whitespace-nowrap ${
                      darkMode
                        ? 'bg-[rgba(0,240,255,0.04)] text-slate-400 border border-[rgba(0,240,255,0.12)]'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {role.period}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className={`text-sm leading-relaxed ${textSecondary} mb-4`}>
                    {role.summary}
                  </p>

                  {/* Expandable achievements */}
                  {role.achievements && role.achievements.length > 0 && (
                    <div>
                      <button
                        onClick={() => toggleRole(role.id)}
                        className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                          darkMode
                            ? 'text-[var(--color-neon-cyan)] hover:text-white'
                            : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        <span>{isExpanded ? 'Hide' : 'View'} key achievements</span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden mt-3 space-y-2.5"
                          >
                            {role.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: i * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <span
                                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{
                                    background: darkMode
                                      ? 'linear-gradient(to right, var(--color-neon-cyan), var(--color-neon-magenta))'
                                      : 'linear-gradient(to right, #3b82f6, #6366f1)',
                                  }}
                                />
                                <span className={`text-sm leading-relaxed ${textSecondary}`}>
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* LinkedIn testimonials link */}
                  {role.linkedinUrl && (
                    <a
                      href={role.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 mt-4 text-xs font-medium transition-colors duration-200 ${
                        darkMode
                          ? 'text-slate-500 hover:text-[var(--color-neon-cyan)]'
                          : 'text-slate-400 hover:text-blue-600'
                      }`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>View testimonials on LinkedIn</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
