import { useState } from "react";
import { FaApple } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import BookCallModal from "./BookCallModal"; // adjust path as necessary

const Navbar = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className={`fixed px-5 top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-neutral-800/30 shadow-md ${className}`}>
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-white text-2xl font-bold">TB</div>

          <div className="hidden md:flex items-center gap-6 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-inner shadow-white/5 text-sm text-white font-medium">
            <div className="px-4 py-1 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer">Home</div>
            <div className="px-4 py-1 rounded-full hover:bg-white/20 transition cursor-pointer">About</div>
            <div className="px-4 py-1 rounded-full hover:bg-white/20 transition cursor-pointer">Work</div>
            <div className="px-4 py-1 rounded-full hover:bg-white/20 transition cursor-pointer">Blog</div>
            <div className="px-4 py-1 rounded-full hover:bg-white/20 transition cursor-pointer">Skills</div>
            <div
              className="px-4 py-1 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Book a Call
            </div>
          </div>

          <div className="text-white">
            <FaApple className="text-xl" />
          </div>

          <div className="md:hidden text-white">
            <HiMenu size={24} />
          </div>
        </div>
      </nav>

      {showModal && <BookCallModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
