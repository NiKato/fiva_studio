import stat1 from "../images/reel4.webp";
import stat2 from "../images/food.webp";
import stat3 from "../images/reel2.webp";
import stat4 from "../images/reel.webp";

interface StatData {
  title: string;
  stat: string;
  imageSrc: any;
  href: any;
}

export const statsData: StatData[] = [
  {
    title: "cardTitles.podcast",
    stat: "cardTitles.podcastSub",
    imageSrc: stat4,
    href: "/youtube",
  },
  {
    title: "cardTitles.realestate",
    stat: "cardTitles.realestateSub",
    imageSrc: stat3,
    href: "/real-estate",
  },
  {
    title: "cardTitles.film",
    stat: "cardTitles.filmSub",
    imageSrc: stat1,
    href: "/film-videos",
  },
  {
    title: "cardTitles.food",
    stat: "cardTitles.foodSub",
    imageSrc: stat2,
    href: "/food-and-hospitality",
  },
];
