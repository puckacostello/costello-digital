import React from 'react';
import { Reveal } from '../components/UI/Reveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Interactive3DBackground from '../components/UI/Interactive3DBackground';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-concrete pt-32">
      <SEO 
        title="About Costello Digital | North Coast Web Design & Shopify Agency NI"
        description="Meet the team behind Northern Ireland's leading Shopify Plus and web development agency. Based on the North Coast, serving Belfast and businesses across NI with high-performance e-commerce solutions."
        canonical="/about"
        keywords={['about costello digital', 'web design agency northern ireland', 'shopify experts ni', 'north coast digital agency', 'web developers belfast ni']}
      />

      {/* Hero Section */}
      <section className="relative px-6 pb-20 border-b border-ink overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
          <Interactive3DBackground />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              About <br/>
              <span className="text-outline-white hover:text-neon transition-colors duration-500 cursor-default">Costello Digital</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-ink/80 font-light leading-relaxed max-w-3xl">
              We're a web design studio based on Northern Ireland's North Coast, serving clients across Belfast and beyond. 
              We build websites for all kinds of businesses—online stores, service companies, restaurants, and more. No cookie-cutter templates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 px-6 bg-white border-b border-ink">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-8">
              Who We <span className="text-neon">Are</span>
            </h2>
            <div className="space-y-6 text-ink/70 text-lg leading-relaxed">
              <p>
                We're a small web design and development studio working with clients of all sizes.
              </p>
              <p>
                We work with platforms like Shopify, WordPress, and WooCommerce depending on what's best for your project. Whether you're selling products online or just need a professional web presence, we focus on building sites that actually work for your business.
              </p>
              <p>
                We've worked with automotive retailers, restaurants, service providers, and online shops. Each project is different, and we approach them all the same way: figure out what you need, build it properly, and make sure it works.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 px-6 bg-concrete border-b border-ink">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-8">
              What We <span className="text-neon bg-ink px-3 py-1">Believe</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Keep it simple</h3>
                <p className="text-ink/70 leading-relaxed">
                  Good websites don't need to be complicated. We focus on what matters and leave out what doesn't.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Make it fast</h3>
                <p className="text-ink/70 leading-relaxed">
                  Nobody wants to wait for a slow website. We build sites that load quickly and work smoothly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Design for people</h3>
                <p className="text-ink/70 leading-relaxed">
                  Your customers should be able to find what they need and buy from you without any friction. That's the goal.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-ink text-concrete text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <Reveal width="100%">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Let's Talk <br/>
              <span className="text-neon">About Your Project</span>
            </h2>
            <p className="text-stone-400 mb-12 text-xl max-w-2xl mx-auto">
              Have a project in mind? Get in touch and we'll see if we're a good fit.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-neon text-ink px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105">
              Get In Touch <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;

