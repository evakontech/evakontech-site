import React, { useState } from 'react';
import { useForm } from '@formspree/react';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [state, handleSubmit] = useForm("xvonjnjk");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        await handleSubmit(e);
        setEmail(''); // Clear the input field after subscribing
    };

    if (state.succeeded) {
        return <p>Thanks for subscribing!</p>;
    }

    return (
        <footer className="container-width pt-20 pb-10">
            <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
                <div className="w-full px-4 md:w-1/2 lg:px-0">
                    <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <form onSubmit={handleSubscribe} className="mt-4 inline-flex w-full items-center md:w-3/4">
                        <input
                            className="flex h-10 w-full outline-none rounded-md border border-black/20 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <button
                            type="submit"
                            className="ml-4 bg-[#1563cb] h-10 w-12 rounded-full text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            disabled={state.submitting}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </form>
                    {state.errors.length > 0 && (
                        <div className="mt-2 text-red-500">Error occurred while subscribing. Please try again later.</div>
                    )}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-2xl font-semibold text-gray-700">Company</p>
                        <ul className="flex flex-col space-y-4 text-[1.2rem] font-medium text-gray-500">
                            <li>About us</li>
                            <li>Our Team</li>
                            <li>Our Vision</li>
                            <li>Our Product</li>
                        </ul>
                    </div>

                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-2xl font-semibold text-gray-700">Join</p>
                        <ul className="flex flex-col space-y-4 text-[1rem] font-medium text-gray-500">
                            <li>Hire Remote Developer</li>
                            <li>Career at Evakon</li>
                            <li>Open Source</li>
                        </ul>
                    </div>

                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-2xl font-semibold text-gray-700">Connection</p>
                        <ul className="flex flex-col space-y-4 text-[1rem] font-medium text-gray-500">
                            <li>Blog</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <div className="mx-auto max-w-6xl items-center justify-center md:justify-between px-4 py-3 md:flex lg:px-0">
                <div className="inline-flex items-center">
                    <span className="ml-4 text-2xl font-bold">Evakon Tech</span>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm font-medium text-gray-500">© {new Date().getFullYear()} Evakon Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
