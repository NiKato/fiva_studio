import React, { useRef, useState } from "react"
import ReactPlayer from "react-player"
import { PageHero } from "../PageHero"
import Layout from "../Layout"
import { VStack, Heading, Container, Box, Stack } from "@chakra-ui/react"
import { MdOutlinePlayCircle } from "react-icons/md"
import styled from "styled-components"
import Cta from "../Cta"

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

interface PageTemplateProps {
  title: string
  subtitle: string
  content: React.ReactNode
  videoSources?: string[]
  podcastUrl?: string
  carousel?: React.ReactNode
  isPodcast?: boolean
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  content,
  videoSources = [],
  podcastUrl,
  carousel,
  isPodcast = false,
}) => {
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    new Array(videoSources.length).fill(false)
  )

  const handleVideoClick = (index: number) => {
    const updatedIsPlaying = [...isPlaying]
    if (isPlaying[index]) {
      videoRefs.current[index].pause()
    } else {
      videoRefs.current[index].play()
    }
    updatedIsPlaying[index] = !isPlaying[index]
    setIsPlaying(updatedIsPlaying)

    // Pause other videos
    updatedIsPlaying.forEach((playing, i) => {
      if (i !== index && playing) {
        videoRefs.current[i].pause()
        updatedIsPlaying[i] = false
      }
    })
    setIsPlaying(updatedIsPlaying)
  }

  return (
    <Layout>
      <PageHero title={title} subtitle={subtitle} />
      <Container
        maxW="container.xl"
        p={{ base: "4", md: "12" }}
        mb={{ base: 10, md: 0 }}
      >
        <VStack py="40px" spacing={10} alignItems="center" textAlign="center">
          {content}
          <Stack flexFlow={{ base: "column", md: "row" }} gap={5}>
            {videoSources.map((videoSrc, index) => (
              <Box
                key={index}
                w={{ base: "auto", md: "auto" }}
                maxW="600px"
                mx={{ base: 8, md: "auto" }}
                boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)"
              >
                <VideoWrapper onClick={() => handleVideoClick(index)}>
                  <Video
                  // @ts-ignore
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={videoSrc}
                    autoPlay 
                    muted
                    playsInline
                  />
                  {/* @ts-ignore */}
                  <PlayButton isPlaying={isPlaying[index]}>
                    <PlayIcon />
                  </PlayButton>
                </VideoWrapper>
              </Box>
            ))}
            {isPodcast && podcastUrl && (
              <Box
                w={{ base: "auto", md: "600px" }}
                maxW="600px"
                mx={{ base: 8, md: "auto" }}
                boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)"
                h="400px"
              >
                <ReactPlayer
                  url={podcastUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              </Box>
            )}
          </Stack>
        </VStack>
      </Container>
      {carousel}
      <Container
        maxW="container.xl"
        p={{ base: "4", md: "12" }}
        mb={{ base: 10, md: 0 }}
      >
        <VStack py="40px" spacing={10} alignItems="center" textAlign="center">
          <Heading as="h2">What is the process?</Heading>
          <Cta />
        </VStack>
      </Container>
    </Layout>
  )
}

export default PageTemplate
