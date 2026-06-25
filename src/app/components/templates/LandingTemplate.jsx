import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";
import Benefits from "../organisms/Benefits";
import Services from "../organisms/Services";
import Process from "../organisms/Process";
import Pricing from "../organisms/Pricing";
import Portfolio from "../organisms/Portfolio";
import CTA from "../organisms/CTA";
import Footer from "../organisms/Footer";
import Testimonials from "../organisms/Testimonials";
import Contact from "../organisms/Contact";

export default function LandingTemplate() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}