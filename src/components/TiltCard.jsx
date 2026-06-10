import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', ...props }) {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / width) - 0.5;
    const normalizedY = (y / height) - 0.5;

    // Set rotation degrees (max 15 degrees tilt)
    setRotate({
      x: -normalizedY * 20,
      y: normalizedX * 20
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovering 
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovering ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        transformStyle: 'preserve-3d'
      }}
      className={`interactive-card ${className}`}
      {...props}
    >
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}
