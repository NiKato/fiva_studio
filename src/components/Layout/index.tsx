import React from "react"
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react"
import theme from "../../theme/theme"
import config from "../../theme/theme"
import { Header } from "../Header"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }: any) => {
  return (
    <ChakraProvider theme={theme}>
       <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="preload"
      />
    </Helmet>
      <Header />
      <ColorModeProvider>{children}</ColorModeProvider>
      <Footer />
    </ChakraProvider>
  )
}

export default Layout
