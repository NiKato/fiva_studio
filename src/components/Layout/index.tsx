import React, { useEffect } from "react";
import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react";
import theme from "../../theme/theme";
import { Header } from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Ensure dark mode is set initially
  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="preload"
        />
      </Helmet>
      <ColorModeProvider>
        <Header />
        {children}
        <Footer />
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default Layout;
