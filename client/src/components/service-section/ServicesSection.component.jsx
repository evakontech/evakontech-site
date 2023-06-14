import React from 'react'

export const ServiceSection = () => {
    return (
        <section className='py-32'>

            <div className='container-width'>

                {/* Title  */}
                <div className='w-full lg:w-4/5 m-auto'>
                    <p className='text-4xl sm:text-6xl font-extrabold text-center'>
                        we provide the best digital services
                    </p>
                    <p className='mt-4 text-center text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                    </p>
                </div>

                <div className='pt-20 flex justify-center gap-12 flex-wrap'>


                    <div className="w-[300px] border text-center rounded-md bg-white duration-500 hover:shadow-[0_5px_20px_1px_hsla(220,63%,33%,0.1)] hover:translate-y-[-15px] cursor-pointer ">
                        <div className='flex justify-center pt-7'>
                            <img
                                src='https://img.freepik.com/free-vector/creative-team-concept-illustration_114360-3894.jpg?w=1800&t=st=1686714203~exp=1686714803~hmac=cfb69287bcb1166f141bafe6a5beea779a6d3685c82275aa2261ce3df59ea0b2'
                                alt="IT Solution"
                                className=" w-11/12 rounded-md object-cover h-[182px]"
                            />
                        </div>
                        <div className="px-5 py-7">
                            <h1 className="text-2xl font-bold text-[#FF715C]">IT Solution</h1>
                            <p className="mt-5 text-gray-600">
                                Our web development service is focused on creating high-quality, custom web solutions that meet the specific needs of your business.
                            </p>
                        </div>
                    </div>

                    <div className="w-[300px] border text-center rounded-md bg-white duration-500 hover:shadow-[0_5px_20px_1px_hsla(220,63%,33%,0.1)] hover:translate-y-[-15px] cursor-pointer">
                        <div className='flex justify-center pt-7'>
                            <img
                                src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5035.jpg?size=626&ext=jpg&ga=GA1.1.693161020.1681445498&semt=ais"
                                alt="Web Development"
                                className=" w-11/12 rounded-md object-cover h-[182px]"
                            />
                        </div>
                        <div className="px-5 py-7">
                            <h1 className="text-2xl font-bold text-[#FF715C]">Web Development</h1>
                            <p className="mt-5 text-gray-600">
                                Our web development service is focused on creating high-quality, custom web solutions that meet the specific needs of your business.
                            </p>
                        </div>
                    </div>


                    <div className="w-[300px] border text-center rounded-md bg-white duration-500 hover:shadow-[0_5px_20px_1px_hsla(220,63%,33%,0.1)] hover:translate-y-[-15px] cursor-pointer ">
                        <div className='flex justify-center pt-7'>
                            <img
                                src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?t=st=1686711026~exp=1686711626~hmac=02178bf6db8b4a1089dac4b5e77b53c44c4ab4b04b8a283789fb688456b96b67"
                                alt="App Development"
                                className=" w-11/12 rounded-md object-cover h-[182px]"
                            />
                        </div>
                        <div className="px-5 py-7">
                            <h1 className="text-2xl font-bold text-[#FF715C]">App Development</h1>
                            <p className="mt-5 text-gray-600">
                                Our app development service brings concept to deployment, we create innovative and user-friendly applications tailored to your specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
