import React from 'react';
import { NavigationBar } from '../navigation-bar/navigation-bar.component';
import './career.css';
import { Link } from 'react-router-dom';
import sideImage from '../../assets/career-side-img.jpg';

const Career = () => {
    return (
        <>
            <section className="career-page-wrapper">
                <div className="w-full h-full navigation-container">
                    <NavigationBar />
                </div>

                <div className="career-hero my-14 px-3 md:px-5">
                    <div className="career-content">
                        <p className="page-name text-xs md:text-base text-gray-500 mb-3 md:mb-4 font-medium ">
                            CAREERS
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-2xl">
                            <span className="text-slate-900">
                                Be a part of a{' '}
                            </span>
                            <span className="colored-text">
                                world class team.
                            </span>
                        </h1>
                        <p className="text-slate-900 text-base mb-4 md:text-lg font-medium ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt iusto repudiandae eligendi culpa
                            recusandae tenetur beatae, nobis iste.
                        </p>
                        <p className="text-slate-600 text-sm md:text-base ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis aliquam doloremque animi
                            reiciendis commodi vel tenetur repellat quae,
                            delectus debitis odio aut enim corrupti porro
                            nostrum quam totam itaque tempore non exercitationem
                            consequatur sed at! Placeat molestiae exercitationem
                            suscipit pariatur corrupti, odio incidunt totam a
                            voluptates odit alias facilis. Blanditiis
                            repellendus sunt ullam rem eveniet atque aut
                            consequatur quam deleniti fuga ab.
                        </p>
                        <Link to="/career">
                            <button
                                type="button"
                                className="mt-8 me-6 rounded-md bg-[#1563cb] transition px-4 py-3 text-md font-semibold text-white shadow-sm border-2 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                See open positions
                            </button>
                        </Link>

                        <Link to="/career">
                            <button
                                type="button"
                                className="mt-8 rounded-md transition bg-transparent px-4 py-3 text-md font-semibold text-gray-600 border-2 border-[#1563cb] hover:border-transparent shadow-sm  hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Learn about internships
                            </button>
                        </Link>
                    </div>
                    <div className="career-img">
                        <img src={sideImage} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Career;

/*

*/
