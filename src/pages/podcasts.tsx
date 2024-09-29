// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Podcasts = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("podcast.title")}
      subtitle={t("podcast.subtitle")}
      podcastUrl="https://www.youtube.com/watch?v=KAyDcaRFU4Y&ab_channel=RelaxingRainSounds"
      isPodcast
      content={
        <>
          <Text as="p" fontSize="lg">
            {t('podcast.text')}
          </Text>
        </>
      }
    />
  )
}

export default Podcasts

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Podcasts"
      description="Transform your podcast into a professionally produced audio or video experience with our expert podcast editing services. Get high-quality editing, mixing, and mastering to elevate your podcast's sound and visuals. Trust our experienced editors to bring your vision to life"
    />
  )
}
