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
import hero from "../../images/hero.webp"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Hero({ title, text, cta, cta2 }: any) {
  return (
    <Container maxW={{ base: "100%", md: "7xl" }} my={20}>
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
              fontSize={{ base: "3xl", md: "4xl", lg: "3.2rem" }}
              fontWeight={700}
            >
              {title}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "2xl" }}
              lineHeight={"175%"}
            >
              {text}
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <AnchorLink to="/#anchor">
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
              <Button borderRadius={4} bg="#477EEB" color="#fff">
                {cta2}
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} position="relative">
          <Image
            w="744px"
            h={{ base: "343px", md: "100%" }}
            alt={"hero"}
            objectFit={"cover"}
            src={hero}
            borderRadius={24}
          />
          {/* <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(71, 126, 235, 0.1)" 
          borderRadius={24}
        /> */}
        </Flex>
      </Stack>
    </Container>
  )
}
