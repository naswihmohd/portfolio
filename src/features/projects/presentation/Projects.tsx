"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projectData'
import LoadImage from '@/general/components/LoadImage'
import Link from 'next/link'
import { AiOutlineCopyright } from 'react-icons/ai'
import ComingSoon from './components/ComingSoon'

function Projects() {

    return <ComingSoon />
    // return (
    //     <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] py-16 px-4 md:px-16">
    //         {/* Decorative Gradient Overlay */}
    //         <div className="absolute inset-0 pointer-events-none z-0">
    //             <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
    //             <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
    //         </div>

    //         {/* Projects Header */}
    //         <motion.div
    //             initial={{ opacity: 0 }}
    //             whileInView={{ opacity: 1 }}
    //             viewport={{ once: false }}
    //             transition={{ duration: 1, delay: 0.3 }}
    //             className="md:text-7xl md:px-16 text-2xl font-bold text-white/10 select-none pb-10"
    //         >
    //             PROJECTS
    //         </motion.div>

    //         {/* Projects List */}
    //         <div className="relative z-10 overflow-hidden max-w-6xl mx-auto">
    //             <div className="relative">
    //                 {projects.map((project, index) => (
    //                     <motion.div
    //                         key={project.title}
    //                         initial={{
    //                             opacity: 0,
    //                             x: index % 2 === 0 ? -100 : 100,
    //                             scale: 0.8
    //                         }}
    //                         whileInView={{
    //                             opacity: 1,
    //                             x: 0,
    //                             scale: 1
    //                         }}
    //                         viewport={{ once: true, margin: "-100px" }}
    //                         transition={{
    //                             duration: 0.6,
    //                             delay: 0.1 + index * 0.05,
    //                             ease: "easeOut"
    //                         }}
    //                         className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
    //                     >
    //                         {/* Card */}
    //                         <div className={`border-s border-[#b97aff] p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
    //                             <div className="flex flex-col lg:flex-row gap-8 items-start">
    //                                 {/* Left Side - Content */}
    //                                 <div className="flex-1 space-y-6">
    //                                     {/* Project Icon and Title */}

    //                                     <div className="flex-1">
    //                                         <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
    //                                             {project.title}
    //                                         </h3>
    //                                     </div>

    //                                     {/* Project Description */}
    //                                     <div>
    //                                         <p className="text-gray-300 text-sm leading-relaxed">
    //                                             {project.description}
    //                                         </p>
    //                                     </div>

    //                                     <div className="mb-6 flex items-center gap-2">
    //                                         <AiOutlineCopyright className="text-white" />
    //                                         <p className="text-gray-300 text-sm leading-relaxed">
    //                                             Associated with <a href="https://totalx.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">TotalX</a>
    //                                         </p>
    //                                     </div>


    //                                     {/* View Details Button */}
    //                                     <div className="pt-2">
    //                                         <Link href={`/projects/${project.id}`} className="px-6 py-3 bg-gradient-to-r from-[#b97aff] to-[#6c2bd7] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
    //                                             View Details
    //                                         </Link>
    //                                     </div>
    //                                 </div>

    //                                 {/* Right Side - Image */}
    //                                 <div className="w-full lg:w-80 flex-shrink-0">
    //                                     <div className="relative overflow-hidden rounded-lg group">
    //                                         <LoadImage
    //                                             src={project.imageUrl.src}
    //                                             alt={project.title}
    //                                             index={index}
    //                                             className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
    //                                         />
    //                                         <div className="absolute inset-0 bg-gradient-to-t from-[#0d0924]/90 via-[#0d0924]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </motion.div>
    //                 ))}
    //             </div>
    //         </div>
    //     </section>
    // )
}

export default Projects
