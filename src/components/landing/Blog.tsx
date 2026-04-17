import { ArrowUpRight } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const posts = [
  {
    title: 'The Future of Autonomous AI Agents',
    excerpt: 'How self-directed agents are redefining enterprise automation and decision-making at scale. We explore the transition from static automation to dynamic, context-aware AI ecosystems.',
    gradient: 'from-[#7B61FF]/20 to-[#00F0FF]/20',
    tag: 'Research',
    date: 'Oct 12, 2026',
    author: 'Sarah Chen',
    image: '/images/blog/From Automation to Intelligence.png'
  },
  {
    title: 'From Automation to Intelligence',
    excerpt: 'The shift from rule-based automation to context-aware AI execution and what it means for your stack. A technical deep dive into GPU-accelerated event processing and LLM-driven actions.',
    gradient: 'from-[#00F0FF]/20 to-[#7B61FF]/20',
    tag: 'Engineering',
    date: 'Sep 28, 2026',
    author: 'Marcus Vance',
    image: '/images/blog/From Automation to Intelligence.png'
  },
  {
    title: 'How AI Agents Transform Business Workflows',
    excerpt: 'Real-world case studies of organizations deploying autonomous agents in production environments to automate DevOps, secure cloud infrastructure, and manage distributed data pipelines.',
    gradient: 'from-[#7B61FF]/20 to-[#00F0FF]/10',
    tag: 'Case Study',
    date: 'Sep 15, 2026',
    author: 'Dr. Elena Rostova',
    image: '/images/blog/How AI Agents Transform Business Workflows.png'
  },
  {
    title: 'Benchmarking AI Agent Performance on NVIDIA GPUs',
    excerpt: 'Our latest performance metrics showing how GPU parallelization can reduce autonomous agent decision latency from 1.2s down to under 50ms for real-time applications.',
    gradient: 'from-[#00F0FF]/20 to-[#7B61FF]/10',
    tag: 'Performance',
    date: 'Aug 30, 2026',
    author: 'David Kumar',
    image: '/images/blog/Benchmarking AI Agent Performance on NVIDIA GPUs.png'
  },
  {
    title: 'Building Secure Agentic Workflows',
    excerpt: 'Security considerations when giving AI control over your infrastructure. Best practices for sandboxing, role-based access control, and comprehensive audit logging.',
    gradient: 'from-[#7B61FF]/15 to-[#00F0FF]/15',
    tag: 'Security',
    date: 'Aug 10, 2026',
    author: 'Alex Mercer',
    image: '/images/blog/Building Secure Agentic Workflows.png'
  },
  {
    title: 'ElyntisAI: Q3 Product Update & Roadmap',
    excerpt: 'A look at the new features we rolled out this quarter, including the Agent Template Hub, enhanced workflow monitoring dashboards, and tighter integration with popular CI/CD pipelines.',
    gradient: 'from-[#00F0FF]/15 to-[#7B61FF]/15',
    tag: 'Product',
    date: 'July 25, 2026',
    author: 'The ElyntisAI Team',
    image: '/images/blog/ElyntisAI_ Q3 Product Update & Roadmap.png'
  },
];

const Blog = () => {
  const ref = useFadeIn();

  return (
    <section id="blog" className="py-16 relative blog-spectral-bg overflow-hidden scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-xs text-[#00F0FF] font-bold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Insights
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-fjalla uppercase mb-4 text-white">Latest from the Blog</h2>
          <p className="text-[#c0b8e8] max-w-xl mx-auto font-lobster text-lg">Technical insights, research, and case studies from the ElyntisAI team.</p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          {(() => {
            const featured = posts[0];
            return (
              <Dialog>
                <DialogTrigger asChild>
                  <article className="group cursor-pointer relative rounded-3xl overflow-hidden w-full h-[450px] md:h-[550px] border border-[#7B61FF]/30 hover:border-[#00F0FF]/50 transition-all duration-500 outline-none block fade-up shadow-lg hover:shadow-2xl">
                    <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1A]/90 via-[#0D0B1A]/40 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 max-w-2xl bg-[#0D0B1A]/70 backdrop-blur-xl border border-[#7B61FF]/30 p-6 md:p-10 rounded-3xl z-10 shadow-xl">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] text-white rounded text-[10px] font-mono tracking-widest uppercase mb-4">{featured.tag}</span>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-poller mb-4 text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-3 leading-tight">
                          {featured.title} <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </h3>
                        <p className="text-[#c0b8e8] text-sm md:text-base leading-relaxed mb-8 font-medium text-justify">{featured.excerpt}</p>
                        <div className="flex items-center gap-6 pt-6 border-t border-[#7B61FF]/20 text-[10px] font-mono font-bold text-[#00F0FF]/70 w-full justify-between">
                          <div className="flex gap-4">
                            <span>{featured.date}</span>
                            <span>{featured.author.toUpperCase()}</span>
                          </div>
                          <span className="text-[#00F0FF] font-bold uppercase tracking-widest hidden sm:inline-block">Read Article</span>
                        </div>
                    </div>
                  </article>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0D0B1A]/95 backdrop-blur-xl border-[#7B61FF]/30 text-white rounded-3xl shadow-2xl p-6 md:p-10 custom-scrollbar">
                  <DialogHeader className="mb-4 text-left">
                    <div className="flex items-center gap-4 text-[10px] font-mono font-bold text-[#00F0FF]/70 mb-4">
                      <span>{featured.date}</span>
                      <span>{featured.author.toUpperCase()}</span>
                      <span className="px-2 py-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] text-white rounded ml-auto tracking-widest uppercase">{featured.tag}</span>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-poller leading-tight text-white">{featured.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-[#c0b8e8] leading-relaxed font-medium text-justify">
                    <p className="text-lg font-bold text-white mb-6 text-justify">{featured.excerpt}</p>
                    <p>
                      This is a placeholder for the full article content. As an enterprise platform, ElyntisAI ensures that all autonomous agents operate within strictly defined guardrails, leveraging the power of GPUs to process workflows in real-time.
                    </p>
                    <p>
                      By bypassing traditional CPU bottlenecks, our system maintains sub-50ms latency for critical decision-making processes.
                    </p>
                    <div className="p-6 my-8 border-l-4 border-[#00F0FF] bg-[#00F0FF]/5 rounded-r-lg italic text-white font-lobster text-lg center">
                      "Automation without intelligence is just a faster way to make mistakes. Context-aware AI execution is the path forward."
                    </div>
                    <p>
                      We continue to benchmark and refine our models. Expect full documentation and API SDKs to be released in the upcoming quarter. Thank you for being part of the ElyntisAI ecosystem.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })()}
        </div>

        {/* Secondary Posts */}
        <div className="flex flex-wrap justify-center gap-8">
          {posts.slice(1).map((p, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <article
                  className="fade-up group rounded-3xl bg-[#7B61FF]/5 backdrop-blur-md border border-[#7B61FF]/20 overflow-hidden hover:border-[#00F0FF]/40 hover:bg-[#7B61FF]/10 transition-all duration-500 cursor-pointer text-left block outline-none shadow-sm hover:shadow-xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`h-48 bg-gradient-to-br transition-all duration-500 ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-30 group-hover:scale-105 transition-transform duration-700" />
                    <span className="font-mono text-[10px] font-bold tracking-widest bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] px-3 py-1 rounded-full relative z-10 text-white border border-white/20 uppercase">{p.tag}</span>
                  </div>
                  <div className="p-8 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-center justify-between mb-4 text-[10px] font-mono font-bold text-[#00F0FF]/70">
                      <span>{p.date}</span>
                    </div>
                    <h3 className="text-xl font-poller text-white mb-4 group-hover:text-[#00F0FF] transition-colors flex items-start justify-between gap-2 leading-tight">
                      <span>{p.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1" />
                    </h3>
                    <p className="text-sm text-[#c0b8e8] leading-relaxed font-medium flex-grow mb-6 text-justify">{p.excerpt}</p>
                    
                    <div className="mt-auto pt-6 border-t border-[#7B61FF]/20 flex items-center justify-between font-mono font-bold text-[10px]">
                      <span className="text-white uppercase tracking-wider">{p.author}</span>
                      <span className="text-[#00F0FF] uppercase tracking-widest group-hover:underline transition-all">Read Article</span>
                    </div>
                  </div>
                </article>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0D0B1A]/95 backdrop-blur-xl border-[#7B61FF]/30 text-white rounded-3xl shadow-2xl p-6 md:p-10 custom-scrollbar">
                <DialogHeader className="mb-4 text-left">
                  <div className="flex items-center gap-4 text-[10px] font-mono font-bold text-[#00F0FF]/70 mb-4">
                    <span>{p.date}</span>
                    <span>{p.author.toUpperCase()}</span>
                    <span className="px-2 py-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] text-white rounded ml-auto tracking-widest uppercase">{p.tag}</span>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-poller leading-tight text-white">{p.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-[#c0b8e8] leading-relaxed font-medium text-justify">
                  <p className="text-lg font-bold text-white mb-6 text-justify">{p.excerpt}</p>
                  <p>
                    This is a placeholder for the full article content. As an enterprise platform, ElyntisAI ensures that all autonomous agents operate within strictly defined guardrails, leveraging the power of GPUs to process workflows in real-time.
                  </p>
                  <p>
                    By bypassing traditional CPU bottlenecks, our system maintains sub-50ms latency for critical decision-making processes.
                  </p>
                  <div className="p-6 my-8 border-l-4 border-[#00F0FF] bg-[#00F0FF]/5 rounded-r-lg italic text-white font-lobster text-lg">
                    "Automation without intelligence is just a faster way to make mistakes. Context-aware AI execution is the path forward."
                  </div>
                  <p>
                    We continue to benchmark and refine our models. Expect full documentation and API SDKs to be released in the upcoming quarter. Thank you for being part of the ElyntisAI ecosystem.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
