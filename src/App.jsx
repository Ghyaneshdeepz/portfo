import React from "react";
import Navbar from './components/navbar';
import { BackgroundLines } from "../src/components/background-lines";
import Hero from './components/hero';
import AboutUs from "./components/aboutus";
import Bglines from "./components/bglines";
import Working from "./components/working";
import Aboutme from "./components/aboutme";
import { Services } from "./services";
import Reference from "./components/reference";
export default function App() {
  return (
    <div className="text-white min-h-screen relative">
    
      
      <div className="fixed inset-0 -z-10">
        {/* <BackgroundLines className="md:block hidden"/>  */}
      </div>

      <Navbar />
      <Hero />
      <AboutUs />
      <Services/>
      <Working/>
      <Aboutme/>
      <Reference/>
    </div>
  );
}
