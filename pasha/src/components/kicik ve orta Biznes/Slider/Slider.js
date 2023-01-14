import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.css'
import { Pagination, Navigation } from "swiper";
import s1 from './Images/swp1.JPG'
import s2 from './Images/swp2.JPG'
import s3 from './Images/swp3.JPG'
import s4 from './Images/swp4.JPG'
import {motion} from 'framer-motion'

const Slider = () => {
  return (
    <>
      <motion.div
         initial={{y:100,opacity:0}}
         animate={{y:0,opacity:1}}
         transition={{
          type:"spring",
          bounce:0,
          duration:1.5
         }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={s1} alt="" /> </SwiperSlide>
          <SwiperSlide><img src={s2} alt="" /> </SwiperSlide>
          <SwiperSlide><img src={s3} alt="" /> </SwiperSlide>
          <SwiperSlide><img src={s4} alt="" /> </SwiperSlide>
        </Swiper>
      </motion.div>
    </>
  )
}

export default Slider