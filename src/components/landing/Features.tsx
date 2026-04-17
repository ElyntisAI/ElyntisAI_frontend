import { useFadeIn } from '@/hooks/useFadeIn';

const features = [
  { img: '/images/cap/Autonomous AI Agents.png', title: 'Autonomous AI Agents', desc: 'Self-directed agents that interpret context and execute complex tasks without human intervention.' },
  { img: '/images/cap/Multi-App Workflow Automation.png', title: 'Multi-App Workflow Automation', desc: 'Orchestrate actions across multiple applications, APIs, and services in a single workflow.' },
  { img: '/images/cap/Intelligent Decision Engine.png', title: 'Intelligent Decision Engine', desc: 'Context-aware reasoning that adapts agent behavior based on real-time data and objectives.' },
  { img: '/images/cap/Real-Time Monitoring Dashboard.png', title: 'Real-Time Monitoring Dashboard', desc: 'Live telemetry, execution logs, and performance metrics across all active agents.' },
  { img: '/images/cap/API & System Integrations.png', title: 'API & System Integrations', desc: 'Native connectors for CRMs, databases, cloud services, and custom REST/GraphQL endpoints.' },
  { img: '/images/cap/Continuous Learning & Optimization.png', title: 'Continuous Learning & Optimization', desc: 'Agents improve over time through feedback loops and automated workflow refinement.' },
];

const Features = () => {
  const ref = useFadeIn();

  return (
    <section id="features" className="py-16 relative geometric-bg overflow-hidden scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs font-mono tracking-widest text-[#00F0FF] font-bold uppercase mb-3">Capabilities</p>
          <h2 className="text-4xl sm:text-5xl font-fjalla uppercase mb-4 text-white">Core Platform Features</h2>
          <p className="text-[#c0b8e8] max-w-xl mx-auto font-lobster text-lg">Enterprise-grade infrastructure for building and deploying intelligent AI agents.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className={`p-8 rounded-3xl bg-[#7B61FF]/5 backdrop-blur-md border border-[#7B61FF]/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-[#00F0FF]/40 transition-all duration-300 scale-up delay-${(i + 1) * 100}`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B61FF]/20 to-[#00F0FF]/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                <img src={feature.img} alt={feature.title} className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-fjalla uppercase mb-3 text-white">{feature.title}</h3>
              <p className="text-[#c0b8e8] leading-relaxed font-lobster text-justify">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
