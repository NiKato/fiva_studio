import React from "react"
import { Stack, Text, useColorMode } from "@chakra-ui/react"
import { MdFormatQuote } from "react-icons/md"

interface TestiomonialProps {
  company: string
  name: string
  title: string
  quote: string
}

export const Testimonial = (props: TestiomonialProps) => {
  const { name, quote, title, company } = props
  const { colorMode } = useColorMode()
  const boxShadow =
    colorMode === "light"
      ? "0 4px 6px rgba(255, 255, 255, 0.4)"
      : "0 4px 6px rgba(0, 0, 0, 0.4)"
  return (
    <Stack
      spacing="8"
      align="center"
      textAlign="center"
      h="320px"
      mb={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="1px solid #dadada"
      borderRadius="24px"
      p={5}
      boxShadow={boxShadow}
    >
      <MdFormatQuote size={40} />
      <Text textStyle={{ base: "lg", md: "xl" }} fontWeight="medium">
        {quote}
      </Text>
      <Stack spacing="4" align="center">
        <Stack spacing="1">
          <Text fontWeight="semibold" color="#3377FF">
            {name}
          </Text>
          <Text color="fg.muted">
            {title}, {company}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
