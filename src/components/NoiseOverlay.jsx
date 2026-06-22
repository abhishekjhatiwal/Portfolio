import React from 'react';

export default function NoiseOverlay() {
  return (
    <>
      {/* Layer 1: Noise texture (slightly reduced opacity) */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] mix-blend-overlay"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Layer 2: Horizontal CRT scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{
          opacity: 0.03,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.08) 2px, rgba(0, 240, 255, 0.08) 4px)',
        }}
      />

      {/* Layer 3: Sweeping bright scanline */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden"
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.15), rgba(0,240,255,0.25), rgba(0,240,255,0.15), transparent)',
            opacity: 0.05,
            animation: 'scanline 8s linear infinite',
            boxShadow: '0 0 12px rgba(0,240,255,0.1)',
          }}
        />
      </div>

      {/* Layer 4: Intermittent static flicker */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          animation: 'crt-flicker 8s ease-in-out infinite',
        }}
      />
    </>
  );
}
