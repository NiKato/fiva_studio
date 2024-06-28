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

const VideoBg = ({ src, placeholder }: { src: string, placeholder: string }) => {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      const slowConnections = ['slow-2g', '2g', '3g'];
      if (slowConnections.includes(connection.effectiveType)) {
        setShouldAutoplay(false);
      } else {
        setShouldAutoplay(true);
      }
    } else {
      setShouldAutoplay(true);
    }
  }, []);

  return (
    <VideoWrapper>
      {!videoLoaded && <PlaceholderImage src={placeholder} alt="Video Placeholder" />}
      <VideoBackground
        src={src}
        playsInline
        autoPlay={shouldAutoplay}
        muted
        loop
        onLoadedData={() => setVideoLoaded(true)}
      />
    </VideoWrapper>
  );
};

export default VideoBg;
