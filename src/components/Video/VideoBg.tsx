import { Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoBg = ({ src, placeholder, href }: { src: string, placeholder: string, href: string }) => {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <VideoWrapper>
      <Link href={href}>
        {!videoLoaded && <PlaceholderImage src={placeholder} alt="Video Placeholder" />}
        <VideoBackground
          src={src}
          playsInline
          autoPlay
          muted
          loop
          onLoadedData={() => setVideoLoaded(true)}
        />
      </Link>
    </VideoWrapper>
  );
};

export default VideoBg;
