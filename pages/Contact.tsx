import React, { useState } from 'react';
import { Send, Mail, MapPin, Clock, Check } from 'lucide-react';
import { Reveal } from '../components/UI/Reveal';
import Interactive3DBackground from '../components/UI/Interactive3DBackground';
import SEO from '../components/SEO';

const OBJECTIVES = [
    { id: 'new', label: 'New Website', desc: 'I need a new online store' },
    { id: 'improve', label: 'Improve Existing', desc: 'Make my current site better' },
    { id: 'help', label: 'Ongoing Help', desc: 'Support and maintenance' },
];

const Contact = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const toggleSelection = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const objectives = selected.map(s => OBJECTIVES.find(o => o.id === s)?.label).join(', ');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          projectType: objectives,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', budget: '', timeline: '', message: '' });
        setSelected([]);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-concrete">
      <SEO 
        title="Contact Costello Digital | Web Design & Shopify Development Belfast"
        description="Start your project with Northern Ireland's leading e-commerce agency. Based in Belfast, we offer free consultations for Shopify, web design, and app development projects across NI."
        canonical="/contact"
        keywords={['contact web design belfast', 'shopify consultation ni', 'web development quote belfast', 'ecommerce agency northern ireland']}
      />
      {/* Hero */}
      <section className="relative px-6 pb-20 border-b border-ink overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
          <Interactive3DBackground />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              Get In <br/>
              <span className="text-outline-white hover:text-neon transition-colors duration-500 cursor-default">Touch</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-ink/80 font-light leading-relaxed max-w-3xl">
              Have a project in mind? Let's discuss it and see if we're a good fit to work together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selectors + Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start justify-center">
            
            {/* Left: What do you need? */}
            <div className="lg:w-1/2 w-full lg:max-w-lg">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                  What Do You <span className="bg-ink text-neon px-3 py-1 inline-block">Need?</span>
                </h2>
                <p className="text-ink/80 font-mono text-xs sm:text-sm mb-8 max-w-lg">
                  Select what best describes your project. This helps us understand how we can help you.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mb-8">
                  <p className="text-ink/70 font-mono text-xs uppercase tracking-wider mb-4 font-bold">Select Options (Optional)</p>
                  <div className="grid grid-cols-1 gap-3">
                    {OBJECTIVES.map((obj) => {
                      const isSelected = selected.includes(obj.id);
                      return (
                        <button
                          key={obj.id}
                          type="button"
                          onClick={() => toggleSelection(obj.id)}
                          className={`group relative p-4 border text-left transition-all duration-300 ${
                            isSelected 
                            ? 'bg-ink border-ink text-neon shadow-[3px_3px_0px_0px_#CCFF00]' 
                            : 'bg-white border-ink/20 text-ink hover:border-ink'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 flex-shrink-0 rounded-full border-2 border-current flex items-center justify-center transition-colors ${isSelected ? 'bg-neon text-ink' : 'bg-transparent'}`}>
                              {isSelected && <Check size={12} strokeWidth={4} />}
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight mb-1">{obj.label}</h3>
                              <p className={`text-xs font-mono ${isSelected ? 'text-neon/80' : 'text-ink/70'}`}>
                                {obj.desc}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              {/* Contact Info Below */}
              <Reveal delay={400}>
                <div className="space-y-4 pt-8 border-t border-ink/10">
                  <div className="flex gap-3 items-start">
                    <Mail className="text-ink/70 flex-shrink-0 mt-1" size={16} />
                    <div>
                      <h3 className="font-bold uppercase text-xs mb-1">Email</h3>
                      <a href="mailto:hello@costellodigital.com" className="text-ink/70 hover:text-neon transition-colors font-mono text-xs">
                        hello@costellodigital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className="text-ink/70 flex-shrink-0 mt-1" size={16} />
                    <div>
                      <h3 className="font-bold uppercase text-xs mb-1">Response Time</h3>
                      <p className="text-ink/70 font-mono text-xs">
                        {'<'} 24 Hours
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2 w-full lg:max-w-lg">
              <Reveal delay={300}>
                <form onSubmit={handleSubmit} className="bg-white border border-ink p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(5,5,5,1)] relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-ink"></div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-8">
                    Your Details
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors"
                      >
                        <option value="">Select budget</option>
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k+">$50k+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2months">1-2 Months</option>
                        <option value="3-6months">3-6 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors resize-none"
                      placeholder="I need help with..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-between bg-ink text-white py-4 px-6 text-sm font-bold uppercase tracking-widest hover:bg-neon hover:text-ink transition-all group mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="text-neon text-sm font-mono text-center mt-4">
                      ✓ Message sent! We'll get back to you within 24 hours.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm font-mono text-center mt-4">
                      ✗ Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

