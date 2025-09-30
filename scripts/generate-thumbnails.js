const ffmpeg = require("fluent-ffmpeg");
const ffprobeInstaller = require("@ffprobe-installer/ffprobe");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const path = require("path");
const videoUrls = require("../src/data/videos.json")
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

videoUrls.forEach((url, i) => {
    const outputPath = path.resolve(__dirname, `../public/thumbnails/thumb-${i + 1}.jpg`);
    ffmpeg(url)
        .screenshots({
            timestamps: ["2%"],
            filename: path.basename(outputPath),
            folder: path.dirname(outputPath),
            size: "640x?"
        })
        .on("end", () => console.log("✔ Saved:", outputPath))
        .on("error", err => console.error("✖ Error:", err.message));
});
