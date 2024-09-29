import React from "react"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  IconButton,
  Stack,
  useDisclosure,
  Link,
  Image,
} from "@chakra-ui/react"
import { MdClose } from "react-icons/md"
import { DocumentCollapse } from "./DocumentCollapse"
import { ToggleButton } from "./ToggleButton"
import logo from "../../images/logo.png"
import { useTranslation } from "react-i18next"
import LocalizedLink from "../LocalizedLink"

export const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  const links = [
    { href: "/", label: "Home" },
    { href: "#", label: "Services", component: <DocumentCollapse /> },
    { href: "/about-us", label: "About Us" },
    { href: "https://fivastudio.com/#faq", label: "Questions" },
    { href: "/contact-us", label: "Contact Us" },
  ]

  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: "inline-flex", lg: "none" }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              mx={0}
              p={0}
              size="24px"
              bg="transparent"
              _hover={{ bg: "transparent " }}
              icon={<MdClose />}
              aria-label="Close menu"
              onClick={onClose}
            />
            <LocalizedLink to="">
              <Image width="72px" height="36px" src={logo} alt="Logo" />
            </LocalizedLink>
          </DrawerHeader>
          <DrawerBody p={2}>
            <Stack spacing="1">
              {links.map((link, index) => (
                link.label === "Services" ? (
                  <DocumentCollapse key={index} />
                ) : (
                  <Button
                    key={index}
                    size="lg"
                    variant="tertiary"
                    justifyContent="start"
                    as="a"
                    href={link.href}
                  >
                    {link.label}
                  </Button>
                )
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
