// src/pages/meme.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"

const Meme = () => {
  return (
    <PageTemplate
      title="Meme Videos"
      subtitle="Boost your engagement on Social Media with memes, our editors will craft memes for your social media."
      videoSrc="https://fivastudio.b-cdn.net/2D%20animation.mp4"
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            Meme content, for business? Let’s be honest, barely anyone bothers
            to engage with generative and business themed posts on social media
            today! People are not on the internet to watch ads, aren’t they?
            That is why meme content for business Instagram, Tiktok, Facebook or
            Yotube is a rising trend.
          </Text>
          <Text as="p" fontSize="lg">
            Businesses get more organic engagement, reach and leads when they
            successfully play their meme cards as a part of their online
            communication strategy.
          </Text>

          <Text id="text" as="p" fontSize="lg">
            Now what is the trick? Not just anyone can go and create good memes
            especially for a business profile without coming of as ‘cringe’,
            ‘sus’, ‘big L’. Many small and large business try this and yet they
            fail and hurt their brand. For this you need someone with meme
            mindset and loads of experience in the field so that these simpler
            yet very effective meme videos are done right.
          </Text>
          <Text as="p" fontSize="lg">
            Meme videos are bold and great way to build your brand image online,
            correspond to both older and especially upcoming generations.
          </Text>

          <Text id="text" as="p" fontSize="lg">
            This is a rising trend and you should catch the train before it goes
            mainstream.
          </Text>
          <Text as="p" fontSize="lg">
            For long time we have dwelled amongst the dark threads on the
            internet and we have accumulated great knowledge through memes and
            about memes, regardless of the type of meme and niche, we speak the
            language! We create reels, tiktoks, yt shorts memes for social media
            as well as 2D animated meme videos to present your story, scenario
            for Youtube channel, or even a TV show.
          </Text>

          <Text as="p" fontSize="lg">
            We understand the audience for each meme and your vision in the
            project.
          </Text>

          <Text id="text" as="p" fontSize="lg">
            Reach out to us now so that we can discuss your project, free of
            charge!
          </Text>
          <Text as="p" fontSize="lg">
            Please see some of our references:
          </Text>
        </>
      }
    />
  )
}

export default Meme

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Meme videos"
      description="Transform your brand with stunning 2D animation videos! Our expert team provides high-quality video editing services for content creators, crafting engaging stories and captivating visuals that drive audience engagement and brand awareness."
    />
  )
}
