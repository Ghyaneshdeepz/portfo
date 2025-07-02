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
    <div className="text-white min-h-screen relative">
      <div className="fixed inset-0 -z-10">
      </div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services/>
      <Skills/>
      <MarqueeRibbon/>
      <Contactme/>
      <Footer/>
    </div>
  );
}
