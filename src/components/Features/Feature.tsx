import {
  Stack,
  useColorMode,
  Flex,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react"
import React from "react"
import LocalizedLink from "../LocalizedLink"

const Feature = ({ title, text, icon, linkText, linkUrl }: any) => {
  const { colorMode } = useColorMode()
  return (
    <Stack alignItems="flex-start" justifyContent="flex-start">
      <Flex
        align={"flex-start"}
        justifyContent={"flex-start"}
        rounded={"full"}
        mb={1}
        gap={2}
      >
        <Text m={0} color="#477EEB">
          {icon}
        </Text>
        <Heading
          as="h3"
          fontSize={"lg"}
          fontWeight={700}
          letterSpacing="-0.88px"
          textAlign="left"
        >
          {title}
        </Heading>
      </Flex>
      <Text as="p" mx="auto" textAlign="left" fontSize="sm">
        {text}
        {linkText && linkUrl && (
          <LocalizedLink rel="preload" to="contact-us">
            <Text color="#477EEB">{linkText}</Text>
          </LocalizedLink>
        )}
      </Text>
    </Stack>
  )
}

export default Feature
