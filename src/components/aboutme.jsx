'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import bg from "../assets/bg.png"

export default function Aboutme() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [activeProject, setActiveProject] = useState('portfolio');

    const getVisibleHeight = (rect, windowHeight) => {
        return Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
    };

    const handleScroll = useCallback(() => {
        if (!ref1.current || !ref2.current) return;

        const rect1 = ref1.current.getBoundingClientRect();
        const rect2 = ref2.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const vh1 = getVisibleHeight(rect1, windowHeight);
        const vh2 = getVisibleHeight(rect2, windowHeight);

        if (vh2 > vh1 && activeProject !== 'attendance') {
            setActiveProject('attendance');
        } else if (vh1 >= vh2 && activeProject !== 'portfolio') {
            setActiveProject('portfolio');
        }
    }, [activeProject]);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, [handleScroll]);

    const cardVariants = {
        active: { opacity: 1, y: 0, scale: 1 },
        inactive: { opacity: 0.5, y: 20, scale: 0.95 },
    };

    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-32">
            <div className="flex flex-col w-full justify-center pt-10 text-center">
                <h1 className="uppercase text-sm font-semibold">Featuring</h1>
                <h1 className="text-3xl sm:text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] font-bold">
                    Some of my{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 italic to-pink-500 bg-clip-text text-transparent">
                        Works
                    </span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row p-4 sm:p-6 gap-8">
                <div className="w-full lg:w-[70%] py-10 flex flex-col gap-6">
                    <motion.div
                        ref={ref1}
                        animate={activeProject === 'portfolio' ? 'active' : 'inactive'}
                        variants={cardVariants}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="w-full h-[70vh] rounded-2xl  p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-sm"
                    >
                        <div className="w-full max-w-2xl mx-auto h-full sm:h-auto bg-[#0F2E22] p-6 md:p-10 rounded-xl">
                            <div className="cursor-pointer overflow-hidden rounded-2xl h-auto">
                                <img src={bg} alt="background" className="w-full h-auto rounded-2xl object-cover" />
                            </div>
                            
                        </div>

                    </motion.div>

                    <motion.div
                        ref={ref2}
                        animate={activeProject === 'attendance' ? 'active' : 'inactive'}
                        variants={cardVariants}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="w-full h-[70vh] rounded-2xl p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-sm"
                    >
                        <div className="bg-black/30 p-5 h-full w-full flex flex-col rounded-xl">
                            <div className="w-full h-[40vh] rounded-2xl overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/AF46tPiYG5M"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h1 className="font-bold mt-5 text-2xl">Check out my channel</h1>
                            <div className="flex justify-start">
                                <button className="p-2 bg-white rounded-xl mt-5 text-black font-bold">
                                    Click here
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-[40%] hidden sm:block">
                    <div className="lg:sticky py-15 lg:top-20">
                        <ProjectDetails project={activeProject} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectDetails({ project }) {
    if (project === 'portfolio') {
        return (
            <div className="flex space-x-5 items-start">
                <div className="w-4 h-16 bg-green-600 rounded-full mt-1"></div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl sm:text-2xl font-bold">Personal Portfolio Website</h1>
                    <p className="text-sm sm:text-base text-white/60">
                        This is an embedded version of my personal portfolio website, where I showcase my projects, technical skills, and experiences as a developer. The design and concept were inspired by the clean and interactive interface of the Blynk platform.
                    </p>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                            <svg className="text-green-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>Project Showcase: Interactive display of my latest projects with descriptions and links.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="text-green-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>Technical Skills: Clear presentation of programming languages and tools I use.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="text-green-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>Experience Timeline: Chronological overview of my career and development milestones.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="text-green-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>Clean UI Design: Inspired by Blynk’s minimal and interactive interface for user-friendly navigation.</p>
                        </div>
                        <div className="flex gap-2.5 mt-2">
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <FaReact className="text-base" /> React
                            </div>
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <FaNodeJs className="text-base" /> Node.js
                            </div>
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <SiMongodb className="text-base" /> MongoDB
                            </div>
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <SiExpress className="text-base" /> Express.js
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (project === 'attendance') {
        return (
            <div className="flex space-x-5 items-start">
                <div className="w-4 h-16 bg-blue-600 rounded-full mt-1"></div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl sm:text-2xl font-bold">Face Recognition Attendance System</h1>
                    <p className="text-sm sm:text-base text-white/60">
                        This is a Face Recognition Attendance System built using the MERN stack and a Python API for facial recognition. It automates attendance marking through live webcam input using OpenCV.
                    </p>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                            <svg className="text-blue-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>Live Face Detection: Real-time face recognition via webcam using OpenCV.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="text-blue-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>Automated Attendance: Attendance is marked automatically when a registered face is recognized.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="text-blue-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>User Management: Admin can add, update, and remove user profiles.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="text-blue-600" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                            </svg>
                            <p>RESTful Integration: Smooth communication between MERN stack and Python API through HTTP endpoints.</p>
                        </div>
                        <div className="flex gap-2.5 mt-2">
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <FaReact className="text-base" /> React
                            </div>
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <FaNodeJs className="text-base" /> Node.js
                            </div>
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <SiMongodb className="text-base" /> MongoDB
                            </div>
                            <div className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                <SiExpress className="text-base" /> Express.js
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
