import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowDownRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Marquee from '../components/UI/Marquee';
import Results from '../components/Results';
import Engagement from '../components/Engagement';
import Services from '../components/Services';
import Work from '../components/Work';
import Apps from '../components/Apps';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Partners from '../components/Partners';
import ImageDivider from '../components/ImageDivider';
import { Reveal } from '../components/UI/Reveal';
import Interactive3DBackground from '../components/UI/Interactive3DBackground';
import SEO from '../components/SEO';

const NavItem = ({ number, text, onClick }: { number: string; text: string, onClick: () => void }) => (
  <button onClick={onClick} className="group flex items-baseline w-full text-left border-b border-ink/10 py-6 hover:bg-ink hover:text-neon transition-all px-4">
    <span className="font-mono text-xs mr-4 sm:mr-6 opacity-50 group-hover:opacity-100 group-hover:text-neon">{number}</span>
    <span className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight">{text}</span>
    <ArrowDownRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon" size={20} />
  </button>
);

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Costello Digital",
    "image": "https://costellodigital.com/og-image.jpg",
    "url": "https://costellodigital.com",
    "telephone": "",
    "email": "hello@costellodigital.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Belfast",
      "addressRegion": "Northern Ireland",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.5973",
      "longitude": "-5.9301"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://twitter.com/costellodigital",
      "https://instagram.com/costellodigital",
      "https://linkedin.com/company/costellodigital"
    ]
  };

  return (
    <>
      <SEO 
        title="Web Design Northern Ireland | Costello Digital | Shopify Experts Belfast"
        description="Premium web design and Shopify development agency in Belfast. We build high-performance e-commerce websites for businesses in Northern Ireland and the UK."
        canonical="/"
        keywords={['web design ni', 'shopify development belfast', 'ecommerce website belfast', 'web developer northern ireland', 'custom shopify themes ni', 'online store belfast', 'web agency belfast']}
        jsonLd={schema}
      />
      {/* --- Hero Section --- */}
      <header id="home" className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-6 border-b border-ink overflow-hidden" role="banner">
        {/* Interactive 3D Background */}
        <Interactive3DBackground />
        
        <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-12 gap-8 md:gap-4">
                <div className="flex-1">
                     <Reveal delay={100}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
                            <p className="font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase">Est. 2024 • Web Design Studio</p>
                        </div>
                     </Reveal>
                     <Reveal delay={200}>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
                            Websites <br/>
                            <span className="text-outline-white hover:text-neon transition-colors duration-500 cursor-default">That Work</span>
                        </h1>
                     </Reveal>
                </div>
                <div className="w-full md:w-auto md:max-w-xs">
                    <Reveal delay={400}>
                        <p className="text-sm sm:text-base font-mono leading-relaxed mb-6 border-l-2 border-neon pl-4">
                            We build websites for e-commerce and service businesses. From online stores to restaurant sites, we create custom designs that work for your business.
                        </p>
                    </Reveal>
                    <Reveal delay={500}>
                        <button onClick={() => scrollToSection('work')} className="group flex items-center justify-center md:justify-start gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest bg-ink text-concrete hover:bg-neon hover:text-ink py-3 px-6 transition-all w-full md:w-auto">
                            View Selected Work <MoveRight className="group-hover:translate-x-2 transition-transform" size={18} />
                        </button>
                    </Reveal>
                </div>
            </div>
        </div>
      </header>

      {/* --- Marquee --- */}
      <Marquee text="WEB DESIGN NORTHERN IRELAND • SHOPIFY • WORDPRESS • WOOCOMMERCE • E-COMMERCE WEBSITES • SERVICE WEBSITES • CUSTOM DEVELOPMENT • BELFAST & BEYOND •" />

      <Services />
      <Partners />
      <ImageDivider />
      <Process />
      <Apps />
      <Work />
      <Results />
      <Engagement />
      <FAQ />
    </>
  );
}

export default Home;

