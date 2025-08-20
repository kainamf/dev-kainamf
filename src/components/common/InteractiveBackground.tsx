import React, { useEffect, useRef } from 'react';

interface InteractiveBackgroundProps {
  theme: 'dark' | 'light';
}

// Apenas os símbolos: </>, {}, λ, ⚙, ∞
const SYMBOLS = ['</>', '{}', 'λ', '⚙', '∞'];

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    symbol: string;
    angle: number;
    rotationSpeed: number;
  };
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getThemeColors = () => {
      // Paleta: verde, cinza, preto
      switch (theme) {
        case 'light':
          return {
            bg: '#f8fafc',
            particles: ['#7CDA3D', '#212328', '#64748b'], // verde, preto, cinza
            connections: '#7CDA3D',
            symbol: '#212328',
            shadow: 'rgba(124,218,61,0.18)'
          };
        default:
          return {
            bg: '#030303',
            particles: ['#7CDA3D', '#212328', '#4a5568'], // verde, preto, cinza escuro
            connections: '#7CDA3D',
            symbol: '#7CDA3D',
            shadow: 'rgba(124,218,61,0.13)'
          };
      }
    };

    const initParticles = () => {
      const colors = getThemeColors().particles;
      particlesRef.current = Array.from({ length: 48 }, () => {
        const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.28, // velocidade reduzida
          vy: (Math.random() - 0.5) * 0.28,
          size: Math.random() * 10 + 10,
          opacity: Math.random() * 0.4 + 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          symbol,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.006 // rotação mais lenta
        };
      });
    };

    const animate = () => {
      const colors = getThemeColors();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.angle += particle.rotationSpeed;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction: atração e rotação
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          const force = (120 - distance) / 120;
          particle.vx += dx * force * 0.0012;
          particle.vy += dy * force * 0.0012;
          particle.rotationSpeed += (Math.random() - 0.5) * 0.002;
        }

  // Desenhar apenas os símbolos escolhidos
  ctx.save();
  ctx.globalAlpha = particle.opacity;
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.angle);
  ctx.shadowColor = colors.shadow;
  ctx.shadowBlur = 8;
  ctx.font = `${particle.size * 2}px monospace`;
  ctx.fillStyle = colors.symbol;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(particle.symbol, 0, 0);
  ctx.restore();

        // Draw connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = 0.15 * (1 - distance / 100);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = colors.connections;
            ctx.lineWidth = 1.2;
            ctx.shadowColor = colors.shadow;
            ctx.shadowBlur = 6;
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7, transition: 'opacity 0.3s' }}
    />
  );
};

export default InteractiveBackground;