const ffmpeg = require("fluent-ffmpeg")
const ffmpegPath = require("ffmpeg-static")
const ffprobePath = require("ffprobe-static").path
const path = require("path")
const videoUrls = require("../src/data/videos.json")

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

videoUrls.forEach((url, i) => {
    const outputPath = path.resolve(__dirname, `../static/thumbnails/thumb-${i + 1}.jpg`);

    ffmpeg(url)
        .on("start", cmd => {
            console.log("▶ Generating:", outputPath)
        })
        .on("end", () => {
            console.log("✔ Saved:", outputPath)
        })
        .on("error", err => {
            console.error("✖ Error processing:", url)
            console.error(err)
        })
        .screenshots({
            timestamps: ["2%"], // uzmi frame na ~2% videa
            filename: path.basename(outputPath),
            folder: path.dirname(outputPath),
            size: "640x?"
        })
})
