import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import carouselData from "../../data/carousel.json"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./index.css";


function Carousel() {
    return (
        <Swiper modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper">
            { carouselData.map((slide) => (
                <SwiperSlide key={slide.img} className="slide">
                    <img 
                        src={`/${slide.img}`}  
                        loading="lazy"
                        alt={slide.alt}
                    />
                    <h3 className="banner-text" dangerouslySetInnerHTML={{__html: slide.text}} />
                </SwiperSlide>
            ))
            }
      </Swiper>
    );
}

export default Carousel;