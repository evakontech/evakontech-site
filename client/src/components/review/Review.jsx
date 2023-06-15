import React, { useEffect } from 'react';
import Swiper from 'swiper';

const Review = () => {
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
        <div>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

            <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="swiper-container overflow-hidden">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <blockquote className="bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Dog"
                                            src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div className="text-sm">
                                            <p className="font-medium">Bark Dagleish</p>
                                            <p className="mt-1">Head of Barketing</p>
                                        </div>
                                    </div>

                                    <p className="relative mt-4 text-gray-500">
                                        <span className="text-xl">&ldquo;</span>

                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                        repellat, commodi in esse quisquam.

                                        <span className="text-xl">&rdquo;</span>
                                    </p>
                                </blockquote>
                            </div>

                            <div className="swiper-slide">
                                <blockquote className="bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Dog"
                                            src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div className="text-sm">
                                            <p className="font-medium">Bark Dagleish</p>
                                            <p className="mt-1">Head of Barketing</p>
                                        </div>
                                    </div>

                                    <p className="relative mt-4 text-gray-500">
                                        <span className="text-xl">&ldquo;</span>

                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                        repellat, commodi in esse quisquam.

                                        <span className="text-xl">&rdquo;</span>
                                    </p>
                                </blockquote>
                            </div>

                            <div className="swiper-slide">
                                <blockquote className="bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Dog"
                                            src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div className="text-sm">
                                            <p className="font-medium">Bark Dagleish</p>
                                            <p className="mt-1">Head of Barketing</p>
                                        </div>
                                    </div>

                                    <p className="relative mt-4 text-gray-500">
                                        <span className="text-xl">&ldquo;</span>

                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                        repellat, commodi in esse quisquam.

                                        <span className="text-xl">&rdquo;</span>
                                    </p>
                                </blockquote>
                            </div>

                            <div className="swiper-slide">
                                <blockquote className="bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Dog"
                                            src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div className="text-sm">
                                            <p className="font-medium">Bark Dagleish</p>
                                            <p className="mt-1">Head of Barketing</p>
                                        </div>
                                    </div>

                                    <p className="relative mt-4 text-gray-500">
                                        <span className="text-xl">&ldquo;</span>

                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                                        repellat, commodi in esse quisquam.

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

export default Review;
