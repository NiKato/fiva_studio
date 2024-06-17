import React, { useRef, useState } from "react"
import { PageHero } from "../components/PageHero"
import Layout from "../components/Layout"
import { VStack, Heading, Text, Container, Link, Box } from "@chakra-ui/react"
import { MdOutlinePlayCircle } from "react-icons/md"
import styled from "styled-components"
import Cta from "../components/Cta"

const VideoWrapper = ({ onClick, children }: any) => (
  <div onClick={onClick} style={{ position: "relative", cursor: "pointer" }}>
    {children}
  </div>
)

const Video = React.forwardRef(({ src, playsInline }: any, ref) => (
  <video
    // @ts-ignore
    ref={ref}
    src={src}
    playsInline
  />
))

const PlayButton = ({ isPlaying, children }: any) =>
  !isPlaying && (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {children}
    </div>
  )

const PlayIcon = styled(MdOutlinePlayCircle)`
  color: #fff; /* Set the color of the play icon */
  width: 100px;
  height: 100%;
`

const EducationalVideos = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoClick = () => {
    if (isPlaying) {
      // @ts-ignore
      videoRef.current.pause()
    } else {
      // @ts-ignore
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <Layout>
      <PageHero
        title="Educational Videos"
        subtitle="You need a video editor for your educational niche video content like corsues, youtube channel, or instagram, facebook and tiktok? Our video editors are here to bring your vision to life and give your video the desired effect!"
      />
      <Container
        maxW="container.xl"
        p={{ base: "4", md: "12" }}
        mb={{ base: 10, md: 0 }}
      >
        <VStack py="40px" spacing={10} alignItems="center" textAlign="center">
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
          <Box
            w={{ base: "auto", md: "600px" }}
            maxW="600px"
            mx={{ base: 8, md: "auto" }}
            boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)"
          >
            <VideoWrapper onClick={handleVideoClick}>
              <Video
                ref={videoRef}
                src="https://fivastudio.b-cdn.net/online-german-language-lessons.mp4"
                playsInline
              />
              {/* @ts-ignore */}
              <PlayButton isPlaying={isPlaying}>
                <PlayIcon />
              </PlayButton>
            </VideoWrapper>
          </Box>
          <Heading as="h2">What is the process?</Heading>
          <Cta />
        </VStack>
      </Container>
    </Layout>
  )
}

export default EducationalVideos
