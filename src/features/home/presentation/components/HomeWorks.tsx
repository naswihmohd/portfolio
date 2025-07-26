"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const works = [
    {
        label: "Duvet Genius",
        description: "A smart bedding solution for modern homes, featuring seamless integration and responsive design.",
        laptopLightImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/5fab5b172994237.6488c431cba8e.jpg",
        laptopDarkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/5fab5b172994237.6488c431cba8e.jpg",
        mobileLightImage: "https://cdns.tblsft.com/sites/default/files/blog/screen_shot_2015-08-18_at_12.00.39_pm.png",
        mobileDarkImage: "https://cdns.tblsft.com/sites/default/files/blog/screen_shot_2015-08-18_at_12.00.39_pm.png",
        link: "#",
    },
    {
        label: "Genius",
        description: "A smart bedding solution for modern homes, featuring seamless integration and responsive design.",
        laptopLightImage: "https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg",
        laptopDarkImage: "https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg",
        mobileLightImage: "https://cdns.tblsft.com/sites/default/files/blog/screen_shot_2015-08-18_at_12.00.39_pm.png",
        mobileDarkImage: "https://cdns.tblsft.com/sites/default/files/blog/screen_shot_2015-08-18_at_12.00.39_pm.png",
        link: "#",
    },
];

const HomeWorks = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const work = works[current];

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
            rotate: dir > 0 ? 2 : -2,
            position: "absolute" as const,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            position: "relative" as const,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0,
            scale: 0.95,
            rotate: dir > 0 ? -2 : 2,
            position: "absolute" as const,
        }),
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % works.length);
        }, 3000); // 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-20 px-4 md:px-0">
            <div className="w-full max-w-7xl flex flex-col gap-12 overflow-hidden" >
                <motion.div
                    key='home-works'
                    className="group grid grid-cols-1 md:grid-cols-2 items-center justify-between rounded-2xl p-6 md:p-12 gap-8 relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Left: Project Info */}
                    <div className="flex flex-col items-start justify-center text-left">
                        <span className="bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-lg mb-4">Just one of the many</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Selected Work</h3>
                        <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">Take a look below at some of my featured work for clients from the past few years.</p>
                        <button className="bg-gradient-to-r from-[#5e04c6] to-[#370471] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 self-start md:self-auto">
                            View All
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
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 0.7
                                }}
                                className="w-full h-full flex items-center justify-center gap-12"
                                style={{ boxShadow: "0 8px 32px 0 rgba(80, 0, 120, 0.15)" }}
                            >
                                <div className="absolute top-0 left-0">
                                    <LaptopDivMockup lightImage={work.laptopLightImage} darkImage={work.laptopDarkImage} alt={work.label} />
                                </div>
                                <div className="absolute bottom-0 right-0 md:-right-10">
                                    <IphoneDivMockup lightImage={work.mobileLightImage} darkImage={work.mobileDarkImage} alt={work.label} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        {/* Navigation Arrows removed for auto-scroll */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const IphoneDivMockup = ({ lightImage, darkImage, alt }: { lightImage: string; darkImage: string; alt: string }) => (
    <motion.div
        className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[6px] rounded-[1rem] h-[200px] w-[85px] shadow-lg" // reduced size
        initial={{ y: 0, boxShadow: "0 8px 32px 0 rgba(185,122,255,0.15)" }}
        animate={{
            y: [0, -10, 0], boxShadow: [
                "0 8px 32px 0 rgba(185,122,255,0.15)",
                "0 16px 48px 0 rgba(185,122,255,0.25)",
                "0 8px 32px 0 rgba(185,122,255,0.15)"
            ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
        <div className="h-[10px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[6px] top-[22px] rounded-s-lg"></div>
        <div className="h-[14px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[6px] top-[38px] rounded-s-lg"></div>
        <div className="h-[14px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[6px] top-[54px] rounded-s-lg"></div>
        <div className="h-[18px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -end-[6px] top-[45px] rounded-e-lg"></div>
        <div className="rounded-[0.8rem] overflow-hidden w-[75px] h-[178px] bg-white dark:bg-gray-800 mx-auto">
            <img src={lightImage} alt={alt} className="dark:hidden w-[75px] h-[178px] object-cover" />
            <img src={darkImage} alt={alt} className="hidden dark:block w-[75px] h-[178px] object-cover" />
        </div>
    </motion.div>
);

const LaptopDivMockup = ({ lightImage, darkImage, alt }: { lightImage: string; darkImage: string; alt: string }) => (
    <div className="flex flex-col items-center">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[4px] rounded-t-xl h-[170px] max-w-[300px] md:h-[240px] md:max-w-[400px] shadow-lg"> {/* Reduced size */}
            <div className="rounded-lg overflow-hidden h-[160px] md:h-[230px] bg-white dark:bg-gray-800">
                <img src={lightImage} alt={alt} className="dark:hidden h-[160px] md:h-[230px] w-full rounded-lg object-cover" />
                <img src={darkImage} alt={alt} className="hidden dark:block h-[160px] md:h-[230px] w-full rounded-lg object-cover" />
            </div>
        </div>
        <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[14px] max-w-[300px] md:h-[20px] md:max-w-[400px]"> {/* Reduced size */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[50px] h-[5px] md:w-[80px] md:h-[8px] bg-gray-800"></div>
        </div>
    </div>
);

export default HomeWorks;
