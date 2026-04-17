import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-4xl mx-auto glass-strong p-6 rounded-2xl glow-blue flex flex-col md:flex-row items-center gap-6 border-[#00F0FF]/30">
        <div className="w-12 h-12 rounded-full bg-[#00F0FF]/10 flex-shrink-0 flex items-center justify-center text-[#00F0FF] border border-[#00F0FF]/20 animate-pulse-glow">
          <Cookie className="w-6 h-6" />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-white font-semibold mb-1">Our cookies policy</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to improve your experience, analyze site traffic, and assist in our marketing efforts. By clicking "Accept All", you agree to our use of cookies as described in our{' '}
            <Link to="/cookies" className="text-[#00F0FF] hover:underline whitespace-nowrap">Cookie Policy</Link>.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-white hover:text-[#00F0FF] transition-colors border border-white/10 hover:border-[#00F0FF]/40 rounded-xl"
          >
            Necessary Only
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium bg-[#00F0FF] text-black hover:bg-[#7B61FF] hover:text-white transition-all duration-300 rounded-xl glow-blue"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 md:relative md:top-0 md:right-0 p-1 text-muted-foreground hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
