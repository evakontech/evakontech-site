import React from 'react';

const HireDeveloperCTA = ({ setDisplayMultiStepForm }) => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center px-1 md:p-0">
                    {/* <div className="isolate flex justify-center -space-x-2">
                        <img
                            className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                            alt="Dan_Abromov"
                        />
                        <img
                            className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                            alt="Guillermo_Rauch"
                        />
                        <img
                            className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                            src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                            alt="Lee_Robinson"
                        />
                        <img
                            className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                            src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                            alt="Delba"
                        />
                    </div> */}

                    <h2 className="mt-8 text-2xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
                        Hire <span className="border-b-8 text-[#1563cb] border-yellow-300">Top-notch</span> Developers
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl px-3">
                        We are committed to promoting the remote work in Nepal's experience and shaping the future of
                        the software industry.
                    </p>

                    <button
                        type="button"
                        className="mt-8 rounded-md bg-[#1563cb] px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => setDisplayMultiStepForm(true)}
                    >
                        Join our team
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HireDeveloperCTA;
