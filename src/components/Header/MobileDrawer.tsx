import React from "react"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { DocumentCollapse } from './DocumentCollapse'
import { ToggleButton } from './ToggleButton'

export const MobileDrawer = ({ links }: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: 'inline-flex', lg: 'none' }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              {/* @ts-ignore */}
              {links.map((link, index) => (
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
