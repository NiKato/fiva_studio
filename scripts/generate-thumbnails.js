const ffmpeg = require("fluent-ffmpeg")
const ffmpegPath = require("ffmpeg-static")
const ffprobePath = require("ffprobe-static").path
const path = require("path")
const fs = require("fs")

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

/**
 * Osiguraj da thumbnails folder postoji
 */
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true })
}

/**
 * Obriši stare thumbnails
 */
const cleanOldThumbnails = () => {
  const files = fs.readdirSync(thumbnailsDir)

  files.forEach(file => {
    if (
      file.startsWith("en-thumb") ||
      file.startsWith("sr-thumb") ||
      file.startsWith("grid-")
    ) {
      fs.unlinkSync(path.join(thumbnailsDir, file))
      console.log("🗑 Removed:", file)
    }
  })
}

/**
 * Generiši thumbnail
 */
const generateThumbnail = (url, outputPath, timestamp = "2%") => {
  return new Promise((resolve, reject) => {
    ffmpeg(url)
      .on("start", () => {
        console.log("▶ Generating:", outputPath)
      })
      .on("end", () => {
        console.log("✔ Saved:", outputPath)
        resolve()
      })
      .on("error", err => {
        console.error("✖ Error processing:", url)
        console.error(err.message)
        reject(err)
      })
      .screenshots({
        timestamps: [timestamp],
        filename: path.basename(outputPath),
        folder: path.dirname(outputPath),
        size: "640x?"
      })
  })
}

/**
 * Generiši thumbnails za listu videa
 */
const generateThumbs = async (videos, prefix) => {
  const uniqueVideos = [...new Set(videos)]

  for (let i = 0; i < uniqueVideos.length; i++) {
    const url = uniqueVideos[i]
    const outputPath = path.join(
      thumbnailsDir,
      `${prefix}-thumb-${i + 1}.jpg`
    )

    await generateThumbnail(url, outputPath)
  }
}

/**
 * Generiši grid thumbnails
 */
const generateGridThumbs = async () => {
  const uniqueVideos = [...new Set(gridVideos)]

  for (let i = 0; i < uniqueVideos.length; i++) {
    const url = uniqueVideos[i]
    const outputPath = path.join(
      thumbnailsDir,
      `grid-${i + 1}.jpg`
    )

    await generateThumbnail(url, outputPath, "3%")
  }
}

/**
 * Main runner
 */
const run = async () => {
  console.log("🧹 Cleaning old thumbnails...")
  cleanOldThumbnails()

  console.log("🎬 Generating EN thumbnails...")
  await generateThumbs(enVideos, "en")

  console.log("🎬 Generating SR thumbnails...")
  await generateThumbs(srVideos, "sr")

  console.log("🎬 Generating GRID thumbnails...")
  await generateGridThumbs()

  console.log("✅ All thumbnails generated")
}

run()