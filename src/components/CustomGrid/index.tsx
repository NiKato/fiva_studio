import React from "react"
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react"
import VideoBg from "../Video/VideoBg"

// Define your video URLs
const videoUrls = {
  video1: "https://fivastudio.b-cdn.net/2D%20animation.mp4",
  video2: "https://fivastudio.b-cdn.net/wedding-video.mp4",
  video3: "https://fivastudio.b-cdn.net/hotel-pool-bar.mp4",
  video4: "https://fivastudio.b-cdn.net/Baby%20video.mp4",
}
const textStyles = {
  pos: "absolute",
  bg: "rgba(0, 0, 0, 0.5)",
  p: 4,
  mb: 2,
  borderRadius: "2xl",
  fontSize: { base: "md", md: "xl" },
  fontWeight: "bold",
}

const CustomGrid = () => {
  return (
    <Container maxW={{ base: "100%", md: "7xl" }} pb={{base: 0, md: 10}}>
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
          h={{ base: "85vh", md: "450px" }}
          minH={{ base: "85vh", md: "450px" }}
          w="100%"
          flexFlow={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "650px" }}
            h={{base: "156px", md: "auto"}}
            minH={{base: "156px", md: "auto"}}
            flex={1}
            bg="gray.700"
            borderRadius="2xl"
            display="flex"
            flexFlow="column"
            alignItems="center"
            justifyContent="flex-end"
            position="relative"
            overflow="hidden"
          >
            <VideoBg src={videoUrls.video1} />
            <Text
              pos="absolute"
              bg="rgba(0, 0, 0, 0.5)"
              px={4}
              py={2.5}
              mb={2}
              borderRadius="2xl"
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="bold"
            >
              2D animation / Meme video
            </Text>
          </Box>
          <Flex
            w={{ base: "100%", md: "650px" }}
            flexDir="column"
            gap={4}
            h="100%"
          >
            <HStack>
              <Box
                h="225px"
                flex={1}
                bg="gray.700"
                borderRadius="2xl"
                display="flex"
                flexFlow="column"
                alignItems="center"
                justifyContent="flex-end"
                position="relative"
                overflow="hidden"
              >
                <VideoBg src={videoUrls.video2} />
                <Text
                  pos="absolute"
                  bg="rgba(0, 0, 0, 0.5)"
                  px={4}
                  py={2.5}
                  mb={2}
                  borderRadius="2xl"
                  fontSize={{ base: "md", md: "xl" }}
                  fontWeight="bold"
                >
                  Wedding video
                </Text>
              </Box>
              <Box
                h="225px"
                w={{ base: "100%", md: "280px" }}
                maxW={{ base: "100%", md: "280px" }}
                flex={1}
                bg="gray.700"
                borderRadius="2xl"
                display="flex"
                flexFlow="column"
                alignItems="center"
                justifyContent="flex-end"
                position="relative"
                overflow="hidden"
              >
                <VideoBg src={videoUrls.video3} />
                <Text
                  pos="absolute"
                  bg="rgba(0, 0, 0, 0.5)"
                  px={4}
                  py={2.5}
                  mb={2}
                  borderRadius="2xl"
                  fontSize={{ base: "md", md: "xl" }}
                  fontWeight="bold"
                >
                  Promo video
                </Text>
              </Box>
            </HStack>
            <Box
              flex={1}
              bg="gray.700"
              borderRadius="2xl"
              display="flex"
              flexFlow="column"
              alignItems="center"
              justifyContent="flex-end"
              position="relative"
              overflow="hidden"
            >
              <VideoBg src={videoUrls.video4} />
              <Text
                pos="absolute"
                bg="rgba(0, 0, 0, 0.5)"
                px={4}
                py={2.5}
                mb={2}
                borderRadius="2xl"
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="bold"
              >
                Content for Children
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CustomGrid
