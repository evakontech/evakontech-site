const Products = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
                        Our Products
                    </p>
                </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">Oliver Aguilerra</p>
                            <p className="mb-4 text-xs text-gray-100">Product Manager</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Vincent Van Gogh’s most popular painting, The Starry Night.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">Marta Clermont</p>
                            <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Amet I love liquorice jujubes pudding croissant I love pudding.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">Anthony Geek</p>
                            <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Apple pie macaroon toffee jujubes pie tart cookie caramels.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">Alice Melbourne</p>
                            <p className="mb-4 text-xs text-gray-100">Human Resources</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
