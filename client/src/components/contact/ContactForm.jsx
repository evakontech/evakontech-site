
import React from 'react'
const locations = [
    {
        title: 'Remote Location ',
        timings: 'Mon-Sat 9am to 5pm.',
        address: 'Kathmandu, Tinkune',
        country: "Nepal",
        phone: "9816725300",
        mail: "info@evakon.tech"
    }
]

export const ContactForm = () => {
    return (
        <>
            <div className="mx-auto m-4 max-w-7xl px-4">
                <div className="mx-auto max-w-7xl py-12 md:py-24">
                    <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                        {/* contact from */}
                        <div className="flex items-center justify-center">
                            <div className="px-2 md:px-12">
                                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                                <p className="mt-4 text-lg text-gray-600">
                                    Our friendly team would love to hear from you.
                                </p>
                                <form action="" className="mt-8 space-y-4">
                                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="first_name"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                id="first_name"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="last_name"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                id="last_name"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="text"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="phone_number"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="tel"
                                            id="phone_number"
                                            placeholder="Phone number"
                                        />
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            id="message"
                                            placeholder="Leave us a message"
                                            cols={3}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full rounded-md bg-[#1563cb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                        <img
                            alt="Contact us"
                            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                            src="https://img.freepik.com/free-vector/adult-talking-cell-phone-concept-illustration_114360-9555.jpg?size=626&ext=jpg"
                        />
                    </div>
                </div>
            </div>
            {/* Address */}
            <div className="rounded-lg ">

                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="py-5">
                        <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
                            <div className="space-y-4">
                                <p className="w-full text-4xl font-bold text-gray-900">Our Remote Office</p>
                                <p className="w-full text-lg text-gray-600">Find us at these locations.</p>
                            </div>
                            <div className="space-y-4 divide-y-2">
                                {locations.map((location) => (
                                    <div
                                        key={location.title}
                                        className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                                    >
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/840px-Flag_of_Nepal.svg.png"
                                        alt="Laptop"
                                        className="h-34 w-16	 rounded-t-md object-cover"
                                      />
                                        <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                                        <p className="w-full text-base  text-gray-600">{location.timings}</p>
                                        <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-6" />

        </>
    )
}
