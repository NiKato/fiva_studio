import React from "react"
import { Text, Link } from "@chakra-ui/react"

const Cta = () => {
  return (
    <Text
      as="p"
      fontSize={{ base: "md", md: "lg" }}
      fontWeight={600}
      p={8}
      color="#fff"
      bg="#3377FF"
      borderRadius="md"
    >
      Have questions? Just{" "}
      <Link href="/contact-us" color="#fff" textDecoration="underline">
        reach out to us
      </Link>{" "}
      and we'd be happy to discuss details with you, free of charge!
    </Text>
  )
}

export default Cta
