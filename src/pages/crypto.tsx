import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Crypto = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("crypto.title")}
      subtitle={t("crypto.subtitle")}
      podcastUrl="https://www.youtube.com/watch?v=ou0GpiTqVG8"
      isPodcast
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("crypto.text")}
          </Text>
        </>
      }
    />
  )
}

export default Crypto

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Crypto - Finance"
      description="rofessional video editing for finance and crypto topics, focused on clarity, precision, and engagement."
    />
  )
}
