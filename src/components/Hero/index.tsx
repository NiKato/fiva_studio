import React from "react"
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import hero from "../../images/reel3.jpeg"

export default function Hero() {
  return (
    <Container maxW={{ base: "100%", md: "7xl" }} mt="-60px" pb={20}>
      <Stack
        pt={"144px"}
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
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "3.2rem" }}
              fontWeight={700}
            >
              Unleash the power of 2d Animation videos
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "2xl" }}
              color={"gray.500"}
              lineHeight={"175%"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet commodo magna, ac volutpat mi. Donec eget mi vel ante
              hendrerit pharetra eu vel erat. Ut rhoncus vitae lorem quis
              aliquet. Interdum et malesuada fames ac.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                borderRadius={4}
                bg={"#333333"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Get in Touch
              </Button>
              <Button borderRadius={4} bg="#477EEB" color="#fff">
                Show Work
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            w="744px"
            h={{ base: "343px", md: "692px" }}
            alt={"hero"}
            objectFit={"cover"}
            src={hero}
            borderRadius={24}
          />
        </Flex>
      </Stack>
    </Container>
  )
}
