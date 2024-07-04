import { extendTheme } from "@chakra-ui/react";
import "../styles/fonts.css";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
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
      Text: {
        fontFamily: "'PoppinsLight', sans-serif",
      },
      p: {
        fontFamily: "'PoppinsLight', sans-serif",
      },
    },
  },
});

export default theme;
