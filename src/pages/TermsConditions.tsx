import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

const TermsConditions = () => {
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
                <FileText className="w-6 h-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-fjalla uppercase tracking-wide text-white">Terms and Conditions</h1>
            </div>
            <p className="text-[#c0b8e8] mb-12 text-lg border-l-2 border-[#00F0FF] pl-4">Last updated: April 09, 2026</p>

            <div className="space-y-8 text-[#c0b8e8] leading-relaxed pb-20">
              <p>Please read these terms and conditions carefully before using Our Service.</p>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Interpretation and Definitions</h2>
                <h3 className="text-xl mt-6 mb-3 font-bold text-white uppercase tracking-wider">Interpretation</h3>
                <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
                <h3 className="text-xl mt-8 mb-4 font-bold text-white uppercase tracking-wider">Definitions</h3>
                <p className="mb-4">For the purposes of these Terms and Conditions:</p>
                <ul className="space-y-4">
                  <li><strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                  <li><strong className="text-white">Country</strong> refers to: California, United States</li>
                  <li><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to Elyntis AI, 525 Market St, San Francisco, CA 94105, United States.</li>
                  <li><strong className="text-white">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                  <li><strong className="text-white">Service</strong> refers to the Website.</li>
                  <li><strong className="text-white">Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">Terms and Conditions Generator</a>.</li>
                  <li><strong className="text-white">Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</li>
                  <li><strong className="text-white">Website</strong> refers to Elyntis AI, accessible from <a href="https://elyntisai.com" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">https://elyntisai.com</a></li>
                  <li><strong className="text-white">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Acknowledgment</h2>
                <div className="space-y-4">
                  <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                  <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                  <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                  <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                  <p>Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Links to Other Websites</h2>
                <div className="space-y-4">
                  <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
                  <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
                  <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>
                  
                  <h3 className="text-xl mt-6 mb-3 font-bold text-white uppercase tracking-wider">Links from a Third-Party Social Media Service</h3>
                  <p>The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.</p>
                  <p>You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service's terms and privacy policies.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Termination</h2>
                <div className="space-y-4">
                  <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                  <p>Upon termination, Your right to use the Service will cease immediately.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Limitation of Liability</h2>
                <div className="space-y-4">
                  <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                  <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, business interruption, or loss of privacy), even if the Company has been advised of the possibility of such damages.</p>
                  <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                <div className="space-y-4">
                  <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.</p>
                  <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information; or (iv) that the Service, its servers, or emails sent from the Company are free of viruses or other harmful components.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Governing Law</h2>
                <p>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Disputes Resolution</h2>
                <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">For European Union (EU) Users</h2>
                <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">United States Legal Compliance</h2>
                <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Severability and Waiver</h2>
                <h3 className="text-xl mt-6 mb-3 font-bold text-white uppercase tracking-wider">Severability</h3>
                <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law.</p>
                
                <h3 className="text-xl mt-8 mb-3 font-bold text-white uppercase tracking-wider">Waiver</h3>
                <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right at any time thereafter.</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Translation Interpretation</h2>
                <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Changes to These Terms and Conditions</h2>
                <div className="space-y-4">
                  <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.</p>
                  <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl mt-12 mb-4 text-[#00F0FF] font-fjalla uppercase tracking-wide border-b border-[#7B61FF]/30 pb-2">Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
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

export default TermsConditions;
