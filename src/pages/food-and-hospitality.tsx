// src/pages/educational-videos.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Heading, Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const FoodHospitality = () => {
  const { t } = useTranslation()

  return (
    <PageTemplate
      title={t("food.title")}
      subtitle={t("food.subtitle")}
      videoSources={[
        "https://fivastudio.b-cdn.net/hotel-pool-bar.mp4",
      ]}
      content={
        <>
         <Heading as="h2">{t("food.heading")}</Heading>
          <Text id="text" as="p" fontSize="lg">
          {t("food.text")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("food.text2")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("food.text3")}
          </Text>
        </>
      }
    />
  )
}

export default FoodHospitality

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Food and Hospitality Videos"
      description="Transform your educational content with our expert video editing services. Our team of skilled editors will enhance your videos with engaging visuals, sound design, and storytelling techniques to captivate your audience."
    />
  )
}
