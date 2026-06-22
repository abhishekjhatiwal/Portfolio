import { useEffect, useRef, useCallback } from 'react';

const COLORS = [
  { r: 0, g: 240, b: 255 },   // cyan
  { r: 255, g: 0, b: 170 },   // magenta
  { r: 139, g: 92, b: 246 },  // purple
  { r: 255, g: 255, b: 255 }, // white
];

const COLOR_WEIGHTS = [0.4, 0.2, 0.2, 0.2]; // cyan-heavy

function pickColor() {
  const r = Math.random();
  let cumulative = 0;
  for (let i = 0; i < COLOR_WEIGHTS.length; i++) {
    cumulative += COLOR_WEIGHTS[i];
    if (r <= cumulative) return COLORS[i];
  }
  return COLORS[0];
}

class Star {
  constructor(cx, cy, maxRadius) {
    this.reset(cx, cy, maxRadius);
  }

  reset(cx, cy, maxRadius) {
    this.cx = cx;
    this.cy = cy;
    this.maxRadius = maxRadius;
    const angle = Math.random() * Math.PI * 2;
    const startDist = Math.random() * 5 + 1;
    this.x = cx + Math.cos(angle) * startDist;
    this.y = cy + Math.sin(angle) * startDist;
    this.angle = angle;
    this.speed = Math.random() * 0.8 + 0.3;
    this.dist = startDist;
    this.color = pickColor();
    this.brightness = Math.random() * 0.5 + 0.5;
  }

  update(cx, cy, maxRadius) {
    const accel = 1 + (this.dist / maxRadius) * 4;
    this.dist += this.speed * accel;
    this.x = cx + Math.cos(this.angle) * this.dist;
    this.y = cy + Math.sin(this.angle) * this.dist;

    if (this.dist > maxRadius * 1.2) {
      this.reset(cx, cy, maxRadius);
    }
  }

  draw(ctx, cx, cy, maxRadius) {
    const progress = this.dist / maxRadius;
    const streakLen = Math.min(progress * 25, 40);
    const alpha = Math.min(progress * 2, 1) * this.brightness;
    const lineWidth = 0.5 + progress * 1.5;

    const tailX = cx + Math.cos(this.angle) * (this.dist - streakLen);
    const tailY = cy + Math.sin(this.angle) * (this.dist - streakLen);

    const { r, g, b } = this.color;

    const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
    grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},${alpha})`);

    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = grad;
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    // Bright head dot
    if (progress > 0.3) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, lineWidth * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.8})`;
      ctx.fill();
    }
  }
}

class Nebula {
  constructor(w, h) {
    this.reset(w, h);
  }

  reset(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 250 + 150;
    this.vx = (Math.random() - 0.5) * 0.15;
    this.vy = (Math.random() - 0.5) * 0.1;
    const palette = [
      { r: 0, g: 240, b: 255 },
      { r: 139, g: 92, b: 246 },
      { r: 255, g: 0, b: 170 },
    ];
    this.color = palette[Math.floor(Math.random() * palette.length)];
    this.alpha = Math.random() * 0.03 + 0.02;
  }

  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -this.radius || this.x > w + this.radius) this.vx *= -1;
    if (this.y < -this.radius || this.y > h + this.radius) this.vy *= -1;
  }

  draw(ctx) {
    const { r, g, b } = this.color;
    const grad = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius
    );
    grad.addColorStop(0, `rgba(${r},${g},${b},${this.alpha})`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }
}

export default function HyperdriveBackground({ darkMode = true }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef([]);
  const nebulaeRef = useRef([]);
  const dimsRef = useRef({ w: 0, h: 0 });

  const handleMouse = useCallback((e) => {
    const { innerWidth, innerHeight } = window;
    mouseRef.current.x = (e.clientX / innerWidth - 0.5) * 2;
    mouseRef.current.y = (e.clientY / innerHeight - 0.5) * 2;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let disposed = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.parentElement?.offsetWidth || window.innerWidth;
      const h = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimsRef.current = { w, h };

      const maxRadius = Math.sqrt(w * w + h * h) / 2;
      const count = Math.min(Math.floor((w * h) / 3000), 500);
      const cx = w / 2;
      const cy = h / 2;

      // Re-init stars
      starsRef.current = [];
      for (let i = 0; i < count; i++) {
        const star = new Star(cx, cy, maxRadius);
        // Distribute initial distances so not all start at center
        star.dist = Math.random() * maxRadius;
        star.x = cx + Math.cos(star.angle) * star.dist;
        star.y = cy + Math.sin(star.angle) * star.dist;
        starsRef.current.push(star);
      }

      // Re-init nebulae
      nebulaeRef.current = [];
      for (let i = 0; i < 3; i++) {
        nebulaeRef.current.push(new Nebula(w, h));
      }
    }

    function render() {
      if (disposed) return;
      const { w, h } = dimsRef.current;
      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = Math.sqrt(w * w + h * h) / 2;

      // Parallax offset
      const px = mouseRef.current.x * 15;
      const py = mouseRef.current.y * 15;

      ctx.clearRect(0, 0, w, h);

      // Draw nebulae
      ctx.save();
      ctx.translate(px * 0.3, py * 0.3);
      for (const neb of nebulaeRef.current) {
        neb.update(w, h);
        neb.draw(ctx);
      }
      ctx.restore();

      // Draw stars with parallax
      ctx.save();
      ctx.translate(px, py);
      for (const star of starsRef.current) {
        star.update(cx, cy, maxRadius);
        star.draw(ctx, cx, cy, maxRadius);
      }
      ctx.restore();

      animRef.current = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouse);
    animRef.current = requestAnimationFrame(render);

    return () => {
      disposed = true;
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [handleMouse]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: 'none',
        opacity: darkMode ? 1 : 0.2,
        zIndex: 0,
      }}
    />
  );
}
