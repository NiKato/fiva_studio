import React from "react"
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
      <PopoverContent p="2" maxW="fit-content">
        <Stack spacing="0" alignItems="stretch">
          {["Resumes", "Cover Letter", "Personal", "Education", "Essay"].map(
            item => (
              <Button key={item} variant="tertiary" justifyContent="start">
                {item}
              </Button>
            )
          )}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}
