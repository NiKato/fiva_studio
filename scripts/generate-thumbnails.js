const ffmpeg = require("fluent-ffmpeg")
const ffmpegPath = require("ffmpeg-static")
const ffprobePath = require("ffprobe-static").path
const path = require("path")
const fs = require("fs")
const os = require("os")

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

const thumbnailsDir = path.resolve(__dirname, "../static/thumbnails")

const enVideos = require("../src/data/videos.json")
const srVideos = require("../src/data/videos-sr.json")

const gridVideos = [
  "https://fivastudio.b-cdn.net/Documentary%20Style%20Edit.mp4",
  "https://fivastudio.b-cdn.net/Elnara%20Ad%204k%2060fps%20.mp4",
  "https://fivastudio.b-cdn.net/Termosistem%20Corporate%20Promo%20Video%20Final.mp4",
  "https://fivastudio.b-cdn.net/3-Long%20Form%20Final.mp4"
]

if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true })
}

const isVideo = (url) => {
  return url.startsWith("http") && !url.includes("youtube")
}

const generateThumbnail = (url, outputPath, timestamp = "2%") => {
  return new Promise((resolve, reject) => {

    if (fs.existsSync(outputPath)) {
      console.log("⏭ Skip existing:", path.basename(outputPath))
      return resolve()
    }

    ffmpeg(url)
      .on("start", () => {
        console.log("▶", path.basename(outputPath))
      })
      .on("end", () => resolve())
      .on("error", err => {
        console.log("⚠ Failed:", url)
        resolve() // skip instead of crash
      })
      .screenshots({
        timestamps: [timestamp],
        filename: path.basename(outputPath),
        folder: path.dirname(outputPath),
        size: "640x?"
      })
  })
}

const generateList = async (videos, prefix) => {

  const unique = [...new Set(videos)].filter(isVideo)

  const tasks = unique.map((url, i) => {

    const output = path.join(
      thumbnailsDir,
      `${prefix}-thumb-${i + 1}.webp`
    )

    return generateThumbnail(url, output)

  })

  await Promise.all(tasks)
}

const generateGrid = async () => {

  const unique = [...new Set(gridVideos)]

  const tasks = unique.map((url, i) => {

    const output = path.join(
      thumbnailsDir,
      `grid-${i + 1}.webp`
    )

    return generateThumbnail(url, output, "3%")

  })

  await Promise.all(tasks)

}

const run = async () => {

  if (process.env.VERCEL) {
    console.log("⚠ Skipping thumbnails on Vercel")
    return
  }

  console.log("\n🎬 Generating thumbnails...\n")

  await generateList(enVideos, "en")
  await generateList(srVideos, "sr")
  await generateGrid()

  console.log("\n✅ Done\n")

}

run()