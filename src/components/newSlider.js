import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sliderStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const App = ({ slides }) => {
  const swiperRef = useRef(null);

  const handleSlideMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleSlideMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        counterSlide={true}
        centeredSlides={true}
        fadeEffect={true}
        // grabCursor={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((events) => (
          <SwiperSlide key={events.id}>
            <div
              className="justify-content-center text-center slider-item"
              onMouseEnter={handleSlideMouseEnter}
              onMouseLeave={handleSlideMouseLeave}
            >
              <div className="image-container">
                <img className="imgf" src={events.img} alt="" />
              </div>

              <div className="info-container">
                <div className="name">{events.name}</div>
                <div className="social-icons justify-content-center">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>

                <div className="uni">{events.uni}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default App;
