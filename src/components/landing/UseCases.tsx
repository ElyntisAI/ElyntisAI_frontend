import { useFadeIn } from '@/hooks/useFadeIn';

const cases = [
  {
    title: 'Business Process Automation',
    problem: 'Manual, repetitive workflows consuming team bandwidth.',
    solution: 'AI agents automate end-to-end business processes autonomously.',
    outcome: '80% reduction in manual task execution time.',
    img: '/images/use/Business Process Automation.png',
    colorGrad: 'from-[#7B61FF] to-transparent',
    textColor: 'text-[#7B61FF]'
  },
  {
    title: 'AI Operations Assistants',
    problem: 'Complex operational decisions requiring constant oversight.',
    solution: 'Intelligent agents monitor systems and execute corrective actions.',
    outcome: 'Always-on operational intelligence with zero downtime.',
    img: '/images/use/AI Operations Assistants.png',
    colorGrad: 'from-[#00F0FF] to-transparent',
    textColor: 'text-[#00F0FF]'
  },
  {
    title: 'Customer Support Automation',
    problem: 'High ticket volumes with slow resolution times.',
    solution: 'Agents handle inquiries, escalate intelligently, resolve autonomously.',
    outcome: '60% faster ticket resolution, 24/7 availability.',
    img: '/images/use/Customer Support Automation.png',
    colorGrad: 'from-[#7B61FF] to-[#00F0FF]',
    textColor: 'text-[#00F0FF]'
  },
  {
    title: 'Data Analysis & Reporting',
    problem: 'Siloed data requiring manual aggregation and analysis.',
    solution: 'Agents collect, process, and generate actionable reports in real-time.',
    outcome: 'Instant insights from unified data pipelines.',
    img: '/images/use/Data Analysis & Reporting.png',
    colorGrad: 'from-[#00F0FF] to-[#7B61FF]',
    textColor: 'text-[#7B61FF]'
  },
  {
    title: 'DevOps & System Automation',
    problem: 'Infrastructure management requiring constant human intervention.',
    solution: 'Agents monitor, scale, and remediate infrastructure issues.',
    outcome: 'Self-healing systems with intelligent resource allocation.',
    img: '/images/use/DevOps & System Automation.png',
    colorGrad: 'from-[#7B61FF] to-[#00F0FF]',
    textColor: 'text-[#7B61FF]'
  },
  {
    title: 'Enterprise Orchestration',
    problem: 'Disconnected tools and processes across departments.',
    solution: 'Agents orchestrate cross-functional workflows across platforms.',
    outcome: 'Unified workflow execution across the entire organization.',
    img: '/images/use/Enterprise Orchestration.png',
    colorGrad: 'from-[#00F0FF] to-[#7B61FF]',
    textColor: 'text-[#00F0FF]'
  },
];

const UseCases = () => {
  const ref = useFadeIn();

  return (
    <section id="use-cases" className="py-16 relative wave-bg overflow-hidden scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-xs text-[#00F0FF] font-bold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Applications
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-fjalla uppercase mb-6 text-white">
            Intelligent <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-lg text-[#c0b8e8] max-w-2xl mx-auto leading-relaxed font-lobster">
            Discover how enterprise teams are leveraging ElyntisAI's autonomous agents to eliminate manual labor and drive unprecedented efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="fade-up group relative p-[1px] rounded-2xl bg-gradient-to-b from-[#7B61FF]/30 to-transparent hover:from-[#00F0FF]/30 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-full bg-[#0D0B1A]/80 backdrop-blur-xl p-8 rounded-[15px] flex flex-col gap-8 group-hover:bg-[#0D0B1A]/60 transition-colors duration-500">
                {/* Header Section */}
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-xl bg-[#7B61FF]/10 border border-[#7B61FF]/20 shadow-sm relative overflow-hidden group-hover:border-[#00F0FF]/40 transition-colors flex items-center justify-center w-20 h-20">
                     <div className={`absolute inset-0 bg-gradient-to-br opacity-20 ${c.colorGrad}`} />
                     <img src={c.img} alt={c.title} className="w-12 h-12 relative z-10 object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-poller tracking-tight text-white leading-tight">
                    {c.title}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="space-y-6 flex-grow flex flex-col justify-between text-[#c0b8e8]">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase mb-2 block opacity-70 text-[#00F0FF]">The Problem</span>
                    <p className="text-sm font-medium leading-relaxed">{c.problem}</p>
                  </div>
                  
                  <div className="relative pl-4 border-l-2 border-[#7B61FF]/30 group-hover:border-[#7B61FF] transition-colors">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#7B61FF] uppercase mb-2 block">Our Solution</span>
                    <p className="text-[15px] leading-relaxed font-medium">{c.solution}</p>
                  </div>

                  <div className="relative pl-4 border-l-2 border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-colors bg-[#00F0FF]/5 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                       <span className="text-[10px] font-mono font-bold tracking-widest text-[#00F0FF] uppercase">Result</span>
                    </div>
                    <p className="text-sm font-bold leading-relaxed text-white">{c.outcome}</p>
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

export default UseCases;
