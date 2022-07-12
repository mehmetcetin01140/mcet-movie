import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import 'swiper/css/bundle';

// import required modules
import { Pagination } from "swiper";
import Link from "next/link";

export default function RecommendationSlider({recommendation,path}) {

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
            filterNullPosters?.map((recom,index)=>(
              <>
              <SwiperSlide key={index} >
                <Link href={`${path}${recom.id}`}>
                   {
                     
                     <img src={`https://image.tmdb.org/t/p/original/${recom.poster_path}`} className="sliderImage"/>
                     
                    }
                    </Link>
                </SwiperSlide>
                </>
            ))
        }
       
      </Swiper>
    </>
  );
}
