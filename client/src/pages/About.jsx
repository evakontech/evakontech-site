import { Navbar, Footer } from '../components';

const About = () => {
    return (
        <section className="hire-developer-area-wrapper">
            <div className="hire-developer-area-overlay-bg ">
                <Navbar />
                <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">About Us</h1>
                    <p className="my-7 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            {/* Body */}
            <div className="container-width">
                <div className="grid grid-cols-1 justify-center lg:justify-start lg:grid-cols-2 gap-12 items-center py-16">
                    {/* col 1 */}
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/business-team-communicating-via-social-media_74855-5439.jpg?t=st=1686815150~exp=1686815750~hmac=e6d3864311341991c56c9b3ea12c0536cff87b71fc61467366d013f51a7241b8"
                            alt="About Us"
                            className="w-full"
                        />
                    </div>

                    {/* col 2 */}
                    <div>
                        <div className="text-center lg:text-left">
                            <p className="text-5xl font-bold">we’re your partner in your success</p>

                            <p className="my-7">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tenetur maxime labore
                                recusandae enim dolore, nesciunt, porro molestias ullam eum atque harum! Consectetur,
                                facilis maxime ratione fugiat laborum omnis atque quae, molestiae rem perspiciatis
                                veritatis cumque ex minima, numquam quis dicta impedit possimus tempore? Quo sequi
                                labore, explicabo sit vitae.
                            </p>
                        </div>

                        <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
                            <div className="border border-solid border-[#BE63F9] w-40 py-4 text-center rounded-2xl ">
                                <p className="text-4xl text-[#BE63F9] font-bold">10+</p>
                                <p className="font-semibold text-xs mt-2">HAPPY CLIENTS</p>
                            </div>

                            <div className="border border-solid border-[#26C6DA] w-40 py-4 text-center rounded-2xl">
                                <p className="text-4xl text-[#26C6DA] font-bold">5+</p>
                                <p className="font-semibold text-xs mt-2">PROJECT DELIVERED</p>
                            </div>

                            <div className="border border-solid border-[#FC573C] w-40 py-4 text-center rounded-2xl">
                                <p className="text-4xl text-[#FC573C] font-bold">1+</p>
                                <p className="font-semibold text-xs mt-2">YEARS EXPERIENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="container-width grid grid-cols-1 justify-center lg:justify-start lg:grid-cols-2 gap-12 items-center py-16">
                    <div className="text-center lg:text-left">
                        <p className="text-5xl font-bold">Our Goal</p>

                        <p className="mt-7">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tenetur maxime labore
                            recusandae enim dolore, nesciunt, porro molestias ullam eum atque harum! Consectetur,
                            facilis maxime ratione fugiat laborum omnis atque quae
                        </p>

                        <p className="my-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tenetur maxime labore
                            recusandae enim dolore, nesciunt, porro molestias ullam eum atque harum! Consectetur,
                            facilis maxime ratione fugiat laborum omnis atque quae.
                        </p>

                        <button
                            type="button"
                            className="border border-[#1563cb] border-solid text-black py-3 px-20 lg:px-8 rounded-3xl hover:bg-[#1563cb] hover:text-white"
                        >
                            Read More
                        </button>
                    </div>

                    <div>
                        <img
                            src="https://www.creativefabrica.com/wp-content/uploads/2022/12/07/Business-team-goals-concept-illustration-Graphics-50805046-1-580x386.png"
                            alt="About Us"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Developer section */}

            <div className="container-width py-16">
                <div className="text-center mb-14">
                    <p className="text-5xl font-bold">Our Founders</p>

                    <p className="my-7 w-1/2 mx-auto">
                    Our founders are a team of experienced software developers who are dedicated to providing innovative solutions through Evakon Tech
                    </p>
                </div>

                <div className="flex flex-col flex-wrap items-center md:flex-row justify-center gap-x-10 gap-y-14 text-center md:text-start">
                    <div className="w-[320px] hover:translate-y-[-20px] duration-300 cursor-pointer">
                        <div className="w-[90%] m-auto">
                            <img
                                src="https://theme-land.com/digimx/demo/assets/img/team/thumb_3.jpg"
                                alt="Developer"
                                className="w-full"
                            />

                            <div className="mt-5 ps-2">
                                <p className="text-lg font-bold">Sudip Kumar Mahato</p>

                                <p className="text-sm font-semibold">Co-Founder</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[320px] rounded-md hover:translate-y-[-20px] duration-300 cursor-pointer">
                        <div className="w-[90%] m-auto">
                            <img
                                src="https://i.ibb.co/GR0wZbp/1651667138404.jpg"
                                alt="Developer"
                                className="w-full"
                            />

                            <div className="mt-5 ps-2">
                                <p className="text-lg font-bold">Sajan Dawadi</p>

                                <p className="text-sm font-semibold">Co-Founder</p>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>

            <div className="bg-[#1662D0] py-24 text-white text-center">
                <div className="w-4/5 md:w-3/4 lg:w-3/5 m-auto">
                    <p className="text-4xl sm:text-6xl font-extrabold">
                        looking for the best digital agency & marketing solution?
                    </p>
                    <p className="my-9">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo
                        ad iste ipsum officiis deleniti asperiores sit.
                    </p>
                    <div className="common-btn-style">
                        <button className="flex items-center">Contact us</button>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default About;
