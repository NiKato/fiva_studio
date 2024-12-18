import React from "react"
import { Box, Container, Flex, HStack, Text, Image } from "@chakra-ui/react"
import VideoBg from "../Video/VideoBg"
import placeholder from "../../images/fiva.svg"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import LocalizedLink from "../LocalizedLink"

const CustomGrid = () => {
  const { t } = useTranslation()

  const videoData = [
    {
      src: "https://fivastudio.b-cdn.net/soko-skele.gif",
      placeholder: placeholder,
      label: t("cardTitles.corporate"),
      href: "/2d-animations",
    },
    {
      src: "https://fivastudio.b-cdn.net/Fiva%20studio%20Wedding%20gif%20for%20homepage.gif",
      placeholder: placeholder,
      label: t("cardTitles.wedding"),
      href: "/wedding-videos",
    },
    {
      src: "https://fivastudio.b-cdn.net/2D%20character%20animation%20meme%20animation.gif",
      placeholder: placeholder,
      label: t("cardTitles.2dAnimations"),
      href: "/2d-animations",
    },
    {
      src: "https://fivastudio.b-cdn.net/Kids%20animation%202d%20Animation.gif",
      placeholder: placeholder,
      label: t("cardTitles.contentFC"),
      href: "/content-for-children",
    },
  ]

  return (
    <Container maxW={{ base: "100%", md: "7xl" }} pb={0}>
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
            h={{ base: "156px", md: "auto" }}
            minH={{ base: "156px", md: "auto" }}
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
            <LocalizedLink to={`.${videoData[0].href}`}>
              <Image
                h={{ base: "156px", md: "450px" }}
                minH={{ base: "156px", md: "450px" }}
                src={videoData[0].src}
                placeholder={videoData[0].placeholder}
              />
            </LocalizedLink>
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
              {videoData[0].label}
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
                <LocalizedLink to={`.${videoData[1].href}`}>
                  <Image
                    h="225px"
                    src={videoData[1].src}
                    placeholder={videoData[1].placeholder}
                  />
                </LocalizedLink>
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
                  {videoData[1].label}
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
                <LocalizedLink to={`.${videoData[2].href}`}>
                  <Image
                    h="225px"
                    w={{ base: "100%", md: "280px" }}
                    src={videoData[2].src}
                    placeholder={videoData[2].placeholder}
                  />
                </LocalizedLink>
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
                  {videoData[2].label}
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
              <LocalizedLink to={`.${videoData[3].href}`}>
                <Image
                  src={videoData[3].src}
                  placeholder={videoData[3].placeholder}
                />
              </LocalizedLink>
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
                {videoData[3].label}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CustomGrid
