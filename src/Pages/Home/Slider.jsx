// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="hero bg-california-700 text-white min-h-screen">
          <div className="hero-content text-white text-center">
            <div className="max-w-full px-10 lg:max-w-3xl">
              <h1 className="text-2xl md:text-5xl font-bold">
                Welcome to Your Personalized Product Guide
              </h1>
              <p className="py-6">
                Discover the ultimate platform for tailored product
                recommendations! Whether you're seeking alternatives or sharing
                your expertise, our community-driven system is here to simplify
                your decisions. Explore, inquire, and recommend with ease.
              </p>
              <Link
                className="btn bg-california-500 hover:bg-california-800 text-white border-none "
                to="/queries"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero bg-california-700 min-h-screen">
          <div className="hero-content text-white text-center">
            <div className="max-w-full px-10 lg:max-w-3xl">
              <h2 className="text-2xl md:text-5xl font-bold">
                Engage with a Vibrant Community
              </h2>
              <p className="py-6">
                Got questions about a product? Post your queries, browse others'
                insights, and uncover detailed recommendations from a supportive
                network. Collaborate and exchange knowledge effortlessly.
              </p>
              <Link
                className="btn bg-california-500 hover:bg-california-800 text-white border-none "
                to="/queries"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero bg-california-700  min-h-screen">
          <div className="w-full hero-content text-white text-center">
            <div className="max-w-full px-10 lg:max-w-3xl">
              <h2 className="text-2xl md:text-5xl font-bold">
                Share and Refine Recommendations
              </h2>
              <p className="py-6">
                Empower others with your expertise! Add, edit, or delete
                recommendations and comments to keep the platform dynamic and
                valuable for all users. Your voice makes a difference.
              </p>
              <Link
                className="btn bg-california-500 hover:bg-california-800 text-white border-none "
                to="/queries"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
