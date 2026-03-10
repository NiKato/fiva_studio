const ffmpeg = require("fluent-ffmpeg")
const ffmpegPath = require("ffmpeg-static")
const ffprobePath = require("ffprobe-static").path
const path = require("path")
const fs = require("fs")

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

const thumbnailsDir = path.resolve(__dirname, "../static/thumbnails")

const gridVideosMapping = [
  { url: "https://fivastudio.b-cdn.net/Documentary%20Style%20Edit.mp4", fileName: "grid-1.webp" },
  { url: "https://fivastudio.b-cdn.net/Elnara%20Ad%204k%2060fps%20.mp4", fileName: "grid-2.webp" },
  { url: "https://fivastudio.b-cdn.net/Termosistem%20Corporate%20Promo%20Video%20Final.mp4", fileName: "grid-4.webp" },
  { url: "https://fivastudio.b-cdn.net/3-Long%20Form%20Final.mp4", fileName: "grid-5.webp" }
]

if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true })
}

const generateThumbnail = (url, outputPath, timestamp = "2%") => {
  return new Promise((resolve) => {
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    ffmpeg(url)
      .on("start", () => {
        console.log("▶ Generating:", path.basename(outputPath))
      })
      .on("end", () => resolve())
      .on("error", err => {
        console.log("⚠ Failed:", url, err.message)
        resolve()
      })
      .screenshots({
        timestamps: [timestamp],
        filename: path.basename(outputPath),
        folder: path.dirname(outputPath),
        size: "640x?"
      })
  })
}

const generateGrid = async () => {
  console.log("🎬 Generating Grid thumbnails...")
  
  const tasks = gridVideosMapping.map((video) => {
    const output = path.join(thumbnailsDir, video.fileName)
    const time = video.fileName === "grid-5.webp" ? "00:00:05" : "3%"
    return generateThumbnail(video.url, output, time)
  })

  await Promise.all(tasks)
}

const run = async () => {
  if (process.env.VERCEL) {
    console.log("⚠ Skipping thumbnails on Vercel")
    return
  }

  const files = fs.readdirSync(thumbnailsDir)
  files.forEach(file => {
    if (file.startsWith("grid-") && file.endsWith(".webp")) {
      fs.unlinkSync(path.join(thumbnailsDir, file))
    }
  })

  await generateGrid()

  console.log("\n✅ Done! Proveri static/thumbnails folder.\n")
}

run()