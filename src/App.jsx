import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Feature from "./sections/Feature";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <Feature />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
