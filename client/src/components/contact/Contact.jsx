import React from 'react'
import { NavigationBar } from '../navigation-bar/navigation-bar.component'
<<<<<<< HEAD
import {ContactForm} from './ContactForm.jsx'
=======
import { ContactForm } from './ContactForm.jsx'
>>>>>>> f56de5ad2d10c3cae0f71080163a203d1feb935b
import { Footer } from '../footer/footer.component.jsx'

const Contact = () => {
    return (
        <section className='contact-area-wrapper'>
            <div className="hire-developer-area-overlay-bg ">
                <NavigationBar />
                <div className='hire-developer-area-text p-10  flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl mt-15 sm:text-4xl md:text-md text-white font-extrabold'>
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