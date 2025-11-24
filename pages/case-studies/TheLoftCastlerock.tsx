import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Target, Zap, TrendingUp } from 'lucide-react';
import { Reveal } from '../../components/UI/Reveal';
import SEO from '../../components/SEO';

const TheLoftCastlerock = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="The Loft Castlerock Case Study | Restaurant Website Design Northern Ireland"
        description="Creating an immersive digital experience for The Loft Castlerock. A custom restaurant website design that drives engagement, promoting events and specials for a top NI venue. Web design specialists Belfast."
        canonical="/case-studies/the-loft-castlerock"
        keywords={['restaurant website design ni', 'hospitality web design belfast', 'custom website northern ireland', 'restaurant digital marketing', 'web design castlerock']}
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
              The Loft Castlerock
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg sm:text-xl font-mono mb-6 text-neon/80">
              Crafting a digital experience for a premium dining destination
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <a 
              href="https://theloftcastlerock.co.uk" 
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
                <p className="text-ink/70 font-mono text-sm">5 weeks</p>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Industry</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">Hospitality / Dining</p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Platform</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">Fully Custom</p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-neon" size={20} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Results</h3>
                </div>
                <p className="text-ink/70 font-mono text-sm">+285% Engagement</p>
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
                src="/the-loft-castlerock-restaurant-website.png" 
                alt="The Loft Castlerock Restaurant Website Design"
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
                The Loft Castlerock is a stunning restaurant venue perched on the North Coast of Northern Ireland, offering breathtaking views and exceptional dining experiences. However, their existing website wasn't capturing the ambiance and quality of the venue, and they needed a dynamic way to promote their regular special events and themed nights to keep customers engaged.
              </p>
              
              <p className="text-ink/80 leading-relaxed mb-6">
                Key challenges:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-ink/80 leading-relaxed">Creating an immersive visual experience that reflects the venue's premium atmosphere</li>
                <li className="text-ink/80 leading-relaxed">Building a flexible system to promote weekly specials and themed nights</li>
                <li className="text-ink/80 leading-relaxed">Showcasing their menu, live music events, and seasonal offerings dynamically</li>
                <li className="text-ink/80 leading-relaxed">Capturing local search traffic from tourists and residents</li>
                <li className="text-ink/80 leading-relaxed">Mobile optimization for users searching on-the-go</li>
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
                We built a fully custom website from scratch that immerses visitors in The Loft's atmosphere from the first scroll, with a powerful content management system that allows the team to easily promote specials and themed nights.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Immersive Visual Design</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                The site opens with full-screen imagery and video showcasing the venue's spectacular coastal location and elegant interior. We implemented smooth transitions and engaging animations that create a magazine-style browsing experience that keeps visitors on site 3x longer.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Dynamic Events & Specials Promotion</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We built a custom content management system that allows The Loft team to easily update and promote weekly specials, themed dining nights, and live music events. The prominent events section on the homepage drives awareness and keeps the content fresh, increasing return visits by 140%.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Flexible Menu System</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                The menu section features beautiful photography and can be easily updated to reflect seasonal changes and special offerings. The design showcases dishes in an appetizing way that encourages visitors to come experience the food in person.
              </p>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-12 mb-4">Local SEO Domination</h3>
              <p className="text-ink/80 leading-relaxed mb-6">
                We optimized the site for local search terms, implemented Google Business integration, and created location-specific content that helped The Loft rank #1 for "restaurants in Castlerock" and related searches, increasing organic traffic by 210%.
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
                <div className="text-5xl font-black mb-2">285%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Engagement Increase</div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">210%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Organic Traffic</div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">3x</div>
                <div className="text-sm font-mono uppercase tracking-wider">Time On Site</div>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="bg-ink text-neon p-6">
                <div className="text-5xl font-black mb-2">140%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Return Visitors</div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={500}>
            <div className="mt-12 bg-ink text-neon p-8">
              <blockquote className="text-xl font-mono italic mb-4">
                "The new website perfectly captures what makes The Loft special. The ability to easily promote our themed nights and special events has been a game-changer. We've seen incredible engagement and guests regularly compliment us on how beautiful and easy the site is to navigate."
              </blockquote>
              <div className="font-bold">— The Loft Castlerock Team</div>
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
                'Custom HTML/CSS/JS',
                'React',
                'Custom CMS',
                'Google Business',
                'Local SEO',
                'Events Management',
                'Specials Promotion System',
                'Performance Optimization',
                'Mobile-First Design'
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
              Transform Your Digital Presence
            </h2>
          </Reveal>
          
          <Reveal delay={100} width="100%">
            <p className="text-xl font-mono mb-8 text-neon/80">
              Let's create a website that drives real results
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

export default TheLoftCastlerock;

