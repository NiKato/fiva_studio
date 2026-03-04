// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Drone = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("drone.title")}
      subtitle={t("drone.subtitle")}
      isPodcast
      podcastUrl="https://www.youtube.com/watch?v=ba4o2ady1qs"
      ytUrl="https://www.youtube.com/watch?v=rWo0362myzQ"
      yt2Url="https://www.youtube.com/watch?v=zhDhUwfls6I"
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("drone.text")}
          </Text>
        </>
      }
    />
  )
}

export default Drone

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Drone services"
      description="High-quality drone filming and photography services"
    />
  )
}
