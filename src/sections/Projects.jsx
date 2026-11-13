import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { projects, googlePlayDeveloper } from '../data';
import { Smartphone, ArrowLeft, Calendar, Github, Eye, CheckCircle, ShieldCheck, ExternalLink, Star } from 'lucide-react';
import GooglePlayIcon from '../components/GooglePlayIcon';
import GlitchText from '../components/GlitchText';

const FILTER_TABS = ['All', 'Published', 'Backend', 'Fintech', 'Architecture', 'MVVM'];

function Projects() {
  const { darkMode, card, textPrimary, textSecondary, textMuted, sectionAlt } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('All');

  const filteredProjects = projects.filter((p) => {
    if (projectFilter === 'All') return true;
    if (projectFilter === 'Published') return p.published === true;
    return p.category === projectFilter;
  });

  const openProject = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProject = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ─── Project Detail View ─── */
  if (selectedProject) {
    const p = selectedProject;
    return (
      <section id="projects" className={`py-20 md:py-28 ${sectionAlt}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Back button */}
          <button
            onClick={closeProject}
            className={`inline-flex items-center gap-2 mb-10 text-sm font-medium transition-colors group ${
              darkMode
                ? `${textSecondary} hover:text-[#00f0ff]`
                : `${textSecondary} hover:text-blue-400`
            }`}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          {/* Title & Date */}
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 font-display">
            <span
              className={`bg-clip-text text-transparent ${
                darkMode
                  ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500'
              }`}
            >
              {p.title}
            </span>
          </h1>

          <div className={`flex items-center gap-2 text-sm mb-8 ${textMuted}`}>
            <Calendar size={14} />
            <span>{p.date}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {p.published && p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00f0ff] text-[#020108] shadow-lg shadow-[#00ff88]/20'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20'
                }`}
              >
                <GooglePlayIcon size={16} />
                View on Google Play
              </a>
            )}
            {!p.published && p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] text-white shadow-lg shadow-[#00f0ff]/20'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                }`}
              >
                <Github size={16} />
                View on GitHub
              </a>
            )}
            {p.privacyPolicy && (
              <a
                href={p.privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform ${
                  darkMode
                    ? 'bg-[rgba(139,92,246,0.15)] text-[#c084fc] border border-[rgba(139,92,246,0.35)] hover:bg-[rgba(139,92,246,0.25)]'
                    : 'bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-100'
                }`}
              >
                <ShieldCheck size={16} />
                Privacy Policy
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-10">
            {p.tech.map((t) => (
              <span
                key={t}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  darkMode
                    ? 'bg-[rgba(0,240,255,0.06)] text-[#00f0ff] border border-[rgba(0,240,255,0.15)]'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-12">
            <h2 className={`text-xl font-bold mb-4 ${textPrimary}`}>Overview</h2>
            <div className="space-y-3">
              {p.description.map((para, i) => (
                <p key={i} className={`text-sm leading-relaxed ${textSecondary}`}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {p.features && p.features.length > 0 && (
            <div className="mb-12">
              <h2 className={`text-xl font-bold mb-5 ${textPrimary}`}>Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {p.features.map((feat, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-2xl ${card}`}
                  >
                    <CheckCircle
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        darkMode ? 'text-[#00f0ff]' : 'text-green-400'
                      }`}
                    />
                    <span className={`text-sm ${textSecondary}`}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshots */}
          {p.screens && p.screens.length > 0 && (
            <div>
              <h2 className={`text-xl font-bold mb-5 ${textPrimary}`}>Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {p.screens.map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden ${card}`}
                  >
                    <img
                      src={s.src}
                      alt={s.label}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <p className={`text-center text-xs py-2 ${textMuted}`}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  /* ─── Gallery View ─── */
  return (
    <section id="projects" className={`py-20 md:py-28 ${sectionAlt}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
              darkMode
                ? 'section-badge'
                : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}
          >
            Work
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${textPrimary}`}>
            <GlitchText>
              Featured{' '}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
              >
                Projects
              </span>
            </GlitchText>
          </h2>
        </div>

        {/* Google Play Console Developer Showcase Banner */}
        <div
          className={`mb-10 p-5 sm:p-6 rounded-3xl transition-all duration-300 relative overflow-hidden ${
            darkMode
              ? 'bg-[#020108]/90 border border-[#00f0ff]/20 shadow-[0_0_35px_rgba(0,240,255,0.07)] hud-brackets'
              : 'bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-emerald-50/80 border border-blue-200/60 shadow-sm'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                  darkMode
                    ? 'bg-white/5 border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'bg-white shadow-md border border-slate-200'
                }`}
              >
                <GooglePlayIcon size={34} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                      darkMode
                        ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    <CheckCircle size={12} />
                    Google Play Console
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      darkMode
                        ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    <Star size={11} className="fill-current" />
                    5.0 ★ Rated
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold ${textPrimary}`}>
                  {googlePlayDeveloper.name}
                  <span className={`text-xs sm:text-sm font-mono font-normal ml-2 ${textMuted}`}>
                    {googlePlayDeveloper.handle}
                  </span>
                </h3>
                <p className={`text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed ${textSecondary}`}>
                  {googlePlayDeveloper.bio}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={googlePlayDeveloper.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 w-full lg:w-auto ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00f0ff] text-[#020108] shadow-lg shadow-[#00ff88]/20 hover:shadow-[#00ff88]/35'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/35'
                }`}
              >
                <GooglePlayIcon size={18} />
                <span>View Google Play Console</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {FILTER_TABS.map((tab) => {
            const isActive = projectFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setProjectFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? darkMode
                      ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] text-white shadow-lg shadow-[#00f0ff]/20'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20'
                    : darkMode
                      ? 'bg-[rgba(0,240,255,0.05)] text-slate-400 hover:bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.15)] hover:text-[#00f0ff]'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => {
            const isPublished = p.published === true;
            const visibleTags = p.tech.slice(0, 3);
            const overflowCount = p.tech.length - 3;

            return (
              <div
                key={p.id}
                onClick={() => openProject(p)}
                className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card}`}
              >
                <div className="p-5 flex flex-col h-full">
                  {/* Top row: icon + badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isPublished
                          ? darkMode
                            ? 'bg-[#00ff88]/10'
                            : 'bg-green-500/10'
                          : darkMode
                            ? 'bg-[#00f0ff]/10'
                            : 'bg-blue-500/10'
                      }`}
                    >
                      {isPublished ? (
                        <GooglePlayIcon size={20} />
                      ) : (
                        <Smartphone
                          size={20}
                          className={
                            darkMode
                              ? 'text-[#00f0ff]'
                              : 'text-blue-400'
                          }
                        />
                      )}
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                        isPublished
                          ? darkMode
                            ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20'
                            : 'bg-green-50 text-green-600 border border-green-200'
                          : darkMode
                            ? 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}
                    >
                      {isPublished ? 'Google Play' : 'Repository'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-1 transition-colors ${textPrimary} ${
                      darkMode
                        ? 'group-hover:text-[#00f0ff]'
                        : 'group-hover:text-blue-400'
                    }`}
                  >
                    {p.title}
                  </h3>

                  {/* Date */}
                  <p className={`text-xs mb-3 ${textMuted}`}>{p.date}</p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${textSecondary}`}>
                    {p.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {visibleTags.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                          darkMode
                            ? 'bg-[rgba(0,240,255,0.06)] text-[#00f0ff] border border-[rgba(0,240,255,0.15)]'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {overflowCount > 0 && (
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                          darkMode
                            ? 'bg-[rgba(0,240,255,0.06)] text-slate-500 border border-[rgba(0,240,255,0.1)]'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        +{overflowCount}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div
                    className={`mt-auto pt-4 border-t ${
                      darkMode ? 'border-[#00f0ff]/10' : 'border-white/5'
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        darkMode
                          ? 'text-[#00f0ff] group-hover:text-[#00f0ff]/80'
                          : 'text-blue-400 group-hover:text-blue-300'
                      }`}
                    >
                      <Eye size={13} />
                      Details &amp; Screenshots
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
