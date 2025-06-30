"use client";
import React from "react";
import { ContainerScroll } from "../src/components/container-scroll-animation";
import troudz from "./assets/logo.png"
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import ucam from "./assets/ucam.png"
import bg from "./assets/bg2.avif"
import logo from "./assets/techbeedi.png"
import { FaYoutube } from 'react-icons/fa';


export function Services() {
  return (
    <div className="flex flex-col sm:block hidden overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  text-white">
              What I Offer? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Designs & {" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text font-bold italic text-4xl md:text-[6rem] drop-shadow-lg">
                  Analysis
                </span>
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full max-w-6xl mx-auto p-3 rounded-3xl overflow-hidden">

          <div className="grid grid-cols-3 grid-rows-2 h-full gap-5">
            <div className="group relative bg-[#0A0A0A] hover:bg-[#0A0A0A] overflow-hidden text-white p-6 rounded-xl border border-[#111111] shadow-[inset_0_0_90px_#111111] hover:shadow-[inset_0_0_80px_#161616] transition-shadow duration-300">

              <h2 className="text-xl text-[#C3CBE2] font-bold mb-2">Data Analyst Intern</h2>
              <p className="text-sm text-[#809BCD]">@ Troudz.ai</p>

              <div className="w-full mt-5 flex items-center justify-center">
                <img src={troudz} className="h-auto w-20 z-5" />
              </div>

              <div className="absolute bottom-[-38px] left-17 transform -translate-x-1/2 opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all duration-300 cursor-pointer ease-in-out bg-[#1D1D1D] flex items-center rounded-md justify-center p-1 w-23">
                <a href="https://troudz.com/" className="hover:underline">
                          Click here
                        </a>
              </div>
            </div>


            <div className="relative group bg-[#0A0A0A] text-white p-6 rounded-xl border border-[#111111] shadow-[inset_0_0_50px_#111111] hover:shadow-[inset_0_0_80px_#161616] transition-shadow duration-300 overflow-hidden">

              <div className="absolute inset-0 z-0 rounded-xl [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_80%)] [background-size:20px_20px] [background-image:radial-gradient(#1f1f1f_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />

              <div className="relative z-10">
                <h2 className="text-xl font-bold text-[#C3CBE2] mb-2">My Social Media</h2>
                <p>Blah</p>
              </div>
              <div className="flex flex-row items-center justify-between w-full mt-4 px-5 ">
                <div className="w-14 h-14 bg-transparent hover:-translate-y-2 transform-all duration-300 flex items-center justify-center rounded-full cursor-pointer shadow-[inset_0_0_15px_#575757] z-5 ">
                  <FaWhatsapp size={30} className="text-gray-500" />
                </div>
                <div className="w-16 h-16 bg-transparent hover:-translate-y-2 transform-all duration-300 flex items-center justify-center rounded-full cursor-pointer shadow-[inset_0_0_15px_#575757] z-5 ">
                  <a
                    href="https://instagram.com/ghyanesh_42"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} className="text-gray-500" />
                  </a>

                </div>
                <div className="w-14 h-14 bg-transparent hover:-translate-y-2 transform-all duration-300 flex items-center justify-center rounded-full cursor-pointer shadow-[inset_0_0_15px_#575757] z-5 ">
                  <a
                    href="https://github.com/Ghyaneshdeepz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} className="text-gray-500" />
                  </a>
                </div>
              </div>
              <div className="absolute bottom-[-38px] left-26 transform -translate-x-1/2 opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all duration-300 cursor-pointer ease-in-out bg-[#1D1D1D] flex items-center rounded-md justify-center p-1 w-40">
                <h1 className="font-bold text-xs text-gray-200">Download Resume</h1>
              </div>
            </div>



            <div
              className="row-span-2 relative bg-[#0A0A0A] text-white p-6 rounded-xl border border-[#111111]
    shadow-[inset_0_0_60px_#111111]
    hover:shadow-[inset_0_0_80px_#1B1B1B]
    transition-shadow duration-300 overflow-hidden "
            >
              <img
                src={bg}
                alt="Background"
                className="absolute bottom-0 right-0 w-full h-full object-cover rounded-xl opacity-30 pointer-events-none"
                style={{ zIndex: 0 }}
              />
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  zIndex: 1,
                  background:
                    "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0) 80%)",
                }}
              ></div>
              <div className="relative z-10 w-full flex flex-col items-center text-center">
                <h2 className="text-xl font-bold text-[#D7BFE0]">Passionate about</h2>
                <p className="text-xl text-[#809BCD] font-bold">UI Design & Analysis</p>
                <div className="w-full mt-5 flex items-center justify-center"></div>
                <div className="w-full flex flex-col px-1 justify-center">
                  <div className="p-4 w-full space-y-2 h-43 mt-3 rounded-2xl bg-[#111111]">
                    <div className="w-full space-y-3 p-4 h-27 rounded-2xl bg-[#1A1B1B] shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                      <img src={ucam} className="w-15 h-auto" alt="UCAM" />
                      <h1 className="text-[#C3CBE2] text-xs font-bold">
                        Created a dashboard for UCAM data using GCP and Looker Studio.
                      </h1>
                    </div>
                    <div className="bg-[#1A1B1B] flex items-center cursor-pointer rounded-md justify-center p-1 w-23">
                      <h1 className="font-bold text-xs text-gray-200">
                        <a href="https://lookerstudio.google.com/reporting/bbbb08ff-ea0d-48ae-bbdb-8a4b987cef21" className="hover:underline">
                          Click here
                        </a>
                      </h1>

                    </div>
                  </div>
                  <div className="w-full mt-[5.5rem] flex flex-col space-y-3.5 items-center justify-center">
                    <div className="relative group inline-block">
                      <img src={logo} className="h-auto w-25" alt="Logo" />
                      <span
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 
               bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap transition-opacity duration-300"
                      >
                        Check out my youtube channel
                      </span>
                    </div>



                    <a href="https://www.youtube.com/@TechBeedi" target="_blank" rel="noopener noreferrer">
                      <FaYoutube size={35} className="text-red-500 cursor-pointer" />
                    </a>

                  </div>

                </div>
              </div>
            </div>



            <div className="relative col-span-2 bg-[#0A0A0A] text-white p-6 rounded-xl border border-[#111111] 
                 shadow-[inset_0_0_70px_#101010] 
                hover:shadow-[inset_0_0_80px_#161616] 
                transition-shadow duration-300">

              <div className="grid px-3 mt-5 grid-cols-4 gap-3 group relative ">
                <div className="p-3 rounded-2xl bg-gradient-to-b from-[#2b2c2c] to-transparent 
                  blur-[1px] transition-all duration-300 
                  group-hover:blur-[2px] hover:!blur-none ">
                  <h1 className="text-sm font-semibold">Face Reco Attendence system</h1>
                  <p className="text-xs mt-1 text-gray-500 font-medium">Using MERN stack and cloud storage</p>
                </div>

                <div className="p-3 rounded-2xl bg-gradient-to-b from-[#2b2c2c] to-transparent 
                  blur-[1px] transition-all duration-300 
                  group-hover:blur-[2px] hover:!blur-none">
                  <h1 className="text-sm font-semibold">React Native App</h1>
                  <p className="text-xs mt-1 text-gray-500 font-medium">Using MERN stack and cloud storage</p>
                </div>

                <div className="p-3 rounded-2xl bg-gradient-to-b from-[#2b2c2c] to-transparent 
                  blur-[1px] transition-all duration-300 
                  group-hover:blur-[2px] hover:!blur-none">
                  <h1 className="text-sm font-semibold">Analysis dashboard for XIOMI</h1>
                  <p className="text-xs mt-1 text-gray-500 font-medium">Using MERN stack and cloud storage</p>
                </div>

                <div className="p-3 rounded-2xl bg-gradient-to-b from-[#2b2c2c] to-transparent 
                  blur-[1px] transition-all duration-300 
                  group-hover:blur-[2px] hover:!blur-none">
                  <h1 className="text-sm font-semibold">Face Reco Attendence system</h1>
                  <p className="text-xs mt-1 text-gray-500 font-medium">Using MERN stack and cloud storage</p>
                </div>
              </div>
              <div className="w-full p-3">
                <p className="text-xs  text-gray-300">During My Acedemics</p>
                <h2 className="text-md font-bold mb-2">My Projects</h2>
              </div>


            </div>

          </div>


        </div>
      </ContainerScroll>
    </div>
  );
}
