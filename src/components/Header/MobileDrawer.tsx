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

export const MobileDrawer = ({ links }: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure()

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
            <Link href="/">
              <Image width="72px" height="36px" src={logo} alt="Logo" />
            </Link>
          </DrawerHeader>
          <DrawerBody p={2}>
            <Stack spacing="1">
              {links.map((link: any, index: any) => (
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
              ))}
              <DocumentCollapse />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
