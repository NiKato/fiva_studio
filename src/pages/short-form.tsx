// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text, SimpleGrid, Box } from "@chakra-ui/react"
import VideoPlayer from "../components/Video"
import Carousel from "../components/Carousel"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const ShortForm = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("shortForm.title")}
      subtitle={t("shortForm.subtitle")}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("shortForm.text")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("shortForm.text2")}
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
      // carousel={<Carousel />}
    />
  )
}

export default ShortForm

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Short Form"
      description="Transform your short-form content with our expert video editing services. From social media clips to YouTube videos, we'll elevate your brand's visual storytelling and engagement with our fast-paced, high-quality edits."
    />
  )
}
