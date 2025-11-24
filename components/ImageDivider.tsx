import React from 'react';
import { Reveal } from './UI/Reveal';

const ImageDivider = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-b border-ink bg-ink">
      {/* Background Image with Parallax Effect */}
      {/* Using bg-fixed on desktop for parallax, bg-scroll on mobile for performance */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed md:bg-fixed bg-scroll grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out opacity-50"
        style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` 
        }}
      ></div>
      
      {/* Overlays for better text contrast and mood */}
      <div className="absolute inset-0 bg-ink/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
         <Reveal>
            <div className="inline-flex items-center gap-3 mb-6 border border-white/20 bg-ink/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-white tracking-[0.2em] uppercase">
                    Infrastructure
                </span>
            </div>
         </Reveal>
         <Reveal delay={200}>
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none mix-blend-overlay">
                Digital<br/>Craftsmanship
            </h2>
         </Reveal>
      </div>
    </section>
  );
};

export default ImageDivider;