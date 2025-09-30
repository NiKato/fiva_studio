import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"
import LocalizedLink from "../components/LocalizedLink"

const Wedding = () => {
  const { t } = useTranslation()

  return (
    <PageTemplate
      title={t("wedding.title")}
      subtitle={t("wedding.subtitle")}
      isRealEstate
      videoSources={[
        "https://fivastudio.b-cdn.net/Wedding%20Film.mp4",
        "https://fivastudio.b-cdn.net/wedding-video.mp4",
      ]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("wedding.text")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("wedding.text2")}
          </Text>
          <Text id="text" as="p" fontSize="lg">
            {t("wedding.text3")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("wedding.text4")}
          </Text>
          <Text id="text" as="p" fontSize="lg">
            {t("wedding.text5")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("wedding.text6")}
          </Text>
          <Text as="p" color="#3377FF" textDecor="underline" fontSize="lg">
            <LocalizedLink to="contact-us">{t("wedding.text7")}</LocalizedLink>
          </Text>
        </>
      }
    />
  )
}

export default Wedding

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Wedding Videos"
      description="Capture the magic of your special day with Fiva Studio's expert wedding video services. Our talented team specializes in creating stunning, cinematic wedding videos that tell your unique love story."
    />
  )
}
