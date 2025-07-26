import React from "react";
import myPic from "@/asset/images/naswih.webp";

const Hero = () => {
    return (
        <section className="relative w-full mx-auto max-w-7xl min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden">
            {/* Left: Text Content */}
            <div className="flex-1 order-2 md:order-1 flex flex-col items-start justify-center z-10 max-w-xl">
                <h1 className=" font-semibold pt-16 md:pt-0 md:text-xl text-base text-white mb-4 leading-tight">
                    Hello, my name is <br />
                    <span className="text-2xl md:text-5xl font-bold">Muhammed Naswih</span>
                </h1>
                <p className="text-sm md:text-lg text-gray-200/80 mb-4">
                    I am a Creative Developer who is currently based in Kerala, India.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                    <span className="py-2 rounded-full text-white font-semibold text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16-6V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2" /></svg>
                        Developer
                    </span>
                    <span className="py-2 rounded-full text-white font-semibold text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4-4-4-4m8 8V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4z" /></svg>
                        Speaker
                    </span>
                    <span className="py-2 rounded-full text-white font-semibold text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
                        Writer
                    </span>
                </div>
            </div>
            {/* Right: Profile Image */}
            <div className="flex-1 md:order-2 order-1 flex items-center justify-center mt-10 md:mt-0 z-10">
                <div className="w-64 h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#370471] flex items-center justify-center">
                    {/* Replace src with your own image */}
                    <img
                        src={myPic.src}
                        alt="Profile"
                        className="object-cover w-full h-full"


                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
