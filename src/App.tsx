import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import StatementSection from './sections/StatementSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import WhyUsSection from './sections/WhyUsSection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <div className="bg-[#0A0A0A]" style={{ overflowX: 'clip' }}>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <StatementSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
