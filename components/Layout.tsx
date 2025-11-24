import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowDownRight } from 'lucide-react';
import Footer from './Footer';

const NavItem = ({ number, text, to }: { number: string; text: string, to: string }) => (
  <Link to={to} className="group flex items-baseline w-full text-left border-b border-ink/10 py-6 hover:bg-ink hover:text-neon transition-all px-4">
    <span className="font-mono text-xs mr-4 sm:mr-6 opacity-50 group-hover:opacity-100 group-hover:text-neon">{number}</span>
    <span className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight">{text}</span>
    <ArrowDownRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon" size={20} />
  </Link>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-concrete text-ink selection:bg-neon selection:text-ink font-sans relative">
      {/* Global Noise Overlay */}
      <div className="bg-noise"></div>
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 border-b border-ink/10 transition-all duration-300 ${scrolled ? 'bg-concrete/90 backdrop-blur-md py-3' : 'bg-transparent py-4 md:py-6'}`} role="navigation" aria-label="Main Navigation">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group bg-ink px-4 py-2.5 border border-ink transition-all hover:border-neon hover:shadow-[3px_3px_0px_0px_#CCFF00]">
            <img src="/Digital Logo.svg" alt="Costello Digital Logo" className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-105 drop-shadow-lg" />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white group-hover:text-neon transition-colors">Costello</span>
              <span className="text-[11px] sm:text-xs font-mono lowercase tracking-[0.25em] text-neon font-bold">digital</span>
            </div>
          </Link>
          
          <div className="hidden md:flex gap-6 lg:gap-8">
            <Link to="/" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors">Home</Link>
            <Link to="/services" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors">Services</Link>
            <Link to="/work" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors">Work</Link>
            <Link to="/about" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors">About</Link>
            <Link to="/contact" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors">Contact</Link>
          </div>

          <button 
            className="md:hidden text-ink hover:text-neon transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-concrete z-40 pt-24 px-4 flex flex-col">
            <NavItem number="01" text="Home" to="/" />
            <NavItem number="02" text="Services" to="/services" />
            <NavItem number="03" text="Work" to="/work" />
            <NavItem number="04" text="About" to="/about" />
            <NavItem number="05" text="Contact" to="/contact" />
        </div>
      )}

      {/* Page Content */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

