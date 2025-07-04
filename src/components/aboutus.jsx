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
              My academic foundation
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white sm:block hidden text-xl font-semibold">
                Completed schooling in 2018 from Sacred Heart English Medium School, followed by PU and BCA from the same institution. Currently pursuing MCA at Dayananda Sagar Academy of Technology and Management, Bangalore.              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full group">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] animate-border-width" />
          </div>

          <div className="flex h-auto min-h-[300px] md:h-80 flex-col gap-4 p-6 sm:p-7 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black">
            <p className="text-4xl font-bold text-gray-200 transition-opacity duration-300 group-hover:opacity-0">
              Technical Internship Experience
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white text-sm md:text-md lg:text-lg font-semibold break-words overflow-hidden text-ellipsis leading-tight">

                Gained hands-on experience in data cleaning, transformation, and visualization using Power BI and Looker Studio. Developed proficiency in managing cloud-based data workflows with Google Cloud Platform, including data migration and integration into BigQuery. Collaborated on real-world projects to ensure accurate and efficient data handling, improving data accessibility and reporting for the team.
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
              Professional Certifications and Training
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white text-sm md:text-md lg:text-lg font-semibold break-words overflow-hidden text-ellipsis leading-tight">
                Completed Full Stack Java Development from TCS, funded by Capgemini. Developed strong skills in building robust backend services using Spring Boot, creating dynamic frontends with React, and testing APIs efficiently with Postman. The program emphasized practical, real-world application development, agile methodologies, and collaboration, preparing me to contribute effectively in professional software development teams.

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
              Home town and roots
            </p>
            <button className="md:mt-4 self-start bg-white text-black flex gap-2 px-4 py-2 rounded-[0.7rem] md:rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-300 group-hover:opacity-0">
              Explore
              <HiArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 p-5 md:p-6 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
              <p className="text-white sm:block hidden text-xl font-semibold">
                Born and raised in Mangalore, a vibrant coastal city known for its rich culture and scenic beauty. Growing up here has shaped my values, work ethic, and appreciation for diversity.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
