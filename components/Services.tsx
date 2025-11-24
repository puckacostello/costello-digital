import React from 'react';
import { ShoppingCart, Database, Globe, Layers, CalendarCheck, LineChart, Code2 } from 'lucide-react';
import { Reveal } from './UI/Reveal';

const ServiceCard = ({ title, description, icon: Icon, delay }: { title: string; description: string; icon: any, delay: number }) => (
    <Reveal delay={delay}>
        <div className="border-r border-b border-ink p-8 md:p-12 hover:bg-white transition-colors relative group h-full overflow-hidden bg-concrete">
            <div className="absolute top-0 left-0 w-full h-1 bg-neon scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="mb-8 flex justify-between items-start">
            <Icon size={32} strokeWidth={1.5} className="group-hover:text-ink transition-colors" />
            <span className="font-mono text-xs border border-ink px-2 py-1 rounded-full group-hover:bg-neon group-hover:border-neon group-hover:text-ink transition-colors font-bold">AVAILABLE</span>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 group-hover:translate-x-1 transition-transform">{title}</h3>
            <p className="text-ink/70 leading-relaxed">{description}</p>
        </div>
    </Reveal>
);

const Services = () => {
  return (
    <section id="services" className="border-b border-ink w-full" aria-label="Our Shopify Development Services">
        <div className="flex flex-col md:grid md:grid-cols-3 w-full">
            <div className="w-full md:col-span-1 md:border-r border-ink p-6 sm:p-8 md:p-12 bg-white text-ink flex flex-col gap-8 md:justify-between relative overflow-hidden border-b md:border-b-0 min-w-full">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div>
                    <Reveal fullHeight={false} width="100%">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6">What We<br/>Do</h2>
                    </Reveal>
                    <Reveal delay={200} fullHeight={false} width="100%">
                        <p className="font-mono text-sm opacity-70 leading-relaxed">
                            From online stores to service websites, we build digital solutions that work for your business. No matter what platform makes the most sense.
                        </p>
                    </Reveal>
                </div>
                <div className="mt-12 flex justify-center">
                    <Reveal delay={400} fullHeight={false} width="100%">
                        {/* Added padding wrapper to prevent clipping during rotation */}
                        <div className="p-8 flex justify-center">
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 border-2 border-ink flex items-center justify-center animate-spin-slow bg-neon text-ink"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Code2 size={20} />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="w-full md:col-span-2 grid md:grid-cols-2">
                <ServiceCard 
                    title="Online Stores"  
                    description="E-commerce websites built on Shopify, WooCommerce, or WordPress. We choose the right platform for your products and budget."
                    icon={ShoppingCart}
                    delay={100}
                />
                <ServiceCard 
                    title="Custom Features" 
                    description="Can't find an app? We create custom tools to solve specific business problems, from product options to shipping rules."
                    icon={Database}
                    delay={200}
                />
                <ServiceCard 
                    title="Service Websites" 
                    description="Professional websites for restaurants, tradespeople, consultants, and service businesses. Simple, effective, and easy to update."
                    icon={Globe}
                    delay={300}
                />
                <ServiceCard 
                    title="Booking Systems" 
                    description="Perfect for restaurants, salons, and hotels. We integrate seamless reservation tools that sync with your calendar."
                    icon={CalendarCheck}
                    delay={400}
                />
                 <ServiceCard 
                    title="Automation" 
                    description="Connect your website to accounting, inventory, or shipping systems so everything runs automatically."
                    icon={Layers}
                    delay={500}
                />
                <ServiceCard 
                    title="SEO & Growth" 
                    description="We build with search engines in mind. Clean code and fast load times help you rank higher organically."
                    icon={LineChart}
                    delay={600}
                />
            </div>
        </div>
      </section>
  );
};

export default Services;