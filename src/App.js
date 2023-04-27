import About from "./components/About";
import Building from "./components/Building";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <Building />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
