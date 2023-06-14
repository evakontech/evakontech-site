// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

export const Carousel = () => {
    return (
        <>

            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"

                breakpoints={{
                    // when window width is >= 320px
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                   
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            >
                <SwiperSlide>

                    <div className="w-44 h-32 border rounded-sm">
                        <img src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_1.png" alt="Company Name" className=" w-full object-contain h-full" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-44 h-32 border rounded-sm">
                        <img src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_2.png" alt="Company Name" className=" w-full object-contain h-full" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-44 h-32 border rounded-sm">
                        <img src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_3.png" alt="Company Name" className=" w-full object-contain h-full" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-44 h-32 border rounded-sm">
                        <img src="https://theme-land.com/digimx/demo/assets/img/brand/brand_partner_4.png" alt="Company Name" className=" w-full object-contain h-full" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
