export const BusinessGrowthSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container-width">

                <div className="flex items-center lg:flex-row flex-col gap-y-10">

                    {/* Content */}
                    <div className="w-full lg:w-4/5 m-auto px-5">

                        {/* Content title */}
                        <div>
                            <p className="text-4xl sm:text-6xl font-extrabold text-center">
                                We Help Your Business Grow
                            </p>
                            <p className="mt-9 text-slate-600 text-center mb-10">
                                At Evakon Tech, we specialize in leveraging software solutions to drive business growth and success. Our team of experts is dedicated to helping you achieve your goals.
                            </p>
                        </div>

                        {/* Content list */}
                        <div className="flex flex-col gap-y-4">
                            <div className="flex gap-x-10">
                                <div>
                                    <p className="font-bold text-lg">Custom Software Development</p>
                                    <p>
                                        We build tailor-made software solutions that align with your specific business needs and processes, empowering you to streamline operations, enhance productivity, and drive innovation.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">



                                <div>
                                    <p className="font-bold text-lg">Digital Transformation</p>
                                    <p>
                                        Our digital transformation services enable you to embrace cutting-edge technologies and digital trends, helping you stay ahead of the competition, improve customer experiences, and unlock new revenue streams.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">

                                <div>
                                    <p className="font-bold text-lg">Cloud Solutions</p>
                                    <p>
                                        We provide cloud-based solutions that enhance scalability, reliability, and security. By leveraging cloud technologies, we enable you to optimize resources, reduce costs, and accelerate business growth.
                                    </p>
                                </div>

                            </div>



                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-5 text-center">
                        <img src="https://theme-land.com/digimx/demo/assets/img/content/content_thumb.png" alt="Company" className="w-full" />
                    </div>
                </div>

            </div>
        </section>
    )
}
