import React, { useState, useEffect } from "react"
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useColorMode,
} from "@chakra-ui/react"
import { DocumentPopover } from "./DocumentPopover"
import logo from "../../images/logo.png"
import { MobileDrawer } from "./MobileDrawer"
import LanguageSwitcher from "../LanguageSwitcher"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useTranslation } from "react-i18next"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const links = [
    { href: "/", label: t("header.home") },
    { href: "/about-us", label: t("header.aboutUs") },
    { href: "/#faq", label: t("header.questions") },
    { href: "/contact-us", label: "Cntact Us"},
  ]

  return (
    <Box
      px={5}
      top={0}
      zIndex={1000}
      transition="opacity 0.5s ease-in-out"
      position="fixed"
      width="100%"
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      backgroundColor={scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent"}
      boxShadow={
        scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none"
      }
    >
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Flex>
          <HStack spacing="3">
            <MobileDrawer links={links} />
            <Link href="/"><Image width="72px" h="36px" src={logo} /></Link>
          </HStack>
          <ButtonGroup
            size="sm"
            variant="text"
            colorScheme="gray"
            spacing="8"
            ml={4}
            display={{ base: "none", lg: "flex" }}
          >
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <Button
                  bg={"none"}
                  p={2}
                  fontSize={"md"}
                  fontWeight={600}
                  _hover={{ textDecoration: "underline", color: "#3377FF" }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <DocumentPopover />
          
          </ButtonGroup>
        </Flex>
        <HStack spacing={{ base: "2", md: "4" }}>
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
              variant={"ghost"}
              bg="none"
              _hover={{ bg: "none" }}
              aria-label={"Toggle Dark/Light Mode"}
              className="color-mode-button"
            />
            {/* <LanguageSwitcher /> */}
            <Link href="/contact-us">
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"#477EEB"}
              _hover={{
                bg: "#33333",
              }}
            >
              {t("header.contactUs")}
            </Button>
            </Link>
          </ButtonGroup>
        </HStack>
      </Flex>
    </Box>
  )
}
