
import { WelcomeArea } from '../welcome-area-section/welcome-area.component';
import { CollaboratingCompaniesList } from '../collaborating-company-list/collaborating-company-list.component';
import { BusinessGrowthSection } from '../business-growth/business-growth.component';
import { SmartWorkSection } from '../smart-work/smart-work-section.component';

export const Home = () => {
    return (
        <>
            <WelcomeArea />
            <CollaboratingCompaniesList />
            <BusinessGrowthSection />
            <SmartWorkSection />
        </>
    )
}
