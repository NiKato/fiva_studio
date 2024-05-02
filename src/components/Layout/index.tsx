import React from "react"
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react"
import theme from "../../theme/theme"
import config from "../../theme/theme"
import Header from "../Header"


const Layout = ({ children }: any) => {
  const { colorMode, toggleColorMode } = useColorMode() // Access color mode and toggle function

  return (
    <ChakraProvider theme={theme} >
      <Header />
      <ColorModeProvider >{children}</ColorModeProvider>
    </ChakraProvider>
  )
}

export default Layout
