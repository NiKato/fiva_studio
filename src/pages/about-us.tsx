import React from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { MdKeyboardArrowDown } from "react-icons/md"

import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"
import LocalizedLink from "../components/LocalizedLink"
import ContactForm from "../components/ContactForm"
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()
  return (
  <>
    <Layout>
      <Box position="relative" height={{ base: "100vh", md: "60vh" }}>
        <StaticImage
          alt="Placeholder Image"
          src="../images/about.webp"
          objectFit="cover"
          objectPosition="center -140px"
          style={{
            filter: "blur(10px)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <Container
          maxW="container.xl"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <VStack textAlign="center" alignItems="center">
            <Heading
              w={{ base: "90%", md: "600px" }}
              size={{ base: "2xl", md: "3xl" }}
              fontFamily={"PoppinsBlack"}
              mb="8"
              color={useColorModeValue("#fff", "#fff")}
            >
              {t("aboutPage.title")}
            </Heading>
            <AnchorLink to="#about" stripHash>
              <MdKeyboardArrowDown color="#fff" size="40px" />
            </AnchorLink>
          </VStack>
        </Container>
      </Box>
      <Container maxW="container.xl" p={{ base: "4", md: "12" }}>
        <Heading as="h2" fontFamily={"PoppinsBlack"} pb={5}>
        {t("aboutPage.heading")}
        </Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          gap={10}
          id="about"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Image
                src={"https://fivastudio.b-cdn.net/hero.webp"}
                w={{ base: "100%", sm: "540px" }}
                filter="blur(10px)"
              />
            </Box>
            <Box
              zIndex="1"
              width="100%"
              position="absolute"
              top="-20px"
              height="100%"
            >
              <Box
                bgGradient={useColorModeValue(
                  "radial(#3377FF 2px, transparent 1px)",
                  "radial(#3377FF 2px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading
              marginTop="1"
              textDecoration="none"
              fontSize="4xl"
              _hover={{ textDecoration: "none" }}
              fontFamily={"PoppinsBlack"}
            >
               {t("aboutPage.heading2")}
            </Heading>
            <Text as="p" marginTop="2" fontSize="lg">
            {t("aboutPage.text")}
            </Text>
          </Box>
        </Box>

        <Divider marginTop="5" />

        <VStack paddingTop="40px" spacing={10} alignItems="flex-start">
          <Heading as="h2" fontFamily={"PoppinsBlack"}>
          {t("aboutPage.headingTitle")}
          </Heading>
          <Text as="p" fontSize="lg">
          {t("aboutPage.headingText")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("aboutPage.headingText2")}
          </Text>
          <Text as="p" fontSize="lg">
            {t("aboutPage.headingText3")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("aboutPage.headingText4")}
          </Text>
          <Text as="p" fontSize="lg">
          {t("aboutPage.headingText5")}
          </Text>
          <Text  as="p" fontSize="lg"> {t("aboutPage.headingText6")}</Text>
        </VStack>
        <ContactForm showBackground={false} />
      </Container>
    </Layout>
  </>
  )
}

export default About

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | About"
      description="team of experienced video editors"
    />
  )
}
