import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsGraph = {
  nodes: [
    { id: 'Kotlin', label: 'Kotlin', x: 250, y: 180, size: 40, color: '#a855f7' },
    { id: 'Compose', label: 'Compose', x: 130, y: 100, size: 34, color: '#3b82f6' },
    { id: 'MVVM', label: 'MVVM', x: 370, y: 100, size: 34, color: '#10b981' },
    { id: 'Hilt', label: 'Hilt DI', x: 420, y: 220, size: 28, color: '#f59e0b' },
    { id: 'Coroutines', label: 'Coroutines', x: 80, y: 220, size: 28, color: '#ec4899' },
    { id: 'Room', label: 'Room Database', x: 150, y: 320, size: 28, color: '#06b6d4' },
    { id: 'Retrofit', label: 'Retrofit', x: 350, y: 320, size: 28, color: '#6366f1' },
    { id: 'Firebase', label: 'Firebase', x: 250, y: 40, size: 30, color: '#f97316' },
    { id: 'GCP', label: 'GCP', x: 370, y: 40, size: 28, color: '#34a853' },
  ],
  links: [
    { source: 'Kotlin', target: 'Compose' },
    { source: 'Kotlin', target: 'MVVM' },
    { source: 'Compose', target: 'Coroutines' },
    { source: 'MVVM', target: 'Hilt' },
    { source: 'Kotlin', target: 'Room' },
    { source: 'Kotlin', target: 'Retrofit' },
    { source: 'Kotlin', target: 'Firebase' },
    { source: 'Compose', target: 'Room' },
    { source: 'MVVM', target: 'Room' },
    { source: 'MVVM', target: 'Retrofit' },
    { source: 'Firebase', target: 'GCP' },
    { source: 'Kotlin', target: 'GCP' },
  ]
};

export default function TechConstellation() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const isLinkActive = (link) => {
    if (!hoveredNode) return false;
    return link.source === hoveredNode || link.target === hoveredNode;
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-950/40 border border-slate-800 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pointer-events-none" />
      <div className="text-center mb-4 relative z-10">
        <h4 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Interactive Skill Architecture</h4>
        <p className="text-[11px] text-slate-500">Hover over the nodes to see connection paths</p>
      </div>

      <svg viewBox="0 0 500 380" className="w-full h-auto overflow-visible select-none">
        {/* Draw connections */}
        {skillsGraph.links.map((link, idx) => {
          const sourceNode = skillsGraph.nodes.find(n => n.id === link.source);
          const targetNode = skillsGraph.nodes.find(n => n.id === link.target);
          if (!sourceNode || !targetNode) return null;

          const isActive = isLinkActive(link);

          return (
            <g key={idx}>
              <motion.line
                x1={sourceNode.x}
                y1={sourceNode.y}
                x2={targetNode.x}
                y2={targetNode.y}
                stroke={isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.08)'}
                strokeWidth={isActive ? 2 : 1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              {isActive && (
                <motion.line
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="#a855f7"
                  strokeWidth={2.5}
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [-20, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                />
              )}
            </g>
          );
        })}

        {/* Draw nodes */}
        {skillsGraph.nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isDimmed = hoveredNode && hoveredNode !== node.id && 
            !skillsGraph.links.some(l => 
              (l.source === node.id && l.target === hoveredNode) || 
              (l.target === node.id && l.source === hoveredNode)
            );

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Outer glow aura */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.9}
                fill={node.color}
                opacity={isHovered ? 0.25 : 0.03}
                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Core circle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size / 2}
                fill="#0f172a"
                stroke={isHovered ? '#ffffff' : node.color}
                strokeWidth={isHovered ? 2.5 : 1.5}
                animate={{
                  opacity: isDimmed ? 0.35 : 1,
                  scale: isHovered ? 1.15 : 1
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />

              {/* Node label */}
              <motion.text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={isHovered ? '#ffffff' : '#94a3b8'}
                fontSize={node.size > 30 ? '10px' : '8px'}
                fontWeight={isHovered ? '900' : '700'}
                letterSpacing="0.05em"
                animate={{
                  opacity: isDimmed ? 0.35 : 1,
                  fill: isHovered ? '#ffffff' : '#cbd5e1'
                }}
                className="pointer-events-none select-none font-sans"
              >
                {node.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
