import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const Collaboration = () => {
    return (
        <section className="container-width py-32 text-center">
            <div className="w-[90%] md:w-3/4 lg:w-3/5 m-auto">
                {/* <p className="text-4xl sm:text-6xl font-extrabold"></p> */}
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Our Notable Partners
                </h2>
                <p className="mt-9 text-slate-600">
                    We drive digital transformation for visionary companies and clients, propelling businesses to new
                    heights. Experience our innovative solutions, where expertise meets elegance on the path to success.
                </p>
            </div>

            <div className="w-full md:w-4/5 lg:w-[40%] m-auto mt-16 company-logo-crousel">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={4}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 320px
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="w-44 h-32  rounded-sm">
                            <img
                                src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_1.png"
                                alt="Company Name"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-44 h-32  rounded-sm">
                            <img
                                src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_2.png"
                                alt="Company Name"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-44 h-32  rounded-sm">
                            <img
                                src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_3.png"
                                alt="Company Name"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-44 h-32  rounded-sm">
                            <img
                                src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_4.png"
                                alt="Company Name"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Collaboration;
