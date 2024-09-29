// src/pages/educational-videos.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const ContentForChildren = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("contentFC.title")}
      subtitle={t("contentFC.subtitle")}
      videoSources={["https://fivastudio.b-cdn.net/Baby%20video.mp4"]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("contentFC.text")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("contentFC.text2")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("contentFC.text3")}
          </Text>
          <Text
            fontWeight={700}
            textDecoration={"underline"}
            as="p"
            fontSize="lg"
          >
            {t("contentFC.text4")}
          </Text>
          <Text
            fontWeight={700}
            textDecoration={"underline"}
            as="p"
            fontSize="lg"
          >
            {t("contentFC.text5")}
          </Text>
          <Text
            fontWeight={700}
            textDecoration={"underline"}
            as="p"
            fontSize="lg"
          >
            {t("contentFC.text6")}
          </Text>
          <Text
            fontWeight={700}
            textDecoration={"underline"}
            as="p"
            fontSize="lg"
          >
            {t("contentFC.text7")}
          </Text>

          <Text as="p" fontSize="lg">
            {t("contentFC.text8")}
          </Text>
        </>
      }
    />
  )
}

export default ContentForChildren

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Content for children"
      description="Transform your educational content with our expert video editing services. Our team of skilled editors will enhance your videos with engaging visuals, sound design, and storytelling techniques to captivate your audience."
    />
  )
}
