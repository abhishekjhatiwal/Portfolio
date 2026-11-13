import { useTheme } from '../context/ThemeContext';

/**
 * GlitchText — renders a heading with a sci-fi glitch overlay.
 * Props:
 *   text      – the string to display
 *   children  – children elements or text (takes precedence over text prop)
 *   className – additional classes (Tailwind or custom)
 *   as        – element type, defaults to 'span'
 */
const GlitchText = ({ text, children, className = '', as: Tag = 'span' }) => {
  const { darkMode } = useTheme();
  const content = children ?? text;
  const isString = typeof content === 'string';

  if (!isString) {
    return (
      <Tag className={`relative inline-block ${className}`}>
        {content}
      </Tag>
    );
  }

  if (!darkMode) {
    return (
      <Tag className={`bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent ${className}`}>
        {content}
      </Tag>
    );
  }

  return (
    <Tag
      className={`relative inline-block text-gradient-sci-fi ${className}`}
      style={{ position: 'relative' }}
    >
      {content}
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
        {content}
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
        {content}
      </span>
    </Tag>
  );
};

export default GlitchText;
