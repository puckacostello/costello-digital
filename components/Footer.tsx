
import React from 'react';
import { Instagram, Github, Mail, Linkedin } from 'lucide-react';
import FooterGame from './FooterGame';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ink text-concrete py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-concrete/20 overflow-hidden" role="contentinfo">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-12 sm:gap-16 mb-16 sm:mb-20">
          {/* Left: Headline & Contact */}
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
              Let's Build<br />Something<br /><span className="text-neon">Real.</span>
            </h2>
            
            <div className="flex flex-col items-start gap-6 mb-12">
                <a href="mailto:hello@costellodigital.com" className="text-lg sm:text-xl md:text-2xl font-mono hover:text-neon transition-colors border-b border-concrete/20 pb-2 break-all">
                    hello@costellodigital.com
                </a>
                <p className="text-concrete/60 max-w-md font-mono text-sm leading-relaxed">
                    Based on the North Coast, serving Belfast and all of Northern Ireland. We build websites for e-commerce, service businesses, and everything in between.
                </p>
            </div>
          </div>

          {/* Right: Links & Game */}
          <div className="flex flex-col md:flex-row gap-12 xl:gap-24">
            {/* Navigation Columns */}
            <div className="grid grid-cols-2 gap-12 sm:gap-20">
                <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs text-neon mb-6">Sitemap</h3>
                    <ul className="space-y-3 font-mono text-sm text-concrete/70">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/work" className="hover:text-white transition-colors">Work</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs text-neon mb-6">Services</h3>
                    <ul className="space-y-3 font-mono text-sm text-concrete/70">
                        {/* Links with hashes to target specific sections in ServicesPage.tsx */}
                        <li><Link to="/services#shopify-plus" className="hover:text-white transition-colors">Shopify Plus</Link></li>
                        <li><Link to="/services#web-design" className="hover:text-white transition-colors">Web Design NI</Link></li>
                        <li><Link to="/services#growth" className="hover:text-white transition-colors">Growth & SEO</Link></li>
                        <li><Link to="/services#shopify-plus" className="hover:text-white transition-colors">Migrations</Link></li>
                    </ul>
                </div>
            </div>

            {/* Game Container */}
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex flex-col items-center gap-2">
                    <p className="font-mono text-xs text-neon uppercase tracking-wider text-center">
                        Beat our high score while you decide
                    </p>
                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" className="text-neon">
                        <path d="M15 2 Q 10 8, 15 14 L 15 18 M 12 15 L 15 18 L 18 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <FooterGame />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-concrete/10 gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <p className="font-mono text-xs opacity-40 uppercase text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Costello Digital. Northern Ireland, United Kingdom.
                </p>
            </div>

            <div className="flex items-center gap-6">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-concrete/60 hover:text-neon transition-colors"><Instagram size={18} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-concrete/60 hover:text-neon transition-colors"><Linkedin size={18} /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-concrete/60 hover:text-neon transition-colors"><Github size={18} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;