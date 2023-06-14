
import React from 'react';

export const FAQs = () => {
    return (
        <section className="px-2 my-10"> {/* Added margin top and bottom */}
            <div className="mx-auto max-w-7xl py-10">
                <div>
                    <div className="max-w-2xl ">
                        <h1 className="text-5xl  font-bold text-black">Frequently Asked Questions</h1>
                        <p className="mt-5 mb-4  text-lg leading-6 tracking-wide text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {/* Updated FAQ sections */}
                        <div className="rounded-md border bg-[#1563cb] border-black/30 p-6">
                            <dt className="text-2xl font-semibold leading-6 text-white">
                                How do I apply for a software company vacancy?
                            </dt>
                            <dd className="mt-2 text-md text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et? Obcaecati, nemo
                                sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                            </dd>
                        </div>
                        <div className="rounded-md border bg-[#1563cb] border-black/30 p-6">
                            <dt className="text-2xl font-semibold leading-6 text-white">
                                What are the requirements for software company vacancies?
                            </dt>
                            <dd className="mt-2 text-md text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et? Obcaecati, nemo
                                sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                            </dd>
                        </div>
                        <div className="rounded-md border bg-[#1563cb] border-black/30 p-6">
                            <dt className="text-2xl font-semibold leading-6 text-white">
                                How can I showcase my projects in a software company application?
                            </dt>
                            <dd className="mt-2 text-md text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et? Obcaecati, nemo
                                sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                            </dd>
                        </div>
                        <div className="rounded-md border bg-[#1563cb] border-black/30 p-6">
                            <dt className="text-2xl font-semibold leading-6 text-white">
                                What skills are important for software company vacancies?
                            </dt>
                            <dd className="mt-2 text-md text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et? Obcaecati, nemo
                                sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                            </dd>
                        </div>
                        <div className="rounded-md border bg-[#1563cb] border-black/30 p-6">
                            <dt className="text-2xl font-semibold leading-6 text-white">
                                How do software company interviews typically work?
                            </dt>
                            <dd className="mt-2 text-md text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In

                                , et? Obcaecati, nemo
                                sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                            </dd>
                        </div>
                        <div className="rounded-md border bg-[#1563cb] border-black/30 p-6">
                            <dt className="text-2xl font-semibold leading-6 text-white">
                                What is the salary range for software company positions?
                            </dt>
                            <dd className="mt-2 text-md text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et? Obcaecati, nemo
                                sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
