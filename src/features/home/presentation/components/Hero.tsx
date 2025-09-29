"use client"

import React from "react";
import { motion } from "framer-motion";
import myPic from "@/asset/images/naswih.webp";
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SocialLinks } from "@/general/constants/Constants";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
    const socialLinks = [
        { icon: FaLinkedin, label: "LinkedIn", href: SocialLinks.LINKEDIN },
        { icon: SiLeetcode, label: "Leetcode", href: SocialLinks.LEETCODE },
        { icon: FaGithub, label: "Github", href: SocialLinks.GITHUB },
        { icon: FaInstagram, label: "Instagram", href: SocialLinks.INSTAGRAM },
        { icon: FaFacebook, label: "Facebook", href: SocialLinks.FACEBOOK },
        { icon: FaWhatsapp, label: "WhatsApp", href: SocialLinks.WHATSAPP },
    ];

    return (
        <section className="relative w-full mx-auto max-w-7xl min-h-[600px] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 overflow-hidden">
            {/* Left: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 order-2 md:order-1 flex flex-col items-start justify-center z-10 max-w-xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className=" font-semibold pt-16 md:pt-0 md:text-xl text-base text-white mb-4 leading-tight"
                >
                    Hello, my name is <br />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-2xl md:text-5xl font-bold"
                    >
                        Muhammed Naswih
                    </motion.span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-sm md:text-base text-gray-200/80 mb-4"
                >
                    Full Stack Developer (MERN) | Building High-Performance, Scalable & User-Centric Web Applications
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-wrap gap-4 mb-8"
                >
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                            >
                                <IconComponent className="w-5 h-5" />
                            </motion.a>
                        );
                    })}
                </motion.div>
            </motion.div>
            {/* Right: Profile Image */}
            <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="flex-1 md:order-2 order-1 flex items-center justify-center mt-10 md:mt-0 z-10"
            >
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-64 h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#370471] flex items-center justify-center"
                >
                    {/* Replace src with your own image */}
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        src={myPic.src}
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
