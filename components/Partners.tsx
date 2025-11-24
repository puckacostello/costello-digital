import React from 'react';
import { Reveal } from './UI/Reveal';

const PartnerLogo = ({ name, src }: { name: string; src: string }) => (
  <div className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <img src={src} alt={`${name} - Costello Digital Belfast Technology Partner`} className="h-10 md:h-12 w-auto object-contain" loading="lazy" />
  </div>
);

const Partners = () => {
  return (
    <section id="partners" className="py-12 sm:py-16 border-b border-ink bg-white overflow-hidden" aria-label="Technology Partners and Integrations">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal width="100%">
          <p className="text-center font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase opacity-50 mb-8 sm:mb-12">
            Working with the best in the ecosystem
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 items-center justify-items-center">
            
            {/* Shopify Partner */}
            <PartnerLogo name="Shopify Partner" src="/shopify-partner-logo.png" />

            {/* Google Partner */}
            <PartnerLogo name="Google Partner" src="/google-partner-badge-logo.png" />

            {/* WordPress */}
            <PartnerLogo name="WordPress" src="/wordpress-cms-platform-logo.png" />

            {/* WooCommerce */}
            <PartnerLogo name="WooCommerce" src="/woocommerce-ecommerce-platform-logo.jpg" />

            {/* Klaviyo */}
            <PartnerLogo name="Klaviyo" src="/klaviyo-email-marketing-platform-logo.png" />

            {/* Omnisend */}
            <PartnerLogo name="Omnisend" src="/omnisend-email-marketing-logo.png" />

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Partners;