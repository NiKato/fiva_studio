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
import hero from "../../images/reel3.webp"

export default function Hero({title, text, cta, cta2}: any) {
  
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
              {title}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "2xl" }}
              color={"gray.500"}
              lineHeight={"175%"}
            >
              {text}
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
                {cta}
              </Button>
              <Button borderRadius={4} bg="#477EEB" color="#fff">
                {cta2}
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
