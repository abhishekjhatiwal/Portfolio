import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_SEQUENCE = [
  'INITIALIZING NEURAL LINK...',
  'DECRYPTING PORTFOLIO DATA...',
  'ACCESS GRANTED',
];

export default function Preloader({ isLoaded }) {
  const [percent, setPercent] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  // Progress bar logic
  useEffect(() => {
    if (isLoaded) {
      setPercent(100);
      return;
    }
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoaded]);

  // Status text sequence
  useEffect(() => {
    if (statusIndex >= STATUS_SEQUENCE.length - 1) return;

    const timer = setTimeout(() => {
      setStatusIndex((prev) => prev + 1);
    }, statusIndex === 0 ? 1200 : 1400);

    return () => clearTimeout(timer);
  }, [statusIndex]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ clipPath: 'inset(0 100% 0 0)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center text-white overflow-hidden"
          style={{ background: '#020108' }}
        >
          {/* Horizontal scanline sweep */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(transparent, rgba(0,240,255,0.03), transparent)',
              backgroundSize: '100% 4px',
              animation: 'h-scan 4s linear infinite',
              opacity: 0.5,
            }}
          />

          {/* Subtle repeating scanlines across entire preloader */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.015) 2px, rgba(0,240,255,0.015) 4px)',
            }}
          />

          <div className="flex flex-col items-center max-w-sm w-full px-8 relative z-20">
            {/* Rotating Wireframe Hexagon */}
            <div className="w-28 h-28 mb-8 relative flex items-center justify-center">
              {/* Outer rotating hexagon */}
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full absolute"
                style={{ animation: 'rotate-slow 8s linear infinite' }}
              >
                <polygon
                  points="60,5 110,30 110,90 60,115 10,90 10,30"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="1.2"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(0,240,255,0.6)) drop-shadow(0 0 12px rgba(0,240,255,0.3))',
                  }}
                />
              </svg>
              {/* Inner counter-rotating hexagon */}
              <svg
                viewBox="0 0 120 120"
                className="w-3/4 h-3/4 absolute"
                style={{ animation: 'rotate-reverse 6s linear infinite' }}
              >
                <polygon
                  points="60,18 98,38 98,82 60,102 22,82 22,38"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="0.8"
                  opacity="0.5"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(0,240,255,0.4))',
                  }}
                />
              </svg>
              {/* Center dot */}
              <div
                className="w-2.5 h-2.5 rounded-full absolute"
                style={{
                  background: '#00f0ff',
                  boxShadow: '0 0 8px rgba(0,240,255,0.8), 0 0 20px rgba(0,240,255,0.4)',
                  animation: 'neon-pulse 2s ease-in-out infinite',
                }}
              />
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-bold tracking-wider mb-1 font-display"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              Abhishek Verma
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="text-[10px] uppercase tracking-[0.25em] mb-8 font-mono"
              style={{ color: '#00f0ff' }}
            >
              NEURAL INTERFACE v2.077
            </motion.p>

            {/* Progress Bar */}
            <div
              className="w-full h-1 rounded-full overflow-hidden"
              style={{ background: 'rgba(0,240,255,0.08)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${percent}%`,
                  background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #00f0ff)',
                  boxShadow: '0 0 10px rgba(0,240,255,0.6), 0 0 30px rgba(0,240,255,0.3)',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Status text + percentage */}
            <div className="flex justify-between w-full mt-3 text-[10px] font-mono">
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: statusIndex === STATUS_SEQUENCE.length - 1
                    ? '#00f0ff'
                    : 'rgba(0,240,255,0.5)',
                }}
              >
                {STATUS_SEQUENCE[statusIndex]}
              </motion.span>
              <span style={{ color: 'rgba(0,240,255,0.4)' }}>{percent}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
