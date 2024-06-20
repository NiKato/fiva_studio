// src/templates/PageTemplate.tsx
import React, { useRef, useState } from "react";
import { PageHero } from "../PageHero";
import Layout from "../Layout";
import { VStack, Heading, Container, Box } from "@chakra-ui/react";
import { MdOutlinePlayCircle } from "react-icons/md";
import styled from "styled-components";
import Cta from "../Cta";

const VideoWrapper = ({ onClick, children }: any) => (
  <div onClick={onClick} style={{ position: "relative", cursor: "pointer" }}>
    {children}
  </div>
);

const Video = React.forwardRef(({ src, playsInline }: any, ref) => (
  <video
    // @ts-ignore
    ref={ref}
    src={src}
    playsInline
  />
));

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
  );

const PlayIcon = styled(MdOutlinePlayCircle)`
  color: #fff; /* Set the color of the play icon */
  width: 100px;
  height: 100%;
`;

interface PageTemplateProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  videoSrc?: string;
  carousel?: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, subtitle, content, videoSrc, carousel }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (isPlaying) {
      // @ts-ignore
      videoRef.current.pause();
    } else {
      // @ts-ignore
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
          {videoSrc && (
            <Box
              w={{ base: "auto", md: "600px" }}
              maxW="600px"
              mx={{ base: 8, md: "auto" }}
              boxShadow="4px 4px 8px rgba(0, 0, 0, 0.9)"
            >
              <VideoWrapper onClick={handleVideoClick}>
                <Video ref={videoRef} src={videoSrc} playsInline />
                {/* @ts-ignore */}
                <PlayButton isPlaying={isPlaying}>
                  <PlayIcon />
                </PlayButton>
              </VideoWrapper>
            </Box>
          )}
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
  );
};

export default PageTemplate;