import React from 'react'
import { NavigationBar } from '../navigation-bar/navigation-bar.component'
import './hire-developer.styles.css'

const HireDeveloper = () => {
    return (
        <section className='hire-developer-area-wrapper'>
            <div className="hire-developer-area-overlay-bg ">
                <NavigationBar />
                <div className='hire-developer-area-text  flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold'>
                        Hire a Best Developer Of Your Choice
                    </h1>
                    <p className='my-7 text-white '>
                        Your ultimate partner in remote excellence.
                    </p>
                    
                    
                </div>
            </div>
        </section>
    )
}

export default HireDeveloper