import { Navbar, BusinessGrowth, Projects, Footer } from '../components';

const Portfolio = () => {
    return (
        <section className="hire-developer-area-wrapper">
            <div className="hire-developer-area-overlay-bg ">
                <Navbar />
                <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">Our Works</h1>
                    <p className="my-7 text-white ">Our Work: Showcasing Our Creative Solutions and Success Stories</p>
                </div>
            </div>
            <BusinessGrowth />
            <Projects />
            <Footer />
        </section>
    );
};

export default Portfolio;
