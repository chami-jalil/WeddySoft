"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Shape from "@/public/images/shape/brand-shape.png";
import One from "@/public/images/brand/website.png";
import Two from "@/public/images/brand/android.png";

const Brand = () => {
  return (
    <div className="brand-area">
      <div className="container">
        <div className="brand__wrp">
          <div className="brand__shape">
            <Image src={Shape} alt="" />
          </div>
          <div className="swiper brand__slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              speed={300}
              loop={true}
              roundLengths={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 2,
                },
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={One} alt="Website" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Two} alt="Android" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={One} alt="Website" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Two} alt="Android" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
