'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
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
        <div className="min-h-screen px-4 sm:px-8 lg:px-33">
            <div className="flex flex-col w-full justify-center pt-10 text-center">
                <h1 className='uppercase text-sm font-semibold'>Featuring</h1>
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
                        animate={activeProject === 'portfolio' ? 'active' : 'inactive'}
                        variants={cardVariants}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
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

                <div className="w-full lg:w-1/2 hidden sm:block">
                    <div className="lg:sticky py-15 lg:top-20">
                        {activeProject === 'portfolio' ? (
                            <ProjectDetails
                                title="Welcome to My Portfolio"
                                description="This is an embedded version of my personal portfolio website, where I showcase my projects, technical skills, and experiences as a developer. The design and concept were inspired by the clean and interactive interface of the Blynk platform."
                                techStack={['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB']}
                                highlightColor="green"
                            />
                        ) : (
                            <ProjectDetails
                                title="Face Recognition Attendance System"
                                description="This is a Face Recognition Attendance System built using the MERN stack and a Python API for facial recognition. It automates attendance marking through live webcam input using OpenCV."
                                techStack={['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB']}
                                highlightColor="blue"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectDetails({ title, description, techStack, highlightColor }) {
    const icons = {
        'React': <FaReact className="text-base" />,
        'Node.js': <FaNodeJs className="text-base" />,
        'Express.js': <SiExpress className="text-base" />,
        'Tailwind CSS': <SiTailwindcss className="text-base" />,
        'MongoDB': <SiMongodb className="text-base" />,
    };

    return (
        <div className="flex space-x-5 items-start">
            <div className={`w-4 h-16 bg-${highlightColor}-500 rounded-full mt-1`}></div>
            <div className="flex flex-col space-y-4">
                <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
                <p className="text-sm sm:text-base text-white">{description}</p>

                <div className="pt-4">
                    <h2 className="text-base sm:text-lg font-semibold text-white mb-2">Tech Stack Used:</h2>
                    <div className="pt-4 flex flex-col gap-2">
                        {techStack.map((tech) => (
                            <div key={tech} className="w-fit px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white rounded-full border border-white/30 bg-[#171717]">
                                {icons[tech]} {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
