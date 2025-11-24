import React, { useState } from 'react';
import { ArrowRight, Check, Terminal, Send } from 'lucide-react';
import { Reveal } from './UI/Reveal';

const OBJECTIVES = [
    { id: 'new', label: 'New Website', desc: 'I need a new online store' },
    { id: 'improve', label: 'Improve Existing', desc: 'Make my current site better' },
    { id: 'help', label: 'Ongoing Help', desc: 'Support and maintenance' },
];

const Engagement = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleSelection = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

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
          message: formData.message,
          projectType: objectives,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
    <section id="contact" className="bg-concrete pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 border-b border-ink relative" aria-label="Start Your Project - Contact Form">
        {/* Background Grid Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.03] overflow-hidden" 
             style={{ backgroundImage: 'linear-gradient(#050505 1px, transparent 1px), linear-gradient(90deg, #050505 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start">
                
                {/* Left: Selection Interface */}
                <div className="lg:w-2/3 w-full">
                    <Reveal>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            Let's Talk <br/><span className="text-outline-white">About Your Project</span>
                        </h2>
                        <p className="text-ink/80 font-mono text-xs sm:text-sm mb-8 sm:mb-12 max-w-lg">
                            Tell us what you need. We'll get back to you within 24 hours with a plan.
                        </p>
                    </Reveal>

                    <Reveal delay={200} width="100%">
                        <div className="mb-8">
                            <p className="text-ink/70 font-mono text-xs uppercase tracking-wider mb-4 font-bold">What do you need? (Optional)</p>
                            <div className="grid grid-cols-1 gap-3">
                                {OBJECTIVES.map((obj) => {
                                    const isSelected = selected.includes(obj.id);
                                    return (
                                        <button
                                            key={obj.id}
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
                </div>

                {/* Right: Contact Form */}
                <div className="lg:w-1/3 w-full">
                    <Reveal delay={400} width="100%">
                        <form onSubmit={handleSubmit} className="bg-white border border-ink p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(5,5,5,1)] sm:shadow-[8px_8px_0px_0px_rgba(5,5,5,1)] relative">
                             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-ink"></div>
                             
                             <div className="flex items-center gap-2 mb-6 border-b border-ink/10 pb-4">
                                <Send size={18} className="text-ink/70" />
                                <span className="font-mono text-xs uppercase tracking-widest text-ink/70 font-bold">Contact Form</span>
                             </div>

                             <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors placeholder:text-ink/40"
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
                                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors placeholder:text-ink/40"
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
                                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors placeholder:text-ink/40"
                                        placeholder="(Optional)"
                                    />
                                </div>

                                <div>
                                    <label className="block font-mono text-xs uppercase tracking-wider text-ink/80 mb-2 font-bold">
                                        Tell us about your project *
                                    </label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm transition-colors resize-none placeholder:text-ink/40"
                                        placeholder="I need help with..."
                                    />
                                </div>
                             </div>

                             <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-between bg-ink text-white py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest hover:bg-neon hover:text-ink transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                             >
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                             </button>
                             
                             {submitStatus === 'success' && (
                                <p className="text-neon text-xs font-mono text-center mt-4">
                                    ✓ Message sent! We'll get back to you within 24 hours.
                                </p>
                             )}
                             
                             {submitStatus === 'error' && (
                                <p className="text-red-500 text-xs font-mono text-center mt-4">
                                    ✗ Something went wrong. Please try again or email us directly.
                                </p>
                             )}
                             
                             {submitStatus === 'idle' && (
                                <p className="text-center text-[9px] sm:text-[10px] font-mono uppercase text-ink/60 mt-4">
                                    Response time: &lt; 24 Hours
                                </p>
                             )}
                        </form>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Engagement;