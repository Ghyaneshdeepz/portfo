import { HiOutlineSparkles } from "react-icons/hi";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import img from "../assets/git.png";

export default function Working() {
  return (
    <div className="px-4 py-10 sm:px-10 md:px-20 lg:px-40 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-[#0A0A0A] rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-10 shadow-2xl relative">
        
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
            <HiOutlineSparkles className="text-yellow-400" />
            How It Works
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-300">
            Simply paste your Figma design URL into the input, and our powerful tool will analyze the design structure, styles, and layout. It then automatically generates clean, semantic Tailwind CSS code that you can immediately use in your projects — dramatically speeding up your development workflow and bridging the gap between design and code.
          </p>
          <button className="w-max px-5 py-3 bg-[#1A1A1A] rounded-lg hover:bg-[#2b2b2b] transition-colors">
            View More
          </button>
        </div>

        
        <div className="hidden lg:flex lg:w-1/2 bg-[#1A1A1A] rounded-3xl p-6 items-center justify-center shadow-lg relative overflow-hidden">
         
        </div>
      </div>
    </div>
  );
}
