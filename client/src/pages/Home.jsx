import { useEffect } from 'react';
import { Welcome, Collaboration, Footer, Feature, CTA, FAQs, Services, Testimonials } from '../components';
import { TrustBox } from '../components/TrustPilot.jsx';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    useEffect(() => {
        const chatbox = document.getElementById('fb-root');
        if (chatbox) {
            chatbox.style.position = 'fixed';
            chatbox.style.bottom = '20px'; // Adjust the value to your desired position from the bottom
            chatbox.style.right = '20px'; // Adjust the value to your desired position from the right
        }
    }, []);

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
            <div id="fb-root">
                <MessengerCustomerChat
                    pageId="111903781926107"
                    appId="223269043853889"
                />
            </div>
            <Footer />
        </>
    );
};

export default Home;
