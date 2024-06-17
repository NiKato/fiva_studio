import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { MdOutlinePlayCircle } from "react-icons/md"



const VideoWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Video = styled.video`
  width: 100%;
  height: auto;
  max-width: 800px;
  display: block;
`

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  pointer-events: none !important;
  display: ${({ isPlaying }: any) => (isPlaying ? "none" : "block")};
`

const PlayIcon = styled(MdOutlinePlayCircle)`
  color: #fff; /* Set the color of the play icon */
  width: 100%;
  height: 100%;
`

const VideoPlayer = ({ src, onPlay, stopPlaying }: any) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoClick = () => {
    // @ts-ignore
    if (videoRef.current.paused) {
      pauseAllVideos()
      // @ts-ignore
      videoRef.current.play()
      setIsPlaying(true)
      if (onPlay) onPlay(src)
    } else {
      // @ts-ignore
      videoRef.current.pause()
      setIsPlaying(false)
      if (stopPlaying) stopPlaying()
    }
  }

  const pauseAllVideos = () => {
    const videos = document.querySelectorAll("video")
    videos.forEach(video => {
      if (video !== videoRef.current) {
        video.pause()
        setIsPlaying(false)
      }
    })
  }

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false)
      if (stopPlaying) stopPlaying()
    }

    const currentVideoRef = videoRef.current
    // @ts-ignore
    currentVideoRef.addEventListener("ended", handleEnded)

    return () => {
      // @ts-ignore
      currentVideoRef.removeEventListener("ended", handleEnded)
    }
  }, [stopPlaying])

  useEffect(() => {
    setIsPlaying(false)
  }, [src])

  return (
    <VideoWrapper onClick={handleVideoClick}>
      <Video ref={videoRef} src={src} playsInline />
      {/* @ts-ignore */}
      <PlayButton isPlaying={isPlaying}>
        <PlayIcon />
      </PlayButton>
    </VideoWrapper>
  )
}

export default VideoPlayer
