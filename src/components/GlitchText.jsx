import { useTheme } from '../context/ThemeContext';

/**
 * GlitchText — renders a heading with a sci-fi glitch overlay.
 * Props:
 *   text      – the string to display
 *   className – additional classes (Tailwind or custom)
 *   as        – element type, defaults to 'span'
 */
const GlitchText = ({ text, className = '', as: Tag = 'span' }) => {
  const { darkMode } = useTheme();

  if (!darkMode) {
    return (
      <Tag className={`bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent ${className}`}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      className={`relative inline-block text-gradient-sci-fi ${className}`}
      style={{ position: 'relative' }}
    >
      {text}
      {/* Glitch layer 1 — cyan */}
      <span
        aria-hidden="true"
        className="absolute inset-0 text-[var(--color-neon-cyan)] opacity-0 hover:opacity-80 pointer-events-none"
        style={{
          animation: 'glitch-1 4s ease-in-out infinite',
          WebkitTextFillColor: 'var(--color-neon-cyan)',
          background: 'none',
          WebkitBackgroundClip: 'unset',
          backgroundClip: 'unset',
        }}
      >
        {text}
      </span>
      {/* Glitch layer 2 — magenta */}
      <span
        aria-hidden="true"
        className="absolute inset-0 text-[var(--color-neon-magenta)] opacity-0 hover:opacity-60 pointer-events-none"
        style={{
          animation: 'glitch-2 4s ease-in-out infinite',
          animationDelay: '0.15s',
          WebkitTextFillColor: 'var(--color-neon-magenta)',
          background: 'none',
          WebkitBackgroundClip: 'unset',
          backgroundClip: 'unset',
        }}
      >
        {text}
      </span>
    </Tag>
  );
};

export default GlitchText;
