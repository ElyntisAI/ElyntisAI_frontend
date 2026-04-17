import { Quote } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

const steps = [
  { img: '/images/how/Create Agent.png', title: 'Create Agent', desc: 'Define goals, tasks, and autonomous workflows for your AI agents.' },
  { img: '/images/how/Connect Systems.png', title: 'Connect Systems', desc: 'Integrate APIs, CRMs, databases, and tools into a unified pipeline.' },
  { img: '/images/how/AI Execution.png', title: 'AI Execution', desc: 'Agents analyze context, make decisions, and execute multi-step actions.' },
  { img: '/images/how/Monitor & Optimize.png', title: 'Monitor & Optimize', desc: 'Track agent performance, refine workflows, and improve outcomes.' },
];

const HowItWorks = () => {
  const ref = useFadeIn();

  return (
    <section id="product" className="py-16 relative mesh-gradient-bg overflow-hidden scroll-mt-24" ref={ref}>
      {/* Decorative Quote Icon */}
      <div className="absolute top-12 right-12 opacity-10 transform rotate-12 pointer-events-none">
        <Quote size={120} className="text-[#7B61FF]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-xs text-[#00F0FF] font-bold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-fjalla uppercase mb-4 text-white">How It Works</h2>
          <p className="text-[#c0b8e8] max-w-xl mx-auto font-lobster text-lg">From agent creation to autonomous execution in four simple steps.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-px bg-[#7B61FF] opacity-10" />
            <svg className="absolute inset-0 w-full h-1" viewBox="0 0 800 4">
              <line x1="0" y1="2" x2="800" y2="2" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="6 6" className="animate-flow" />
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#00F0FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((s, i) => (
            <div key={i} className="fade-up flex flex-col items-center text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-32 h-32 rounded-2xl bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 flex items-center justify-center mb-6 relative group hover:bg-[#7B61FF]/20 hover:border-[#00F0FF]/40 transition-all duration-300 shadow-sm hover:shadow-lg">
                <img src={s.img} alt={s.title} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" />
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00F0FF] text-xs font-mono text-white flex items-center justify-center border-2 border-[#0D0B1A]">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-poller text-white mb-3">{s.title}</h3>
              <p className="text-sm text-[#c0b8e8] leading-relaxed font-medium px-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
