import React from "react"

import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react"

const CustomGrid = () => {
  return (
    <Container maxW={{ base: "100%", md: "7xl" }} my={20}>
      <Flex
        direction="column"
        w="100%"
        h={{ base: "100%", md: "450px" }}
        p={4}
        gap={4}
        color="white"
      >
        <Flex
          gap={4}
          h="450px"
          minH="450px"
          w="100%"
          flexFlow={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100", md: "650px" }}
            flex={1}
            bg="gray.700"
            p={4}
            borderRadius="2xl"
            display="flex"
            flexFlow="column"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
              FIRST BOX
            </Text>
            <Text mt={2} textAlign="center" fontSize={{ base: "sm", md: "md" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              nunc felis. Aliquam nec rhoncus leo, a dictum odio.
            </Text>
          </Box>
          <Flex
            w={{ base: "100", md: "650px" }}
            flexDir="column"
            gap={4}
            h="100%"
          >
            <HStack>
              <Box
                h="225px"
                flex={1}
                bg="gray.700"
                p={4}
                borderRadius="2xl"
                display="flex"
                flexFlow="column"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
                  SECOND ONE
                </Text>
                <Text
                  mt={2}
                  textAlign="center"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Box>
              <Box
                h="225px"
                w={{ base: "100", md: "280px" }}
                maxW={{ base: "100", md: "280px" }}
                flex={1}
                bg="gray.700"
                p={4}
                borderRadius="2xl"
                display="flex"
                flexFlow="column"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
                  THIRD ONE
                </Text>
                <Text
                  mt={2}
                  textAlign="center"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Lorem ipsum dolor sit amet, consectetur.
                </Text>
              </Box>
            </HStack>
            <Box
              flex={1}
              bg="gray.700"
              p={4}
              borderRadius="2xl"
              display="flex"
              flexFlow="column"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
                Forth
              </Text>
              <Text
                mt={2}
                textAlign="center"
                fontSize={{ base: "sm", md: "md" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ac nunc felis. Aliquam nec rhoncus leo, a dictum odio.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CustomGrid
