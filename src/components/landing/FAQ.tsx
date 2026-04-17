import { useFadeIn } from '@/hooks/useFadeIn';

const faqs = [
  {
    q: 'What is an AI agent?',
    a: 'An AI agent is an autonomous software entity that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike traditional automation, agents adapt their behavior based on context and outcomes.',
    img: '/images/faq/What is an AI agent.png',
  },
  {
    q: 'How is this different from traditional automation tools?',
    a: 'Traditional automation follows rigid, predefined rules. ElyntisAI agents use contextual reasoning to handle dynamic scenarios, make decisions under uncertainty, and optimize their own workflows over time.',
    img: '/images/faq/How is this different from traditional automation tools.png',
  },
  {
    q: 'What integrations are supported?',
    a: 'We support REST APIs, GraphQL, webhooks, and native connectors for popular CRMs, databases, cloud services (AWS, Azure, GCP), communication platforms, and custom enterprise systems.',
    img: '/images/faq/What integrations are supported.png',
  },
  {
    q: 'Is coding required to build agents?',
    a: 'No. The visual workflow builder allows you to create and configure agents without writing code. For advanced use cases, our SDK provides full programmatic control with Python and TypeScript.',
    img: '/images/faq/Is coding required to build agents.png',
  },
  {
    q: 'How secure is the platform?',
    a: 'ElyntisAI is built with enterprise security standards including SOC 2 compliance, end-to-end encryption, role-based access control, audit logging, and optional on-premise deployment for sensitive environments.',
    img: '/images/faq/How secure is the platform.png',
  },
];

const FAQ = () => {
  const ref = useFadeIn();

  return (
    <section id="faq" className="py-20 relative overflow-hidden geometric-command-bg scroll-mt-24" ref={ref}>
      <div className="geometric-shades" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-3 text-shadow">Answers</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tight text-white leading-[1.1]">
            Frequently Asked<br/><span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {faqs.map((f, i) => {
            const isEven = i % 2 === 0;
            const Icon = f.icon;
            return (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 fade-up ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* Visual / Icon Side */}
                <div className="flex-1 flex justify-center order-2 md:order-none">
                  <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border border-[#00F0FF]/30 flex items-center justify-center bg-[#7B61FF]/5 backdrop-blur-md shadow-[0_0_50px_rgba(0,240,255,0.15)] group hover:border-[#00F0FF]/60 transition-all duration-500 overflow-hidden">
                    <img src={f.img} alt={f.q} className="w-20 h-20 md:w-28 md:h-28 object-contain transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/10 to-transparent rounded-full mix-blend-overlay" />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`flex-[1.5] text-center ${isEven ? 'md:text-left' : 'md:text-right'} space-y-4 order-3 md:order-none`}>
                  <h3 className="text-2xl sm:text-3xl font-fjalla uppercase tracking-normal leading-tight text-white">{f.q}</h3>
                  <p className="text-[#c0b8e8] leading-relaxed text-sm sm:text-base max-w-lg mx-auto md:mx-0 font-sans">{f.a}</p>
                </div>

                {/* Number Side */}
                <div className="flex-1 flex justify-center items-center order-1 md:order-none">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#7B61FF] to-[#00F0FF] text-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-4xl md:text-5xl font-cooper font-normal select-none tracking-tighter">{i + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
