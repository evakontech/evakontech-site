import { useEffect } from 'react';
import Swiper from 'swiper';

const Testimonials = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 8,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className='py-32 '>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

            <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />

            <section>
                <div className="w-[90%]  md:w-3/4 lg:w-3/5 m-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl">
                        Hear From Our Clients & Partners
                    </h2>
                </div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="swiper-container overflow-hidden">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <blockquote className="bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="ProtozoaHost"
                                            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div className="text-sm">
                                            <p className="font-medium">Anand Shah</p>
                                            <p className="mt-1">Founder</p>
                                        </div>
                                    </div>

                                    <p className="relative mt-4 text-gray-500">
                                        <span className="text-xl">&ldquo;</span>
                                        Protozoahost, a prominent web hosting company in Nepal, recently discovered Evakon Tech, a remarkable software company. We were thoroughly impressed by their offerings! Evakon Tech provided us with a wealth of talented professionals.
                                        <span className="text-xl">&rdquo;</span>
                                    </p>
                                </blockquote>
                            </div>

                            <div className="swiper-slide">
                                <blockquote className="bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="ProtozoaHost"
                                            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div className="text-sm">
                                            <p className="font-medium">Anand Shah</p>
                                            <p className="mt-1">Founder</p>
                                        </div>
                                    </div>

                                    <p className="relative mt-4 text-gray-500">
                                        <span className="text-xl">&ldquo;</span>
                                        Protozoahost, a prominent web hosting company in Nepal, recently discovered Evakon Tech, a remarkable software company. We were thoroughly impressed by their offerings! Evakon Tech provided us with a wealth of talented professionals.
                                        <span className="text-xl">&rdquo;</span>
                                    </p>
                                </blockquote>
                            </div>

                            <div className="swiper-slide">
                                <blockquote className="bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="ProtozoaHost"
                                            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div className="text-sm">
                                            <p className="font-medium">Anand Shah</p>
                                            <p className="mt-1">Founder</p>
                                        </div>
                                    </div>

                                    <p className="relative mt-4 text-gray-500">
                                        <span className="text-xl">&ldquo;</span>
                                        Protozoahost, a prominent web hosting company in Nepal, recently discovered Evakon Tech, a remarkable software company. We were thoroughly impressed by their offerings! Evakon Tech provided us with a wealth of talented professionals.
                                        <span className="text-xl">&rdquo;</span>
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="swiper-pagination relative bottom-0 mt-12"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
