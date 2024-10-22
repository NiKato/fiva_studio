import React, { useState } from "react"
import { Box, Button, Collapse, Stack } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { useTranslation } from "react-i18next"
import { useLocation } from "@reach/router"
import LocalizedLink from "../LocalizedLink"

export const DocumentSidebar = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  const submenuItems = [
    { label: t("shortForm.title"), href: "short-form" },
    { label: t("podcast.title"), href: "podcasts" },
    { label: t("estate.estate"), href: "real-estate" },
    { label: t("cardTitles.meme"), href: "meme-videos" },
    { label: t("animation.title"), href: "2d-animations" },
    { label: t("education.title"), href: "educational-videos" },
    { label: t("corporate.title"), href: "corporate-videos" },
    { label: t("contentFC.title"), href: "content-for-children" },
    { label: t("food.title"), href: "food-and-hospitality" },
    { label: t("ecology.title"), href: "ecology-videos" },
    { label: t("wedding.title"), href: "wedding-videos" },
  ]

  return (
    <Box>
      <Button
        variant="ghost"
        justifyContent="start"
        w="full"
        fontWeight={600}
        onClick={toggleMenu}
        colorScheme="black"
        rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        _hover={{ textDecoration: "underline", color: "#3377FF" }}
      >
        {t("header.services")}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack mt={2} pl={4} spacing={2}>
          {submenuItems.map(item => {
            const isActive = location.pathname.includes(item.href)

            return (
              <LocalizedLink key={item.href} to={item.href}>
                <Button
                  variant="ghost"
                  justifyContent="start"
                  w="full"
                  fontWeight={500}
                  colorScheme="black"
                  bg={isActive ? "rgba(51, 119, 255, .5)" : "transparent"}
                  _hover={{ textDecoration: "underline", color: "#3377FF" }}
                >
                  {item.label}
                </Button>
              </LocalizedLink>
            )
          })}
        </Stack>
      </Collapse>
    </Box>
  )
}
