import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "./Sectionone.scoped.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function SectionOne() {
  return (
    <>
    <Swiper  style={{height:"100vh"}}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"

      >
        <SwiperSlide className='SwiperSlide'>
            <div className="swpieOne ">
                <div className="container-lg">
                    <div className="row justify-content-start align-items-center ">
                        <div className="col-lg-6">
                            <div className="textOne">
                                <p>Welcome To Bruin Cafe</p>
                                <h1>Enjoy Your Morning Coffee Shot</h1>
                                <p className='p-bottpm'>
                                Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.
                                </p>
                            </div>
                            <div className="buttons mt-5">
                    <button>BOOK A TABLE</button>
                    <button>VISIT OUR SHOP</button>
                </div>
                        </div>
                    </div>
                </div>
               

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swipeTwo2 ">
            <div className="container-lg">
                    <div className="row justify-content-start align-items-center ">
                        <div className="col-lg-6">
                            <div className="textOne">
                                <p>Welcome To Bruin Cafe</p>
                                <h1>Enjoy Your Morning Coffee Shot</h1>
                                <p className='p-bottpm'>
                                Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.
                                </p>
                            </div>
                            <div className="buttons mt-5">
                    <button>BOOK A TABLE</button>
                    <button>VISIT OUR SHOP</button>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
