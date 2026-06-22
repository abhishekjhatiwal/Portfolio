import { memo } from 'react';

const HolographicGrid = memo(function HolographicGrid() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
      style={{ height: '45vh', zIndex: 0 }}
    >
      {/* Fade-out mask at the top */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--color-void) 0%, transparent 40%)',
          zIndex: 2,
        }}
      />

      {/* Perspective grid */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '100%',
          perspective: '500px',
          perspectiveOrigin: '50% 0%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-50%',
            right: '-50%',
            height: '200%',
            transformOrigin: 'center bottom',
            transform: 'rotateX(65deg)',
            backgroundImage: `
              linear-gradient(to right, rgba(0,240,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,240,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-scroll 3s linear infinite',
          }}
        />

        {/* Scan line sweeping across the grid */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-50%',
            right: '-50%',
            height: '200%',
            transformOrigin: 'center bottom',
            transform: 'rotateX(65deg)',
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.4), rgba(0,240,255,0.8), rgba(0,240,255,0.4), transparent)',
              boxShadow: '0 0 20px rgba(0,240,255,0.3), 0 0 60px rgba(0,240,255,0.1)',
              animation: 'scanline 6s linear infinite',
            }}
          />
        </div>
      </div>

      {/* Horizon glow */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: '35%',
          height: '4px',
          background: 'linear-gradient(90deg, transparent 5%, rgba(0,240,255,0.15) 30%, rgba(0,240,255,0.25) 50%, rgba(0,240,255,0.15) 70%, transparent 95%)',
          filter: 'blur(4px)',
          zIndex: 1,
        }}
      />
    </div>
  );
});

export default HolographicGrid;
