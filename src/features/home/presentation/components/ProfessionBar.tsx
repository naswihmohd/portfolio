'use client'

import React from "react";
import { motion } from "framer-motion";

const professions = [
    {
        icon: (
            <svg className="w-8 h-8 text-[#b97aff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16-6V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2" /></svg>
        ),
        title: "Full Stack",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#b97aff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zm-5 7a5 5 0 01-5-5V7a5 5 0 0110 0v4a5 5 0 01-5 5z" /></svg>
        ),
        title: "Industry Leader",
        desc: "Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#b97aff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" /></svg>
        ),
        title: "Strategy-Minded",
        desc: "Urna porttitor rhoncus dolor purus non enim praesent ornare.",
    },
];

const ProfessionBar = () => {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-12 px-4 md:px-0">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 bg-transparent">
                {professions.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        className="backdrop-blur-xl bg-[#18122b]/80 border border-[#2d1e5f] rounded-2xl shadow-xl p-8 flex flex-col items-start transition-transform hover:scale-105 hover:shadow-2xl duration-300 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                    >
                        <div className="mb-4 flex items-center justify-center rounded-full bg-[#b97aff]/10 p-4 group-hover:bg-[#b97aff]/20 transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
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
