import React from "react"
import { Box, Container, SimpleGrid, Text, Image } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import LocalizedLink from "../LocalizedLink"

import stat1 from "../../images/film-doc.jpeg"
import stat2 from "../../images/food.png"
import stat3 from "../../images/real-estate.png"
import stat4 from "../../images/yt.jpeg"

const CustomGrid = () => {
  const { t } = useTranslation()

  const cards = [
    {
      label: t("cardTitles.youtube"),
      src: stat4,
      href: "./youtube",
    },
    {
      label: t("cardTitles.wedding"),
      src: "https://fivastudio.b-cdn.net/Fiva%20studio%20Wedding%20gif%20for%20homepage.gif",
      href: "./wedding-videos",
    },
    {
      label: t("cardTitles.corporate"),
      src: "https://fivastudio.b-cdn.net/soko-skele.gif",
      href: "./corporate-videos",
    },
    {
      label: t("cardTitles.realestate"),
      src: stat3,
      href: "./real-estate",
    },
    {
      label: t("cardTitles.film"),
      src: stat1,
      href: "./film-videos",
    },
    {
      label: t("cardTitles.food"),
      src: stat2,
      href: "./food-and-hospitality",
    },
    {
      label: t("cardTitles.contentFC"),
      src: "https://fivastudio.b-cdn.net/Kids%20animation%202d%20Animation.gif",
      href: "./content-for-children",
    },
    {
      label: t("cardTitles.2dAnimations"),
      src: "https://fivastudio.b-cdn.net/2D%20character%20animation%20meme%20animation.gif",
      href: "./2d-animations",
    },
  ]

  return (
    <Container maxW="7xl" py={10}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={{ base: 4, md: 6 }}
      >
        {cards.map((item, index) => (
          <LocalizedLink key={index} to={item.href}>
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              h={{ base: "220px", md: "280px", lg: "300px" }}
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.02)" }}
              boxShadow="lg"
            >
              <Image
                src={item.src}
                alt={item.label}
                w="100%"
                h="100%"
                objectFit="cover"
              />

              <Box
                position="absolute"
                bottom={0}
                w="100%"
                py={3}
                px={2}
                bgGradient="linear(to-t, rgba(0,0,0,0.9), rgba(0,0,0,0.4))"
                backdropFilter="blur(2px)"
                textAlign="center"
              >
                <Text
                  fontSize={{ base: "md", md: "xl" }}
                  fontWeight="600"
                  color="white"
                  textShadow="0 2px 6px rgba(0,0,0,0.8)"
                >
                  {item.label}
                </Text>
              </Box>
            </Box>
          </LocalizedLink>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default CustomGrid
