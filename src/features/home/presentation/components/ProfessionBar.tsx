'use client'

import React from "react";
import { motion } from "framer-motion";
import { HiDesktopComputer } from "react-icons/hi";
import { BsDatabaseFill } from "react-icons/bs";
import { MdOutlineSettingsEthernet } from "react-icons/md";

const professions = [
  {
    icon: <HiDesktopComputer size={22} className="text-white"  />,
    title: "Frontend Development",
    desc: "HTML | CSS | React | Next.js | Tailwind CSS | Bootstrap | Astro | JavaScript | TypeScript",
  },
  {
    icon: <MdOutlineSettingsEthernet size={22} className="text-white"  />,
    title: "Backend Development",
    desc: "Node.js | Express.js | Java | C++",
  },
  {
    icon: <BsDatabaseFill size={22} className="text-white" />,
    title: "Databases",
    desc: "MongoDB | Firebase",
  },
];


const ProfessionBar = () => {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-12 px-4 md:px-0">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 bg-transparent">
                {professions.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        className="backdrop-blur-xl bg-[#18122b]/80 border border-[#2d1e5f] rounded-2xl shadow-xl p-8 flex flex-col items-start transition-transform hover:shadow-2xl duration-300 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                    >
                        <div className="mb-4 flex items-center justify-center rounded-full bg-[#b97aff]/10 p-4 group-hover:bg-[#b97aff]/20 transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        {/* Glow effect */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#b97aff]/20 to-transparent rounded-full blur-2xl" />
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tr from-[#6c2bd7]/20 to-transparent rounded-full blur-xl" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProfessionBar;
