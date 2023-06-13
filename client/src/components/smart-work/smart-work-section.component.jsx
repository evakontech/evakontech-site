import React from 'react'

export const SmartWorkSection = () => {
    return (
        <section className="py-16 mt-10 mb-10">
            <div className="container-width">

                <div className="flex items-center lg:flex-row flex-col gap-y-10">

                    {/* Image */}
                    <div className="w-full lg:w-1/2 px-5 text-center">
                        <img src="https://swapsinfotech.com/wp-content/uploads/2021/02/my-digi.gif" alt="Company" className="w-full" />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-4/5 m-auto  px-5">

                        {/* Content title */}
                        <div>
                            <p className="text-4xl sm:text-6xl font-extrabold text-center">
                                work smarter,
                                not harder.
                            </p>
                            <p className="mt-9 text-slate-600 text-center mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </p>
                        </div>

                        {/* Conent list */}
                        <div className="flex flex-col gap-y-4">
                            <div className="flex gap-x-10">



                                <div>
                                    <p className="font-bold text-lg">Digital Agency & Marketing</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">



                                <div>
                                    <p className="font-bold text-lg">Planning To Startup</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-x-10">



                                <div>
                                    <p className="font-bold text-lg">Content Management</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}
