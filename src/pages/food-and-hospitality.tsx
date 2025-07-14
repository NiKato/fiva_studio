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
        "https://fivastudio.b-cdn.net/Hotels%20Restaurant%20Cooking%20Show%20(3).mp4",
        "https://fivastudio.b-cdn.net/Tuna%20Salad%20Cooking%20Show%20_%20Food%20Niche.mp4%20Food%20restaurant%20hotels%20kartica.mp4",
        "https://fivastudio.b-cdn.net/%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%20%D0%A0%D0%B8%D0%BF%D0%B0%D1%99%D0%BA%D0%B0%20%D0%A1%D0%BF%D0%BE%D1%82%20%D0%9F%D0%A0%D0%95%D0%93%D0%9B%D0%95%D0%94.mp4",
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
