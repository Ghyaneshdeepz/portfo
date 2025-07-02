import React, { useEffect, useState } from "react";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaLinux,
  FaGit,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiVercel,
} from "react-icons/si";
import { BsUiChecksGrid } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import devil from "../assets/devil3.png";

export default function Skills() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rotateValue = window.scrollY * 0.3; 
      setRotation(rotateValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-auto w-full bg-black text-white">
      <div className="flex flex-col items-center justify-center  text-center">
        <div className="relative w-fit overflow-hidden h-[13rem]">
          <img
            src={devil}
            alt="devil"
            className="w-[25rem] h-auto transition-transform duration-75 ease-out"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "center center",
            }}
          />
          <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        </div>


        <h1 className="uppercase mt-5 text-md font-semibold tracking-widest drop-shadow-md">
          My Skills
        </h1>
        <h1 className="text-3xl sm:text-5xl font-bold ">
          The Awakening{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 italic to-pink-500 bg-clip-text text-transparent">
            Mix
          </span>
        </h1>

        <div className="flex flex-wrap justify-center mt-8 gap-3 px-5 max-w-5xl">
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <FaNodeJs className="text-lg" style={{ color: "#339933" }} />
            <span>NodeJS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <FaReact className="text-lg" style={{ color: "#61DAFB" }} />
            <span>ReactJS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <SiExpress className="text-lg" style={{ color: "#000000" }} />
            <span>ExpressJS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <SiMongodb className="text-lg" style={{ color: "#47A248" }} />
            <span>MongoDB</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <FaPython className="text-lg" style={{ color: "#3776AB" }} />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <FaJava className="text-lg" style={{ color: "#007396" }} />
            <span>Java</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <BsUiChecksGrid className="text-lg" style={{ color: "#00B0FF" }} />
            <span>UI/UX</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <FaFigma className="text-lg" style={{ color: "#F24E1E" }} />
            <span>Figma</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <span className="w-[1.2rem]" />
            <span>CapCut</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <FaLinux className="text-lg" style={{ color: "#FCC624" }} />
            <span>Linux</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <span className="w-[1.2rem]" />
            <span>Expo</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <TbBrandReactNative className="text-lg" style={{ color: "#61DAFB" }} />
            <span>React Native</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <SiTailwindcss className="text-lg" style={{ color: "#38B2AC" }} />
            <span>TailwindCSS</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <SiMysql className="text-lg" style={{ color: "#4479A1" }} />
            <span>SQL</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <SiVercel className="text-lg" style={{ color: "#000000" }} />
            <span>Vercel</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-sm rounded-lg border border-zinc-700">
            <FaGit className="text-lg" style={{ color: "#F05032" }} />
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
}
