import { ArrowRight } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function TechnicalDiagram() {
  const ref = useFadeIn();

  return (
    <section id="architecture" className="py-16 relative architecture-bg overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16 fade-up">
        <p className="text-xs font-mono tracking-widest text-[#00F0FF] font-bold uppercase mb-3">Architecture</p>
        <h2 className="text-4xl sm:text-5xl font-fjalla uppercase mb-4 text-white">Powered by NVIDIA SDK Architecture</h2>
        <p className="text-[#c0b8e8] max-w-2xl mx-auto font-lobster text-lg">
          ElyntisAI leverages advanced GPU orchestration to facilitate parallel execution of autonomous agents across internal applications and external endpoints.
        </p>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 fade-up" style={{ transitionDelay: '200ms' }}>
        <div className="bg-[#7B61FF]/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-[#7B61FF]/20 relative overflow-hidden shadow-2xl">
          {/* Animated Flow Lines for Diagram */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
            <path d="M150,200 C300,200 400,300 550,150" fill="none" stroke="#7B61FF" strokeWidth="2" strokeDasharray="8 8" className="animate-flow" />
            <path d="M150,200 C300,200 400,100 550,250" fill="none" stroke="#00F0FF" strokeWidth="2" strokeDasharray="8 8" className="animate-flow" style={{ animationDelay: '0.5s' }} />
            <path d="M550,150 C700,0 800,200 950,100" fill="none" stroke="#7B61FF" strokeWidth="2" strokeDasharray="8 8" className="animate-flow" style={{ animationDelay: '1s' }} />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center relative z-10">
            {/* Left nodes (Integrations) */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-mono font-bold tracking-widest text-[#00F0FF] uppercase mb-8 border-b border-[#7B61FF]/20 pb-2">Data Sources & Apps</h3>
              {[
                { img: '/images/architecture/PostgreSQL _ Mongo.png', label: 'PostgreSQL / Mongo' },
                { img: '/images/architecture/External SaaS APIs.png', label: 'External SaaS APIs' },
                { img: '/images/architecture/Internal Services.png', label: 'Internal Services' }
              ].map((item, i) => (
                <div key={i} className="bg-[#7B61FF]/5 border border-[#7B61FF]/20 p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-[#00F0FF]/40 transition-all duration-300 shadow-sm group">
                  <img src={item.img} alt={item.label} className="w-full h-20 sm:h-24 object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Center Node (ElyntisAI Engine) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#00F0FF]/10 rounded-full blur-[80px] group-hover:from-[#7B61FF]/30 group-hover:to-[#00F0FF]/20 transition-all duration-700" />
              <div className="border-2 border-[#7B61FF]/40 bg-[#0D0B1A]/80 p-8 rounded-full aspect-square flex flex-col items-center justify-center shadow-[0_0_70px_rgba(123,97,255,0.4)] relative z-10 scale-110 md:scale-125 group-hover:border-[#00F0FF]/60 transition-all duration-500">
                 <img src="/images/architecture/ElyntisAI Engine.png" alt="ElyntisAI Engine" className="w-48 md:w-64 h-auto object-contain animate-float" />
                 <h4 className="font-poller text-[10px] md:text-sm text-white mt-3">ElyntisAI Engine</h4>
                 <p className="text-[8px] text-[#00F0FF] font-mono font-bold">GPU ACCELERATED</p>
              </div>
            </div>

            {/* Right nodes (Agents/Actions) */}
            <div className="space-y-6">
               <h3 className="text-[10px] font-mono font-bold tracking-widest text-[#00F0FF] uppercase mb-8 border-b border-[#7B61FF]/20 pb-2">Autonomous Action</h3>
               {[
                 { img: '/images/architecture/Agent Executions via LLMs.png', label: 'Agent Executions via LLMs' },
                 { img: '/images/architecture/Real-time Analytics.png', label: 'Real-time Analytics' },
                 { img: '/images/architecture/Workflow Triggers.png', label: 'Workflow Triggers' }
               ].map((item, i) => (
                 <div key={i} className="bg-[#7B61FF]/5 border border-[#7B61FF]/20 p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-[#00F0FF]/40 transition-all duration-300 shadow-sm group">
                   <img src={item.img} alt={item.label} className="w-full h-20 sm:h-24 object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform" />
                   <span className="text-[10px] sm:text-xs font-bold text-white text-center uppercase tracking-wider">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
