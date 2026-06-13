import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoaded }) {
  const [percent, setPercent] = useState(0);

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

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#07071a] z-[99999] flex flex-col items-center justify-center text-white"
        >
          <div className="flex flex-col items-center max-w-sm w-full px-8">
            {/* Custom Android Robot SVG Animation */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-24 h-24 mb-6 text-emerald-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zM12 2C8.69 2 6 4.69 6 8h12c0-3.31-2.69-6-6-6zm-3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-bold tracking-wider mb-2"
            >
              Abhishek Verma
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="text-xs uppercase tracking-widest text-slate-400 mb-8"
            >
              Android Developer Portfolio
            </motion.p>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                style={{ width: `${percent}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between w-full mt-2 text-xs text-slate-500 font-mono">
              <span>INITIALIZING SYSTEMS</span>
              <span>{percent}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
