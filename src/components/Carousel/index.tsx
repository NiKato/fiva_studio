import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import VideoPlayer from "../Video"
import "swiper/css"
import "swiper/css/navigation"
import "./styles.css"
import { Box, Button, Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import videoUrls from "../../data/videos.json"

interface CarouselProps {
  limit?: number
  isShortForm?: boolean
}
const Carousel: React.FC<CarouselProps> = ({ limit, isShortForm }) => {
  const { t } = useTranslation()
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  )

  const handlePlay = (index: number) => setCurrentVideoIndex(index)
  const handleStop = () => setCurrentVideoIndex(null)

  const displayUrls = limit ? videoUrls.slice(0, limit) : videoUrls

  return (
    <Box display="flex" flexDirection="column">
      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          loop
          centeredSlides
          slidesPerView={1}
          spaceBetween={30}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 0 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1440: { slidesPerView: 4.2, spaceBetween: 10 },
            1920: { slidesPerView: 5.1, spaceBetween: 0 },
          }}
        >
          {displayUrls.map((videoUrl: string, index: number) => {
            const thumbnail = `/thumbnails/thumb-${index + 1}.jpg`
            return (
              <SwiperSlide key={`video-${index}`}>
                <VideoPlayer
                  src={videoUrl}
                  poster={thumbnail} // 👈 dodato
                  onPlay={() => handlePlay(index)}
                  stopPlaying={handleStop}
                  isPlaying={currentVideoIndex === index}
                  isCarousel
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <button className="custom-prev">←</button>
        <button className="custom-next">→</button>
      </div>
      {isShortForm ? (
        <Button
          width="240px"
          variant="ghost"
          bg="#3377FF"
          _hover={{ bg: "#000" }}
          color="#fff"
          mx="auto"
          mt={16}
        >
          {t("shortForm.btn2")}
        </Button>
      ) : (
        <Button
          as={Link}
          href="/short-form"
          width="240px"
          variant="ghost"
          bg="#3377FF"
          _hover={{ bg: "#000" }}
          color="#fff"
          mx="auto"
          mt={16}
        >
          {t("shortForm.btn")}
        </Button>
      )}
    </Box>
  )
}

export default Carousel
