import React from 'react';
import { ArrowDownRight, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './UI/Reveal';

const ProjectCard = ({ title, type, url, img, video, caseStudyUrl, delay }: { title: string; type: string; url: string; img?: string; video?: string; caseStudyUrl?: string; delay: number }) => (
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
                    <img src={img} alt={`${title} - ${type} Shopify store design and development by Costello Digital Belfast`} className="w-full h-full object-cover object-top" loading="lazy" />
                )}
            </div>
        </div>

        <div className="p-6 border-t border-ink/5 bg-white">
            <div className="mb-4">
                <h4 className="text-xl font-bold uppercase group-hover:text-ink transition-colors">{title}</h4>
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
    <section id="work" className="py-24 px-6 bg-white border-b border-ink" aria-label="Featured Shopify Projects and Client Work">
        <div className="container mx-auto">
            <div className="flex justify-between items-end mb-12 sm:mb-16">
                <Reveal>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">Selected<br/>Work</h2>
                </Reveal>
                <Reveal delay={200}>
                    <div className="flex items-center gap-2">
                        <div className="h-[1px] w-8 sm:w-12 bg-ink"></div>
                        <span className="font-mono text-base sm:text-xl">(04)</span>
                    </div>
                </Reveal>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-20">
                <ProjectCard 
                    title="Risper Styling" 
                    type="Automotive E-Commerce" 
                    url="risperstyling.com"
                    img="/risper-styling-shopify-store-automotive-ecommerce.png"
                    caseStudyUrl="/case-studies/risper-styling"
                    delay={0}
                />
                <ProjectCard 
                    title="Storm Xccessories" 
                    type="Automotive Accessories" 
                    url="4x4ni.com"
                    img="/storm-xccessories-4x4-parts-shopify-store.png"
                    caseStudyUrl="/case-studies/storm-xccessories"
                    delay={200}
                />
                <ProjectCard 
                    title="Ridge Alloys" 
                    type="Alloy Wheels / Auto Parts" 
                    url="ridgealloys.com"
                    img="/ridge-alloys-wheels-auto-parts-shopify-store.png"
                    caseStudyUrl="/case-studies/ridge-alloys"
                    delay={0}
                />
                <ProjectCard 
                    title="The Loft Castlerock" 
                    type="Hospitality / Service" 
                    url="theloftcastlerock.co.uk"
                    img="/the-loft-castlerock-restaurant-website.png"
                    caseStudyUrl="/case-studies/the-loft-castlerock"
                    delay={0}
                />
            </div>
        </div>
    </section>
  );
};

export default Work;