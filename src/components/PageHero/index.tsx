import React from "react"
import { Box, Container, Heading, Stack, Text, Button } from "@chakra-ui/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { MdKeyboardArrowDown } from "react-icons/md"
import otherHero from "../../images/pageHero.webp"
import { useTranslation } from "react-i18next"

export const PageHero = ({ title, subtitle }: any) => {
  const { t } = useTranslation()

  return (
    <Box
      as="section"
      position="relative"
      backgroundImage={otherHero}
      backgroundPosition="center"
      backgroundSize={"cover"}
      backgroundRepeat="no-repeat"
      w="100%"
      py={{ base: 10, md: 9 }}
      minH={{ base: "auto", md: "60vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, .3)",
        zIndex: 1,
      }}
    >
      <Container
        w={{ base: "100%", md: "7xl" }}
        mt={20}
        position="relative"
        zIndex={2}
      >
        <Stack
          spacing={{ base: "4", md: "6" }}
          align="center"
          textAlign="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          borderRadius="24px"
          px={10}
          py={4}
        >
          <Stack spacing="3" pos="relative">
            <Heading
              as="h1"
              fontFamily={"PoppinsBlack"}
              size={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="white"
              p={2}
              borderRadius="md"
            >
              {title}
            </Heading>
          </Stack>
          <Text
            fontFamily={"PoppinsLight"}
            fontSize={{ base: "md", md: "xl" }}
            maxW="3xl"
            color="white"
            p={2}
            borderRadius="md"
          >
            {subtitle}
          </Text>
          <AnchorLink to="#text" stripHash>
            <Button
              size={{ base: "md", md: "lg" }}
              fontFamily="PoppinsLight"
              color="#fff"
              variant="ghost"
              rightIcon={<MdKeyboardArrowDown />}
              border="1px solid #fff"
              borderRadius="24px"
            >
              {t("pageHero.btn")}
            </Button>
          </AnchorLink>
        </Stack>
      </Container>
    </Box>
  )
}
