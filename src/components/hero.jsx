import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiTailwindcss, SiReact, SiVite, SiMongodb } from "react-icons/si";
import Bglines from "./bglines";
import FigmaConverter from "./figmaconverter";
import RotatingText from "./Rotatingtext";
import { HiOutlineClipboard } from "react-icons/hi";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "ghyanesh.co@Gmail.com";

  const copyClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between text-white px-4 md:px-24 py-25 sm:py-8 relative z-10">
      <Bglines />

      <div className="w-full md:w-1/2 text-left space-y-6 font-nohemi">
        <div className="text-4xl md:text-5xl font-bold leading-tight">
          <h1 className="flex flex-wrap gap-2">
            {"Full Stack Developer delivering".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
                className={`inline-block ${word === "designs" ? "text-gray-300" : "text-white"}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>


          <RotatingText
            texts={["Figma",
              "TailwindCSS",
              "React",
              "Code",
              "Precision",
              "Interactivity"]}
            mainClassName=" text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {"I specialize in building full-stack web and mobile apps using MERN Stack, crafting pixel-perfect UIs with Figma and TailwindCSS, and delivering smooth, interactive user experiences."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <button className="bg-white text-black px-6 py-2 rounded-md md:rounded-xl font-semibold shadow hover:opacity-90 transition">
            Lest Connect
          </button>
          <h1 className="flex items-center space-x-2">
            <button
              onClick={copyClipboard}
              aria-label="Copy email"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <HiOutlineClipboard size={20} />
            </button>
            <span>{email}</span>
            {copied && <span className="text-green-500 ml-2">Copied!</span>}
          </h1>
        </div>

        <div className="flex flex-wrap gap-8 mt-8 text-gray-300">
          <div className="flex flex-col items-center text-sm">
            <SiTailwindcss className="w-6 h-6 md:w-7 md:h-7" />
            <span className="mt-1">Tailwind</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <SiReact className="w-6 h-6 md:w-7 md:h-7" />
            <span className="mt-1">React</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <SiVite className="w-6 h-6 md:w-7 md:h-7" />
            <span className="mt-1">Vite</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <SiMongodb className="w-6 h-6 md:w-7 md:h-7" />
            <span className="mt-1">MongoDB</span>
          </div>
        </div>
      </div>

      <div className="relative w-3xl h-screen md:block hidden">
        <FigmaConverter />
      </div>
    </section>
  );
}
