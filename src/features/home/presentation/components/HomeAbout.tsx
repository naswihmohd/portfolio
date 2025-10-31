"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaUser } from "react-icons/fa";
import myPic2 from "@/asset/images/about-image.png";
import { AboutMe } from "@/general/constants/Constants";
import cvFile from "@/asset/cv/CV - Muhammed Naswih.pdf";

const HomeAbout = () => {
    const personalDetails = [
        { icon: FaCalendarAlt, label: "Birthday", value: AboutMe.BIRTHDAY },
        { icon: FaPhone, label: "Phone", value: AboutMe.PHONE_NUMBER },
        { icon: FaEnvelope, label: "Email", value: AboutMe.EMAIL },
        { icon: FaMapMarkerAlt, label: "From", value: AboutMe.ADDRESS },
        { icon: FaGlobe, label: "", value: AboutMe.LANGUAGE },
        { icon: FaUser, label: "Freelance", value: AboutMe.FREELANCE }
    ];

    const handleDownloadCV = () => {
        window.open("/CV - Muhammed Naswih.pdf", '_blank');
    }

    return (
        <section className="px-4 md:px-16 pt-32">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.3 }}
                className="md:text-7xl md:px-16 w-full mx-auto max-w-7xl text-2xl font-bold text-white/10 select-none leading-0"
            >
                ABOUT ME
            </motion.div>
            <div className="w-full mx-auto max-w-7xl pt-8 grid md:grid-cols-2 overflow-hidden">
                {/* Left: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1 flex items-center justify-center my-auto z-10"
                >
                    <motion.div
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="rounded-2xl max-w-xs w-full overflow-hidden flex items-center justify-center"
                    >
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                            src={myPic2.src}
                            alt="Profile"
                            className="object-cover w-full h-full mt-8"
                        />
                    </motion.div>
                </motion.div>

                {/* Right: About Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:order-2 order-1 flex flex-col items-start justify-center z-10 max-w-2xl"
                >

                    {/* Main Content */}
                    <div className="">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            I'm Muhammed Naswih
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            className="text-gray-300 text-sm font-light md:text-base leading-relaxed mb-8"
                        >
                            MERN Full Stack Developer | Designing High-Performance, Scalable, and User-Friendly Web Platforms
                        </motion.p>

                        {/* Personal Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                        >
                            {personalDetails.map((detail, index) => {
                                const IconComponent = detail.icon;
                                return (
                                    <motion.div
                                        key={detail.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex items-center gap-2">
                                            <IconComponent className="w-4 h-4 text-[#ada2b9]" />
                                        </div>
                                        <span className="text-white font-medium">{detail.label}:</span>
                                        <span className="text-gray-300">{detail.value}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Download CV Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownloadCV}
                            className="flex items-center bg-gradient-to-r from-[#5e04c6] to-[#370471] gap-3 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg"
                        >
                            <FaDownload className="w-5 h-5" />
                            Download CV
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeAbout;
