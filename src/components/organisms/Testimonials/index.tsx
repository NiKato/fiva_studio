import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@chakra-ui/react";
import { testimonials } from "../../../constants/testimonialsData";
import { Testimonial } from "./Testimonials";

const Testimonials = () => {
  return (
    <Container maxW={{ base: "100%", md: "100%" }} my={20}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
