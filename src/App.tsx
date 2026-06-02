import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TomorrowBetter from "./components/Features/TomorrowBetter";
import SeeProgress from "./components/Features/SeeProgress";
import OfferList from "./components/Features/OfferList";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Newsletter from "./components/Footer/Newsletter";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Shared/ScrollToTop";
import ScrollEffects from "./components/Shared/ScrollEffects";

export default function App() {
  return (
    <div id="elementum-landing-container" className="min-h-screen flex flex-col font-sans overflow-x-hidden antialiased bg-[#faf9f6]">
      {/* High-fidelity scroll indicators and custom interactive spotlight */}
      <ScrollEffects />

      {/* Dynamic Navigation Header */}
      <Navbar />

      {/* Main Content Layout sections */}
      <main className="flex-grow pt-4">
        <Hero />
        
        {/* About studio and visual Progress Showcase */}
        <TomorrowBetter />
        <SeeProgress />
        
        {/* Custom interactive service highlights rows */}
        <OfferList />
        
        {/* Dynamic customer feedback slider block */}
        <Testimonials />

        {/* Dynamic organic FAQ accordion block */}
        <FAQ />
        
        {/* Newsletter call-to-action */}
        <Newsletter />
      </main>

      {/* Corporate directory and policies links Footer */}
      <Footer />

      {/* Interactive Floating Scroll Back to Top Controller */}
      <ScrollToTop />
    </div>
  );
}

