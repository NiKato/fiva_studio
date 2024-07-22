// src/pages/educational-videos.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"

const Wedding = () => {
  return (
    <PageTemplate
      title="Wedding Videos"
      subtitle="You need a video editor for your educational niche video content like courses, YouTube channel, or Instagram, Facebook, and TikTok? Our video editors are here to bring your vision to life and give your video the desired effect!"
      videoSources={["https://fivastudio.b-cdn.net/wedding-video.mp4"]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            At Fiva Studio, we collaborate closely with you to create a wedding
            video that perfectly captures your vision. From the initial concept
            to the final edit, we focus on every detail—visuals, sound, and
            music—to ensure your special day is portrayed with elegance and
            emotion. Once we align on the desired look and feel, we meticulously
            craft a beautiful film that showcases your love story and memories.
          </Text>
          <Text as="p" fontSize="lg">
            For example, we recently worked with a couple who wanted a timeless
            video of their wedding day. They had specific ideas for how they
            wanted their ceremony and celebrations depicted. We took their
            detailed vision and enhanced it with our cinematic expertise,
            resulting in a stunning video that beautifully captured their unique
            love story.
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
