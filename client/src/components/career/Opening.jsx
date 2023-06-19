import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavigationBar } from '../navigation-bar/navigation-bar.component';
import openings from './career.data.json';

const Opening = () => {
    let { opening } = useParams();
    const currentOpening = openings.find((ele) => ele.page_url === opening);

    return (
        <section>
            <div className="w-full h-full navigation-container">
                <NavigationBar />
            </div>
            {/* /navbar */}

            <section className="bg-slate-600 px-10 h-[275px]">
                <div className="container-width flex justify-center flex-col h-full">
                    <h2 className="text-white text-4xl font-semibold mb-3">{currentOpening.position}</h2>
                    <div className="text-white flex items-center">
                        <Link to={'/'} className="transition text-base hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-xl font-black">&#183;</span>
                        <Link to={'/'} className="transition text-base hover:underline">
                            Career
                        </Link>
                        <span className="mx-2 text-xl font-black">&#183;</span>
                        <p to={'/'} className="text-base">
                            {currentOpening.position}
                        </p>
                    </div>
                </div>
            </section>

            {/* /hero-section */}

            <section className="container-width">
                <div className="my-16">
                    <div className="bg-gray-100 p-7 rounded-xl mb-7">
                        <div className="flex flex-col sm:flex-row mb-1">
                            <p className="text-[17px] text-slate-700 w-full max-w-[170px]">Openings</p>
                            <p className="text-[17px] text-slate-800 font-medium">{currentOpening.openings}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row mb-1">
                            <p className="text-[17px] text-slate-700 w-full max-w-[170px]">Posted on</p>
                            <p className="text-[17px] text-slate-800 font-medium">{currentOpening.posted}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row mb-1">
                            <p className="text-[17px] text-slate-700 w-full max-w-[170px]">Deadline</p>
                            <p className="text-[17px] text-slate-800 font-medium">{currentOpening.deadline}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <p className="text-[17px] text-slate-700 w-full max-w-[170px]">Position</p>
                            <p className="text-[17px] text-slate-800 font-medium">{currentOpening.position}</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-7 rounded-xl mb-7">
                        <div className="mb-10">
                            <h3 className="text-[1.7rem] font-medium mb-3 text-[#2C72D0]">Summary</h3>
                            <p className="text-slate-800 text-[1.1rem]">{currentOpening.summary}</p>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-[1.7rem] font-medium mb-3 text-[#2C72D0]">Responsibilities</h3>
                            <ul className="list-disc px-5">
                                {currentOpening.responsibilities.map((responsibility, idx) => (
                                    <li className="text-slate-800 text-[1.1rem]" key={idx}>
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[1.7rem] font-medium mb-3 text-[#2C72D0]">Requirements</h3>
                            <ul className="list-disc px-5">
                                {currentOpening.requirements.map((requirement, idx) => (
                                    <li className="text-slate-800 text-[1.1rem]" key={idx}>
                                        {requirement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <Link to="/job-apply-form">
                        <button
                            type="button"
                            className="rounded-md bg-[#1563cb] transition px-16 py-3 text-md font-semibold text-white shadow-sm border-2 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Apply
                        </button>
                    </Link>
                </div>
            </section>
            {/* /content-section */}
        </section>
    );
};

export default Opening;
