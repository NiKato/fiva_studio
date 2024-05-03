import React from "react"
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
  useColorMode,
} from "@chakra-ui/react"
import { DocumentPopover } from "./DocumentPopover"
import logo from "../../images/logo.png"
import { MobileDrawer } from "./MobileDrawer"
import LanguageSwitcher from "../LanguageSwitcher"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useTranslation } from "react-i18next"

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t } = useTranslation()

  return (
    <Box
      px={5}
      top={0}
      zIndex={1000}
      transition="opacity 0.5s ease-in-out"
      position="fixed"
      width="100%"
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
            <MobileDrawer />
            <Image width="72px" h="36px" src={logo} />
          </HStack>
          <ButtonGroup
            size="sm"
            variant="text"
            colorScheme="gray"
            spacing="8"
            ml={4}
            display={{ base: "none", lg: "flex" }}
          >
            <Button bg={"none"} p={2} fontSize={"md"} fontWeight={600}>
              {t("header.home")}
            </Button>
            <Button bg={"none"} p={2} fontSize={"md"} fontWeight={600}>
              {t("header.aboutUs")}
            </Button>
            <DocumentPopover />
            <Button bg={"none"} p={2} fontSize={"md"} fontWeight={600}>
              {t("header.questions")}
            </Button>
            <Button bg={"none"} p={2} fontSize={"md"} fontWeight={600}>
              {t("header.contactUs")}
            </Button>
          </ButtonGroup>
        </Flex>
        <HStack spacing={{ base: "2", md: "4" }}>
          <ButtonGroup variant="tertiary" spacing="1">
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant={"ghost"}
              bg="none"
              _hover={{ bg: "none" }}
              aria-label={"Toggle Dark/Light Mode"}
              className="color-mode-button"
            />
            <LanguageSwitcher />
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"#477EEB"}
              href={"#"}
              _hover={{
                bg: "#33333",
              }}
            >
              {t("header.contactUs")}
            </Button>
          </ButtonGroup>
        </HStack>
      </Flex>
    </Box>
  )
}
