import { useTranslation } from "react-i18next"
import {
  MdOutlineFlag,
  MdOutlineLocalFireDepartment,
  MdOutlineLocalMovies,
  MdLightbulbOutline,
} from "react-icons/md"

const features = {
  features: [
    {
      title: "features.title",
      text: "features.text",
      icon: MdOutlineLocalMovies,
    },
    {
      title: "features.title2",
      text: "features.text2",
      linkText: "features.linkText",
      linkUrl: "/contact-us",
      icon: MdOutlineLocalFireDepartment,
    },
    {
      title: "features.title3",
      text: "features.text3",
      icon: MdOutlineFlag,
    },
    {
      title: "features.title4",
      text: "features.text4",
      icon: MdLightbulbOutline,
    },
  ],
}

export default features
