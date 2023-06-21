import React, { useState } from 'react'
import { NavigationBar } from '../navigation-bar/navigation-bar.component'
import './hire-developer.styles.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
// import { Zap, Moon, Filter } from 'lucide-react';
import { TfiWrite } from 'react-icons/tfi'
import { BsCodeSlash, BsPersonCheck } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { Footer } from '../footer/footer.component'
import { MultistepForm } from '../multistep-form/MultistepForm'
import { HireDeveloperCTA } from './HireDeveloperCTA';




const data = [
  {
    department: 'Engineering',
    employess: [
      {
        name: 'John Doe',
        title: 'Front-end Developer',
        department: 'Engineering',
        email: 'john@devui.com',
        role: 'Developer',
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      {
        name: 'Jane Doe',
        title: 'Back-end Developer',
        department: 'Engineering',
        email: 'jane@devui.com',
        role: 'CTO',
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
    ],
  },
  {
    department: 'Marketing',
    employess: [
      {
        name: 'Mark Doe',
        title: 'Digital Marketing',
        department: 'Marketing',
        email: 'mark@devui.com',
        role: 'SEO Manager',
        image:
          'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      },
      {
        name: 'Seb Cook',
        title: 'Social Media',
        department: 'Marketing',
        email: 'seb@devui.com',
        role: 'Social Media Manager',
        image:
          'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      },
    ],
  },
]


const HireDeveloper = () => {

  const [displayMultiStepForm, setDisplayMultiStepForm] = useState(false);

  return (
    <>
      <section className='hire-developer-area-wrapper'>
        <div className="hire-developer-area-overlay-bg ">
          <NavigationBar />
          <div className='hire-developer-area-text flex flex-col items-center justify-center text-center'>
            <h1 className='text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold'>
              Hire Developer
            </h1>
            <p className='my-5 sm:text-sm  md:text-md text-white '>
              Simply Get started hiring the best developers in the following steps
            </p>
          </div>
        </div>
      </section>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">

          {/* <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          DevUI helps you build beautiful website
        </h2>  */}
          {/* <p className="mt-4 text-base leading-relaxed text-gray-600">
          Simply Get started hiring the best developers in the following steps
        </p> */}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <TfiWrite className="h-9 w-9 text-sitecolor" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Define Your Requirement</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <BsCodeSlash className="h-9 w-9 text-sitecolor" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black"> Choose Tech Stack</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <BsPersonCheck className="h-9 w-9 text-sitecolor" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Select the Developers</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <BiTimeFive className="h-9 w-9 text-sitecolor" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Select the Timeframe</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <HireDeveloperCTA setDisplayMultiStepForm={setDisplayMultiStepForm} />
      </div>

      {/* Multi-step form */}
      {displayMultiStepForm &&
        <div className='multi-step-form-wrapper'>
          <MultistepForm setDisplayMultiStepForm={setDisplayMultiStepForm} />
        </div>
      }
      <Footer />

    </>
  )
}

export default HireDeveloper