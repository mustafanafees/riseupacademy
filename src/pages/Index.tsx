
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import DarkGradientSection from "@/components/DarkGradientSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <DarkGradientSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
