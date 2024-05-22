import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./category.css";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="py-7 font-inter">
      <SectionTitle
        heading={"---From 11:00am to 10:00pm---"}
        subHeading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col">
          <img src={img1} alt="" />
          <h2 className="-mt-16 text-2xl text-white font-semibold py-3">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img2} alt="" />
          <h2 className="-mt-16 text-2xl text-white font-semibold py-3">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img3} alt="" />
          <h2 className="-mt-16 text-2xl text-white font-semibold py-3">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img4} alt="" />
          <h2 className="-mt-16 text-2xl text-white font-semibold py-3">
            Cake
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img5} alt="" />
          <h2 className="-mt-16 text-2xl text-white font-semibold py-3">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
