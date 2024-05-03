import React, { FC } from "react"
import {
  useColorMode,
  Button,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

const LanguageSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { i18n } = useTranslation()

  // Get the currently selected language from localStorage
  const selectedLanguage =
    typeof window !== "undefined" && window.localStorage.getItem("language")

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    // Store selected language in local storage
    localStorage.setItem("language", lang)
  }

  const linkColor = useColorModeValue("#666666", "#ffffff")

  return (
    <>
      <HStack gap={0}>
       
        <Button
          as={Link}
          size="sm"
          to="/sr"
          onClick={() => changeLanguage("sr")}
          textDecoration={selectedLanguage === "sr" ? "underline" : "none"}
          color={selectedLanguage === "sr" ? linkColor : "#666666"}
          bg="none"
          _hover={{
            bg: "none",
          }}
          borderRight="1px solid #666666"
          h="11px"
          borderRadius={0}
        >
          SR
        </Button>
        <Button
          as={Link}
          size="sm"
          to="/"
          onClick={() => changeLanguage("en")}
          textDecoration={selectedLanguage === "en" ? "underline" : "none"}
          color={selectedLanguage === "en" ? linkColor : "#666666"}
          bg="none"
          _hover={{
            bg: "none",
          }}
        >
          EN
        </Button>
      </HStack>
    </>
  )
}

export default LanguageSwitcher
