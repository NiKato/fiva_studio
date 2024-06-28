// src/pages/short-form.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"

const Podcasts = () => {
  return (
    <PageTemplate
      title="Podcasts"
      subtitle="Transform your podcast into a professionally produced audio or video experience with our expert podcast editing services"
      podcastUrl="https://www.youtube.com/watch?v=KAyDcaRFU4Y&ab_channel=RelaxingRainSounds"
      isPodcast
      content={
        <>
          <Text as="p" fontSize="lg">
            Are you tired of sifting through hours of raw audio or video, trying
            to make sense of it all? Look no further! Our team of skilled
            podcast editors is here to help you transform your content into a
            polished, engaging, and professional-grade production. With our
            podcast editing services, you can rest assured that your show will
            sound and look its absolute best.
          </Text>
        </>
      }
    />
  )
}

export default Podcasts

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Podcasts"
      description="Transform your podcast into a professionally produced audio or video experience with our expert podcast editing services. Get high-quality editing, mixing, and mastering to elevate your podcast's sound and visuals. Trust our experienced editors to bring your vision to life"
    />
  )
}
