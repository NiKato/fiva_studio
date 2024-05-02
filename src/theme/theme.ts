import { extendTheme } from "@chakra-ui/react"
import "../styles/fonts.css"

const theme = extendTheme({
  config: {
    initialColorMode: typeof window !== 'undefined' ? localStorage.getItem("chakra-ui-color-mode") || "dark" : "dark",
  },
  fonts: {
    body: "'PoppinsBlack', sans-serif",
    text: "'PoppinsLight', sans-serif",
    heading: "'PoppinsBold', sans-serif",
    // Add more font styles as needed
  },
  colors: {
    light: {
      text: "#262626",
      link: "#262626",
    },
    dark: {
      text: "#FFFFFF",
      link: "#FFFFFF",
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: "link",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  styles: {
    global: {
      // Define default styles for all Text components
      Text: {
        fontFamily: "'PoppinsLight', sans-serif",
      },
      // Define default styles for all <p> elements
      p: {
        fontFamily: "'PoppinsLight', sans-serif",
      },
    },
  },
})

export default theme
