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
  "https://fivastudio.b-cdn.net/1-Short%20Form%20Fixed%20Ooma.mp4",
  "https://fivastudio.b-cdn.net/2-Short%20Form%20Fixed%20Ooma.mp4",
  "https://fivastudio.b-cdn.net/6-Short%20Form.mp4",
  "https://fivastudio.b-cdn.net/Airbnb%20business%20in%202024.mp4",
  "https://fivastudio.b-cdn.net/Art%20Gallery%202.mp4",
  "https://fivastudio.b-cdn.net/Car%20accident%20compensation.mp4",
  "https://fivastudio.b-cdn.net/Coaching%20-%20business%20partner%2C%20from%20podcast.mp4",
  "https://fivastudio.b-cdn.net/Coaching%20-%20productivity.mp4",
  "https://fivastudio.b-cdn.net/Cocktail%20%20Barmen%20Restaurant%20Promo.mp4",
  "https://fivastudio.b-cdn.net/Dan%20Koe%20-%20vision%20for%20the%20future.mp4",
  "https://fivastudio.b-cdn.net/E-commerce%20-%20dropshiping%20soultions.mp4",
  "https://fivastudio.b-cdn.net/Educational%20-%20Online%20Language%20course.mp4",
  "https://fivastudio.b-cdn.net/Event%20Restaurant%20promo%20(1).mp4",
  "https://fivastudio.b-cdn.net/Event%20Restaurant%20promo%20(2).mp4",
  "https://fivastudio.b-cdn.net/Faith%2C%20Christanity%2C%20Orthodox%2C%20Magic.mp4",
  "https://fivastudio.b-cdn.net/Finance.mp4",
  "https://fivastudio.b-cdn.net/Honest%20Advice%20MTG%20V5.mp4",
  "https://fivastudio.b-cdn.net/HOTELS%20AND%20RESTAURANTS%20-%20Tisi%20SPAIN.mp4",
  "https://fivastudio.b-cdn.net/Hotels%20and%20Restaurants%20-%20TISI%20TEXAS.mp4",
  "https://fivastudio.b-cdn.net/Life%20Coaching%20-%20multi%20millionaire.mp4",
  "https://fivastudio.b-cdn.net/ml-video-export-2025-06-23T10-42-24.009Z.mp4",
  "https://fivastudio.b-cdn.net/Real%20Estate%20Promo%20Video%20Slideshow.mp4",
  "https://fivastudio.b-cdn.net/Reneissance%20Vertical%20Final.mp4",
  "https://fivastudio.b-cdn.net/test%20video%202.mp4",
  "https://fivastudio.b-cdn.net/test%20video%203.mp4",
  "https://fivastudio.b-cdn.net/tony%20film%20edit.mp4",
  "https://fivastudio.b-cdn.net/tony%20h.mp4",
  "https://fivastudio.b-cdn.net/Art%20Gallery%203.mp4",
  "https://fivastudio.b-cdn.net/Faith%2C%20Chistinaity%2C%20Orthodox.mp4",
  "https://fivastudio.b-cdn.net/Hotels%20and%20Restaurants%20-%20Resort.mp4",
  "https://fivastudio.b-cdn.net/Isetwald%20Vertical%20final%20final.mp4",
  "https://fivastudio.b-cdn.net/Personal%20Trainer.mp4",
  "https://fivastudio.b-cdn.net/Pizza%20Restaurant%20edit.mp4",
  "https://fivastudio.b-cdn.net/Real%20Estate%20Restasurant%20%20Sale.mp4",
]

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
            375: { slidesPerView: 1.7, centeredSlides: true, spaceBetween: 0 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1440: { slidesPerView: 4.2, spaceBetween: 10 },
            1920: { slidesPerView: 5.1, spaceBetween: 0 },
          }}
        >
          {displayUrls.map((videoUrl, index) => (
            <SwiperSlide key={`video-${index}`}>
              <VideoPlayer
                src={videoUrl}
                onPlay={() => handlePlay(index)}
                stopPlaying={handleStop}
                isPlaying={currentVideoIndex === index}
                isCarousel
              />
            </SwiperSlide>
          ))}
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
