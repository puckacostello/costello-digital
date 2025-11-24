import React from 'react';
import { Reveal } from '../components/UI/Reveal';
import { ShoppingCart, Database, Globe, Layers, CalendarCheck, LineChart, Code2, ArrowRight } from 'lucide-react';
import Interactive3DBackground from '../components/UI/Interactive3DBackground';
import SEO from '../components/SEO';

const ServiceItem = ({ number, title, description, icon: Icon, features, id }: { number: string, title: string, description: string, icon: any, features: string[], id?: string }) => (
  <div id={id} className="group relative border-b border-ink/10 last:border-b-0 scroll-mt-32">
    <div className="absolute inset-0 bg-ink/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
    
    <div className="relative p-8 md:p-16 grid md:grid-cols-12 gap-8 items-start">
        {/* Number & Icon */}
        <div className="md:col-span-2 flex flex-col items-start gap-4">
             <span className="font-mono text-neon text-sm tracking-widest bg-ink px-3 py-2">{number}</span>
             <Icon size={40} strokeWidth={1.5} className="text-ink/50 group-hover:text-ink transition-colors" />
        </div>

        {/* Content */}
        <div className="md:col-span-6">
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
            <p className="text-ink/70 text-lg leading-relaxed mb-8 max-w-xl">
                {description}
            </p>
             <div className="flex flex-wrap gap-3">
                {features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 border border-ink/20 rounded-full text-xs font-mono uppercase tracking-wider group-hover:border-ink group-hover:bg-white transition-all">
                        {feature}
                    </span>
                ))}
            </div>
        </div>

        {/* Action */}
        <div className="md:col-span-4 flex justify-start md:justify-end items-center h-full">
            <div className="hidden md:flex w-16 h-16 border rounded-full items-center justify-center group-hover:bg-neon group-hover:border-neon transition-all duration-300">
                <ArrowRight className="text-ink -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
        </div>
    </div>
  </div>
);

const ServicesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "E-commerce Development",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Costello Digital",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belfast",
        "addressRegion": "Northern Ireland"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Northern Ireland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify Plus Migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Growth"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-concrete pt-32">
      <SEO 
        title="Web Development Services Northern Ireland | Shopify, WordPress & Custom Sites"
        description="Web design and development in Belfast and NI. We build e-commerce stores, service websites, and custom web solutions for businesses across Northern Ireland."
        canonical="/services"
        keywords={['shopify plus ni', 'custom web development belfast', 'ui ux design northern ireland', 'ecommerce migration belfast', 'shopify apps ni', 'web services belfast']}
        jsonLd={schema}
      />
      {/* Header Section */}
      <header className="relative px-6 pb-20 border-b border-ink overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
          <Interactive3DBackground />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              Our <br/>
              <span className="text-outline-white hover:text-neon transition-colors duration-500 cursor-default">Expertise</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-ink/80 font-light leading-relaxed max-w-3xl">
              We build websites for businesses of all kinds. Whether you need an online store, a service website, or something custom, we'll help you figure out the right solution.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Detailed Services List */}
      <section className="bg-concrete">
          <ServiceItem 
            id="shopify-plus"
            number="01"
            title="E-Commerce Stores"
            description="Online stores built on the platform that suits your needs best—Shopify, WooCommerce, or WordPress. We help you figure out what makes sense for your products and budget."
            icon={ShoppingCart}
            features={['Shopify', 'WooCommerce', 'WordPress', 'Custom Solutions']}
          />
          <ServiceItem 
            id="custom-dev"
            number="02"
            title="Custom Development"
            description="Need something specific that doesn't exist yet? We build custom features, apps, and integrations tailored to your business. If you can describe it, we can probably build it."
            icon={Code2}
            features={['Custom Features', 'Third-party Integrations', 'Automation', 'APIs']}
          />
          <ServiceItem 
            id="web-design"
            number="03"
            title="Service Websites"
            description="Professional websites for restaurants, tradespeople, consultants, and service businesses. Clean designs that showcase what you do and make it easy for customers to get in touch."
            icon={Layers}
            features={['WordPress', 'Booking Systems', 'Contact Forms', 'Mobile Friendly']}
          />
           <ServiceItem 
            id="growth"
            number="04"
            title="SEO & Performance"
            description="We build websites that load fast and rank well in search engines. Clean code, proper structure, and performance optimization built in from the start."
            icon={LineChart}
            features={['SEO Optimization', 'Fast Loading', 'Mobile First', 'Analytics Setup']}
          />
      </section>
      
      {/* CTA Section - Fixed Centering */}
      <section className="py-32 px-6 bg-ink text-concrete text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
             <Reveal width="100%">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                    Ready to <br/>
                    <span className="text-neon">Scale Up?</span>
                </h2>
                <p className="text-stone-400 mb-12 text-xl max-w-2xl mx-auto">
                    Your vision, our technical expertise. Let's build something extraordinary together.
                </p>
                <a href="/contact" className="inline-flex items-center gap-4 bg-neon text-ink px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105">
                    Start Your Project <ArrowRight size={20} />
                </a>
             </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;