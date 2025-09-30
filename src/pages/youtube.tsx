// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Youtube = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("youtube.title")}
      subtitle={t("youtube.subtitle")}
      podcastUrl="https://youtu.be/2q0qoGSWhgk?si=IUfGvr5X-h4pHtnt"
      isPodcast
      content={
        <>
          <Text as="p" fontSize="lg">
            {t("youtube.text")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("youtube.text2")}
          </Text>
        </>
      }
    />
  )
}

export default Youtube

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Youtube"
      description="Transform your content into a professionally produced audio or video experience with our expert video editing services. Get high-quality editing, mixing, and mastering to elevate your video sound and visuals. Trust our experienced editors to bring your vision to life"
    />
  )
}
