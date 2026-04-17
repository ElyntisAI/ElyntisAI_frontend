import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

/**
 * ElyntisAI - Autonomous AI Agent Platform
 * Infrastructure: NVIDIA NeMo, TensorRT, Triton Inference Server
 * Cloud: AWS P4 (A100/H100)
 * Palette: Electric Purple (#7B61FF), Neon Cyan (#00F0FF), Deep Space (#020617)
 */

const ElyntisPlatform: React.FC = () => {
  // Refs for scroll animations
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-[#00F0FF] selection:text-black antialiased overflow-x-hidden">
      
      {/* Global style for scroll animations and keyframes */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
        @keyframes borderGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .section-hidden { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1); }
        .section-visible { opacity: 1; transform: translateY(0); }
        .gradient-border-animate {
          background: linear-gradient(90deg, #7B61FF, #00F0FF, #7B61FF);
          background-size: 200% auto;
          animation: borderGradient 3s linear infinite;
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(123, 97, 255, 0.5);
        }
      `}</style>

      {/* 1. NAVIGATION - Removed Pricing and Contact as requested */}
      <Navbar />

      {/* 2. HERO: AUTONOMOUS AGENT ORCHESTRATION - Enhanced with more animation */}
      <section ref={(el) => addToRefs(el, 0)} className="section-hidden relative pt-28 pb-32 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#7B61FF]/30 bg-[#7B61FF]/10 text-[#00F0FF] text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              Neural Core V4.0 · Active
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8">
              The Next-Gen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#00F0FF] to-white animate-pulse">
                AI Agent Platform
              </span>
            </h1>
            <p className="max-w-md text-slate-400 text-lg leading-relaxed mb-10">
              Deploy autonomous AI agents that think, decide, and execute workflows across your 
              entire digital ecosystem with NVIDIA-accelerated intelligence.
            </p>
            <div className="flex flex-wrap gap-6 items-center mb-10">
              <a href="https://app.elyntisai.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(123,97,255,0.5)] flex items-center gap-2">
                Start Orchestration →
              </a>
              <button onClick={handleContactClick} className="border border-white/20 backdrop-blur-sm px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-6 text-[9px] font-mono text-white/40 uppercase tracking-widest">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></div> Latency &lt; 50ms</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]"></div> 99.99% Uptime</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> GPU Optimized</span>
            </div>
          </div>

          {/* AGENT VISUALIZATION - Enhanced 3D-like rotating rings */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/30 to-[#00F0FF]/30 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full border border-[#7B61FF]/40 animate-spin-slow"></div>
              <div className="absolute inset-[15px] rounded-full border border-dashed border-[#00F0FF]/20 animate-spin-reverse"></div>
              <div className="absolute inset-[40px] rounded-full border border-[#7B61FF]/10 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-[70px] rounded-full bg-gradient-to-br from-[#020617] to-[#0a0f2a] shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/10 animate-float">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black tracking-widest text-[#00F0FF] mb-2 glow-text">ACTIVE</div>
                  <div className="text-[9px] md:text-[10px] font-mono text-white/50 bg-black/40 px-3 py-1 rounded-full">AGENT_ORCHESTRATION</div>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECH METRICS SECTION - NEW: Real-time stats dashboard */}
      <section ref={(el) => addToRefs(el, 1)} className="section-hidden py-16 px-6 md:px-10 border-y border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1.2M+', label: 'Daily Executions', icon: '⚡', color: '#7B61FF' },
              { value: '0.023s', label: 'Avg Inference', icon: '🎯', color: '#00F0FF' },
              { value: '99.999%', label: 'Orchestration SLA', icon: '📊', color: 'white' },
              { value: '450+', label: 'Agent Skills', icon: '🧠', color: '#7B61FF' }
            ].map((stat, idx) => (
              <div key={idx} className="group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#7B61FF]/40 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent" style={{ textShadow: `0 0 15px ${stat.color}40` }}>{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">{stat.label}</div>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ENGINE: TASK EXECUTION PIPELINE (Enhanced with animated pipeline visualization) */}
      <section ref={(el) => addToRefs(el, 2)} className="section-hidden py-32 px-6 md:px-10 bg-black/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-[0.4em] mb-4">Technical Diagram</div>
            <h2 className="text-4xl md:text-5xl font-bold">How Tasks Pass Through the <span className="text-[#7B61FF]">AI Agent Engine</span></h2>
            <p className="mt-5 text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Powered by GPU-accelerated inference and intelligent analysis. Your workflows are 
              validated through an automated pipeline designed for reliability and scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {[
                { label: "Continuity", desc: "Start and maintain your own agent pipeline with minimal effort—always-on task execution without overhead.", meta: "24/7 Active", icon: "⟳" },
                { label: "Reliability", desc: "Whether it's a new task or an existing workflow, every agent run delivers consistent rigor and the same quality bar.", meta: "Audit Ready", icon: "✓" },
                { label: "Scalability", desc: "Scale agents with your application and team; the pipeline grows with your task workload and complexity.", meta: "Elastic", icon: "📈" },
                { label: "Intelligence", desc: "GPU-accelerated inference and AI-driven reasoning detect issues early and surface actionable task insights.", meta: "Neural Core", icon: "🧬" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-5 group p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="text-2xl group-hover:scale-110 transition-transform">{step.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h4 className="font-black text-xl uppercase tracking-tight group-hover:text-[#00F0FF] transition-colors">{step.label}</h4>
                      <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full group-hover:bg-[#7B61FF]/20 group-hover:text-[#00F0FF] transition-all">{step.meta}</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{step.desc}</p>
                    <div className="mt-3 w-12 h-[2px] bg-gradient-to-r from-[#7B61FF] to-transparent group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="aspect-video bg-[#020617] rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Animated pipeline flow */}
                <div className="relative w-full max-w-[280px]">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center"><div className="w-10 h-10 rounded-full bg-[#7B61FF]/20 border border-[#7B61FF] flex items-center justify-center text-xs font-mono">IN</div><div className="text-[8px] mt-1 text-white/40">Input</div></div>
                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] animate-pulse"></div>
                    <div className="text-center"><div className="w-10 h-10 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF] flex items-center justify-center text-xs font-mono">LLM</div><div className="text-[8px] mt-1 text-white/40">Reason</div></div>
                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#00F0FF] to-[#7B61FF] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="text-center"><div className="w-10 h-10 rounded-full bg-white/20 border border-white flex items-center justify-center text-xs font-mono">OUT</div><div className="text-[8px] mt-1 text-white/40">Action</div></div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-[10px] font-mono text-[#00F0FF]">PIPELINE STATUS: ACTIVE</div>
                    <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INFRASTRUCTURE: NVIDIA ACCELERATION - Enhanced with hover effects and metrics */}
      <section ref={(el) => addToRefs(el, 3)} className="section-hidden py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-[0.4em] mb-3">NVIDIA ACCELERATION STACK</div>
            <h2 className="text-4xl md:text-5xl font-bold">Powered by <span className="text-[#7B61FF]">NVIDIA AI Enterprise</span></h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Built on AWS P4 instances with A100/H100 GPUs for real-time agent reasoning at scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-[#7B61FF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(123,97,255,0.3)]">
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform inline-block">⚙️</div>
              <h3 className="text-2xl font-black italic mb-4 group-hover:text-[#7B61FF] transition-colors">NVIDIA NeMo</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Enables agent reasoning and task planning by fine-tuning LLMs for contextual 
                intelligence and multi-application understanding.
              </p>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
              <div className="mt-3 text-[9px] font-mono text-[#7B61FF]">Optimization: 86%</div>
            </div>
            <div className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.3)]">
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform inline-block">🚀</div>
              <h3 className="text-2xl font-black italic mb-4 group-hover:text-[#00F0FF] transition-colors">NVIDIA TensorRT</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Optimizes inference to ensure low-latency decision making for autonomous agents 
                operating in real-time digital environments.
              </p>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-[#00F0FF] to-white rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
              <div className="mt-3 text-[9px] font-mono text-[#00F0FF]">Latency: &lt;10ms</div>
            </div>
            <div className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)]">
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform inline-block">🧩</div>
              <h3 className="text-2xl font-black italic mb-4 group-hover:text-white transition-colors">Triton Inference</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Scalable multi-model execution infrastructure that optimizes GPU utilization across 
                complex multi-agent orchestration workflows.
              </p>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-white to-[#7B61FF] rounded-full"></div>
              </div>
              <div className="mt-3 text-[9px] font-mono text-white/60">Throughput: 12k req/s</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW SECTION: AGENT CAPABILITIES SHOWCASE */}
      <section ref={(el) => addToRefs(el, 4)} className="section-hidden py-32 px-6 md:px-10 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 border border-[#7B61FF]/20 text-[#00F0FF] text-[9px] font-mono mb-5">AUTONOMOUS AGENT MESH</div>
            <h2 className="text-4xl md:text-5xl font-bold">Intelligent <span className="text-[#00F0FF]">Agent Skills</span> for Every Workflow</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4">Pre-built and custom agents that reason, take actions, and evolve with your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Neural Analyst", desc: "Autonomous data querying and insight synthesis across databases.", icon: "📊", color: "#7B61FF" },
              { title: "Process Optimizer", desc: "Identifies bottlenecks in CI/CD, cloud costs, suggests remediation.", icon: "⚙️", color: "#00F0FF" },
              { title: "Security Sentinel", desc: "24/7 threat detection, anomaly behavior with real-time response.", icon: "🛡️", color: "white" },
              { title: "Workflow Orchestrator", desc: "Connects CRMs, ERPs, and APIs to execute multi-step tasks.", icon: "🔄", color: "#7B61FF" },
              { title: "Code Refactor Agent", desc: "Reviews PRs, suggests optimizations, auto-generates tests.", icon: "💻", color: "#00F0FF" },
              { title: "Customer Success AI", desc: "Intelligent ticketing, sentiment analysis, proactive escalation.", icon: "💬", color: "#7B61FF" }
            ].map((agent, idx) => (
              <div key={idx} className="group bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[#7B61FF]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{agent.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00F0FF] transition-colors">{agent.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{agent.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[9px] font-mono text-[#7B61FF] opacity-0 group-hover:opacity-100 transition-all">Deploy Agent →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEW SECTION: REAL-TIME INFERENCE VISUALIZATION */}
      <section ref={(el) => addToRefs(el, 5)} className="section-hidden py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-[0.4em] mb-4">REAL-TIME INFERENCE</div>
            <h2 className="text-4xl font-bold mb-6">From <span className="text-[#7B61FF]">Prompt to Action</span> in Milliseconds</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our agentic stack leverages NVIDIA Triton + TensorRT for parallelized inference across dozens of models, while NeMo handles reasoning graphs. All orchestrated on AWS H100 clusters.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-step reasoning with chain-of-thought",
                "Tool use & memory-augmented generation",
                "Auto-scaling agent swarms for parallel execution",
                "Sub-50ms end-to-end latency guarantee"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300"><span className="text-[#00F0FF] text-lg">▹</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative bg-[#020617] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/5 to-[#00F0FF]/5 rounded-2xl"></div>
            <div className="relative">
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-[10px] text-[#00F0FF]">INFERENCE_PIPELINE</span>
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div><div className="w-2 h-2 rounded-full bg-green-400"></div><div className="w-2 h-2 rounded-full bg-green-400"></div></div>
              </div>
              <div className="space-y-5">
                <div><div className="flex justify-between text-[9px] font-mono"><span>Input → Natural Language</span><span className="text-[#00F0FF]">ACTIVE</span></div><div className="w-full bg-white/10 h-1.5 mt-1 rounded-full"><div className="w-full h-full bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] rounded-full"></div></div></div>
                <div><div className="flex justify-between text-[9px] font-mono"><span>Reasoning (NeMo LLM)</span><span>87ms</span></div><div className="w-full bg-white/10 h-1.5 mt-1 rounded-full"><div className="w-3/4 h-full bg-[#7B61FF] rounded-full"></div></div></div>
                <div><div className="flex justify-between text-[9px] font-mono"><span>TensorRT Optimization</span><span>23ms</span></div><div className="w-full bg-white/10 h-1.5 mt-1 rounded-full"><div className="w-2/3 h-full bg-[#00F0FF] rounded-full"></div></div></div>
                <div><div className="flex justify-between text-[9px] font-mono"><span>Action Execution</span><span>Completed</span></div><div className="w-full bg-white/10 h-1.5 mt-1 rounded-full"><div className="w-full h-full bg-white/60 rounded-full"></div></div></div>
              </div>
              <div className="mt-8 pt-5 border-t border-white/10 text-[8px] font-mono text-slate-500 flex justify-between"><span>Throughput: 2.4k req/s</span><span>GPU Util: 73%</span><span>Accuracy: 99.2%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION - No footer, just action */}
      <section ref={(el) => addToRefs(el, 6)} className="section-hidden py-28 px-6 md:px-10 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] rounded-full mb-8">
            <div className="bg-[#020617] rounded-full px-8 py-2 text-[10px] font-mono uppercase tracking-wider">The Future is Autonomous</div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">Ready to Deploy <span className="text-[#00F0FF]">Agentic Workforces</span>?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">Seamless integration with your existing stack. Powered by NVIDIA AI Enterprise on AWS H100.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={handleContactClick} className="bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_30px_rgba(123,97,255,0.5)]">Request Early Access</button>
            <button onClick={handleContactClick} className="border border-white/30 px-10 py-4 rounded-full font-bold hover:border-[#7B61FF] hover:text-[#7B61FF] transition-all">Explore Documentation</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElyntisPlatform;