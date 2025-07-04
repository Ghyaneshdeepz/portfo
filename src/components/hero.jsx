import React, { useState } from "react"; // ✅ You forgot to import useState
import Bglines from "./bglines";
import { Cover } from "./cover";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import BookCallModal from "./BookCallModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Fix: useState added

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-6">
      <Bglines />

      <div className="relative z-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-4xl lg:text-[4rem] font-bold max-w-7xl mx-auto text-center mt-6 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#F8FAFC] dark:from-white dark:via-white dark:to-[#F8FAFC]">
          I help founders turn ideas
          <br />
          into seamless digital{" "}
          <Cover className="cursor-pointer">experiences</Cover>
        </h1>

        <p className="text-lg md:text-xl text-white dark:text-neutral-300 max-w-3xl mx-auto mt-2">
          Specializing in MERN stack development, intuitive UI/UX, and insightful data analysis to build powerful digital products.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
          <button
            onClick={openModal}
            className="bg-white text-black font-semibold py-2 px-6 rounded-md w-full sm:w-auto transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            Let's Connect
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <HiOutlineClipboardCopy className="text-xl" />
            <p className="text-sm sm:text-base break-all">ghyanesh.co@gmail.com</p>
          </div>
        </div>
      </div>

      {/* ✅ Render Modal Conditionally */}
      {isModalOpen && <BookCallModal onClose={closeModal} />}
    </section>
  );
}
