// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Heading, Image, Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import ecologyImg from "../images/ecology.webp"

const Ecology = () => {
  return (
    <PageTemplate
      title="Ecology Videos"
      subtitle="Transform your podcast into a professionally produced audio or video experience with our expert podcast editing services"
      content={
        <>
          <Heading as="h2">
            Raise Awareness for Environmental Issues with Compelling Video
            Content
          </Heading>
          <Text as="p" fontSize="lg">
            At FIVA Studio, we believe that visual storytelling has the power to
            inspire change and drive meaningful action. That's why we offer
            specialized video editing services tailored to the ecological
            community. Our team of experienced editors and producers are
            dedicated to creating high-quality, eco-friendly videos that raise
            awareness about environmental issues and promote sustainable living.
          </Text>
          <Text as="p" fontSize="lg">
            Wildlife conservation documentaries Environmental advocacy campaigns
            Educational videos for eco-awareness Corporate sustainability
            reports Nature-inspired short films
          </Text>
          <Text as="p" fontSize="lg">
            Our eco-friendly approach to video production ensures that every
            project is designed to minimize its carbon footprint while
            maximizing its impact.
          </Text>
          <Text as="p" fontSize="lg">
            From script to screen, we'll work closely with you to craft a
            narrative that inspires audiences to take action and make a
            difference.
          </Text>
          <Text as="p" fontSize="lg">
            Ready to bring your ecological message to life? Contact us today to
            discuss your project and learn more about our eco-friendly video
            editing services.
          </Text>
          <Image src={ecologyImg} w="600px" h="400px" objectFit="contain" />
        </>
      }
    />
  )
}

export default Ecology

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Ecology Niche Video Editing Services | Raise Awareness for Environmental Issues"
      description="Transform your ecological message into a compelling visual story with our expert video editing services. Our team created engaging, eco-friendly videos that inspire action and promote environmental awareness."
    />
  )
}
