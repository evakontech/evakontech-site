import { Navbar, BusinessGrowth, Products, Footer } from '../components';

const Product = () => {
    return (
        <section className="hire-developer-area-wrapper">
            <div className="hire-developer-area-overlay-bg ">
                <Navbar />
                <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">Our Products</h1>
                    <p className="my-7 text-white ">Our Product: Showcasing Our Creative Solutions and Success Stories</p>
                </div>
            </div>
            <BusinessGrowth />
            <Products />
            <Footer />
        </section>
    );
};

export default Product;
