import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { AspectRatio, Box, Image } from "@chakra-ui/react"
import slider1 from "../../images/reel.webp"
import slider2 from "../../images/reel2.webp"
import slider3 from "../../images/hero-img.webp"
import slider4 from "../../images/reel4.webp"
import slider5 from "../../images/reel.webp"
import slider6 from "../../images/reel2.webp"

import "swiper/css"
import "swiper/css/pagination"
import "./styles.css"

export default function Carousel({ bg }: any) {
  const slideImages = [slider1, slider2, slider3, slider4, slider5, slider6]
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Function to handle image load
  const handleImageLoad = () => {
    setImagesLoaded(true)
  }

  return (
    <>
      <Box bg={bg}>
        <Box py={10} w="100%" h="100%" pos="relative">
          {!imagesLoaded && (
            <div style={{ textAlign: "center", paddingTop: "50px" }}>
              Loading...
            </div>
          )}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            pagination={false}
            className="mySwiper"
            style={{ height: "446px", display: imagesLoaded ? "block" : "none" }}
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
                <Image src={slide} onLoad={handleImageLoad} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  )
}
