import { Navbar, Footer } from '../components';

const About = () => {
    return (
        <section className="hire-developer-area-wrapper">
            <div className="hire-developer-area-overlay-bg ">
                <Navbar />
                <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">About Us</h1>
                    <p className="my-7 text-white ">Who We Are: Committed to Excellence and Innovation</p>
                </div>
            </div>

            {/* Body */}
            <div className="container-width">
                <div className="grid grid-cols-1 justify-center lg:justify-start lg:grid-cols-2 gap-12 items-center py-16">
                    {/* col 1 */}
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/feedback-concept-illustration_114360-5044.jpg?w=740&t=st=1687803693~exp=1687804293~hmac=39ddc09575f7efd82c4828fc5e8d45dc01dfdad49af3c9e6da7eda30af604b76"
                            alt="About Us"
                            className="w-full"
                        />
                    </div>

                    {/* col 2 */}
                    <div>
                        <div className="text-center lg:text-left">
                            <p className="text-5xl font-bold">we’re your partner in your success</p>

                            <p className="my-7">
                                Evakon Tech is a leading software company that specializes in providing top-notch digital solutions to businesses of all sizes. Our team of experts is dedicated to helping you achieve your goals and drive your business forward with innovative technology and unparalleled support.
                            </p>
                        </div>

                        <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
                            <div className="border border-solid border-[#1563cb] w-40 py-4 text-center rounded-2xl ">
                                <p className="text-4xl text-[#1563cb] font-bold">10+</p>
                                <p className="font-semibold text-xs mt-2">HAPPY CLIENTS</p>
                            </div>

                            <div className="border border-solid border-[#1563cb] w-40 py-4 text-center rounded-2xl">
                                <p className="text-4xl text-[#1563cb] font-bold">5+</p>
                                <p className="font-semibold text-xs mt-2">PROJECT DELIVERED</p>
                            </div>

                            <div className="border border-solid border-[#1563cb] w-40 py-4 text-center rounded-2xl">
                                <p className="text-4xl text-[#1563cb] font-bold">1+</p>
                                <p className="font-semibold text-xs mt-2">YEARS EXPERIENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="container-width grid grid-cols-1 justify-center lg:justify-start lg:grid-cols-2 gap-12 items-center py-16">
                    <div className="text-center lg:text-left">
                        <p className="text-5xl font-bold">Our Goal</p>

                        <p className="mt-7">
                            Our team of experienced professionals works closely with each client to understand their
                            unique needs and develop customized solutions that drive growth and success. Whether you’re
                            looking to improve your online presence or enhance your customer
                            experience, Evakon Tech has the expertise and resources to help you achieve your goals.
                        </p>

                        <p className="my-5">
                            We’re passionate about technology and dedicated to helping our clients succeed. Let us be your
                            partner in success and help you take your business to the next level with our innovative IT solutions
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
                            src="https://img.freepik.com/free-vector/business-people-working-setting-company-target_1262-20616.jpg?w=1380&t=st=1687803276~exp=1687803876~hmac=f531481c4060bd758eac05056614856b4236bdb2068a2abb5d3db34cfb28668a"
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

                    <p className="my-7 w-3/4 lg:w-1/2 mx-auto">
                        Our founders are a team of experienced software developers who are dedicated to providing innovative solutions through Evakon Tech
                    </p>
                </div>

                <div className="flex flex-col flex-wrap items-center md:flex-row justify-center gap-x-10 gap-y-14 text-center md:text-start">
                    <div className="w-[320px] hover:translate-y-[-20px] duration-300 cursor-pointer">
                        <div className="w-[90%] m-auto">
                            <img
                                src="https://i.ibb.co/VQXYcmp/279575077-803739760966008-8880273309683742698-n.jpg"
                                alt="Developer"
                                className="w-[400px]"
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
                                className="w-[400px] "
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
                        Discover the power of digital marketing and elevate your business to new heights with our cutting-edge solutions and expert team
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
