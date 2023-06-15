import React from 'react'
import { NavigationBar } from '../navigation-bar/navigation-bar.component'
import './portfolio.css'

const Portfolio = () => {
    return (
        <section className='hire-developer-area-wrapper'>
            <div className="hire-developer-area-overlay-bg ">
                <NavigationBar />
                <div className='hire-developer-area-text  flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold'>
                        Our Work
                    </h1>
                    <p className='my-7 text-white '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>


                </div>
            </div>
        </section>
    )
}

export default Portfolio