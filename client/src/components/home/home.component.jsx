import React from 'react'
import { WelcomeArea } from '../welcome-area-section/welcome-area.component';
import { CollaboratingCompaniesList } from '../collaborating-company-list/collaborating-company-list.component';

const Home = () => {
    return (
        <>
            <WelcomeArea />
            <CollaboratingCompaniesList />
        </>
    )
}

export default Home;