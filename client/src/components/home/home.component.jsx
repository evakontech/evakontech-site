
import { WelcomeArea } from '../welcome-area-section/welcome-area.component';
import { CollaboratingCompaniesList } from '../collaborating-company-list/collaborating-company-list.component';
// import { BusinessGrowthSection } from '../business-growth/business-growth.component';
import { Footer } from '../footer/footer.component';
// import { Pricing } from '../pricing-section/pricing-section.component';
import { Feature } from '../feature/Feature.jsx';
import { CTA } from '../cta/CTA.jsx';
import { FAQs } from '../faq/FAQs.jsx';
// import { ServiceSection } from '../service-section/ServicesSection.component';
import { Services } from '../service-section-2/Services';
import Review from '../review/Review.jsx';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export const Home = () => {
    return (
        <>
            <WelcomeArea />
            <CollaboratingCompaniesList />
            <Feature />
            {/* <BusinessGrowthSection /> */}
            <Services />
            {/* <Pricing /> */}
            <FAQs />
            <Review />
            <CTA />
            <MessengerCustomerChat
                pageId="111903781926107"
                appId="223269043853889"
            />
            <Footer />
        </>
    )
}
