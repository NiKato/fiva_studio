import React from "react"
import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'

export const DocumentCollapse = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
        <Text as="span">Services</Text>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
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
      </Collapse>
    </>
  )
}