import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQs = () => {
    const [expandedIndex, setExpandedIndex] = useState(0); // Set the initial state to 0

    const handleToggle = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(null); // Collapse the clicked item if it's already expanded
        } else {
            setExpandedIndex(index); // Expand the clicked item
        }
    };

    return (
        <section className="mx-auto max-w-7xl px-2 md:px-0">
            <div>
                <div className="w-[90%]  md:w-3/4 lg:w-3/5 m-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl">
                        FAQs
                    </h2>
                    <p className="mt-9 text-slate-600">
                        Learn more about us.
                    </p>
                </div>


                <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16 px-4 md:px-0">
                    <div
                        className={`cursor-pointer rounded-md border border-gray-400  transition-all duration-200 ${expandedIndex === 0 ? 'border-blue-500' : ''
                            }`}
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                            onClick={() => handleToggle(0)}
                        >
                            <span className="flex text-lg font-semibold text-black">What is Evakon Tech?</span>
                            {expandedIndex === 0 ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                        {expandedIndex === 0 && (
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p className="text-gray-500">
                                    Evakon is software development company. We're on a mission to improve the software industry by promoting remote work, fostering collaboration, and igniting innovation. Step into a world of limitless possibilities and shape the future together.
                                </p>
                            </div>
                        )}
                    </div>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className={`cursor-pointer rounded-md border border-gray-400 transition-all duration-200 ${expandedIndex === i + 1 ? 'border-blue-500' : ''
                                }`}
                        >
                            <button
                                type="button"
                                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                                onClick={() => handleToggle(i + 1)}
                            >
                                {i === 0 && (
                                    <>
                                        <span className="flex text-lg font-semibold text-black">
                                            What skills are important for software company vacancies?

                                        </span>
                                        {expandedIndex === 1 ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )}
                                    </>
                                )}


                                {i === 1 && (
                                    <>
                                        <span className="flex text-start text-lg font-semibold text-black">
                                            How do I apply for a software company vacancy?
                                        </span>
                                        {expandedIndex === 4 ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )}
                                    </>
                                )}
                                {i === 2 && (
                                    <>
                                        <span className="flex text-start text-lg font-semibold text-black">
                                            Does your company have internship opportunities?                                        </span>
                                        {expandedIndex === 5 ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )}
                                    </>
                                )}
                            </button>
                            {expandedIndex === i + 1 && (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    {i === 0 && (
                                        <p className="text-gray-500">
                                            Yes, our company offers internship opportunities. We believe in providing valuable learning experiences for aspiring professionals in the software industry.
                                        </p>
                                    )}
                                    {i === 1 && (
                                        <p className="text-gray-500">
                                            To apply, visit our career page, review the job details, prepare your resume and cover letter, and submit them through the specified channel. We'll review and contact shortlisted candidates.
                                        </p>
                                    )}
                                    {
                                        i === 2 && (
                                            <p className="text-gray-500">
                                                <strong>Selection:</strong> Candidates are shortlisted based on their resumes and qualifications. <br />
                                                <strong>Interviews:</strong> Candidates undergo multiple rounds of interviews to assess their skills and fit for the role. <br />
                                                <strong>Onboarding:</strong> Successful candidates are introduced to the company's processes, tools, and culture. <br />
                                                <strong>Job Offer:</strong> The chosen candidate is extended an offer, including details on compensation, benefits, and start date. <br />
                                            </p>
                                        )
                                    }


                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
