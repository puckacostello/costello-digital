import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Target, Zap, TrendingUp } from 'lucide-react';
import { Reveal } from '../../components/UI/Reveal';
import SEO from '../../components/SEO';

const RisperStyling = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Risper Styling Shopify Plus Case Study | Automotive E-commerce Agency NI"
        description="See how we helped Risper Styling achieve +250% revenue growth with a custom Shopify Plus store and vehicle fitment system. Leading automotive e-commerce agency in Belfast."
        canonical="/case-studies/risper-styling"
        keywords={['shopify plus case study', 'automotive ecommerce belfast', 'shopify development ni', 'vehicle fitment app', 'ecommerce success story northern ireland']}
        type="article"
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-6 bg-ink text-neon overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80ff00_1px,transparent_1px),linear-gradient(to_bottom,#80ff00_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider mb-6 hover:text-neon/80 transition-colors">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-neon text-ink text-xs font-bold uppercase tracking-wider">Case Study</span>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4">
              Risper Styling
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg sm:text-xl font-mono mb-6 text-neon/80">
              Transforming an automotive styling business into a premium e-commerce powerhouse
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <a 
              href="https://risperstyling.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neon text-ink py-3 px-6 font-bold uppercase tracking-wider hover:bg-neon/90 transition-all"
            >
              <ExternalLink size={18} />
              Visit Live Site
            </a>
          </Reveal>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 border-b border-ink/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Timeline</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">8 weeks</p>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Industry</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">Automotive E-Commerce</p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Platform</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">Shopify Plus</p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Results</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">+250% Revenue</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden border border-ink/10 shadow-[8px_8px_0px_0px_rgba(5,5,5,0.1)]">
              <img 
                src="/risper-styling-shopify-store-automotive-ecommerce.jpg" 
                alt="Risper Styling Shopify Store - Automotive E-Commerce Design"
                className="w-full"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              The Challenge
            </h2>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="prose prose-lg max-w-none">
              <p className="text-ink/80 leading-relaxed mb-6">
                Risper Styling approached us with a clear vision: they wanted to move beyond their traditional brick-and-mortar business model and establish a strong online presence in the competitive automotive styling market. Their existing website was outdated, difficult to navigate, and not optimized for e-commerce conversions.
              </p>
              
              <p className="text-ink/80 leading-relaxed mb-6">
                The main challenges included:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-ink/80 leading-relaxed">Creating a premium brand experience that reflected their high-end product offerings</li>
                <li className="text-ink/80 leading-relaxed">Organizing a complex product catalog with thousands of SKUs and vehicle fitments</li>
                <li className="text-ink/80 leading-relaxed">Implementing vehicle compatibility filters to help customers find the right parts</li>
                <li className="text-ink/80 leading-relaxed">Building trust with first-time online customers in the automotive aftermarket</li>
                <li className="text-ink/80 leading-relaxed">Optimizing for mobile as 70% of their traffic came from mobile devices</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              The Solution
            </h2>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="prose prose-lg max-w-none">
              <p className="text-ink/80 leading-relaxed mb-6">
                We designed and developed a custom Shopify Plus store that elevated Risper Styling's brand while making it incredibly easy for customers to find and purchase the right products for their vehicles.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Custom Vehicle Fitment System</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We integrated a sophisticated vehicle fitment application that allows customers to filter products by make, model, and year. This reduced product returns by 45% and significantly improved the customer experience.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Premium Visual Design</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                The design focuses on large, high-quality product imagery with a clean, modern aesthetic. We implemented custom product page layouts that showcase installation guides, compatibility information, and customer reviews prominently.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Performance Optimization</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We optimized the site for speed, achieving a 95+ PageSpeed score. Fast load times were crucial for mobile users and SEO performance, contributing to a 180% increase in organic traffic.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Conversion-Focused Features</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We implemented strategic conversion features including urgency indicators, social proof widgets, abandoned cart recovery emails, and a streamlined checkout process that increased conversion rate by 85%.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-neon">
        <div className="container mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-ink">
              The Results
            </h2>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={100}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">250%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Revenue Increase</div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">180%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Organic Traffic Growth</div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">85%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Conversion Rate Lift</div>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">45%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Return Rate Reduction</div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={500}>
            <div className="mt-12 bg-ink text-neon p-8">
              <blockquote className="text-xl font-mono italic mb-4">
                "Costello Digital transformed our business. The new website not only looks amazing but has fundamentally changed how we operate. Our online sales have exploded, and customer feedback has been overwhelmingly positive."
              </blockquote>
              <div className="font-bold">— Ryan Risper, Owner</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 px-6 border-t border-ink/10">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              Technologies & Services
            </h2>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Shopify Plus',
                'Custom Liquid Development',
                'Vehicle Fitment App',
                'Klaviyo Email Marketing',
                'Google Analytics 4',
                'SEO Optimization',
                'Performance Optimization',
                'Custom Product Filters',
                'Abandoned Cart Recovery'
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="border border-ink/10 px-4 py-3 font-mono text-sm hover:border-neon hover:bg-neon/5 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-ink text-neon">
        <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
          <Reveal width="100%">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              Ready to Transform Your Business?
            </h2>
          </Reveal>
          
          <Reveal delay={100} width="100%">
            <p className="text-xl font-mono mb-8 text-neon/80">
              Let's create something amazing together
            </p>
          </Reveal>
          
          <Reveal delay={200} width="100%">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-neon text-ink py-3 px-8 font-bold uppercase tracking-wider hover:bg-neon/90 transition-all"
              >
                Start Your Project
              </Link>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 border border-neon text-neon py-3 px-8 font-bold uppercase tracking-wider hover:bg-neon hover:text-ink transition-all"
              >
                View More Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default RisperStyling;

