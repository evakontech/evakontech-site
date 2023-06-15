import React from 'react'
import { NavigationBar } from '../navigation-bar/navigation-bar.component'
import {ContactForm} from './ContactForm.jsx'
import { Footer } from '../footer/footer.component.jsx'

const Contact = () => {
    return (
        <section className='contact-area-wrapper'>
            <div className="hire-developer-area-overlay-bg ">
                <NavigationBar />
                <div className='hire-developer-area-text  flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold'>
                        Contact Us
                    </h1>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </section>
    )
}

export default Contact