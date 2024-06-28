import React, { useRef, useState } from "react"
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
  videoSrc?: any
  videoSrc2?: any
  carousel?: React.ReactNode
  isAnimation?: boolean
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  content,
  videoSrc,
  videoSrc2,
  carousel,
  isAnimation = false,
}) => {
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)

  const handleVideoClick1 = () => {
    if (isPlaying1) {
      // @ts-ignore
      videoRef1.current.pause()
    } else {
      // @ts-ignore
      videoRef1.current.play()
    }
    setIsPlaying1(!isPlaying1)
    if (isPlaying2) {
      // @ts-ignore
      videoRef2.current.pause()
      setIsPlaying2(false)
    }
  }

  const handleVideoClick2 = () => {
    if (isPlaying2) {
      // @ts-ignore
      videoRef2.current.pause()
    } else {
      // @ts-ignore
      videoRef2.current.play()
    }
    setIsPlaying2(!isPlaying2)
    if (isPlaying1) {
      // @ts-ignore
      videoRef1.current.pause()
      setIsPlaying1(false)
    }
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
          <Stack flexFlow={{ base: " column", md: "row" }} gap={5}>
            {videoSrc && (
              <Box
                w={{ base: "auto", md: "600px" }}
                maxW="600px"
                mx={{ base: 8, md: "auto" }}
                boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)"
              >
                <VideoWrapper onClick={handleVideoClick1}>
                  <Video ref={videoRef1} src={videoSrc} playsInline />
                  {/* @ts-ignore */}
                  <PlayButton isPlaying={isPlaying1}>
                    <PlayIcon />
                  </PlayButton>
                </VideoWrapper>
              </Box>
            )}
            {videoSrc2 && isAnimation && (
              <Box
                w={{ base: "auto", md: "600px" }}
                maxW="600px"
                mx={{ base: 8, md: "auto" }}
                boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)"
              >
                <VideoWrapper onClick={handleVideoClick2}>
                  <Video ref={videoRef2} src={videoSrc2} playsInline />
                  {/* @ts-ignore */}
                  <PlayButton isPlaying={isPlaying2}>
                    <PlayIcon />
                  </PlayButton>
                </VideoWrapper>
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
