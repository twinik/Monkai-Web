import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// import required modules

import slider1 from "./../../../public/images/slider/slider_1.png";
import slider2 from "./../../../public/images/slider/slider_2.jpg";
import slider3 from "./../../../public/images/slider/slider_3.jpg";
import slider4 from "./../../../public/images/slider/slider_4.jpg";
import slider5 from "./../../../public/images/slider/slider_5.jpg";
import next from "./../../../public/images/next.png";
import back from "./../../../public/images/back.png";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Slider() {
  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <div id="mint" className="section rpg-buy wf-section">
      <div
        data-w-id="2fa2e20b-11a4-c766-9676-94d69bd7e2eb"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="container"
      ></div>
      <div className="container-2">
        <div>
          <div className="card-slider slick-initialized slick-slider">
            <Swiper
              navigation={{
                prevEl: ".slide-left",
                nextEl: ".slide-right",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {images.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="card-slider_item slick-slide slick-cloned">
                      <Image
                        src={item}
                        width={400}
                        height={400}
                        alt="slider image"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="card-slider_nav">
            <a
              id="card-slider_left"
              href="#"
              className="btn btn-primary card-slider_nav-btn slide-left w-inline-block"
            >
              <div className="card-slider_nav-icon w-embed">
                {/* 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 7.12 11.41"
                  fill="currentColor"
                >
                  <g>
                    <g>
                      <path d="M5.71,0,0,5.71l5.71,5.7L7.12,10,2.83,5.71l4.29-4.3Z"></path>
                    </g>
                  </g>
                </svg> */}
                <Image
                  src={back}
                  alt="next"
                  height={200}
                  width={200}
                  className="w-full"
                />
              </div>
            </a>
            <a
              id="card-slider_right"
              href="#"
              className="btn btn-primary card-slider_nav-btn slide-right w-inline-block"
            >
              <div className="card-slider_nav-icon w-embed">
                {/* 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 7.12 11.41"
                  fill="currentColor"
                >
                  <g>
                    <g>
                      <path d="M1.41,11.41l5.71-5.7L1.41,0,0,1.41l4.29,4.3L0,10Z"></path>
                    </g>
                  </g>
                </svg> */}
                <Image
                  src={next}
                  alt="next"
                  height={200}
                  width={200}
                  className="w-full"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
