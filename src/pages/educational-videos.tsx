// src/pages/educational-videos.tsx
import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import { Text } from "@chakra-ui/react";

const EducationalVideos = () => {
  return (
    <PageTemplate
      title="Educational Videos"
      subtitle="You need a video editor for your educational niche video content like courses, YouTube channel, or Instagram, Facebook, and TikTok? Our video editors are here to bring your vision to life and give your video the desired effect!"
      videoSrc="https://fivastudio.b-cdn.net/online-german-language-lessons.mp4"
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

export default EducationalVideos;
