import React from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero({ title, text, cta, cta2 }: any) {
  return (
    <Container maxW={{ base: "100%", md: "7xl" }} my={{ base: 5, md: 20 }}>
      <Stack
        pt={"80px"}
        minH={"100%"}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={20}
      >
        <Flex
          p={{ base: 0, md: 8 }}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={6} w={"full"} maxW={"600px"}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "3.2rem" }}
              fontWeight={700}
            >
              {title}
            </Heading>
            <Text
              as="p"
              fontSize={{ base: "md", lg: "2xl" }}
              lineHeight={"175%"}
            >
              {text}
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <AnchorLink to="/#anchor" stripHash>
                <Button
                  borderRadius={4}
                  bg={"#333333"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  {cta}
                </Button>
              </AnchorLink>
              <AnchorLink to="/#work" stripHash>
                <Button borderRadius={4} bg="#477EEB" color="#fff">
                  {cta2}
                </Button>
              </AnchorLink>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} position="relative" w="100%" h="100%">
          <Image
            src="https://fivastudio.b-cdn.net/hero.webp"
            alt="Fiva Studio your trusted video editor"
            loading="lazy"
            borderRadius="24px"
            objectFit="cover"
            htmlWidth="100%"
            htmlHeight="100%"
          />
        </Flex>
      </Stack>
    </Container>
  )
}
