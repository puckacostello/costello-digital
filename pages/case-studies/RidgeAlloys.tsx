import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Target, Zap, TrendingUp } from 'lucide-react';
import { Reveal } from '../../components/UI/Reveal';
import SEO from '../../components/SEO';

const RidgeAlloys = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Ridge Alloys Case Study | Custom Wheel Finder App & Shopify Store Belfast"
        description="Developing a premium Shopify store for Ridge Alloys with a custom vehicle wheel finder app. Increased orders by 195% and reduced returns significantly. Automotive e-commerce specialists NI."
        canonical="/case-studies/ridge-alloys"
        keywords={['custom shopify app belfast', 'wheel finder app', 'automotive ecommerce ni', 'vehicle parts shopify', 'custom shopify development']}
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
              Ridge Alloys
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg sm:text-xl font-mono mb-6 text-neon/80">
              Creating a premium online destination for alloy wheels and auto parts
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <a 
              href="https://ridgealloys.com" 
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
                <p className="text-ink/70 font-mono text-sm">6 weeks</p>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Industry</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">Auto Parts / Wheels</p>
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
                <p className="text-ink/70 font-mono text-sm">+195% Orders</p>
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
                src="/ridge-alloys-wheels-auto-parts-shopify-store.png" 
                alt="Ridge Alloys Wheels and Auto Parts Shopify Store Design"
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
                Ridge Alloys had built a strong reputation for quality alloy wheels and auto parts in their local market, but their online presence wasn't reflecting their premium brand positioning. They needed an e-commerce platform that could showcase their extensive product range while making it easy for customers to find the perfect wheels for their specific vehicle.
              </p>
              
              <p className="text-ink/80 leading-relaxed mb-6">
                Main obstacles included:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-ink/80 leading-relaxed">Presenting complex wheel specifications (size, offset, PCD, bore) in a customer-friendly way</li>
                <li className="text-ink/80 leading-relaxed">Building a vehicle-specific search system for accurate fitment</li>
                <li className="text-ink/80 leading-relaxed">Creating a premium brand experience that justified their pricing</li>
                <li className="text-ink/80 leading-relaxed">Educating customers about technical wheel specifications</li>
                <li className="text-ink/80 leading-relaxed">Competing with budget online wheel retailers</li>
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
                We created a sophisticated yet user-friendly Shopify store that positions Ridge Alloys as the premium choice for discerning car enthusiasts while simplifying the traditionally complex wheel buying process.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Intelligent Wheel Finder</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We developed a custom wheel finder tool that allows customers to search by vehicle make/model or by specific wheel specifications. The system automatically filters out incompatible options and highlights perfect-fit wheels, reducing returns by 52%.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Premium Visual Experience</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                The design emphasizes high-quality product photography with 360° wheel views and AR visualization capabilities. Each product page includes detailed specifications, fitment guides, and styling inspiration from customer installations.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Educational Content Hub</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We integrated a comprehensive learning center with guides on wheel sizing, offset calculations, and maintenance tips. This content strategy improved SEO performance and established Ridge Alloys as an authority in the space, driving a 165% increase in organic traffic.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Streamlined Checkout</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We implemented an optimized checkout flow with express payment options, financing integration, and professional installation service add-ons. This increased average order value by 43% and conversion rate by 78%.
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
                <div className="text-5xl font-black mb-2">195%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Order Increase</div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">165%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Organic Traffic</div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">78%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Conversion Growth</div>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">52%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Return Reduction</div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={500}>
            <div className="mt-12 bg-ink text-neon p-8">
              <blockquote className="text-xl font-mono italic mb-4">
                "The wheel finder tool has been a game-changer. Customers can now confidently find the right wheels for their car without calling us, and we've seen a massive uptick in online orders as a result."
              </blockquote>
              <div className="font-bold">— Ridge Alloys Management</div>
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
                'Custom Wheel Finder',
                '360° Product Viewer',
                'AR Visualization',
                'Klaviyo Email',
                'Content Marketing',
                'SEO Optimization',
                'Financing Integration',
                'Express Checkout'
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
              Let's Build Your Premium Store
            </h2>
          </Reveal>
          
          <Reveal delay={100} width="100%">
            <p className="text-xl font-mono mb-8 text-neon/80">
              Elevate your brand with a custom e-commerce solution
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

export default RidgeAlloys;

