import { Star } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

const testimonials = [
  {
    quote: "As someone who builds and maintains automation systems, I’ve always struggled with the limitations of traditional tools. They’re powerful, but brittle—one change in logic, and everything breaks. ElyntisAI changed that paradigm completely. The agents are not just executing predefined steps—they’re interpreting data, adapting to conditions, and optimizing workflows dynamically. I’ve built agents that interact with APIs and trigger multi-layered workflows—all without constant supervision.",
    author: "Jerom Wings",
    role: "Senior Automation Engineer",
    company: "Tech Innovators",
    avatar: "/images/testi/G1.png",
  },
  {
    quote: "In a fast-scaling startup, time and efficiency are everything. We didn’t have the luxury of hiring large operational teams, so we turned to ElyntisAI to bridge that gap. Within weeks, we deployed AI agents to manage lead processing, customer communication triggers, and internal reporting. What surprised us most was how seamlessly these agents operated across different tools without needing constant adjustments. Processes that once required daily attention now run intelligently in the background.",
    author: "William Jones",
    role: "Founder",
    company: "Fast-Growing Startup",
    avatar: "/images/testi/B1.png",
  },
  {
    quote: "One of the biggest challenges in product operations is coordinating workflows across multiple systems—analytics tools, CRMs, communication platforms, and more. ElyntisAI simplified this complexity by introducing agents that connect and operate across all these layers simultaneously. Instead of managing integrations manually, we now rely on agents that understand workflows holistically. We spend less time managing processes and more time improving the product itself.",
    author: "Ismail Khan",
    role: "Product Manager",
    company: "Tech-Driven Company",
    avatar: "/images/testi/M5.png",
  },
  {
    quote: "From a technical perspective, ElyntisAI stands out because of its architecture. The platform isn’t just automation—it’s a compute-driven AI execution environment capable of handling complex, multi-system workflows. The integration with GPU-powered processing and real-time monitoring gives us confidence in both performance and scalability. We’re running high-volume operations through AI agents without compromising reliability.",
    author: "Dickson James",
    role: "CTO",
    company: "Enterprise Technology Firm",
    avatar: "/images/testi/M6.png",
  }
];

const Testimonials = () => {
  const ref = useFadeIn();

  return (
    <section id="testimonials" className="py-10 md:py-12 relative wave-bg overflow-hidden scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-xs text-[#00F0FF] font-bold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Enterprise Approved
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-fjalla uppercase mb-4 text-white">Trusted by AI Leaders</h2>
          <p className="text-[#c0b8e8] max-w-xl mx-auto font-lobster text-lg">See how top engineering teams are transforming their workflows with our autonomous AI platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="fade-up group relative p-5 md:p-6 rounded-3xl bg-[#7B61FF]/5 backdrop-blur-md border border-[#7B61FF]/20 flex flex-col h-full transition-all duration-500 shadow-sm hover:shadow-xl hover:bg-[#7B61FF]/10 hover:border-[#00F0FF]/40"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-6 text-[#00F0FF]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="text-[#e0d8ff] text-sm sm:text-base text-justify leading-relaxed flex-grow mb-5 font-bodoni italic">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-auto pt-4 border-t border-[#7B61FF]/20 flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border-2 border-[#7B61FF]/40 shadow-md" />
                <div>
                  {t.author && <div className="font-lobster text-lg text-white mb-0.5">{t.author}</div>}
                  <div className="text-sm font-corsiva text-[#c0b8e8]">
                    {t.role} <span className="text-[#00F0FF] font-sans text-[10px] font-bold uppercase tracking-wider">@ {t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
