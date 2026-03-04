import React, {
  useRef,
  useState,
  lazy,
  Suspense,
  useCallback,
  memo,
} from "react"
import { PageHero } from "../PageHero"
import Layout from "../Layout"
import { VStack, Container, Box, Stack, Flex } from "@chakra-ui/react"
import { MdOutlinePlayCircle } from "react-icons/md"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import ContactForm from "../ContactForm"

const ReactPlayer = lazy(() => import("react-player"))

const VideoWrapper = memo(({ onClick, children }: any) => (
  <div onClick={onClick} style={{ position: "relative", cursor: "pointer" }}>
    {children}
  </div>
))

const Video = React.forwardRef<HTMLVideoElement, any>(({ src }, ref) => (
  <video
    ref={ref}
    src={src}
    playsInline
    muted
    preload="metadata"
    crossOrigin="anonymous"
    style={{ width: "100%" }}
  />
))

const PlayButton = memo(({ isPlaying }: { isPlaying: boolean }) =>
  !isPlaying ? (
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
      <PlayIcon />
    </div>
  ) : null
)

const PlayIcon = styled(MdOutlinePlayCircle)`
  color: #fff;
  width: 100px;
`

interface PageTemplateProps {
  title: string
  subtitle: string
  content: React.ReactNode
  videoSources?: string[]
  ytUrl?: string
  yt2Url?: string
  podcastUrl?: string
  realEstateUrl?: string
  carousel?: React.ReactNode
  isPodcast?: boolean
  isRealEstate?: boolean
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  content,
  videoSources = [],
  ytUrl,
  yt2Url,
  podcastUrl,
  realEstateUrl,
  carousel,
  isPodcast = false,
  isRealEstate = false,
}) => {
  const { t } = useTranslation()

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    new Array(videoSources.length).fill(false)
  )

  const handleVideoClick = useCallback((index: number) => {
    setIsPlaying(prev => {
      const updated = prev.map((_, i) => (i === index ? !prev[index] : false))

      videoRefs.current.forEach((video, i) => {
        if (!video) return

        if (i === index) {
          prev[index] ? video.pause() : video.play()
        } else {
          video.pause()
        }
      })

      return updated
    })
  }, [])

  const podcastPlayers = [podcastUrl, ytUrl, yt2Url].filter(Boolean)

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

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={5}
            flexWrap="wrap"
            justify="center"
          >
            {videoSources.map((videoSrc, index) => (
              <Box
                key={index}
                w={{ base: "343px", md: "100%" }}
                maxW="600px"
                mx={{ base: 8, md: "auto" }}
                boxShadow="4px 4px 8px rgba(0,0,0,0.9)"
              >
                <VideoWrapper onClick={() => handleVideoClick(index)}>
                  <Video
                    ref={el => (videoRefs.current[index] = el)}
                    src={videoSrc}
                  />

                  <PlayButton isPlaying={isPlaying[index]} />
                </VideoWrapper>
              </Box>
            ))}

            {isPodcast &&
              podcastPlayers.map((url, i) => (
                <Box
                  key={i}
                  w={{ base: "auto", md: "600px" }}
                  maxW="600px"
                  mx={{ base: 8, md: "auto" }}
                  boxShadow="4px 4px 8px rgba(0,0,0,0.9)"
                  h="400px"
                >
                  <Suspense fallback={<div />}>
                    <ReactPlayer
                      url={url}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </Suspense>
                </Box>
              ))}

            {isRealEstate && realEstateUrl && (
              <Stack
                flexFlow={{ base: "column", md: "row" }}
                w={{ base: "auto", md: "1100px" }}
                maxW="1100px"
                mx={{ base: 8, md: "auto" }}
                boxShadow="4px 4px 8px rgba(0,0,0,0.9)"
                h="400px"
                gap={10}
                mb={{ base: 20, md: 0 }}
              >
                <Suspense fallback={<div />}>
                  <ReactPlayer
                    url={realEstateUrl}
                    width="100%"
                    height="100%"
                    controls
                  />
                </Suspense>
              </Stack>
            )}
          </Flex>
        </VStack>
      </Container>

      {carousel}

      <Container
        maxW="container.xl"
        p={{ base: "4", md: "12" }}
        mb={{ base: 10, md: 0 }}
      >
        <Stack py="40px" spacing={10} alignItems="center" textAlign="center">
          <ContactForm showBackground={false} />
        </Stack>
      </Container>
    </Layout>
  )
}

export default PageTemplate