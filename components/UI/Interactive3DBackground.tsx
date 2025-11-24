import React, { useEffect, useRef, useState } from 'react';

const Interactive3DBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rotateX = mousePosition.y * -25;
  const rotateY = mousePosition.x * 25;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: '600px' }}
    >
      {/* 3D Grid Container */}
      <div 
        className="absolute inset-0 transition-transform duration-150 ease-out opacity-40 md:opacity-100"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-100px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Horizontal Lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-ink/20 to-transparent"
            style={{
              top: `${(i / 19) * 100}%`,
              transform: `translateZ(${(i - 9.5) * 40}px)`,
            }}
          />
        ))}
        
        {/* Vertical Lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-ink/20 to-transparent"
            style={{
              left: `${(i / 19) * 100}%`,
              transform: `translateZ(${(i - 9.5) * 40}px)`,
            }}
          />
        ))}

        {/* Large Floating Accent Shapes */}
        <div
          className="absolute w-64 h-64 border-4 border-neon/40 rounded-full"
          style={{
            top: '15%',
            left: '10%',
            transform: `translateZ(${100 + mousePosition.x * 150}px) rotate(${mousePosition.x * 90}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
        
        <div
          className="absolute w-48 h-48 border-4 border-neon/50"
          style={{
            top: '50%',
            right: '15%',
            transform: `translateZ(${-50 + mousePosition.y * 120}px) rotate(${mousePosition.y * -90}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        />

        <div
          className="absolute w-40 h-40 bg-neon/20 rounded-full blur-2xl"
          style={{
            top: '25%',
            right: '25%',
            transform: `translateZ(${150 + mousePosition.x * 100}px) scale(${1.2 + mousePosition.y * 0.5})`,
            transition: 'transform 0.2s ease-out',
          }}
        />

        {/* Additional Geometric Elements */}
        <div
          className="absolute w-32 h-32 border-2 border-ink/30 rotate-45"
          style={{
            bottom: '20%',
            left: '30%',
            transform: `translateZ(${80 + mousePosition.y * 80}px) rotate(${45 + mousePosition.x * 60}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        />

        <div
          className="absolute w-56 h-56 border-2 border-neon/30 rounded-full"
          style={{
            top: '40%',
            left: '50%',
            transform: `translateZ(${-80 + mousePosition.x * -80}px) scale(${0.8 + mousePosition.y * 0.4})`,
            transition: 'transform 0.2s ease-out',
          }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-3 h-3 bg-neon rounded-full"
            style={{
              top: `${(i * 13 + 10)}%`,
              left: `${(i * 11 + 5)}%`,
              transform: `translateZ(${(i - 4) * 50 + mousePosition.x * 60}px)`,
              transition: 'transform 0.3s ease-out',
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-concrete/30 to-concrete/90 pointer-events-none" />
    </div>
  );
};

export default Interactive3DBackground;

