import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    desc: 'For teams exploring AI agent capabilities.',
    features: ['5 Active Agents', 'Basic Workflow Builder', '3 System Integrations', 'Community Support', '10K Executions / month'],
    highlight: false,
    color: 'from-primary/20 to-transparent',
    productId: 'prod_UIls7BibFziIa1',
    checkoutUrl: 'https://buy.stripe.com/test_dRmaEX4rL3Th6JC9rl5Vu00'
  },
  {
    name: 'Pro',
    price: '$199',
    desc: 'For growing teams with production workloads.',
    features: ['25 Active Agents', 'Advanced Automation', 'Unlimited Integrations', 'Priority Support', '100K Executions / month', 'Custom Decision Logic', 'Team Collaboration'],
    highlight: true,
    color: 'from-secondary/20 to-primary/20',
    productId: 'prod_UIltM24eLDbIE3',
    checkoutUrl: 'https://buy.stripe.com/test_7sY14n4rL0H53xq7jd5Vu01'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For organizations requiring dedicated infrastructure.',
    features: ['Unlimited Agents', 'Custom Integrations', 'Dedicated GPU Cluster', '24/7 Dedicated Support', 'Unlimited Executions', 'On-Prem Deployment', 'SLA & Compliance', 'Custom Training'],
    highlight: false,
    color: 'from-accent/20 to-transparent',
    checkoutUrl: '#contact'
  },
];

const Pricing = () => {
  const handlePricingClick = (tier: typeof tiers[0]) => {
    // If it's a custom plan, just scroll to contact
    if (tier.price === 'Custom') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Redirect to Stripe Checkout using the provided URLs
    console.log(`Redirecting to Stripe Checkout for: ${tier.name}`);
    
    toast.success(`Redirecting to ${tier.name} checkout...`, {
      description: "You are being redirected to our secure payment page.",
      duration: 2000,
    });

    // Short delay for the toast to be seen
    setTimeout(() => {
      window.open(tier.checkoutUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="pricing" className="py-20 relative pricing-wave-bg overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B61FF]/10 backdrop-blur-md border border-[#7B61FF]/30 text-xs text-[#00F0FF] font-bold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-fjalla uppercase mb-6 text-white">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-[#c0b8e8] max-w-xl mx-auto leading-relaxed font-lobster">
            Scale from prototype to production with predictable costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`group relative p-[1px] rounded-3xl transition-all duration-700 shadow-sm hover:shadow-2xl ${
                t.highlight 
                  ? 'bg-gradient-to-b from-[#7B61FF] via-[#00F0FF] to-[#7B61FF]/30' 
                  : 'bg-gradient-to-b from-[#7B61FF]/30 to-transparent hover:from-[#00F0FF]/30'
              }`}
            >
              <div className="relative h-full bg-[#0D0B1A]/90 backdrop-blur-xl p-8 rounded-[23px] flex flex-col group-hover:bg-[#0D0B1A]/80 transition-colors duration-500">
                {t.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] text-white text-[10px] font-alfa font-normal tracking-widest shadow-md">
                    MOST POPULAR
                  </span>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-poller tracking-tight text-white mb-2">{t.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-alfa font-normal tracking-wide text-gradient">{t.price}</span>
                    {t.price !== 'Custom' && <span className="text-[#c0b8e8] text-sm font-sans font-bold"> /month</span>}
                  </div>
                  <p className="text-sm text-[#c0b8e8] mt-4 leading-relaxed font-lobster">{t.desc}</p>
                </div>

                <div className="flex-1">
                  <div className="text-[10px] font-mono font-bold tracking-widest text-[#00F0FF] uppercase mb-4 opacity-70">Included Features</div>
                  <ul className="space-y-4 mb-8">
                    {t.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm group/item">
                        <div className="mt-1 p-0.5 rounded-full bg-[#7B61FF]/20 border border-[#7B61FF]/30 group-hover/item:bg-[#00F0FF]/20 transition-colors">
                          <Check className="w-3 h-3 text-[#00F0FF]" />
                        </div>
                        <span className="text-[#c0b8e8] font-medium group-hover/item:text-white transition-colors">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full h-12 text-base font-bold transition-all duration-300 rounded-xl ${
                    t.highlight 
                      ? 'bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] hover:opacity-90 text-white shadow-lg hover:scale-[1.02]' 
                      : 'bg-[#7B61FF]/10 border border-[#7B61FF]/30 text-[#00F0FF] hover:bg-[#7B61FF]/20 hover:border-[#00F0FF]/50'
                  }`}
                  variant={t.highlight ? 'default' : 'outline'}
                  onClick={() => handlePricingClick(t)}
                >
                  {t.price === 'Custom' ? 'Contact Sales' : 'Get Started Now'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
