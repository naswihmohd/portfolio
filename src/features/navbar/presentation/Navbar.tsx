'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCodepen, FaDribbble, FaGithub, FaMoon, FaSun, FaTwitch, FaTwitter } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Work', href: '#' },
    { name: 'About', href: '#' },
];

const socialIcons = [
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaTwitch />, href: '#' },
    { icon: <FaGithub />, href: '#' },
    { icon: <FaCodepen />, href: '#' },
    { icon: <SiCodesandbox />, href: '#' },
    { icon: <FaDribbble />, href: '#' },
];

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [active, setActive] = useState('Home');

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
            className="w-full px-4 py-4 flex items-center justify-between backdrop-blur-md bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] shadow-lg"
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <span className="text-purple-400 text-2xl">
                    <FaCodepen />
                </span>
                <span className="font-bold text-lg text-white dark:text-white">Jeanine White</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-900/60 to-gray-900/60 dark:from-purple-700/40 dark:to-gray-700/40 rounded-full px-2 py-1">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => setActive(link.name)}
                        className={`relative px-5 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none text-white dark:text-white ${active === link.name
                            ? 'bg-gradient-to-r from-[#5204ab] to-[#370471] shadow-lg'
                            : 'hover:bg-purple-800/40'
                            }`}
                    >
                        {link.name}
                    </button>
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
                <button
                    onClick={toggleTheme}
                    className="ml-2 p-2 rounded-full bg-black/30 dark:bg-white/20 text-white hover:bg-purple-700/40 transition-colors duration-200"
                    aria-label="Toggle theme"
                >
                    {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden flex items-center gap-2">
                {/* Add a hamburger menu and mobile nav if needed */}
            </div>
        </motion.nav>
    );
}
