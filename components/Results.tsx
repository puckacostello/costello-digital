import React from 'react';
import { Reveal } from './UI/Reveal';

const Results = () => {
  return (
    <section id="results" className="bg-ink text-concrete border-b border-ink py-16 sm:py-24 px-4 sm:px-6" aria-label="Our Approach to Web Development">
        <div className="container mx-auto max-w-4xl">
            <Reveal width="100%">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                    What We <span className="text-neon">Focus On</span>
                </h2>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
                <Reveal delay={100}>
                    <div>
                        <h3 className="text-xl font-bold text-neon mb-3">Speed</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Fast websites keep customers around. We optimize everything to load quickly on any device.
                        </p>
                    </div>
                </Reveal>
                
                <Reveal delay={200}>
                    <div>
                        <h3 className="text-xl font-bold text-neon mb-3">Mobile First</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Most people browse on their phones. We design for mobile from the start, not as an afterthought.
                        </p>
                    </div>
                </Reveal>
                
                <Reveal delay={300}>
                    <div>
                        <h3 className="text-xl font-bold text-neon mb-3">Easy to Use</h3>
                        <p className="text-stone-400 leading-relaxed">
                            If people can't figure out your site, they'll leave. We make navigation simple and checkout smooth.
                        </p>
                    </div>
                </Reveal>
                
                <Reveal delay={400}>
                    <div>
                        <h3 className="text-xl font-bold text-neon mb-3">Built to Last</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Clean code that's easy to update and maintain. Your site should work well now and in the future.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  );
};

export default Results;