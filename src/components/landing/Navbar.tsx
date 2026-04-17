import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const links = ['Product', 'Features', 'Use Cases', 'Pricing', 'Contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (name: string) => {
    if (name === 'Product') {
      navigate('/product');
      setOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    const id = name.toLowerCase().replace(' ', '-');
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <a href="/" className="flex items-center">
          <img src="/images/logo.png" alt="ElyntisAI Logo" className="h-14 sm:h-24 md:h-28 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNavigation(l)}
              className="text-sm text-white hover:text-[#00F0FF] transition-colors font-medium tracking-wide"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button onClick={() => handleNavigation('Product')} size="sm" className="bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] hover:opacity-90 text-white glow-blue">Launch ElyntisAI</Button>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border/50 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNavigation(l)}
              className="text-sm text-white hover:text-[#00F0FF] transition-colors text-left font-medium tracking-wide"
            >
              {l}
            </button>
          ))}
          <Button onClick={() => handleNavigation('Product')} size="sm" className="bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] hover:opacity-90 text-white glow-blue w-fit">Launch ElyntisAI</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
