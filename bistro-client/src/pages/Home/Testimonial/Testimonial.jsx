import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./testimonial.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Testimonial = () => {
  const [reviwes, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/reviews")
      .then((data) => setReviews(data.data));
  }, []);

  return (
    <div>
      <div>
        <SectionTitle
          heading={"---What Our Clients Say---"}
          subHeading={"TESTIMONIALS"}
        />
        <div>
          <div className="w-9/12 mx-auto pb-11">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {reviwes.map((review) => (
                <SwiperSlide
                  key={review._id}
                  className="flex flex-col px-12 font-inter gap-2"
                >
                  <h2 className="font-semibold text-xl text-[#CD9003] py-2">
                    {review.name}
                  </h2>
                  <p className="text-base text-[#444444]">{review.details}</p>
                  <Rating style={{ maxWidth: 180 }} value={review.rating} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
