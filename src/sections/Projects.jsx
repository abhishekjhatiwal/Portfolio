import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data';
import { Smartphone, ArrowLeft, Calendar, Github, Eye, CheckCircle } from 'lucide-react';

const FILTER_TABS = ['All', 'MVVM', 'Published', 'Firebase', 'Compose'];

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
            className={`inline-flex items-center gap-2 mb-10 text-sm font-medium ${textSecondary} hover:text-blue-400 transition-colors group`}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          {/* Title & Date */}
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
              >
                <Eye size={16} />
                View on Play Store
              </a>
            )}
            {!p.published && p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
              >
                <Github size={16} />
                View on GitHub
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
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
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
                    <CheckCircle size={16} className="text-green-400 shrink-0 mt-0.5" />
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
        <div className="text-center mb-14">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
              darkMode
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}
          >
            Work
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${textPrimary}`}>
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
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
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20'
                    : darkMode
                      ? 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
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
                          ? 'bg-green-500/10'
                          : 'bg-blue-500/10'
                      }`}
                    >
                      <Smartphone
                        size={20}
                        className={isPublished ? 'text-green-400' : 'text-blue-400'}
                      />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                        isPublished
                          ? darkMode
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-green-50 text-green-600 border border-green-200'
                          : darkMode
                            ? 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}
                    >
                      {isPublished ? 'Published' : 'Repository'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-1 ${textPrimary} group-hover:text-blue-400 transition-colors`}>
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
                            ? 'bg-white/5 text-slate-400'
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
                            ? 'bg-white/5 text-slate-500'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        +{overflowCount}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1.5">
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
