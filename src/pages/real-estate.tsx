// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import Carousel from "../components/Carousel"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const RealEstate = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("estate.title")}
      subtitle={t("estate.subtitle")}
      isRealEstate
      realEstateUrl={"https://www.youtube.com/watch?v=M_F-Fk1g4LA"}
      videoSources={[
        "https://fivastudio.b-cdn.net/Ciao%20Andiamo%20Final%20(1).mp4",
        "https://fivastudio.b-cdn.net/Switzerland%20Villa%20Slideshow.mp4",
      ]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("estate.text")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("estate.text2")}
          </Text>
          {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing="40px" mx="auto">
            {videos.map((videoSrc, index) => (
              <Box key={index} w="400px" boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)">
                <VideoPlayer src={videoSrc} />
              </Box>
            ))}
          </SimpleGrid> */}
        </>
      }
    />
  )
}

export default RealEstate

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Real Estate"
      description="Transform your short-form content with our expert video editing services. From social media clips to YouTube videos, we'll elevate your brand's visual storytelling and engagement with our fast-paced, high-quality edits."
    />
  )
}
