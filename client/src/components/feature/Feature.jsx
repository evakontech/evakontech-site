import React from 'react'
import { Code } from 'lucide-react'
import { FaRegLightbulb } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'

export const Feature = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 mb-[200px] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
                </div>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Building Bridges between Ideas and Execution
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                    From Concept to Code: Shaping Software Excellence.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                        <FaRegLightbulb className="h-9 w-9 text-white" />
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-black">Idea & Analysis</h3>
                    <p className="mt-4 text-md text-gray-600">
                        Brainstorming ideas and evaluating project requirements to ensure a comprehensive understanding before proceeding.
                    </p>
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                        <MdOutlineDesignServices className="h-9 w-9 text-white" />
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-black">Designing</h3>
                    <p className="mt-4 text-md text-gray-600">
                        Creating visually appealing and user-friendly designs to enhance the overall aesthetic and usability of the project.
                    </p>
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                        <Code className="h-9 w-9 text-white" />
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-black">Development</h3>
                    <p className="mt-4 text-md text-gray-600">
                        Implementing and coding the project, transforming ideas into a functional and efficient end product.
                    </p>
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                        <HiOutlineRocketLaunch className="h-9 w-9 text-white" />
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-black">Testing & Launching</h3>
                    <p className="mt-4 text-md text-gray-600">
                        Conducting rigorous testing procedures to ensure the project's functionality and a successful deployment to the intended audience.
                    </p>
                </div>
            </div>
        </div>
    )
}
