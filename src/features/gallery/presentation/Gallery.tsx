"use client"

import React from 'react'
import { motion } from 'framer-motion'
import myPic from "@/asset/images/naswih.webp"

// Sample gallery data - you can replace with your actual images
const galleryItems = [
    {
        id: 1,
        image: 'https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/hand-camera-Photography-Terms.jpg',
        title: "Creative Development",
        description: "Modern web development with cutting-edge technologies"
    },
    {
        id: 2,
        image: 'https://www.clubmahindra.com/blog/media/section_images/naturephot-ec32e94608f809e.webp',
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interface designs"
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxjlqh1KJ4KaL7BVgXG9IkSOoAUKzOTwxrQ&s',
        title: "Mobile Development",
        description: "Cross-platform mobile applications"
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvWajcowG-YCiOyYg7hJU-9NKKKqROOR3IA&s',
        title: "Web Applications",
        description: "Full-stack web development solutions"
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
        title: "Digital Art",
        description: "Creative digital artwork and illustrations"
    },
    {
        id: 6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdYcT2S3jmJNEYmDGfYVlD-DJ7KBYnshcwg&s',
        title: "Brand Identity",
        description: "Complete branding and identity design"
    }
]

function Gallery() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] py-16 px-4 md:px-16">
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
            </div>

            {/* Gallery Header */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.3 }}
                className="md:text-7xl md:px-16 text-2xl font-bold text-white/10 select-none pb-4"
            >
                GALLERY
            </motion.div>

            {/* Gallery Grid */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            className="group relative overflow-hidden bg-white/5 backdrop-blur-sm"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-[4/3]">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0924]/90 via-[#0d0924]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <h3 className="text-xl font-semibold text-white/80 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-200/50 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
