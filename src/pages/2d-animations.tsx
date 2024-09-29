// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Animations = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate
      title={t("animation.title")}
      subtitle={t("animation.subtitle")}
      videoSources={[
        "https://fivastudio.b-cdn.net/2D%20animation.mp4",
        "https://fivastudio.b-cdn.net/Baby%20video.mp4",
      ]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
          {t("animation.text")}
          </Text>
        </>
      }
    />
  )
}

export default Animations

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | 2D animation"
      description="Transform your brand with stunning 2D animation videos! Our expert team provides high-quality video editing services for content creators, crafting engaging stories and captivating visuals that drive audience engagement and brand awareness."
    />
  )
}
