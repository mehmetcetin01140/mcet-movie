import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import 'swiper/css/bundle';

// import required modules
import { Pagination } from "swiper";

export default function RecommendationSlider({recommendation}) {

        const filterNullPosters = recommendation.results?.filter(recom=>recom.poster_path !== null)
        console.log(filterNullPosters);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            filterNullPosters?.map(recom=>(

                <SwiperSlide>
                   {
              
                        <img src={`https://image.tmdb.org/t/p/original/${recom.poster_path}`} className="sliderImage"/>
                  
                   }
                </SwiperSlide>
            ))
        }
       
      </Swiper>
    </>
  );
}
