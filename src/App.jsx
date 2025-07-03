import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutUs from "./components/aboutus";
import { Services } from "./services";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contactme from "./components/contactme";
import MarqueeRibbon from "./components/marquee";

export default function App() {
  return (
    <div className="text-white min-h-screen relative scroll-smooth">
      <div className="fixed inset-0 -z-10"></div>

      <Navbar />

      <section id="hero"><Hero /></section>
      <section id="about"><AboutUs /></section>
      <section id="services"><Services /></section>
      <section id="skills"><Skills /></section>
      <section id="blog"><MarqueeRibbon /></section>
      <section id="contact"><Contactme /></section>

      <Footer />
    </div>
  );
}
