import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { AspectRatio, Box, Image } from "@chakra-ui/react"
import slider1 from "../../images/reel.jpeg"
import slider2 from "../../images/reel2.jpeg"
import slider3 from "../../images/hero-img.jpeg"
import slider4 from "../../images/reel4.jpeg"
import slider5 from "../../images/reel.jpeg"
import slider6 from "../../images/reel2.jpeg"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/zoom"
import "./styles.css"

export default function Carousel() {
  const slideImages = [slider1, slider2, slider3, slider4, slider5, slider6]

  return (
    <>
      <Box>
        <Box py={10} w="100%" h="100%" pos="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            pagination={false}
            className="mySwiper"
            style={{ height: "446px" }}
            initialSlide={2}
            breakpoints={{
              375: {
                slidesPerView: 1.2, 
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 4.2,
                spaceBetween: 40,
              },
              1920: {
                slidesPerView: 4.2,
                spaceBetween: 0,
              },
            }}
          >
            {slideImages.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image src={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  )
}
