import HomeAbout from '@/features/home/presentation/components/HomeAbout'
import React from 'react'
import Education from './components/Education'

const About = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] px-4">
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
            </div>

            <HomeAbout />
            {/* <Education /> */}
        </section>
    )
}

export default About
