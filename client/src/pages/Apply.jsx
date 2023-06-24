import { Link } from 'react-router-dom';
import { Navbar } from '../components';

const Apply = () => {
    return (
        <section>
            <section className="bg-[#1563cb] px-10 h-[300px]">
                <Navbar />
                <div className="container-width flex justify-center flex-col h-full">
                    <h2 className="text-white text-4xl font-semibold mb-3">Job Application Form</h2>
                    <div className="text-white flex items-center">
                        <Link to={'/'} className="transition text-base hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-xl font-black">&#183;</span>
                        <p to={'/'} className="text-base">
                            Application form
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-center container-width px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
                <div className="me-auto w-full max-w-2xl ">
                    <h2 className="text-3xl font-semibold text-[#2C72D0]">Apply for the job.</h2>

                    <form action="https://formspree.io/f/xvonjnjk" method="POST" className="mt-7">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-gray-900">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                        name="name"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email Address"
                                        id="email"
                                        name="email"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-base font-medium text-gray-900">
                                    Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Phone Number"
                                        id="phone"
                                        name="phone"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="file" className="text-base font-medium text-gray-900">
                                    CV or resume file
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="file"
                                        id="file"
                                        name="resume"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="learn-more" className="text-base font-medium text-gray-900">
                                        How many years of experience do you have?
                                    </label>
                                    <div className="mt-2 flex justify-start items-center">
                                        <input type="radio" name="experience" id="0-2" />
                                        <label htmlFor="0-2" className="ml-1 text-base">
                                            0-2 years
                                        </label>
                                    </div>
                                    <div className="mt-2 flex justify-start items-center">
                                        <input type="radio" name="experience" id="2-4" />
                                        <label htmlFor="2-4" className="ml-1 text-base">
                                            2-4 years
                                        </label>
                                    </div>
                                    <div className="mt-2 flex justify-start items-center">
                                        <input type="radio" name="experience" id="4-6" />
                                        <label htmlFor="4-6" className="ml-1 text-base">
                                            4-6 years
                                        </label>
                                    </div>
                                    <div className="mt-2 flex justify-start items-center">
                                        <input type="radio" name="experience" id="6+" />
                                        <label htmlFor="6+" className="ml-1 text-base">
                                            Above 6 years
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="learn-more" className="text-base font-medium text-gray-900">
                                        Let's hear more about your strength.
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            className="flex h-40 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            name="learn_more"
                                            id="learn-more"
                                            placeholder="Submit your cover letter"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="rounded-md bg-[#1563cb] transition px-16 py-3 text-md font-semibold text-white shadow-sm border-2 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Apply;
