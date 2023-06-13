
export const BusinessGrowthSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container-width">

                <div className="flex items-center lg:flex-row flex-col gap-y-10">

                    {/* Content */}
                    <div className="w-full lg:w-4/5 m-auto  px-5">

                        {/* Content title */}
                        <div>
                            <p className="text-4xl sm:text-6xl font-extrabold text-center">
                                we help to grow your business.
                            </p>
                            <p className="mt-9 text-slate-600 text-center mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </p>
                        </div>

                        {/* Conent list */}
                        <div className="flex flex-col gap-y-4">
                            <div className="flex gap-x-10">

                                <div className="text-purple-700">
                                    <i className="fa-solid fa-angles-right text-lg mt-1"></i>
                                </div>

                                <div>
                                    <p className="font-bold text-lg">Online Presence</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">

                                <div className="text-purple-700">
                                    <i className="fa-solid fa-angles-right text-lg mt-1"></i>
                                </div>

                                <div>
                                    <p className="font-bold text-lg">Online Presence</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">

                                <div className="text-purple-700">
                                    <i className="fa-solid fa-angles-right text-lg mt-1"></i>
                                </div>

                                <div>
                                    <p className="font-bold text-lg">Online Presence</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.
                                    </p>
                                </div>

                            </div>


                            <div className="btn-with-purpule-border text-center mt-4">
                                <button>Learn More</button>
                            </div>
                        </div>

                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 px-5 text-center">
                        <img src="https://theme-land.com/digimx/demo/assets/img/content/content_thumb.png" alt="Company" className="w-full" />
                    </div>
                </div>

            </div>
        </section>
    )
}
