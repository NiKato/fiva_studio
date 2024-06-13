import React from "react";
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

const VideoBg = ({ src }: any) => {
  return (
    <VideoWrapper>
      <VideoBackground src={src} autoPlay loop muted />
    </VideoWrapper>
  );
};

export default VideoBg;
