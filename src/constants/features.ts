import {
  MdOutlineFlag,
  MdOutlineLocalFireDepartment,
  MdOutlineLocalMovies,
  MdLightbulbOutline,
} from "react-icons/md"

const features = {
  features: [
    {
      title: "Tailored videos",
      text: "We craft videos that bring project's essence to surface.",
      icon: MdOutlineLocalMovies,
    },
    {
      title: "Free consultation",
      text: "We discuss your project with you and find the best solution together.",
      linkText: "Book your free appointment now.",
      linkUrl: "/contact-us",
      icon: MdOutlineLocalFireDepartment,
    },
    {
      title: "Reliability",
      text: "As someone who worked in marketing and smm, we understand importance of deadlines and planning your content.",
      icon: MdOutlineFlag,
    },
    {
      title: "Selected editors",
      text: "We carefully chose editors for your projects that work best in your niche.",
      icon: MdLightbulbOutline,
    },
  ],
}

export default features;
