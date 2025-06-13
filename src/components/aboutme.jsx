'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

export default function Aboutme() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const [activeProject, setActiveProject] = useState('portfolio');

    useEffect(() => {
        function onScroll() {
            if (!ref1.current || !ref2.current) return;

            const rect1 = ref1.current.getBoundingClientRect();
            const rect2 = ref2.current.getBoundingClientRect();

            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Calculate visible height of first card
            const visibleHeight1 = Math.min(rect1.bottom, windowHeight) - Math.max(rect1.top, 0);
            // Calculate visible height of second card
            const visibleHeight2 = Math.min(rect2.bottom, windowHeight) - Math.max(rect2.top, 0);

            // Make sure visibleHeight is not negative (if card is completely off-screen)
            const vh1 = visibleHeight1 > 0 ? visibleHeight1 : 0;
            const vh2 = visibleHeight2 > 0 ? visibleHeight2 : 0;

            if (vh2 > vh1) {
                if (activeProject !== 'attendance') setActiveProject('attendance');
            } else {
                if (activeProject !== 'portfolio') setActiveProject('portfolio');
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initial check on mount

        return () => window.removeEventListener('scroll', onScroll);
    }, [activeProject]);

    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-33">
            <div className="flex w-full justify-center pt-10 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold">
                    Some of my{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 italic to-pink-500 bg-clip-text text-transparent">
                        Works
                    </span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row p-4 mt-15 sm:p-6 gap-8">
                <div className="w-full lg:w-1/2 py-10 flex flex-col gap-6">
                    <motion.div
                        ref={ref1}
                        animate={activeProject === 'portfolio' ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.5, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="w-full h-[70vh] rounded-2xl p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-sm"
                    >
                        <div className="bg-white h-full w-full rounded-xl">
                            <iframe
                                src="https://portfolio-seven-dun-54.vercel.app/"
                                title="Embedded Portfolio"
                                className="w-full h-full rounded-xl"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        animate={activeProject === 'attendance' ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.5, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="w-full h-[70vh] rounded-2xl p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-sm"
                    >
                        <div className="bg-white h-full w-full items-center justify-center flex rounded-xl">
                            
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-1/2 hidden sm:block">
                    <div className="lg:sticky py-15 lg:top-20">
                        {activeProject === 'portfolio' ? (
                            <div className="flex space-x-5 items-start">
                                <div className="w-4 h-16 bg-green-500 rounded-full mt-1"></div>
                                <div className="flex flex-col space-y-4">
                                    <h1 className="text-xl sm:text-2xl font-bold">Welcome to My Portfolio</h1>
                                    <p className="text-sm sm:text-base text-white">
                                        This is an embedded version of my personal portfolio website, where I showcase my projects, technical skills, and experiences as a developer.
                                        The design and concept were inspired by the clean and interactive interface of the Blynk platform,
                                        which guided me in creating a more user-friendly and modern portfolio layout.
                                    </p>

                                    <div className="pt-4">
                                        <h2 className="text-base sm:text-lg font-semibold text-white mb-2">Tech Stack Used:</h2>
                                        <div className="pt-4 flex flex-col gap-2">
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <FaReact className="text-base" /> React
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <FaNodeJs className="text-base" /> Node.js
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <SiExpress className="text-base" /> Express.js
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <SiTailwindcss className="text-base" /> Tailwind CSS
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <SiMongodb className="text-base" /> MongoDB
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex space-x-5 items-start">
                                <div className="w-4 h-16 bg-blue-500 rounded-full mt-1"></div>
                                <div className="flex flex-col space-y-4">
                                    <h1 className="text-xl sm:text-2xl font-bold">Face Recognization Attendence system</h1>
                                    <p className="text-sm sm:text-base text-white">
                                        This is a Face Recognition Attendance System built using the MERN stack and a Python API for facial recognition.
                                        It automates attendance marking through live webcam input, using real-time face detection powered by OpenCV.
                                        The user-friendly interface and architecture were inspired by modern, modular systems to ensure smooth integration and accurate recognition.
                                    </p>

                                    <div className="pt-4">
                                        <h2 className="text-base sm:text-lg font-semibold text-white mb-2">Tech Stack Used:</h2>
                                        <div className="pt-4 flex flex-col gap-2">
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <FaReact className="text-base" /> React
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <FaNodeJs className="text-base" /> Node.js
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <SiExpress className="text-base" /> Express.js
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <SiTailwindcss className="text-base" /> Tailwind CSS
                                            </div>
                                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                                <SiMongodb className="text-base" /> MongoDB
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
