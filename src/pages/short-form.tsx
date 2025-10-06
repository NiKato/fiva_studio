import React, { useState } from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text, SimpleGrid, Box, Button } from "@chakra-ui/react"
import VideoPlayer from "../components/Video"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"
import videoUrls from "../data/videos.json"

const ShortForm = () => {
  const { t } = useTranslation()
  const [visibleCount, setVisibleCount] = useState(8) // 👈 početno 8 videa
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  )

  const handlePlay = (index: number) => setCurrentVideoIndex(index)
  const handleStop = () => setCurrentVideoIndex(null)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8) // 👈 učitava po 8 sledećih
  }

  const visibleVideos = videoUrls.slice(0, visibleCount)

  return (
    <PageTemplate
      title={t("shortForm.title")}
      subtitle={t("shortForm.subtitle")}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("shortForm.text")}
          </Text>
          <Text as="p" fontSize="lg" mb={10}>
            {t("shortForm.text2")}
          </Text>

          <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={6} mx="auto">
            {visibleVideos.map((videoSrc: string, index: number) => {
              const thumbnail = `/thumbnails/thumb-${index + 1}.jpg`
              return (
                <Box
                  key={index}
                  w="100%"
                  boxShadow="4px 4px 8px rgba(0, 0, 0, 0.3)"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <VideoPlayer
                    src={videoSrc}
                    poster={thumbnail}
                    onPlay={() => handlePlay(index)}
                    stopPlaying={handleStop}
                    isPlaying={currentVideoIndex === index}
                    isCarousel
                  />
                </Box>
              )
            })}
          </SimpleGrid>

          {visibleCount < videoUrls.length && (
            <Button
              onClick={handleLoadMore}
              mt={10}
              display="block"
              mx="auto"
              bg="#3377FF"
              color="#fff"
              _hover={{ bg: "#000" }}
            >
              {t("shortForm.loadMore") || "Load more videos"}
            </Button>
          )}
        </>
      }
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
