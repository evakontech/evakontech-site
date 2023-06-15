export const BusinessGrowthSection = () => {
    return (
        <section className="py-16">
            <div className="container-width">

                <div className="flex items-center lg:flex-row flex-col gap-y-10">

                    {/* Content */}
                    <div className="w-full lg:w-4/5 m-auto px-5">

                        {/* Content title */}
                        <div>
                            <p className="text-4xl text-left sm:text-6xl font-extrabold ">
                                We Help Your Business Grow
                            </p>
                            <p className="mt-9 text-slate-600 mb-10">
                                At Evakon Tech, we specialize in leveraging software solutions to drive business growth and success. Our team of experts is dedicated to helping you achieve your goals.
                            </p>
                        </div>

                        {/* Content list */}
                        <div className="flex flex-col gap-y-4">
                            <div className="flex gap-x-10">
                                <div>
                                    <p className="font-bold text-lg">Custom Software Development</p>
                                    <p>
                                        We build tailor-made software solutions that align.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">



                                <div>
                                    <p className="font-bold text-lg">Digital Transformation</p>
                                    <p>
                                        Our digital transformation services enable you to embrace cutting-edge technologies.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">

                                <div>
                                    <p className="font-bold text-lg">Cloud Solutions</p>
                                    <p>
                                        We provide cloud-based solutions that enhance scalability, reliability, and security.
                                    </p>
                                </div>

                            </div>



                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-5 text-center">
                        <img src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg?size=626&ext=jpg" alt="Company" className="w-full" />
                    </div>
                </div>

            </div>
        </section>
    )
}
