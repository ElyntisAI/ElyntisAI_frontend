import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Code2, Terminal } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';

const Docs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center relative py-24 sm:py-32">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B1A] to-background z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B61FF]/5 rounded-full blur-[100px] z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#7B61FF]/20 text-xs sm:text-sm text-muted-foreground shadow-[0_0_20px_rgba(123,97,255,0.1)] mt-10">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Developer Documentation
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Documentation <br />
            <span className="text-gradient">Coming Soon</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are working hard to build comprehensive, interactive documentation, API references, and SDK guides for the ElyntisAI platform. Stay tuned!
          </p>

          <div className="pt-8">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-[#7B61FF] to-[#00F0FF] hover:opacity-90 text-white gap-2 text-base px-8 h-12 glow-blue">
                <ArrowLeft size={18} /> Return Home
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-[#7B61FF]/15 mt-16 max-w-3xl mx-auto text-left">
             <div className="glass p-6 xl:p-8 rounded-xl flex flex-col items-start gap-4 hover:border-[#00F0FF]/50 transition-colors hover:glow-blue">
               <FileText className="w-8 h-8 text-[#00F0FF]" />
               <div>
                 <h3 className="font-semibold text-lg">Guides & Tutorials</h3>
                 <p className="text-sm text-muted-foreground mt-1">Step-by-step agent creation.</p>
               </div>
             </div>
             <div className="glass p-6 xl:p-8 rounded-xl flex flex-col items-start gap-4 hover:border-[#7B61FF]/50 transition-colors hover:glow-purple">
               <Code2 className="w-8 h-8 text-[#7B61FF]" />
               <div>
                 <h3 className="font-semibold text-lg">API Reference</h3>
                 <p className="text-sm text-muted-foreground mt-1">REST endpoint definitions.</p>
               </div>
             </div>
             <div className="glass p-6 xl:p-8 rounded-xl flex flex-col items-start gap-4 hover:border-[#00F0FF]/50 transition-colors hover:glow-blue">
               <Terminal className="w-8 h-8 text-[#00F0FF]" />
               <div>
                 <h3 className="font-semibold text-lg">SDKs & Libraries</h3>
                 <p className="text-sm text-muted-foreground mt-1">Python & Node.js support.</p>
               </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;
