import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Benefits from "./Benefits";
import InsuranceBenefitsSection from "./Features";
import TestimonialsSection from "./Testimonials";
import Brands from "./Brands";
import FooterSection from "./Footer";

function App() {

  return (
    <main>
      <section className="header-bg bg-cover header-bg h-screen ">
        <Navbar />
        <HeroSection />
      </section>
      <Benefits />
      <InsuranceBenefitsSection />
      <TestimonialsSection />
      <Brands />
      <FooterSection />
    </main>
  );
}

export default App;
