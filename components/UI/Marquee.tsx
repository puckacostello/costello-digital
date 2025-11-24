import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "" }) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap border-y border-ink py-3 bg-neon text-ink ${className}`}>
      <div className="animate-marquee flex min-w-full shrink-0 items-center">
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
      </div>
      <div className="animate-marquee flex min-w-full shrink-0 items-center">
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
        <span className="mx-8 text-lg font-bold tracking-widest uppercase font-mono">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;