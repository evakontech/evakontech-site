import { Welcome, Collaboration, Footer, Feature, CTA, FAQs, Services, Testimonials } from '../components';
import { TrustBox } from '../components/TrustPilot.jsx';

const Home = () => {
    return (
        <>
            <Welcome />
            <Collaboration />
            <Feature />
            <Services />
            <FAQs />
            <Testimonials />
            <TrustBox />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;
