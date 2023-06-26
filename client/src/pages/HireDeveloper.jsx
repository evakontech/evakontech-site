import { useState } from 'react';
import { Navbar, Footer, HireDeveloperCTA, HireDeveloperForm } from '../components';

import { TfiWrite } from 'react-icons/tfi';
import { BsCodeSlash, BsPersonCheck } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';

const HireDeveloper = () => {
    const [displayMultiStepForm, setDisplayMultiStepForm] = useState(false);

    return (
        <>
            <section className="hire-developer-area-wrapper">
                <div className="hire-developer-area-overlay-bg ">
                    <Navbar />
                    <div className="hire-developer-area-text flex flex-col items-center justify-center text-center py-10">
                        <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">
                            Hire Developer
                        </h1>
                        <p className="my-5 sm:text-sm  md:text-md text-white ">
                            Unlock Your Project's Potential: Hire Skilled Developers for Seamless Execution                        </p>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    {/* <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          DevUI helps you build beautiful website
        </h2>  */}
                    {/* <p className="mt-4 text-base leading-relaxed text-gray-600">
          Simply Get started hiring the best developers in the following steps
        </p> */}
                </div>
                <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            <TfiWrite className="h-9 w-9 text-sitecolor" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Define Your Requirement</h3>
                        <p className="mt-4 text-sm text-gray-600">

                            Provide and communicate project goals, features, and vision to ensure accurate developer understanding.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            <BsCodeSlash className="h-9 w-9 text-sitecolor" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black"> Choose Tech Stack</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Make informed decisions by selecting technologies aligned with project needs: scalability, compatibility, performance.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            <BsPersonCheck className="h-9 w-9 text-sitecolor" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Select the Developers</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Choose a competent team by reviewing developers' skills, experience, past projects, and qualifications.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            <BiTimeFive className="h-9 w-9 text-sitecolor" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Select the Timeframe</h3>
                        <p className="mt-4 text-sm text-gray-600">

                            Collaborate with developers to set a realistic timeline, estimating development phases for smooth progress and realistic expectations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-20">
                <HireDeveloperCTA setDisplayMultiStepForm={setDisplayMultiStepForm} />
            </div>

            {/* Multi-step form */}
            {displayMultiStepForm && (
                <div className="multi-step-form-wrapper">
                    <HireDeveloperForm setDisplayMultiStepForm={setDisplayMultiStepForm} />
                </div>
            )}
            <Footer />
        </>
    );
};

export default HireDeveloper;
