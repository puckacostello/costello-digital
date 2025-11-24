import React from 'react';
import { Cpu, Tag, Zap } from 'lucide-react';
import { Reveal } from './UI/Reveal';

const AppCard = ({ title, description, users, icon: Icon, link, preview, appIcon, delay }: { title: string; description: string; users: string; icon: any, link?: string, preview?: string, appIcon?: string, delay: number }) => (
    <Reveal delay={delay} width="100%">
        <div className="bg-ink text-concrete relative overflow-hidden group border border-ink/10 hover:border-neon/50 transition-all h-full min-h-[400px]">
            {/* Preview Image Background */}
            {preview && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img src={preview} alt={`${title} - Custom Shopify app interface preview`} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/95 to-ink/70"></div>
                </div>
            )}
            
            {/* Neon Glow Effect */}
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-neon/20 blur-[50px] rounded-full group-hover:bg-neon/30 transition-all"></div>
            
            <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
                <div className="flex justify-between items-start mb-6">
                    {appIcon ? (
                        <div className="relative">
                            <img 
                                src={appIcon} 
                                alt={`${title} App Icon`}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg ring-2 ring-white/10 group-hover:ring-neon/50 group-hover:scale-105 transition-all object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                        </div>
                    ) : (
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon/50 transition-colors">
                            <Icon className="text-neon" size={24} />
                        </div>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="text-xs font-mono border border-white/20 px-3 py-1.5 rounded text-neon hover:bg-neon hover:text-ink transition-colors">
                            VIEW ON SHOPIFY APP STORE
                        </a>
                    )}
                </div>
                
                <h3 className="text-2xl font-bold uppercase mb-3 leading-none group-hover:text-neon transition-colors">{title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed mb-8 flex-grow">{description}</p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
                    <span className="text-xs font-mono tracking-widest uppercase text-stone-300">{users}</span>
                </div>
            </div>
        </div>
    </Reveal>
);

const Apps = () => {
  return (
      <section id="apps" className="bg-concrete py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-b border-ink relative" aria-label="Custom Shopify Apps and Software Solutions">
         <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 gap-6">
                <div className="overflow-visible">
                    <Reveal>
                        <span className="text-ink/50 font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase mb-2 block">Proprietary Software</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter pr-4">
                            Custom <span className="text-outline-white">Apps</span>
                        </h2>
                    </Reveal>
                </div>
                <Reveal delay={200}>
                    <p className="text-ink/70 max-w-md text-xs sm:text-sm font-mono">
                        Beyond standard themes, we engineer custom apps that solve complex business problems for merchants across Northern Ireland and the UK.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-1">
                <AppCard 
                    title="Vehicle Reg Lookup"
                    description="Advanced Shopify integration allowing customers to search for parts by vehicle registration. Boosts conversion for auto parts stores."
                    users="Shopify App Store"
                    icon={Cpu}
                    link="https://apps.shopify.com/vehicle-search-with-reg-lookup"
                    preview="/vehicle-reg-lookup-shopify-app-auto-parts.jpg"
                    appIcon="/vehicle-reg-lookup-app-icon.jpeg"
                    delay={0}
                />
                <AppCard 
                    title="PL8M8 Studio"
                    description="A visual builder for custom number plates (3D/4D gel). Allows real-time preview and regulatory compliance checks."
                    users="Custom Private App"
                    icon={Tag}
                    preview="/pl8m8-studio-number-plate-builder-shopify-app.png"
                    appIcon="/pl8m8-studio-app-icon.jpg"
                    delay={200}
                />
                <AppCard 
                    title="VAT Switcher"
                    description="Dynamic global header widget allowing B2B/B2C customers to toggle prices between Inc-VAT and Ex-VAT across the entire store."
                    users="Store Utility"
                    icon={Zap}
                    appIcon="/v-switch-vat-app-icon.jpeg"
                    delay={400}
                />
            </div>
         </div>
      </section>
  );
};

export default Apps;