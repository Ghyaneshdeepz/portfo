import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function AboutUs() {
  return (
    <div className="h-auto p-5">
      <div className="sticky top-16 px-2 sm:px-4 md:px-5 bg-opacity-80 flex justify-center z-10">
        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[8rem] lg:text-[10rem] xl:text-[14rem] bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent transform font-bold pointer-events-none">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient italic">
            Me
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 mt-5 md:mt-0 md:grid-cols-2 gap-8 px-4 sm:px-10 md:px-20 lg:px-28 xl:px-40 relative z-20">
        <div className="relative h-full w-full group">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] animate-border-width" />
          </div>

          <div className="flex h-auto min-h-[300px] md:h-80 flex-col gap-4 p-6 sm:p-7 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black">
            <p className="text-4xl font-bold text-gray-200 transition-opacity duration-300 group-hover:opacity-0">
              Seamless Design Conversion
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white sm:block hidden text-xl font-semibold">
                Effortlessly transform your Figma designs into clean, responsive TailwindCSS code. Our tool captures layout, spacing, fonts, and colors to give you pixel-perfect UI that’s ready to integrate into your frontend project — no more tedious hand-coding.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full group">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] animate-border-width" />
          </div>

          <div className="flex h-auto min-h-[300px] md:h-80 flex-col gap-4 p-6 sm:p-7 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black">
            <p className="text-4xl font-bold text-gray-200 transition-opacity duration-300 group-hover:opacity-0">
              Speed Up Development
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white sm:block hidden text-xl font-semibold">
                Skip the repetitive parts of frontend work. By auto-generating Tailwind utility classes from your design, you save valuable time and reduce human error. Focus on building features and improving user experience, not recreating layout from scratch.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full group">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] animate-border-width" />
          </div>

          <div className="flex h-auto min-h-[300px] md:h-80 flex-col gap-4 p-6 sm:p-7 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black">
            <p className="text-4xl font-bold text-gray-200 transition-opacity duration-300 group-hover:opacity-0">
              Clean & Ready-to-Use Code
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white sm:block hidden text-xl font-semibold">
                Get structured, production-grade code that’s easy to read, scale, and maintain. Every component follows best practices in TailwindCSS, making it effortless to plug into modern frameworks like React, Vue, or Next.js — without any refactoring.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full group">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] animate-border-width" />
          </div>

          <div className="flex h-auto min-h-[300px] md:h-80 flex-col gap-5 p-6 sm:p-7 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black">
            <p className="text-4xl font-bold text-gray-200 transition-opacity duration-300 group-hover:opacity-0">
              Fully Customizable Output
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white sm:block hidden text-xl font-semibold">
                Get structured, production-grade code that’s easy to read, scale, and maintain. Every component follows best practices in TailwindCSS, making it effortless to plug into modern frameworks like React, Vue, or Next.js — without any refactoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
