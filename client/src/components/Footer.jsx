import styles from '../styles';
import { footerLinks } from '../constants';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [state, handleSubmit] = useForm('xvonjnjk');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        await handleSubmit(e);
        setEmail('');
    };

    if (state.succeeded) {
        return <p>Thanks for subscribing!</p>;
    }

    return (
        <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col sm:px-16 px-6`}>
            <div className={`${styles.flexStart} lg:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <form className="flex flex-1" onSubmit={handleSubscribe}>
                        <input
                            className="h-10 w-64 rounded-md border-2 border-gray-700 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="transition bg-[#1563cb] hover:bg-black text-white h-10 w-11 rounded-md ml-2"
                            disabled={state.submitting}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </form>
                    {state.errors.length > 0 && (
                        <div className="mt-2 text-red-500">
                            Error occurred while subscribing. Please try again later.
                        </div>
                    )}
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 gap-7">
                    {footerLinks.map((footerLink, idx) => (
                        <div className="flex flex-col sm:my-0 my-4 min-w-[150px]" key={idx}>
                            <h4 className="font-poppins text-2xl font-semibold mb-1">{footerLink.title}</h4>
                            {/* /footer-link-title */}
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, idx) => (
                                    <li
                                        key={idx}
                                        className={`font-poppins font-medium transition text-lg text-slate-600 hover:text-[#1563cb] cursor-pointer ${
                                            idx !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0'
                                        }`}
                                    >
                                        <Link to={link.destination}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            {/* /footer-links */}
                        </div>
                    ))}
                </div>
                {/* /footer-links-container */}
            </div>
            {/* /footer-top-container */}

            <div className="w-full flex justify-between items-center sm:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
                <h5 className="text-xl font-bold">Evakon Tech</h5>
                <p className="font-poppins font-normal text-center text-base sm:mb-0 mb-2">
                    Copyright &copy; {new Date().getFullYear()} EvakonTech. All Rights Reserved.
                </p>
            </div>
            {/* /footer-bottom-container */}
        </footer>
    );
};

export default Footer;
