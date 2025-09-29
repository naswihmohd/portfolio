"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
    const educationData = [
        {
            title: "Master of Computer Science",
            institution: "Tempus University",
            description: "Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec quam felis ultricies nec.",
            period: "2015-2017",
            details: "Specialized in advanced algorithms and data structures. Completed thesis on machine learning applications in cybersecurity. Graduated with honors and received the Dean's Award for Academic Excellence.",
            location: "New York, NY",
            gpa: "3.9/4.0"
        },
        {
            title: "Bachelor of Information Technology",
            institution: "Rhoncus Institute of Technology",
            description: "Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.",
            period: "2011-2015",
            details: "Focused on software engineering and web development. Led the university's programming club and participated in multiple hackathons. Completed internships at leading tech companies.",
            location: "San Francisco, CA",
            gpa: "3.8/4.0"
        },
        {
            title: "Certificate in Digital Innovation",
            institution: "Ligula Academy",
            description: "Aenean commodo ligula eget dolor aenean massa cum sociis natoque penatibus et magnis dis parturient montes.",
            period: "2020",
            details: "Intensive program covering emerging technologies including blockchain, AI, and IoT. Collaborated on real-world projects with industry partners. Received certification with distinction.",
            location: "Online",
            gpa: "Distinction"
        }
    ];

    return (
        <section className="px-4 md:px-16 py-16">
            <div className="w-full mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <FaGraduationCap className="w-8 h-8 text-[#5e04c6]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Academic Excellence
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto"
                    >
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.
                    </motion.p>
                </motion.div>

                {/* Timeline Education Cards */}
                <div className="relative">

                    {educationData.map((education, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                                }`}
                        >

                            {/* Card */}
                            <div className={`border-s border-[#5e04c6] p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                }`}>
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                                    <div className="w-16 h-16 bg-[#5e04c6]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaGraduationCap className="w-8 h-8 text-[#5e04c6]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                            {education.title}
                                        </h3>
                                        <p className="text-[#5e04c6] text-lg font-semibold mb-3">
                                            {education.institution}
                                        </p>

                                        {/* Meta Information */}
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="w-4 h-4" />
                                                <span>{education.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="w-4 h-4" />
                                                <span>{education.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-[#5e04c6]">GPA: {education.gpa}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wide">
                                            Overview
                                        </h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {education.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wide">
                                            Key Achievements
                                        </h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {education.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
