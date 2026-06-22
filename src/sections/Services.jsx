import { useTheme } from '../context/ThemeContext';
import { services } from '../data';
import { Calendar, MessageSquare } from 'lucide-react';
import GlitchText from '../components/GlitchText';

const Services = ({ setShowCalendly }) => {
  const { darkMode, card, textPrimary, textSecondary, textMuted, sectionAlt } = useTheme();

  return (
    <section id="services" className={`py-20 md:py-28 ${sectionAlt}`}>
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
            Services
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-display ${textPrimary}`}>
            <GlitchText>
              What{' '}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
              >
                I Offer
              </span>
            </GlitchText>
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg ${textSecondary}`}>
            End-to-end digital solutions crafted with precision, performance, and pixel-perfect attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative h-full rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                darkMode ? 'holo-card hud-brackets' : card
              }`}
            >
              {/* Icon Badge */}
              <div className="mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    darkMode
                      ? 'bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] shadow-lg shadow-[#00f0ff]/20'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20'
                  }`}
                >
                  {service.icon && (
                    <service.icon className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold mb-2 ${textPrimary}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${textSecondary}`}>
                {service.description}
              </p>

              {/* Starting Price */}
              <div
                className={`mt-auto pt-4 border-t ${
                  darkMode ? 'border-[#00f0ff]/10' : 'border-white/5'
                }`}
              >
                <span className={`text-xs font-medium uppercase tracking-wider ${textMuted}`}>
                  Starting at
                </span>
                <p
                  className={`text-lg font-bold bg-clip-text text-transparent ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                  }`}
                >
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className={`relative rounded-3xl overflow-hidden p-8 md:p-12 text-center ${
            darkMode
              ? 'holo-card border border-[#00f0ff]/15 bg-gradient-to-br from-[#00f0ff]/5 to-[#8b5cf6]/5 backdrop-blur-md'
              : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200'
          }`}
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${textPrimary}`}>
            Let&apos;s discuss your custom project
          </h3>
          <p className={`max-w-xl mx-auto mb-8 ${textSecondary}`}>
            Have a unique idea or need a tailored solution? I&apos;d love to hear about your project and explore how we can bring it to life together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowCalendly(true)}
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer ${
                darkMode
                  ? 'cyber-btn-primary'
                  : 'rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Book a Call (Calendly)
            </button>
            <a
              href="https://wa.me/916367706177"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'cyber-btn'
                  : 'rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
