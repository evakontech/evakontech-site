import React from 'react';
import { NavigationBar } from '../navigation-bar/navigation-bar.component';
import { Footer } from '../footer/footer.component';
import { Link } from 'react-router-dom';
import heroSectionImage from '../../assets/career-side-img.jpg';
import aboutSectionImage from '../../assets/career-about-img.jpg';
import { Code } from 'lucide-react';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

import openingData from './career.data.json';

const Career = () => {
    return (
        <>
            <div className="w-full h-full navigation-container">
                <NavigationBar />
            </div>

            <section className="my-16">
                <div className="container-width flex items-center ">
                    <div className="w-full lg:w-4/5 m-auto text-center lg:text-left max-w-3xl lg:max-w-2xl">
                        <p className="text-sm font-medium text-gray-400">
                            CAREERS
                        </p>
                        <h1 className="text-4xl sm:text-6xl leading-tight font-bold max-w-2xl mb-5 mt-3 mx-auto lg:ms-0">
                            <span className="text-slate-900">Join us at</span>
                            <span className="text-[#1563CB] ml-1">Evakon Tech</span>
                        </h1>

                        <p className="text-slate-900 text-base mb-4 md:text-lg font-medium ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt iusto repudiandae eligendi culpa
                            recusandae tenetur beatae, nobis iste.
                        </p>
                        <p className="text-slate-600 text-sm md:text-base ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis aliquam doloremque animi
                            reiciendis commodi vel tenetur repellat quae,
                            delectus debitis odio aut enim corrupti porro
                            nostrum quam totam itaque tempore non exercitationem
                            consequatur sed at! Placeat molestiae exercitationem
                            suscipit pariatur corrupti, odio incidunt totam a
                            voluptates odit alias facilis. Blanditiis
                            repellendus sunt ullam rem eveniet atque aut
                            consequatur quam deleniti fuga ab.
                        </p>
                        <a href="#current-openings">
                            <button
                                type="button"
                                className="mt-8 me-6 rounded-md bg-[#1563cb] transition px-4 py-3 text-md font-semibold text-white shadow-sm border-2 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                See open positions
                            </button>
                        </a>
                        <Link to="internship/">
                            <button
                                type="button"
                                className="mt-8 rounded-md transition bg-transparent px-4 py-3 text-md font-semibold text-gray-600 border-2 border-[#1563cb] hover:border-transparent shadow-sm  hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Learn about internships
                            </button>
                        </Link>
                    </div>
                    {/* /hero-content */}

                    <div className="w-full lg:w-1/2 px-5 text-center hidden lg:block">
                        <img
                            src={heroSectionImage}
                            alt="Company"
                            className="w-full"
                        />
                    </div>
                    {/* /hero-image */}
                </div>
                {/* /section-container */}
            </section>
            {/* /hero-section */}

            <section className="bg-gray-200 py-10 px-3">
                <div className="section-container max-w-6xl mx-auto">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm font-medium text-gray-400">
                            COMPANY'S VALUE
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold leading-tight text-black md:text-4xl">
                            Our culture drives our business and our employees
                            are the most important{' '}
                            <span className="text-[#1563CB]">
                                piece of the puzzle.
                            </span>
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            From Concept to Code: Shaping Software Excellence.
                        </p>
                        <div className="mx-auto inline-flex rounded-full bg-[#1563CB] px-5 p-[0.15rem]"></div>
                    </div>
                    {/* /content */}

                    <div className="mt-10 grid grid-cols-1 gap-y-6 text-center lg:grid-cols-2 sm:gap-12 place-items-center">
                        <div className="bg-white w-full py-12 rounded-xl hover:shadow-lg transition px-3 max-w-lg lg:max-w-full">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                                <FaRegLightbulb className="h-9 w-9 text-white" />
                            </div>
                            <h3 className="mt-8 text-2xl font-semibold text-black">
                                Idea & Analysis
                            </h3>
                            <p className="mt-4 text-md text-gray-600 max-w-sm mx-auto">
                                Brainstorming ideas and evaluating project
                                requirements to ensure a comprehensive
                                understanding before proceeding.
                            </p>
                        </div>
                        {/* /card-item */}
                        <div className="bg-white w-full py-12 rounded-xl hover:shadow-lg transition px-3 max-w-lg lg:max-w-full">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                                <MdOutlineDesignServices className="h-9 w-9 text-white" />
                            </div>
                            <h3 className="mt-8 text-2xl font-semibold text-black">
                                Designing
                            </h3>
                            <p className="mt-4 text-md text-gray-600 max-w-sm mx-auto">
                                Creating visually appealing and user-friendly
                                designs to enhance the overall aesthetic and
                                usability of the project.
                            </p>
                        </div>
                        {/* /card-item */}
                        <div className="bg-white w-full py-12 rounded-xl hover:shadow-lg transition px-3 max-w-lg lg:max-w-full">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                                <Code className="h-9 w-9 text-white" />
                            </div>
                            <h3 className="mt-8 text-2xl font-semibold text-black">
                                Development
                            </h3>
                            <p className="mt-4 text-md text-gray-600 max-w-sm mx-auto">
                                Implementing and coding the project,
                                transforming ideas into a functional and
                                efficient end product.
                            </p>
                        </div>
                        {/* /card-item */}
                        <div className="bg-white w-full py-12 rounded-xl hover:shadow-lg transition px-3 max-w-lg lg:max-w-full">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1563cb]">
                                <HiOutlineRocketLaunch className="h-9 w-9 text-white" />
                            </div>
                            <h3 className="mt-8 text-2xl font-semibold text-black">
                                Testing & Launching
                            </h3>
                            <p className="mt-4 text-md text-gray-600 max-w-sm mx-auto">
                                Conducting rigorous testing procedures to ensure
                                the project's functionality and a successful
                                deployment to the intended audience.
                            </p>
                        </div>
                        {/* /card-item */}
                    </div>
                    {/* /card-container */}
                </div>
                {/* /section-container */}
            </section>
            {/* /company-features-section */}

            <section className="py-10 px-3">
                <div className="container-width flex items-center max-w-3xl lg:max-w-full gap-x-10">
                    <div className="w-full lg:w-1/2 px-5 text-center hidden lg:block">
                        <img
                            src={aboutSectionImage}
                            alt="Company"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    {/* /section-image */}

                    <div className="w-full lg:w-4/5 m-auto text-center lg:text-left">
                        <h2 className="text-4xl leading-tight font-semibold mb-3">
                            <span className="text-slate-900">Be a part of</span>
                            <span className="text-[#1563CB]"> our team.</span>
                        </h2>

                        <div className="text-slate-600 text-sm md:text-base">
                            <p className="mb-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis aliquam
                                doloremque animis id tempore possimus ducimus
                                animi minus!
                            </p>
                            <p>
                                Reiciendis commodi vel tenetur repellat quae,
                                delectus nostrum quam totam itaque tempore non
                                exercitationem consequatur sed at! Placeat
                                molestiae exercitationem suscipit pariatur
                                corrupti, odio incidunt totam a voluptates odit
                                alias facilis. Blanditiis repellendus sunt ullam
                                rem eveniet atque aut consequatur quam deleniti
                                fuga ab.
                            </p>
                        </div>
                    </div>
                    {/* /section-content */}
                </div>
                {/* /section-container */}
            </section>
            {/* about-company-section */}

            <section className="bg-gray-200 py-10 px-3" id="current-openings">
                <div className="section-container max-w-6xl mx-auto">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm font-medium text-gray-400">
                            INTERESTED ? WE ARE HIRING
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold leading-tight text-black md:text-4xl">
                            Current Openings
                        </h2>
                        <div className="mx-auto inline-flex rounded-full bg-[#1563CB] px-5 p-[0.15rem]"></div>
                    </div>
                    {/* /content */}

                    <table className="bg-white w-full mt-10 py-12 rounded-xl px-5">
                        <thead>
                            <tr className="border-b-2 border-slate-300">
                                <th className="p-5 font-medium text-gray-600 text-lg text-left">
                                    Position
                                </th>
                                <th className="p-5 font-medium text-gray-600 text-lg hidden sm:table-cell">
                                    Openings
                                </th>
                                <th className="p-5 font-medium text-gray-600 text-lg hidden md:table-cell">
                                    Deadline
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {openingData.map((opening) => (
                                <tr
                                    key={opening.id}
                                    className="border-b-2 border-slate-200"
                                >
                                    <td className="p-5">{opening.position}</td>
                                    <td className="p-5 text-center hidden sm:table-cell">
                                        {opening.openings}
                                    </td>
                                    <td className="p-5 text-center hidden md:table-cell">
                                        {opening.deadline}
                                    </td>
                                    <td className="p-5 text-center">
                                        <Link
                                            to={`${opening['page-url']}/`}
                                            className="text-[#1563cb] underline font-medium"
                                        >
                                            View more
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* /openings-container */}
                </div>
                {/* /section-container */}
            </section>
            {/* /openings-section */}

            <Footer />
        </>
    );
};

export default Career;

/*

*/
