const Projects = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {/* <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
                        Our Product
                    </p>
                </div>
            </div> */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/259272870/original/931f7f91d414c80ba3e8ef488f4b9ebf5e789be0.png"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">POS Restro</p>
                            <p className="mb-4 text-xs text-gray-100">Coming Soon</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/259272870/original/931f7f91d414c80ba3e8ef488f4b9ebf5e789be0.png"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">POS Restro</p>
                            <p className="mb-4 text-xs text-gray-100">Coming Soon</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/259272870/original/931f7f91d414c80ba3e8ef488f4b9ebf5e789be0.png"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">POS Restro</p>
                            <p className="mb-4 text-xs text-gray-100">Coming Soon</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
