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
        backgroundColor={"rgba(0, 0, 0, 1)"}
        boxShadow={
          scrolled
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none"
        }
      >
        <Stack spacing="0" alignItems="stretch">
          {[
            { label: "Short Form", href: "/short-form" },
            { label: "Podcasts", href: "/podcasts" },
            { label: "Meme Videos", href: "/meme-videos" },
            { label: "2d Animation", href: "/2d-animations" },
            { label: "Youtube Videos", href: "/" },
            { label: "Educational Videos", href: "/educational-videos" },
            { label: "Corporate Videos", href: "/" },
            { label: "Content for Children", href: "/content-for-children" },
            { label: "Food and Hospitality", href: "/" },
            { label: "Film / Documentary", href: "/" },
            { label: "Ecology Videos", href: "/ecology-videos" },
            { label: "Wedding Videos", href: "/wedding-videos" },
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
              <a key={item.label} href={item.href} rel="noopener noreferrer">
                <Button
                  variant="tertiary"
                  justifyContent="start"
                  _hover={{ textDecoration: "underline", color: "#3377FF" }}
                >
                  {item.label}
                </Button>
              </a>
            )
          )}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}
