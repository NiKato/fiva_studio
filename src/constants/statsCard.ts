import stat1 from "../images/reel4.webp"
import stat2 from "../images/reel3.webp"
import stat3 from "../images/reel2.webp"
import stat4 from "../images/reel.webp"

interface StatData {
  title: string
  stat: string
  imageSrc: any
  href: any
}

export const statsData: StatData[] = [
  {
    title: "Podcast Videos",
    stat: " Reach a wider audience and boost your brand with our high-quality podcast video services",
    imageSrc: stat4,
    href: "/podcasts",
  },
  {
    title: "Meme Videos",
    stat: "Capture the magic and joy of your special day with our professional meme videography",
    imageSrc: stat3,
    href: "/meme-videos",
  },
  {
    title: "Film | Documentary Videos",
    stat: "Bring your cinematic vision to life with our movie production services",
    imageSrc: stat1,
    href: "/",
  },
  {
    title: "Corporate Videos",
    stat: "Enhance your brand's image with our high-quality corporate videos",
    imageSrc: stat2,
    href: "/",
  },
]
