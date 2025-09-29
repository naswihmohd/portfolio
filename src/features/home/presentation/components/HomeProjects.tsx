"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadImage from "@/general/components/LoadImage";
import { projects } from "@/features/projects/data/projectData";

const HomeProjects = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const work = projects[current];

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 150 : -150,
            opacity: 0,
            position: "absolute" as const,
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "relative" as const,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -150 : 150,
            opacity: 0,
            position: "absolute" as const,
        }),
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 4000); // 4 seconds for smoother experience
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center pb-10 px-4 md:px-0">
            <div className="w-full max-w-7xl flex flex-col gap-12 overflow-hidden" >
                <motion.div
                    key='home-works'
                    className="group grid grid-cols-1 md:grid-cols-2 items-center justify-between rounded-2xl p-6 md:p-12 gap-8 relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Left: Gallery Info */}
                    <div className="flex flex-col items-start justify-center text-left">
                        <span className="bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-lg mb-4">Showcase Projects</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Where Creativity Builds Impact</h3>
                        <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
                            Each project reflects creativity, passion, and the drive to craft impactful digital experiences.
                        </p>
                        <button className="bg-gradient-to-r from-[#5e04c6] to-[#370471] hover:bg-gradient-to-l hover:from-[#370471] hover:to-[#5e04c6] transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-2 self-start md:self-auto">
                            Explore Projects
                            <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Right: Single Mockup with Animation */}
                    <div className="max-w-xs w-full h-[270px] md:h-[300px] relative mx-auto">
                        <AnimatePresence custom={direction} initial={false} mode="wait">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                                className="w-full h-full flex flex-col items-center justify-center gap-4"
                            >
                                <LoadImage src={work.imageUrl.src} alt={work.title} index={current} className="w-full max-w-xs h-48 object-cover rounded-lg" />
                                <div className="text-center px-4">
                                    <h4 className="text-white font-semibold text-lg mb-1">{work.title}</h4>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeProjects;
