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
    stat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet.",
    imageSrc:  stat3 ,
  },
  {
    title: "Corporate Video",
    stat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet.",
    imageSrc:  stat2 ,
  },
  {
    title: "Movie Video",
    stat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet.",
    imageSrc:  stat1 ,
  },
]
