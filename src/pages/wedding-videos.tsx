// src/pages/educational-videos.tsx
import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import { Text } from "@chakra-ui/react";
import { HeadProps } from "gatsby";
import { SEO } from "../components/Seo";

const Wedding = () => {
  return (
    <PageTemplate
      title="Wedding Videos"
      subtitle="You need a video editor for your educational niche video content like courses, YouTube channel, or Instagram, Facebook, and TikTok? Our video editors are here to bring your vision to life and give your video the desired effect!"
      videoSources={["https://fivastudio.b-cdn.net/online-german-language-lessons.mp4"]}
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            We work with you closely so that we can come up with the best visual
            solution according to your vision. Upon reaching the desired
            aesthetics, visuals, sounds, and melody - standard of your videos, we
            take on the projects and build your show, channel, or internet
            course.
          </Text>
          <Text as="p" fontSize="lg">
            Here is an example of a client that wanted to sell language course
            online, she was very specific about every detail in her video and we
            helped her bring her vision to life and improved on her original
            version:
          </Text>
        </>
      }
    />
  );
};

export default Wedding;

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Wedding Videos"
      description="Transform your educational content with our expert video editing services. Our team of skilled editors will enhance your videos with engaging visuals, sound design, and storytelling techniques to captivate your audience."
    />
  )
}