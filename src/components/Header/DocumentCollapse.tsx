import React from "react"
import { Button, Collapse, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { PopoverIcon } from "./PopoverIcon"
import LocalizedLink from "../LocalizedLink"

export const DocumentCollapse = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button
        justifyContent="space-between"
        variant="tertiary"
        size="lg"
        onClick={onToggle}
      >
        <Text as="span">Services</Text>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
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
              <LocalizedLink key={item.label} to={`.${item.href}`}>
                <Button
                  variant="tertiary"
                  justifyContent="start"
                  _hover={{ textDecoration: "underline", color: "#3377FF" }}
                >
                  {item.label}
                </Button>
              </LocalizedLink>
            )
          )}
        </Stack>
      </Collapse>
    </>
  )
}
