'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaMoon, FaSun, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import NavLink from './components/NavLink';
import { SocialLinks } from '../../../general/constants/Constants';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const socialIcons = [
    { icon: <FaTwitter />, href: SocialLinks.TWITTER },
    { icon: <FaGithub />, href: SocialLinks.GITHUB },
    { icon: <FaLinkedin />, href: SocialLinks.LINKEDIN },
    { icon: <FaInstagram />, href: SocialLinks.INSTAGRAM },
    { icon: <FaFacebook />, href: SocialLinks.FACEBOOK },
    { icon: <FaWhatsapp />, href: SocialLinks.WHATSAPP },
    { icon: <SiLeetcode />, href: SocialLinks.LEETCODE },
];

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    // Using pathname-based active state in NavLink component

    // Toggle dark/light mode
    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark', !darkMode);
        }
    };

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="w-full px-4 py-6 backdrop-blur-md bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] shadow-lg"
        >

            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center text-white gap-8">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} title={link.name} href={link.href} />
                    ))}
                </div>

                {/* Social Icons & Theme Toggle */}
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-3 text-white text-lg">
                        {socialIcons.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.href}
                                whileHover={{ scale: 1.2, color: '#fff' }}
                                className="transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Add a hamburger menu and mobile nav if needed */}
                </div>
            </div>
        </motion.nav>
    );
}
