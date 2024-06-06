import React from "react"
import { VStack, Text, Heading, useColorMode } from "@chakra-ui/react"

interface HeadingsProps {
  spanTitle: string
  title: string
  text?: string
}

const Headings: React.FC<HeadingsProps> = ({ spanTitle, title, text }) => {
  return (
    <VStack py={10} alignItems="center" gap={0}>
      <Text
        as="span"
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight={700}
        textTransform={"uppercase"}
        color="#3377FF"
      >
        {spanTitle}
      </Text>
      <Heading
        as="h2"
        textAlign={"center"}
        p={0}
        fontSize={{ base: "30px", md: "42px" }}
        fontWeight={700}
      >
        {title}
      </Heading>
      <Text
        as="p"
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight={400}
        px={{ base: 4, md: 0 }}
        maxW="760px"
        textAlign="center"
      >
        {text}
      </Text>
    </VStack>
  )
}

export default Headings
