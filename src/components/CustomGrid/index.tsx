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
        h={{ base: "auto", md: "450px" }} // 👈 auto na mobile
        p={4}
        gap={4}
        color="white"
      >
        <Flex
          gap={4}
          h={{ base: "auto", md: "450px" }} // 👈 auto na mobile
          minH={{ base: "auto", md: "450px" }}
          w="100%"
          flexDir={{ base: "column", md: "row" }} // 👈 mobile = column
        >
          {/* Levi veliki box */}
          <Box
            w={{ base: "100%", md: "650px" }} // 👈 full width na mobile
            h={{ base: "200px", md: "auto" }} // 👈 smanji visinu na mobile
            minH={{ base: "200px", md: "auto" }}
            flex={1}
            bg="gray.700"
            borderRadius="2xl"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="flex-end"
            position="relative"
            overflow="hidden"
          >
            <LocalizedLink to={`.${videoData[0].href}`}>
              <Image
                w="100%" // 👈 full width
                h={{ base: "200px", md: "450px" }} // 👈 manja visina na mobile
                src={videoData[0].src}
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

          {/* Desna strana */}
          <Flex
            w={{ base: "100%", md: "650px" }}
            flexDir="column"
            gap={4}
            h="100%"
          >
            <HStack flexDir={{ base: "column", md: "row" }} gap={4}>
              {/* Box 2 */}
              <Box
                h={{ base: "200px", md: "225px" }}
                w="100%" // 👈 na mobile 100%
                flex={1}
                bg="gray.700"
                borderRadius="2xl"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="flex-end"
                position="relative"
                overflow="hidden"
              >
                <LocalizedLink to={`.${videoData[1].href}`}>
                  <Image w="100%" h="100%" src={videoData[1].src} />
                </LocalizedLink>
                <Text
                  pos="absolute"
                  bg="rgba(0,0,0,0.5)"
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

              {/* Box 3 */}
              <Box
                h={{ base: "200px", md: "225px" }}
                w="100%" // 👈 na mobile 100%
                flex={1}
                bg="gray.700"
                borderRadius="2xl"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="flex-end"
                position="relative"
                overflow="hidden"
              >
                <LocalizedLink to={`.${videoData[2].href}`}>
                  <Image w="100%" h="100%" src={videoData[2].src} />
                </LocalizedLink>
                <Text
                  pos="absolute"
                  bg="rgba(0,0,0,0.5)"
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

            {/* Box 4 */}
            <Box
              flex={1}
              w="100%"
              h={{ base: "200px", md: "auto" }}
              bg="gray.700"
              borderRadius="2xl"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="flex-end"
              position="relative"
              overflow="hidden"
            >
              <LocalizedLink to={`.${videoData[3].href}`}>
                <Image w="100%" h="100%" src={videoData[3].src} />
              </LocalizedLink>
              <Text
                pos="absolute"
                bg="rgba(0,0,0,0.5)"
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
