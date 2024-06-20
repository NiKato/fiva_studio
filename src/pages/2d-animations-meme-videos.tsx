// src/pages/meme.tsx
import React from "react"
import PageTemplate from "../components/templates/PageTemplate"
import { Text } from "@chakra-ui/react"

const Meme = () => {
  return (
    <PageTemplate
      title="2D Animation - Meme Videos"
      subtitle="With the power of 2D animation we create amazing solutions such as ads, 2D cartoons, titles etc."
      videoSrc="https://fivastudio.b-cdn.net/online-german-language-lessons.mp4"
      content={
        <>
          <Text id="text" as="p" fontSize="lg">
            We work with you closely so that we can come up with the best visual
            solution according to your vision. Upon reaching the desired
            aesthetics, visuals, sounds and melody - standard of your videos, we
            take on the projects and build your show, channel or internet
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
  )
}

export default Meme
