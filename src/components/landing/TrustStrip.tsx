import { useFadeIn } from '@/hooks/useFadeIn';

const technologies = [
  { name: 'Hugging Face', desc: 'ML Ecosystem', image: '/images/41.png' },
  { name: 'Kubernetes', desc: 'Orchestration', image: '/images/42.png', bgClass: 'bg-white/90 p-1 rounded-md' },
  { name: 'Pinecone', desc: 'Vector Database', image: '/images/40.png' },
];

const TrustStrip = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 border-y border-[#7B61FF]/10 bg-[#0D0B1A]/80 backdrop-blur-sm relative overflow-hidden" ref={ref}>
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7B61FF]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 fade-up">
          <h2 className="text-2xl sm:text-3xl font-fjalla uppercase tracking-wider text-white mb-4">
            Powered by Advanced AI Infrastructure
          </h2>
          <p className="text-[#c0b8e8] max-w-2xl mx-auto font-lobster text-lg">
            Built on a powerful ecosystem of AI, data, and cloud infrastructure technologies.
          </p>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative flex overflow-hidden py-10 mask-fade-edges">
          <div className="animate-marquee whitespace-nowrap flex gap-12 md:gap-24 items-center">
            {/* Double the array for seamless looping */}
            {[...technologies, ...technologies].map((tech, i) => (
              <div 
                key={`${tech.name}-${i}`} 
                className="flex flex-col items-center justify-center group min-w-[120px] md:min-w-[150px]"
              >
                <div className="relative mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={tech.image} 
                      alt={tech.name} 
                      className={`h-8 md:h-10 w-auto object-contain opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-500 ${tech.bgClass || ''}`}
                    />
                    <span className="text-xl md:text-2xl font-fjalla tracking-tighter text-[#c0b8e8]/60 group-hover:text-[#00F0FF] transition-colors duration-500">
                      {tech.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#00F0FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
                <div className="h-[2px] w-8 bg-[#7B61FF]/20 group-hover:bg-[#00F0FF]/50 transition-all duration-500 mb-2" />
                <span className="text-[10px] font-mono text-[#7B61FF]/60 uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-[#00F0FF]/80 transition-all">
                  {tech.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-[#7B61FF]/10 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 fade-up">
           <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Enterprise Grade</span>
           <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Soc2 Type II</span>
           <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase">ISO 27001</span>
           <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase">GDPR Compliant</span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
