import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

const Contact = () => {
  const ref = useFadeIn();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="pt-32 pb-16 sm:py-24 relative contact-ripple-bg scroll-mt-24" ref={ref}>
      <div className="ripple-container" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
          <div className="fade-up text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-xs text-[#00F0FF] font-bold shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              Get Started
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-fjalla uppercase mb-4 text-white leading-tight">Start Building Autonomous Workflows Today</h2>
            <p className="text-[#c0b8e8] mb-8 sm:mb-12 font-lobster text-lg opacity-90">Send us a message and see how ElyntisAI can transform your operations.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 mb-12 lg:mb-0">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center text-[#00F0FF] shrink-0 border border-[#7B61FF]/30 shadow-lg shadow-[#00F0FF]/5 relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-[#00F0FF]/50 group-hover:shadow-[#00F0FF]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#00F0FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <MapPin className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <h3 className="text-white font-fjalla text-xl uppercase tracking-wider mb-1 group-hover:text-[#00F0FF] transition-colors">Visit Us</h3>
                  <p className="text-[#c0b8e8] text-sm">525 Market St, San Francisco,<br/>CA 94105, United States</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center text-[#00F0FF] shrink-0 border border-[#7B61FF]/30 shadow-lg shadow-[#00F0FF]/5 relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-[#00F0FF]/50 group-hover:shadow-[#00F0FF]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#00F0FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <h3 className="text-white font-fjalla text-xl uppercase tracking-wider mb-1 group-hover:text-[#00F0FF] transition-colors">Call Us</h3>
                  <a href="tel:+14157492861" className="text-[#c0b8e8] text-sm hover:text-white transition-colors">+14157492861</a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center text-[#00F0FF] shrink-0 border border-[#7B61FF]/30 shadow-lg shadow-[#00F0FF]/5 relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-[#00F0FF]/50 group-hover:shadow-[#00F0FF]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#00F0FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Mail className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <h3 className="text-white font-fjalla text-xl uppercase tracking-wider mb-1 group-hover:text-[#00F0FF] transition-colors">Email Us</h3>
                  <a href="mailto:contact@elyntisai.com" className="text-[#c0b8e8] text-sm hover:text-white transition-colors">contact@elyntisai.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up relative z-10 lg:mt-0" style={{ transitionDelay: '200ms' }}>
            {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto p-12 bg-[#7B61FF]/10 backdrop-blur-xl rounded-2xl border border-[#00F0FF]/30 shadow-[#00F0FF]/10 shadow-xl animate-in zoom-in duration-300">
               <CheckCircle2 className="w-16 h-16 text-[#00F0FF] mb-2" />
               <h3 className="text-2xl font-fjalla uppercase text-white tracking-widest">Message Sent!</h3>
               <p className="text-[#c0b8e8]">Thank you for reaching out. Our team will get back to you shortly.</p>
               <Button 
                 onClick={() => setStatus('idle')} 
                 variant="outline" 
                 className="mt-6 border-[#7B61FF]/50 text-[#00F0FF] hover:bg-[#7B61FF]/10 hover:border-[#00F0FF] transition-all bg-transparent"
               >
                 Send Another Message
               </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xdapjwkz"
              method="POST"
              className="flex flex-col gap-5 max-w-md mx-auto px-4 py-8 sm:p-6 bg-[#7B61FF]/10 backdrop-blur-xl rounded-2xl border border-[#7B61FF]/30 shadow-xl relative"
            >
              {status === 'error' && (
                <div className="p-3 mb-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-semibold">
                  Oops! There was a problem submitting your form.
                </div>
              )}
              
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="text-sm font-semibold text-[#00F0FF] tracking-wider uppercase">Your email</label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  disabled={status === 'submitting'}
                  placeholder="Enter your email"
                  className="bg-black/20 border-[#7B61FF]/30 focus-visible:ring-[#00F0FF]/50 text-white placeholder:text-[#c0b8e8]/50 h-12"
                />
              </div>
              
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="message" className="text-sm font-semibold text-[#00F0FF] tracking-wider uppercase">Your message</label>
                <Textarea
                  name="message"
                  id="message"
                  required
                  disabled={status === 'submitting'}
                  placeholder="How can we help you?"
                  className="bg-black/20 border-[#7B61FF]/30 focus-visible:ring-[#00F0FF]/50 text-white placeholder:text-[#c0b8e8]/50 min-h-[120px] resize-none"
                />
              </div>

              <div className="flex justify-center my-2">
                <Turnstile 
                  siteKey="0x4AAAAAAC2LWV5PmrCfhMMn" 
                  options={{ 
                    theme: 'dark',
                    size: typeof window !== 'undefined' && window.innerWidth < 400 ? 'compact' : 'normal'
                  }}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] hover:opacity-90 text-white gap-2 h-14 rounded-xl shadow-lg hover:scale-[1.02] transition-all mt-2 text-lg font-fjalla tracking-wide disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>Send Message <ArrowRight size={20} /></>
                )}
              </Button>
            </form>
          )}

          <p className="text-[10px] font-mono font-bold text-[#00F0FF]/60 mt-6 uppercase tracking-widest">No credit card required • Free tier available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
