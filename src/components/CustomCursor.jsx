import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-card')
      ) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const isHover = cursorType === 'hover';
  const reticleSize = isHover ? 52 : 32;
  const half = reticleSize / 2;
  const bracketLen = isHover ? 10 : 7;
  const bracketOffset = isHover ? 2 : 4;

  // The 4 corner bracket L-shapes — top-left, top-right, bottom-right, bottom-left
  const brackets = [
    // Top-left
    `M ${bracketOffset},${bracketOffset + bracketLen} L ${bracketOffset},${bracketOffset} L ${bracketOffset + bracketLen},${bracketOffset}`,
    // Top-right
    `M ${reticleSize - bracketOffset - bracketLen},${bracketOffset} L ${reticleSize - bracketOffset},${bracketOffset} L ${reticleSize - bracketOffset},${bracketOffset + bracketLen}`,
    // Bottom-right
    `M ${reticleSize - bracketOffset},${reticleSize - bracketOffset - bracketLen} L ${reticleSize - bracketOffset},${reticleSize - bracketOffset} L ${reticleSize - bracketOffset - bracketLen},${reticleSize - bracketOffset}`,
    // Bottom-left
    `M ${bracketOffset + bracketLen},${reticleSize - bracketOffset} L ${bracketOffset},${reticleSize - bracketOffset} L ${bracketOffset},${reticleSize - bracketOffset - bracketLen}`,
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer bracket reticle */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute"
      >
        <motion.svg
          animate={{
            width: reticleSize,
            height: reticleSize,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          viewBox={`0 0 ${reticleSize} ${reticleSize}`}
          fill="none"
          style={{
            animation: isHover
              ? 'rotate-slow 2s linear infinite'
              : 'rotate-slow 8s linear infinite',
            filter: isHover
              ? 'drop-shadow(0 0 6px rgba(0,240,255,0.8))'
              : 'drop-shadow(0 0 3px rgba(0,240,255,0.4))',
          }}
        >
          {brackets.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={isHover ? '#00f0ff' : 'rgba(0,240,255,0.7)'}
              strokeWidth={isHover ? 1.8 : 1.2}
              strokeLinecap="square"
              fill="none"
            />
          ))}

          {/* Crosshair lines — only on hover */}
          {isHover && (
            <>
              {/* Horizontal line */}
              <line
                x1={bracketOffset + bracketLen + 2}
                y1={half}
                x2={reticleSize - bracketOffset - bracketLen - 2}
                y2={half}
                stroke="rgba(0,240,255,0.35)"
                strokeWidth="0.6"
              />
              {/* Vertical line */}
              <line
                x1={half}
                y1={bracketOffset + bracketLen + 2}
                x2={half}
                y2={reticleSize - bracketOffset - bracketLen - 2}
                stroke="rgba(0,240,255,0.35)"
                strokeWidth="0.6"
              />
            </>
          )}
        </motion.svg>
      </motion.div>

      {/* Inner dot with pulsing glow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHover ? 1.4 : 1,
        }}
        className="absolute"
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: '#00f0ff',
            boxShadow: isHover
              ? '0 0 8px rgba(0,240,255,0.9), 0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.2)'
              : '0 0 6px rgba(0,240,255,0.6), 0 0 12px rgba(0,240,255,0.3)',
            animation: 'neon-pulse 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </div>
  );
}
