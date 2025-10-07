import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  HStack,
  Image,
  IconButton,
  useColorMode,
} from "@chakra-ui/react"
import logo from "../../images/logo.png"
import theme from "../../theme/theme"
import { Helmet } from "react-helmet"
import Preloader from "../Loading"
import { Sidebar } from "../Header/Sidebar"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { t } from "i18next"
import LanguageSwitcher from "../LanguageSwitcher"
import LocalizedLink from "../LocalizedLink"
import { MobileDrawer } from "../Header/MobileDrawer"
import Footer from "../Footer"

const Layout = ({ children }: any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isLoading, setIsLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B58SBZ0SLG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-B58SBZ0SLG');

        gtag('config', 'AW-11139973355');

        gtag('event', 'conversion', {
          'send_to': 'AW-11139973355/2dw2CIip_PAZEOuB-r8p',
          'value': 1.0,
          'currency': 'USD'
        });
      `,
          }}
        />
      </Helmet>

      <Sidebar />
      <Box ml={{ base: 0, md: 64 }} w="auto" overflowX="hidden">
        <Box
          pt={{ base: 4, md: 8 }}
          pb={4}
          px={0}
          top={0}
          zIndex={1000}
          transition="opacity 0.5s ease-in-out"
          position={{ base: "fixed", md: "relative" }}
          width="100%"
          backdropFilter={{
            base: scrolled ? "blur(10px)" : "none",
            md: "none",
          }}
          backgroundColor={{
            base: scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
            md: "transparent",
          }}
          boxShadow={{
            base: scrolled
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              : "none",
            md: "none",
          }}
          m={0}
        >
          <HStack
            justifyContent={{ base: "space-between", md: "flex-end" }}
            mr={{ base: 8, md: 10 }}
            ml={{ base: 8, md: 0 }}
            spacing={{ base: 2, md: 4 }}
          >
            <MobileDrawer />
            <LocalizedLink to="">
              <Image
                width="72px"
                h="36px"
                src={logo}
                alt="Logo"
                display={{ base: "flex", md: "none" }}
              />
            </LocalizedLink>
            <ButtonGroup variant="tertiary" spacing="1">
              <IconButton
                mr={3}
                icon={
                  colorMode === "light" ? (
                    <SunIcon color="yellow.500" />
                  ) : (
                    <MoonIcon color="gray.500" />
                  )
                }
                onClick={toggleColorMode}
                variant="ghost"
                bg="none"
                _hover={{ bg: "none" }}
                aria-label="Toggle Dark/Light Mode"
                className="color-mode-button"
              />
              <LanguageSwitcher />
              <LocalizedLink to="contact-us">
                <Button
                  as="a"
                  display={{ base: "none", md: "inline-flex" }}
                  fontFamily="PoppinsBlack"
                  fontSize="md"
                  fontWeight={600}
                  color="white"
                  bg="#477EEB"
                  _hover={{
                    bg: "#33333",
                  }}
                >
                  {t("header.contactUs")}
                </Button>
              </LocalizedLink>
            </ButtonGroup>
          </HStack>
        </Box>

        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default Layout
