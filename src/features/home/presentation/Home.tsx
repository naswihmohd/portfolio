import React from 'react'
import Hero from './components/Hero'
import ProfessionBar from './components/ProfessionBar'
import HomeWorks from './components/HomeWorks'

function Home() {
    return (
        <div className='bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000]'>
            <Hero />
            <ProfessionBar />
            <HomeWorks />


            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
            </div>
        </div>
    )
}

export default Home
