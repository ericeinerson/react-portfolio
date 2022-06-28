import React from 'react'
import "./testimonials.css"
import Avatar1 from "../../Assets/avatar1.webp"
import Avatar2 from "../../Assets/avatar2.webp"
import Avatar3 from "../../Assets/avatar3.webp"
import Avatar4 from "../../Assets/avatar4.webp"

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar1,
    name: "Babux Namshir",
    review: "Eric is one of the most valuable people I have ever met. Both smart and professional during project meetings. Experienced, deadline-oriented, and intelligent person. Highly recommended"
  },
  // {
  //   avatar: Avatar2,
  //   name: "Name 2",
  //   review: "Great!"
  // },
  // {
  //   avatar: Avatar3,
  //   name: "Name 3",
  //   review: "Fantastic!"
  // },
  // {
  //   avatar: Avatar4,
  //   name: "Name 4",
  //   review: "Cool!"
  // }
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                  <h5>{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials