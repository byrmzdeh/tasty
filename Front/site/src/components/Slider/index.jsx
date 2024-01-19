import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss'


const SliderSlick = () => {
  return (
    <div className='slider'>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg" alt="" />
        <div className="text">
            <p>Book a table for yourself at <br /> a time convenient for you</p>
            <button>Book a table</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="	https://preview.colorlib.com/theme/tasty/images/bg_2.jpg" alt="" />
        <div className="text">
        <p>Tasty & Delicious Food</p>
            <button>Book a table</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="	https://preview.colorlib.com/theme/tasty/images/bg_3.jpg" alt="" />
        <div className="text">
            <p>Book a table for yourself at <br /> a time convenient for you</p>
            <button>Book a table</button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default SliderSlick