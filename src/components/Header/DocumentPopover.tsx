import React, { useEffect, useState } from "react"
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"
import { PopoverIcon } from "./PopoverIcon"
import { useTranslation } from "react-i18next"

export const DocumentPopover = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      trigger="hover"
      openDelay={0}
    >
      <PopoverTrigger>
        <Button
          p={2}
          fontSize={"md"}
          fontWeight={600}
          rightIcon={<PopoverIcon isOpen={isOpen} />}
        >
          {t("header.services")}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        p="2"
        maxW="fit-content"
        backdropFilter={scrolled ? "blur(10px)" : "none"}
        backgroundColor={scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent"}
        boxShadow={
          scrolled
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none"
        }
      >
        <Stack spacing="0" alignItems="stretch">
          {[
            "Short Form",
            "Educational Videos",
            "2D Animation",
            "Meme videos",
            "Content for Children",
          ].map(item => (
            <Button
              key={item}
              variant="tertiary"
              justifyContent="start"
              _hover={{ textDecoration: "underline", color: "#3377FF" }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}
