import React from 'react'
import { NavigationBar } from '../navigation-bar/navigation-bar.component'
import './hire-developer.styles.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
// import { Zap, Moon, Filter } from 'lucide-react';
import { TfiWrite } from 'react-icons/tfi'
import { BsCodeSlash, BsPersonCheck } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { Footer } from '../footer/footer.component'


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
  return (
    <>
      <section className='hire-developer-area-wrapper'>
        <div className="hire-developer-area-overlay-bg ">
          <NavigationBar />
          <div className='hire-developer-area-text flex flex-col items-center justify-center text-center'>
            <h1 className='text-4xl mt-15 sm:text-4xl md:text-md text-white font-extrabold'>
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



      <section className="mt-20 mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div >
            <h2 className="text-5xl mb-6 font-size-2xl font-bold text-center text-black">Our Best Team Members</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all the best developers. You can get to build your best team.
              ones.
            </p>
          </div>

        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((dept) => (
                      <React.Fragment key={dept.department}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="col"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                          >
                            {dept.department}
                          </th>
                        </tr>
                        {dept.employess.map((employee) => (
                          <tr key={employee.name}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={employee.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900 ">
                                    {employee.name}
                                  </div>
                                  <div className="text-sm text-gray-500">{employee.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-gray-900">{employee.title}</div>
                              <div className="text-sm text-gray-500">{employee.department}</div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                              {employee.role}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <a href="#" className="text-gray-500">
                                Edit
                              </a>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>previous</span>
          </a>

          {/* <div className="hidden items-center gap-x-3 md:flex">
            <a href="#" className="rounded-md bg-gray-100 px-2 py-1 text-sm">
              1
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              2
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              3
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              ...
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              12
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              13
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              14
            </a>
          </div> */}
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>









      <section className="w-full mt-10 mb-20 flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">

            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Let's get you started</h3>

            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="font-medium">
                Comapny Name
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                Company Email
              </label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                Company Address
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="relative ">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select a role</option>
                <option>Project manager</option>
                <option>Software engineer</option>
                <option>IT manager</option>
                <option>UI / UX designer</option>
              </select>
            </div>
            <div>
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-none border-white-100 focus:ring-blue-500 focus:border-blue-500 light:placeholder-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please explain about your project ..."></textarea>
            </div>


            <button
              className="w-full px-4 py-2 text-white font-medium bg-sitecolor hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Submit
            </button>

          </form>
        </div>

      </section>

      <Footer />

    </>
  )
}

export default HireDeveloper