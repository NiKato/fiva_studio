import React, { useRef, useEffect, useState } from "react"
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
`

const PlayButton = styled(MdOutlinePlayCircle)`
  width: 80px;
  height: 80px;
  color: #fff;

  [data-theme="light"] & {
    color: #000;
  }
`

const ThumbnailImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 16px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const VideoPlayer = ({ src, onPlay, stopPlaying, isPlaying }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [localPlaying, setLocalPlaying] = useState(false)
  const [thumbnail, setThumbnail] = useState<string | null>(null)

  // Generisanje thumbnail-a prvog frejma
  useEffect(() => {
    const video = document.createElement("video")
    video.src = src
    video.crossOrigin = "anonymous"
    video.preload = "metadata"

    const captureThumbnail = () => {
      const canvas = document.createElement("canvas")
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext("2d")
      if (ctx) ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      setThumbnail(canvas.toDataURL("image/jpeg"))
    }

    video.addEventListener("loadeddata", captureThumbnail)
  }, [src])

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
      if (video !== videoRef.current) {
        video.pause()
      }
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
        src={src}
        playsInline
        preload="auto"
        controls={false}
      />
      {thumbnail && !localPlaying && <ThumbnailImage src={thumbnail} />}
      <Overlay isPlaying={localPlaying}>
        {!localPlaying && <PlayButton />}
      </Overlay>
    </VideoWrapper>
  )
}

export default VideoPlayer
