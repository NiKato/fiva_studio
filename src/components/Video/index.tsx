import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { MdOutlinePlayCircle } from "react-icons/md"

type Props = {
  src: string
  poster?: string
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
  max-width: 800px;
  border-radius: 16px;
  display: block;
  background-color: #000;
`

const Overlay = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
  pointer-events: ${({ isPlaying }) => (isPlaying ? "none" : "auto")};
  z-index: 2;
`

const PlayButton = styled(MdOutlinePlayCircle)`
  width: 80px;
  height: 80px;
  color: #fff;
  [data-theme="light"] & {
    color: #000;
  }
`

const VideoPlayer = ({
  src,
  onPlay,
  stopPlaying,
  isPlaying,
  poster,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [localPlaying, setLocalPlaying] = useState(false)

  const handleVideoClick = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      pauseAllVideos()
      videoRef.current
        .play()
        .then(() => {
          setLocalPlaying(true)
          onPlay()
        })
        .catch(err => console.log("Play failed:", err))
    } else {
      videoRef.current.pause()
      setLocalPlaying(false)
      stopPlaying()
    }
  }

  const pauseAllVideos = () => {
    const videos = document.querySelectorAll("video")
    videos.forEach(video => {
      if (video !== videoRef.current) video.pause()
    })
  }

  useEffect(() => {
    const current = videoRef.current
    const handleEnded = () => {
      setLocalPlaying(false)
      stopPlaying()
    }
    current?.addEventListener("ended", handleEnded)
    return () => current?.removeEventListener("ended", handleEnded)
  }, [stopPlaying])

  useEffect(() => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.pause()
      setLocalPlaying(false)
    }
  }, [isPlaying])

  return (
    <VideoWrapper onClick={handleVideoClick}>
      <Video
        ref={videoRef}
        poster={poster}
        src={src}
        playsInline
        preload="auto"
        controls={false}
        crossOrigin="anonymous"
      />
      <Overlay isPlaying={localPlaying}>
        {!localPlaying && <PlayButton />}
      </Overlay>
    </VideoWrapper>
  )
}

export default VideoPlayer
