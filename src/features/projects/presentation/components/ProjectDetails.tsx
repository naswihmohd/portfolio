import React from 'react'
import { projects } from '../../data/projectData'
import LoadImage from '@/general/components/LoadImage'
import { AiOutlineCopyright } from 'react-icons/ai'

function ProjectDetails({ projectId }: { projectId: string }) {
    const project = projects.find((p) => p.id === projectId)

    if (!project) {
        return (
            <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] px-4 py-16">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Project not found</h1>
                    <p className="text-gray-300">We couldn't find details for the requested project.</p>
                </div>
            </section>
        )
    }

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] px-4 py-16">
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <span className="bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-lg mb-3 inline-block">Project Detail</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h1>
                    <p className="text-gray-300 text-sm md:text-base max-w-3xl">{project.description}</p>

                    <div className="mb-6 mt-3 flex items-center gap-2">
                        <AiOutlineCopyright className="text-white" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Associated with <a href="https://totalx.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">TotalX</a>
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Image */}
                    <div className="lg:col-span-5">
                        <LoadImage
                            src={project.imageUrl?.src ?? ''}
                            alt={project.title}
                            index={0}
                            className="w-full h-72 object-contain"
                        />
                        {Array.isArray(project.features) && project.features.length > 0 && (
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-white my-4">Key Features</h3>
                                <ul className="list-disc space-y-3 list-inside text-gray-300 text-sm md:text-base">
                                    {project.features.map((feature: string) => (
                                        <li key={feature} className="marker:text-[#b97aff]">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.link && (
                            <div className="mt-4 flex justify-end">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 bg-gradient-to-r from-[#b97aff] to-[#6c2bd7] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    Visit Website
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <div className="border-s border-[#b97aff] p-6 md:p-8 bg-transparent">
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">About Project</h2>
                            <p className="text-gray-300 whitespace-pre-line leading-relaxed text-sm md:text-base">
                                {project.bodyPragraph}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetails