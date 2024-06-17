import stat1 from "../images/reel4.webp"
import stat2 from "../images/reel3.webp"
import stat3 from "../images/reel2.webp"

interface StatData {
  title: string
  stat: string
  imageSrc: any
}

export const statsData: StatData[] = [
  {
    title: "Wedding Video",
    stat: "Capture the magic and joy of your special day with our professional wedding videography",
    imageSrc: stat3,
  },
  {
    title: "Corporate Video",
    stat: "Enhance your brand's image with our high-quality corporate videos",
    imageSrc: stat2,
  },
  {
    title: "Movie Video",
    stat: "Bring your cinematic vision to life with our movie production services",
    imageSrc: stat1,
  },
]
