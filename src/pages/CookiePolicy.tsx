import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Cookie } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00F0FF] selection:text-black font-inter">
      <Navbar />
      
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7B61FF]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00F0FF]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#7B61FF] transition-colors mb-8 font-mono text-sm tracking-widest uppercase">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/20 flex items-center justify-center text-[#00F0FF] border border-[#7B61FF]/30">
                <Cookie className="w-6 h-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-fjalla uppercase tracking-wide text-white">Cookie Policy</h1>
            </div>
            <p className="text-[#c0b8e8] mb-12 text-lg border-l-2 border-[#00F0FF] pl-4">Last updated: April 11, 2026</p>

            <div className="space-y-8 text-[#c0b8e8] leading-relaxed pb-20">
              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Introduction</h2>
                <div className="space-y-4">
                  <p>This Cookie Policy explains how Elyntis AI ("we", "us", or "our") uses cookies and similar tracking technologies on our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
                  <p>In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases, our Privacy Policy remains applicable in addition to this Cookie Policy.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">What are Cookies?</h2>
                <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                <p className="mt-4">Cookies set by the website owner (in this case, Elyntis AI) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Why do we use Cookies?</h2>
                <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website.</p>
                
                <h3 className="text-xl mt-8 mb-4 font-bold text-white uppercase tracking-wider">Types of Cookies we use:</h3>
                <ul className="space-y-6">
                  <li>
                    <strong className="text-white">Necessary / Essential Cookies</strong><br/>
                    <span className="text-sm opacity-80">Type: Session/Persistent Cookies</span><br/>
                    <p className="mt-1">Purpose: These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</p>
                  </li>
                  <li>
                    <strong className="text-white">Functionality Cookies</strong><br/>
                    <span className="text-sm opacity-80">Type: Persistent Cookies</span><br/>
                    <p className="mt-1">Purpose: These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</p>
                  </li>
                  <li>
                    <strong className="text-white">Analytics and Customization Cookies</strong><br/>
                    <span className="text-sm opacity-80">Type: Persistent Cookies</span><br/>
                    <p className="mt-1">Purpose: These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">How can I control Cookies?</h2>
                <div className="space-y-4">
                  <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our Cookie Consent Banner, or by setting your web browser controls to accept or refuse cookies.</p>
                  <p>If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
                  <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">www.allaboutcookies.org</a>.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Changes to this Cookie Policy</h2>
                <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Contact Us</h2>
                <p>If you have any questions about our use of cookies or other technologies, please contact us:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>By email: <a href="mailto:contact@elyntisai.com" className="text-[#00F0FF] hover:underline">contact@elyntisai.com</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
