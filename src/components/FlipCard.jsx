import React, { useState } from 'react';

export default function FlipCard({ front, back, className = '' }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`relative w-full h-48 cursor-pointer select-none ${className}`}
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="w-full h-full duration-700 ease-in-out relative"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front side */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back side */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#0a0a1f] border border-blue-500/30 rounded-2xl p-5 flex flex-col justify-between"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
