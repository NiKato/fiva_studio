// src/pages/short-form.tsx
import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import { Text } from "@chakra-ui/react";
import { HeadProps } from "gatsby";
import { SEO } from "../components/Seo";

const Animations = () => {
  return (
    <PageTemplate
      title="2D animation"
      subtitle="You own a marketing agency, or you're SMM or a content creator that needs someone to process their content and deliver tailored videos for yourself or your clients?"
      videoSrc={"https://fivastudio.b-cdn.net/2D%20animation.mp4"}
      isAnimation
      videoSrc2={"https://fivastudio.b-cdn.net/Baby%20video.mp4"}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            We're here to process the footage or create video from scratch and
            deliver.
          </Text>
          <Text as="p" fontSize="lg">
            Transform your brand with stunning 2D animation videos! Our expert
            team provides high-quality video editing services for content
            creators, crafting engaging stories and captivating visuals that
            drive audience engagement and brand awareness.
          </Text>
        </>
      }
    />
  );
};

export default Animations;

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | 2D animation"
      description="Transform your brand with stunning 2D animation videos! Our expert team provides high-quality video editing services for content creators, crafting engaging stories and captivating visuals that drive audience engagement and brand awareness."
    />
  );
}
