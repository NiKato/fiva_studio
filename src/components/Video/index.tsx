// components/VideoPlayer.tsx
import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { MdOutlinePlayCircle } from "react-icons/md"

type Props = {
  src: string
  onPlay: () => void
  stopPlaying: () => void
  isPlaying: boolean
  isCarousel?: boolean
}

const VideoWrapper = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Video = styled.video`
  width: 100%;
  height: auto;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`

const PlayButton = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  pointer-events: none;
  display: ${({ isPlaying }) => (isPlaying ? "none" : "block")};
`

const PlayIcon = styled(MdOutlinePlayCircle)`
  width: 100%;
  height: 100%;
  color: #fff;

  [data-theme="light"] & {
    color: #000;
  }
`

const VideoPlayer = ({ src, onPlay, stopPlaying, isPlaying }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      pauseAllVideos()
      videoRef.current.play()
      onPlay()
    } else {
      videoRef.current.pause()
      stopPlaying()
    }
  }

  const pauseAllVideos = () => {
    const videos = document.querySelectorAll("video")
    videos.forEach(video => {
      if (video !== videoRef.current) {
        video.pause()
      }
    })
  }

  useEffect(() => {
    const current = videoRef.current
    const handleEnded = () => stopPlaying()
    current?.addEventListener("ended", handleEnded)
    return () => current?.removeEventListener("ended", handleEnded)
  }, [stopPlaying])

  useEffect(() => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isPlaying])

  return (
    <VideoWrapper onClick={handleVideoClick}>
      <Video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        controls={false}
      />
      <PlayButton isPlaying={isPlaying}>
        <PlayIcon />
      </PlayButton>
    </VideoWrapper>
  )
}

export default VideoPlayer
