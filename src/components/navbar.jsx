import { FaMagic } from 'react-icons/fa';
import { HiMenu } from "react-icons/hi";
const Navbar = ({ className }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/2 backdrop-blur-md shadow-lg ${className}`}
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="flex justify-between items-center py-3 sm:py-0 px-5">
        <div className="text-white font-bold">TechBeedi</div>

        <div className="hidden md:flex items-center justify-center gap-8 p-4 text-white font-semibold tracking-wide select-none">
          <div className="hover:bg-cyan-300/30 bg-white/10 text-xs py-1 cursor-pointer rounded-[0.5rem] px-3 transition-colors duration-200">
            Home
          </div>
          <div className="hover:bg-purple-300/30 bg-white/10 text-xs py-1 cursor-pointer rounded-lg px-3 transition-colors duration-200">
            AboutUs
          </div>
          <div className="hover:bg-pink-300/30 bg-white/10 text-xs py-1 cursor-pointer rounded-lg px-3 transition-colors duration-200">
            Nothing
          </div>
          <div className="hover:bg-green-300/30 bg-white/10 text-xs py-1 cursor-pointer rounded-lg px-3 transition-colors duration-200">
            Contact
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className="flex items-center gap-2 text-black font-bold hover:bg-white/50 rounded-[0.7rem] px-3 py-1 bg-[#FFFFFF] cursor-pointer transition-all duration-300">
            <FaMagic className="text-black-500" />
            Hire Me
          </div>
          <HiMenu size={22} className='sm:hidden block' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
