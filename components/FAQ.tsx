import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './UI/Reveal';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-ink/10 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 px-4 text-left group hover:bg-black transition-colors duration-300"
      >
        <span className="text-lg font-bold uppercase group-hover:text-neon transition-colors">{question}</span>
        {isOpen ? <Minus className="text-neon" /> : <Plus className="group-hover:text-neon transition-colors" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-ink/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
      <section id="faq" className="py-24 px-6 bg-concrete" aria-label="Frequently Asked Questions about Shopify Development">
        <div className="container mx-auto max-w-4xl">
            <div className="mb-12 text-center">
                <Reveal>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Common Questions</h2>
                    <p className="text-ink/60 font-mono">Everything you need to know about working with us.</p>
                </Reveal>
            </div>
            
            <div className="space-y-2">
                <Reveal delay={100}>
                    <FAQItem 
                        question="How long does a new website take?" 
                        answer="Typically, a custom Shopify store takes between 4-8 weeks from start to finish. This depends on the complexity of the design and any custom features you might need." 
                    />
                </Reveal>
                <Reveal delay={200}>
                    <FAQItem 
                        question="Can you migrate me from WordPress/Wix?" 
                        answer="Absolutely. We specialize in migrations. We ensure all your products, customers, and order history are safely moved over to Shopify without losing SEO rankings." 
                    />
                </Reveal>
                <Reveal delay={300}>
                    <FAQItem 
                        question="Do I need to know how to code?" 
                        answer="Not at all. We build everything so it's easy for you to edit text, images, and products yourself. We provide full training before we hand over the keys." 
                    />
                </Reveal>
                <Reveal delay={400}>
                    <FAQItem 
                        question="Do you offer ongoing support?" 
                        answer="Yes, we offer monthly retainer packages for businesses that want regular updates, new features, or just peace of mind knowing an expert is handling their tech." 
                    />
                </Reveal>
            </div>
        </div>
      </section>
  );
};

export default FAQ;