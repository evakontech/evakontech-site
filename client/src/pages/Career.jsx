import { Link } from 'react-router-dom';

import { Navbar, Footer, SelectionProcess } from '../components';
import { careerHero, careerTeam } from '../assets';
import openings from '../constants/opening.data.json';

const Career = () => {
    return (
        <>
            <section className="hire-developer-area-wrapper">
                <div className="hire-developer-area-overlay-bg ">
                    <Navbar />
                    <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">Career</h1>
                        <p className="my-7 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <section className="my-16">
                    <div className="container-width flex items-center ">
                        <div className="w-full lg:w-4/5 m-auto text-center lg:text-left max-w-3xl lg:max-w-2xl">
                            <h1 className="text-4xl sm:text-6xl leading-tight font-bold max-w-2xl mb-5 mt-3 mx-auto lg:ms-0">
                                <span className="text-slate-900">Join the </span>
                                <span className="text-[#1563CB] ml-1">Evakon Tech Team</span>
                            </h1>

                            <p className="text-slate-900 text-base mb-4 md:text-lg font-medium ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto repudiandae
                                eligendi culpa recusandae tenetur beatae, nobis iste.
                            </p>
                            <p className="text-slate-600 text-sm md:text-base ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam doloremque
                                animi reiciendis commodi vel tenetur repellat quae, delectus debitis odio aut enim
                                corrupti porro nostrum quam totam itaque tempore non exercitationem consequatur sed at!
                                Placeat molestiae exercitationem suscipit pariatur corrupti, odio incidunt totam a
                                voluptates odit alias facilis. Blanditiis repellendus sunt ullam rem eveniet atque aut
                                consequatur quam deleniti fuga ab.
                            </p>

                            <div className="flex gap-5 flex-wrap justify-center lg:justify-start items-center mt-10">
                                <a href="#current-openings">
                                    <button
                                        type="button"
                                        className="rounded-md bg-[#1563cb] transition w-[250px] py-3 text-md font-semibold text-white shadow-sm border-2 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        See open positions
                                    </button>
                                </a>
                                <a href="#current-openings">
                                    <button
                                        type="button"
                                        className="rounded-md transition bg-transparent w-[250px] py-3 text-md font-semibold text-gray-600 border-2 border-[#1563cb] hover:border-transparent shadow-sm  hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Learn about internships
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* /hero-content */}

                        <div className="w-full lg:w-1/2 px-5 text-center hidden lg:block">
                            <img src={careerHero} alt="Company" className="w-full" />
                        </div>
                        {/* /hero-image */}
                    </div>
                    {/* /section-container */}
                </section>
                {/* /hero-section */}

                <SelectionProcess />

                <section className="py-10 px-3">
                    <div className="container-width flex items-center max-w-3xl lg:max-w-full gap-x-10">
                        <div className="w-full lg:w-1/2 px-5 text-center hidden lg:block">
                            <img src={careerTeam} alt="Company" className="w-full" />
                        </div>
                        {/* /section-image */}

                        <div className="w-full lg:w-4/5 m-auto text-center lg:text-left">
                            <h2 className="text-4xl leading-tight font-semibold mb-3">
                                <span className="text-slate-900">Be a part of</span>
                                <span className="text-[#1563CB]"> our team.</span>
                            </h2>

                            <div className="text-slate-600 text-sm md:text-base">
                                <p className="mb-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam
                                    doloremque animis id tempore possimus ducimus animi minus!
                                </p>
                                <p>
                                    Reiciendis commodi vel tenetur repellat quae, delectus nostrum quam totam itaque
                                    tempore non exercitationem consequatur sed at! Placeat molestiae exercitationem
                                    suscipit pariatur corrupti, odio incidunt totam a voluptates odit alias facilis.
                                    Blanditiis repellendus sunt ullam rem eveniet atque aut consequatur quam deleniti
                                    fuga ab.
                                </p>
                            </div>
                        </div>
                        {/* /section-content */}
                    </div>
                    {/* /section-container */}
                </section>
                {/* about-company-section */}

                <section className="bg-gray-100 py-10 px-3" id="current-openings">
                    <div className="section-container max-w-6xl mx-auto">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="mt-3 text-3xl font-semibold leading-tight text-black md:text-4xl">
                                Current Openings
                            </h2>
                        </div>
                        {/* /content */}

                        <table className="bg-white w-full mt-10 mb-10 py-12 px-5">
                            <thead>
                                <tr className="border-b-2 border-slate-300">
                                    <th className="p-5 font-medium text-gray-600 text-lg text-left">Position</th>
                                    <th className="p-5 font-medium text-gray-600 text-lg hidden sm:table-cell">
                                        Openings
                                    </th>
                                    <th className="p-5 font-medium text-gray-600 text-lg hidden md:table-cell">
                                        Deadline
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {openings.map((opening) => (
                                    <tr key={opening.id} className="border-b-2 border-slate-200">
                                        <td className="p-5 w-[60%]">{opening.position}</td>
                                        <td className="p-5 text-center hidden sm:table-cell">{opening.openings}</td>
                                        <td className="p-5 text-center hidden md:table-cell">{opening.deadline}</td>
                                        <td className="px-0 py-5 md:p-5 text-center">
                                            <Link
                                                to={`${opening['page_url']}/`}
                                                className="text-white bg-[#1563cb] py-2 px-4 rounded-md font-medium hover:bg-[#0f4fa8] transition-colors duration-200"
                                            >
                                                Apply Here
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* /openings-container */}
                    </div>
                    {/* /section-container */}
                </section>
                {/* /openings-section */}

                <div className="bg-[#1662D0] py-24 text-white text-center">
                    <div className="w-4/5 md:w-3/4 lg:w-3/5 m-auto">
                        <p className="text-4xl sm:text-6xl font-extrabold">Join and Experience Evakon Remote Life</p>
                        <p className="my-9">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae
                            quo ad iste ipsum officiis deleniti asperiores sit.
                        </p>
                        <div className="common-btn-style">
                            <Link to="/career">
                                <button className="flex items-center">Join Team</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        </>
    );
};

export default Career;
