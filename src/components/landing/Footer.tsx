import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Twitter, Youtube, Linkedin, Facebook } from 'lucide-react';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.184 0 7.438 2.981 7.438 6.966 0 4.156-2.618 7.502-6.262 7.502-1.22 0-2.368-.634-2.76-1.38l-.751 2.859c-.272 1.042-1.01 2.348-1.506 3.143 1.14.349 2.34.536 3.567.536 6.621 0 11.988-5.367 11.988-11.988C24 5.367 18.638 0 12.017 0z"/>
  </svg>
);

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'X', icon: Twitter, href: 'https://x.com/ElyntisAi' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@ElyntisAi' },
  { name: 'Pinterest', icon: PinterestIcon, href: 'https://www.pinterest.com/ElyntisAi/' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/ElyntisAi/' },
];

const cols = [
  { title: 'Platform', links: ['Features', 'Use Cases', 'Pricing', 'Testimonials'] },
  { title: 'Resources', links: ['Docs', 'Blog'] },
  { title: 'Contact', links: ['contact@elyntisai.com', '+14157492861', '525 Market St, CA 94105'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'] },
];

const sectionLinks = ['Features', 'Use Cases', 'Pricing', 'Testimonials', 'Blog', 'Contact'];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (sectionLinks.includes(link)) {
      e.preventDefault();
      const id = link.toLowerCase().replace(' ', '-');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer-line-bg py-12 border-t border-[#7B61FF]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-2 -mt-6 md:-mt-8 md:pr-12 lg:pr-20">
            <a href="/" className="flex items-center mb-3">
              <img src="/images/logo.png" alt="ElyntisAI Logo" className="h-24 md:h-28 w-auto" />
            </a>
            <p className="text-sm text-justify text-muted-foreground mt-3 leading-relaxed">
              We enable organizations to deploy intelligent AI agents that don’t just follow rules, but analyze, decide, and act across systems from CRMs and APIs to internal workflows and real-time operations.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="mt-4 md:mt-8">
              <h4 className="text-sm font-semibold mb-4 text-[#00F0FF]">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    {l === 'Docs' || l === 'Privacy Policy' || l === 'Terms & Conditions' || l === 'Cookie Policy' ? (
                      <Link 
                        to={
                          l === 'Docs' ? '/docs' : 
                          l === 'Privacy Policy' ? '/privacy' : 
                          l === 'Terms & Conditions' ? '/terms' :
                          '/cookies'
                        } 
                        className="text-sm text-muted-foreground hover:text-[#00F0FF] transition-colors"
                      >
                        {l}
                      </Link>
                    ) : (
                      <a 
                        href={
                          l.includes('@') ? `mailto:${l}` : 
                          /^\+?[1-9]\d{1,14}$/.test(l.replace(/[\s()\-]/g, '')) ? `tel:${l.replace(/[\s()\-]/g, '')}` :
                          sectionLinks.includes(l) ? `/#${l.toLowerCase().replace(' ', '-')}` : 
                          '#'
                        } 
                        onClick={(e) => sectionLinks.includes(l) ? handleScroll(e, l) : null}
                        className={`text-sm text-muted-foreground hover:text-[#00F0FF] transition-colors ${!sectionLinks.includes(l) && !l.includes('@') && !/^\+?[1-9]\d{1,14}$/.test(l.replace(/[\s()\-]/g, '')) ? 'cursor-default hover:text-muted-foreground' : ''}`}
                      >
                        {l}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#7B61FF]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 ElyntisAI. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:mr-20">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#00F0FF] transition-colors hover:glow-blue" aria-label={s.name}>
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
