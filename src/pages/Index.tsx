import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import TechnicalDiagram from '@/components/landing/TechnicalDiagram';
import TrustStrip from '@/components/landing/TrustStrip';
import HowItWorks from '@/components/landing/HowItWorks';
import Features from '@/components/landing/Features';
import UseCases from '@/components/landing/UseCases';
import ProductPreview from '@/components/landing/ProductPreview';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import Blog from '@/components/landing/Blog';
import FAQ from '@/components/landing/FAQ';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import SectionDivider from '@/components/landing/SectionDivider';

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <Hero />
    <TechnicalDiagram />
    <TrustStrip />
    <SectionDivider />
    <HowItWorks />
    <SectionDivider />
    <Features />
    <SectionDivider />
    <UseCases />
    <SectionDivider />
    <ProductPreview />
    <SectionDivider />
    <Testimonials />
    <SectionDivider />
    <Pricing />
    <SectionDivider />
    <Blog />
    <SectionDivider />
    <FAQ />
    <SectionDivider />
    <Contact />
    <Footer />
  </div>
);

export default Index;
