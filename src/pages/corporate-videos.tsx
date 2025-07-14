// src/pages/educational-videos.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Corporate = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("corporate.title")}
      subtitle={t("corporate.subtitle")}
      videoSources={[
        "https://fivastudio.b-cdn.net/Fiva%20Studio%20Corporate%20Video.mp4",
        "https://fivastudio.b-cdn.net/Construction%20_%20Scaffolding%20video%20standard%20form.mp4",
        "https://fivastudio.b-cdn.net/Color%20Grading%20Preview.mp4",
        "https://fivastudio.b-cdn.net/Gym%20Hype%20H.mp4",
        "https://fivastudio.b-cdn.net/Brennan%20Moore%20VBC%20Horizontal%20Final.mp4",
      ]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("corporate.text")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("corporate.text2")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("corporate.text3")}
          </Text>
        </>
      }
    />
  )
}

export default Corporate

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Corporate Videos"
      description="Transform your educational content with our expert video editing services. Our team of skilled editors will enhance your videos with engaging visuals, sound design, and storytelling techniques to captivate your audience."
    />
  )
}
