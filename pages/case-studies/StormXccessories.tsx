import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Target, Zap, TrendingUp } from 'lucide-react';
import { Reveal } from '../../components/UI/Reveal';
import SEO from '../../components/SEO';

const StormXccessories = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Storm Xccessories Case Study | 4x4 Parts Shopify Store Design NI"
        description="Scaling a 4x4 accessories business to Europe. We built a high-performance Shopify store with warehouse integration and international shipping for Storm Xccessories NI."
        canonical="/case-studies/storm-xccessories"
        keywords={['4x4 ecommerce belfast', 'shopify store design ni', 'automotive parts website', 'warehouse integration shopify', 'international shipping setup']}
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
              Storm Xccessories
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg sm:text-xl font-mono mb-6 text-neon/80">
              Building the UK & Ireland's leading 4x4 accessories e-commerce platform
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg sm:text-xl font-mono mb-6 text-neon/80">
              Building the UK & Ireland's leading 4x4 accessories e-commerce platform
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <a 
              href="https://4x4ni.com" 
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
                <p className="text-ink/70 font-mono text-sm">10 weeks</p>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Industry</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">4x4 Accessories</p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Platform</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">Shopify</p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Results</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">+320% Sales</p>
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
                src="/storm-xccessories-4x4-parts-shopify-store.png" 
                alt="Storm Xccessories 4x4 Parts Shopify Store Design"
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
                Storm Xccessories (4x4NI.com) needed to pivot from a local retail operation to a full-scale e-commerce business serving customers across the UK, Ireland, and eventually the whole of Europe. The 4x4 accessories market is highly competitive, and they needed a platform that could handle complex product variants, bulk ordering, international shipping, and integrate with their existing warehouse management system.
              </p>
              
              <p className="text-ink/80 leading-relaxed mb-6">
                Key challenges included:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-ink/80 leading-relaxed">Managing thousands of product variants (sizes, colors, vehicle compatibility)</li>
                <li className="text-ink/80 leading-relaxed">Creating an intuitive navigation system for a diverse product catalog</li>
                <li className="text-ink/80 leading-relaxed">Integrating with their existing inventory and fulfillment systems</li>
                <li className="text-ink/80 leading-relaxed">Expanding internationally with European shipping capabilities</li>
                <li className="text-ink/80 leading-relaxed">Competing with established online 4x4 retailers through targeted advertising</li>
                <li className="text-ink/80 leading-relaxed">Building a brand identity that resonated with the 4x4 enthusiast community</li>
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
                We developed a robust Shopify solution that positioned Storm Xccessories as a premium destination for 4x4 enthusiasts while streamlining their operations behind the scenes.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Smart Product Architecture</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We implemented a sophisticated product tagging and filtering system that allows customers to easily navigate through thousands of products by vehicle type, brand, category, and price range. This reduced customer service inquiries by 60%.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Rugged, Adventure-Inspired Design</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                The visual design captures the adventurous spirit of 4x4 culture with bold imagery, outdoor-inspired color palettes, and lifestyle content that resonates with the target audience. Product pages feature detailed specifications and installation guides.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Warehouse Integration</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We integrated their Shopify store with their warehouse management system, enabling real-time inventory updates and automated order processing. This reduced fulfillment time by 40% and eliminated overselling issues.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">B2B Functionality</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We implemented wholesale pricing tiers and bulk ordering capabilities, allowing Storm Xccessories to serve both retail customers and trade accounts through a single platform, opening up a new revenue stream that now accounts for 35% of total sales.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">International Expansion & Shipping</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We configured and optimized their shipping infrastructure to support overseas delivery, opening up Storm Xccessories to customers across the whole of Europe. This expansion included multi-currency support, international shipping calculations, and localized checkout experiences, significantly expanding their market reach.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Performance Marketing Campaigns</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We launched and managed comprehensive Google Ads and Meta Ads campaigns, targeting 4x4 enthusiasts across the UK, Ireland, and Europe. Our data-driven approach to campaign optimization resulted in a strong ROI and positioned Storm Xccessories as the go-to destination for quality 4x4 accessories.
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
                <div className="text-5xl font-black mb-2">320%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Sales Growth</div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">210%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Traffic Increase</div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">60%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Fewer Support Queries</div>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">40%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Faster Fulfillment</div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={500}>
            <div className="mt-12 bg-ink text-neon p-8">
              <blockquote className="text-xl font-mono italic mb-4">
                "The new platform has completely transformed our business. We're now competing with the big players and winning. The integration with our warehouse system alone has saved us countless hours every week."
              </blockquote>
              <div className="font-bold">— Storm Xccessories Team</div>
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
                'Shopify',
                'Custom Theme Development',
                'Warehouse API Integration',
                'B2B Wholesale App',
                'Advanced Filtering',
                'Omnisend Marketing',
                'Google Ads Management',
                'Meta Ads Campaigns',
                'International Shipping',
                'Multi-Currency Support',
                'European Market Expansion',
                'Bulk Order Processing'
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
              Ready to Scale Your E-Commerce?
            </h2>
          </Reveal>
          
          <Reveal delay={100} width="100%">
            <p className="text-xl font-mono mb-8 text-neon/80">
              Let's build your success story
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

export default StormXccessories;

