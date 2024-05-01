import React from "react"
import { VStack, Text, Heading, useColorMode } from "@chakra-ui/react"

interface HeadingsProps {
  spanTitle: string
  title: string
  text: string
}

const Headings: React.FC<HeadingsProps> = ({ spanTitle, title, text }) => {
  const { colorMode } = useColorMode()
  return (
    <VStack
      py={10}
      bg={colorMode === "dark" ? "#262626" : "#EAEAEC"}
      color={colorMode === "dark" ? "white" : "black"}
      alignItems="center"
      gap={0}
    >
      <Text
        as="span"
        fontSize="xl"
        fontWeight={700}
        textTransform={"uppercase"}
        color="#3377FF"
      >
        {spanTitle}
      </Text>
      <Heading as="h2" p={0} fontSize="42px" fontWeight={700}>
        {title}
      </Heading>
      <Text as="p" fontSize="xl" fontWeight={400} color="#666666" maxW="760px" textAlign="center">
        {text}
      </Text>
    </VStack>
  )
}

export default Headings
