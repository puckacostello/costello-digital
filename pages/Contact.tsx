import React from 'react';
import { Reveal } from '../components/UI/Reveal';
import Interactive3DBackground from '../components/UI/Interactive3DBackground';
import SEO from '../components/SEO';
import Engagement from '../components/Engagement';

const Contact = () => {

  return (
    <div className="min-h-screen bg-concrete">
      <SEO 
        title="Contact Costello Digital | Web Design & Shopify Development Belfast"
        description="Start your project with Northern Ireland's leading e-commerce agency. Based in Belfast, we offer free consultations for Shopify, web design, and app development projects across NI."
        canonical="/contact"
        keywords={['contact web design belfast', 'shopify consultation ni', 'web development quote belfast', 'ecommerce agency northern ireland']}
      />
      {/* Hero */}
      <section className="relative px-6 pb-20 border-b border-ink overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
          <Interactive3DBackground />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              Get In <br/>
              <span className="text-outline-white hover:text-neon transition-colors duration-500 cursor-default">Touch</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-ink/80 font-light leading-relaxed max-w-3xl">
              Have a project in mind? Let's discuss it and see if we're a good fit to work together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form - Using Engagement Component */}
      <Engagement />
    </div>
  );
};

export default Contact;

