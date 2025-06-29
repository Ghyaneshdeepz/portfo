import React from "react";
import Bglines from "./bglines";
import { Cover } from "./cover";
import { HiOutlineClipboardCopy } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center  text-white px-6">
      <Bglines />
      <h1 className="text-4xl md:text-4xl lg:text-[4rem] font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        I help founders turn ideas<br />into seamless digital <Cover className="cursor-pointer">experiences</Cover>
      </h1>
      <p className="text-lg md:text-xl text-white dark:text-neutral-300 max-w-3xl mx-auto text-center mt-2">
        Specializing in MERN stack development, intuitive UI/UX, and insightful data analysis to build powerful digital products.
      </p>
      <div className="flex items-center gap-8 mt-10">
        <button className="bg-white text-black font-bold p-2 rounded-md px-5 cursor-pointer hover:scale-105  hover:shadow-blue-500/50 hover:shadow-2xl transform-all duration-200">
          Let's Connect
        </button>
        <div className="flex gap-2.5 cursor-pointer">
          <HiOutlineClipboardCopy style={{ fontSize: '24px' }} />
          <h1 className="">ghyanesh.co@gmail.com</h1>
        </div>
      </div>


    </section>
  );
}
