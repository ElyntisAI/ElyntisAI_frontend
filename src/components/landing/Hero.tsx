import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';
import { useNavigate } from 'react-router-dom';

const HeroGraph = () => (
  <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#7B61FF]/20 blur-[80px]" />
    
    <svg className="relative z-10 w-full h-full opacity-90 drop-shadow-lg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="retroPath" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B61FF" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      {/* Nodes */}
      {[
        { x: 150, y: 200, delay: '0s' },
        { x: 400, y: 120, delay: '0.5s' },
        { x: 650, y: 200, delay: '1s' },
        { x: 280, y: 380, delay: '1.5s' },
        { x: 520, y: 380, delay: '2s' },
        { x: 400, y: 500, delay: '0.8s' },
        { x: 400, y: 300, delay: '1.2s' },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="8" fill="#00F0FF" className="animate-pulse" style={{ animationDelay: n.delay }} />
          <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="#7B61FF" strokeWidth="1" opacity="0.3" />
        </g>
      ))}
      {/* Connections */}
      {[
        'M150,200 Q275,100 400,120',
        'M400,120 Q525,100 650,200',
        'M150,200 Q215,290 280,380',
        'M650,200 Q585,290 520,380',
        'M280,380 Q350,390 400,500',
        'M520,380 Q460,390 400,500',
        'M150,200 Q275,250 400,300',
        'M400,120 Q400,210 400,300',
        'M650,200 Q525,250 400,300',
        'M280,380 Q340,340 400,300',
        'M520,380 Q460,340 400,300',
        'M400,500 Q400,400 400,300',
      ].map((d, i) => (
        <path key={`path-${i}`} d={d} fill="none" stroke="url(#retroPath)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow opacity-30" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </svg>
  </div>
);

const Hero = () => {
  const ref = useFadeIn();
  const navigate = useNavigate();

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-0"
      style={{
        backgroundImage: 'url("/images/hero.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundColor: '#0D0B1A'
      }}
    >
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 lg:py-0">
        <div className="max-w-3xl space-y-8 fade-in-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-sm font-bold text-[#00F0FF] shadow-sm">
            <span className="w-2 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            GPU-Accelerated AI Infrastructure
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-fjalla uppercase tracking-tight leading-[1.1] text-white pt-10">
            The Next-Generation <span className="block mt-2 text-gradient">GPU-Accelerated AI Agent Platform</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#c0b8e8] max-w-xl leading-relaxed font-lobster">
            Deploy autonomous AI agents that think, decide, and execute workflows across your entire digital ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={() => { navigate('/product'); window.scrollTo(0, 0); }} className="w-full sm:w-auto text-left">
              <Button size="lg" className="w-full bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] hover:opacity-90 text-white text-base px-8 gap-2 shadow-xl hover:scale-105 transition-all font-bold uppercase tracking-wider">
                Launch ElyntisAI <ArrowRight size={18} />
              </Button>
            </button>
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-base px-8 gap-2 bg-transparent border-[#7B61FF]/50 text-[#00F0FF] hover:bg-[#7B61FF]/10 hover:border-[#00F0FF] transition-all font-bold uppercase tracking-wider">
                Learn More
              </Button>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center gap-6 text-[10px] font-mono font-bold text-[#00F0FF]/70 uppercase tracking-widest">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" /> Latency &lt; 50ms</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" /> 99.99% Uptime</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" /> GPU Optimized</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
