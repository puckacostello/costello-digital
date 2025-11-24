import React from 'react';
import { Reveal } from '../components/UI/Reveal';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Interactive3DBackground from '../components/UI/Interactive3DBackground';
import SEO from '../components/SEO';

const ProjectCard = ({ 
  title, 
  type, 
  url, 
  img, 
  video, 
  caseStudyUrl, 
  delay 
}: { 
  title: string; 
  type: string; 
  url: string; 
  img?: string; 
  video?: string; 
  caseStudyUrl?: string; 
  delay: number 
}) => (
  <Reveal delay={delay} width="100%">
    <div className="group cursor-pointer block bg-stone-100 border border-ink/10 hover:border-ink transition-all duration-500 hover:shadow-[8px_8px_0px_0px_rgba(5,5,5,1)]">
        {/* Browser Window Header */}
        <div className="h-8 border-b border-ink/10 flex items-center px-4 gap-2 bg-white">
            <div className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-[#FF5F56] transition-colors duration-300"></div>
            <div className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-[#FFBD2E] transition-colors duration-300 delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-[#27C93F] transition-colors duration-300 delay-150"></div>
            <div className="ml-4 h-3 bg-stone-100 rounded-full flex-grow max-w-[200px]"></div>
        </div>

        {/* Browser Viewport - Simulated Scroll */}
        <div className="relative overflow-hidden aspect-video bg-stone-200">
            <div className="absolute inset-0 bg-neon/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
            <div className="w-full h-[180%] transition-transform duration-[4s] ease-in-out transform group-hover:-translate-y-[40%]">
                {video ? (
                    <video 
                        src={video} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover object-top"
                        aria-label={`${title} - ${type} project preview`}
                    />
                ) : (
                    <img src={img} alt={`${title} - ${type} website by Costello Digital`} className="w-full h-full object-cover object-top" loading="lazy" />
                )}
            </div>
        </div>

        <div className="p-6 border-t border-ink/5 bg-white">
            <div className="mb-4">
                <h3 className="text-xl font-bold uppercase group-hover:text-ink transition-colors">{title}</h3>
                <p className="text-sm mt-1 font-mono text-ink/60 uppercase tracking-wide">{type}</p>
            </div>
            <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {caseStudyUrl && (
                    <Link 
                        to={caseStudyUrl}
                        className="flex-1 flex items-center justify-center gap-2 bg-neon text-ink py-2 px-4 text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-neon transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FileText size={14} />
                        <span>Case Study</span>
                    </Link>
                )}
                <a 
                    href={`https://${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-ink text-neon py-2 px-4 text-xs font-bold uppercase tracking-wider hover:bg-neon hover:text-ink transition-all"
                    onClick={(e) => e.stopPropagation()}
                >
                    <ExternalLink size={14} />
                    <span>View Site</span>
                </a>
            </div>
        </div>
    </div>
  </Reveal>
);

const Work = () => {
  return (
    <div className="min-h-screen bg-concrete pt-32">
      <SEO 
        title="Our Work | Web Design Portfolio Northern Ireland | Costello Digital"
        description="View our portfolio of websites built for businesses across Northern Ireland. E-commerce stores, service websites, and custom web solutions."
        canonical="/work"
        keywords={['web design portfolio ni', 'northern ireland websites', 'shopify store examples', 'web development work belfast']}
      />

      {/* Hero Section */}
      <section className="relative px-6 pb-20 border-b border-ink overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
          <Interactive3DBackground />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              Selected <br/>
              <span className="text-outline-white">Work</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-ink/80 font-light leading-relaxed max-w-3xl">
              A collection of websites we've built for businesses across various industries. From e-commerce to hospitality, each project is unique.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-20">
            <ProjectCard 
              title="Risper Styling" 
              type="Automotive E-Commerce" 
              url="risperstyling.com"
              img="/risper-styling-shopify-store-automotive-ecommerce.jpg"
              caseStudyUrl="/case-studies/risper-styling"
              delay={0}
            />
            <ProjectCard 
              title="Storm Xccessories" 
              type="4x4 Parts & Accessories" 
              url="4x4ni.com"
              img="/storm-xccessories-4x4-parts-shopify-store.jpg"
              caseStudyUrl="/case-studies/storm-xccessories"
              delay={200}
            />
            <ProjectCard 
              title="Ridge Alloys" 
              type="Alloy Wheels / Auto Parts" 
              url="ridgealloys.com"
              img="/ridge-alloys-wheels-auto-parts-shopify-store.jpg"
              caseStudyUrl="/case-studies/ridge-alloys"
              delay={0}
            />
            <ProjectCard 
              title="The Loft Castlerock" 
              type="Restaurant / Hospitality" 
              url="theloftcastlerock.co.uk"
              img="/the-loft-castlerock-restaurant-website.jpg"
              caseStudyUrl="/case-studies/the-loft-castlerock"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-ink text-concrete text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <Reveal width="100%">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Start Your <br/>
              <span className="text-neon">Project</span>
            </h2>
            <p className="text-stone-400 mb-12 text-xl max-w-2xl mx-auto">
              Ready to build something? Let's chat about your project.
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

export default Work;

