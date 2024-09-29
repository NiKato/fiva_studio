// src/pages/meme.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Meme = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate
      title={t("memeVideos.title")}
      subtitle={t("memeVideos.subtitle")}
      videoSources={[
        "https://fivastudio.b-cdn.net/meme1.mp4",
        "https://fivastudio.b-cdn.net/meme2.mp4",
        "https://fivastudio.b-cdn.net/meme3.mp4",
      ]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("memeVideos.text")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("memeVideos.text2")}
          </Text>

          <Text id="text" as="p" fontSize="lg">
          {t("memeVideos.text3")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("memeVideos.text4")}
          </Text>

          <Text id="text" as="p" fontSize="lg">
          {t("memeVideos.text5")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("memeVideos.text6")}
          </Text>

          <Text as="p" fontSize="lg">
          {t("memeVideos.text7")}
          </Text>

          <Text id="text" as="p" fontSize="lg">
          {t("memeVideos.text8")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("memeVideos.text9")}
          </Text>
        </>
      }
    />
  )
}

export default Meme

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Meme videos"
      description="Transform your brand with stunning 2D animation videos! Our expert team provides high-quality video editing services for content creators, crafting engaging stories and captivating visuals that drive audience engagement and brand awareness."
    />
  )
}
