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
import LocalizedLink from "../LocalizedLink"

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
          fontFamily={"PoppinsBlack"}
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
        backgroundColor={"rgba(0, 0, 0, 1)"}
        boxShadow={
          scrolled
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none"
        }
      >
        <Stack spacing="0" alignItems="stretch">
          {[
            { label: t("shortForm.title"), href: "short-form" },
            { label: t("podcast.title"), href: "podcasts" },
            { label: t("cardTitles.meme"), href: "meme-videos" },
            { label: t("animation.title"), href: "2d-animations" },
            { label: t("education.title"), href: "educational-videos" },
            { label: t("corporate.title"), href: "corporate-videos" },
            { label: t("contentFC.title"), href: "content-for-children" },
            { label: t("food.title"), href: "food-and-hospitality" },
            { label: t("ecology.title"), href: "ecology-videos" },
            { label: t("wedding.title"), href: "wedding-videos" },
          ].map(item =>
            typeof item === "string" ? (
              <Button
                key={item}
                variant="tertiary"
                justifyContent="start"
                _hover={{ textDecoration: "underline", color: "#3377FF" }}
              >
                {item}
              </Button>
            ) : (
              <LocalizedLink key={item.label} to={`${item.href}`}>
                <Button
                  variant="tertiary"
                  fontFamily={"PoppinsBlack"}
                  justifyContent="start"
                  _hover={{ textDecoration: "underline", color: "#3377FF" }}
                >
                  {item.label}
                </Button>
              </LocalizedLink>
            )
          )}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}
