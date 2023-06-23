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
        <section className="mx-auto max-w-7xl px-2 py-10 m- md:px-0">
            <div>
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">FAQs</h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
                    <div
                        className={`cursor-pointer rounded-md border border-gray-400  transition-all duration-200 ${expandedIndex === 0 ? 'border-blue-500' : ''
                            }`}
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                            onClick={() => handleToggle(0)}
                        >
                            <span className="flex text-lg font-semibold text-black">How do I get started?</span>
                            {expandedIndex === 0 ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                        {expandedIndex === 0 && (
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                                    iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                                </p>
                            </div>
                        )}
                    </div>
                    {Array.from({ length: 5 }).map((_, i) => (
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
                                            How do I apply for a software company vacancy?
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
                                            What are the requirements for software company vacancies?
                                        </span>
                                        {expandedIndex === 2 ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )}
                                    </>
                                )}
                                {i === 2 && (
                                    <>
                                        <span className="flex text-start text-lg font-semibold text-black">
                                            How can I showcase my projects in a software company application?
                                        </span>
                                        {expandedIndex === 3 ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )}
                                    </>
                                )}
                                {i === 3 && (
                                    <>
                                        <span className="flex text-start text-lg font-semibold text-black">
                                            What skills are important for software company vacancies?
                                        </span>
                                        {expandedIndex === 4 ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )}
                                    </>
                                )}
                                {i === 4 && (
                                    <>
                                        <span className="flex text-start text-lg font-semibold text-black">
                                            How do software company interviews typically work?
                                        </span>
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
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam
                                            adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione
                                            deleniti?
                                        </p>
                                    )}
                                    {i === 1 && (
                                        <p className="text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam
                                            adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione
                                            deleniti?
                                        </p>
                                    )}
                                    {i === 2 && (
                                        <p className="text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam
                                            adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione
                                            deleniti?
                                        </p>
                                    )}
                                    {i === 3 && (
                                        <p className="text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam
                                            adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione
                                            deleniti?
                                        </p>
                                    )}
                                    {i === 4 && (
                                        <p className="text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam
                                            adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione
                                            deleniti?
                                        </p>
                                    )}
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
