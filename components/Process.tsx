import React from 'react';
import { BarChart3, PenTool, Code2, Rocket } from 'lucide-react';
import { Reveal } from './UI/Reveal';

const ProcessStep = ({ number, title, desc, icon: Icon, delay }: { number: string, title: string, desc: string, icon: any, delay: number }) => (
  <Reveal delay={delay}>
    <div className="relative p-6 border-l border-ink/20 pl-8 md:pl-12 pb-12 last:pb-0">
        <div className="absolute left-[-6px] top-8 w-3 h-3 bg-concrete border-2 border-ink rounded-full z-10"></div>
        <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-neon text-sm tracking-widest">{number}</span>
            <h3 className="text-xl font-bold uppercase">{title}</h3>
        </div>
        <p className="text-stone-400 text-sm leading-relaxed max-w-md">{desc}</p>
        <Icon className="absolute top-6 right-0 text-white/5" size={64} />
    </div>
  </Reveal>
);

const Process = () => {
  return (
      <section id="process" className="bg-ink text-concrete py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-b border-ink" aria-label="Our Development Process">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16">
                 <div>
                    <Reveal width="100%">
                        <span className="text-neon font-mono text-sm tracking-widest uppercase mb-2 block">The Blueprint</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">From Concept<br/>To <span className="text-neon">Launch</span></h2>
                    </Reveal>
                 </div>
                 <Reveal delay={200} width="100%">
                    <p className="text-stone-400 max-w-md text-sm font-mono mt-6 md:mt-0">
                        We don't just build websites; we build businesses. Serving clients in Belfast, Northern Ireland, and beyond, our proven process ensures your project is delivered on time and drives results.
                    </p>
                 </Reveal>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-12">
                 <ProcessStep 
                    number="01" 
                    title="Discovery" 
                    desc="We start by learning about your business, your customers, and your goals. No cookie-cutter templates here."
                    icon={BarChart3}
                    delay={0}
                 />
                 <ProcessStep 
                    number="02" 
                    title="Design" 
                    desc="We create a visual style that matches your brand. We focus on user experience to ensure customers buy."
                    icon={PenTool}
                    delay={200}
                 />
                 <ProcessStep 
                    number="03" 
                    title="Build" 
                    desc="Our developers bring the design to life using the latest technology for speed, security, and reliability."
                    icon={Code2}
                    delay={400}
                 />
                 <ProcessStep 
                    number="04" 
                    title="Growth" 
                    desc="We help you launch and provide ongoing support to ensure your store continues to grow and succeed."
                    icon={Rocket}
                    delay={600}
                 />
            </div>
        </div>
      </section>
  );
};

export default Process;