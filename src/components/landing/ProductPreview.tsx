import { Activity, Cpu, Clock, Zap } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

const Metric = ({ label, value, icon: Icon, color }: { label: string; value: string; icon: any; color: string }) => (
  <div className="p-4 rounded-xl bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/20 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <Icon className={`w-4 h-4 ${color}`} />
      <span className="text-[10px] font-mono font-bold text-[#00F0FF]/70 uppercase">{label}</span>
    </div>
    <span className="text-2xl font-bold font-mono text-white">{value}</span>
  </div>
);

const ProductPreview = () => {
  const ref = useFadeIn();

  return (
    <section id="platform" className="py-16 relative mesh-gradient-bg overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-xs text-[#00F0FF] font-bold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Platform
          </div>
          <h2 className="text-4xl sm:text-5xl font-fjalla uppercase mb-4 text-white">Command Center</h2>
          <p className="text-[#c0b8e8] max-w-xl mx-auto font-lobster text-lg">Full visibility into your AI agent ecosystem.</p>
        </div>

        <div className="fade-up rounded-3xl p-1 bg-gradient-to-br from-[#7B61FF]/40 to-[#00F0FF]/20 shadow-2xl">
          <div className="rounded-[22px] bg-[#0D0B1A]/80 backdrop-blur-2xl p-6 md:p-8 space-y-8 border border-[#7B61FF]/20">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#7B61FF]/20 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs font-mono font-bold text-[#00F0FF]/60">elyntisai.com/dashboard</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded-full flex items-center gap-2 border border-[#00F0FF]/20">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                LIVE SIMULATION
              </span>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Metric icon={Cpu} label="GPU USAGE" value="73%" color="text-[#00F0FF]" />
              <Metric icon={Clock} label="AVG LATENCY" value="12ms" color="text-[#7B61FF]" />
              <Metric icon={Activity} label="ACTIVE AGENTS" value="148" color="text-[#00F0FF]" />
              <Metric icon={Zap} label="EXEC / MIN" value="2.4K" color="text-[#7B61FF]" />
            </div>

            {/* Workflow Graph Mock */}
            <div className="rounded-2xl border border-[#7B61FF]/20 bg-[#7B61FF]/5 p-8 min-h-[300px] relative overflow-hidden shadow-inner">
              <span className="text-[10px] font-mono font-bold text-[#00F0FF]/60 absolute top-4 left-6 uppercase tracking-widest">WORKFLOW TOPOLOGY</span>
              <svg className="w-full h-48 mt-8" viewBox="0 0 600 150">
                <defs>
                  <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Nodes */}
                {[
                  { x: 80, y: 75, label: 'INPUT' },
                  { x: 230, y: 40, label: 'PROCESS' },
                  { x: 230, y: 110, label: 'ANALYZE' },
                  { x: 380, y: 75, label: 'DECIDE' },
                  { x: 520, y: 75, label: 'EXECUTE' },
                ].map((n, i) => (
                  <g key={i} className="group">
                    <rect x={n.x - 40} y={n.y - 18} width="80" height="36" rx="10" fill="url(#nodeGrad)" stroke="#7B61FF" strokeWidth="1" className="opacity-90 group-hover:opacity-100 transition-all cursor-pointer" />
                    <text x={n.x} y={n.y + 4} textAnchor="middle" className="text-[9px] fill-[#00F0FF] font-mono font-bold">{n.label}</text>
                  </g>
                ))}
                {/* Connections */}
                {[
                  'M120,75 L190,40', 'M120,75 L190,110',
                  'M270,40 L340,75', 'M270,110 L340,75',
                  'M420,75 L480,75',
                ].map((d, i) => (
                  <path key={i} d={d} fill="none" stroke="#7B61FF" strokeWidth="2" strokeDasharray="6 6" className="animate-flow opacity-30" style={{ animationDelay: `${i * 0.5}s` }} />
                ))}
              </svg>
              
              <div className="absolute bottom-4 right-6 flex items-center gap-4">
                 <div className="text-[9px] font-mono font-bold text-[#00F0FF]/60">NVIDIA GPU ACCELERATED</div>
                 <div className="w-4 h-4 rounded-full bg-[#00F0FF] blur-md animate-pulse" />
              </div>
            </div>

            <p className="text-[10px] font-mono font-bold text-center text-[#7B61FF]/40 uppercase tracking-tighter">Real-time Autonomous Decision Matrix • Version 2.0.4-beta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
