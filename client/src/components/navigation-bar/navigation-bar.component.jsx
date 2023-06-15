import { useState } from "react";
import { Link } from "react-router-dom";

//CSS
import './navigation-bar.styles.css';
import { LuSend } from 'react-icons/lu'


export const NavigationBar = () => {

    const [displayMobNav, setDisplayMobNav] = useState(false);

    return (
        <section className="container-width py-6 text">

            {/* Nav for desktop(screen size greater then 1280px) */}
            <section className="hidden xl:block">
                <div className="flex justify-between items-center">

                    <div className="logo font-semibold text-3xl text-white">
                        Evakon Tech
                    </div>

                    <div className="nav-bar flex items-center gap-x-20">

                        <div>
                            <ul className="flex gap-x-7 text-lg font-semibold text-white">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><a href="#services">Services</a></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/hire-developer">Hire Developer</Link></li>
                            </ul>
                        </div>

                        <div className="common-btn-style ">
                            <button className="flex items-center">
                                <LuSend className="mr-2" />
                                Request a Project
                            </button>
                        </div>

                    </div>

                </div>
            </section>

            {/* Nav for screen size less than 1280px */}

            <section className="block xl:hidden">

                <div className="flex justify-between items-center">
                    <div className="logo font-semibold text-3xl text-white">
                        Evakon Tech
                    </div>

                    <div className="text-2xl text-white">
                        <button onClick={() => setDisplayMobNav(true)}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>

                    <div className={`mob-nav-menu-wrapper flex justify-end ${displayMobNav ? "w-full" : "w-0 overflow-hidden m-0 p-0"}`}>

                        <div className={`${displayMobNav ? "open-nav" : "close-nav"} mob-nav-menu bg-white py-5 px-9 box-border`}>

                            <div className="flex justify-right cross-btn items-center ">

                                {/* <p className="text-2xl font-bold">Evakon Tech</p> */}

                                <button
                                    className="border border-solid border-black w-9 h-9 rounded-full text-xs"

                                    onClick={() => setDisplayMobNav(false)}
                                >
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>


                            <div className="mt-12 mob-nav-menu-links flex flex-col align-center justify-center">
                                <ul className="flex flex-col mob-menu-links gap-y-7  font-bold text-black">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><Link to="/career">Career</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/hire-developer">Hire a Developer</Link></li>
                                </ul>

                                <div className="mob-nav-contact-btn common-btn-style">
                                    <Link to="./contact">
                                        <button className="bg-[#1563cb] text-white">
                                            Request Project
                                        </button>
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


        </section>
    )
}
