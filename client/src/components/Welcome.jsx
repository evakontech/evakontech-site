import { Link } from 'react-router-dom';
import { useRef } from 'react';

import Navbar from './Navbar';

const Welcome = () => {
    const nextSectionRef = useRef(null);

    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="welcome-area-wrapper">
            <div className="welcome-area-overlay-bg">
                <Navbar />
                <div className="welcome-area-text flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl sm:text-6xl md:text-md text-white font-extrabold">
                        Crafting Intuitive <span className="stroke-text"> Interfaces </span>
                    </h1>
                    <p className="my-7 text-white ">
                        We're on a mission to promotize the software
                        industry by pushing remote work culture, fostering collaboration, and igniting innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 common-btn-style">

                        <Link to="/contact"> <button className="home-btn-primary">Start a project</button></Link>
                        <Link to="/contact">
                            <button>Contact Us</button>
                        </Link>
                    </div>
                    <div className="mouse-arrow-button" onClick={scrollToNextSection}>
                        <div className="mouse-icon"></div>
                    </div>
                </div>
            </div>
            <div ref={nextSectionRef}></div>
        </section>
    );
};

export default Welcome;
