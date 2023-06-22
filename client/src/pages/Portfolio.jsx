import { Navbar, BusinessGrowth, Projects, Footer } from '../components';

const Portfolio = () => {
    return (
        <section className="hire-developer-area-wrapper">
            <div className="hire-developer-area-overlay-bg ">
                <Navbar />
                <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">Our Work</h1>
                    <p className="my-7 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <BusinessGrowth />
            <Projects />
            <Footer />
        </section>
    );
};

export default Portfolio;
