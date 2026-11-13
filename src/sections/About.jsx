import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, MapPin, Github, Award, BookOpen, ExternalLink, Star } from 'lucide-react';
import GlitchText from '../components/GlitchText';

const About = () => {
  const { darkMode, card, textPrimary, textSecondary, textMuted, sectionBase } = useTheme();

  // Stable heatmap data using seeded index
  const heatmapData = useMemo(() => {
    const cols = 48;
    const rows = 7;
    const data = [];
    for (let colIdx = 0; colIdx < cols; colIdx++) {
      const column = [];
      for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
        const level = ((colIdx * 7 + rowIdx) * 13 + 7) % 4;
        column.push(level);
      }
      data.push(column);
    }
    return data;
  }, []);

  const heatmapColors = [
    darkMode ? 'bg-white/[0.04]' : 'bg-slate-200/60',
    darkMode ? 'bg-[#00f0ff]/20' : 'bg-emerald-900/40',
    darkMode ? 'bg-[#8b5cf6]/50' : 'bg-emerald-700/60',
    darkMode ? 'bg-[#ff00aa]' : 'bg-emerald-400',
  ];

  const timelineEntries = [
    {
      year: '2022',
      title: 'Started B.Tech in CSE',
      description:
        'Began Computer Science & Engineering at Arya Institute of Engineering Technology and Management, Jaipur. Mastered foundational languages (C, C++, Java, SQL, OOP, DSA).',
    },
    {
      year: '2024',
      title: 'Full-Stack & Cloud Research',
      description:
        'Mastered Spring Boot, Spring Security, JWT, and PostgreSQL; co-authored academic research on Microsoft Azure cloud architecture.',
    },
    {
      year: '2025',
      title: 'Fintech & Healthcare Platforms',
      description:
        'Built Rupiksha Fintech Android app (Compose, MVVM) & Spring Boot microservices on Google Cloud SQL (Cloud Run, AWS); owned Bihar Health Dept backend.',
    },
    {
      year: '2026',
      title: 'Google Play & Discipline Star',
      description:
        'Shipped ScreenLens Translator to Google Play (5.0★ rating, 50+ downloads) and awarded prestigious NPTEL Discipline Star for 50+ weeks of coursework.',
    },
  ];

  return (
    <section id="about" className={`py-20 md:py-28 ${sectionBase}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
              darkMode
                ? 'section-badge'
                : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}
          >
            About Me
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-display ${textPrimary}`}>
            <GlitchText>
              Architecting{' '}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
              >
                Digital Interfaces
              </span>
            </GlitchText>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Education Card */}
          <div
            className={`md:col-span-2 rounded-2xl p-6 flex flex-col ${card} transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  darkMode
                    ? 'bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] shadow-lg shadow-[#00f0ff]/20'
                    : 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20'
                }`}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${textPrimary}`}>Education</h3>
                <p className={`text-xs ${textMuted}`}>B.Tech CSE &amp; Senior Secondary</p>
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <p className={`text-sm font-semibold ${textPrimary}`}>
                  Arya Institute of Engineering Technology and Management
                </p>
                <p className={`text-xs ${textSecondary}`}>
                  B.Tech in Computer Science &amp; Engineering · Jaipur, India (Aug 2022 – Apr 2026)
                </p>
                <p className={`text-xs mt-1 leading-relaxed ${textSecondary}`}>
                  Focused on Kotlin, Spring Boot, OOP, Data Structures, Relational Databases, and API Security.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200/50 dark:border-white/5">
                <p className={`text-sm font-semibold ${textPrimary}`}>
                  Bharti Vidhya Niketan Sr. Sec. School
                </p>
                <p className={`text-xs ${textSecondary}`}>
                  12th, RBSE · Jaipur, India (Jul 2021 – Apr 2022)
                </p>
              </div>
            </div>
            <div
              className={`mt-4 pt-3 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${
                darkMode ? 'border-[#00f0ff]/10' : 'border-slate-200'
              }`}
            >
              <span className={`text-xs font-medium ${textMuted}`}>
                Academic Distinction &amp; NPTEL Discipline Star
              </span>
              <span className={`text-xs font-medium flex items-center gap-1 ${textMuted}`}>
                <MapPin className="w-3 h-3" />
                Jaipur, India
              </span>
            </div>
          </div>

          {/* Location Card */}
          <div
            className={`rounded-2xl p-6 flex flex-col ${card} transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  darkMode
                    ? 'bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] shadow-lg shadow-[#00f0ff]/20'
                    : 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20'
                }`}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-lg font-bold ${textPrimary}`}>Current Location</h3>
            </div>
            <p className={`text-sm leading-relaxed flex-1 ${textSecondary}`}>
              Operating from the pink city, Jaipur — a vibrant hub blending heritage with a growing tech ecosystem. Available for remote collaboration worldwide.
            </p>
            <div className="mt-6">
              <div
                className={`rounded-xl px-4 py-3 text-center ${
                  darkMode
                    ? 'bg-[#00f0ff]/5 border border-[#00f0ff]/15'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span
                  className={`text-xs font-bold tracking-[0.2em] ${
                    darkMode
                      ? 'text-[#00f0ff]'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent'
                  }`}
                  style={darkMode ? { textShadow: '0 0 10px rgba(0,240,255,0.3)' } : undefined}
                >
                  JAIPUR, RAJASTHAN
                </span>
              </div>
            </div>
          </div>

          {/* NPTEL Discipline Star Card */}
          <div
            className={`md:col-span-2 rounded-2xl p-6 flex flex-col justify-between ${card} transition-all duration-300 relative overflow-hidden`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      darkMode
                        ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/25'
                        : 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25'
                    }`}
                  >
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${textPrimary}`}>NPTEL Discipline Star</h3>
                    <p className={`text-xs text-amber-500 font-semibold`}>Jul – Dec 2025 · IITs Academic Honor</p>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                    darkMode
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  Distinction
                </span>
              </div>
              <p className={`text-sm leading-relaxed mb-4 ${textSecondary}`}>
                Conferred the prestigious <span className={`font-semibold ${textPrimary}`}>NPTEL Discipline Star</span> for outstanding academic performance in Computer Science and Engineering, completing <span className={`font-semibold ${textPrimary}`}>50+ weeks of rigorous NPTEL coursework</span> across 7 specialized certification subjects from IIT Kharagpur and IIT Kanpur.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-200/50 dark:border-white/5">
              <span className={`text-xs ${textMuted}`}>7 Specialized IIT Certifications Completed</span>
              <a
                href="/nptel-star-certificate.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                  darkMode ? 'text-[#00f0ff] hover:underline' : 'text-blue-600 hover:underline'
                }`}
              >
                View Certificate <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Research Publication Card */}
          <div
            className={`rounded-2xl p-6 flex flex-col justify-between ${card} transition-all duration-300`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    darkMode
                      ? 'bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] shadow-lg shadow-[#00f0ff]/20'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20'
                  }`}
                >
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${textPrimary}`}>Research</h3>
                  <p className={`text-xs ${textMuted}`}>Co-authored Publication</p>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${textSecondary}`}>
                Co-authored an academic research paper on <span className={`font-semibold ${textPrimary}`}>Microsoft Azure Cloud Architecture</span>, analyzing enterprise infrastructure scalability, distributed services, and cloud security models.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
              <span className={`text-xs ${textMuted}`}>Arya Institute of Engg Tech</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-700'
              }`}>Azure Cloud</span>
            </div>
          </div>

          {/* GitHub Activity Card */}
          <div
            className={`md:col-span-3 rounded-2xl p-6 ${card} transition-all duration-300`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    darkMode
                      ? 'bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] shadow-lg shadow-[#00f0ff]/20'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20'
                  }`}
                >
                  <Github className="w-5 h-5 text-white" />
                </div>
                <h3 className={`text-lg font-bold ${textPrimary}`}>
                  Coding Activity (GitHub streaks)
                </h3>
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  darkMode
                    ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20'
                    : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                }`}
              >
                1,240 contributions in the last year
              </span>
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-[3px] min-w-max">
                {heatmapData.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-[3px]">
                    {column.map((level, rowIdx) => (
                      <div
                        key={rowIdx}
                        className={`w-3 h-3 rounded-sm ${heatmapColors[level]} transition-colors duration-200`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <span className={`text-xs ${textMuted}`}>Less</span>
              {heatmapColors.map((color, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${color}`}
                />
              ))}
              <span className={`text-xs ${textMuted}`}>More</span>
            </div>
          </div>
        </div>

        {/* Professional Journey Timeline */}
        <div>
          <h3 className={`text-2xl font-bold mb-10 text-center ${textPrimary}`}>
            Professional Journey
          </h3>

          <div className="overflow-x-auto pb-4">
            <div className="relative min-w-max flex items-start gap-0">
              {/* Horizontal Gradient Line */}
              <div
                className={`absolute top-5 left-8 right-8 h-0.5 rounded-full ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00f0ff] via-[#ff00aa] to-[#00f0ff]'
                    : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500'
                }`}
                style={
                  darkMode
                    ? { boxShadow: '0 0 8px rgba(0,240,255,0.3)' }
                    : undefined
                }
              />

              {timelineEntries.map((entry, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center px-8"
                  style={{ minWidth: '240px' }}
                >
                  {/* Dot */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                      darkMode
                        ? 'bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] shadow-lg shadow-[#00f0ff]/25'
                        : 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/25'
                    }`}
                  >
                    <span className="text-white text-xs font-bold">{entry.year}</span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`rounded-xl p-4 text-center w-full ${
                      darkMode
                        ? 'bg-white/[0.03] border border-[rgba(0,240,255,0.12)]'
                        : 'bg-white border border-slate-200 shadow-sm'
                    }`}
                  >
                    <h4 className={`text-sm font-bold mb-2 ${textPrimary}`}>
                      {entry.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${textSecondary}`}>
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
