import React from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Hero({ title, text, cta2 }: any) {
  return (
    <Box position="relative" py={28} overflow="hidden">
      <Container
        maxW={{ base: "100%", md: "7xl" }}
        position="relative"
        zIndex={1}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
        >
          <Stack spacing={10} w="full" maxW="900px" align="center">
            <Heading
              as="h1"
              fontFamily="PoppinsBlack"
              fontSize={{ base: "5xl", md: "6xl", lg: "5.5rem" }}
              fontWeight={700}
              lineHeight="1.1"
            >
              {title}
            </Heading>
            <Text
              as="p"
              fontSize={{ base: "xl", lg: "2xl" }}
              lineHeight="170%"
              fontWeight={400}
            >
              {text}
            </Text>

            <AnchorLink to="/#work" stripHash>
              <Button
                borderRadius={4}
                bg="#477EEB"
                color="white"
                fontSize="lg"
                px={8}
                py={6}
                _hover={{
                  bg: "blue.600",
                }}
              >
                {cta2}
              </Button>
            </AnchorLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}
