import { Welcome, Collaboration, Footer, Feature, CTA, FAQs, Services, Testimonials } from '../components';
import { TrustBox } from '../components/TrustPilot.jsx';
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
            <MessengerCustomerChat
                pageId="111903781926107"
                appId="223269043853889"
            />
            <Footer />
        </>
    );
};

export default Home;
