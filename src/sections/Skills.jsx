import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { skillGroups, certifications } from '../data';
import { Eye, CheckCircle, Award, X } from 'lucide-react';
import TechConstellation from '../components/TechConstellation';
import FlipCard from '../components/FlipCard';
import GlitchText from '../components/GlitchText';

function Skills() {
  const { darkMode, card, textPrimary, textSecondary, textMuted, sectionBase } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="skills" className={`py-20 md:py-28 ${sectionBase}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className={`inline-block mb-4 ${
              darkMode
                ? 'section-badge'
                : 'px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-200'
            }`}
          >
            Stack
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${textPrimary} ${darkMode ? 'font-display' : ''}`}>
            Technical{' '}
            <GlitchText text="Proficiencies" />
          </h2>
        </div>

        {/* ─── Two-column: Constellation + Progress Bars ─── */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Left — Interactive Skill Graph */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <TechConstellation />
          </div>

          {/* Right — Skill Progress Meters */}
          <div className="lg:col-span-7 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.category} className={`rounded-2xl p-5 ${card}`}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className={`text-sm font-bold ${textPrimary}`}>{group.category}</h4>
                    <p className={`text-[11px] mt-0.5 ${textMuted}`}>
                      {group.skills.join(' · ')}
                    </p>
                  </div>
                  <span
                    className="text-xs font-bold"
                    style={{ color: group.color }}
                  >
                    {group.percent}%
                  </span>
                </div>

                {/* Progress bar track */}
                <div
                  className={`w-full h-2 rounded-full overflow-hidden ${
                    darkMode ? 'bg-[rgba(0,240,255,0.05)]' : 'bg-slate-200'
                  }`}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: group.color,
                      boxShadow: `0 0 8px ${group.color}66, 0 0 20px ${group.color}33`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.percent}%` }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}

            {/* Currently Learning badge */}
            <div className="flex justify-center pt-2">
              <span
                className={`relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold overflow-hidden ${
                  darkMode
                    ? 'bg-[rgba(0,240,255,0.08)] text-[var(--color-neon-cyan)] border border-[rgba(0,240,255,0.2)] anim-neon-pulse'
                    : 'bg-cyan-50 text-cyan-600 border border-cyan-200'
                }`}
              >
                {/* Shimmer overlay */}
                <span
                  className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  aria-hidden="true"
                />
                <CheckCircle size={13} />
                Currently Learning
              </span>
            </div>
          </div>
        </div>

        {/* ─── Certifications Gallery ─── */}
        <div>
          <div className="text-center mb-8">
            <h3 className={`text-2xl sm:text-3xl font-extrabold mb-2 ${textPrimary} ${darkMode ? 'font-display' : ''}`}>
              NPTEL &amp; Professional Certifications
            </h3>
            <p className={`text-xs ${textMuted}`}>
              Some NPTEL certifications were issued under name:{' '}
              <span className="font-semibold">Abhishek Verma</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => {
              const CertIcon = cert.IconComp;
              return (
                <FlipCard
                  key={idx}
                  front={
                    <>
                      {/* Icon */}
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cert.bg}`}>
                          <CertIcon size={20} className={cert.color} />
                        </div>
                        <span className="text-[9px] font-bold tracking-widest text-[var(--color-neon-cyan)] uppercase">
                          IIT Partnered
                        </span>
                      </div>

                      {/* Info */}
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-[11px] text-slate-500">{cert.institution}</p>
                      </div>

                      {/* Hint */}
                      <p className="text-[10px] text-slate-600 text-center">
                        Tap to view details
                      </p>
                    </>
                  }
                  back={
                    <div className="flex flex-col items-center justify-center h-full gap-3">
                      <h5 className="text-xs font-bold tracking-wider text-[var(--color-neon-cyan)] uppercase">
                        Credentials Verify
                      </h5>

                      {cert.verifyLink && (
                        <a
                          href={cert.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="cyber-btn text-[11px] !px-4 !py-2 !rounded-xl"
                        >
                          <Eye size={13} />
                          Verify
                        </a>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(cert);
                        }}
                        className="cyber-btn text-[11px] !px-4 !py-2 !rounded-xl"
                      >
                        <Award size={13} />
                        View Certificate
                      </button>
                    </div>
                  }
                  frontClassName={
                    darkMode
                      ? 'bg-[#0a0118] border border-[rgba(0,240,255,0.1)]'
                      : undefined
                  }
                  backClassName={
                    darkMode
                      ? 'bg-[#050112] border border-[rgba(0,240,255,0.2)]'
                      : undefined
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Certificate Modal ─── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={`w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden ${
              darkMode
                ? 'bg-[#050112] border border-[rgba(0,240,255,0.15)]'
                : 'bg-white border border-slate-200 shadow-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between px-5 py-4 border-b ${
                darkMode ? 'border-[rgba(0,240,255,0.1)]' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Award size={18} className="text-[var(--color-neon-cyan)]" />
                <h4 className={`text-sm font-bold ${textPrimary}`}>{selectedCert.name}</h4>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  darkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-1">
              {selectedCert.type === 'pdf' ? (
                <iframe
                  src={selectedCert.file}
                  title={selectedCert.name}
                  className="w-full h-[70vh] rounded-xl"
                  style={{ border: 'none' }}
                />
              ) : (
                <img
                  src={selectedCert.file}
                  alt={selectedCert.name}
                  className="w-full h-auto object-contain rounded-xl"
                />
              )}
            </div>

            {/* Footer */}
            <div
              className={`flex items-center justify-end px-5 py-3 border-t ${
                darkMode ? 'border-[rgba(0,240,255,0.1)]' : 'border-slate-200'
              }`}
            >
              {selectedCert.verifyLink && (
                <a
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn cyber-btn-primary text-xs !px-5 !py-2 !rounded-xl"
                >
                  <Eye size={14} />
                  Verify Credentials
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
