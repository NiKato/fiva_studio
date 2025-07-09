import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import VideoPlayer from "../Video"
import "swiper/css"
import "swiper/css/navigation"
import "./styles.css"
import { Box, Button, Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const videoUrls = [
  "https://fivastudio.b-cdn.net/1.%20Badem%20Media%20reel%20no3.mp4",
  "https://fivastudio.b-cdn.net/2.%20Lambo%20calculator.mp4",
  "https://fivastudio.b-cdn.net/Descript%20Video.mp4",
  "https://fivastudio.b-cdn.net/1.%20Badem%20Media%20reel%20no3.mp4",
  "https://fivastudio.b-cdn.net/2.%20Lambo%20calculator.mp4",
  "https://fivastudio.b-cdn.net/Descript%20Video.mp4",
]

const Carousel = () => {
  const { t } = useTranslation()

  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  )

  const handlePlay = (index: number) => {
    setCurrentVideoIndex(index)
  }

  const handleStop = () => {
    setCurrentVideoIndex(null)
  }

  return (
    <Box display="flex" flexFlow="column">
      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          className="mySwiper"
          breakpoints={{
            375: {
              slidesPerView: 1.7,
              centeredSlides: true,
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
              spaceBetween: 10,
            },
            1920: {
              slidesPerView: 5.1,
              spaceBetween: 0,
            },
          }}
        >
          {videoUrls.map((videoUrl, index) => (
            <SwiperSlide key={`video-${index}`}>
              <VideoPlayer
                src={videoUrl}
                onPlay={() => handlePlay(index)}
                stopPlaying={handleStop}
                isPlaying={currentVideoIndex === index}
                isCarousel={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-prev">&#8592;</button>
        <button className="custom-next">&#8594;</button>
      </div>
      <Button
        as={Link}
        href="/short-form"
        width="240px"
        variant="ghost"
        bg="#3377FF"
        _hover={{ bg: " #000" }}
        color="#fff"
        mx="auto"
        mt={16}
      >
        {t("shortForm.btn")}
      </Button>
    </Box>
  )
}

export default Carousel
