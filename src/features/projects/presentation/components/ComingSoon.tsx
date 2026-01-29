"use client"

import React from 'react'
import { motion } from 'framer-motion'

function ComingSoon() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] px-4 py-16 flex items-center justify-center">
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#b97aff]/20 to-[#6c2bd7]/20 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        <span className="bg-gradient-to-r from-[#b97aff] via-[#6c2bd7] to-[#b97aff] bg-clip-text text-transparent">
                            Coming Soon
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed"
                    >
                        We're working on something amazing! Stay tuned for updates on this exciting new project.
                    </motion.p>

                    {/* Animated Dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center justify-center gap-2 mt-8"
                    >
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-3 h-3 rounded-full bg-gradient-to-r from-[#b97aff] to-[#6c2bd7]"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Border Decoration */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-12 pt-8 border-t border-[#b97aff]/30"
                    >
                        <p className="text-gray-400 text-sm">
                            Check back soon for more details
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ComingSoon
