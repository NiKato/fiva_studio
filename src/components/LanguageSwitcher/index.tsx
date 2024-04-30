import React, { FC } from "react"
import { useColorMode, Button, IconButton, HStack } from "@chakra-ui/react"
import { Link } from "gatsby"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { useTranslation } from "react-i18next"
import { Lang } from "../Icons/Lang"

const LanguageSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    // Store selected language in local storage
    localStorage.setItem("language", lang)
  }

  return (
    <>
      <HStack gap={0}>
        <Lang width="24px" height="24px" />
        <Button
          as={Link}
          size="xs"
          to="/sr"
          onClick={() => changeLanguage("sr")}
          color={colorMode === "dark" ? "white" : "black"}
          bg="none"
          _hover={{
            bg: "none"
          }}
          borderRight="1px solid #666666"
          h="11px"
          borderRadius={0}
        >
          SR
        </Button>
        <Button
          as={Link}
          size="xs"
          to="/"
          onClick={() => changeLanguage("en")}
          color={colorMode === "dark" ? "white" : "black"}
          bg="none"
          _hover={{
            bg: "none"
          }}
        >
          EN
        </Button>
      </HStack>
    </>
  )
}

export default LanguageSwitcher
