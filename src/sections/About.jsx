import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, MapPin, Github } from 'lucide-react';
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
        'Began my Computer Science journey at Arya Institute, Jaipur. Explored the fundamentals of programming and web development.',
    },
    {
      year: '2023',
      title: 'First Freelance Projects',
      description:
        'Landed initial freelance clients, building responsive websites and learning real-world project management.',
    },
    {
      year: '2024',
      title: 'Full-Stack Proficiency',
      description:
        'Mastered React, Node.js, and modern tooling. Delivered multiple production-grade applications for clients.',
    },
    {
      year: '2025',
      title: 'Scaling & Specializing',
      description:
        'Focused on performance optimization, advanced UI/UX, and building scalable SaaS solutions.',
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
              <h3 className={`text-lg font-bold ${textPrimary}`}>Education</h3>
            </div>
            <p className={`text-sm leading-relaxed flex-1 ${textSecondary}`}>
              Pursuing a <span className={`font-semibold ${textPrimary}`}>B.Tech in Computer Science &amp; Engineering</span> from
              Arya Institute of Engineering &amp; Technology, Jaipur. Expected graduation in{' '}
              <span className={`font-semibold ${textPrimary}`}>August 2026</span>. Focused on full-stack
              development, data structures, and modern software engineering practices.
            </p>
            <div
              className={`mt-6 pt-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${
                darkMode ? 'border-[#00f0ff]/10' : 'border-slate-200'
              }`}
            >
              <span className={`text-xs font-medium ${textMuted}`}>
                Academic Coursework (2022 – 2026)
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
