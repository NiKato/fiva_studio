import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoPlayer from '../Video';
import "swiper/css"
import "swiper/css/pagination"
import "./styles.css"

const videoUrls = [
  "https://fivastudio.b-cdn.net/Iman-Gadzhi-Short.mp4",
  "https://fivastudio.b-cdn.net/james-1.mp4",
  "https://fivastudio.b-cdn.net/james-3.mp4",
  "https://fivastudio.b-cdn.net/instagram-vertical.mp4",
  "https://fivastudio.b-cdn.net/1.%20Badem%20Media%20reel%20no3.mp4",
  "https://fivastudio.b-cdn.net/2.%20Lambo%20calculator.mp4",
  "https://fivastudio.b-cdn.net/Descript%20Video.mp4",
]

const Carousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const handlePlay = (index: any) => {
    setCurrentVideoIndex(index);
  };

  const handleStop = () => {
    setCurrentVideoIndex(null);
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={false}
      className="mySwiper"
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
            isPlaying={currentVideoIndex === index}
            stopPlaying={handleStop}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
