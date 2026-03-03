import React from "react"
import { SimpleGrid, Box } from "@chakra-ui/react"

const videos = [
  {
    type: "mp4",
    src: "https://fivastudio.b-cdn.net/Documentary%20Style%20Edit.mp4",
    thumb: "/thumbnails/grid-1.jpg",
  },
  {
    type: "mp4",
    src: "https://fivastudio.b-cdn.net/Elnara%20Ad%204k%2060fps%20.mp4",
    thumb: "/thumbnails/grid-2.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/3azLwNjTN8A",
    thumb: "https://img.youtube.com/vi/ebVzD9ytLEU/maxresdefault.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/NjF4f1HTLdA?start=12",
    thumb: "https://img.youtube.com/vi/NjF4f1HTLdA/maxresdefault.jpg",
  },
  {
    type: "mp4",
    src: "https://fivastudio.b-cdn.net/Termosistem%20Corporate%20Promo%20Video%20Final.mp4",
    thumb: "/thumbnails/grid-4.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/ebVzD9ytLEU",
    thumb: "https://img.youtube.com/vi/ebVzD9ytLEU/maxresdefault.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/zhDhUwfls6I",
    thumb: "https://img.youtube.com/vi/zhDhUwfls6I/maxresdefault.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/ffTcCc9KJ_w",
    thumb: "https://img.youtube.com/vi/ffTcCc9KJ_w/maxresdefault.jpg",
  },
  {
    type: "mp4",
    src: "https://fivastudio.b-cdn.net/3-Long%20Form%20Final.mp4",
    thumb: "/thumbnails/grid-5.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/ba4o2ady1qs",
    thumb: "https://img.youtube.com/vi/ba4o2ady1qs/maxresdefault.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/AYr15zgFGqM",
    thumb: "https://img.youtube.com/vi/AYr15zgFGqM/maxresdefault.jpg",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/rWo0362myzQ",
    thumb: "https://img.youtube.com/vi/rWo0362myzQ/maxresdefault.jpg",
  },
]

const VideoGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacing={6}
      px={{ base: 4, md: 10 }}
      py={10}
    >
      {videos.map((video, index) => (
        <Box
          key={index}
          borderRadius="12px"
          overflow="hidden"
          position="relative"
        >
          {video.type === "mp4" ? (
            <video
              controls
              poster={video.thumb}
              style={{ width: "100%", borderRadius: "12px" }}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ) : (
            <Box
              position="relative"
              paddingBottom="56.25%"
              height="0"
              overflow="hidden"
              borderRadius="12px"
            >
              <iframe
                src={video.src}
                title={`youtube-${index}`}
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </Box>
          )}
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default VideoGrid
