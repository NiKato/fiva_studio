const ffmpeg = require("fluent-ffmpeg")
const ffmpegPath = require("ffmpeg-static")
const ffprobePath = require("ffprobe-static").path
const path = require("path")
const fs = require("fs")

const enVideos = require("../src/data/videos.json")
const srVideos = require("../src/data/videos-sr.json")

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

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