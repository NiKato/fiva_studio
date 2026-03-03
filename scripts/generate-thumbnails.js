const ffmpeg = require("fluent-ffmpeg")
const ffmpegPath = require("ffmpeg-static")
const ffprobePath = require("ffprobe-static").path
const path = require("path")
const fs = require("fs")

const enVideos = require("../src/data/videos.json")
const srVideos = require("../src/data/videos-sr.json")

const gridVideos = [
  "https://fivastudio.b-cdn.net/Documentary%20Style%20Edit.mp4",
  "https://fivastudio.b-cdn.net/Elnara%20Ad%204k%2060fps%20.mp4",
  "https://fivastudio.b-cdn.net/Termosistem%20Corporate%20Promo%20Video%20Final.mp4",
  "https://fivastudio.b-cdn.net/Termosistem%20Corporate%20Promo%20Video%20Final.mp4",
  "https://fivastudio.b-cdn.net/3-Long%20Form%20Final.mp4"
]

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

gridVideos.forEach((url, i) => {
  const outputPath = path.resolve(
    __dirname,
    `../static/thumbnails/grid-${i + 1}.jpg`
  )

  ffmpeg(url)
    .on("start", () => console.log("▶ Generating:", outputPath))
    .on("end", () => console.log("✔ Saved:", outputPath))
    .on("error", (err) => console.error(err.message))
    .screenshots({
      timestamps: ["3%"],
      filename: path.basename(outputPath),
      folder: path.dirname(outputPath),
      size: "640x?",
    })
})

const generateThumbs = (videos, prefix) => {
  videos.forEach((url, i) => {
    const outputPath = path.resolve(
      __dirname,
      `../static/thumbnails/${prefix}-thumb-${i + 1}.jpg`
    )

    // preskoči ako već postoji
    if (fs.existsSync(outputPath)) {
      console.log("⏭ Skipping (exists):", outputPath)
      return
    }

    ffmpeg(url)
      .on("start", () => {
        console.log("▶ Generating:", outputPath)
      })
      .on("end", () => {
        console.log("✔ Saved:", outputPath)
      })
      .on("error", err => {
        console.error("✖ Error processing:", url)
        console.error(err.message)
      })
      .screenshots({
        timestamps: ["2%"],
        filename: path.basename(outputPath),
        folder: path.dirname(outputPath),
        size: "640x?"
      })
  })
}

generateThumbs(enVideos, "en")
generateThumbs(srVideos, "sr")