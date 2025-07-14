import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import { useTranslation } from "react-i18next"

const Film = () => {
  const { t } = useTranslation()
  return (
    <PageTemplate
      title={t("film.title")}
      subtitle={t("film.subtitle")}
      podcastUrl="https://www.youtube.com/watch?v=vJXejwviAVQ"
      videoSources={[
        "https://fivastudio.b-cdn.net/Documentary%20Style%20Edit.mp4",
        "https://fivastudio.b-cdn.net/Intro%20for%20WWII%20Documentary.mp4%20OVAJ%20DZ%CC%8CONI%2C%20Documentary%2C%20Film.mp4",
      ]}
      isPodcast
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            {t("film.text")}
          </Text>
        </>
      }
    />
  )
}

export default Film

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Film - Documentary Videos"
      description="Transform your educational content with our expert video editing services. Our team of skilled editors will enhance your videos with engaging visuals, sound design, and storytelling techniques to captivate your audience."
    />
  )
}
