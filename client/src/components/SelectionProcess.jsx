const SelectionProcess = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Our Selection Process
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Selecting ideal candidates through thorough and rigorous evaluation methods.
                </p>
            </div>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col justify-between p-5 border  rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <span className="text-2xl font-bold text-[#1563cb]">1.</span>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Candidate Selection</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Reviewing and selecting potential candidates for the job position.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <span className="text-2xl font-bold text-[#1563cb]">2.</span>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Interview</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Conducting interviews with selected candidates to assess their suitability for the job.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <span className="text-2xl font-bold text-[#1563cb]">3.</span>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Job Offer</h6>
                        <p className="mb-3 text-sm text-gray-900">Extending a job offer to the selected candidate.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <span className="text-2xl font-bold text-[#1563cb]">4.</span>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Onboarding</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Assisting the new employee in transitioning into their role and the company.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectionProcess;
