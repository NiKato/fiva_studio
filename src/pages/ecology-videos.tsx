// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Heading, Image, Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import ecologyImg from "../images/ecology.webp"
import { useTranslation } from "react-i18next"

const Ecology = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("ecology.title")}
      subtitle={t("ecology.subtitle")}
      content={
        <>
          <Heading as="h2">{t("ecology.heading")}</Heading>
          <Text as="p" fontSize="lg">
            {t("ecology.text")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("ecology.text2")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("ecology.text3")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("ecology.text4")}
          </Text>
          <Image src={ecologyImg} w="600px" h="400px" objectFit="contain" />
        </>
      }
    />
  )
}

export default Ecology

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Ecology Niche Video Editing Services | Raise Awareness for Environmental Issues"
      description="Transform your ecological message into a compelling visual story with our expert video editing services. Our team created engaging, eco-friendly videos that inspire action and promote environmental awareness."
    />
  )
}
