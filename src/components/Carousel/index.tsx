import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import VideoPlayer from "../Video"
import "swiper/css"
import "swiper/css/navigation"
import "./styles.css"
import { Box, Button, Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import defaultVideoUrls from "../../data/videos.json"

interface CarouselProps {
  limit?: number
  isShortForm?: boolean
  videos?: string[]
  thumbPrefix?: "en" | "sr"
  hideButton?: boolean
}

const Carousel: React.FC<CarouselProps> = ({
  limit,
  isShortForm,
  videos,
  thumbPrefix = "en",
  hideButton = false,
}) => {
  const { t } = useTranslation()
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  )

  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const handlePlay = (index: number) => setCurrentVideoIndex(index)
  const handleStop = () => setCurrentVideoIndex(null)

  const urls = videos || defaultVideoUrls
  const displayUrls = limit ? urls.slice(0, limit) : urls

  return (
    <Box display="flex" flexDirection="column">
      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          loop
          centeredSlides
          slidesPerView={1}
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
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
            const thumbnail = `/thumbnails/${thumbPrefix}-thumb-${index + 1}.webp`

            return (
              <SwiperSlide key={`${thumbPrefix}-video-${index}`}>
                <VideoPlayer
                  src={videoUrl}
                  poster={thumbnail}
                  onPlay={() => handlePlay(index)}
                  stopPlaying={handleStop}
                  isPlaying={currentVideoIndex === index}
                  isCarousel
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <button ref={prevRef} className="custom-prev">
          ←
        </button>
        <button ref={nextRef} className="custom-next">
          →
        </button>
      </div>

      {!hideButton && (
        isShortForm ? (
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
        )
      )}
    </Box>
  )
}

export default Carousel