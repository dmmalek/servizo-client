import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://i.ibb.co/Q3L6nYzK/Banner-1.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://i.ibb.co/PsggjBFq/Banner-2.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://i.ibb.co/XG6mt6r/Banner-3.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] object-cover"
            src="https://i.ibb.co/k2My841c/Banner-4.jpg"
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
