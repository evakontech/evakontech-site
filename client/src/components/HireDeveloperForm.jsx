const HireDeveloperForm = ({ setDisplayMultiStepForm }) => {
    const handleTypeChange = (e) => {
        e.target.type = 'date';
    };
    return (
        <section className="flex lg:w-[70%]  xl:w-[60%] bg-white h-[100vh] md:h-[600px] sm:overflow-auto overflow-scroll">
            <div className="bg-[#1662D1] hidden md:flex items-start justify-center w-[20%] hire-developer-form-left-side">
                <span className="left-side-text text-5xl rotate-[270deg] font-extrabold">EVAKON</span>
            </div>

            <div className="w-full md:w-[80%] py-5 px-8">
                <div className="text-right text-2xl mb-[-20px] me-3">
                    <button onClick={() => setDisplayMultiStepForm(false)}>
                        {' '}
                        <i className="fa-solid fa-xmark"></i>{' '}
                    </button>
                </div>

                <h2 className="text-center my-8 text-3xl font-bold leading-tight text-black">Hire Developers</h2>

                <div className="flex pt-4 gap-y-7 md:gap-y-10 justify-between flex-wrap">
                    <div className="relative w-full md:w-[48%]">
                        <input
                            type="text"
                            id="name"
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 rounded-md border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 focus:outline-none peer"
                            placeholder=" "
                        />

                        <label
                            for="name"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Name
                        </label>
                    </div>

                    <div className="relative w-full md:w-[48%]">
                        <input
                            type="text"
                            id="email"
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 rounded-md border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 focus:outline-none peer"
                            placeholder=" "
                        />

                        <label
                            for="email"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative w-full md:w-[48%]">
                        <input
                            type="text"
                            id="Phone Number"
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 rounded-md border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 focus:outline-none peer"
                            placeholder=" "
                        />

                        <label
                            for="Phone Number"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Phone Number
                        </label>
                    </div>

                    <div className="relative w-full md:w-[48%]">
                        <input
                            type="text"
                            id="Tech Stack"
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 rounded-md border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 focus:outline-none peer"
                            placeholder=" "
                        />

                        <label
                            for="Tech Stack"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Tech Stack
                        </label>
                    </div>

                    <div className="relative w-full md:w-[48%]">
                        <input
                            type="text"
                            id="From"
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 rounded-md border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500  focus:border-blue-600 focus:outline-none peer"
                            placeholder=" "
                            onFocus={handleTypeChange}
                        />

                        <label
                            for="From"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            From
                        </label>
                    </div>

                    <div className="relative w-full md:w-[48%]">
                        <input
                            type="text"
                            id="to"
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 rounded-md border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500  focus:border-blue-600 focus:outline-none peer"
                            placeholder=" "
                            onFocus={handleTypeChange}
                        />

                        <label
                            for="to"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            To
                        </label>
                    </div>

                    <div className="relative w-[100%]">
                        <input
                            type="text"
                            id="Project Type"
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 rounded-md border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 focus:outline-none peer"
                            placeholder=" "
                        />

                        <label
                            for="Project Type"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Project Type
                        </label>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="button"
                        className="my-10 md:mt-14 rounded-md bg-[#1563cb] px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HireDeveloperForm;
