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
                                src="data:image/png;base64,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"
                                alt="Company Name"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-44 h-32  rounded-sm">
                            <img
                                src="https://edigitalnepal.com/wms/files/ws-profile/1677734208604_ff899a7d-18b2-4baf-977b-5a76abb5fa64.jpg"
                                alt="Company Name"
                                className=" w-full object-contain h-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-44 h-32  rounded-sm">
                            <img
                                src="../assests/Protozoahostlogo1.png"
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
