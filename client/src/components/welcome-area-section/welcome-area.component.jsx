import { NavigationBar } from '../navigation-bar/navigation-bar.component';
import './welcome-area.styles.css';
import { useRef } from 'react';

export const WelcomeArea = () => {
    const nextSectionRef = useRef(null);

    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='welcome-area-wrapper'>
            <div className="welcome-area-overlay-bg">
                <NavigationBar />
                <div className='welcome-area-text flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl sm:text-6xl md:text-md text-white font-extrabold'>
                        Crafting Intuitive Interfaces
                    </h1>
                    <p className='my-7 text-white '>
                        Your ultimate partner in remote excellence. We're on a mission to revolutionize the software industry by promoting remote work, fostering collaboration, and igniting innovation. Step into a world of limitless possibilities and shape the future together!
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 common-btn-style'>
                        <button className='home-btn-primary'>
                            Start a project
                        </button>
                        <button>
                            Contact Us
                        </button>
                    </div>
                    <div className='mouse-arrow-button' onClick={scrollToNextSection}>
                        <div className='mouse-icon'></div>
                    </div>
                </div>
            </div>
            <div ref={nextSectionRef}></div> {/* Placeholder for the next section */}
        </section>
    );
}
